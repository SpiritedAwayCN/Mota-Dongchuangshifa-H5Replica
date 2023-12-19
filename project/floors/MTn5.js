main.floors.MTn5=
{
    "floorId": "MTn5",
    "title": "主塔 -5 层",
    "name": "第 -5 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "bgm.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "8,13": [
            "\t[老人,man]\b[this]重生怪物被击败后，角色转换楼层怪物再次出现。@clue",
            "\t[老人,man]\b[this]以后物品用途不再介绍（反正都是好的）@clue",
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
        "13,9": [
            {
                "type": "openShop",
                "id": "Fm3m4GoldShop"
            },
            {
                "type": "setValue",
                "name": "flag:Fm5ShopVisited",
                "value": "1"
            },
            {
                "type": "while",
                "condition": "1",
                "data": [
                    {
                        "type": "choices",
                        "text": "\t[商人,trader]（本商店须当面购买）\n我可满足\\i[N448]的需要，\n只需要700塔币！",
                        "choices": [
                            {
                                "text": "加4攻击",
                                "icon": "redGem",
                                "color": [
                                    255,
                                    128,
                                    128,
                                    1
                                ],
                                "need": "status:money>=700",
                                "action": [
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3",
                                        "stop": true
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n(hero_id == 1 ? core.status.hero : core.getFlag(\"hero1\")).atk += 4;\n}"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "700"
                                    }
                                ]
                            },
                            {
                                "text": "加8防御",
                                "icon": "blueGem",
                                "color": [
                                    128,
                                    255,
                                    255,
                                    1
                                ],
                                "need": "status:money>=700",
                                "action": [
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3",
                                        "stop": true
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n(hero_id == 1 ? core.status.hero : core.getFlag(\"hero1\")).def += 4;\n}"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "700"
                                    }
                                ]
                            },
                            {
                                "text": "加10魔防",
                                "icon": "greenGem",
                                "color": [
                                    128,
                                    255,
                                    128,
                                    1
                                ],
                                "need": "status:money>=700",
                                "action": [
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3",
                                        "stop": true
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n(hero_id == 1 ? core.status.hero : core.getFlag(\"hero1\")).mdef += 10;\n}"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "700"
                                    }
                                ]
                            },
                            {
                                "text": "加3200生命",
                                "icon": "yellowPotion",
                                "color": [
                                    192,
                                    192,
                                    192,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3",
                                        "stop": true
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n(hero_id == 1 ? core.status.hero : core.getFlag(\"hero1\")).hp += 3200;\n}"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "700"
                                    }
                                ]
                            },
                            {
                                "text": "离开",
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
            }
        ],
        "12,9": [
            {
                "type": "openShop",
                "id": "Fm3m4GoldShop"
            },
            {
                "type": "setValue",
                "name": "flag:Fm5ShopVisited",
                "value": "1"
            },
            {
                "type": "while",
                "condition": "1",
                "data": [
                    {
                        "type": "choices",
                        "text": "\t[商人,N449]（本商店须当面购买）\n我可满足\\i[N331]的需要，\n只需要700塔币！",
                        "choices": [
                            {
                                "text": "加4攻击",
                                "icon": "redGem",
                                "color": [
                                    255,
                                    128,
                                    128,
                                    1
                                ],
                                "need": "status:money>=700",
                                "action": [
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3",
                                        "stop": true
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n(hero_id == 0 ? core.status.hero : core.getFlag(\"hero0\")).atk += 4;\n}"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "700"
                                    }
                                ]
                            },
                            {
                                "text": "加8防御",
                                "icon": "blueGem",
                                "color": [
                                    128,
                                    255,
                                    255,
                                    1
                                ],
                                "need": "status:money>=700",
                                "action": [
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3",
                                        "stop": true
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n(hero_id == 0 ? core.status.hero : core.getFlag(\"hero0\")).def += 4;\n}"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "700"
                                    }
                                ]
                            },
                            {
                                "text": "加10魔防",
                                "icon": "greenGem",
                                "color": [
                                    128,
                                    255,
                                    128,
                                    1
                                ],
                                "need": "status:money>=700",
                                "action": [
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3",
                                        "stop": true
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n(hero_id == 0 ? core.status.hero : core.getFlag(\"hero0\")).mdef += 10;\n}"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "700"
                                    }
                                ]
                            },
                            {
                                "text": "加3200生命",
                                "icon": "yellowPotion",
                                "color": [
                                    192,
                                    192,
                                    192,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3",
                                        "stop": true
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n(hero_id == 0 ? core.status.hero : core.getFlag(\"hero0\")).hp += 3200;\n}"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "700"
                                    }
                                ]
                            },
                            {
                                "text": "离开",
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
            }
        ]
    },
    "changeFloor": {
        "7,13": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "1,13": {
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
    [20040,339,234,234,  2,  0,  2,  0,  0,  2,  0,214,212,246,20042],
    [20040,  2,  2,  0,  0,212,430,212,  2,  2,  0,214,212,246,20042],
    [20040, 26,  2,222,  2,  2,  2,  0,  0,  2, 34,  2,  2,  0,20042],
    [20040,  2,  2,222,  2,  0,222,222,  0,  2,  0,  2, 28, 27,20042],
    [20040,  0,222,222,  2,  0,  2,  2,  2,  2,212,  2,430,  2,20042],
    [20040,  2,  2,  2,  2,212,431,212,  0,  0,212,  2, 34, 34,20042],
    [20040,234,437,438, 30,  0,  2,  2,  2,  2,  2, 23, 22, 21,20042],
    [20040,  0,  2,  2,  2,  2,  2,  0, 28,  2, 34,  2,  2,  2,20042],
    [20040, 31,  2, 27, 27,246, 28, 28,438,438,  0,  2,449,122,20042],
    [20040, 31,  2, 27,  2,246,  2,  2,  2, 34, 29,  2,  0,  0,20042],
    [20040, 31,  2,  2,  2,246,  2, 32,  2,  2, 34,  2,  2,445,20042],
    [20040, 31,  2, 28,  2,  0,  2, 32, 32,  2,  2,  0,  2,445,20042],
    [20040, 88,214,214, 28,214,214, 87,121,  0,  0,  0,430,445,20042],
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