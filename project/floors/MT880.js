main.floors.MT880=
{
    "floorId": "MT880",
    "title": "主塔 880 层",
    "name": "第 880 层",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "mine.ogg",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,5": {
            "trigger": null,
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 240,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "8,12": [
            {
                "type": "if",
                "condition": "(switch:A===1)",
                "true": [
                    {
                        "type": "insert",
                        "name": "OtherShops",
                        "args": [
                            "MTn81"
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "(item:cross>0)",
                        "true": [
                            "\t[仙子,fairy]\b[this]你有圣十字架了，好的，祝你成功。",
                            {
                                "type": "changeFloor",
                                "floorId": "MTn81",
                                "loc": [
                                    7,
                                    12
                                ],
                                "direction": "down"
                            }
                        ]
                    }
                ],
                "false": [
                    "\t[仙子,fairy]\b[this]你醒了？",
                    "\t[hero]\b[hero]我睡了多久啊？",
                    "\t[仙子,fairy]\b[this]我不知道，不过很久了。",
                    "\t[hero]\b[hero]……你怎么不叫我起来！我要救国王！",
                    "\t[仙子,fairy]\b[this]奇怪。",
                    "\t[hero]\b[hero]怎么了？",
                    "\t[仙子,fairy]\b[this]除了魔王和我，没人能进来......这可是魔塔顶层。",
                    "\t[hero]\b[hero]（想）好像战争魔王把我扔到了这里......奇怪......",
                    "\t[仙子,fairy]\b[this]好了，拿到圣十字架，即可出去，不过这里的怪物很厉害。",
                    "\t[hero]\b[hero]怎么了？",
                    "\t[仙子,fairy]\b[this]与死亡怪物战斗后，生命值无效。也就是说，无法与伤害超过1的怪物正常战斗，而且无法获得血瓶。",
                    "\t[hero]\b[hero]……和死了差不多......那你有办法么？",
                    "\t[仙子,fairy]\b[this]有。给我3点攻防我可以解除你的死亡状态。",
                    "\t[hero]\b[hero]状态？和中毒衰弱一样？",
                    "\t[仙子,fairy]\b[this]不，如果你有了死亡状态，它不会马上显示，当你的同伴走动时或上下楼才会显示出。",
                    "\t[hero]\b[hero]哦，好可怕……",
                    "\t[仙子,fairy]\b[this]（小声说）只是作者不会让这个状态马上显示出来罢了，哪有那么神奇......",
                    "\t[H5复刻作者]注：本复刻版会立刻显示，是原作者不会(x",
                    "\t[仙子,fairy]\b[this]好啦，快去吧。",
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "1"
                    }
                ]
            }
        ]
    },
    "changeFloor": {},
    "beforeBattle": {
        "7,4": [
            "\t[hero]\b[hero]你也在啊？",
            "\t[史莱姆,greenSlime]\b[this]为了让你不用中心对称飞我才在这的。",
            "\t[hero]\b[hero]（想）呵呵，有杀你的理由了……",
            "\t[hero]\b[hero]你敢挡我？去死。"
        ]
    },
    "afterBattle": {
        "2,10": [
            {
                "type": "setValue",
                "name": "flag:F880_DoorL",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F880_DoorL",
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
                    }
                ]
            }
        ],
        "4,10": [
            {
                "type": "setValue",
                "name": "flag:F880_DoorL",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F880_DoorL",
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
                    }
                ]
            }
        ],
        "2,7": [
            {
                "type": "setValue",
                "name": "flag:F880_DoorL",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F880_DoorL",
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
                    }
                ]
            }
        ],
        "4,7": [
            {
                "type": "setValue",
                "name": "flag:F880_DoorL",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F880_DoorL",
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
                    }
                ]
            }
        ],
        "10,10": [
            {
                "type": "setValue",
                "name": "flag:F880_DoorR",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F880_DoorR",
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
                    }
                ]
            }
        ],
        "12,10": [
            {
                "type": "setValue",
                "name": "flag:F880_DoorR",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F880_DoorR",
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
                    }
                ]
            }
        ],
        "10,7": [
            {
                "type": "setValue",
                "name": "flag:F880_DoorR",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F880_DoorR",
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
                    }
                ]
            }
        ],
        "12,7": [
            {
                "type": "setValue",
                "name": "flag:F880_DoorR",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "switch",
                "condition": "flag:F880_DoorR",
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
                    }
                ]
            }
        ]
    },
    "afterGetItem": {
        "6,12": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    22,
                    22,
                    0
                ]
            }
        ],
        "6,7": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    44,
                    44,
                    10
                ]
            }
        ],
        "8,7": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    44,
                    44,
                    10
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
    [20040,611,611,611,611,611,611,611,611,611,611,611,611,611,20042],
    [20040,611,  0,607,  0,611,611,611,611,611,  0,607,  0,611,20042],
    [20040,611,607,612,607,611,  0, 55,  0,611,607,612,607,611,20042],
    [20040,611,  0,607,  0,611,  0,201,  0,611,  0,607,  0,611,20042],
    [20040,611,611,  0,611,611,611,433,611,611,611,  0,611,611,20042],
    [20040,611,611,433,611,611,611,  0,611,611,611,433,611,611,20042],
    [20040,611,606,  0,606,611,455,  0,455,611,606,  0,606,611,20042],
    [20040,611,611,  0,611,611,611,599,611,611,611,  0,611,611,20042],
    [20040,611,611,433,611,611,611,599,611,611,611,433,611,611,20042],
    [20040,611,605,  0,605,611,611,  0,611,611,605,  0,605,611,20042],
    [20040,611,611, 34,611,611,611,  0,611,611,611, 34,611,611,20042],
    [20040,611,611, 34,611,611,455,  0,124,611,611, 34,611,611,20042],
    [20040, 56, 33, 33, 33, 33,  0,  0,  0, 33, 33, 33, 33, 56,20042],
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
]
}