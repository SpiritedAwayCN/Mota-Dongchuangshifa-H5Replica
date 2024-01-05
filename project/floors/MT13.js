main.floors.MT13=
{
    "floorId": "MT13",
    "title": "主塔 13 层",
    "name": "第 13 层",
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
        "3,3": [
            {
                "type": "choices",
                "text": "\t[杰克,thief]谢谢你救了我！我被困在这很久了！\n我偷来了五颗宝石，你要哪一种？",
                "choices": [
                    {
                        "text": "红宝石(x5)",
                        "icon": "redGem",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "item:redGem",
                                "operator": "+=",
                                "value": "5"
                            }
                        ]
                    },
                    {
                        "text": "蓝宝石(x5)",
                        "icon": "blueGem",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "item:blueGem",
                                "operator": "+=",
                                "value": "5"
                            }
                        ]
                    }
                ]
            },
            "\t[杰克,thief]\b[this]祝你好运，我继续去探宝了，88！",
            {
                "type": "hide",
                "remove": true
            },
            {
                "type": "setValue",
                "name": "item:pickaxe",
                "operator": "+=",
                "value": "1"
            },
            "\t[H5复刻作者]原作与杰克对话后，还会获得一把\\i[pickaxe]破墙镐，已存入背包！",
            {
                "type": "setValue",
                "name": "flag:s59_F12Imported",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:s68_F13RescuedThief",
                "value": "1"
            },
            {
                "type": "show",
                "loc": [
                    [
                        10,
                        2
                    ]
                ],
                "floorId": "MT12"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        10,
                        8
                    ]
                ],
                "floorId": "MT30",
                "remove": true
            },
            {
                "type": "if",
                "condition": "flag:VerboseHint",
                "true": [
                    "\t[H5复刻作者]此外，12F钥匙商店已完成进货，请留意。\n如果之前没有买完，会亏购买次数。",
                    "\t[H5复刻作者]已营救杰克，30F暗道已开启！"
                ]
            }
        ]
    },
    "changeFloor": {
        "8,2": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,13": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "10,2": [
            {
                "type": "setValue",
                "name": "flag:v131_F13Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v131_F13Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    3
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
                                    5
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
                                    10,
                                    7
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
                                    8,
                                    9
                                ]
                            }
                        ]
                    },
                    {
                        "case": "10",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    9,
                                    11
                                ]
                            }
                        ]
                    },
                    {
                        "case": "12",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    11
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,2": [
            {
                "type": "setValue",
                "name": "flag:v131_F13Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v131_F13Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    3
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
                                    5
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
                                    10,
                                    7
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
                                    8,
                                    9
                                ]
                            }
                        ]
                    },
                    {
                        "case": "10",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    9,
                                    11
                                ]
                            }
                        ]
                    },
                    {
                        "case": "12",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    11
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
                "name": "flag:v131_F13Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v131_F13Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    3
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
                                    5
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
                                    10,
                                    7
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
                                    8,
                                    9
                                ]
                            }
                        ]
                    },
                    {
                        "case": "10",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    9,
                                    11
                                ]
                            }
                        ]
                    },
                    {
                        "case": "12",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    11
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,4": [
            {
                "type": "setValue",
                "name": "flag:v131_F13Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v131_F13Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    3
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
                                    5
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
                                    10,
                                    7
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
                                    8,
                                    9
                                ]
                            }
                        ]
                    },
                    {
                        "case": "10",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    9,
                                    11
                                ]
                            }
                        ]
                    },
                    {
                        "case": "12",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    11
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,4": [
            {
                "type": "setValue",
                "name": "flag:v131_F13Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v131_F13Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    3
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
                                    5
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
                                    10,
                                    7
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
                                    8,
                                    9
                                ]
                            }
                        ]
                    },
                    {
                        "case": "10",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    9,
                                    11
                                ]
                            }
                        ]
                    },
                    {
                        "case": "12",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    11
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "11,8": [
            {
                "type": "setValue",
                "name": "flag:v131_F13Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v131_F13Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    3
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
                                    5
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
                                    10,
                                    7
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
                                    8,
                                    9
                                ]
                            }
                        ]
                    },
                    {
                        "case": "10",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    9,
                                    11
                                ]
                            }
                        ]
                    },
                    {
                        "case": "12",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    11
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,8": [
            {
                "type": "setValue",
                "name": "flag:v131_F13Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v131_F13Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    3
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
                                    5
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
                                    10,
                                    7
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
                                    8,
                                    9
                                ]
                            }
                        ]
                    },
                    {
                        "case": "10",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    9,
                                    11
                                ]
                            }
                        ]
                    },
                    {
                        "case": "12",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    11
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:v131_F13Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v131_F13Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    3
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
                                    5
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
                                    10,
                                    7
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
                                    8,
                                    9
                                ]
                            }
                        ]
                    },
                    {
                        "case": "10",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    9,
                                    11
                                ]
                            }
                        ]
                    },
                    {
                        "case": "12",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    11
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:v131_F13Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v131_F13Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    3
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
                                    5
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
                                    10,
                                    7
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
                                    8,
                                    9
                                ]
                            }
                        ]
                    },
                    {
                        "case": "10",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    9,
                                    11
                                ]
                            }
                        ]
                    },
                    {
                        "case": "12",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    11
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,10": [
            {
                "type": "setValue",
                "name": "flag:v131_F13Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v131_F13Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    3
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
                                    5
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
                                    10,
                                    7
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
                                    8,
                                    9
                                ]
                            }
                        ]
                    },
                    {
                        "case": "10",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    9,
                                    11
                                ]
                            }
                        ]
                    },
                    {
                        "case": "12",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    11
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,12": [
            {
                "type": "setValue",
                "name": "flag:v131_F13Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v131_F13Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    3
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
                                    5
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
                                    10,
                                    7
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
                                    8,
                                    9
                                ]
                            }
                        ]
                    },
                    {
                        "case": "10",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    9,
                                    11
                                ]
                            }
                        ]
                    },
                    {
                        "case": "12",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    11
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,10": [
            {
                "type": "setValue",
                "name": "flag:v131_F13Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v131_F13Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    3
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
                                    5
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
                                    10,
                                    7
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
                                    8,
                                    9
                                ]
                            }
                        ]
                    },
                    {
                        "case": "10",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    9,
                                    11
                                ]
                            }
                        ]
                    },
                    {
                        "case": "12",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    11
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
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040,  3,  3,  3,  3,  3,207,  0,  0,  0,  0, 21, 21,  3,20042],
    [20040,  3,  0,  0,  0,  3,  0,  0, 88,  3,217,  0,217,  3,20042],
    [20040,  3,  0,123,  0,  3,  0,207,  0,  3,  3, 85,  3,  3,20042],
    [20040,  3,  0,  0,  0,  3, 81,  0,  0,  3,210,  0,210,  3,20042],
    [20040,  3,  3,  3,  3,387,387,  3,  3,  3,  3, 85,  3,  3,20042],
    [20040, 31,211, 31,  3,  0,  3, 27,  0,  0,  3,  0, 27,  3,20042],
    [20040,211, 31,211,  3,  0,  3,  0,  0,  0, 85,  0,  0,  3,20042],
    [20040, 31,211,  3,  3,  0,  3,387,  0,387,  3,216,216,  3,20042],
    [20040,  3, 81,  3,  0,387,  3,  3, 85,  3,  3,  3,  3,  3,20042],
    [20040, 27, 81,  0,387,  0,  3,  0,387,  3,204,  3,  0,  0,20042],
    [20040,  3,  0,  3,  3,  3,  3,  0,  0, 85,  0, 85,  0, 37,20042],
    [20040,  0,  0,207, 28, 28,  3, 27,387,  3,204,  3,  0,  0,20042],
    [20040, 87,  0,  3, 28, 28,  3,  3,  3,  3,  3,  3,  3,  3,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}