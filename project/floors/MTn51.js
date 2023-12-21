main.floors.MTn51=
{
    "floorId": "MTn51",
    "title": "主塔 -51 层",
    "name": "第 -51 层",
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
        "7,12": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,12": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "3,12": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "1,10": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,12": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,13": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "9,13": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,12": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,11": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,10": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "11,4": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "11,3": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "13,3": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "13,2": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "13,1": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,1": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,1": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "11,1": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "9,1": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,2": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "9,4": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "7,4": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,4": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "7,5": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "11,7": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "11,8": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,9": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,9": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,9": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "2,7": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,6": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,6": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "2,6": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "2,3": [
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
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
                                "name": "flag:Fm51_Light",
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
                                "condition": "flag:Fm51_Light===116",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            6,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,13": [
            "\t[老人,man]\b[this]秘密的空间。",
            "\t[老人,man]\b[this]要全踩完哦"
        ],
        "7,14": [
            {
                "type": "confirm",
                "text": "被谜题卡住了？需要跳过本层吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MTn52",
                        "loc": [
                            7,
                            1
                        ]
                    }
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "7,13": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "7,1": {
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
    [20040,386,386,386,386,166, 85, 88,166,386,386,386,386,386,20042],
    [20040,386,166,166,386,166,386,166,166,386,166,166,166,386,20042],
    [20040,386,386,386,386,166,386,386,386,386,166,386,386,386,20042],
    [20040,386,386,386,386,166,386,386,386,386,166,386,386,166,20042],
    [20040,386,386,386,386,166,386,386,386,386,166,166,386,166,20042],
    [20040,386,386,386,386,386,386,166,386,418,386,166,386,166,20042],
    [20040,166,386,386,166,166,386,386,386,166,386,386,386,166,20042],
    [20040,166,386,386,386,386,386,386,386,386,418,386,386,386,20042],
    [20040,166,166,166,386,386,386,166,166,166,166,166,166,386,20042],
    [20040,386,386,166,386,386,386,386,386,166,386,386,386,386,20042],
    [20040,386,386,386,386,386,166,166,386,166,386,386,386,386,20042],
    [20040,386,386,386,386,386,386,386,386,166,386,386,386,386,20042],
    [20040,166,166,166,166,166,121, 87,386,386,386,166,386,386,20042],
    [20048,20049,20049,20049,20049,20049,20049,129,20049,20049,20049,20049,20049,20049,20050]
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