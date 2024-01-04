main.floors.MTn84=
{
    "floorId": "MTn84",
    "title": "主塔 -84 层",
    "name": "第 -84 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "xxmt0F.mp3",
    "firstArrive": [
        "\t[邪恶的声音]……",
        "\t[hero]\b[hero]？？？",
        "\t[邪恶的声音]……",
        "\t[hero]\b[hero]？？？",
        "\t[邪恶的声音]你完了！",
        {
            "type": "setBlock",
            "number": "Ice",
            "loc": [
                [
                    4,
                    1
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "Ice",
            "loc": [
                [
                    5,
                    1
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "Ice",
            "loc": [
                [
                    5,
                    2
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "Ice",
            "loc": [
                [
                    6,
                    2
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "Ice",
            "loc": [
                [
                    6,
                    3
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "Ice",
            "loc": [
                [
                    6,
                    4
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "Ice",
            "loc": [
                [
                    6,
                    5
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "Ice",
            "loc": [
                [
                    6,
                    6
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "Ice",
            "loc": [
                [
                    10,
                    1
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "Ice",
            "loc": [
                [
                    9,
                    1
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "Ice",
            "loc": [
                [
                    9,
                    2
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "Ice",
            "loc": [
                [
                    8,
                    2
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "Ice",
            "loc": [
                [
                    8,
                    3
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "Ice",
            "loc": [
                [
                    8,
                    4
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "Ice",
            "loc": [
                [
                    8,
                    5
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "Ice",
            "loc": [
                [
                    8,
                    6
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "blademaster",
            "loc": [
                [
                    7,
                    4
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "blademaster",
            "loc": [
                [
                    7,
                    5
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "blademaster",
            "loc": [
                [
                    7,
                    6
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "A461",
            "loc": [
                [
                    7,
                    3
                ]
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,7": [
            "\t[老人,man]\b[this]到-86F，你会丢失飞羽物品，穿毹鞋，大面积物品，销怪物品，破墙物品等，所以尽量卖掉这些东西。@clue",
            "\t[老人,man]\b[this]还有，你无法正常到-85层！所以如果你要下楼的话就死定了！@clue",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "7,13": [
            {
                "type": "if",
                "condition": "(flag:VerboseHint===1)",
                "true": [
                    {
                        "type": "confirm",
                        "text": "此处下楼会直接前往-86F，\n将丢失大部分功能性宝物，是否下楼？",
                        "yes": [],
                        "no": [
                            {
                                "type": "exit"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "changeFloor",
                "floorId": "MTn86",
                "stair": "upFloor"
            }
        ]
    },
    "changeFloor": {
        "7,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "8,9": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    6,
                    6,
                    6
                ]
            }
        ],
        "8,10": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    6,
                    6,
                    6
                ]
            }
        ],
        "8,12": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    6,
                    6,
                    6
                ]
            }
        ],
        "8,13": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    6,
                    6,
                    6
                ]
            }
        ],
        "6,9": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    9999
                ]
            }
        ],
        "6,10": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    9999
                ]
            }
        ],
        "6,12": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    9999
                ]
            }
        ],
        "6,13": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    9999
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
    [20040,  2,  2,  2,  0,  0,  0, 87,  0,  0,  0,  2,  2,  2,20042],
    [20040,  2, 33,  2,  0,  0,  0,  0,  0,  0,  0,  2, 33,  2,20042],
    [20040,  2, 33,  2, 34,  0,  0,  0,  0,  0, 34,  2, 33,  2,20042],
    [20040,  2, 86,  2,  2,  0,  0,  0,  0,  0,  2,  2, 86,  2,20042],
    [20040,  2, 86,  2, 34,  0,  0,  0,  0,  0, 34,  2, 86,  2,20042],
    [20040, 28, 28, 28,  0,  0,  0,  0,  0,  0,  0, 28, 28, 28,20042],
    [20040,  2,  2,  2,  2,  0,  0,121,  0,  0,  2,  2,  2,  2,20042],
    [20040,  2, 27, 27, 27,599,  0,  2,  0,599, 27, 27, 27,  2,20042],
    [20040,20007,20007,20007,20007,20007,454,  2,455,20007,20007,20007,20007,20007,20042],
    [20040, 33, 34, 28, 27,20007,454,  2,455,20007, 27, 28, 34, 33,20042],
    [20040, 33, 34, 28, 27,599,  0,  2,  0,599, 27, 28, 34, 33,20042],
    [20040, 33, 34, 28, 27,20007,454,  0,455,20007, 27, 28, 34, 33,20042],
    [20040,  2,  2,  2,  2,20007,454, 88,455,20007,  2,  2,  2,  2,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [
    [428,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,428],
    [429,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,429],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,616,616,616,616,616,  0,  0,  0,616,616,616,616,616,  0],
    [  0,  0,  0,  0,  0,616,  0,  0,  0,616,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,616,  0,  0,  0,616,  0,  0,  0,  0,  0],
    [428,  0,  0,  0,  0,616,  0,  0,  0,616,  0,  0,  0,  0,428],
    [429,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,429]
],
    "underGround": true,
    "pitch": 50
}