main.floors.MT25=
{
    "floorId": "MT25",
    "title": "主塔 25 层",
    "name": "第 25 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "xxmtUdG.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "3,8": [
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    3,
                    9
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    3,
                    5
                ]
            },
            {
                "type": "setBlock",
                "number": "E406",
                "loc": [
                    [
                        2,
                        8
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "E406",
                "loc": [
                    [
                        4,
                        8
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "E406",
                "loc": [
                    [
                        4,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "E406",
                "loc": [
                    [
                        2,
                        6
                    ]
                ]
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "9,2": [
            {
                "type": "openDoor"
            }
        ],
        "9,4": [
            {
                "type": "openDoor"
            }
        ],
        "9,6": [
            {
                "type": "openDoor"
            }
        ],
        "3,2": [
            {
                "type": "openShop",
                "id": "F25IncrementalShop"
            },
            {
                "type": "function",
                "function": "function(){\ncore.addFlag('@temp@shop', 1);\n}"
            },
            {
                "type": "while",
                "condition": "1",
                "data": [
                    {
                        "type": "choices",
                        "text": "\t[金币商店,N417]（本商店需当面购买）\n花${20+flag:F25IncrementalShop}枚金币，您可以：",
                        "choices": [
                            {
                                "text": "攻击+3",
                                "icon": "redGem",
                                "color": [
                                    255,
                                    128,
                                    128,
                                    1
                                ],
                                "need": "status:money>=20+flag:F25IncrementalShop",
                                "action": [
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3",
                                        "stop": true
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:atk",
                                        "operator": "+=",
                                        "value": "3"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "20+flag:F25IncrementalShop"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:F25IncrementalShop",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "防御+3",
                                "icon": "blueGem",
                                "color": [
                                    128,
                                    128,
                                    255,
                                    1
                                ],
                                "need": "status:money>=20+flag:F25IncrementalShop",
                                "action": [
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3",
                                        "stop": true
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:def",
                                        "operator": "+=",
                                        "value": "3"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "20+flag:F25IncrementalShop"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:F25IncrementalShop",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "生命+800",
                                "icon": "yellowPotion",
                                "color": [
                                    192,
                                    192,
                                    192,
                                    1
                                ],
                                "need": "status:money>=20+flag:F25IncrementalShop",
                                "action": [
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3",
                                        "stop": true
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:hp",
                                        "operator": "+=",
                                        "value": "800"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "20+flag:F25IncrementalShop"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:F25IncrementalShop",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "离开",
                                "action": [
                                    {
                                        "type": "break",
                                        "n": 1
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "function",
                "function": "function(){\ncore.addFlag('@temp@shop', -1);\n}"
            }
        ]
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
    "beforeBattle": {},
    "afterBattle": {
        "2,6": [
            {
                "type": "setValue",
                "name": "flag:v83_F25Shop",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v83_F25Shop",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    9
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
                                    3,
                                    5
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,6": [
            {
                "type": "setValue",
                "name": "flag:v83_F25Shop",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v83_F25Shop",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    9
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
                                    3,
                                    5
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "2,8": [
            {
                "type": "setValue",
                "name": "flag:v83_F25Shop",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v83_F25Shop",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    9
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
                                    3,
                                    5
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,8": [
            {
                "type": "setValue",
                "name": "flag:v83_F25Shop",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v83_F25Shop",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    9
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
                                    3,
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
    [20040,  1,  1,  1,  1,  1,  1, 87,  0, 11,  0,211,  1, 27,20042],
    [20040,  1,415,417,416,  1,  1,  1,  1,383,  1, 11,  1,410,20042],
    [20040,  1, 32,405, 32,  1,  1,  0,211, 11,211,  0, 11,410,20042],
    [20040,  1, 58,  0, 58,  1,334, 33,  1,383,  1,  1,  1,  0,20042],
    [20040,  1,  1,  0,  1,  1,  1,408,408, 11,408,408,  1,  0,20042],
    [20040,  1,  0,  0,  0,  1,  1, 11,  1,383,  1,211, 11,211,20042],
    [20040,  1,  0,  0,  0,  1,  0,224,  1, 32,210, 32,  1,  0,20042],
    [20040,  1,  0,  0,  0,  1,  1, 11,  1, 11,  1,  1,  1,  0,20042],
    [20040,  1,  1,  0,  1,  1,  0,  0,  0,407,407,  1,210,210,20042],
    [20040, 28, 11,  0,  0, 11,405,  1,  1,  1,407,  1,210,  1,20042],
    [20040,  1,  1,  1,  1,  1,  1,  1, 28,  1,  0, 11,  0,  0,20042],
    [20040, 28, 27,  1, 32,  1,  0,  0,405,  0,  0,  1,407,  1,20042],
    [20040, 27, 28, 11,211, 11,  0, 88,  1,  0,  1,  1, 28, 59,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}