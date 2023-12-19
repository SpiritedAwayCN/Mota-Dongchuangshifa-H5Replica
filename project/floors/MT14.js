main.floors.MT14=
{
    "floorId": "MT14",
    "title": "主塔 14 层",
    "name": "第 14 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "001Battle01.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "8,4": [
            {
                "type": "openDoor"
            }
        ],
        "8,10": [
            {
                "type": "openDoor"
            }
        ],
        "9,1": [
            {
                "type": "openDoor"
            },
            {
                "type": "setBlock",
                "number": "skeletonCaptain"
            }
        ],
        "1,2": [
            "\t[老人,man]\b[this]重击怪物攻击等于勇士血、防御、魔防之和。@clue",
            {
                "type": "if",
                "condition": "(flag:s150_UseMAG!==1)",
                "true": [
                    "\t[老人,man]\b[this]你还没有魔防很幸运。@clue"
                ]
            },
            {
                "type": "setValue",
                "name": "flag:v116_Chat",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "1,12": [
            "\t[老人,man]\b[this]注意到了么，这一层几乎对称。@clue",
            "\t[老人,man]\b[this]一般对称层的一些现实怪物在特殊手段下可变为别的东西。@clue",
            {
                "type": "setValue",
                "name": "flag:v116_Chat",
                "operator": "+=",
                "value": "1",
                "norefresh": true
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
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "9,1": [
            {
                "type": "if",
                "condition": "(blockId:9,13===\"skeletonCaptain\")",
                "true": [
                    {
                        "type": "setBlock",
                        "number": "I388",
                        "loc": [
                            [
                                9,
                                13
                            ]
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040, 87, 21,  0,  0,  3, 27, 27, 28,385,  3,  3,  3,  3,20042],
    [20040,121,  0,  3,  0,  3,  3, 81,  3,  3, 21,  0, 21,  3,20042],
    [20040,  3,216,  3,210,  0,  0,213,  0,  3,  0, 23,  0,  3,20042],
    [20040,  3,216,  3, 81,  3,  3,  3,385,  3, 21,  0, 21,  3,20042],
    [20040,  3, 81,  3,210, 21,  3, 27, 28,  3,  3, 81,  3,  3,20042],
    [20040,  3,  0, 34,  3,  0,  3,  3, 81,  3,  0,213,  3, 27,20042],
    [20040,  3,  3, 34,  3, 21, 34,  0,213,  0,  0,387, 81, 28,20042],
    [20040,  3,  0, 34,  3,  0,  3,  3, 81,  3,  0,213,  3, 27,20042],
    [20040,  3, 81,  3,210, 21,  3, 27, 28,  3,  3, 81,  3,  3,20042],
    [20040,  3,216,  3, 81,  3,  3,  3,385,  3, 21,  0, 21,  3,20042],
    [20040,  3,216,  3,210,  0,  0,213,  0,  3,  0, 23,  0,  3,20042],
    [20040,121,  0,  3,  0,  3,  3, 81,  3,  3, 21,  0, 21,  3,20042],
    [20040, 88, 21,  0,  0,  3, 27, 27, 28,211,  3,  3,  3,  3,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}