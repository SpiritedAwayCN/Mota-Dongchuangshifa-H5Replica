main.floors.CheatingZone=
{
    "floorId": "CheatingZone",
    "title": "作弊空间",
    "name": "作弊空间",
    "width": 30,
    "height": 30,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass2",
    "bgm": "mine.ogg",
    "weather": [
        "rain",
        6
    ],
    "firstArrive": [
        "\t[Joey Cooper]这个地方脱离了魔塔,可以作弊，但我要说明：",
        "\t[Joey Cooper]游戏绝对能通关！不过在地上和地下交接处有点难。",
        "\t[Joey Cooper]之所以有作弊，就是为新手准备的，在必要之时作弊。",
        "\t[Joey Cooper]游戏里也有一些秘籍，不过不算全，既然你要作弊，我再告诉你一些攻略：",
        "\t[Joey Cooper]-3F的魔王会骤减你的攻防，所以在上到38层时，尽量存钻石血瓶。",
        "\t[Joey Cooper]好啦，本来想多告诉你一些攻略的，不过细想，你要到这里面，还需要攻略么？",
        "\t[Joey Cooper]里面只有必须品，祝你在这里面愉快！",
        "\t[Joey Cooper]不过，你不要太依赖作弊，不然游戏会没意思的。",
        "\t[Joey Cooper]好了，不啰嗦了，一路顺风！",
        "\t[Joey Cooper]再说一遍，这个作品是归属于Joey·Cooper的，允许更改，转载，再发表（或恶搞）。\nH5复刻版由SpiritedAwayCN制作，已经由原作者授权。"
    ],
    "eachArrive": [
        {
            "type": "setValue",
            "name": "flag:Cheating",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:realHard",
            "value": "-1"
        }
    ],
    "parallelDo": "",
    "events": {
        "8,25": [
            {
                "type": "function",
                "function": "function(){\nvar rate = Math.pow(2.06, 16);\n['hp', 'atk', 'def', 'mdef'].forEach(prop => {\n\tcore.status.hero[prop] = Math.floor(core.status.hero[prop] * rate);\n});\n}"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "1,2": [
            "\t[老人,man]\b[this]魔防有效，连击有效，绿钥匙有效！",
            {
                "type": "setGlobalValue",
                "name": "isMAGValid",
                "value": true
            },
            {
                "type": "setGlobalValue",
                "name": "isGreenkeyValid",
                "value": true
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "9,5": [
            {
                "type": "function",
                "function": "function(){\ncore.addFlag('@temp@shop', 1);\n}"
            },
            {
                "type": "while",
                "condition": "1",
                "data": [
                    {
                        "type": "choices",
                        "text": "\t[老人,man]200元",
                        "choices": [
                            {
                                "text": "确定",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "+=",
                                        "value": "200"
                                    }
                                ]
                            },
                            {
                                "text": "取消",
                                "action": [
                                    {
                                        "type": "break",
                                        "n": 1
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "function",
                "function": "function(){\ncore.addFlag('@temp@shop', -1);\n}"
            }
        ],
        "10,5": [
            {
                "type": "function",
                "function": "function(){\ncore.addFlag('@temp@shop', 1);\n}"
            },
            {
                "type": "while",
                "condition": "1",
                "data": [
                    {
                        "type": "choices",
                        "text": "\t[老人,man]50经验",
                        "choices": [
                            {
                                "text": "确定",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:exp",
                                        "operator": "+=",
                                        "value": "50"
                                    }
                                ]
                            },
                            {
                                "text": "取消",
                                "action": [
                                    {
                                        "type": "break",
                                        "n": 1
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "function",
                "function": "function(){\ncore.addFlag('@temp@shop', -1);\n}"
            }
        ],
        "11,5": [
            {
                "type": "function",
                "function": "function(){\ncore.addFlag('@temp@shop', 1);\n}"
            },
            {
                "type": "while",
                "condition": "1",
                "data": [
                    {
                        "type": "choices",
                        "text": "\t[老人,man]10000生命",
                        "choices": [
                            {
                                "text": "确定",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:hp",
                                        "operator": "+=",
                                        "value": "10000"
                                    }
                                ]
                            },
                            {
                                "text": "取消",
                                "action": [
                                    {
                                        "type": "break",
                                        "n": 1
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "function",
                "function": "function(){\ncore.addFlag('@temp@shop', -1);\n}"
            }
        ],
        "14,2": [
            {
                "type": "choices",
                "text": "\t[老人,man]蓝血瓶效果变为400",
                "choices": [
                    {
                        "text": "确定",
                        "need": "core.values.bluePotion<400",
                        "action": [
                            {
                                "type": "setGlobalValue",
                                "name": "bluePotion",
                                "value": 400
                            },
                            {
                                "type": "hide",
                                "remove": true
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": []
                    }
                ]
            }
        ],
        "15,2": [
            {
                "type": "function",
                "function": "function(){\ncore.addFlag('@temp@shop', 1);\n}"
            },
            {
                "type": "while",
                "condition": "1",
                "data": [
                    {
                        "type": "choices",
                        "text": "\t[老人,man]500生命",
                        "choices": [
                            {
                                "text": "确定",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:hp",
                                        "operator": "+=",
                                        "value": "500"
                                    }
                                ]
                            },
                            {
                                "text": "取消",
                                "action": [
                                    {
                                        "type": "break",
                                        "n": 1
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "function",
                "function": "function(){\ncore.addFlag('@temp@shop', -1);\n}"
            }
        ],
        "16,2": [
            {
                "type": "choices",
                "text": "\t[老人,man]红血瓶效果变为150",
                "choices": [
                    {
                        "text": "确定",
                        "need": "core.values.redPotion<150",
                        "action": [
                            {
                                "type": "setGlobalValue",
                                "name": "redPotion",
                                "value": 150
                            },
                            {
                                "type": "hide",
                                "remove": true
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": []
                    }
                ]
            }
        ],
        "17,2": [
            {
                "type": "choices",
                "text": "\t[老人,man]黄血瓶效果变为900",
                "choices": [
                    {
                        "text": "确定",
                        "need": "core.values.yellowPotion<900",
                        "action": [
                            {
                                "type": "setGlobalValue",
                                "name": "yellowPotion",
                                "value": 900
                            },
                            {
                                "type": "hide",
                                "remove": true
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": []
                    }
                ]
            }
        ],
        "25,2": [
            {
                "type": "function",
                "function": "function(){\ncore.addFlag('@temp@shop', 1);\n}"
            },
            {
                "type": "while",
                "condition": "1",
                "data": [
                    {
                        "type": "choices",
                        "text": "\t[老人,man]1点攻击",
                        "choices": [
                            {
                                "text": "确定",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:atk",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "取消",
                                "action": [
                                    {
                                        "type": "break",
                                        "n": 1
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "function",
                "function": "function(){\ncore.addFlag('@temp@shop', -1);\n}"
            }
        ],
        "25,4": [
            {
                "type": "function",
                "function": "function(){\ncore.addFlag('@temp@shop', 1);\n}"
            },
            {
                "type": "while",
                "condition": "1",
                "data": [
                    {
                        "type": "choices",
                        "text": "\t[老人,man]1点防御",
                        "choices": [
                            {
                                "text": "确定",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:def",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "取消",
                                "action": [
                                    {
                                        "type": "break",
                                        "n": 1
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "function",
                "function": "function(){\ncore.addFlag('@temp@shop', -1);\n}"
            }
        ],
        "25,6": [
            {
                "type": "function",
                "function": "function(){\ncore.addFlag('@temp@shop', 1);\n}"
            },
            {
                "type": "while",
                "condition": "1",
                "data": [
                    {
                        "type": "choices",
                        "text": "\t[老人,man]5点魔防",
                        "choices": [
                            {
                                "text": "确定",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:mdef",
                                        "operator": "+=",
                                        "value": "5"
                                    }
                                ]
                            },
                            {
                                "text": "取消",
                                "action": [
                                    {
                                        "type": "break",
                                        "n": 1
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "function",
                "function": "function(){\ncore.addFlag('@temp@shop', -1);\n}"
            }
        ],
        "25,8": [
            {
                "type": "function",
                "function": "function(){\ncore.addFlag('@temp@shop', 1);\n}"
            },
            {
                "type": "while",
                "condition": "1",
                "data": [
                    {
                        "type": "choices",
                        "text": "\t[老人,man]1点连击",
                        "choices": [
                            {
                                "text": "确定",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:combo",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "取消",
                                "action": [
                                    {
                                        "type": "break",
                                        "n": 1
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "function",
                "function": "function(){\ncore.addFlag('@temp@shop', -1);\n}"
            }
        ],
        "26,2": [
            {
                "type": "choices",
                "text": "\t[老人,man]红宝石效果变为2",
                "choices": [
                    {
                        "text": "确定",
                        "need": "core.values.redGem<2",
                        "action": [
                            {
                                "type": "setGlobalValue",
                                "name": "redGem",
                                "value": 2
                            },
                            {
                                "type": "hide",
                                "remove": true
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": []
                    }
                ]
            }
        ],
        "26,4": [
            {
                "type": "choices",
                "text": "\t[老人,man]蓝宝石效果变为2",
                "choices": [
                    {
                        "text": "确定",
                        "need": "core.values.blueGem<2",
                        "action": [
                            {
                                "type": "setGlobalValue",
                                "name": "blueGem",
                                "value": 2
                            },
                            {
                                "type": "hide",
                                "remove": true
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": []
                    }
                ]
            }
        ],
        "26,6": [
            {
                "type": "choices",
                "text": "\t[老人,man]绿宝石效果变为10",
                "choices": [
                    {
                        "text": "确定",
                        "need": "core.values.greenGem<10",
                        "action": [
                            {
                                "type": "setGlobalValue",
                                "name": "greenGem",
                                "value": 10
                            },
                            {
                                "type": "hide",
                                "remove": true
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": []
                    }
                ]
            }
        ],
        "26,8": [
            {
                "type": "choices",
                "text": "\t[老人,man]黄宝石效果变为4",
                "choices": [
                    {
                        "text": "确定",
                        "need": "core.values.yellowGem<4",
                        "action": [
                            {
                                "type": "setGlobalValue",
                                "name": "yellowGem",
                                "value": 4
                            },
                            {
                                "type": "hide",
                                "remove": true
                            }
                        ]
                    },
                    {
                        "text": "取消",
                        "action": []
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "4,7": {
            "floorId": "MT0",
            "loc": [
                1,
                7
            ]
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
    [151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151],
    [151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151],
    [  0,121,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,121,121,121,121,  0,  0,  0,  0,  0,  0,  0,121,121,  0,151,151],
    [  0,151,151,151,151,151,151,  0,  0,  0,  0,  0,  0,  0,  0,20266,20267,  0,  0,  0,  0,  0,  0,  0,  0,20256,20257,  0,151,151],
    [  0,151,  0,151,151,151,151,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,121,121,  0,151,151],
    [  0,151,151,151,151,151,151,  0,  0,121,121,121,  0,  0, 52, 52, 52, 52, 52, 52, 52, 52,  0,  0,  0,20258,20259,  0,151,151],
    [  0,151,151,151,151,151,151,  0,  0,  0,  0,  0,  0,  0, 51, 51, 51, 51, 51, 51, 51, 51,  0,  0,  0,121,121,  0,151,151],
    [  0,  0,  0,  0, 89,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,  0,  0,20264,20265,  0,151,151],
    [  0,  0,  0,  0,  0,151,151,151,151,151,151,151,151,151,151,  0,151,151,151,151,151,151,151,  0,  0,121,121,  0,151,151],
    [151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,  0,  0,20272,20273,  0,151,151],
    [151,  0,  0,  0,  0,  0,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,  0,  0,  0,  0,  0,  0,151,151],
    [151,  0,151,151,151,  0,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,  0,151,151,151,151,151,151,151],
    [151,  0,151,151,151,  0, 49,  0,  0,  0,  0,  0,  0, 49,  0,  0,  0,  0,  0, 49,  0,  0,  0,151,151,151,151,615,151,151],
    [151,  0,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,  0,151,151,151,151,614,151,151],
    [151, 49,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,  0,  0,  0,151,151,  0,151,151],
    [151,  0,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,  0,  0,  0,151,151,  0,151,151],
    [151,  0,151,151,151,151,151,151,151,151,151,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,151,151,  0,151,151],
    [151,  0,151,151,151,151,151,151,151,151,151,  0,151,151,151,151,151,151,151,151,151,151,  0,  0,  0,151,151,  0,151,151],
    [151,  0,151,151,151,  0,  0,  0,  0,151,151,  0, 49,  0, 56, 56, 56, 56, 56, 56,151,151,  0,  0,  0,  0,  0,  0,  0,151],
    [151,  0,151,151,151,  0,151,  0,  0,  0,  0,  0,151,151, 56, 56, 56, 56, 56, 56,151,151,  0,151,151,151,151,151,151,151],
    [151,  0,151,151,151,  0,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,  0,151,151,151,  0,151,151,151],
    [151,  0,151,151, 57, 57, 57, 57, 57, 57,151,151,151,332, 25, 25, 25, 25, 25, 25,  0,  0,  0,151,151,151,151,151,151,  0],
    [151, 49,151,151, 57, 57, 57, 57, 57, 57,151,151,151,151,151,151,151,151,151,151,151,151,  0,  0,  0,151,151,151,151,151],
    [151,  0,151,151,151,151,151,151,151,151,151,151,151,489,491,490, 33, 34, 32, 31, 24, 23, 22, 21, 29, 30, 28, 27,151,151],
    [151,  0,151,151,151,151,151,151,  0,151,151,151,151,489,491,490, 33, 34, 32, 31, 24, 23, 22, 21, 29, 30, 28, 27,151,151],
    [151,  0,  0,  0,  0,  0,151,  0,20207,  0,151,151,151,489,491,490, 33, 34, 32, 31, 24, 23, 22, 21, 29, 30, 28, 27,151,151],
    [151,151,151,  0,151,151,151,151,  0,151,151,151,151,489,491,490, 33, 34, 32, 31, 24, 23, 22, 21, 29, 30, 28, 27,151,151],
    [151,151,151,  0,151,151,151,151,151,151,151,151,151,489,491,490, 33, 34, 32, 31, 24, 23, 22, 21, 29, 30, 28, 27,151,151],
    [151,625,  0,  0,  0,  0,626,  0,151,151,151,151,151,489,491,490, 33, 34, 32, 31, 24, 23, 22, 21, 29, 30, 28, 27,151,151],
    [151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151,151]
],
    "bgmap": [

],
    "fgmap": [

]
}