main.floors.MT6=
{
    "floorId": "MT6",
    "title": "主塔 6 层",
    "name": "第 6 层",
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
        "1,7": [
            {
                "type": "openDoor"
            }
        ]
    },
    "changeFloor": {
        "13,13": {
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
        "10,11": [
            {
                "type": "setValue",
                "name": "flag:v118_IronSword",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "switch",
                "condition": "flag:v118_IronSword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    10
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
                                    6
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
                                    11,
                                    4
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
                                    11,
                                    2
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,11": [
            {
                "type": "setValue",
                "name": "flag:v118_IronSword",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "switch",
                "condition": "flag:v118_IronSword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    10
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
                                    6
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
                                    11,
                                    4
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
                                    11,
                                    2
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
                "name": "flag:v118_IronSword",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "switch",
                "condition": "flag:v118_IronSword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    10
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
                                    6
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
                                    11,
                                    4
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
                                    11,
                                    2
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
                "name": "flag:v118_IronSword",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "switch",
                "condition": "flag:v118_IronSword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    10
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
                                    6
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
                                    11,
                                    4
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
                                    11,
                                    2
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,7": [
            {
                "type": "setValue",
                "name": "flag:v118_IronSword",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "switch",
                "condition": "flag:v118_IronSword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    10
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
                                    6
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
                                    11,
                                    4
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
                                    11,
                                    2
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,7": [
            {
                "type": "setValue",
                "name": "flag:v118_IronSword",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "switch",
                "condition": "flag:v118_IronSword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    10
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
                                    6
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
                                    11,
                                    4
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
                                    11,
                                    2
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,5": [
            {
                "type": "setValue",
                "name": "flag:v118_IronSword",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "switch",
                "condition": "flag:v118_IronSword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    10
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
                                    6
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
                                    11,
                                    4
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
                                    11,
                                    2
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,5": [
            {
                "type": "setValue",
                "name": "flag:v118_IronSword",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "switch",
                "condition": "flag:v118_IronSword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    10
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
                                    6
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
                                    11,
                                    4
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
                                    11,
                                    2
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,3": [
            {
                "type": "setValue",
                "name": "flag:v118_IronSword",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "switch",
                "condition": "flag:v118_IronSword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    10
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
                                    6
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
                                    11,
                                    4
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
                                    11,
                                    2
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,3": [
            {
                "type": "setValue",
                "name": "flag:v118_IronSword",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "switch",
                "condition": "flag:v118_IronSword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    10
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
                                    6
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
                                    11,
                                    4
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
                                    11,
                                    2
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "2,2": [
            {
                "type": "setValue",
                "name": "flag:v119_Notebook",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v119_Notebook",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
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
                                    5,
                                    3
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
                                    7,
                                    3
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "2,4": [
            {
                "type": "setValue",
                "name": "flag:v119_Notebook",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v119_Notebook",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
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
                                    5,
                                    3
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
                                    7,
                                    3
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,2": [
            {
                "type": "setValue",
                "name": "flag:v119_Notebook",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v119_Notebook",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
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
                                    5,
                                    3
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
                                    7,
                                    3
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,4": [
            {
                "type": "setValue",
                "name": "flag:v119_Notebook",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v119_Notebook",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
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
                                    5,
                                    3
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
                                    7,
                                    3
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,2": [
            {
                "type": "setValue",
                "name": "flag:v119_Notebook",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v119_Notebook",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
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
                                    5,
                                    3
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
                                    7,
                                    3
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,4": [
            {
                "type": "setValue",
                "name": "flag:v119_Notebook",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v119_Notebook",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
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
                                    5,
                                    3
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
                                    7,
                                    3
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {
        "11,1": [
            "提示：双击状态栏中的背包按钮也可进入装备界面。"
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040,  1,  1,  1,  1,  1,  1,  1,  1,  1, 31, 35, 31,  1,20042],
    [20040,  0,379,  1,382,  1,203,  1, 31,  1,  1, 85,  1,  1,20042],
    [20040,  0,  0, 85,  0, 85, 21, 85,344,  1,205,  0,205,  1,20042],
    [20040,  0,379,  1,382,  1,203,  1, 31,  1,  1, 85,  1,  1,20042],
    [20040,  0,  1,  1,  1,  1,  1,  1,  1,  1,382, 21,382,  1,20042],
    [20040,203, 81,203,  0,  1,  0, 28, 28,  1,  1, 85,  1,  1,20042],
    [20040,383,  1,  0,203, 81,203,  0,  0,  1,379,  0,379,  1,20042],
    [20040,  0,  1,  1,  1,  1,  0,203,  0,  1,  1, 85,  1,  1,20042],
    [20040,205,  1, 31, 31,  1,  1, 81,  1,  1,378,  0,378,  1,20042],
    [20040,205,  1, 31, 31,381,  0,  0,380,  1,  1, 85,  1,  1,20042],
    [20040,  0,  1,  1,  1,  1,  1,380,380,  0,377,  0,377,  0,20042],
    [20040,  0,  1,  0, 81,  0,  1, 81,  1,  1,  1,  1,  1,  1,20042],
    [20040, 87,  0, 21,  1,382,381,380,379,378,377,202, 34, 88,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}