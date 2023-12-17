main.floors.MT3=
{
    "floorId": "MT3",
    "title": "主塔 3 层",
    "name": "第 3 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "bgm.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "1,12": [
            "\t[老人,man]不要多拿药瓶！",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "12,8": [
            "\t[老人,man]先攻怪物率先攻击勇士一次，当你和某种怪物战斗后，先攻2次。",
            {
                "type": "setValue",
                "name": "flag:v116_Chat",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "1,13": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "13,9": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "1,11": [
            {
                "type": "setValue",
                "name": "flag:v117_3FTrap",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "if",
                "condition": "(flag:v117_3FTrap===3)",
                "true": [
                    {
                        "type": "setBlock",
                        "number": "E382",
                        "loc": [
                            [
                                13,
                                10
                            ]
                        ]
                    }
                ]
            }
        ],
        "1,10": [
            {
                "type": "setValue",
                "name": "flag:v117_3FTrap",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "if",
                "condition": "(flag:v117_3FTrap===3)",
                "true": [
                    {
                        "type": "setBlock",
                        "number": "E382",
                        "loc": [
                            [
                                13,
                                10
                            ]
                        ]
                    }
                ]
            }
        ],
        "1,9": [
            {
                "type": "setValue",
                "name": "flag:v117_3FTrap",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "if",
                "condition": "(flag:v117_3FTrap===3)",
                "true": [
                    {
                        "type": "setBlock",
                        "number": "E382",
                        "loc": [
                            [
                                13,
                                10
                            ]
                        ]
                    }
                ]
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040,  1,  1,  1,  1,201,  1,  1,  1,  1,  1,  1,  1, 22,20042],
    [20040,  1, 34,  0,  1,  0,  0,377, 81,379, 27,  1,205,  0,20042],
    [20040,  1, 34,382, 81,381,  0,  1,  1,  1,  0,  1, 81,  1,20042],
    [20040,  1, 34,  0,  1,  0,202,202,  1, 28,382,  1,  0,205,20042],
    [20040,  1,  1,  1,  1,  1,  1,202,  1,  1,  1,  1,  1, 81,20042],
    [20040,203,201,203,  1, 31,  1,  0,382, 81,382, 81,382,  0,20042],
    [20040, 22,  1, 31, 81,380,  0,203, 27,  1, 28,  1,  1,  0,20042],
    [20040,  1,  1,  1,  1,  1,  1, 81,  1,  1,  1,  1,121,  0,20042],
    [20040, 31,  0,203,  0,202,  0,380,  0,  0,  0,  1,  1, 87,20042],
    [20040, 32,  1, 28,  1, 21,  1, 27,  1,201,201,201,  0,  0,20042],
    [20040, 34,  1,  1,  1, 21,  1,  1,  1,  0,  1,  1,  1,  1,20042],
    [20040,121,  1, 27,  1, 21,  1, 28,  1,  0,  1, 27, 27, 34,20042],
    [20040, 88,  0,380,  0,202,  0,203,  0,382, 81, 28, 28, 34,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}