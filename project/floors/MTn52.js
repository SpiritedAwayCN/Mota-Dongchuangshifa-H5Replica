main.floors.MTn52=
{
    "floorId": "MTn52",
    "title": "主塔 -52 层",
    "name": "第 -52 层",
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
        "7,2": [
            {
                "type": "if",
                "condition": "(switch:A!==1)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
        "8,1": [
            {
                "type": "if",
                "condition": "(switch:A!==1)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
        "13,4": [
            {
                "type": "if",
                "condition": "(switch:A!==1)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
        "9,9": [
            {
                "type": "if",
                "condition": "(switch:A!==1)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
        "7,11": [
            {
                "type": "if",
                "condition": "(switch:A!==1)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
        "5,13": [
            {
                "type": "if",
                "condition": "(switch:A!==1)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
        "3,2": [
            {
                "type": "if",
                "condition": "(switch:A!==1)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
        "10,3": [
            {
                "type": "if",
                "condition": "(switch:A!==1)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                                "name": "flag:Fm52_Light",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:Fm52_Light===118)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            8,
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
                        "floorId": "MTn53",
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
    [20040,386,386,386,166,386,386, 87,386,386,386,386,386,386,20042],
    [20040,386,166,386,386,386,386,386,386,166,386,386,166,386,20042],
    [20040,386,166,166,386,386,386,386,386,386,386,386,166,386,20042],
    [20040,386,166,166,166,166,166,166,166,166,166,386,166,386,20042],
    [20040,386,166,386,386,386,386,386,386,386,386,386,166,386,20042],
    [20040,386,166,386,166,386,386,166,386,386,386,386,386,386,20042],
    [20040,386,166,386,386,386,386,166,386,386,386,386,386,386,20042],
    [20040,386,166,386,386,166,386,166,166,166,166,166,166,386,20042],
    [20040,386,166,386,386,386,386,166,386,386,386,386,386,386,20042],
    [20040,386,166,386,386,386,166,166,386,166,166,166,166,166,20042],
    [20040,386,166,386,386,386,166,386,386,166,386,386,386,386,20042],
    [20040,386,166,386,386,386,166,386,386,386,386,386,386,386,20042],
    [20040,386,386,386,386,386,166, 88, 85,386,386,386,386,386,20042],
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