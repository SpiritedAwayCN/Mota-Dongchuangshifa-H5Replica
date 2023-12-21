main.floors.MTn42=
{
    "floorId": "MTn42",
    "title": "主塔 -42 层",
    "name": "第 -42 层",
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
    "events": {},
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
    "afterBattle": {
        "2,12": [
            {
                "type": "setValue",
                "name": "flag:Fm42Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm42Door",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
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
                                    3,
                                    8
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
                                    3,
                                    5
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,12": [
            {
                "type": "setValue",
                "name": "flag:Fm42Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm42Door",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
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
                                    3,
                                    8
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
                                    3,
                                    5
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "2,9": [
            {
                "type": "setValue",
                "name": "flag:Fm42Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm42Door",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
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
                                    3,
                                    8
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
                                    3,
                                    5
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,9": [
            {
                "type": "setValue",
                "name": "flag:Fm42Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm42Door",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
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
                                    3,
                                    8
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
                                    3,
                                    5
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "2,6": [
            {
                "type": "setValue",
                "name": "flag:Fm42Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm42Door",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
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
                                    3,
                                    8
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
                "name": "flag:Fm42Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm42Door",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
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
                                    3,
                                    8
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
    [20040,  2,  2,  2,  2,  2,  0, 88, 32, 32,  1,  1,  1,  1,20042],
    [20040,  2, 27,553, 28,  2,566,  0,  0,  0,568, 27, 33,  1,20042],
    [20040,  2, 27, 34, 28,  2,431,  1,  1,430,  1,  1,  1,  1,20042],
    [20040,  2, 31,564, 32,  2,566,  0,564,564,  0, 34,567,567,20042],
    [20040,  2,  2, 85,  2,  2,  0,  1,430,  1,  1,  1,  1,430,20042],
    [20040,  2,570,  0,570,  2, 28, 32,564,  0, 27,  0,567,567,20042],
    [20040,  2, 34, 34,  0,  2,  0,  1,  1,  1,  1,  1,  0,  1,20042],
    [20040,  2,  2, 85,  2,  2,570, 32,  1, 27, 28,  1,570,  1,20042],
    [20040,  2,564,  0,564,  2,431,  1,  1,  1,430,  1,  0,  1,20042],
    [20040,  2, 32, 32,  0,  2,558,  0,556,  0,564,564, 31,561,20042],
    [20040,  2,  2, 85,  2,  2,  1,  1,556,  1,  1,  0,  1,430,20042],
    [20040,  2,561,  0,561,  2,  1, 27,556,  0,  1, 33,  1, 24,20042],
    [20040,  2, 31, 31,  0,  0,  0, 87,  1,  0,558,558,  1, 24,20042],
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