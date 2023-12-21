main.floors.MTn32=
{
    "floorId": "MTn32",
    "title": "主塔 -32 层",
    "name": "第 -32 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "CastleinSky.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "2,3": {
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
        "1,4": {
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
        "12,3": {
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
        "13,4": {
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
        "7,13": [
            {
                "type": "openShop",
                "id": "Fm32GoldShop",
                "open": true
            }
        ],
        "12,12": [
            {
                "type": "function",
                "function": "function(){\ncore.setFlag(\"DryVisitNext\", 1);\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "MTn33",
                "loc": [
                    12,
                    12
                ]
            }
        ]
    },
    "changeFloor": {
        "7,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "2,12": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,9": [
            {
                "type": "setValue",
                "name": "flag:Fm32_Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm32_Door",
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
                                    12
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,9": [
            {
                "type": "setValue",
                "name": "flag:Fm32_Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm32_Door",
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
                                    12
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,11": [
            {
                "type": "setValue",
                "name": "flag:Fm32_Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm32_Door",
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
                                    12
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
                "name": "flag:Fm32_Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm32_Door",
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
                                    12
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {
        "2,3": [
            {
                "type": "setBlock",
                "number": "whiteWall"
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
        "1,4": [
            {
                "type": "setBlock",
                "number": "whiteWall"
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
        "12,3": [
            {
                "type": "setBlock",
                "number": "whiteWall"
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
        "13,4": [
            {
                "type": "setBlock",
                "number": "whiteWall"
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
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040,  2,  2,  0,556,555, 27, 87, 28,555,556,  0,  2,  2,20042],
    [20040, 30, 29,556,  2, 31, 27, 34, 28, 32,  2,556, 29, 30,20042],
    [20040,  2, 33,  2,  2,  2,  2, 34,  2,  2,  2,  2, 33,  2,20042],
    [20040, 33, 27, 27, 27,  2,  0,557,  0,  2, 28, 28, 28, 33,20042],
    [20040,  2,  2,430,  2,  2,555,  3,555,  2,  2,430,  2,  2,20042],
    [20040, 31, 34,557,  0,  0, 27,  3, 28,  0,  0,557, 34, 31,20042],
    [20040, 32, 33,  3,  3,  3,  0,557,  0,  3,  3,  3, 33, 32,20042],
    [20040,  1,555,  0,555,  0,  0,  3,  0,  0,555,  0,555,  1,20042],
    [20040,  1,  1,430,  1,  1,557,  0,557,  1,  1,430,  1,  1,20042],
    [20040,  1, 31,556, 31,  1,  3,554,  3,  1, 31,556, 31,  1,20042],
    [20040,  1, 33, 32, 34,  1,556,  0,556,  1, 34, 32, 33,  1,20042],
    [20040,  1, 88, 27, 27,  1,  3,554,  3,  1, 28, 28,20255,  1,20042],
    [20040,  1,  1,  1,  1,  1,  9,130, 10,  1,  1,  1,  1,  1,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "underGround": true,
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2,  0,  0],
    [  0,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2,  0],
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
    "isDark": false
}