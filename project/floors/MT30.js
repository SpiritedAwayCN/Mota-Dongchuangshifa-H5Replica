main.floors.MT30=
{
    "floorId": "MT30",
    "title": "主塔 30 层",
    "name": "第 30 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "060Slow03.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "3,1": [
            "\t[神秘老人,wizard]\b[this]战斗后，来点LGX吧。",
            {
                "type": "hide",
                "remove": true
            },
            {
                "type": "autoSave"
            }
        ],
        "4,9": [
            {
                "type": "choices",
                "text": "\t[神秘老人,wizard]上面的字符表示什么？",
                "choices": [
                    {
                        "text": "我知道，输入答案",
                        "action": [
                            {
                                "type": "input",
                                "text": "上面的字符表示什么？（提示：2F隐藏层）"
                            },
                            {
                                "type": "if",
                                "condition": "(flag:input===1560882)",
                                "true": [
                                    {
                                        "type": "hide",
                                        "remove": true
                                    }
                                ],
                                "false": [
                                    "\t[神秘老人,wizard]\b[this]错了，去隐藏层看看去！",
                                    {
                                        "type": "changePos",
                                        "loc": [
                                            1,
                                            1
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "我不知道，回去看看",
                        "action": [
                            {
                                "type": "changePos",
                                "loc": [
                                    1,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "text": "跳关(H5专属选项)",
                        "color": [
                            192,
                            192,
                            192,
                            1
                        ],
                        "action": [
                            {
                                "type": "hide",
                                "remove": true
                            }
                        ]
                    }
                ]
            }
        ],
        "2,12": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "3,12": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "4,12": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "5,12": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "6,12": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "7,12": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "8,12": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "9,12": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "10,12": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "11,12": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "12,12": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "12,11": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "12,10": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "12,9": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "12,8": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "12,7": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "11,7": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "10,9": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "10,10": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "11,10": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "10,8": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                },
                {
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        "\t[H5复刻作者]\b[this]提示：请先营救13F小偷。"
                    ]
                }
            ]
        },
        "9,8": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "8,8": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "8,9": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "7,9": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "8,11": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "8,6": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "10,6": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "10,5": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "10,4": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "9,4": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "9,1": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "9,2": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "10,2": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "11,2": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "13,1": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "13,2": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "13,3": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "13,4": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "12,4": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "12,5": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "11,8": [
            {
                "type": "choices",
                "text": "\t[神秘老人,wizard]恭喜通过这层，感到无聊么？",
                "choices": [
                    {
                        "text": "是",
                        "action": [
                            "\t[神秘老人,wizard]你让我失望。不过你的精神很好，祝你成功！"
                        ]
                    },
                    {
                        "text": "否",
                        "action": [
                            "\t[神秘老人,wizard]看来你比较适宜智力劳动！"
                        ]
                    }
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "3,2": [
            {
                "type": "confirm",
                "text": "要重置这些箱子吗?",
                "yes": [
                    {
                        "type": "function",
                        "function": "function(){\nvar boxMap = [\n\t[0, 1, 1, 1, 0],\n\t[0, 1, 0, 1, 0],\n\t[0, 0, 0, 0, 1],\n\t[0, 1, 1, 1, 0],\n\t[1, 0, 0, 0, 0]\n];\nfor (var i = 0; i < 5; i++)\n\tfor (var j = 0; j < 5; j++) {\n\t\tcore.setBlock(boxMap[i][j] ? \"box\" : 0, 2 + j, 3 + i);\n\t}\n}"
                    },
                    {
                        "type": "changePos",
                        "loc": [
                            4,
                            1
                        ],
                        "direction": "down"
                    }
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,9": {
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
    [20040, 88,  0,125,  0,169,169,  0,  0,  0,  0,  0,  0,  0,20042],
    [20040,20006,20006,129,162,  1,  1,  1,  0,  0,  0,  0,  0,  0,20042],
    [20040,  1,  0,169,169,169,  0,  1,  0,  0,  0,  0,  0,  0,20042],
    [20040,  1,  0,169,  0,169,  0,  1,  0,  0,  0,  0,  0,  0,20042],
    [20040,  1,  0,  0,  0,  0,169,  1,  0,  0,  0,  0,  0,  0,20042],
    [20040,  1,  0,169,169,169,  0,  1,  0,  0,  0,  0,  0,  0,20042],
    [20040,  1,169,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,20042],
    [20040,  1,  1,  1,162,  1,  1,  1,  0,  0,  0,125,  0,  0,20042],
    [20040,  0,  0,  0,125,  1,  0,  0,  0,  0,  0, 87,  0,  0,20042],
    [20040,  0,  1,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,20042],
    [20040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20042],
    [20040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20042],
    [20040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,20256,20291,  0,  0,20290,  0,20283,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,20287,  0,  0,  0,20276,20279,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "cannotMoveDirectly": true
}