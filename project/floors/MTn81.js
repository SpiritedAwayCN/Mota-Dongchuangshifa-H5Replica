main.floors.MTn81=
{
    "floorId": "MTn81",
    "title": "主塔 -81 层",
    "name": "第 -81 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "000.mp3",
    "firstArrive": [
        {
            "type": "if",
            "condition": "(flag:VerboseHint===1)",
            "true": [
                "\t[H5复刻作者]可直接触碰战争魔王，将触发剧情而不是战斗"
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "2,3": [
            "战争魔王所到之地，咒语将会降临！带给你的挥之不去的灾难！勇士，祝你永有灾难！\n（全体角色生命-10）",
            {
                "type": "function",
                "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.hp = Math.max(1, hero.hp - 10);\n});\ncore.updateStatusBar(true);\n}"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "2,6": [
            "战争魔王所到之地，咒语将会降临！带给你的挥之不去的灾难！勇士，祝你永有灾难！\n（全体角色生命-10）",
            {
                "type": "function",
                "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.hp = Math.max(1, hero.hp - 10);\n});\ncore.updateStatusBar(true);\n}"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "2,9": [
            "战争魔王所到之地，咒语将会降临！带给你的挥之不去的灾难！勇士，祝你永有灾难！\n（全体角色生命-10）",
            {
                "type": "function",
                "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.hp = Math.max(1, hero.hp - 10);\n});\ncore.updateStatusBar(true);\n}"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "12,9": [
            "战争魔王所到之地，咒语将会降临！带给你的挥之不去的灾难！勇士，祝你永有灾难！\n（全体角色生命-10）",
            {
                "type": "function",
                "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.hp = Math.max(1, hero.hp - 10);\n});\ncore.updateStatusBar(true);\n}"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "12,6": [
            "战争魔王所到之地，咒语将会降临！带给你的挥之不去的灾难！勇士，祝你永有灾难！\n（全体角色生命-10）",
            {
                "type": "function",
                "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.hp = Math.max(1, hero.hp - 10);\n});\ncore.updateStatusBar(true);\n}"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "12,3": [
            "战争魔王所到之地，咒语将会降临！带给你的挥之不去的灾难！勇士，祝你永有灾难！\n（全体角色生命-10）",
            {
                "type": "function",
                "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.hp = Math.max(1, hero.hp - 10);\n});\ncore.updateStatusBar(true);\n}"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "9,6": [
            "\t[老人,man]\b[this]数字是告诉你武器所加的能力。分别是攻击、防御、魔防。@clue",
            "\t[H5复刻作者]请竖向阅读。@clue",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "5,6": [
            {
                "type": "openShop",
                "id": "Fm81DyingShop",
                "open": true
            }
        ],
        "7,9": {
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
                "\t[战争魔王,yellowKing]\b[this]你竟然到这了？哈哈哈哈，真不可思议……",
                "\t[hero]\b[hero]惨了，死定了！",
                "\t[hero]\b[hero]你完了！",
                {
                    "type": "setCurtain",
                    "color": [
                        0,
                        0,
                        0,
                        1
                    ],
                    "time": 500,
                    "keep": true
                },
                {
                    "type": "sleep",
                    "time": 1000
                },
                "哎，勇士真惨啊......",
                {
                    "type": "hide",
                    "remove": true
                },
                "\t[hero]哎哟……",
                {
                    "type": "changeFloor",
                    "floorId": "MT880",
                    "loc": [
                        7,
                        13
                    ],
                    "direction": "down"
                },
                {
                    "type": "setCurtain",
                    "time": 500
                }
            ]
        }
    },
    "changeFloor": {
        "7,13": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "7,1": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "7,4": [
            "战争魔王所到之地，咒语将会降临！带给你的挥之不去的灾难！勇士，祝你永有灾难！\n（全体角色生命-10）",
            {
                "type": "function",
                "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.hp = Math.max(1, hero.hp - 10);\n});\ncore.updateStatusBar(true);\n}"
            },
            "\t[H5复刻作者]原版中，本层约每5秒触发本事件并扣血。\n本复刻版改为在本层的固定位置触发，且每处只触发一次。"
        ],
        "1,3": [
            {
                "type": "setValue",
                "name": "flag:Fm81_DoorL",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm81_DoorL",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    2,
                                    4
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
                                    2,
                                    7
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
                                    2,
                                    10
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "3,3": [
            {
                "type": "setValue",
                "name": "flag:Fm81_DoorL",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm81_DoorL",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    2,
                                    4
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
                                    2,
                                    7
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
                                    2,
                                    10
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "1,6": [
            {
                "type": "setValue",
                "name": "flag:Fm81_DoorL",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm81_DoorL",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    2,
                                    4
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
                                    2,
                                    7
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
                                    2,
                                    10
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "3,6": [
            {
                "type": "setValue",
                "name": "flag:Fm81_DoorL",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm81_DoorL",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    2,
                                    4
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
                                    2,
                                    7
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
                                    2,
                                    10
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "1,9": [
            {
                "type": "setValue",
                "name": "flag:Fm81_DoorL",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm81_DoorL",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    2,
                                    4
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
                                    2,
                                    7
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
                                    2,
                                    10
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "3,9": [
            {
                "type": "setValue",
                "name": "flag:Fm81_DoorL",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm81_DoorL",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    2,
                                    4
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
                                    2,
                                    7
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
                                    2,
                                    10
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "11,3": [
            {
                "type": "setValue",
                "name": "flag:Fm81_DoorR",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm81_DoorR",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    12,
                                    4
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
                                    12,
                                    7
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
                                    12,
                                    10
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "13,3": [
            {
                "type": "setValue",
                "name": "flag:Fm81_DoorR",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm81_DoorR",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    12,
                                    4
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
                                    12,
                                    7
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
                                    12,
                                    10
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "11,6": [
            {
                "type": "setValue",
                "name": "flag:Fm81_DoorR",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm81_DoorR",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    12,
                                    4
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
                                    12,
                                    7
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
                                    12,
                                    10
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "13,6": [
            {
                "type": "setValue",
                "name": "flag:Fm81_DoorR",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm81_DoorR",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    12,
                                    4
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
                                    12,
                                    7
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
                                    12,
                                    10
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "11,9": [
            {
                "type": "setValue",
                "name": "flag:Fm81_DoorR",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm81_DoorR",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    12,
                                    4
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
                                    12,
                                    7
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
                                    12,
                                    10
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "13,9": [
            {
                "type": "setValue",
                "name": "flag:Fm81_DoorR",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:Fm81_DoorR",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    12,
                                    4
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
                                    12,
                                    7
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
                                    12,
                                    10
                                ]
                            }
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
    [20040,10041,10041,  0,  0,  0,  0, 88,  0,  0,  0,  0,10041,10041,20042],
    [20040,10041,  0,  0,10041,10041,10041,599,10041,10041,10041,  0,  0,10041,20042],
    [20040,599,  0,599,10041,10041,10041,599,10041,10041,10041,599,  0,599,20042],
    [20040,10041, 85,10041,10041,10041,10041,599,10041,10041,10041,10041, 85,10041,20042],
    [20040,  0,  0,  0,10041,10041,10041,  0,10041,10041,10041,  0,  0,  0,20042],
    [20040,603,  0,603,10041,124,  0,  0,  0,121,10041,603,  0,603,20042],
    [20040,10041, 85,10041,10041,10041,10041,10041,10041,10041,10041,10041, 85,10041,20042],
    [20040,  0,  0,  0,10041,  0,  0,  0,  0,  0,10041,  0,  0,  0,20042],
    [20040,249,  0,249,10041,10041,10041,230,10041,10041,10041,249,  0,249,20042],
    [20040,10041, 85,10041,10041,10041,10041,  0,10041,10041,10041,10041, 85,10041,20042],
    [20040,10041,607,10041,10041,10041,10041,599,10041,10041,10041,10041,607,10041,20042],
    [20040,10041,604,10041,10041,10041,10041,  0,10041,10041,10041,10041,610,10041,20042],
    [20040,10041,10041,10041,10041,10041,10041, 87,10041,10041,10041,10041,10041,10041,10041],
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
    [  0,  0,  0,20186,20197,20186,  0,  0,  0,  0,20197,  0,  0,  0,  0],
    [  0,  0,  0,20185,20194,20185,  0,  0,  0,20196,20185,20196,  0,  0,  0],
    [  0,  0,  0,20185,20185,20185,  0,  0,  0,20185,20185,20185,  0,  0,  0],
    [428,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,428],
    [429,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,429]
],
    "underGround": true
}