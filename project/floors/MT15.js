main.floors.MT15=
{
    "floorId": "MT15",
    "title": "主塔 15 层",
    "name": "第 15 层",
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
        "5,3": [
            {
                "type": "openDoor"
            }
        ],
        "9,8": [
            {
                "type": "openDoor"
            }
        ],
        "10,11": [
            {
                "type": "openDoor"
            }
        ],
        "12,8": [
            {
                "type": "openDoor"
            }
        ],
        "11,1": [
            {
                "type": "if",
                "condition": "(flag:F15EnhanceShop<4)",
                "true": [
                    {
                        "type": "openShop",
                        "id": "F15EnhanceShop",
                        "open": true
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "3,13": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "10,4": [
            {
                "type": "setValue",
                "name": "flag:v132_F15Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v132_F15Door===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            3
                        ]
                    }
                ]
            }
        ],
        "12,4": [
            {
                "type": "setValue",
                "name": "flag:v132_F15Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v132_F15Door===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            3
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
    [20040, 88,  0,207,  0,  3,207,  0,207,  3,397,396,398,  3,20042],
    [20040,  0,  0,  3,207,  0,  0,  3,  0,  3,204,  0,204,  3,20042],
    [20040,221,  3,  3,  3,385,  3,  3,207,  3,  3, 85,  3,  3,20042],
    [20040, 32, 32,  3,216,216,216,  3,  0,207,213,  0,213, 27,20042],
    [20040,221,  3,  3,216,  3,216,  3,  3,  3,  3,  3,  3,210,20042],
    [20040,  0, 27,  0, 21,  3, 34,  0,  3,  0,  3, 33,  3,221,20042],
    [20040,  3, 81,  3,217,  3, 27, 34,207,  0,213, 33,  3,221,20042],
    [20040,  0, 21,  3,217,  3,217,  3,  3,385,  3,221,385,210,20042],
    [20040, 81,  3,  3,  0,  0,217,  0,221,  0,  0, 27,  3,  0,20042],
    [20040,  0, 21,  3,  3,210,  3,  3,  3,  3,  0,  0,210,210,20042],
    [20040,  3, 81,  3,210,210,  3, 27,204,  3,385,  3,  3,204,20042],
    [20040,  0,  0,  0,  0,  3,  3,  3, 81,  3,  0,  3, 31, 31,20042],
    [20040,  3,  0, 87,387,216,  0,216,  0,216,  0,204, 31,204,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}