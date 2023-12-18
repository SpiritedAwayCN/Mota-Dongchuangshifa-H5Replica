main.floors.MT82=
{
    "floorId": "MT82",
    "title": "主塔 82 层",
    "name": "第 82 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "055Negative04.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "8,1": {
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
        "3,2": [
            "\t[老人,man]\b[this]本层紫药水有概率的。所以请存档。",
            "\t[H5复刻作者]本复刻版中没有概率，该血瓶的回血值只与难度相关。",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "2,7": [
            {
                "type": "openDoor"
            }
        ],
        "8,2": [
            {
                "type": "openDoor"
            }
        ],
        "8,3": [
            {
                "type": "openDoor"
            }
        ],
        "8,4": [
            {
                "type": "openDoor"
            }
        ],
        "8,5": [
            {
                "type": "openDoor"
            }
        ],
        "8,6": [
            {
                "type": "openDoor"
            }
        ]
    },
    "changeFloor": {
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "7,13": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,2": [
            {
                "type": "setValue",
                "name": "flag:F82_Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F82_Door",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    3
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
                                    6,
                                    5
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
                                    6,
                                    9
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
                                    6,
                                    11
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "7,2": [
            {
                "type": "setValue",
                "name": "flag:F82_Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F82_Door",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    3
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
                                    6,
                                    5
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
                                    6,
                                    9
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
                                    6,
                                    11
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,4": [
            {
                "type": "setValue",
                "name": "flag:F82_Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F82_Door",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    3
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
                                    6,
                                    5
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
                                    6,
                                    9
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
                                    6,
                                    11
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:F82_Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F82_Door",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    3
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
                                    6,
                                    5
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
                                    6,
                                    9
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
                                    6,
                                    11
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:F82_Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F82_Door",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    3
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
                                    6,
                                    5
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
                                    6,
                                    9
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
                                    6,
                                    11
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:F82_Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F82_Door",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    3
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
                                    6,
                                    5
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
                                    6,
                                    9
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
                                    6,
                                    11
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "5,10": [
            {
                "type": "setValue",
                "name": "flag:F82_Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F82_Door",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    3
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
                                    6,
                                    5
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
                                    6,
                                    9
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
                                    6,
                                    11
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "7,10": [
            {
                "type": "setValue",
                "name": "flag:F82_Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F82_Door",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    3
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
                                    6,
                                    5
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
                                    6,
                                    9
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
                                    6,
                                    11
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {
        "8,1": [
            {
                "type": "setBlock",
                "number": "yellowWall"
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
        "8,7": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    50000
                ]
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040, 88,  1, 31,530, 31, 31, 31, 33,  1,  1,  1,  1,  1,20042],
    [20040,  0,  1,121,  1,533,  0,533,  1,538,529, 28, 28,  1,20042],
    [20040, 33,  1, 33,  1,  1, 85,  1,  1, 81,  1, 28, 28,  1,20042],
    [20040, 33,  1, 33,  1,531,  0,531,  1,537,  1,  1,  1,  1,20042],
    [20040, 33,  1, 33,  1,  1, 85,  1,  1, 27, 27, 27, 27,  1,20042],
    [20040, 81,  1, 81,  1, 27, 27, 27,  1,  1,  1, 82,  1,  1,20042],
    [20040,531,  1,531,  1, 28, 28, 28,454,539, 33, 33, 33, 33,20042],
    [20040,533,  1,533,  1,530,  0,530,  1,  1,  1, 82,  1,  1,20042],
    [20040,531,  1,531,  1,  1, 85,  1,  1, 27, 27, 27, 27,  1,20042],
    [20040, 81,  1, 81,  1,534,  0,534,  1,537,  1,  1,  1,  1,20042],
    [20040, 33,  1, 33,  1,  1, 85,  1,  1, 81,  1, 28, 28,  1,20042],
    [20040, 33,  1, 33,  1, 27, 28,  0,  1,538,529, 28, 28,  1,20042],
    [20040, 33,530, 33,  1, 27, 28, 87,  1,  1,  1,  1,  1,  1,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0],
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}