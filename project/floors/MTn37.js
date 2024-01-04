main.floors.MTn37=
{
    "floorId": "MTn37",
    "title": "主塔 -37 层",
    "name": "第 -37 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "CastleinSky.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "12,3": {
            "trigger": "action",
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "if",
                    "condition": "flag:s176_CrossingAdmit",
                    "true": [
                        "\t[冰十字架,I584]\b[this]为当前角色的攻击、防御、魔防提升10%！",
                        {
                            "type": "function",
                            "function": "function(){\n['atk', 'def', 'mdef'].forEach(prop => {\n\tcore.status.hero[prop] = Math.floor(core.status.hero[prop] * 1.1);\n});\ncore.updateStatusBar(true);\n}"
                        }
                    ],
                    "false": [
                        {
                            "type": "if",
                            "condition": "flag:VerboseHint",
                            "true": [
                                {
                                    "type": "confirm",
                                    "text": "似乎还未获得认可，确认要获取吗？",
                                    "yes": [],
                                    "no": [
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        },
                        "\t[冰十字架,I584]\b[this]你无法具有我！",
                        {
                            "type": "function",
                            "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.atk = Math.max(1, hero.atk - 1000);\n\thero.def = Math.max(1, hero.def - 1000);\n});\ncore.updateStatusBar(true);\n}"
                        },
                        {
                            "type": "animate",
                            "name": "A06",
                            "loc": "hero"
                        }
                    ]
                },
                {
                    "type": "hide",
                    "remove": true
                }
            ]
        },
        "7,11": [
            "\t[神秘老人,wizard]\b[this]右上的冰十字架具有神圣力量，你必须获得神圣的认可才能获得，不然你会死的很惨。@clue",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "2,7": [
            "\t[老人,man]\b[this]那个绿门连着一个隐藏层，但是打开绿门后就消失了。@clue",
            "\t[老人,man]\b[this]不过据说花费880元就可进去了。@clue",
            {
                "type": "choices",
                "text": "\t[流浪者,man]NPC提到了“花费880元就可进去”\n是否直接查看其含义？",
                "choices": [
                    {
                        "text": "不，我要自行解密",
                        "action": []
                    },
                    {
                        "text": "查看(H5专属选项)",
                        "color": [
                            192,
                            192,
                            192,
                            1
                        ],
                        "action": [
                            "\t[H5复刻作者]880金币=4把黄钥匙价格和4把红钥匙价格，\n因此把绿门周围的4黄门和4红门开启即可进入。"
                        ]
                    }
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "4,10": [
            {
                "type": "if",
                "condition": "(blockId:4,10===\"portal\")",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(3,4,'MTWorld',false)!=='portal')",
                        "true": [
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        9,
                                        8
                                    ]
                                ],
                                "floorId": "MTWorld"
                            }
                        ]
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "MTWorld",
                        "loc": [
                            9,
                            9
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                3,
                                4
                            ]
                        ],
                        "floorId": "MTWorld"
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "8,13": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "1,13": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "3,11": [
            {
                "type": "setValue",
                "name": "flag:v152_Fm37GreenDoor",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v152_Fm37GreenDoor===8)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(blockId:4,10===\"greenDoor2\")",
                        "true": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    4,
                                    10
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "portal",
                                "loc": [
                                    [
                                        4,
                                        10
                                    ]
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,11": [
            {
                "type": "setValue",
                "name": "flag:v152_Fm37GreenDoor",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v152_Fm37GreenDoor===8)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(blockId:4,10===\"greenDoor2\")",
                        "true": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    4,
                                    10
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "portal",
                                "loc": [
                                    [
                                        4,
                                        10
                                    ]
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,11": [
            {
                "type": "setValue",
                "name": "flag:v152_Fm37GreenDoor",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v152_Fm37GreenDoor===8)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(blockId:4,10===\"greenDoor2\")",
                        "true": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    4,
                                    10
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "portal",
                                "loc": [
                                    [
                                        4,
                                        10
                                    ]
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,10": [
            {
                "type": "setValue",
                "name": "flag:v152_Fm37GreenDoor",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v152_Fm37GreenDoor===8)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(blockId:4,10===\"greenDoor2\")",
                        "true": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    4,
                                    10
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "portal",
                                "loc": [
                                    [
                                        4,
                                        10
                                    ]
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "3,10": [
            {
                "type": "setValue",
                "name": "flag:v152_Fm37GreenDoor",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v152_Fm37GreenDoor===8)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(blockId:4,10===\"greenDoor2\")",
                        "true": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    4,
                                    10
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "portal",
                                "loc": [
                                    [
                                        4,
                                        10
                                    ]
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "3,9": [
            {
                "type": "setValue",
                "name": "flag:v152_Fm37GreenDoor",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v152_Fm37GreenDoor===8)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(blockId:4,10===\"greenDoor2\")",
                        "true": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    4,
                                    10
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "portal",
                                "loc": [
                                    [
                                        4,
                                        10
                                    ]
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,9": [
            {
                "type": "setValue",
                "name": "flag:v152_Fm37GreenDoor",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v152_Fm37GreenDoor===8)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(blockId:4,10===\"greenDoor2\")",
                        "true": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    4,
                                    10
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "portal",
                                "loc": [
                                    [
                                        4,
                                        10
                                    ]
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,9": [
            {
                "type": "setValue",
                "name": "flag:v152_Fm37GreenDoor",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v152_Fm37GreenDoor===8)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(blockId:4,10===\"greenDoor2\")",
                        "true": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    4,
                                    10
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "portal",
                                "loc": [
                                    [
                                        4,
                                        10
                                    ]
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040,  1,  1, 27, 27,450,450,450, 28, 28,  1,577,577,577,20042],
    [20040, 27,  1,  1,  1,  1,432,  1,  1,  1,  1,365,365,577,20042],
    [20040, 27,  1,562,431,562,  0,  0,434,578,578,578,584,577,20042],
    [20040,561,  1, 27,  1, 32,  1,  1,  1,  1,577,365,365,577,20042],
    [20040,  0,555,  0,  2,558,431,558,  0, 34,577,577,577,577,20042],
    [20040,555,  2,  2,  2,  2,  2,  2,  2,  0,556,430,556,  0,20042],
    [20040,  0,121,559,559,  0,430, 54,  2,  0,  0,  2,  0,556,20042],
    [20040,559,  5,  5,  5,  5,  5,562,  2,  2,430,  2,  2,430,20042],
    [20040,559,  5,430,432,430,  5,561,562,  0, 28,  2, 27,555,20042],
    [20040,559,  5,432,434,432,  5,  3,  3,  3,  3,  3,  0,  0,20042],
    [20040,  0,  5,430,432,430,  5,125,  0,  3,557,430,559,  0,20042],
    [20040,566,  5,  5,  5,  5,  5,  0,557,557,  0,  3,  3,559,20042],
    [20040, 88,  3,  3,  3,  3,  3,  3, 87,  3, 31,  3, 27, 27,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "underGround": true,
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [428,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,428],
    [429,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,429]
]
}