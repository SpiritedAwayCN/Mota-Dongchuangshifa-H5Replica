main.floors.MT85=
{
    "floorId": "MT85",
    "title": "主塔 85 层",
    "name": "第 85 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "autotile7",
    "bgm": "mtboss.mp3",
    "firstArrive": [
        {
            "type": "if",
            "condition": "(flag:F85promote===1)",
            "true": [
                "\t[H5难度系统]根据当前难度设置，全部敌人对角色的伤害增加。\n相关难度选项已生效！并已锁定。",
                {
                    "type": "setValue",
                    "name": "flag:diffVulnerable",
                    "operator": "+=",
                    "value": "0.25"
                },
                {
                    "type": "setValue",
                    "name": "flag:diffPromoteRateHp",
                    "operator": "+=",
                    "value": "0.1"
                }
            ],
            "false": [
                "\t[H5难度系统]根据当前难度设置，85F起敌方属性无变化。\n\"85F起敌方属性提升\"相关难度选项已锁定。"
            ]
        }
    ],
    "eachArrive": null,
    "parallelDo": "",
    "events": {
        "7,1": [
            {
                "type": "if",
                "condition": "(flag:s201_King===1)",
                "true": [
                    {
                        "type": "follow",
                        "name": "043-Queen01.png"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:getQueen",
                        "value": "1"
                    },
                    {
                        "type": "hide",
                        "remove": true
                    },
                    {
                        "type": "exit"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(switch:A===1)",
                "true": [
                    "\t[公主,N549]\b[this]快去救！我父王在地下！"
                ],
                "false": [
                    "\t[公主,N549]\b[this]你终于来了！",
                    "\t[hero]\b[hero]为了救你，费了很大劲呢！",
                    "\t[公主,N549]\b[this]我们快回去吧！至少先给国人报个喜！我们离开这么久了，他们可能现在可能已经开始恐慌了，赶快回去安抚他们一下！",
                    {
                        "type": "choices",
                        "text": "\t[hero]这样的话......",
                        "choices": [
                            {
                                "text": "我还没救出国王呢！",
                                "action": []
                            },
                            {
                                "text": "好，我们回去吧！",
                                "action": [
                                    {
                                        "type": "follow",
                                        "name": "043-Queen01.png"
                                    },
                                    {
                                        "type": "changeFloor",
                                        "floorId": "Scene0",
                                        "loc": [
                                            12,
                                            15
                                        ],
                                        "direction": "up"
                                    },
                                    {
                                        "type": "exit"
                                    }
                                ]
                            },
                            {
                                "text": "避开判负选项(H5专属)",
                                "color": [
                                    192,
                                    192,
                                    192,
                                    1
                                ],
                                "action": [
                                    "\t[hero]\b[hero]我还没救出国王呢！"
                                ]
                            }
                        ]
                    },
                    "\t[公主,N549]\b[this]这......好吧！",
                    "\t[公主,N549]\b[this]我这里也有一些东西。送全部角色10000生命，\n1000攻击，1000防御，400魔防，1连击！",
                    {
                        "type": "function",
                        "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.hp += 10000;\n\thero.atk += 1000;\n\thero.def += 1000;\n\thero.mdef += 400;\n});\ncore.updateStatusBar(true);\n}"
                    },
                    {
                        "type": "setValue",
                        "name": "status:combo",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "animate",
                        "name": "A06",
                        "loc": "hero"
                    },
                    "\t[hero]\b[hero]哇！你好厉害！",
                    "\t[公主,N549]\b[this]我是公主嘛！改进属性物品功能！",
                    {
                        "type": "function",
                        "function": "function(){\ncore.values.redGem = 6;\ncore.values.blueGem = 6;\ncore.values.greenGem = 5;\ncore.values.yellowGem = 4;\ncore.values.redPotion = core.getFlag(\"PotionLessValue\", 0) ? 500 : 800;\ncore.values.bluePotion = core.getFlag(\"PotionLessValue\", 0) ? 1000 : 1500;\ncore.values.yellowPotion = core.getFlag(\"PotionLessValue\", 0) ? 1750 : 2400;\ncore.values.greenPotion = core.getFlag(\"PotionLessValue\", 0) ? 2750 : 3800;\n}"
                    },
                    {
                        "type": "if",
                        "condition": "(flag:PotionLessValue===1)",
                        "true": [
                            "\t[公主,N549]\b[this]红、蓝宝石效果变为+6，黄宝石加点数变为+4！红血瓶效果变为+500、蓝血瓶效果变为+800、黄血瓶效果变为+1750、绿血瓶效果变为+2750！！",
                            {
                                "type": "tip",
                                "text": "血瓶增益降低难度效果已生效！"
                            }
                        ],
                        "false": [
                            "\t[公主,N549]\b[this]红、蓝宝石效果变为+6，黄宝石加点数变为+4！红血瓶效果变为+800、蓝血瓶效果变为+1500、黄血瓶效果变为+2400、绿血瓶效果变为+3800！！",
                            {
                                "type": "setValue",
                                "name": "flag:PotionLessValueDisabled",
                                "value": "1"
                            },
                            {
                                "type": "tip",
                                "text": "未选择血瓶增益效果降低难度选项，已禁用！"
                            }
                        ]
                    },
                    "\t[hero]\b[hero]$_$！",
                    "\t[hero]\b[hero]不过这些给我了，你怎么办？",
                    "\t[公主,N549]\b[this]哦...也对，给我你的35级！",
                    {
                        "type": "setValue",
                        "name": "status:lv",
                        "operator": "-=",
                        "value": "35"
                    },
                    "\t[hero]\b[hero]哎哎哎！",
                    "\t[公主,N549]\b[this]救出我的父王！",
                    "\t[hero]\b[hero]那你......",
                    "\t[公主,N549]\b[this]听我的，去！",
                    "\t[hero]\b[hero]那你......保重！",
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "1"
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "7,13": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "2,10": [
            {
                "type": "setValue",
                "name": "flag:F85DoorLeft",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F85DoorLeft",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    9
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
                                    3,
                                    6
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
                                    3,
                                    3
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,10": [
            {
                "type": "setValue",
                "name": "flag:F85DoorLeft",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F85DoorLeft",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    9
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
                                    3,
                                    6
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
                                    3,
                                    3
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "2,7": [
            {
                "type": "setValue",
                "name": "flag:F85DoorLeft",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F85DoorLeft",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    9
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
                                    3,
                                    6
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
                                    3,
                                    3
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,7": [
            {
                "type": "setValue",
                "name": "flag:F85DoorLeft",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F85DoorLeft",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    9
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
                                    3,
                                    6
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
                                    3,
                                    3
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "2,4": [
            {
                "type": "setValue",
                "name": "flag:F85DoorLeft",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F85DoorLeft",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    9
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
                                    3,
                                    6
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
                                    3,
                                    3
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "4,4": [
            {
                "type": "setValue",
                "name": "flag:F85DoorLeft",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F85DoorLeft",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    3,
                                    9
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
                                    3,
                                    6
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
                                    3,
                                    3
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,10": [
            {
                "type": "setValue",
                "name": "flag:F85DoorRight",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F85DoorRight",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    9
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
                                    11,
                                    6
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
                                    11,
                                    3
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,10": [
            {
                "type": "setValue",
                "name": "flag:F85DoorRight",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F85DoorRight",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    9
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
                                    11,
                                    6
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
                                    11,
                                    3
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,7": [
            {
                "type": "setValue",
                "name": "flag:F85DoorRight",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F85DoorRight",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    9
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
                                    11,
                                    6
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
                                    11,
                                    3
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,7": [
            {
                "type": "setValue",
                "name": "flag:F85DoorRight",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F85DoorRight",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    9
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
                                    11,
                                    6
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
                                    11,
                                    3
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "10,4": [
            {
                "type": "setValue",
                "name": "flag:F85DoorRight",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F85DoorRight",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    9
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
                                    11,
                                    6
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
                                    11,
                                    3
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,4": [
            {
                "type": "setValue",
                "name": "flag:F85DoorRight",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F85DoorRight",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    11,
                                    9
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
                                    11,
                                    6
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
                                    11,
                                    3
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {
        "1,13": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    10,
                    0,
                    0
                ]
            }
        ],
        "1,10": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    10,
                    0,
                    0
                ]
            }
        ],
        "1,7": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    10,
                    0,
                    0
                ]
            }
        ],
        "1,4": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    10,
                    0,
                    0
                ]
            }
        ],
        "2,1": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    10,
                    0,
                    0
                ]
            }
        ],
        "1,1": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    10,
                    0,
                    0
                ]
            }
        ],
        "3,1": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    10,
                    0,
                    0
                ]
            }
        ],
        "3,2": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    10,
                    0,
                    0
                ]
            }
        ],
        "4,1": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    10,
                    0,
                    0
                ]
            }
        ],
        "13,13": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    0,
                    10,
                    0
                ]
            }
        ],
        "13,10": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    0,
                    10,
                    0
                ]
            }
        ],
        "13,7": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    0,
                    10,
                    0
                ]
            }
        ],
        "13,4": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    0,
                    10,
                    0
                ]
            }
        ],
        "13,1": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    0,
                    10,
                    0
                ]
            }
        ],
        "12,1": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    0,
                    10,
                    0
                ]
            }
        ],
        "11,1": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    0,
                    10,
                    0
                ]
            }
        ],
        "10,1": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    0,
                    10,
                    0
                ]
            }
        ],
        "11,2": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    0,
                    10,
                    0
                ]
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040,455,455,455,455, 17, 17,549, 17, 17,455,455,455,455,20042],
    [20040, 17, 17,455, 17, 17, 17,20103, 17, 17, 17,455, 17, 17,20042],
    [20040, 17, 17, 85, 17, 17, 17,540, 17, 17, 17, 85, 17, 17,20042],
    [20040,455,537, 63,537, 17, 17,  0, 17, 17,537, 63,537,455,20042],
    [20040, 17, 17, 63, 17, 17, 17, 86, 17, 17, 17, 63, 17, 17,20042],
    [20040, 17, 17, 85, 17, 17, 17, 84, 17, 17, 17, 85, 17, 17,20042],
    [20040,455,536, 63,536, 17, 17, 83, 17, 17,536, 63,536,455,20042],
    [20040, 17, 17, 63, 17, 17, 17, 82, 17, 17, 17, 63, 17, 17,20042],
    [20040, 17, 17, 85, 17, 17, 17, 81, 17, 17, 17, 85, 17, 17,20042],
    [20040,455,535, 63,535, 17, 17,461, 17, 17,535, 63,535,455,20042],
    [20040, 17, 17,20257, 17, 17, 17,460, 17, 17,  0,20258, 17, 17,20042],
    [20040, 17, 17,20273, 17, 17, 17,  0, 17, 17, 17,20259, 17, 17,20042],
    [20040,455,531, 63,531,  0,531, 88,531,  0,531, 63,531,455,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,143,143,141,141,143,141,141,143,143,143,143,  0],
    [  0,141,141,143,141,141,141,143,141,141,141,143,141,141,  0],
    [  0,141,141,143,141,141,141,143,141,141,141,143,141,141,  0],
    [  0,  0,  0,143,143,141,141,143,141,141,143,143,143,143,  0],
    [  0,141,141,143,141,141,141,143,141,141,141,143,141,141,  0],
    [  0,141,141,143,141,141,141,143,141,141,141,143,141,141,  0],
    [  0,  0,  0,143,143,141,141,143,141,141,143,143,143,143,  0],
    [  0,141,141,143,141,141,141,143,141,141,141,143,141,141,  0],
    [  0,141,141,143,141,141,141,143,141,141,141,143,141,141,  0],
    [  0,  0,  0,143,143,141,141,143,141,141,143,143,143,143,  0],
    [  0,141,141,143,141,141,141,143,141,141,141,143,141,141,  0],
    [  0,141,141,143,141,141,141,143,141,141,141,143,141,141,  0],
    [  0,  0,  0,  0,143,143,143,143,143,143,143,143,143,143,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "pitch": 150
}