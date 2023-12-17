main.floors.MTn14=
{
    "floorId": "MTn14",
    "title": "主塔 -14 层",
    "name": "第 -14 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "012Theme01.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,12": [
            {
                "type": "if",
                "condition": "(blockNumber:3,5===10222)",
                "true": [
                    {
                        "type": "setBlock",
                        "number": "X10230",
                        "loc": [
                            [
                                3,
                                5
                            ]
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "setBlock",
                        "number": "X10222",
                        "loc": [
                            [
                                3,
                                5
                            ]
                        ]
                    }
                ]
            }
        ],
        "7,7": {
            "trigger": null,
            "enable": true,
            "noPass": false,
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
                {
                    "type": "if",
                    "condition": "(switch:A!==1)",
                    "true": [
                        {
                            "type": "playSound",
                            "name": "door.mp3"
                        },
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    5,
                                    7
                                ]
                            ],
                            "remove": true
                        },
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    9,
                                    7
                                ]
                            ],
                            "remove": true
                        },
                        {
                            "type": "setBlock",
                            "number": "T484"
                        },
                        {
                            "type": "setValue",
                            "name": "switch:A",
                            "value": "1"
                        }
                    ]
                }
            ]
        },
        "13,4": {
            "trigger": null,
            "enable": true,
            "noPass": false,
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
                {
                    "type": "playSound",
                    "name": "door.mp3"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.setFlag(\"s87Switch\", 1);\ncore.setBlock(0, 5, 11);\ncore.setBlock(0, 9, 4);\n}"
                },
                {
                    "type": "setBlock",
                    "number": "T486"
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            12,
                            4
                        ]
                    ]
                }
            ]
        },
        "12,4": {
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
            "data": [
                {
                    "type": "playSound",
                    "name": "door.mp3"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.setFlag(\"s87Switch\", 0);\ncore.setBlock(core.getFlag(\"s84Blue\", 0) ? \"I470\" : \"I469\", 5, 11);\ncore.setBlock(\"T472\", 9, 4);\n}"
                },
                {
                    "type": "setBlock",
                    "number": "T485"
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            12,
                            4
                        ]
                    ]
                }
            ]
        },
        "6,1": {
            "trigger": null,
            "enable": true,
            "noPass": false,
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
                {
                    "type": "playSound",
                    "name": "door.mp3"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.setBlock(0, 9, 3);\n}"
                },
                {
                    "type": "setBlock",
                    "number": "T488"
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            6,
                            2
                        ]
                    ]
                }
            ]
        },
        "6,2": {
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
            "data": [
                {
                    "type": "playSound",
                    "name": "door.mp3"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.setBlock(\"T473\", 9, 3);\n}"
                },
                {
                    "type": "setBlock",
                    "number": "T487"
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            2
                        ]
                    ]
                }
            ]
        },
        "2,2": {
            "trigger": null,
            "enable": true,
            "noPass": false,
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
                {
                    "type": "playSound",
                    "name": "door.mp3"
                },
                {
                    "type": "function",
                    "function": "function(){\nvar block_list = [\n\t[3, 9],\n\t[11, 9],\n\t[9, 11]\n];\nblock_list.forEach(coord => {\n\tcore.setBlock(0, coord[0], coord[1]);\n});\n}"
                },
                {
                    "type": "setBlock",
                    "number": "T459"
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            3,
                            2
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            2,
                            3
                        ]
                    ]
                }
            ]
        },
        "2,3": {
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
            "data": [
                {
                    "type": "playSound",
                    "name": "door.mp3"
                },
                {
                    "type": "function",
                    "function": "function(){\nvar block_list = [\n\t[3, 9],\n\t[11, 9],\n\t[9, 11]\n];\nblock_list.forEach(coord => {\n\tcore.setBlock(\"T474\", coord[0], coord[1]);\n});\n}"
                },
                {
                    "type": "setBlock",
                    "number": "T458",
                    "loc": [
                        [
                            2,
                            2
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            3,
                            2
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            2,
                            3
                        ]
                    ]
                }
            ]
        },
        "3,2": {
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
            "data": [
                {
                    "type": "playSound",
                    "name": "door.mp3"
                },
                {
                    "type": "function",
                    "function": "function(){\nvar block_list = [\n\t[3, 9],\n\t[11, 9],\n\t[9, 11]\n];\nblock_list.forEach(coord => {\n\tcore.setBlock(\"T474\", coord[0], coord[1]);\n});\n}"
                },
                {
                    "type": "setBlock",
                    "number": "T458",
                    "loc": [
                        [
                            2,
                            2
                        ]
                    ]
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            3,
                            2
                        ]
                    ]
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            2,
                            3
                        ]
                    ]
                }
            ]
        },
        "2,10": [
            {
                "type": "choices",
                "text": "\t[H5复刻作者]卡关了？是否查看本层通过提示？",
                "choices": [
                    {
                        "text": "自己尝试",
                        "action": [
                            {
                                "type": "exit"
                            }
                        ]
                    },
                    {
                        "text": "看提示(H5专属)",
                        "color": [
                            192,
                            192,
                            192,
                            1
                        ],
                        "action": []
                    }
                ]
            },
            {
                "type": "choices",
                "text": "\t[H5复刻作者]提示：1/4\n1. 角色A踩住楼上蓝色机关，角色B踩菱形；\n2. ……",
                "choices": [
                    {
                        "text": "自己尝试",
                        "action": [
                            {
                                "type": "exit"
                            }
                        ]
                    },
                    {
                        "text": "继续提示",
                        "color": [
                            192,
                            192,
                            192,
                            1
                        ],
                        "action": []
                    }
                ]
            },
            {
                "type": "choices",
                "text": "\t[H5复刻作者]提示：2/4\n1. 角色A踩住楼上蓝色机关，角色B踩菱形；\n2. 角色B触发正中机关，并踩右上蓝机关；\n3. ……",
                "choices": [
                    {
                        "text": "自己尝试",
                        "action": [
                            {
                                "type": "exit"
                            }
                        ]
                    },
                    {
                        "text": "继续提示",
                        "color": [
                            192,
                            192,
                            192,
                            1
                        ],
                        "action": []
                    }
                ]
            },
            {
                "type": "choices",
                "text": "\t[H5复刻作者]提示：3/4\n1. 角色A踩住楼上蓝色机关，角色B踩菱形；\n2. 角色B触发正中机关，并踩右上蓝机关；\n3. 角色A到本层，并踩住正上绿色机关；\n4. ……",
                "choices": [
                    {
                        "text": "自己尝试",
                        "action": [
                            {
                                "type": "exit"
                            }
                        ]
                    },
                    {
                        "text": "继续提示",
                        "color": [
                            192,
                            192,
                            192,
                            1
                        ],
                        "action": []
                    }
                ]
            },
            {
                "type": "choices",
                "text": "\t[H5复刻作者]提示：4/4\n1. 角色A踩住楼上蓝色机关，角色B踩菱形；\n2. 角色B触发正中机关，并踩右上蓝机关；\n3. 角色A到本层，并踩住正上绿色机关；\n4. 角色B触发左上机关，角色A下楼。",
                "choices": [
                    {
                        "text": "已提示完成",
                        "action": []
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "12,13": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "2,12": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040, 86, 86, 86, 86, 86,487, 86, 86, 86, 86, 86, 86, 86,20042],
    [20040, 86,458,  0,  0, 86,  0,  0,  0, 86,  0,  0,  0, 86,20042],
    [20040, 86,  0,  0,  0,163,  0,  0,  0,473,  0,  0,  0, 86,20042],
    [20040, 86,  0,  0,  0, 86,  0,  0,  0,472,  0,  0,  0,485,20042],
    [20040, 86, 86,10222, 86, 86, 86, 86, 86, 86, 86,169, 86, 86,20042],
    [20040, 86,  0,  0,  0, 86,  0,  0,  0, 86,  0,169,  0, 86,20042],
    [20040, 86,  0,  0,  0,471,441,483,440,471,  0,  0,  0, 86,20042],
    [20040, 86,  0,  0,  0, 86,  0,442,  0, 86,  0,  0,  0, 86,20042],
    [20040, 86, 86,474, 86, 86, 86,  0, 86, 86, 86,474, 86, 86,20042],
    [20040, 86,129,  0,  0, 86,  0,  0,  0, 86,  0,  0,  0, 86,20042],
    [20040, 86,  0,  0,  0,469,  0,  0,  0,474,  0,  0,  0, 86,20042],
    [20040, 86, 87,  0,  0, 86,  0,104,  0, 86,  0,  0,  0, 86,20042],
    [20040, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 88, 86,20042],
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