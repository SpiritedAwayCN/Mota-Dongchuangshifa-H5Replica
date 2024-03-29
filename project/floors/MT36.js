main.floors.MT36=
{
    "floorId": "MT36",
    "title": "主塔 36 层",
    "name": "第 36 层",
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
    "bgm": "014Theme03.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,6": [
            {
                "type": "openDoor"
            }
        ],
        "6,7": [
            {
                "type": "openDoor"
            }
        ],
        "7,8": [
            {
                "type": "openDoor"
            }
        ],
        "8,7": [
            {
                "type": "openDoor"
            }
        ],
        "7,13": [
            {
                "type": "openDoor"
            }
        ],
        "13,12": [
            {
                "type": "confirm",
                "text": "有一些有关本层怪物的提示，是否查看？\n（多次查看可能失去探索的乐趣）",
                "yes": [
                    "\t[H5复刻作者]击杀各红门内的\\i[ghostSoldier]鬼骑士后，将出现\\i[shield3]勇士盾。\n但请注意红钥匙的使用！"
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "12,12": {
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
        "3,12": [
            {
                "type": "setValue",
                "name": "flag:v137_F36Shield",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v137_F36Shield===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            7
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "shield3",
                        "loc": [
                            [
                                7,
                                7
                            ]
                        ]
                    }
                ]
            }
        ],
        "11,12": [
            {
                "type": "setValue",
                "name": "flag:v137_F36Shield",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v137_F36Shield===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            7
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "shield3",
                        "loc": [
                            [
                                7,
                                7
                            ]
                        ]
                    }
                ]
            }
        ],
        "11,2": [
            {
                "type": "setValue",
                "name": "flag:v137_F36Shield",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v137_F36Shield===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            7
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "shield3",
                        "loc": [
                            [
                                7,
                                7
                            ]
                        ]
                    }
                ]
            }
        ],
        "3,2": [
            {
                "type": "setValue",
                "name": "flag:v137_F36Shield",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v137_F36Shield===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            7
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "shield3",
                        "loc": [
                            [
                                7,
                                7
                            ]
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
    [20040,  3,  3,  3,  3,  3,  0, 87,  0,  3,  3,  3,  3,  3,20042],
    [20040,  3,  0,212,  0,  3,  0,  3,  0,  3,  0,212,  0,  3,20042],
    [20040,  3,244,244,244,  3,425,  3,425,  3,244,244,244,  3,20042],
    [20040,  3,  0,214,  0,  3,  0,  3,425,  3,  0,214,  0,  3,20042],
    [20040,  3,  3, 83,  3,  3,  0,  3,  0,  3,  3, 83,  3,  3,20042],
    [20040,  0,  0,425,  0,  0,  0,385,425,  0,425,425,  0,  0,20042],
    [20040,  0,  3,  3,  3,  3,385,  3,385,  3,  3,  3,  3,  0,20042],
    [20040,  0,  0,425,  0,  0,  0,385,  0,  0,  0,425,  0,  0,20042],
    [20040,  3,  3, 83,  3,  3,  0,  3,  0,  3,  3, 83,  3,  3,20042],
    [20040,  3,  0,214,  0,  3,  0,  3,  0,  3,  0,214,  0,  3,20042],
    [20040,  3,244,244,244,  3,  0,  3,  0,  3,244,244,244,  3,20042],
    [20040,  3,  0,212,  0,  3,425,  3,425,  3,  0,212, 88,129,20042],
    [20040,  3,  3,  3,  3,  3,  0,385,  0,  3,  3,  3,  3,  3,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}