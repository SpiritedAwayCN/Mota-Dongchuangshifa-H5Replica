main.floors.MTn11=
{
    "floorId": "MTn11",
    "title": "主塔 -11 层",
    "name": "第 -11 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "guitar.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,2": [
            "\t[老人,man]\b[this]开启一个机关可能与上下2层有关。@clue",
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
        "13,13": {
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
                    "type": "if",
                    "condition": "(blockId:13,13===\"T458\")",
                    "true": [
                        {
                            "type": "playSound",
                            "name": "029-Door06.mp3"
                        },
                        {
                            "type": "show",
                            "loc": [
                                [
                                    16,
                                    4
                                ]
                            ],
                            "floorId": "MTWorld"
                        },
                        {
                            "type": "setBlock",
                            "number": "T459"
                        },
                        "\t[开关]\b[this]你踩到了一个机关。",
                        {
                            "type": "if",
                            "condition": "flag:VerboseHint",
                            "true": [
                                "\t[H5复刻作者]提示：新的隐藏层已开放，请前往\"魔塔世界\""
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "7,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "1,13": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,5": [
            {
                "type": "setValue",
                "name": "flag:v142_Fm11mid",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v142_Fm11mid",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    7,
                                    6
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
                                    7,
                                    9
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,5": [
            {
                "type": "setValue",
                "name": "flag:v142_Fm11mid",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v142_Fm11mid",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    7,
                                    6
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
                                    7,
                                    9
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,8": [
            {
                "type": "setValue",
                "name": "flag:v142_Fm11mid",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v142_Fm11mid",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    7,
                                    6
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
                                    7,
                                    9
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,8": [
            {
                "type": "setValue",
                "name": "flag:v142_Fm11mid",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v142_Fm11mid",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    7,
                                    6
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
                                    7,
                                    9
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "2,12": [
            {
                "type": "setValue",
                "name": "flag:v143_Fm11left",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v143_Fm11left",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    11
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
                                    8
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
                                    5
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,12": [
            {
                "type": "setValue",
                "name": "flag:v143_Fm11left",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v143_Fm11left",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    11
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
                                    8
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
                "name": "flag:v143_Fm11left",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v143_Fm11left",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    11
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
                                    8
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
                "name": "flag:v143_Fm11left",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v143_Fm11left",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    11
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
                                    8
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
                "name": "flag:v143_Fm11left",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v143_Fm11left",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    11
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
                                    8
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
                "name": "flag:v143_Fm11left",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v143_Fm11left",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    11
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
                                    8
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
                                    5
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,12": [
            {
                "type": "setValue",
                "name": "flag:v144_Fm11right",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v144_Fm11right",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    11
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
                                    11,
                                    8
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
                                    11,
                                    5
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,12": [
            {
                "type": "setValue",
                "name": "flag:v144_Fm11right",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v144_Fm11right",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    11
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
                                    11,
                                    8
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
                                    11,
                                    5
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,9": [
            {
                "type": "setValue",
                "name": "flag:v144_Fm11right",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v144_Fm11right",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    11
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
                                    11,
                                    8
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
                                    11,
                                    5
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,9": [
            {
                "type": "setValue",
                "name": "flag:v144_Fm11right",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v144_Fm11right",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    11
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
                                    11,
                                    8
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
                                    11,
                                    5
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,6": [
            {
                "type": "setValue",
                "name": "flag:v144_Fm11right",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v144_Fm11right",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    11
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
                                    11,
                                    8
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
                                    11,
                                    5
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,6": [
            {
                "type": "setValue",
                "name": "flag:v144_Fm11right",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v144_Fm11right",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    11
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
                                    11,
                                    8
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
                                    11,
                                    5
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {
        "2,2": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    1234
                ]
            }
        ],
        "3,2": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    1234
                ]
            }
        ],
        "4,2": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    1234
                ]
            }
        ],
        "10,2": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    1234
                ]
            }
        ],
        "11,2": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    1234
                ]
            }
        ],
        "12,2": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    1234
                ]
            }
        ],
        "2,3": [
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
        "3,3": [
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
        "4,3": [
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
        "10,3": [
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
        "11,3": [
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
        "12,3": [
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
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040,  1,  1,  1,  1,  1, 33, 87, 33,  2,  2,  2,  2,  2,20042],
    [20040,  1,454,454,454,  1,  0,121,  0,  2,454,454,454,  2,20042],
    [20040,  1,455,455,455,  1,  3,  0,  3,  2,455,455,455,  2,20042],
    [20040,  1, 21, 21, 21,  1,  3,  0,  3,  2, 21, 21, 21,  2,20042],
    [20040,  1,  1, 85,  1,  1,244,  0,244,  2,  2, 85,  2,  2,20042],
    [20040,  1,254,  0,254,  1,  3, 85,  3,  2,254,  0,254,  2,20042],
    [20040,  1,  1,  0,  1,  1,  3,  0,  3,  2,  2,  0,  2,  2,20042],
    [20040,  1,  1, 85,  1,  1,218,  0,218,  2,  2, 85,  2,  2,20042],
    [20040,  1,439,  0,439,  1,  3, 85,  3,  2,439,  0,439,  2,20042],
    [20040,  1, 29,  0, 29,  1,  3,  0,  3,  2, 29,  0, 29,  2,20042],
    [20040,  1,  1, 85,  1,  1,  0,  0,  0,  2,  2, 85,  2,  2,20042],
    [20040, 31,218,  0,218,  0,  0,  0,  0,  0,218,  0,218, 31,20042],
    [20040, 88,  0,  0,  0,  0,  3, 31,  3,  0,  0,  0,  0,458,20042],
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [428,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,428],
    [429,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,429]
],
    "underGround": true
}