main.floors.MT42=
{
    "floorId": "MT42",
    "title": "主塔 42 层",
    "name": "第 42 层",
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
    "bgm": "mtboss.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,11": [
            {
                "type": "if",
                "condition": "(blockNumber:7,11===87)",
                "true": [
                    {
                        "type": "changeFloor",
                        "floorId": ":next",
                        "stair": "downFloor"
                    }
                ]
            }
        ],
        "7,1": {
            "trigger": "action",
            "enable": true,
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
            "data": [
                {
                    "type": "autoSave",
                    "removeLast": true
                },
                "\t[邪恶仙子,evilFairy]\b[this]哼哼，你死定的。",
                "\t[hero]\b[hero]......无语。",
                {
                    "type": "choices",
                    "text": "\t[邪恶仙子,evilFairy]你还有机会，做我的手下吧！",
                    "choices": [
                        {
                            "text": "好吧",
                            "action": [
                                {
                                    "type": "insert",
                                    "name": "结局处理",
                                    "args": [
                                        "结局7"
                                    ]
                                }
                            ]
                        },
                        {
                            "text": "不可能",
                            "action": []
                        },
                        {
                            "text": "避开判负选项(H5专属)",
                            "color": [
                                192,
                                192,
                                192,
                                1
                            ],
                            "action": [
                                "\t[hero]\b[hero]不可能"
                            ]
                        }
                    ]
                },
                {
                    "type": "choices",
                    "text": "\t[邪恶仙子,evilFairy]哼，你也是个怪物！为何和我们没有共同语言呢？",
                    "choices": [
                        {
                            "text": "又来了......",
                            "action": []
                        },
                        {
                            "text": "不可能",
                            "action": [
                                "\t[邪恶仙子,evilFairy]\b[this]好，愤怒到了极点，开始诅咒！",
                                {
                                    "type": "insert",
                                    "name": "结局处理",
                                    "args": [
                                        "结局4"
                                    ]
                                }
                            ]
                        },
                        {
                            "text": "避开判负选项(H5专属)",
                            "color": [
                                192,
                                192,
                                192,
                                1
                            ],
                            "action": [
                                "\t[hero]\b[hero]又来了......"
                            ]
                        }
                    ]
                },
                "\t[邪恶仙子,evilFairy]\b[this]你是打不过我的，来吧！",
                {
                    "type": "battle",
                    "id": "evilFairy"
                },
                "\t[邪恶仙子,evilFairy]\b[this]可恶，你将得到诅咒！怪物们！",
                "\t[中毒怪物]哈哈哈哈，战后费血20滴了！",
                "\t[衰弱怪物]哈哈哈哈，衰弱到60%了！",
                "\t[吸血怪物]哈哈哈哈，我可将血吸到我本身了！",
                "\t[反击怪物]哈哈哈哈，反击你20%！",
                "\t[退化怪物]哈哈哈哈，你攻防将退化到3，5！",
                "\t[神偷怪物]哈哈哈哈，我见拿走你50%的金币！",
                "\t[邪恶仙子,evilFairy]\b[this]哈哈哈哈，你将得到诅咒！",
                {
                    "type": "function",
                    "function": "function(){\nif (core.hasFlag('weak')) {\n\tcore.addBuff(\"atk\", core.values.weakValue - 0.4);\n\tcore.addBuff(\"def\", core.values.weakValue - 0.4);\n}\n\ncore.values.poisonDamage = 20;\ncore.values.weakValue = 0.4;\ncore.values.counterAttack = 0.2;\ncore.values.vampireGlobalAdd = true;\ncore.values.degradeAtk = 3;\ncore.values.degradeDef = 5;\ncore.values.godThief = 0.5;\n\ncore.decreaseStatusWithBuffer(\"atk\", Math.ceil(core.status.hero.atk * 0.5));\ncore.decreaseStatusWithBuffer(\"def\", Math.ceil(core.status.hero.def * 0.5));\ncore.decreaseStatusWithBuffer(\"mdef\", Math.ceil(core.status.hero.mdef * 0.5));\n}"
                },
                {
                    "type": "animate",
                    "name": "A08",
                    "loc": "hero",
                    "async": true
                },
                {
                    "type": "setValue",
                    "name": "flag:s76_F42Boss",
                    "value": "1"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            5,
                            2
                        ]
                    ],
                    "floorId": "MT32"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            5,
                            3
                        ]
                    ],
                    "floorId": "MT32"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            5,
                            4
                        ]
                    ],
                    "floorId": "MT32"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            5,
                            5
                        ]
                    ],
                    "floorId": "MT32"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            5,
                            6
                        ]
                    ],
                    "floorId": "MT32"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            6,
                            6
                        ]
                    ],
                    "floorId": "MT32"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            6,
                            7
                        ]
                    ],
                    "floorId": "MT32"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            7,
                            7
                        ]
                    ],
                    "floorId": "MT32"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            8,
                            7
                        ]
                    ],
                    "floorId": "MT32"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            8,
                            6
                        ]
                    ],
                    "floorId": "MT32"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            9,
                            6
                        ]
                    ],
                    "floorId": "MT32"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            9,
                            5
                        ]
                    ],
                    "floorId": "MT32"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            9,
                            4
                        ]
                    ],
                    "floorId": "MT32"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            9,
                            3
                        ]
                    ],
                    "floorId": "MT32"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            9,
                            2
                        ]
                    ],
                    "floorId": "MT32"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            8,
                            2
                        ]
                    ],
                    "floorId": "MT32"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            7,
                            2
                        ]
                    ],
                    "floorId": "MT32"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            6,
                            2
                        ]
                    ],
                    "floorId": "MT32"
                },
                {
                    "type": "disableShop",
                    "id": "F29SuperShop"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            6,
                            3
                        ]
                    ],
                    "floorId": "MT29"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            5,
                            4
                        ]
                    ],
                    "floorId": "MT29"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            4,
                            5
                        ]
                    ],
                    "floorId": "MT29"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            5,
                            6
                        ]
                    ],
                    "floorId": "MT29"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            6,
                            7
                        ]
                    ],
                    "floorId": "MT29"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            7,
                            6
                        ]
                    ],
                    "floorId": "MT29"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            8,
                            5
                        ]
                    ],
                    "floorId": "MT29"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            7,
                            4
                        ]
                    ],
                    "floorId": "MT29"
                },
                {
                    "type": "disableShop",
                    "id": "F25IncrementalShop"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            3,
                            1
                        ]
                    ],
                    "floorId": "MT25"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            5,
                            2
                        ]
                    ],
                    "floorId": "MT25"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            5,
                            3
                        ]
                    ],
                    "floorId": "MT25"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            5,
                            4
                        ]
                    ],
                    "floorId": "MT25"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            4,
                            5
                        ]
                    ],
                    "floorId": "MT25"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            3,
                            6
                        ]
                    ],
                    "floorId": "MT25"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            2,
                            5
                        ]
                    ],
                    "floorId": "MT25"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            3,
                            4
                        ]
                    ],
                    "floorId": "MT25"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            3,
                            4
                        ]
                    ],
                    "floorId": "MT22"
                },
                {
                    "type": "disableShop",
                    "id": "GoldShop9F"
                },
                {
                    "type": "disableShop",
                    "id": "GoldShop9F2"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            8,
                            3
                        ]
                    ],
                    "floorId": "MT9"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            7,
                            4
                        ]
                    ],
                    "floorId": "MT9"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            8,
                            5
                        ]
                    ],
                    "floorId": "MT9"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            9,
                            4
                        ]
                    ],
                    "floorId": "MT9"
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            10,
                            12
                        ]
                    ],
                    "floorId": "MT9",
                    "remove": true
                },
                {
                    "type": "disableShop",
                    "id": "Expshop7F"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            12,
                            3
                        ]
                    ],
                    "floorId": "MT7"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            12,
                            4
                        ]
                    ],
                    "floorId": "MT7"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            13,
                            5
                        ]
                    ],
                    "floorId": "MT7"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            12,
                            6
                        ]
                    ],
                    "floorId": "MT7"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            11,
                            6
                        ]
                    ],
                    "floorId": "MT7"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            10,
                            5
                        ]
                    ],
                    "floorId": "MT7"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            9,
                            4
                        ]
                    ],
                    "floorId": "MT7"
                },
                {
                    "type": "setBlock",
                    "number": "X20022",
                    "loc": [
                        [
                            10,
                            3
                        ]
                    ],
                    "floorId": "MT7"
                },
                {
                    "type": "openDoor",
                    "loc": [
                        7,
                        4
                    ],
                    "async": true
                },
                {
                    "type": "openDoor",
                    "loc": [
                        7,
                        5
                    ],
                    "async": true
                },
                {
                    "type": "openDoor",
                    "loc": [
                        7,
                        6
                    ],
                    "async": true
                },
                {
                    "type": "setBlock",
                    "number": "blueGem",
                    "loc": [
                        [
                            4,
                            4
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "blueGem",
                    "loc": [
                        [
                            2,
                            6
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "blueGem",
                    "loc": [
                        [
                            10,
                            4
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "blueGem",
                    "loc": [
                        [
                            12,
                            6
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "redGem",
                    "loc": [
                        [
                            2,
                            5
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "redGem",
                    "loc": [
                        [
                            3,
                            5
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "redGem",
                    "loc": [
                        [
                            5,
                            5
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "redGem",
                    "loc": [
                        [
                            9,
                            5
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "redGem",
                    "loc": [
                        [
                            11,
                            5
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "redGem",
                    "loc": [
                        [
                            12,
                            5
                        ]
                    ]
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            7,
                            3
                        ]
                    ],
                    "floorId": "MTn2",
                    "remove": true
                },
                {
                    "type": "setBlock",
                    "number": "upFloor",
                    "loc": [
                        [
                            7,
                            11
                        ]
                    ]
                },
                {
                    "type": "waitAsync"
                },
                {
                    "type": "setValue",
                    "name": "flag:F25IncrementalShop",
                    "value": "0"
                },
                {
                    "type": "setValue",
                    "name": "flag:Expshop7F",
                    "value": "0"
                },
                {
                    "type": "hide",
                    "remove": true
                }
            ]
        },
        "6,3": [
            {
                "type": "function",
                "function": "function(){\ncore.decreaseStatusWithBuffer(\"atk\", 10);\ncore.decreaseStatusWithBuffer(\"def\", 10);\n}"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "8,3": [
            {
                "type": "function",
                "function": "function(){\ncore.decreaseStatusWithBuffer(\"atk\", 10);\ncore.decreaseStatusWithBuffer(\"def\", 10);\n}"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "7,14": [
            {
                "type": "confirm",
                "text": "是否查看本层Boss相关提示？(复刻专属)",
                "yes": [
                    "\t[H5复刻作者]击败本层boss后，当前角色能力值除以2，0~42F所有能力商店将被禁用，且部分敌方特殊属性效果加强，同时-2F的墙将打开供通行。",
                    "\t[H5复刻作者]可以直接击杀，此外：低难度下，能力除以2可以通过衰弱避免；部分难度设置下，可以考虑让另一名角色吃debuff。"
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "7,13": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040, 27, 27,  3,  3,  3,  0,252,  0,  3,  3,  3, 27, 27,20042],
    [20040,  3,256,  3,  3,  3,214,  3,214,  3,  3,  3,256,  3,20042],
    [20040,  3,256,  3,  0,248, 90,  0, 90,248,  0,  3,256,  3,20042],
    [20040,  3,256,  3,  0,  3,  3,  3,  3,  3,  0,  3,256,  3,20042],
    [20040,  3,  0,  0,248,  0,  3,  3,  3,  0,248,  0,  0,  3,20042],
    [20040,  3,  0,  3,  3,427,  3,  3,  3,427,  3,  3,  0,  3,20042],
    [20040, 29,248,  0,426,250,426,  0,426,250,426,  0,248, 29,20042],
    [20040,  3,  3,  3,  3,  3,  3,256,  3,  3,  3,  3,  3,  3,20042],
    [20040,  3,  0,  0,214,  0,  3,  0,  3,  0,214,  0,  0,  3,20042],
    [20040,  3,212,  3,  3,248,248,  0,248,248,  3,  3,214,  3,20042],
    [20040,  3,  0,  3,  3,  3,  3,  3,  3,  3,  3,  3,  0,  3,20042],
    [20040, 31,212, 13,226,  0,218,226,218,  0,226, 13,212, 31,20042],
    [20040,  3, 31,  3,  3,  3,  3, 88,  3,  3,  3,  3, 31,  3,20042],
    [20048,20049,20049,20049,20049,20049,20049,129,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}