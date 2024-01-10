main.floors.MTn13=
{
    "floorId": "MTn13",
    "title": "主塔 -13 层",
    "name": "第 -13 层",
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
    "firstArrive": [
        {
            "type": "show",
            "loc": [
                [
                    7,
                    5
                ]
            ],
            "floorId": "MTn6"
        },
        {
            "type": "if",
            "condition": "flag:VerboseHint===1",
            "true": [
                "\t[H5复刻作者]提示：到达本层后，-6F发现了一些变化。"
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "12,6": [
            "\t[老人,man]\b[this]这种门可用通行证或用特殊钥匙开。@clue",
            "\t[老人,man]\b[this]但是如果你有通行证，会先用通行证。@clue",
            "\t[老人,man]\b[this]看见代闪电的东西了么，当你踩一些机关时，它们会发生一些变化。下一层的一样，不过样子不太一样。@clue",
            "\t[老人,man]\b[this]你踩一些机关后，一些机关路表面不发生变化，不过性质可能变化。@clue",
            {
                "type": "setValue",
                "name": "flag:v116_Chat",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "4,12": [
            "\t[老人,man]\b[this]去下一层看看吧！@clue",
            {
                "type": "setValue",
                "name": "flag:v116_Chat",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "12,12": {
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
                    "function": "function(){\n(function () {\n\tcore.setFlag(\"s82Red\", 0);\n\tif (core.getFlag(\"s83Green\", 0)) return;\n\n\tvar block_list = [\n\t\t[7, 5],\n\t\t[5, 7],\n\t\t[7, 9],\n\t\t[3, 8]\n\t];\n\tvar actions = block_list.map(function (block) {\n\t\treturn {\n\t\t\t\"type\": \"setBlock\",\n\t\t\t\"number\": \"X20231\",\n\t\t\t\"loc\": [\n\t\t\t\t[block[0], block[1]]\n\t\t\t]\n\t\t};\n\t});\n\tactions.push({ \"type\": \"tip\", \"text\": \"所有红色闪电已不可通行！\" });\n\tcore.insertAction(actions);\n})();\n}"
                },
                {
                    "type": "hide"
                }
            ]
        },
        "12,13": {
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
                    "function": "function(){\n(function () {\n\tcore.setFlag(\"s82Red\", 1);\n\tif (core.getFlag(\"s83Green\", 0)) return;\n\tvar block_list = [\n\t\t[7, 5],\n\t\t[5, 7],\n\t\t[7, 9],\n\t\t[3, 8]\n\t];\n\tvar actions = block_list.map(function (block) {\n\t\treturn {\n\t\t\t\"type\": \"setBlock\",\n\t\t\t\"number\": \"T464\",\n\t\t\t\"loc\": [\n\t\t\t\t[block[0], block[1]]\n\t\t\t]\n\t\t};\n\t});\n\tactions.push({ \"type\": \"tip\", \"text\": \"所有红色闪电已可通行！\" });\n\t// \tconsole.log(actions);\n\tcore.insertAction(actions);\n})();\n}"
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            12,
                            12
                        ]
                    ]
                }
            ]
        },
        "6,5": {
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
                    "function": "function(){\n(function () {\n\tvar actions = [];\n\tcore.setFlag(\"s83Green\", 1);\n\tvar block_list_red = [\n\t\t[7, 5],\n\t\t[5, 7],\n\t\t[7, 9],\n\t\t[3, 8]\n\t];\n\tactions.push.apply(actions, block_list_red.map(function (block) {\n\t\treturn {\n\t\t\t\"type\": \"setBlock\",\n\t\t\t\"number\": 0,\n\t\t\t\"loc\": [\n\t\t\t\t[block[0], block[1]]\n\t\t\t]\n\t\t};\n\t}));\n\n\tif (!core.getFlag(\"s84Blue\", 0)) {\n\t\tvar block_list = [\n\t\t\t[5, 3],\n\t\t\t[9, 3]\n\t\t];\n\t\tactions.push.apply(actions, block_list.filter(coord => core.getBlockId(coord[0], coord[1]) === \"T467\").map(function (block) {\n\t\t\treturn {\n\t\t\t\t\"type\": \"setBlock\",\n\t\t\t\t\"number\": \"T468\",\n\t\t\t\t\"loc\": [\n\t\t\t\t\t[block[0], block[1]]\n\t\t\t\t]\n\t\t\t};\n\t\t}));\n\t}\n\n\tactions.push({ \"type\": \"tip\", \"text\": \"所有绿色闪电已可通行！\" });\n\tcore.insertAction(actions);\n})();\n}"
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            6,
                            4
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            6,
                            6
                        ]
                    ]
                }
            ]
        },
        "6,4": {
            "trigger": null,
            "enable": false,
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
                    "function": "function(){\n(function () {\n\tvar actions = [];\n\tcore.setFlag(\"s83Green\", 0);\n\tvar block_list_red = [\n\t\t[7, 5],\n\t\t[5, 7],\n\t\t[7, 9],\n\t\t[3, 8]\n\t];\n\tactions.push.apply(actions, block_list_red.map(function (block) {\n\t\treturn {\n\t\t\t\"type\": \"setBlock\",\n\t\t\t\"number\": core.getFlag(\"s82Red\", 0) ? \"T464\" : \"X20231\",\n\t\t\t\"loc\": [\n\t\t\t\t[block[0], block[1]]\n\t\t\t]\n\t\t};\n\t}));\n\n\tif (!core.getFlag(\"s84Blue\", 0)) {\n\t\tvar block_list = [\n\t\t\t[3, 5],\n\t\t\t[3, 9]\n\t\t];\n\t\tactions.push.apply(actions, block_list.filter(coord => core.getBlockId(coord[0], coord[1]) === \"T468\").map(function (block) {\n\t\t\treturn {\n\t\t\t\t\"type\": \"setBlock\",\n\t\t\t\t\"number\": \"T467\",\n\t\t\t\t\"loc\": [\n\t\t\t\t\t[block[0], block[1]]\n\t\t\t\t]\n\t\t\t};\n\t\t}));\n\t}\n\n\tactions.push({ \"type\": \"tip\", \"text\": \"所有绿色闪电已不可通行！\" });\n\tcore.insertAction(actions);\n})();\n}"
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            4
                        ]
                    ]
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            6
                        ]
                    ]
                }
            ]
        },
        "6,6": {
            "trigger": null,
            "enable": false,
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
                    "function": "function(){\n(function () {\n\tvar actions = [];\n\tcore.setFlag(\"s83Green\", 0);\n\tvar block_list_red = [\n\t\t[7, 5],\n\t\t[5, 7],\n\t\t[7, 9],\n\t\t[3, 8]\n\t];\n\tactions.push.apply(actions, block_list_red.map(function (block) {\n\t\treturn {\n\t\t\t\"type\": \"setBlock\",\n\t\t\t\"number\": core.getFlag(\"s82Red\", 0) ? \"T464\" : \"X20231\",\n\t\t\t\"loc\": [\n\t\t\t\t[block[0], block[1]]\n\t\t\t]\n\t\t};\n\t}));\n\n\tif (!core.getFlag(\"s84Blue\", 0)) {\n\t\tvar block_list = [\n\t\t\t[3, 5],\n\t\t\t[3, 9]\n\t\t];\n\t\tactions.push.apply(actions, block_list.filter(coord => core.getBlockId(coord[0], coord[1]) === \"T468\").map(function (block) {\n\t\t\treturn {\n\t\t\t\t\"type\": \"setBlock\",\n\t\t\t\t\"number\": \"T467\",\n\t\t\t\t\"loc\": [\n\t\t\t\t\t[block[0], block[1]]\n\t\t\t\t]\n\t\t\t};\n\t\t}));\n\t}\n\n\tactions.push({ \"type\": \"tip\", \"text\": \"所有绿色闪电已不可通行！\" });\n\tcore.insertAction(actions);\n})();\n}"
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            4
                        ]
                    ]
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            6
                        ]
                    ]
                }
            ]
        },
        "12,1": {
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
                    "function": "function(){\n(function () {\n\tvar actions = [];\n\tcore.setFlag(\"s84Blue\", 1);\n\tvar block_list_green = [\n\t\t[5, 3],\n\t\t[9, 3]\n\t];\n\tactions.push.apply(actions, block_list_green.map(function (block) {\n\t\treturn {\n\t\t\t\"type\": \"setBlock\",\n\t\t\t\"number\": 0,\n\t\t\t\"loc\": [\n\t\t\t\t[block[0], block[1]]\n\t\t\t]\n\t\t};\n\t}));\n\n\tvar block_list = [\n\t\t[3, 9]\n\t];\n\tactions.push.apply(actions, block_list.filter(coord => core.getBlockId(coord[0], coord[1]) === \"T469\").map(function (block) {\n\t\treturn {\n\t\t\t\"type\": \"setBlock\",\n\t\t\t\"number\": \"T470\",\n\t\t\t\"loc\": [\n\t\t\t\t[block[0], block[1]]\n\t\t\t]\n\t\t};\n\t}));\n\n\tif (!core.getFlag(\"s87Switch\", 0)) {\n\t\tactions.push({ \"type\": \"setBlock\", \"number\": \"T470\", \"loc\": [\n\t\t\t\t[5, 11]\n\t\t\t], \"floorId\": \"MTn14\" });\n\t}\n\n\tactions.push({ \"type\": \"tip\", \"text\": \"所有蓝色闪电已可通行！\" });\n\tcore.insertAction(actions);\n})();\n}"
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            12,
                            2
                        ]
                    ]
                }
            ]
        },
        "12,2": {
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
                    "function": "function(){\n(function () {\n\tvar actions = [];\n\tcore.setFlag(\"s84Blue\", 0);\n\tvar block_list_green = [\n\t\t[5, 3],\n\t\t[9, 3]\n\t];\n\tactions.push.apply(actions, block_list_green.map(function (block) {\n\t\treturn {\n\t\t\t\"type\": \"setBlock\",\n\t\t\t\"number\": core.getFlag(\"s83Green\", 0) ? \"T468\" : \"T467\",\n\t\t\t\"loc\": [\n\t\t\t\t[block[0], block[1]]\n\t\t\t]\n\t\t};\n\t}));\n\n\tvar block_list = [\n\t\t[3, 9]\n\t];\n\tactions.push.apply(actions, block_list.filter(coord => core.getBlockId(coord[0], coord[1]) === \"T470\").map(function (block) {\n\t\treturn {\n\t\t\t\"type\": \"setBlock\",\n\t\t\t\"number\": \"T469\",\n\t\t\t\"loc\": [\n\t\t\t\t[block[0], block[1]]\n\t\t\t]\n\t\t};\n\t}));\n\tif (!core.getFlag(\"s87Switch\", 0)) {\n\t\tactions.push({\n\t\t\t\"type\": \"setBlock\",\n\t\t\t\"number\": \"T469\",\n\t\t\t\"loc\": [\n\t\t\t\t[5, 11]\n\t\t\t],\n\t\t\t\"floorId\": \"MTn14\"\n\t\t});\n\t}\n\n\tactions.push({ \"type\": \"tip\", \"text\": \"所有蓝色闪电已不可通行！\" });\n\tcore.insertAction(actions);\n})();\n}"
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            12,
                            2
                        ]
                    ]
                }
            ]
        },
        "6,13": [
            {
                "type": "playSound",
                "name": "door.mp3"
            },
            {
                "type": "setBlock",
                "number": "T466",
                "loc": [
                    [
                        3,
                        5
                    ]
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        12
                    ]
                ]
            },
            {
                "type": "tip",
                "text": "黄色闪电已可通行！"
            }
        ],
        "6,12": {
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
                    "type": "setBlock",
                    "number": "T465",
                    "loc": [
                        [
                            3,
                            5
                        ]
                    ]
                },
                {
                    "type": "tip",
                    "text": "黄色闪电已不可通行！"
                },
                {
                    "type": "hide"
                }
            ]
        },
        "10,6": [
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
                "text": "\t[H5复刻作者]提示：1/4\n1. 角色A踩右下红色机关，后切换至角色B；\n2. ……",
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
                "text": "\t[H5复刻作者]提示：2/4\n1. 角色A踩右下红色机关，后切换至角色B；\n2. 角色B踩中上绿色机关，后切换至角色A；\n3. ……",
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
                "text": "\t[H5复刻作者]提示：3/4\n1. 角色A踩右下红色机关，后切换至角色B；\n2. 角色B踩中上绿色机关，后切换至角色A；\n3. 角色A踩右上蓝色机关，后切换至角色B；\n4. ……",
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
                "text": "\t[H5复刻作者]提示：4/4\n1. 角色A踩右下红色机关，后切换至角色B；\n2. 角色B踩中上绿色机关，后切换至角色A；\n3. 角色A踩右上蓝色机关，后切换至角色B；\n4. 角色B向右走一格，然后下楼。",
                "choices": [
                    {
                        "text": "已提示完成",
                        "action": []
                    }
                ]
            }
        ],
        "13,11": [
            {
                "type": "confirm",
                "text": "跳过本层解密？(须先营救女子)",
                "yes": [
                    {
                        "type": "if",
                        "condition": "(flag:FoundWoman===1)",
                        "true": [
                            {
                                "type": "changeFloor",
                                "floorId": ":before",
                                "stair": "upFloor"
                            }
                        ],
                        "false": [
                            "\t[H5复刻作者]请先营救\\i[N448]女子，位于-6F。"
                        ]
                    }
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "13,8": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "2,12": {
            "floorId": ":before",
            "stair": "upFloor"
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
    [20040, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86,479, 86,20042],
    [20040, 86,  0,  0,  0, 86,  0,  0,  0, 86,  0,  0,  0, 86,20042],
    [20040, 86,  0,  0,  0,467,  0,  0,  0,467,  0,  0,  0, 86,20042],
    [20040, 86,  0,  0,  0, 86,  0,  0,  0, 86,  0,  0,  0, 86,20042],
    [20040, 86, 86,465, 86, 86,481,20231, 86, 86, 86,460, 86, 86,20042],
    [20040, 86,  0,  0,  0, 86,  0,  0,  0, 86,129,  0,121, 86,20042],
    [20040, 86,  0,  0,  0,20231,  0,  0,  0,460,  0,  0,  0, 86,20042],
    [20040, 86,  0,20231,  0, 86,  0,  0,  0, 86,  0,  0,  0, 87,20042],
    [20040, 86, 86,469, 86, 86, 86,20231, 86, 86, 86,460, 86, 86,20042],
    [20040, 86,  0,  0,  0, 86,  0,  0,  0, 86,  0,  0,  0, 86,20042],
    [20040, 86,  0,  0,  0,460,  0,  0,  0,  0,  0,  0,  0,129,20042],
    [20040, 86, 88,  0,121, 86,  0,  0,  0, 86,  0,  0,  0, 86,20042],
    [20040, 86, 86, 86, 86, 86,477, 86, 86, 86, 86, 86,475, 86,20042],
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