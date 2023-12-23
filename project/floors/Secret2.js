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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
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
                    "type": "lose",
                    "reason": "结局6"
                }
            ]
        }
    },
    "changeFloor": {
        "7,1": {
            "floorId": "Scene1",
            "loc": [
                9,
                13
            ],
            "direction": "up"
        }
    },
    "beforeBattle": {
        "7,6": [
            "\t[Black Devil,blackKing]\b[this]你死定了！再见！",
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
            },
            {
                "type": "sleep",
                "time": 500
            }
        ]
    },
    "afterBattle": {
        "7,6": [
            "\t[Black devil,blackKing]\b[this]……魔塔完了……",
            "\t[Black devil,blackKing]\b[this]你行……"
        ]
    },
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