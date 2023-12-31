main.floors.MTn28=
{
    "floorId": "MTn28",
    "title": "主塔 -28 层",
    "name": "第 -28 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "045Positive03.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "4,4": [
            {
                "type": "openDoor"
            }
        ],
        "3,5": [
            {
                "type": "openDoor"
            }
        ],
        "11,6": [
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    11,
                    4
                ]
            },
            {
                "type": "hide",
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        12,
                        5
                    ]
                ],
                "remove": true
            }
        ],
        "12,5": [
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    11,
                    4
                ]
            },
            {
                "type": "hide",
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        11,
                        6
                    ]
                ],
                "remove": true
            }
        ],
        "11,5": {
            "trigger": "action",
            "enable": true,
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
                "\t[hero]\b[hero]你也在啊。",
                "\t[绿色史莱姆,greenSlime]\b[this]不行啊。",
                "\t[hero]\b[hero]打你挣钱太少。",
                "\t[绿色史莱姆,greenSlime]\b[this]好，我让开。别打我。",
                {
                    "type": "move",
                    "time": 500,
                    "keep": true,
                    "steps": [
                        "left:1"
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "1,13": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {
        "10,5": [
            "\t[绿色史莱姆,greenSlime]\b[this]说好不打我，让你出不去！",
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    10,
                    3
                ]
            }
        ]
    },
    "afterBattle": {
        "4,6": [
            {
                "type": "setValue",
                "name": "flag:v150_Fm28Tre",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v150_Fm28Tre===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            6
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "freezeBadge",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ]
                    }
                ]
            }
        ],
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:v150_Fm28Tre",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v150_Fm28Tre===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            6
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "freezeBadge",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ]
                    }
                ]
            }
        ],
        "6,6": [
            {
                "type": "setValue",
                "name": "flag:v150_Fm28Tre",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v150_Fm28Tre===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            6
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "freezeBadge",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ]
                    }
                ]
            }
        ],
        "5,5": [
            {
                "type": "setValue",
                "name": "flag:v150_Fm28Tre",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v150_Fm28Tre===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            6
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "freezeBadge",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ]
                    }
                ]
            }
        ],
        "10,7": [
            {
                "type": "setValue",
                "name": "flag:v149_Fm28Shield",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v149_Fm28Shield===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            9
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            4
                        ]
                    },
                    {
                        "type": "waitAsync"
                    }
                ]
            }
        ],
        "11,7": [
            {
                "type": "setValue",
                "name": "flag:v149_Fm28Shield",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v149_Fm28Shield===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            9
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            4
                        ]
                    },
                    {
                        "type": "waitAsync"
                    }
                ]
            }
        ],
        "12,7": [
            {
                "type": "setValue",
                "name": "flag:v149_Fm28Shield",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v149_Fm28Shield===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            9
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            4
                        ]
                    },
                    {
                        "type": "waitAsync"
                    }
                ]
            }
        ],
        "11,8": [
            {
                "type": "setValue",
                "name": "flag:v149_Fm28Shield",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v149_Fm28Shield===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            9
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            4
                        ]
                    },
                    {
                        "type": "waitAsync"
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
    [20040, 88,  0,  0,  2,  2,  2,  0,  0,430,503,234,227, 57,20042],
    [20040,492,  0,401, 59,  2,237,237,  0,  2,  2,  2,  2,  2,20042],
    [20040,  2, 28,  2, 59,  0,237,  2,239,  0,  0, 27, 27, 27,20042],
    [20040, 28,  2,  2,384,430,  2,  2,  2,  2,  2,  0,  2,  2,20042],
    [20040,435,  0,384,  0,505,  0,  2, 33,  2,  0,201,  0,  2,20042],
    [20040,  0,505,430,505,  2,505,430,237,  2,  0,  0,  0,  2,20042],
    [20040,  2,434,  2,  0,505,  0,  2,237,  2,503,239,503,  2,20042],
    [20040,339,227,  2,  2,  0,  2,  2,227,  2,  2,505,  2,  2,20042],
    [20040,339,  0, 34,  2,  2,  2,  0,227,  0,  2, 85,  2,339,20042],
    [20040,  2,  0, 34,503,  0, 59, 60,  0,  2,  2,234,  2,  2,20042],
    [20040, 21,505,  2,  2,430,  2,  2,239,  2,505,239,505,  2,20042],
    [20040,  0,  0,  2, 27,234, 27,  2,234,  2,  0,505,  0,  2,20042],
    [20040, 87,  0,  2, 27, 27, 27,  2, 69,  2,  0, 42,  0,  2,20042],
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
    "underGround": true,
    "isDark": false
}