main.floors.MTn86=
{
    "floorId": "MTn86",
    "title": "主塔 -86 层",
    "name": "第 -86 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "mtboss.mp3",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "setValue",
            "name": "item:freezeBadge",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:earthquake",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:pickaxe",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:icePickaxe",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:hammer",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:bomb",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:upFly",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:downFly",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:centerFly",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:dagger",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:jumpShoes",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:I333",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:I457",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:bigKey",
            "value": "0"
        },
        {
            "type": "tip",
            "text": "已丢失相关宝物。"
        }
    ],
    "parallelDo": "",
    "events": {
        "7,11": [
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    7,
                    12
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    7,
                    8
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            "\t[红衣魔王,redKing]\b[this,7,1]不容易啊，勇士，你竟然来送死了！",
            "\t[红衣魔王,redKing]\b[this,7,1]好了，弟兄们，上！",
            {
                "type": "setBlock",
                "number": "darkKnight",
                "loc": [
                    [
                        6,
                        9
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "darkKnight",
                "loc": [
                    [
                        8,
                        9
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "darkKnight",
                "loc": [
                    [
                        6,
                        11
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "darkKnight",
                "loc": [
                    [
                        8,
                        11
                    ]
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "7,7": [
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    7,
                    9
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    7,
                    4
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            "\t[红衣魔王,redKing]\b[this,7,1]你竟然闯过来了？可恶",
            "\t[hero]\b[hero]有本事你与我打斗，不要老是用兵团来削灭我的战斗力！",
            "\t[红衣魔王,redKing]\b[this,7,1]怕了？上吧，终级的士兵！",
            {
                "type": "setBlock",
                "number": "redGateKeeper",
                "loc": [
                    [
                        6,
                        5
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "redGateKeeper",
                "loc": [
                    [
                        8,
                        5
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "redGateKeeper",
                "loc": [
                    [
                        6,
                        7
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "redGateKeeper",
                "loc": [
                    [
                        8,
                        7
                    ]
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "7,0": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        }
    },
    "changeFloor": {
        "7,13": {
            "floorId": "MTn84",
            "loc": [
                7,
                13
            ]
        },
        "7,0": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {
        "7,1": [
            {
                "type": "pauseBgm"
            },
            "\t[红衣魔王,redKing]\b[this]无奈啊，我这么强的兵团也会败在你的上下……什么也不说了，战斗吧！"
        ]
    },
    "afterBattle": {
        "6,9": [
            {
                "type": "setValue",
                "name": "flag:Fm86_Door1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:Fm86_Door1===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    }
                ]
            }
        ],
        "8,9": [
            {
                "type": "setValue",
                "name": "flag:Fm86_Door1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:Fm86_Door1===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    }
                ]
            }
        ],
        "8,11": [
            {
                "type": "setValue",
                "name": "flag:Fm86_Door1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:Fm86_Door1===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    }
                ]
            }
        ],
        "6,11": [
            {
                "type": "setValue",
                "name": "flag:Fm86_Door1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:Fm86_Door1===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    }
                ]
            }
        ],
        "6,5": [
            {
                "type": "setValue",
                "name": "flag:Fm86_Door2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:Fm86_Door2===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            4
                        ]
                    }
                ]
            }
        ],
        "6,7": [
            {
                "type": "setValue",
                "name": "flag:Fm86_Door2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:Fm86_Door2===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            4
                        ]
                    }
                ]
            }
        ],
        "8,7": [
            {
                "type": "setValue",
                "name": "flag:Fm86_Door2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:Fm86_Door2===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            4
                        ]
                    }
                ]
            }
        ],
        "8,5": [
            {
                "type": "setValue",
                "name": "flag:Fm86_Door2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:Fm86_Door2===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            4
                        ]
                    }
                ]
            }
        ],
        "7,1": [
            "\t[红衣魔王,redKing]\b[this]不……不会的，你……我诅咒你……可恶……你是不得好死的……",
            "\t[hero]\b[hero]到了这里还诅咒我…………国王在哪里？",
            {
                "type": "resumeBgm",
                "resume": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        7,
                        0
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "superPotion",
                "loc": [
                    [
                        1,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowGem",
                "loc": [
                    [
                        2,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "blueGem",
                "loc": [
                    [
                        3,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "blueGem",
                "loc": [
                    [
                        3,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "redGem",
                "loc": [
                    [
                        4,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "redGem",
                "loc": [
                    [
                        5,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "superPotion",
                "loc": [
                    [
                        13,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowGem",
                "loc": [
                    [
                        12,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "blueGem",
                "loc": [
                    [
                        11,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "blueGem",
                "loc": [
                    [
                        11,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "redGem",
                "loc": [
                    [
                        10,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "redGem",
                "loc": [
                    [
                        9,
                        1
                    ]
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    7,
                    9
                ],
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    7,
                    12
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            }
        ]
    },
    "afterGetItem": {
        "4,6": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    100,
                    100,
                    100
                ]
            }
        ],
        "4,5": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    100,
                    100,
                    100
                ]
            }
        ],
        "10,5": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    100,
                    100,
                    100
                ]
            }
        ],
        "10,6": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    100,
                    100,
                    100
                ]
            }
        ],
        "3,5": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    10000
                ]
            }
        ],
        "3,4": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    10000
                ]
            }
        ],
        "11,4": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    10000
                ]
            }
        ],
        "11,5": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    10000
                ]
            }
        ],
        "6,3": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    40000
                ]
            }
        ],
        "8,3": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    40000
                ]
            }
        ],
        "5,3": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potionDouble"
                ]
            }
        ],
        "9,3": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potionDouble"
                ]
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,  0,20041,20041,20041,20041,20041,20041,20042],
    [20040,  0,  0,  0,  0,  0,  0,245,  0,  0,  0,  0,  0,  0,20042],
    [20040,20015,20015,  0,20015,20015,20015,  0,20015,20015,20015,  0,20015,20015,20042],
    [20040,614,20015,20015,20015,454,454,  0,454,454,20015,20015,20015,615,20042],
    [20040, 27,20015,454,20015,20015,20015,  0,20015,20015,20015,454,20015, 28,20042],
    [20040, 27,20015,454,455,20015,  0,  0,  0,20015,455,454,20015, 28,20042],
    [20040, 27,20015,20015,455,20015,  0,  0,  0,20015,455,20015,20015, 28,20042],
    [20040, 27,20015,20015,609,20015,  0,  0,  0,20015,609,20015,20015, 28,20042],
    [20040, 27,20015, 86, 86,20015,20015,  0,20015,20015, 86, 86,20015, 28,20042],
    [20040, 27,20015,608,20015,20015,  0,  0,  0,20015,20015,608,20015, 28,20042],
    [20040, 27,20015, 86, 86,20015,  0,  0,  0,20015, 86, 86,20015, 28,20042],
    [20040, 27,20015,20015,607,20015,  0,  0,  0,20015,607,20015,20015, 28,20042],
    [20040,460,20015,20015, 86,20015,20015,  0,20015,20015, 86,20015,20015,460,20042],
    [20040,  0,  0,  0,  0,  0,  0, 87,  0,  0,  0,  0,  0,  0,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "underGround": true,
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,140,  0,  0,  0,  0,  0,  0,  0],
    [  0,140,140,140,140,140,140,140,140,140,140,140,140,140,  0],
    [  0,140,140,140,140,140,140,140,140,140,140,140,140,140,  0],
    [  0,140,140,140,140,140,140,140,140,140,140,140,140,140,  0],
    [  0,140,140,140,140,140,140,140,140,140,140,140,140,140,  0],
    [  0,140,140,140,140,140,140,140,140,140,140,140,140,140,  0],
    [  0,140,140,140,140,140,140,140,140,140,140,140,140,140,  0],
    [  0,140,140,140,140,140,140,140,140,140,140,140,140,140,  0],
    [  0,140,140,140,140,140,140,140,140,140,140,140,140,140,  0],
    [  0,140,140,140,140,140,140,140,140,140,140,140,140,140,  0],
    [  0,140,140,140,140,140,140,140,140,140,140,140,140,140,  0],
    [  0,140,140,140,140,140,140,140,140,140,140,140,140,140,  0],
    [  0,140,140,140,140,140,140,140,140,140,140,140,140,140,  0],
    [  0,140,140,140,140,140,140,140,140,140,140,140,140,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [428,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,428],
    [429,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,429],
    [  0,616,616,  0,616,616,616,  0,616,616,616,  0,616,616,  0],
    [  0,  0,616,616,616,  0,  0,  0,  0,  0,616,616,616,  0,  0],
    [  0,  0,616,  0,616,616,616,  0,616,616,616,  0,616,  0,  0],
    [  0,  0,616,  0,  0,616,  0,  0,  0,616,  0,  0,616,  0,  0],
    [  0,  0,616,616,  0,616,  0,  0,  0,616,  0,616,616,  0,  0],
    [  0,  0,616,616,  0,616,  0,  0,  0,616,  0,616,616,  0,  0],
    [  0,  0,616,  0,  0,616,616,  0,616,616,  0,  0,616,  0,  0],
    [  0,  0,616,  0,616,616,  0,  0,  0,616,616,  0,616,  0,  0],
    [  0,  0,616,  0,  0,616,  0,  0,  0,616,  0,  0,616,  0,  0],
    [  0,  0,616,616,  0,616,  0,  0,  0,616,  0,616,616,  0,  0],
    [  0,  0,616,616,  0,616,616,  0,616,616,  0,616,616,  0,  0],
    [428,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,428],
    [429,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,429]
]
}