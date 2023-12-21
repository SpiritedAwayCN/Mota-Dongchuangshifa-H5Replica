main.floors.MTn54=
{
    "floorId": "MTn54",
    "title": "主塔 -54 层",
    "name": "第 -54 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "054Negative03.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,1": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,1": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "3,1": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "2,1": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "1,1": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "1,2": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "1,3": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "1,4": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "1,6": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "1,7": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "1,8": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "2,9": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "2,11": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "1,11": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "1,12": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "1,13": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "2,13": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "3,13": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,13": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "2,5": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,2": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "1,5": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,1": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,11": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "3,10": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "3,9": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "3,8": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "3,7": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "3,6": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "3,5": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,5": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,5": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,5": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,6": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,7": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,8": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,8": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,8": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "7,8": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "7,7": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,7": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,8": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "3,4": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,3": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,3": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,3": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "7,3": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,3": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,4": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,5": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,6": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "9,5": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "9,6": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,5": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,6": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "11,5": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "11,6": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,5": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,4": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,3": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,2": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "11,2": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,2": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "9,2": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "9,3": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,6": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "13,6": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "13,7": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,7": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,8": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "13,8": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "13,9": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,9": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "13,10": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "13,11": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "13,12": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "13,13": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,13": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "11,13": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "11,12": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "11,11": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "11,10": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "11,9": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,7": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,8": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "9,8": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,9": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,10": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,11": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,12": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,13": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "9,11": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,11": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,9": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,10": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "7,10": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,10": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,10": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,11": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,11": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,12": [
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
                                "name": "flag:Fm54_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm54_Light===107)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            13
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "7,0": [
            {
                "type": "confirm",
                "text": "被谜题卡住了？需要跳过本层吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MTn55",
                        "loc": [
                            7,
                            13
                        ]
                    }
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "7,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
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
    [20040,20041,20041,20041,20041,20041,20041,129,20041,20041,20041,20041,20041,20041,20042],
    [20040,386,386,386,386,418,386, 87,166,166,166,166,166,166,20042],
    [20040,386,166,166,166,386,166,166,166,418,418,418,418,166,20042],
    [20040,386,166,386,386,386,386,386,386,386,166,166,418,166,20042],
    [20040,386,166,386,166,166,166,166,386,166,166,166,418,166,20042],
    [20040,418,386,386,386,418,418,166,386,386,386,386,418,166,20042],
    [20040,386,166,386,166,166,418,166,386,386,386,386,418,386,20042],
    [20040,386,166,386,166,166,419,419,418,166,386,166,386,386,20042],
    [20040,386,386,386,386,418,418,418,418,386,386,166,386,386,20042],
    [20040,166,386,386,166,166,166,166,386,166,386,418,386,386,20042],
    [20040,166,386,418,386,386,386,386,418,166,386,386,166,386,20042],
    [20040,386,386,386,386,386,386,166,386,386,418,386,166,418,20042],
    [20040,386,166,166,386,166,386,166,166,166,386,386,166,418,20042],
    [20040,386,386,386,386,166, 85, 88,166,166,386,418,418,418,20042],
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