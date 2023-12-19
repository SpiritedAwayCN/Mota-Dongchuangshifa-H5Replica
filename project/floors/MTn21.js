main.floors.MTn21=
{
    "floorId": "MTn21",
    "title": "主塔 -21 层",
    "name": "第 -21 层",
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
        "5,13": [
            "\t[老人,man]\b[this]下一层到了，就可完成\"任务\"了！@clue",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "8,1": [
            {
                "type": "choices",
                "text": "\t[商人,trader]我可给你提升所有3％的能力，要么？",
                "choices": [
                    {
                        "text": "好啊",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\n[\"atk\", \"def\", \"mdef\"].forEach(prop => {\n\tcore.status.hero[prop] = Math.floor(core.status.hero[prop] * 1.03);\n});\n}"
                            },
                            {
                                "type": "hide",
                                "remove": true
                            }
                        ]
                    },
                    {
                        "text": "以后吧",
                        "action": []
                    }
                ]
            }
        ],
        "3,3": [
            {
                "type": "choices",
                "text": "\t[商人,trader]我可给你提升所有3％的能力，要么？",
                "choices": [
                    {
                        "text": "好啊",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\n[\"atk\", \"def\", \"mdef\"].forEach(prop => {\n\tcore.status.hero[prop] = Math.floor(core.status.hero[prop] * 1.03);\n});\n}"
                            },
                            {
                                "type": "hide",
                                "remove": true
                            }
                        ]
                    },
                    {
                        "text": "以后吧",
                        "action": []
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "7,13": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "10,12": [
            {
                "type": "setValue",
                "name": "flag:v147_Fm21Treasure",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v147_Fm21Treasure",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
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
                                    11,
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
                                    11,
                                    4
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,12": [
            {
                "type": "setValue",
                "name": "flag:v147_Fm21Treasure",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v147_Fm21Treasure",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
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
                                    11,
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
                                    11,
                                    4
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,9": [
            {
                "type": "setValue",
                "name": "flag:v147_Fm21Treasure",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v147_Fm21Treasure",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
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
                                    11,
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
                                    11,
                                    4
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,9": [
            {
                "type": "setValue",
                "name": "flag:v147_Fm21Treasure",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v147_Fm21Treasure",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
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
                                    11,
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
                                    11,
                                    4
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,5": [
            {
                "type": "setValue",
                "name": "flag:v147_Fm21Treasure",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v147_Fm21Treasure",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
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
                                    11,
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
                                    11,
                                    4
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,5": [
            {
                "type": "setValue",
                "name": "flag:v147_Fm21Treasure",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v147_Fm21Treasure",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
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
                                    11,
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
                                    11,
                                    4
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
    [20040, 87,  1, 31, 31,253, 31, 31,122,  1, 34, 30, 34,  1,20042],
    [20040,  0,  1,  1,  1,253,  1,  1,  1,  1, 32, 28, 32,  1,20042],
    [20040,445,  1,122,  1,253,  1, 32,  0,  1, 31, 27, 31,  1,20042],
    [20040,244,  1,434,  1,  0,  1,  0, 27,  1,  1, 85,  1,  1,20042],
    [20040,443,  1,434,  1,  0,  1,  1,430,  1,443,  0,443,  1,20042],
    [20040,437,  1,  0,  0,  0,  0,438,438,  1,  0,  0,  0,  1,20042],
    [20040,438,  1,  0,  0,  1,  1,  1,  1,  1,  0,443,  0,  1,20042],
    [20040,244,  1,430,  1,  1, 56,390, 56,  1,  1, 85,  1,  1,20042],
    [20040,443,  1,437,  0,  1,253,253,253,  1,443,  0,443,  1,20042],
    [20040,445,  1,  1,444,  1,254,254,254,  1,  0,  0,  0,  1,20042],
    [20040,444,  1,437,  0,  1,  1,430,  1,  1,  1, 85,  1,  1,20042],
    [20040,232,  1,430,  1,  1,  0,  0,  0,  0,443,  0,443,  0,20042],
    [20040,  0,  0,  0,  0,121,  0, 88,  0,  0,  0,  0,  0,  0,20042],
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