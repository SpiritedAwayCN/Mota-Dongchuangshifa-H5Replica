main.floors.MT37=
{
    "floorId": "MT37",
    "title": "主塔 37 层",
    "name": "第 37 层",
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
        "7,13": {
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
            "data": []
        },
        "2,2": {
            "trigger": "action",
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
                    "condition": "(flag:F37_fetched>=[12,6,3,1][flag:37FItemlevel])",
                    "true": [
                        "\t[H5难度系统]根据当前的难度设置，您已无法获得此宝物。\n若确需获取，请按C修改\"37F宝物相关\"难度选项。",
                        {
                            "type": "exit"
                        }
                    ]
                },
                {
                    "type": "if",
                    "condition": "(flag:F37_fetched>=[12,6,3,1][flag:37FItemlevelUb])",
                    "true": [
                        {
                            "type": "if",
                            "condition": "(flag:F37_DisabledTag!==1)",
                            "true": [
                                {
                                    "type": "confirm",
                                    "default": true,
                                    "text": "获得此宝物后，部分更高难度选项将不再可用。\n您当前可获得此宝物，确认要获得此宝物吗？",
                                    "yes": [
                                        {
                                            "type": "setValue",
                                            "name": "flag:F37_DisabledTag",
                                            "value": "1"
                                        }
                                    ],
                                    "no": [
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "setValue",
                            "name": "flag:37FItemlevelUb",
                            "operator": "-=",
                            "value": "1"
                        }
                    ]
                },
                {
                    "type": "setValue",
                    "name": "flag:F37_fetched",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "item:upFly",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "hide",
                    "remove": true
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            7,
                            13
                        ]
                    ]
                }
            ]
        },
        "12,4": {
            "trigger": "action",
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
                    "condition": "(flag:F37_fetched>=[12,6,3,1][flag:37FItemlevel])",
                    "true": [
                        "\t[H5难度系统]根据当前的难度设置，您已无法获得此宝物。\n若确需获取，请按C修改\"37F宝物相关\"难度选项。",
                        {
                            "type": "exit"
                        }
                    ]
                },
                {
                    "type": "if",
                    "condition": "(flag:F37_fetched>=[12,6,3,1][flag:37FItemlevelUb])",
                    "true": [
                        {
                            "type": "if",
                            "condition": "(flag:F37_DisabledTag!==1)",
                            "true": [
                                {
                                    "type": "confirm",
                                    "default": true,
                                    "text": "获得此宝物后，部分更高难度选项将不再可用。\n您当前可获得此宝物，确认要获得此宝物吗？",
                                    "yes": [
                                        {
                                            "type": "setValue",
                                            "name": "flag:F37_DisabledTag",
                                            "value": "1"
                                        }
                                    ],
                                    "no": [
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "setValue",
                            "name": "flag:37FItemlevelUb",
                            "operator": "-=",
                            "value": "1"
                        }
                    ]
                },
                {
                    "type": "setValue",
                    "name": "flag:F37_fetched",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "item:upFly",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "hide",
                    "remove": true
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            7,
                            13
                        ]
                    ]
                }
            ]
        },
        "2,4": {
            "trigger": "action",
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
                    "condition": "(flag:F37_fetched>=[12,6,3,1][flag:37FItemlevel])",
                    "true": [
                        "\t[H5难度系统]根据当前的难度设置，您已无法获得此宝物。\n若确需获取，请按C修改\"37F宝物相关\"难度选项。",
                        {
                            "type": "exit"
                        }
                    ]
                },
                {
                    "type": "if",
                    "condition": "(flag:F37_fetched>=[12,6,3,1][flag:37FItemlevelUb])",
                    "true": [
                        {
                            "type": "if",
                            "condition": "(flag:F37_DisabledTag!==1)",
                            "true": [
                                {
                                    "type": "confirm",
                                    "default": true,
                                    "text": "获得此宝物后，部分更高难度选项将不再可用。\n您当前可获得此宝物，确认要获得此宝物吗？",
                                    "yes": [
                                        {
                                            "type": "setValue",
                                            "name": "flag:F37_DisabledTag",
                                            "value": "1"
                                        }
                                    ],
                                    "no": [
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "setValue",
                            "name": "flag:37FItemlevelUb",
                            "operator": "-=",
                            "value": "1"
                        }
                    ]
                },
                {
                    "type": "setValue",
                    "name": "flag:F37_fetched",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "item:downFly",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "hide",
                    "remove": true
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            7,
                            13
                        ]
                    ]
                }
            ]
        },
        "12,12": {
            "trigger": "action",
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
                    "condition": "(flag:F37_fetched>=[12,6,3,1][flag:37FItemlevel])",
                    "true": [
                        "\t[H5难度系统]根据当前的难度设置，您已无法获得此宝物。\n若确需获取，请按C修改\"37F宝物相关\"难度选项。",
                        {
                            "type": "exit"
                        }
                    ]
                },
                {
                    "type": "if",
                    "condition": "(flag:F37_fetched>=[12,6,3,1][flag:37FItemlevelUb])",
                    "true": [
                        {
                            "type": "if",
                            "condition": "(flag:F37_DisabledTag!==1)",
                            "true": [
                                {
                                    "type": "confirm",
                                    "default": true,
                                    "text": "获得此宝物后，部分更高难度选项将不再可用。\n您当前可获得此宝物，确认要获得此宝物吗？",
                                    "yes": [
                                        {
                                            "type": "setValue",
                                            "name": "flag:F37_DisabledTag",
                                            "value": "1"
                                        }
                                    ],
                                    "no": [
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "setValue",
                            "name": "flag:37FItemlevelUb",
                            "operator": "-=",
                            "value": "1"
                        }
                    ]
                },
                {
                    "type": "setValue",
                    "name": "flag:F37_fetched",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "item:downFly",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "hide",
                    "remove": true
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            7,
                            13
                        ]
                    ]
                }
            ]
        },
        "2,6": {
            "trigger": "action",
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
                    "condition": "(flag:F37_fetched>=[12,6,3,1][flag:37FItemlevel])",
                    "true": [
                        "\t[H5难度系统]根据当前的难度设置，您已无法获得此宝物。\n若确需获取，请按C修改\"37F宝物相关\"难度选项。",
                        {
                            "type": "exit"
                        }
                    ]
                },
                {
                    "type": "if",
                    "condition": "(flag:F37_fetched>=[12,6,3,1][flag:37FItemlevelUb])",
                    "true": [
                        {
                            "type": "if",
                            "condition": "(flag:F37_DisabledTag!==1)",
                            "true": [
                                {
                                    "type": "confirm",
                                    "default": true,
                                    "text": "获得此宝物后，部分更高难度选项将不再可用。\n您当前可获得此宝物，确认要获得此宝物吗？",
                                    "yes": [
                                        {
                                            "type": "setValue",
                                            "name": "flag:F37_DisabledTag",
                                            "value": "1"
                                        }
                                    ],
                                    "no": [
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "setValue",
                            "name": "flag:37FItemlevelUb",
                            "operator": "-=",
                            "value": "1"
                        }
                    ]
                },
                {
                    "type": "setValue",
                    "name": "flag:F37_fetched",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "item:centerFly",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "hide",
                    "remove": true
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            7,
                            13
                        ]
                    ]
                }
            ]
        },
        "12,2": {
            "trigger": "action",
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
                    "condition": "(flag:F37_fetched>=[12,6,3,1][flag:37FItemlevel])",
                    "true": [
                        "\t[H5难度系统]根据当前的难度设置，您已无法获得此宝物。\n若确需获取，请按C修改\"37F宝物相关\"难度选项。",
                        {
                            "type": "exit"
                        }
                    ]
                },
                {
                    "type": "if",
                    "condition": "(flag:F37_fetched>=[12,6,3,1][flag:37FItemlevelUb])",
                    "true": [
                        {
                            "type": "if",
                            "condition": "(flag:F37_DisabledTag!==1)",
                            "true": [
                                {
                                    "type": "confirm",
                                    "default": true,
                                    "text": "获得此宝物后，部分更高难度选项将不再可用。\n您当前可获得此宝物，确认要获得此宝物吗？",
                                    "yes": [
                                        {
                                            "type": "setValue",
                                            "name": "flag:F37_DisabledTag",
                                            "value": "1"
                                        }
                                    ],
                                    "no": [
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "setValue",
                            "name": "flag:37FItemlevelUb",
                            "operator": "-=",
                            "value": "1"
                        }
                    ]
                },
                {
                    "type": "setValue",
                    "name": "flag:F37_fetched",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "item:centerFly",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "hide",
                    "remove": true
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            7,
                            13
                        ]
                    ]
                }
            ]
        },
        "12,6": {
            "trigger": "action",
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
                    "condition": "(flag:F37_fetched>=[12,6,3,1][flag:37FItemlevel])",
                    "true": [
                        "\t[H5难度系统]根据当前的难度设置，您已无法获得此宝物。\n若确需获取，请按C修改\"37F宝物相关\"难度选项。",
                        {
                            "type": "exit"
                        }
                    ]
                },
                {
                    "type": "if",
                    "condition": "(flag:F37_fetched>=[12,6,3,1][flag:37FItemlevelUb])",
                    "true": [
                        {
                            "type": "if",
                            "condition": "(flag:F37_DisabledTag!==1)",
                            "true": [
                                {
                                    "type": "confirm",
                                    "default": true,
                                    "text": "获得此宝物后，部分更高难度选项将不再可用。\n您当前可获得此宝物，确认要获得此宝物吗？",
                                    "yes": [
                                        {
                                            "type": "setValue",
                                            "name": "flag:F37_DisabledTag",
                                            "value": "1"
                                        }
                                    ],
                                    "no": [
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "setValue",
                            "name": "flag:37FItemlevelUb",
                            "operator": "-=",
                            "value": "1"
                        }
                    ]
                },
                {
                    "type": "setValue",
                    "name": "flag:F37_fetched",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "item:pickaxe",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "hide",
                    "remove": true
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            7,
                            13
                        ]
                    ]
                }
            ]
        },
        "2,10": {
            "trigger": "action",
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
                    "condition": "(flag:F37_fetched>=[12,6,3,1][flag:37FItemlevel])",
                    "true": [
                        "\t[H5难度系统]根据当前的难度设置，您已无法获得此宝物。\n若确需获取，请按C修改\"37F宝物相关\"难度选项。",
                        {
                            "type": "exit"
                        }
                    ]
                },
                {
                    "type": "if",
                    "condition": "(flag:F37_fetched>=[12,6,3,1][flag:37FItemlevelUb])",
                    "true": [
                        {
                            "type": "if",
                            "condition": "(flag:F37_DisabledTag!==1)",
                            "true": [
                                {
                                    "type": "confirm",
                                    "default": true,
                                    "text": "获得此宝物后，部分更高难度选项将不再可用。\n您当前可获得此宝物，确认要获得此宝物吗？",
                                    "yes": [
                                        {
                                            "type": "setValue",
                                            "name": "flag:F37_DisabledTag",
                                            "value": "1"
                                        }
                                    ],
                                    "no": [
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "setValue",
                            "name": "flag:37FItemlevelUb",
                            "operator": "-=",
                            "value": "1"
                        }
                    ]
                },
                {
                    "type": "setValue",
                    "name": "flag:F37_fetched",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "item:pickaxe",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "hide",
                    "remove": true
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            7,
                            13
                        ]
                    ]
                }
            ]
        },
        "2,8": {
            "trigger": "action",
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
                    "condition": "(flag:F37_fetched>=[12,6,3,1][flag:37FItemlevel])",
                    "true": [
                        "\t[H5难度系统]根据当前的难度设置，您已无法获得此宝物。\n若确需获取，请按C修改\"37F宝物相关\"难度选项。",
                        {
                            "type": "exit"
                        }
                    ]
                },
                {
                    "type": "if",
                    "condition": "(flag:F37_fetched>=[12,6,3,1][flag:37FItemlevelUb])",
                    "true": [
                        {
                            "type": "if",
                            "condition": "(flag:F37_DisabledTag!==1)",
                            "true": [
                                {
                                    "type": "confirm",
                                    "default": true,
                                    "text": "获得此宝物后，部分更高难度选项将不再可用。\n您当前可获得此宝物，确认要获得此宝物吗？",
                                    "yes": [
                                        {
                                            "type": "setValue",
                                            "name": "flag:F37_DisabledTag",
                                            "value": "1"
                                        }
                                    ],
                                    "no": [
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "setValue",
                            "name": "flag:37FItemlevelUb",
                            "operator": "-=",
                            "value": "1"
                        }
                    ]
                },
                {
                    "type": "setValue",
                    "name": "flag:F37_fetched",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "item:earthquake",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "hide",
                    "remove": true
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            7,
                            13
                        ]
                    ]
                }
            ]
        },
        "12,10": {
            "trigger": "action",
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
                    "condition": "(flag:F37_fetched>=[12,6,3,1][flag:37FItemlevel])",
                    "true": [
                        "\t[H5难度系统]根据当前的难度设置，您已无法获得此宝物。\n若确需获取，请按C修改\"37F宝物相关\"难度选项。",
                        {
                            "type": "exit"
                        }
                    ]
                },
                {
                    "type": "if",
                    "condition": "(flag:F37_fetched>=[12,6,3,1][flag:37FItemlevelUb])",
                    "true": [
                        {
                            "type": "if",
                            "condition": "(flag:F37_DisabledTag!==1)",
                            "true": [
                                {
                                    "type": "confirm",
                                    "default": true,
                                    "text": "获得此宝物后，部分更高难度选项将不再可用。\n您当前可获得此宝物，确认要获得此宝物吗？",
                                    "yes": [
                                        {
                                            "type": "setValue",
                                            "name": "flag:F37_DisabledTag",
                                            "value": "1"
                                        }
                                    ],
                                    "no": [
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "setValue",
                            "name": "flag:37FItemlevelUb",
                            "operator": "-=",
                            "value": "1"
                        }
                    ]
                },
                {
                    "type": "setValue",
                    "name": "flag:F37_fetched",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "item:earthquake",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "hide",
                    "remove": true
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            7,
                            13
                        ]
                    ]
                }
            ]
        },
        "12,8": {
            "trigger": "action",
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
                    "condition": "(flag:F37_fetched>=[12,6,3,1][flag:37FItemlevel])",
                    "true": [
                        "\t[H5难度系统]根据当前的难度设置，您已无法获得此宝物。\n若确需获取，请按C修改\"37F宝物相关\"难度选项。",
                        {
                            "type": "exit"
                        }
                    ]
                },
                {
                    "type": "if",
                    "condition": "(flag:F37_fetched>=[12,6,3,1][flag:37FItemlevelUb])",
                    "true": [
                        {
                            "type": "if",
                            "condition": "(flag:F37_DisabledTag!==1)",
                            "true": [
                                {
                                    "type": "confirm",
                                    "default": true,
                                    "text": "获得此宝物后，部分更高难度选项将不再可用。\n您当前可获得此宝物，确认要获得此宝物吗？",
                                    "yes": [
                                        {
                                            "type": "setValue",
                                            "name": "flag:F37_DisabledTag",
                                            "value": "1"
                                        }
                                    ],
                                    "no": [
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "setValue",
                            "name": "flag:37FItemlevelUb",
                            "operator": "-=",
                            "value": "1"
                        }
                    ]
                },
                {
                    "type": "setValue",
                    "name": "flag:F37_fetched",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "item:steelKey",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "hide",
                    "remove": true
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            7,
                            13
                        ]
                    ]
                }
            ]
        },
        "2,12": {
            "trigger": "action",
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
                    "condition": "(flag:F37_fetched>=[12,6,3,1][flag:37FItemlevel])",
                    "true": [
                        "\t[H5难度系统]根据当前的难度设置，您已无法获得此宝物。\n若确需获取，请按C修改\"37F宝物相关\"难度选项。",
                        {
                            "type": "exit"
                        }
                    ]
                },
                {
                    "type": "if",
                    "condition": "(flag:F37_fetched>=[12,6,3,1][flag:37FItemlevelUb])",
                    "true": [
                        {
                            "type": "if",
                            "condition": "(flag:F37_DisabledTag!==1)",
                            "true": [
                                {
                                    "type": "confirm",
                                    "default": true,
                                    "text": "获得此宝物后，部分更高难度选项将不再可用。\n您当前可获得此宝物，确认要获得此宝物吗？",
                                    "yes": [
                                        {
                                            "type": "setValue",
                                            "name": "flag:F37_DisabledTag",
                                            "value": "1"
                                        }
                                    ],
                                    "no": [
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "setValue",
                            "name": "flag:37FItemlevelUb",
                            "operator": "-=",
                            "value": "1"
                        }
                    ]
                },
                {
                    "type": "setValue",
                    "name": "flag:F37_fetched",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "item:steelKey",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "hide",
                    "remove": true
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            7,
                            13
                        ]
                    ]
                }
            ]
        },
        "7,0": [
            {
                "type": "confirm",
                "text": "难度选项将限制本层可获取的宝物数目\n是否查看获取宝物相关的提示？\n(多次查看可能失去探索的乐趣)",
                "yes": [
                    {
                        "type": "if",
                        "condition": "((item:redKey<4)&&(flag:F37_fetched<=0))",
                        "true": [
                            "\t[H5复刻作者]前期在非必要红门均不开的情况下，到这里可以净赚5把红钥匙。因此前期至多只能咸一个红门。"
                        ]
                    },
                    "\t[H5复刻作者]本魔塔有地下层，可使用\\i[downFly]降飞羽前往。",
                    "\t[H5复刻作者]部分难度下本层可获取多个宝物，本层的墙/门可被破坏。\n请结合\"37F宝物相关\"难度选项合理选择。"
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "7,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "7,13": {
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
    [20040,20041,20041,20041,20041,20041,20041,129,20041,20041,20041,20041,20041,20041,20042],
    [20040,  3,  3,  3,  3,  3,  3, 88,  3,  3,  3,  3,  3,  3,20042],
    [20040,  3, 51, 83, 83, 83, 83,  0, 83, 83, 83, 83, 50,  3,20042],
    [20040,  3,  3,  3,  3,  3,  3,  0,  3,  3,  3,  3,  3,  3,20042],
    [20040,  3, 52, 83, 83, 83, 83,  0, 83, 83, 83, 83, 51,  3,20042],
    [20040,  3,  3,  3,  3,  3,  3,  0,  3,  3,  3,  3,  3,  3,20042],
    [20040,  3, 50, 83, 83, 83, 83,  0, 83, 83, 83, 83, 47,  3,20042],
    [20040,  3,  3,  3,  3,  3,  3,  0,  3,  3,  3,  3,  3,  3,20042],
    [20040,  3, 57, 83, 83, 83, 83,  0, 83, 83, 83, 83, 25,  3,20042],
    [20040,  3,  3,  3,  3,  3,  3,  0,  3,  3,  3,  3,  3,  3,20042],
    [20040,  3, 47, 83, 83, 83, 83,  0, 83, 83, 83, 83, 57,  3,20042],
    [20040,  3,  3,  3,  3,  3,  3,  0,  3,  3,  3,  3,  3,  3,20042],
    [20040,  3, 25, 83, 83, 83, 83,  0, 83, 83, 83, 83, 52,  3,20042],
    [20040,  3,  3,  3,  3,  3,  3, 87,  3,  3,  3,  3,  3,  3,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}