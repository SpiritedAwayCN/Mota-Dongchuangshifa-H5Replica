main.floors.MT35=
{
    "floorId": "MT35",
    "title": "主塔 35 层",
    "name": "第 35 层",
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
    "bgm": "060Slow03.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,1": [
            "\t[老人,man]\b[this]退化怪物战斗后，勇士攻、防减2点、3点@clue",
            "\t[老人,man]\b[this]神偷怪物战斗前，所持的4种血瓶数量减半，并夺走20%的金钱。@clue",
            "\t[老人,man]\b[this]这两种属性会变化的。@clue",
            "\t[H5复刻作者]本复刻版中，神偷怪物只会夺取金钱，而不再丢失背包中的血瓶。@clue",
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
        ],
        "3,7": {
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
            "data": [
                {
                    "type": "openShop",
                    "id": "F35TSWShop"
                },
                {
                    "type": "insert",
                    "name": "OtherShops",
                    "args": [
                        "TSWShop",
                        8
                    ]
                }
            ]
        },
        "7,0": [
            "\t[H5复刻作者]再次提示，游戏过程中可以随时\r[lime]按C键或通过背包\r呼出难度设置界面，可以在游戏中动态难度。",
            "\t[H5复刻作者]如果当前已生效的效果，\r[#FF60FF]违反了更高难度选项的要求\r，那么更高的难度选项将\r[#FF60FF]不再可用\r！",
            "\t[H5复刻作者]游戏通关时，会自动把难度重设为当前可能的最高难度。",
            "\t[H5复刻作者]关于难度系统的使用教程，“新手教程”有更消息的使用指导，可以在标题页面开始新游戏进入。"
        ]
    },
    "changeFloor": {
        "7,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "12,12": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "2,13": [
            {
                "type": "setValue",
                "name": "flag:v106_F35Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v106_F35Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    12
                                ]
                            }
                        ]
                    },
                    {
                        "case": "4",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    10
                                ]
                            }
                        ]
                    },
                    {
                        "case": "6",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    8
                                ]
                            }
                        ]
                    },
                    {
                        "case": "8",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    5
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,13": [
            {
                "type": "setValue",
                "name": "flag:v106_F35Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v106_F35Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    12
                                ]
                            }
                        ]
                    },
                    {
                        "case": "4",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    10
                                ]
                            }
                        ]
                    },
                    {
                        "case": "6",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    8
                                ]
                            }
                        ]
                    },
                    {
                        "case": "8",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    5
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "2,11": [
            {
                "type": "setValue",
                "name": "flag:v106_F35Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v106_F35Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    12
                                ]
                            }
                        ]
                    },
                    {
                        "case": "4",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    10
                                ]
                            }
                        ]
                    },
                    {
                        "case": "6",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    8
                                ]
                            }
                        ]
                    },
                    {
                        "case": "8",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    5
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
                "name": "flag:v106_F35Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v106_F35Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    12
                                ]
                            }
                        ]
                    },
                    {
                        "case": "4",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    10
                                ]
                            }
                        ]
                    },
                    {
                        "case": "6",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    8
                                ]
                            }
                        ]
                    },
                    {
                        "case": "8",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    5
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "2,9": [
            {
                "type": "setValue",
                "name": "flag:v106_F35Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v106_F35Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    12
                                ]
                            }
                        ]
                    },
                    {
                        "case": "4",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    10
                                ]
                            }
                        ]
                    },
                    {
                        "case": "6",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    8
                                ]
                            }
                        ]
                    },
                    {
                        "case": "8",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    5
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
                "name": "flag:v106_F35Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v106_F35Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    12
                                ]
                            }
                        ]
                    },
                    {
                        "case": "4",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    10
                                ]
                            }
                        ]
                    },
                    {
                        "case": "6",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    8
                                ]
                            }
                        ]
                    },
                    {
                        "case": "8",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    5
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "2,6": [
            {
                "type": "setValue",
                "name": "flag:v106_F35Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v106_F35Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    12
                                ]
                            }
                        ]
                    },
                    {
                        "case": "4",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    10
                                ]
                            }
                        ]
                    },
                    {
                        "case": "6",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    8
                                ]
                            }
                        ]
                    },
                    {
                        "case": "8",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    5
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,6": [
            {
                "type": "setValue",
                "name": "flag:v106_F35Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v106_F35Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    12
                                ]
                            }
                        ]
                    },
                    {
                        "case": "4",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    10
                                ]
                            }
                        ]
                    },
                    {
                        "case": "6",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    8
                                ]
                            }
                        ]
                    },
                    {
                        "case": "8",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    5
                                ]
                            }
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
    [20040,20041,20041,20041,20041,20041,20041,129,20041,20041,20041,20041,20041,20041,20042],
    [20040,  3,  3,  3,  3,  3,121, 88,  3,  0,  3,  3,  3,  3,20042],
    [20040,  3, 33, 39, 33,  3,  0,425,  3,  0,  3, 27, 28,  3,20042],
    [20040,  3, 27, 30, 28,  3,407,222,  3,212, 81, 27, 28,  3,20042],
    [20040,  3, 27, 34, 28,  3,406,244,  3,  0,  3, 27, 28,  3,20042],
    [20040,  3,  3, 85,  3,  3,410,226,  3,  0,  3,  3,  3,  3,20042],
    [20040,  3,215,  0,215,  3,  0,218,  3,426, 81,426,  0,  3,20042],
    [20040,  3,  0,131,  0,  3,  0,  0,  3,  3,  3,  0,426, 34,20042],
    [20040,  3,  3, 85,  3,  3,  0,  0,  0,222,  3,  3,  0,  3,20042],
    [20040,  3,246,  0,246,  3, 31,  3,  3,222, 34,  3,426, 34,20042],
    [20040,  3,  3, 85,  3,  3,226,  3,  0,222,  3,  3, 81,  3,20042],
    [20040,  3,426,  0,426,  3,226,  3,  0,  0,  0,  0,426,  0,20042],
    [20040,  3,  3, 85,  3,  3,222,  3,  3,  3,  3,  3, 87,  0,20042],
    [20040,  0,222,  0,222,  0, 31,  0,426,426,  0, 34,  0,  0,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}