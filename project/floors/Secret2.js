main.floors.Secret2=
{
    "floorId": "Secret2",
    "title": "通往国家的路",
    "name": "通往国家的路",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "001-Sky01.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "mine.ogg",
    "firstArrive": [
        "\t[hero]\b[hero]还在下雨？不管了，回国家吧。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,13": [
            "通往魔塔的路封死了。。。"
        ],
        "6,6": {
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
                }
            ]
        },
        "5,6": {
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
                }
            ]
        },
        "4,5": {
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
                }
            ]
        },
        "4,4": {
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
                }
            ]
        },
        "4,3": {
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
                }
            ]
        },
        "4,2": {
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
                }
            ]
        },
        "4,1": {
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
                }
            ]
        },
        "4,7": {
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
                }
            ]
        },
        "4,9": {
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
                }
            ]
        },
        "4,8": {
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
                }
            ]
        },
        "4,10": {
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
                }
            ]
        },
        "4,11": {
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
                }
            ]
        },
        "4,13": {
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
                }
            ]
        },
        "10,7": {
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
                }
            ]
        },
        "10,11": {
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
                }
            ]
        },
        "10,13": {
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
                }
            ]
        },
        "10,3": {
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
                }
            ]
        },
        "10,1": {
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
                }
            ]
        },
        "9,6": {
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "确认要向前走吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
                }
            ]
        },
        "7,1": [
            {
                "type": "confirm",
                "text": "进入后将进行通关结算，\n将按当前角色的攻防和计算分数，\n是否确认进入？",
                "yes": [],
                "no": [
                    {
                        "type": "exit"
                    }
                ]
            },
            {
                "type": "changeFloor",
                "floorId": "Scene1",
                "loc": [
                    9,
                    13
                ],
                "direction": "up"
            }
        ],
        "7,6": {
            "trigger": "action",
            "enable": true,
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
                    "type": "autoSave",
                    "removeLast": true
                },
                {
                    "type": "insert",
                    "name": "难度配置",
                    "args": [
                        "final"
                    ]
                },
                {
                    "type": "if",
                    "condition": "((flag:realHard>=15)&&flag:s172_PerfectEnding)",
                    "true": [
                        {
                            "type": "choices",
                            "text": "\t[Black Devil,blackKing]最后一次，你真的要救这个不值得救的国家吗？",
                            "choices": [
                                {
                                    "text": "犹疑(接受来自魔王的5倍攻防)",
                                    "color": [
                                        40,
                                        255,
                                        40
                                    ],
                                    "action": [
                                        "\t[Black Devil,blackKing]\b[up]你正在迟疑，来吧，给你一部分能力，我们进行公平的决斗。",
                                        "\t[国王,N617]\b[hero]……",
                                        {
                                            "type": "setValue",
                                            "name": "status:atk",
                                            "operator": "*=",
                                            "value": "5"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "status:def",
                                            "operator": "*=",
                                            "value": "5"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "flag:GoodEnding",
                                            "value": "1"
                                        }
                                    ]
                                },
                                {
                                    "text": "当然(接受来自国王的10倍攻防)",
                                    "action": [
                                        "\t[Black Devil,blackKing]\b[up]你死定了！再见！",
                                        "\t[国王,N617]\b[hero]帮你把攻防变为10倍！",
                                        {
                                            "type": "setValue",
                                            "name": "status:atk",
                                            "operator": "*=",
                                            "value": "10"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "status:def",
                                            "operator": "*=",
                                            "value": "10"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "false": [
                        "\t[Black Devil,blackKing]\b[up]你死定了！再见！",
                        "\t[国王,N617]\b[hero]帮你把攻防变为10倍！",
                        {
                            "type": "setValue",
                            "name": "status:atk",
                            "operator": "*=",
                            "value": "10"
                        },
                        {
                            "type": "setValue",
                            "name": "status:def",
                            "operator": "*=",
                            "value": "10"
                        }
                    ]
                },
                {
                    "type": "sleep",
                    "time": 500
                },
                {
                    "type": "battle",
                    "id": "blackKing"
                },
                {
                    "type": "if",
                    "condition": "(flag:GoodEnding===1)",
                    "true": [
                        {
                            "type": "tip",
                            "text": "已进入Good End"
                        },
                        "\t[hero]\b[hero]……为何要帮我？",
                        "\t[Black Devil,blackKing]\b[up]一个充满恶行的国家，站在你身后的一国之君找到了我们，他主动选择了灭亡。",
                        "\t[国王,N617]\b[hero]我放任了万千的恶在我的国土滋生，以此了扩大国家的威慑力，也增强了我自己的实力。",
                        "\t[国王,N617]\b[hero]我一次次将我的女儿送往魔塔，以拯救公主的幌子吸引我的国民前往魔塔挑战，为我筛选出强大的士兵，为我消除异己。",
                        "\t[国王,N617]\b[hero]但随着时间的推移，有志高尚之士在我这个恶贯满盈的国度，丧生于权术、争斗、阴谋……",
                        "\t[国王,N617]\b[hero]我们的国家已经变成了恶的代名词，这脱离了我的掌控。因此，我选择了灭亡。圣人不干预人类的选择。",
                        "\t[hero]\b[hero]……",
                        "\t[Black Devil,blackKing]\b[up]勇者，你经受住了魔塔的考验，我代表魔塔为你让路。",
                        "\t[Black Devil,blackKing]\b[up]前方便是你的国家，你名义上完满的完成了拯救国家的任务。但是，这个国家值得你拯救吗？",
                        {
                            "type": "sleep",
                            "time": 500
                        },
                        "\t[hero]\b[hero]……",
                        "\t[Black Devil,blackKing]\b[up]${status:name}，你接受了我的力量，同时也战胜了我，你的国家不该是恶意的化生。你有实力，有了战胜魔塔的名誉，你应该有所行动。",
                        "\t[Black Devil,blackKing]\b[up]至于老头子，魔塔已经没有能力帮你实现国家的灭亡。你强行被这位勇者带回魔塔，准备如何面对你的人民？",
                        "\t[国王,N617]\b[hero]我自有分寸。",
                        "\t[hero]\b[hero]……“有所行动”，我自出生起就被卷入了这台国家机器，我永远只是国家的剑，一把没有头脑与自由意志的剑。",
                        "\t[hero]\b[hero]……我要救的是国家的人民、国家的信仰，不只是国王与公主。",
                        "\t[国王,N617]\b[hero]先回国家吧，${status:name}。我已经被你从魔塔里拉出来了，魔塔将要倒塌，我也无法回去了，快走吧。"
                    ],
                    "false": [
                        "\t[Black devil,blackKing]\b[up]……魔塔完了……",
                        "\t[Black devil,blackKing]\b[up]你行……"
                    ]
                },
                {
                    "type": "hide",
                    "remove": true
                }
            ]
        }
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [30040,30041,30041,30041,30041,30041,30041,30041,30041,30041,30041,30041,30041,30041,30042],
    [30040,  0,  0,  0,  0,  0,  0, 91,  0,  0,  0,  0,  0,  0,30042],
    [30040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30042],
    [30040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30042],
    [30040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30042],
    [30040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30042],
    [30040,  0,  0,  0,  0,  0,  0,229,  0,  0,  0,  0,  0,  0,30042],
    [30040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30042],
    [30040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30042],
    [30040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30042],
    [30040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30042],
    [30040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30042],
    [30040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30042],
    [30040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30042],
    [30048,30049,30049,30049,30049,30049,30049,30049,30049,30049,30049,30049,30049,30049,30050]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,142,142,142,142,142,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,142,142,142,142,142,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,142,142,142,142,142,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,142,142,142,142,142,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,142,142,142,142,142,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,142,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,142,142,142,142,142,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,142,142,142,142,142,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,142,142,142,142,142,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,142,142,142,142,142,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,142,142,142,142,142,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,142,142,142,142,142,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,142,142,142,142,142,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "weather": [
        "rain",
        6
    ]
}