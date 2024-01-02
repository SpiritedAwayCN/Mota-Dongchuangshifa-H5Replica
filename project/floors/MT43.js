main.floors.MT43=
{
    "floorId": "MT43",
    "title": "主塔 43 层",
    "name": "第 43 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "045Positive03.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,7": [
            "\t[商人,trader]\b[this]在8层有个商店。@clue",
            "\t[商人,trader]\b[this]在最左上角，有一个怪物，PK后，右上怪物会变成老人。@clue",
            {
                "type": "show",
                "loc": [
                    [
                        8,
                        6
                    ]
                ],
                "floorId": "MT8"
            },
            {
                "type": "setBlock",
                "number": "blueShopLeft",
                "loc": [
                    [
                        7,
                        6
                    ]
                ],
                "floorId": "MT8"
            },
            {
                "type": "setBlock",
                "number": "blueShopRight",
                "loc": [
                    [
                        9,
                        6
                    ]
                ],
                "floorId": "MT8"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "2,11": [
            {
                "type": "openDoor"
            }
        ],
        "12,11": [
            {
                "type": "openDoor"
            }
        ],
        "12,1": [
            {
                "type": "openDoor"
            }
        ],
        "2,1": [
            {
                "type": "openDoor"
            }
        ],
        "1,1": [
            {
                "type": "openDoor"
            },
            {
                "type": "setBlock",
                "number": "redKnight"
            }
        ],
        "13,1": [
            "\t[老人,man]\b[this]一个通行证。",
            {
                "type": "setValue",
                "name": "item:I436",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "7,12": [
            {
                "type": "confirm",
                "text": "本层上下楼梯周围的墙不可被破墙工具破坏\n是否查看推荐上楼方案？",
                "yes": [
                    "\t[H5复刻作者]推荐使用\\i[jumpShoes]穿毹鞋、\\i[upFly]升飞羽等。\n不同难度有不同的最优选择。"
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "7,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "7,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "1,1": [
            {
                "type": "if",
                "condition": "(blockId:13,1===\"redKnight\")",
                "true": [
                    {
                        "type": "setBlock",
                        "number": "man",
                        "loc": [
                            [
                                13,
                                1
                            ]
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {
        "8,11": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    1,
                    1,
                    2
                ]
            }
        ],
        "6,11": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    1000
                ]
            }
        ],
        "5,13": [
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    12
                ]
            }
        ],
        "9,13": [
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    8,
                    12
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
    [20040,383,383,  1,  1,20006,20006, 87,20006,  1,  1,  1,383,227,20042],
    [20040,  1, 27, 27, 27,20006,20006,  0,20006,20006, 27, 27, 27,  1,20042],
    [20040,  1,427,427,427,20006,20006,20006,20006,20006,427,427,427,  1,20042],
    [20040,  1,254,  0,254,  1,254,  0,254,  1,254,  0,254,  1,20042],
    [20040,  1,  1, 81,  1,  1,  1,  0,  1,  1,  1, 81,  1,  1,20042],
    [20040, 28,  1,239, 81,435, 81,  0, 81,435, 81,239,  1, 28,20042],
    [20040, 28,239, 32,  1, 32,  1,122,  1, 32,  1, 32,239, 28,20042],
    [20040,  1,  1,  1,  1,  1,  1, 81,  1,  1,  1,  1,  1,  1,20042],
    [20040,227,  0, 81, 33,237,237,  0,237,237, 33, 81,  0,227,20042],
    [20040, 27,  1,  1,505,20006,20006,162,20006,20006,505,  1,  1, 27,20042],
    [20040, 28,383, 27, 27,20006,454, 88,455,20006, 28, 28,383, 28,20042],
    [20040, 30,20006,20006,20006,20006, 85,129, 85,20006,20006,20006,20006, 30,20042],
    [20040, 29,227, 33, 34, 31, 32,20006, 32, 31, 34, 33,227, 29,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}