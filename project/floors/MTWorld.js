main.floors.MTWorld=
{
    "floorId": "MTWorld",
    "title": "魔塔世界",
    "name": "魔塔世界",
    "width": 20,
    "height": 20,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "xxmt0F.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "15,16": [
            "\t[H5魔塔作者]在原作，该传送门永远没有激活。",
            "\t[H5魔塔作者]该传送门通往蝙蝠墓地，但因为没有进入手段，因此本复刻版中没有该地图。"
        ],
        "9,9": [
            {
                "type": "setBlock",
                "number": "portal",
                "loc": [
                    [
                        1,
                        13
                    ]
                ],
                "floorId": "MT28"
            },
            {
                "type": "changeFloor",
                "floorId": "MT28",
                "loc": [
                    1,
                    13
                ]
            }
        ],
        "10,9": [
            "\t[神秘老人,wizard]\b[this]不多说了。这里是一些零星的魔塔碎片楼，当你打开一些机关时，一些魔塔也会打开。",
            {
                "type": "choices",
                "text": "\t[神秘老人,wizard]好啦，做准备吧！",
                "choices": [
                    {
                        "text": "2点攻击",
                        "icon": "redGem",
                        "color": [
                            255,
                            128,
                            128,
                            1
                        ],
                        "action": [
                            {
                                "type": "setValue",
                                "name": "status:atk",
                                "operator": "+=",
                                "value": "2"
                            }
                        ]
                    },
                    {
                        "text": "2点防御",
                        "icon": "blueGem",
                        "color": [
                            128,
                            255,
                            255,
                            1
                        ],
                        "action": [
                            {
                                "type": "setValue",
                                "name": "status:def",
                                "operator": "+=",
                                "value": "2"
                            }
                        ]
                    },
                    {
                        "text": "5点魔防",
                        "icon": "greenGem",
                        "color": [
                            128,
                            255,
                            128,
                            1
                        ],
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
                        "text": "2000点生命",
                        "icon": "yellowPotion",
                        "color": [
                            192,
                            192,
                            192,
                            1
                        ],
                        "action": [
                            {
                                "type": "setValue",
                                "name": "status:hp",
                                "operator": "+=",
                                "value": "2000"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "16,15": {
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
                    "type": "if",
                    "condition": "(flag:MtWorldLossWorldPrompt!==1)",
                    "true": [
                        {
                            "type": "choices",
                            "text": "\t[迷惘の世界,portal]每次从该隐藏层返回会强制扣除：\n355塔币与145经验，\n是否确认前往？",
                            "choices": [
                                {
                                    "text": "确认前往",
                                    "action": []
                                },
                                {
                                    "text": "确认前往(不再提示)",
                                    "action": [
                                        {
                                            "type": "setValue",
                                            "name": "flag:MtWorldLossWorldPrompt",
                                            "value": "1"
                                        }
                                    ]
                                },
                                {
                                    "text": "取消",
                                    "action": [
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "changeFloor",
                    "floorId": "lostWorld3",
                    "loc": [
                        8,
                        13
                    ]
                }
            ]
        },
        "16,4": {
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
                    "type": "changeFloor",
                    "floorId": "Treasure1",
                    "loc": [
                        7,
                        13
                    ]
                }
            ]
        },
        "15,3": {
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
                    "type": "if",
                    "condition": "(flag:MtWorldCoinPrompt!==1)",
                    "true": [
                        {
                            "type": "choices",
                            "text": "\t[魔法楼阁,portal]可在其中获得\\i[coin]幸运金币，但每次\n进入/离开该隐藏层会强制扣除：\n所有角色的全部金币与经验，\n\r[red]无法恢复！\r\n是否确认前往？",
                            "choices": [
                                {
                                    "text": "确认前往",
                                    "action": []
                                },
                                {
                                    "text": "确认前往(不再提示)",
                                    "action": [
                                        {
                                            "type": "setValue",
                                            "name": "flag:MtWorldCoinPrompt",
                                            "value": "1"
                                        }
                                    ]
                                },
                                {
                                    "text": "取消",
                                    "action": [
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "function",
                    "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.money = 0;\n\thero.exp = 0;\n});\ncore.updateStatusBar(true);\n}"
                },
                {
                    "type": "changeFloor",
                    "floorId": "LuckyGold1",
                    "loc": [
                        7,
                        13
                    ]
                }
            ]
        },
        "4,3": {
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
                    "type": "changeFloor",
                    "floorId": "TrapSwamp0",
                    "loc": [
                        7,
                        13
                    ]
                }
            ]
        },
        "9,8": {
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
                "\t[神秘老人,wizard]\b[this]你又打开一个机关。在左上角。",
                {
                    "type": "hide",
                    "remove": true
                }
            ]
        },
        "3,4": {
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
                    "type": "changeFloor",
                    "floorId": "MTCastle0",
                    "loc": [
                        10,
                        19
                    ],
                    "direction": "up"
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
    [365,365,  1,  1,  5,421,  1,  1,  1,  1,  1,  1,  1,  1,421,  5,  1,  1,365,365],
    [365,365,365,  2,  5,421,  2,  2,  2,  2,  2,  2,  2,  2,421,  5,  2,365,365,365],
    [  1,365,365,365,  5,421,  3,  3,  3,  3,  3,  3,  3,  3,421,  5,365,365,365,  1],
    [  1,  2,365,365, 89,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 89,365,365,  2,  1],
    [  5,  5,  5, 89,10236,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 89,  5,  5,  5],
    [421,421,421,10230,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,421,421,421],
    [  1,  2,  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  2,  1],
    [  1,  2,  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  2,  1],
    [  1,  2,  3,  0,  0,  0,  0,  0,  0,125,  0,  0,  0,  0,  0,  0,  0,  3,  2,  1],
    [  1,  2,  3,  0,  0,  0,  0,  0,  0, 89,125,  0,  0,  0,  0,  0,  0,  3,  2,  1],
    [  1,  2,  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  2,  1],
    [  1,  2,  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  2,  1],
    [  1,  2,  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  2,  1],
    [  1,  2,  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  2,  1],
    [421,421,421,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  2,  1],
    [  5,  5,  5,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 89,  3,  2,  1],
    [  1,  2,365,365,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 89,365,365,  5,  5],
    [  1,365,365,365,  5,421,  3,  3,  3,  3,  3,  3,  3,  3,421,  5,365,365,365,  1],
    [365,365,365,  2,  5,421,  2,  2,  2,  2,  2,  2,  2,  2,421,  5,  2,365,365,365],
    [365,365,  1,  1,  5,421,  1,  1,  1,  1,  1,  1,  1,  1,421,  5,  1,  1,365,365]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,140,140,140,140,140,140,140,140,140,140,140,140,  0,  0,  0,  0],
    [  0,  0,  0,140,140,140,140,140,140,140,140,140,140,140,140,140,140,  0,  0,  0],
    [  0,  0,  0,140,140,140,140,140,140,140,140,140,140,140,140,140,140,  0,  0,  0],
    [  0,  0,  0,140,140,140,140,140,140,140,140,140,140,140,140,140,140,  0,  0,  0],
    [  0,  0,  0,140,140,140,140,140,140,140,140,140,140,140,140,140,140,  0,  0,  0],
    [  0,  0,  0,140,140,140,140,140,140,140,140,140,140,140,140,140,140,  0,  0,  0],
    [  0,  0,  0,140,140,140,140,140,140,140,140,140,140,140,140,140,140,  0,  0,  0],
    [  0,  0,  0,140,140,140,140,140,140,140,140,140,140,140,140,140,140,  0,  0,  0],
    [  0,  0,  0,140,140,140,140,140,140,140,140,140,140,140,140,140,140,  0,  0,  0],
    [  0,  0,  0,140,140,140,140,140,140,140,140,140,140,140,140,140,140,  0,  0,  0],
    [  0,  0,  0,140,140,140,140,140,140,140,140,140,140,140,140,140,140,  0,  0,  0],
    [  0,  0,  0,140,140,140,140,140,140,140,140,140,140,140,140,140,140,  0,  0,  0],
    [  0,  0,  0,140,140,140,140,140,140,140,140,140,140,140,140,140,140,  0,  0,  0],
    [  0,  0,  0,  0,140,140,140,140,140,140,140,140,140,140,140,140,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "flyPoint": [
        9,
        9
    ]
}