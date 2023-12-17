main.floors.MT11=
{
    "floorId": "MT11",
    "title": "主塔 11 层",
    "name": "第 11 层",
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
        "2,2": [
            {
                "type": "if",
                "condition": "switch:A!==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:v124_PotionExist",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:v124_PotionExist===10)",
                                "true": [
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                6,
                                                1
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                7,
                                                1
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                8,
                                                1
                                            ]
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
                "condition": "switch:A!==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:v124_PotionExist",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:v124_PotionExist===10)",
                                "true": [
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                6,
                                                1
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                7,
                                                1
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                8,
                                                1
                                            ]
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
                "condition": "switch:A!==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:v124_PotionExist",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:v124_PotionExist===10)",
                                "true": [
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                6,
                                                1
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                7,
                                                1
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                8,
                                                1
                                            ]
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
                "condition": "switch:A!==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:v124_PotionExist",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:v124_PotionExist===10)",
                                "true": [
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                6,
                                                1
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                7,
                                                1
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                8,
                                                1
                                            ]
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
                "condition": "switch:A!==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:v124_PotionExist",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:v124_PotionExist===10)",
                                "true": [
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                6,
                                                1
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                7,
                                                1
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                8,
                                                1
                                            ]
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
                "condition": "switch:A!==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:v124_PotionExist",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:v124_PotionExist===10)",
                                "true": [
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                6,
                                                1
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                7,
                                                1
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                8,
                                                1
                                            ]
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
                "condition": "switch:A!==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:v124_PotionExist",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:v124_PotionExist===10)",
                                "true": [
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                6,
                                                1
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                7,
                                                1
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                8,
                                                1
                                            ]
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,4": [
            {
                "type": "if",
                "condition": "switch:A!==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:v124_PotionExist",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:v124_PotionExist===10)",
                                "true": [
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                6,
                                                1
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                7,
                                                1
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                8,
                                                1
                                            ]
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
                "condition": "switch:A!==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:v124_PotionExist",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:v124_PotionExist===10)",
                                "true": [
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                6,
                                                1
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                7,
                                                1
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                8,
                                                1
                                            ]
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
                "condition": "switch:A!==1",
                "true": [
                    {
                        "type": "if",
                        "condition": "(core.getBlockId(core.getHeroLoc('x'), core.getHeroLoc('y'))===\"darkLight\")",
                        "true": [
                            {
                                "type": "setValue",
                                "name": "flag:v124_PotionExist",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:v124_PotionExist===10)",
                                "true": [
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                6,
                                                1
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                7,
                                                1
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "greenPotion",
                                        "loc": [
                                            [
                                                8,
                                                1
                                            ]
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
            "\t[老人,man]\b[this]角色处于夹击怪物上下或左右包围时扣一半血。",
            "\t[老人,man]\b[this]但持有护符时，可完全防御。",
            {
                "type": "setValue",
                "name": "flag:v116_Chat",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "6,9": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "8,9": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,7": [
            {
                "type": "setValue",
                "name": "flag:v125_FirstSteelKey",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:v125_FirstSteelKey===2",
                "true": [
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
                "type": "if",
                "condition": "flag:v125_FirstSteelKey===4",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            4
                        ]
                    }
                ]
            }
        ],
        "8,7": [
            {
                "type": "setValue",
                "name": "flag:v125_FirstSteelKey",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v125_FirstSteelKey===2)",
                "true": [
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
                "type": "if",
                "condition": "(flag:v125_FirstSteelKey===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            4
                        ]
                    }
                ]
            }
        ],
        "6,5": [
            {
                "type": "setValue",
                "name": "flag:v125_FirstSteelKey",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v125_FirstSteelKey===2)",
                "true": [
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
                "type": "if",
                "condition": "(flag:v125_FirstSteelKey===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            4
                        ]
                    }
                ]
            }
        ],
        "8,5": [
            {
                "type": "setValue",
                "name": "flag:v125_FirstSteelKey",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v125_FirstSteelKey===2)",
                "true": [
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
                "type": "if",
                "condition": "(flag:v125_FirstSteelKey===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            4
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
    [20040,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,20042],
    [20040,  3,386, 27,386,  3,  3, 25,  3,  3,386, 28,386,  3,20042],
    [20040,  3, 27,386, 27,  3,204,  0,204,  3, 28,386, 28,  3,20042],
    [20040,  3,386, 27,386,  3,  3, 85,  3,  3,386, 28,386,  3,20042],
    [20040,  3,  3, 83,  3,  3,217,  0,217,  3,  3, 83,  3,  3,20042],
    [20040,  3,204,  0,204,  3,  3, 85,  3,  3,204,  0,204,  3,20042],
    [20040, 21,  3, 21,  3,  0,210,121,210,  0,  3, 21,  3, 21,20042],
    [20040, 27,  3,  0,  0,  3,  3,  0,  3,  3,  0,  0,  3, 28,20042],
    [20040, 27,  3,  0,  0,  3, 88,  0, 87,  3,  0,  0,  3, 28,20042],
    [20040,209,  3,  3, 81,  3,  3,  3,  3,  3, 81,  3,  3,209,20042],
    [20040,216, 81,  0,  0,164,  0,  0,  0,163,  0,  0, 81,216,20042],
    [20040,  3,  3,161,  3,  3,  3,162,  3,  3,  3,161,  3,  3,20042],
    [20040,  3, 21, 21, 21,210,217,  0,217,210, 21, 21, 21,  3,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}