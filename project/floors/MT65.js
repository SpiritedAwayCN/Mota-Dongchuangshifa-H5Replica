main.floors.MT65=
{
    "floorId": "MT65",
    "title": "主塔 65 层",
    "name": "第 65 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "mtboss.mp3",
    "firstArrive": [
        "\t[hero]\b[hero]大...大...大...大法师？",
        "\t[魔法大法师,magicMaster]\b[this,7,11]正是在下。我会看着你慢慢死去。",
        {
            "type": "move",
            "loc": [
                7,
                11
            ],
            "time": 300,
            "keep": true,
            "steps": [
                "up:8"
            ]
        },
        {
            "type": "setBlock",
            "number": "E509",
            "loc": [
                [
                    6,
                    11
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "E509",
            "loc": [
                [
                    8,
                    11
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "E509",
            "loc": [
                [
                    6,
                    8
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "E509",
            "loc": [
                [
                    8,
                    8
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "E509",
            "loc": [
                [
                    6,
                    5
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "E509",
            "loc": [
                [
                    8,
                    5
                ]
            ]
        },
        {
            "type": "closeDoor",
            "id": "specialDoor",
            "loc": [
                7,
                10
            ],
            "async": true
        },
        {
            "type": "closeDoor",
            "id": "specialDoor",
            "loc": [
                7,
                7
            ],
            "async": true
        },
        {
            "type": "closeDoor",
            "id": "specialDoor",
            "loc": [
                7,
                4
            ]
        },
        {
            "type": "waitAsync"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,13": {
            "trigger": null,
            "enable": false,
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
            "data": []
        },
        "7,1": {
            "trigger": null,
            "enable": false,
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
            "data": []
        }
    },
    "changeFloor": {
        "7,13": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "7,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {
        "7,3": [
            {
                "type": "if",
                "condition": "(switch:A!==1)",
                "true": [
                    "\t[魔法大法师,magicMaster]\b[this]哼，你终究败在我手下！"
                ]
            }
        ]
    },
    "afterBattle": {
        "6,11": [
            {
                "type": "setValue",
                "name": "flag:v192_F65Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v192_F65Door",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    7,
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
                                    7,
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
                                    4
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,11": [
            {
                "type": "setValue",
                "name": "flag:v192_F65Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v192_F65Door",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    7,
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
                                    7,
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
                                    4
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
                "name": "flag:v192_F65Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v192_F65Door",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    7,
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
                                    7,
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
                                    4
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
                "name": "flag:v192_F65Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v192_F65Door",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    7,
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
                                    7,
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
                                    4
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
                "name": "flag:v192_F65Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v192_F65Door",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    7,
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
                                    7,
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
                                    4
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,5": [
            {
                "type": "setValue",
                "name": "flag:v192_F65Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v192_F65Door",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    7,
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
                                    7,
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
                                    4
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
                    "\t[魔法大法师,magicMaster]\b[this]可恶，你等着！上，章鱼！",
                    {
                        "type": "setBlock",
                        "number": "octopus"
                    },
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "setBlock",
                        "number": "yellowPotion",
                        "loc": [
                            [
                                2,
                                2
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "yellowPotion",
                        "loc": [
                            [
                                3,
                                2
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "yellowPotion",
                        "loc": [
                            [
                                4,
                                2
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "yellowPotion",
                        "loc": [
                            [
                                2,
                                12
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "yellowPotion",
                        "loc": [
                            [
                                3,
                                12
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "yellowPotion",
                        "loc": [
                            [
                                4,
                                12
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "yellowPotion",
                        "loc": [
                            [
                                10,
                                2
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "yellowPotion",
                        "loc": [
                            [
                                11,
                                2
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "yellowPotion",
                        "loc": [
                            [
                                12,
                                2
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "yellowPotion",
                        "loc": [
                            [
                                10,
                                12
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "yellowPotion",
                        "loc": [
                            [
                                11,
                                12
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "yellowPotion",
                        "loc": [
                            [
                                12,
                                12
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "redGem",
                        "loc": [
                            [
                                2,
                                4
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "redGem",
                        "loc": [
                            [
                                3,
                                4
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "redGem",
                        "loc": [
                            [
                                4,
                                4
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "redGem",
                        "loc": [
                            [
                                2,
                                10
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "redGem",
                        "loc": [
                            [
                                3,
                                10
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "redGem",
                        "loc": [
                            [
                                4,
                                10
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "redGem",
                        "loc": [
                            [
                                10,
                                4
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "redGem",
                        "loc": [
                            [
                                11,
                                4
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "redGem",
                        "loc": [
                            [
                                12,
                                4
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "redGem",
                        "loc": [
                            [
                                10,
                                10
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "redGem",
                        "loc": [
                            [
                                11,
                                10
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "redGem",
                        "loc": [
                            [
                                12,
                                10
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "blueGem",
                        "loc": [
                            [
                                2,
                                3
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "blueGem",
                        "loc": [
                            [
                                3,
                                3
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "blueGem",
                        "loc": [
                            [
                                4,
                                3
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "blueGem",
                        "loc": [
                            [
                                10,
                                3
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "blueGem",
                        "loc": [
                            [
                                11,
                                3
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "blueGem",
                        "loc": [
                            [
                                12,
                                3
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "blueGem",
                        "loc": [
                            [
                                2,
                                11
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "blueGem",
                        "loc": [
                            [
                                3,
                                11
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "blueGem",
                        "loc": [
                            [
                                4,
                                11
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "blueGem",
                        "loc": [
                            [
                                10,
                                11
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "blueGem",
                        "loc": [
                            [
                                11,
                                11
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "blueGem",
                        "loc": [
                            [
                                12,
                                11
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "yellowKey",
                        "loc": [
                            [
                                2,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "yellowKey",
                        "loc": [
                            [
                                2,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "yellowKey",
                        "loc": [
                            [
                                2,
                                8
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "yellowKey",
                        "loc": [
                            [
                                12,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "yellowKey",
                        "loc": [
                            [
                                12,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "yellowKey",
                        "loc": [
                            [
                                12,
                                8
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "blueKey",
                        "loc": [
                            [
                                3,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "blueKey",
                        "loc": [
                            [
                                3,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "blueKey",
                        "loc": [
                            [
                                3,
                                8
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "blueKey",
                        "loc": [
                            [
                                11,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "blueKey",
                        "loc": [
                            [
                                11,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "blueKey",
                        "loc": [
                            [
                                11,
                                8
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "redKey",
                        "loc": [
                            [
                                4,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "redKey",
                        "loc": [
                            [
                                4,
                                8
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "redKey",
                        "loc": [
                            [
                                10,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "redKey",
                        "loc": [
                            [
                                10,
                                8
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "E521",
                        "loc": [
                            [
                                3,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "E521",
                        "loc": [
                            [
                                3,
                                9
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "E521",
                        "loc": [
                            [
                                11,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "E521",
                        "loc": [
                            [
                                11,
                                9
                            ]
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                7,
                                13
                            ]
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                7,
                                1
                            ]
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            6
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            9,
                            6
                        ]
                    },
                    {
                        "type": "setFloor",
                        "name": "canFlyFrom",
                        "value": true
                    },
                    {
                        "type": "setFloor",
                        "name": "canUseQuickShop",
                        "value": true
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
    [20040,365,365,365,365,365,  0, 87,  0,365,365,365,365,365,20042],
    [20040,365,  0,  0,  0,365,  0,  0,  0,365,  0,  0,  0,365,20042],
    [20040,365,  0,  0,  0,365,  0,  0,  0,365,  0,  0,  0,365,20042],
    [20040,365,  0,  0,  0,365,365,  0,365,365,  0,  0,  0,365,20042],
    [20040,365,365,  0,365,365,  0,  0,  0,365,365,  0,365,365,20042],
    [20040,365,  0,  0,  0,365,  0,  0,  0,365,  0,  0,  0,365,20042],
    [20040,365,  0,  0,365,365,365,  0,365,365,365,  0,  0,365,20042],
    [20040,365,  0,  0,  0,365,  0,  0,  0,365,  0,  0,  0,365,20042],
    [20040,365,365,  0,365,365,  0,  0,  0,365,365,  0,365,365,20042],
    [20040,365,  0,  0,  0,365,365,  0,365,365,  0,  0,  0,365,20042],
    [20040,365,  0,  0,  0,365,  0,247,  0,365,  0,  0,  0,365,20042],
    [20040,365,  0,  0,  0,365,  0,  0,  0,365,  0,  0,  0,365,20042],
    [20040,365,365,365,365,365,  0, 88,  0,365,365,365,365,365,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}