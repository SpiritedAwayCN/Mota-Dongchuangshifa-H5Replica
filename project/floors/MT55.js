main.floors.MT55=
{
    "floorId": "MT55",
    "title": "主塔 55 层",
    "name": "第 55 层",
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
    "bgm": "031Castle01.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "12,3": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "5,1": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "10,4": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "9,7": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "9,10": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "7,10": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "2,13": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "2,9": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "5,6": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "12,13": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "11,12": [
            {
                "type": "comment",
                "text": "极限攻防和可以在这个NPC做文章"
            },
            {
                "type": "if",
                "condition": "(item:I409>0)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "1"
                    },
                    "\t[神秘老人,wizard]\b[this]唔......你有攻击法杖！",
                    "\t[hero]\b[hero]有什么不对么？",
                    "\t[神秘老人,wizard]\b[this]它在50级时效果最好！",
                    "\t[hero]\b[hero]有什么功能？",
                    "\t[神秘老人,wizard]\b[this]当你的ATK＞怪物DEF,每局附加30%的攻击力攻击，\n当你的ATK＜怪物DEF，提升30%攻击力再攻击。",
                    {
                        "type": "function",
                        "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.atk += 10;\n\thero.def += 10;\n});\ncore.updateStatusBar(true);\n}"
                    },
                    {
                        "type": "choices",
                        "text": "\t[神秘老人,wizard]第2好用的法杖。想+50等级么？再送全部角色10攻10防。",
                        "choices": [
                            {
                                "text": "好啊,我要提升！",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:lv",
                                        "operator": "+=",
                                        "value": "50"
                                    },
                                    "\t[神秘老人,wizard]\b[this]祝你好运！"
                                ]
                            },
                            {
                                "text": "我不想提升。",
                                "action": [
                                    {
                                        "type": "choices",
                                        "text": "\t[神秘老人,wizard]无聊，多好的机会啊，提不提升？！",
                                        "choices": [
                                            {
                                                "text": "提升",
                                                "action": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "status:lv",
                                                        "operator": "+=",
                                                        "value": "50"
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "不提升",
                                                "action": [
                                                    "\t[神秘老人,wizard]\b[this]再见！"
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(item:I411>0)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "1"
                    },
                    "\t[神秘老人,wizard]\b[this]唔......你有防御法杖！",
                    "\t[hero]\b[hero]有什么不对么？",
                    "\t[神秘老人,wizard]\b[this]它在50级时效果最好！",
                    "\t[hero]\b[hero]有什么功能？",
                    "\t[神秘老人,wizard]\b[this]当你防御敌人时，它会辅助你防御。\n也就是说在战斗时你是DEF+DEF×30%防御。",
                    {
                        "type": "function",
                        "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.atk += 10;\n\thero.def += 10;\n});\ncore.updateStatusBar(true);\n}"
                    },
                    {
                        "type": "choices",
                        "text": "\t[神秘老人,wizard]第3好用的法杖。想+50等级么？再送全部角色10攻10防。",
                        "choices": [
                            {
                                "text": "好啊,我要提升！",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:lv",
                                        "operator": "+=",
                                        "value": "50"
                                    },
                                    "\t[神秘老人,wizard]\b[this]祝你好运！"
                                ]
                            },
                            {
                                "text": "我不想提升。",
                                "action": [
                                    {
                                        "type": "choices",
                                        "text": "\t[神秘老人,wizard]无聊，多好的机会啊，提不提升？！",
                                        "choices": [
                                            {
                                                "text": "提升",
                                                "action": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "status:lv",
                                                        "operator": "+=",
                                                        "value": "50"
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "不提升",
                                                "action": [
                                                    "\t[神秘老人,wizard]\b[this]再见！"
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(item:I413>0)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "1"
                    },
                    "\t[神秘老人,wizard]\b[this]唔......你有生命法杖！",
                    "\t[hero]\b[hero]有什么不对么？",
                    "\t[神秘老人,wizard]\b[this]它在50级时效果最好！",
                    "\t[hero]\b[hero]有什么功能？",
                    "\t[神秘老人,wizard]\b[this]作弊！可以去重生怪物那每次刷121点HP，多刷几次你就无敌了。希望你不要这样！",
                    {
                        "type": "function",
                        "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.atk += 10;\n\thero.def += 10;\n});\ncore.updateStatusBar(true);\n}"
                    },
                    {
                        "type": "choices",
                        "text": "\t[神秘老人,wizard].....帮你提升,你答应我不作弊么？\nH5复刻作者：没事，这个BUG我已经修了",
                        "choices": [
                            {
                                "text": "哦（真实话么）",
                                "action": [
                                    "\t[神秘老人,wizard]\b[this].....好吧",
                                    {
                                        "type": "setValue",
                                        "name": "status:lv",
                                        "operator": "+=",
                                        "value": "50"
                                    }
                                ]
                            },
                            {
                                "text": "不（真诚实）",
                                "action": [
                                    {
                                        "type": "choices",
                                        "text": "\t[神秘老人,wizard]哎，你太诚实了。提升么？",
                                        "choices": [
                                            {
                                                "text": "提升",
                                                "action": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "status:lv",
                                                        "operator": "+=",
                                                        "value": "50"
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "不提升",
                                                "action": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(item:I412>0)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "1"
                    },
                    "\t[神秘老人,wizard]\b[this]唔......你有魔防法杖！",
                    "\t[hero]\b[hero]有什么不对么？",
                    "\t[神秘老人,wizard]\b[this]它在50级时效果最好！",
                    "\t[hero]\b[hero]有什么功能？",
                    "\t[神秘老人,wizard]\b[this]它可辅助你30%MAG防御魔攻。真不知道你这一路怎么过来的，靠这个最次的法杖。",
                    {
                        "type": "function",
                        "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.atk += 15;\n\thero.def += 15;\n});\ncore.updateStatusBar(true);\n}"
                    },
                    {
                        "type": "choices",
                        "text": "\t[神秘老人,wizard]给全部角色15攻15防！想提升50级么？",
                        "choices": [
                            {
                                "text": "好啊,我要提升！",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:lv",
                                        "operator": "+=",
                                        "value": "50"
                                    },
                                    "\t[神秘老人,wizard]\b[this]祝你好运！"
                                ]
                            },
                            {
                                "text": "我不想提升。",
                                "action": [
                                    {
                                        "type": "choices",
                                        "text": "\t[神秘老人,wizard]无聊，多好的机会啊，提不提升？！",
                                        "choices": [
                                            {
                                                "text": "提升",
                                                "action": [
                                                    {
                                                        "type": "setValue",
                                                        "name": "status:lv",
                                                        "operator": "+=",
                                                        "value": "50"
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "不提升",
                                                "action": [
                                                    "\t[神秘老人,wizard]\b[this]再见！"
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(switch:A===1)",
                "true": [
                    {
                        "type": "hide",
                        "remove": true
                    }
                ],
                "false": [
                    "\t[神秘老人,wizard]\b[this]你没有任何法杖，找到了再来叫我！"
                ]
            }
        ]
    },
    "changeFloor": {
        "13,13": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "13,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "12,3": [
            {
                "type": "setBlock",
                "number": "Ice"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "5,1": [
            {
                "type": "setBlock",
                "number": "Ice"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "10,4": [
            {
                "type": "setBlock",
                "number": "Ice"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "9,7": [
            {
                "type": "setBlock",
                "number": "Ice"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "9,10": [
            {
                "type": "setBlock",
                "number": "Ice"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "7,10": [
            {
                "type": "setBlock",
                "number": "Ice"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "2,13": [
            {
                "type": "setBlock",
                "number": "Ice"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "2,9": [
            {
                "type": "setBlock",
                "number": "Ice"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "5,6": [
            {
                "type": "setBlock",
                "number": "Ice"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "12,13": [
            {
                "type": "setBlock",
                "number": "Ice"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040,365,365,365,365, 31,  0,516,  0,365,240,  0,515, 87,20042],
    [20040,365, 27, 27, 31,365,516,365,516,240, 81,365,  0,515,20042],
    [20040,365, 28, 28, 32,365, 34,365,365,  0,240,365, 31,  0,20042],
    [20040,365, 29, 29, 33,365, 82,365,508,  0, 31,365, 21,  0,20042],
    [20040,365,365, 82,365,365,  0,365, 32,508,  0,365, 82,365,20042],
    [20040,365,516,  0,516, 31,514,508, 81,365,  0,514,  0, 29,20042],
    [20040,365,365, 81,365,514,  0, 29,365, 31,365, 84,365,365,20042],
    [20040,241,240, 21,  0,  0,508,365,365, 27,365,514,  0,  0,20042],
    [20040,  0, 31, 81,  1,365, 22,240,  0,513,  0,513,365,240,20042],
    [20040,241,508,508,515, 81,515, 31,365, 31,365, 28,365,240,20042],
    [20040,  0,365,365,365,365, 82,365, 34, 34,365,365,365,240,20042],
    [20040,241,  0,241, 21,  0,241,365, 81,365,365,125,365,  0,20042],
    [20040, 27, 31, 28,365,365,  0, 81,516, 81,516, 21, 31, 88,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,365,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,365,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,365,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,365,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,365,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,365,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,365,  0,365,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,365,  0,  0,  0,  0,  0,  0,  0,  0,  0,365,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}