main.floors.MT59=
{
    "floorId": "MT59",
    "title": "主塔 59 层",
    "name": "第 59 层",
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
    "bgm": "040Dungeon06.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,11": {
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
        "7,10": {
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
        "6,10": {
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
        "6,9": {
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
        "5,12": {
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
        "9,12": {
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
        "9,13": {
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
        "2,7": [
            "\t[老人,man]\b[this]没有物种探测器,你将会寸步难行。",
            "\t[H5复刻作者]复刻版中潜伏属性无效，因此物种探测器没有效果。",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "11,7": [
            {
                "type": "if",
                "condition": "(switch:A!==1)",
                "true": [
                    {
                        "type": "confirm",
                        "text": "访问此商店将把：\n35/48/59F商店价格重设为一个固定值\n是否确认访问？",
                        "yes": [],
                        "no": [
                            {
                                "type": "exit"
                            }
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:TSWshopOffset",
                        "value": "500-10*(flag:v13_TSWshop*flag:v13_TSWshop-flag:v13_TSWshop+2)"
                    },
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "1"
                    }
                ]
            },
            {
                "type": "openShop",
                "id": "F35TSWShop"
            },
            {
                "type": "insert",
                "name": "OtherShops",
                "args": [
                    "TSWShop",
                    12
                ]
            }
        ],
        "1,13": [
            {
                "type": "openShop",
                "id": "F59ExpShop",
                "open": true
            }
        ],
        "10,13": [
            {
                "type": "changeFloor",
                "floorId": "MT60",
                "loc": [
                    10,
                    13
                ]
            }
        ]
    },
    "changeFloor": {
        "8,13": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,8": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "10,12": [
            {
                "type": "setValue",
                "name": "flag:v195_F59Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v195_F59Door",
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
                                    5
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
                "name": "flag:v195_F59Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v195_F59Door",
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
                                    5
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
                "name": "flag:v195_F59Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v195_F59Door",
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
                                    5
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
                "name": "flag:v195_F59Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v195_F59Door",
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
                                    5
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,6": [
            {
                "type": "setValue",
                "name": "flag:v195_F59Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v195_F59Door",
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
                                    5
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,6": [
            {
                "type": "setValue",
                "name": "flag:v195_F59Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:v195_F59Door",
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
                                    5
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {
        "7,11": [
            {
                "type": "setBlock",
                "number": "blueWall"
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
        "7,10": [
            {
                "type": "setBlock",
                "number": "blueWall"
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
        "6,10": [
            {
                "type": "setBlock",
                "number": "blueWall"
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
        "6,9": [
            {
                "type": "setBlock",
                "number": "blueWall"
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
        "5,12": [
            {
                "type": "setBlock",
                "number": "blueWall"
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
        "9,12": [
            {
                "type": "setBlock",
                "number": "blueWall"
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
        "9,13": [
            {
                "type": "setBlock",
                "number": "blueWall"
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
    [20040, 31,516,  0,516, 31,  3, 30, 29,  3,  3,  3,  3,  3,20042],
    [20040,  3,  3, 33,  3,  3,  3, 27, 28,  3, 33,526, 33,  3,20042],
    [20040, 27,  3,519,  3, 28,  3,  0,516,  3, 27, 34, 28,  3,20042],
    [20040, 27,  3,517,  3, 28,  3,516,514,  3, 27, 34, 28,  3,20042],
    [20040,519,  3,518,  3,519,  3,514,241,  3,  3, 85,  3,  3,20042],
    [20040, 81,  3, 82,  3, 81,  3,241,240,  3,519,  0,519,  3,20042],
    [20040,  0,121,  0,514,  0,  3,  3, 81,  3,  7,131,  8,  3,20042],
    [20040, 87, 32,  0,  3, 29,520,520, 22,  3,  3, 85,  3,  3,20042],
    [20040,  3,  3, 81,  3,518, 34,520,520,  3,518,  0,518,  3,20042],
    [20040,514,520,520,  3,518, 34, 34,520,  3,  0,  0,  0,  3,20042],
    [20040, 32,514,520,  3,518,518, 34,520,  3,  3, 85,  3,  3,20042],
    [20040,  3,  3,  3,  3, 34, 34, 34, 34, 34,517,  0,517,  3,20042],
    [20040,122,519,518,517,520, 34, 34, 88, 34,20247,  0,  0,  3,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  3,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  3,  3,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  3,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  3,  0,  0,  0,  3,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}