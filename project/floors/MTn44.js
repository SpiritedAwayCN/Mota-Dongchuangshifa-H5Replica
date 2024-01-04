main.floors.MTn44=
{
    "floorId": "MTn44",
    "title": "主塔 -44 层",
    "name": "第 -44 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "013Theme02.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "13,1": [
            {
                "type": "function",
                "function": "function(){\ncore.setFlag(\"DryVisitNext\", 1);\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "MTn45",
                "loc": [
                    13,
                    1
                ]
            }
        ],
        "3,12": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "5,12": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "7,12": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "9,12": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "11,12": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
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
        "1,13": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "13,13": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "12,6": [
            {
                "type": "setValue",
                "name": "flag:Fm44Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm44Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    7
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
                                    9,
                                    7
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
                                    5,
                                    7
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
                "name": "flag:Fm44Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm44Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    7
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
                                    9,
                                    7
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
                                    5,
                                    7
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,8": [
            {
                "type": "setValue",
                "name": "flag:Fm44Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm44Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    7
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
                                    9,
                                    7
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
                                    5,
                                    7
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
                "name": "flag:Fm44Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm44Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    7
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
                                    9,
                                    7
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
                                    5,
                                    7
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
                "name": "flag:Fm44Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm44Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    7
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
                                    9,
                                    7
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
                                    5,
                                    7
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,6": [
            {
                "type": "setValue",
                "name": "flag:Fm44Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm44Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    7
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
                                    9,
                                    7
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
                                    5,
                                    7
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,6": [
            {
                "type": "setValue",
                "name": "flag:Fm44Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm44Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    7
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
                                    9,
                                    7
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
                                    5,
                                    7
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
                "name": "flag:Fm44Sword",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm44Sword",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    7
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
                                    9,
                                    7
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
                                    5,
                                    7
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {
        "1,12": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    5,
                    4,
                    2
                ]
            }
        ],
        "13,12": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    5,
                    4,
                    2
                ]
            }
        ],
        "2,13": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    3000
                ]
            }
        ],
        "4,12": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    3000
                ]
            }
        ],
        "6,12": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    4000
                ]
            }
        ],
        "8,12": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    4000
                ]
            }
        ],
        "10,12": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    5000
                ]
            }
        ],
        "12,13": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    5000
                ]
            }
        ],
        "3,12": [
            {
                "type": "setBlock",
                "number": "whiteWall"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "5,12": [
            {
                "type": "setBlock",
                "number": "whiteWall"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "7,12": [
            {
                "type": "setBlock",
                "number": "whiteWall"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "9,12": [
            {
                "type": "setBlock",
                "number": "whiteWall"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "11,12": [
            {
                "type": "setBlock",
                "number": "whiteWall"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040,  1,  1,  1,  1,  1,  0,430, 27,430, 28,430,573,20255,20042],
    [20040,  1, 27, 34, 28,  1,  0,  1, 27,  1, 28,  1,  0,  0,20042],
    [20040,  1, 27, 34, 28,431,  0,  1,  1,  1,  1,  1,572,  1,20042],
    [20040,  1,  1,  1,  1,  1,571,571,  0,571,571,  0,  0,  0,20042],
    [20040,365,365,365,365,365,365,365,365,365,365,365,365,  0,20042],
    [20040,365, 27, 27, 27,365,573,365,572,365,574,365,571,  0,20042],
    [20040,365, 43, 27, 27, 85,  0, 85,  0, 85,  0, 85,  0,  0,20042],
    [20040,365, 27, 27, 27,365,573,365,572,365,574,365,571,  0,20042],
    [20040,365,365,365,365,365,365,365,365,365,365,365,365,365,20042],
    [20040,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,20042],
    [20040,  2,556,556,556,  2,566,566,566,  2,568,568,568,  2,20042],
    [20040,455,  0, 31,454, 31,454, 31,454, 31,454, 31,  0,455,20042],
    [20040, 87,454,  2,558,558,558,  2,567,567,567,  2,454, 88,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "underGround": true,
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,140,140,140,140,140,140,140,140,140,140,140,  0,  0],
    [  0,  0,140,140,140,140,140,140,140,140,140,140,140,  0,  0],
    [  0,  0,140,140,140,140,140,140,140,140,140,140,140,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  2,  0,  2,  0,  2,  0,  2,  0,  2,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
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