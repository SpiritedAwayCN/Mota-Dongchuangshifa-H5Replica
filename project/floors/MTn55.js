main.floors.MTn55=
{
    "floorId": "MTn55",
    "title": "主塔 -55 层",
    "name": "第 -55 层",
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
        "9,12": [
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
        "1,9": [
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
        "5,7": [
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
        "4,7": [
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
        "8,2": [
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
        "13,5": [
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
        "9,7": [
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
                                "name": "flag:Fm55_Light",
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
                                "condition": "(flag:Fm55_Light===42)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
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
        "7,14": [
            {
                "type": "confirm",
                "text": "被谜题卡住了？需要跳过本层吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MTn56",
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
        "7,0": {
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
    [20040,20041,20041,20041,20041,20041,20041, 88,20041,20041,20041,20041,20041,20041,20042],
    [20040, 27,  0,  0, 27,166,166, 85,166,166, 28,  0,  0, 28,20042],
    [20040,  0, 27, 27,  0,386,386,  0,386,386,  0, 28, 28,  0,20042],
    [20040,  0, 27, 27,  0,166,166,  0,166,166,  0, 28, 28,  0,20042],
    [20040, 27,  0,  0, 27,166,166,  0,166,166, 28,  0,  0, 28,20042],
    [20040,386,166,166,166,166,166,  0,166,166,166,166,166,386,20042],
    [20040,386,386,386,386,418,  0,  0,  0,418,386,386,386,386,20042],
    [20040,386,386,386,386,386,166,166,166,386,386,386,386,386,20042],
    [20040,386,386,386,386,386,  0,  0,  0,386,386,386,386,386,20042],
    [20040,386,166,166,166,166,166,  0,166,166,166,166,166,386,20042],
    [20040, 34,  0,  0, 34,166,166,  0,166,166, 33,  0,  0, 33,20042],
    [20040,  0, 34, 34,  0,166,166,  0,166,166,  0, 33, 33,  0,20042],
    [20040,  0, 34, 34,  0,386,386,  0,386,386,  0, 33, 33,  0,20042],
    [20040, 34,  0,  0, 34,166,166, 87,166,166, 33,  0,  0, 33,20042],
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