main.floors.MTn46=
{
    "floorId": "MTn46",
    "title": "主塔 -46 层",
    "name": "第 -46 层",
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
        "1,6": [
            {
                "type": "function",
                "function": "function(){\ncore.setFlag(\"DryVisitNext\", 1);\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "MTn45",
                "loc": [
                    1,
                    6
                ]
            }
        ],
        "2,4": [
            {
                "type": "if",
                "condition": "(switch:A!==1)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:Fm46Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "switch",
                                "condition": "flag:Fm46Light",
                                "caseList": [
                                    {
                                        "case": "5",
                                        "action": [
                                            {
                                                "type": "setBlock",
                                                "number": "steelKey",
                                                "loc": [
                                                    [
                                                        2,
                                                        6
                                                    ]
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "case": "10",
                                        "action": [
                                            {
                                                "type": "setBlock",
                                                "number": "steelKey",
                                                "loc": [
                                                    [
                                                        2,
                                                        7
                                                    ]
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "3,3": [
            {
                "type": "if",
                "condition": "(switch:A!==1)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:Fm46Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "switch",
                                "condition": "flag:Fm46Light",
                                "caseList": [
                                    {
                                        "case": "5",
                                        "action": [
                                            {
                                                "type": "setBlock",
                                                "number": "steelKey",
                                                "loc": [
                                                    [
                                                        2,
                                                        6
                                                    ]
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "case": "10",
                                        "action": [
                                            {
                                                "type": "setBlock",
                                                "number": "steelKey",
                                                "loc": [
                                                    [
                                                        2,
                                                        7
                                                    ]
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "2,2": [
            {
                "type": "if",
                "condition": "(switch:A!==1)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:Fm46Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "switch",
                                "condition": "flag:Fm46Light",
                                "caseList": [
                                    {
                                        "case": "5",
                                        "action": [
                                            {
                                                "type": "setBlock",
                                                "number": "steelKey",
                                                "loc": [
                                                    [
                                                        2,
                                                        6
                                                    ]
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "case": "10",
                                        "action": [
                                            {
                                                "type": "setBlock",
                                                "number": "steelKey",
                                                "loc": [
                                                    [
                                                        2,
                                                        7
                                                    ]
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,2": [
            {
                "type": "if",
                "condition": "(switch:A!==1)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:Fm46Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "switch",
                                "condition": "flag:Fm46Light",
                                "caseList": [
                                    {
                                        "case": "5",
                                        "action": [
                                            {
                                                "type": "setBlock",
                                                "number": "steelKey",
                                                "loc": [
                                                    [
                                                        2,
                                                        6
                                                    ]
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "case": "10",
                                        "action": [
                                            {
                                                "type": "setBlock",
                                                "number": "steelKey",
                                                "loc": [
                                                    [
                                                        2,
                                                        7
                                                    ]
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,4": [
            {
                "type": "if",
                "condition": "(switch:A!==1)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:Fm46Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "switch",
                                "condition": "flag:Fm46Light",
                                "caseList": [
                                    {
                                        "case": "5",
                                        "action": [
                                            {
                                                "type": "setBlock",
                                                "number": "steelKey",
                                                "loc": [
                                                    [
                                                        2,
                                                        6
                                                    ]
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "case": "10",
                                        "action": [
                                            {
                                                "type": "setBlock",
                                                "number": "steelKey",
                                                "loc": [
                                                    [
                                                        2,
                                                        7
                                                    ]
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "2,10": [
            {
                "type": "if",
                "condition": "(switch:A!==1)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:Fm46Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "switch",
                                "condition": "flag:Fm46Light",
                                "caseList": [
                                    {
                                        "case": "5",
                                        "action": [
                                            {
                                                "type": "setBlock",
                                                "number": "steelKey",
                                                "loc": [
                                                    [
                                                        2,
                                                        6
                                                    ]
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "case": "10",
                                        "action": [
                                            {
                                                "type": "setBlock",
                                                "number": "steelKey",
                                                "loc": [
                                                    [
                                                        2,
                                                        7
                                                    ]
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "3,11": [
            {
                "type": "if",
                "condition": "(switch:A!==1)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:Fm46Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "switch",
                                "condition": "flag:Fm46Light",
                                "caseList": [
                                    {
                                        "case": "5",
                                        "action": [
                                            {
                                                "type": "setBlock",
                                                "number": "steelKey",
                                                "loc": [
                                                    [
                                                        2,
                                                        6
                                                    ]
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "case": "10",
                                        "action": [
                                            {
                                                "type": "setBlock",
                                                "number": "steelKey",
                                                "loc": [
                                                    [
                                                        2,
                                                        7
                                                    ]
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,10": [
            {
                "type": "if",
                "condition": "(switch:A!==1)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:Fm46Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "switch",
                                "condition": "flag:Fm46Light",
                                "caseList": [
                                    {
                                        "case": "5",
                                        "action": [
                                            {
                                                "type": "setBlock",
                                                "number": "steelKey",
                                                "loc": [
                                                    [
                                                        2,
                                                        6
                                                    ]
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "case": "10",
                                        "action": [
                                            {
                                                "type": "setBlock",
                                                "number": "steelKey",
                                                "loc": [
                                                    [
                                                        2,
                                                        7
                                                    ]
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,12": [
            {
                "type": "if",
                "condition": "(switch:A!==1)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:Fm46Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "switch",
                                "condition": "flag:Fm46Light",
                                "caseList": [
                                    {
                                        "case": "5",
                                        "action": [
                                            {
                                                "type": "setBlock",
                                                "number": "steelKey",
                                                "loc": [
                                                    [
                                                        2,
                                                        6
                                                    ]
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "case": "10",
                                        "action": [
                                            {
                                                "type": "setBlock",
                                                "number": "steelKey",
                                                "loc": [
                                                    [
                                                        2,
                                                        7
                                                    ]
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "2,12": [
            {
                "type": "if",
                "condition": "(switch:A!==1)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:Fm46Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "switch",
                                "condition": "flag:Fm46Light",
                                "caseList": [
                                    {
                                        "case": "5",
                                        "action": [
                                            {
                                                "type": "setBlock",
                                                "number": "steelKey",
                                                "loc": [
                                                    [
                                                        2,
                                                        6
                                                    ]
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "case": "10",
                                        "action": [
                                            {
                                                "type": "setBlock",
                                                "number": "steelKey",
                                                "loc": [
                                                    [
                                                        2,
                                                        7
                                                    ]
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "2,8": [
            "\t[老人,man]\b[this]黄金门不会突然出现的@clue",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "13,13": [
            "\t[老人,man]\b[this]47、48层不能用楼层传送器。@clue",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "1,8": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "7,13": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,5": [
            {
                "type": "setValue",
                "name": "flag:Fm46Bag",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm46Bag",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    7,
                                    4
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
                                    2
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
                "name": "flag:Fm46Bag",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm46Bag",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    7,
                                    4
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
                                    2
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,3": [
            {
                "type": "setValue",
                "name": "flag:Fm46Bag",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm46Bag",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    7,
                                    4
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
                                    2
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,3": [
            {
                "type": "setValue",
                "name": "flag:Fm46Bag",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm46Bag",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    7,
                                    4
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
                                    2
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
                "name": "flag:Fm46Shield",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm46Shield",
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
                                    9
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
                "name": "flag:Fm46Shield",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm46Shield",
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
                                    9
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
                                    11,
                                    5
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
                "name": "flag:Fm46Shield",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm46Shield",
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
                                    9
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
                                    11,
                                    5
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,10": [
            {
                "type": "setValue",
                "name": "flag:Fm46Shield",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm46Shield",
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
                                    9
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
                                    11,
                                    5
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
                "name": "flag:Fm46Shield",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm46Shield",
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
                                    9
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
                                    11,
                                    5
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
                "name": "flag:Fm46Shield",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm46Shield",
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
                                    9
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
                "name": "flag:Fm46Shield",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm46Shield",
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
                                    9
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
                "name": "flag:Fm46Shield",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm46Shield",
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
                                    9
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
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040,  2,  2,  2,  2,  2, 63,  0, 63,365,365,365,365,365,20042],
    [20040,  2,386, 33,386,  2,  2, 85,  2,365, 28, 44, 28,365,20042],
    [20040,  2, 33,386, 33,  2,564,  0,564,365, 28, 28, 28,365,20042],
    [20040,  2,386, 33,386,  2,  2, 85,  2,365, 28, 28, 28,365,20042],
    [20040,  2,  2,570,  2,  2,558,  0,558,365,365, 85,365,365,20042],
    [20040,20247,  0,570,  0,  2,  2,556,  2,365,573,  0,573,365,20042],
    [20040,  0,  0,  1, 32,564,  0,  0,  2,365,365, 85,365,365,20042],
    [20040, 87,121,570,  1, 32,  1,564, 28,365,572,  0,572,365,20042],
    [20040,  1,  1,570,  1,  1,  1,  1,  0,365,365, 85,365,365,20042],
    [20040,  1,386, 33,386,  1, 27,  1,571,365,574,  0,574,365,20042],
    [20040,  1, 33,386, 33,  1, 28,  1,572,365,365, 85,365,365,20042],
    [20040,  1,386, 33,386,  1, 34,  1,571,365,571,  0,571,365,20042],
    [20040,  1,  1,  1,  1,  1, 33, 88,  0,  0, 32, 32,  0,121,20042],
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