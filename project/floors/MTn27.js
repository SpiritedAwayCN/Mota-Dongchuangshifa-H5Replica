main.floors.MTn27=
{
    "floorId": "MTn27",
    "title": "主塔 -27 层",
    "name": "第 -27 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "045Positive03.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,5": [
            {
                "type": "openShop",
                "id": "F22WineShop",
                "open": true
            }
        ],
        "6,7": [
            {
                "type": "openDoor"
            }
        ],
        "2,12": [
            {
                "type": "openDoor"
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:Fm27ShopVisited",
                "value": "1"
            },
            {
                "type": "openShop",
                "id": "Fm17ExpShop"
            },
            {
                "type": "insert",
                "name": "OtherShops",
                "args": [
                    "MTn27"
                ]
            }
        ],
        "13,13": [
            {
                "type": "choices",
                "text": "\t[商人,trader]我可以让破甲怪物对你的额外伤害倍率变为防御的50%，用当前角色的15点攻击",
                "choices": [
                    {
                        "text": "好",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.values.breakArmor = 0.5;\ncore.decreaseStatusWithBuffer(\"atk\", 15);\n}"
                            },
                            {
                                "type": "hide",
                                "remove": true
                            }
                        ]
                    },
                    {
                        "text": "我再想想",
                        "action": [
                            {
                                "type": "exit"
                            }
                        ]
                    }
                ]
            }
        ],
        "4,11": [
            {
                "type": "choices",
                "text": "\t[商人,trader]我可以让反击怪物每回合对你的额外伤害倍率变为攻击的5%，用当前角色的15点防御",
                "choices": [
                    {
                        "text": "好",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.values.counterAttack = 0.05;\ncore.decreaseStatusWithBuffer(\"def\", 15);\n}"
                            },
                            {
                                "type": "hide",
                                "remove": true
                            }
                        ]
                    },
                    {
                        "text": "我再想想",
                        "action": [
                            {
                                "type": "exit"
                            }
                        ]
                    }
                ]
            }
        ],
        "12,4": [
            {
                "type": "choices",
                "text": "\t[商人,trader]我可让衰弱怪物对你的衰弱率改为80%。用你的5点防御，5点攻击。",
                "choices": [
                    {
                        "text": "好",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\nif (core.hasFlag('weak')) {\n\tcore.addBuff(\"atk\", core.values.weakValue - 0.2);\n\tcore.addBuff(\"def\", core.values.weakValue - 0.2);\n}\ncore.values.weakValue = 0.2;\ncore.decreaseStatusWithBuffer(\"atk\", 5);\ncore.decreaseStatusWithBuffer(\"def\", 5);\n}"
                            },
                            {
                                "type": "hide",
                                "remove": true
                            }
                        ]
                    },
                    {
                        "text": "我再想想",
                        "action": [
                            {
                                "type": "exit"
                            }
                        ]
                    }
                ]
            }
        ],
        "4,3": [
            "\t[商人,trader]\b[this]0层有个商人，专卖钥匙。@clue",
            {
                "type": "show",
                "loc": [
                    [
                        9,
                        8
                    ]
                ],
                "floorId": "MT0"
            },
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "1,1": {
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
    [20040, 87,  0, 33, 29, 61,504, 31, 32,  1,  1,  1,  1,  1,20042],
    [20040,  1,  1,  1,  1,  1,504,  1,  1,  1,  0, 34, 21,  1,20042],
    [20040,  1, 21,  0,122,  1,504, 34, 34,430,505, 61, 28,  1,20042],
    [20040,  1, 61, 28, 34,  1,  1,  1,505,  1, 27,  0,122,  1,20042],
    [20040,  1, 27,505,  0,  1,128,  0,505,  1,  1,  1,  1,  1,20042],
    [20040,  1,  1,430,  1,  1,  0, 58,505, 58,  0,  1, 27, 22,20042],
    [20040, 28,227, 11, 61,227,  1,  1,  1,  1, 11,  1,239,239,20042],
    [20040,  1,  1,430,  1,  1,  1,121,237,430,  0,  1,  0,505,20042],
    [20040,  1, 28,505, 27,  1,  1,  1,  1,  1,504,  1,  1,430,20042],
    [20040,  1,  0, 61,  0,  1,505,505, 11,  0,  0,227,227,227,20042],
    [20040,  1, 21, 34,122,  1,505,  1, 59, 59, 59,  1, 32, 32,20042],
    [20040,  1,  1,430,  1,  1, 58,  1,430,  1,  1,  1,  1,  1,20042],
    [20040, 88,  0, 11, 11,505,505,  1,237,505,239,503,  0,122,20042],
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