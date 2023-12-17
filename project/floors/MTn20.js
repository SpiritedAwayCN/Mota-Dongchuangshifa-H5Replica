main.floors.MTn20=
{
    "floorId": "MTn20",
    "title": "主塔 -20 层",
    "name": "第 -20 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "001Battle01.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,11": [
            {
                "type": "autoSave",
                "removeLast": true
            },
            "\t[老人,man]\b[this]连击可以提升你的攻击力，当你攻击＞敌人的防御时，伤害加倍",
            "\t[老人,man]\b[this]把你的等级变为2，然后给你一个新的法杖",
            {
                "type": "setValue",
                "name": "status:lv",
                "value": "2"
            },
            {
                "type": "if",
                "condition": "core.hasItem(\"I414\")",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[老人,man]选择一个新的法杖获得：",
                        "choices": [
                            {
                                "text": "生命法杖",
                                "icon": "I413",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "item:I413",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "攻击法杖",
                                "icon": "I409",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "item:I409",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "防御法杖",
                                "icon": "I411",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "item:I411",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "魔防法杖",
                                "icon": "I412",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "item:I412",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "item:I414",
                        "operator": "+=",
                        "value": "1"
                    }
                ]
            },
            "\t[老人,man]\b[this]你2连击了！",
            {
                "type": "function",
                "function": "function(){\ncore.refreshComboWand();\n}"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "13,13": [
            {
                "type": "if",
                "condition": "(flag:VerboseHint===1)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(switch:A!==1)",
                        "true": [
                            "\t[H5复刻作者]新的隐藏层已开启，位于\"魔塔世界\"的右上角",
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        15,
                        3
                    ]
                ],
                "floorId": "MTWorld"
            },
            {
                "type": "changeFloor",
                "floorId": "MTWorld",
                "loc": [
                    9,
                    9
                ]
            }
        ]
    },
    "changeFloor": {
        "1,13": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "4,13": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    34
                ]
            }
        ],
        "5,13": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    100
                ]
            }
        ],
        "6,13": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    200
                ]
            }
        ],
        "9,13": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    200
                ]
            }
        ],
        "3,11": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    3400
                ]
            }
        ],
        "2,9": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    3400
                ]
            }
        ],
        "2,6": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    3400
                ]
            }
        ],
        "3,13": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    1,
                    1,
                    2
                ]
            }
        ],
        "1,11": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    1,
                    1,
                    2
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
    [20040, 88, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,20042],
    [20040, 31,  1, 31,438,  1,  1,  1,  1,  1,438,  1,438,438,20042],
    [20040, 31,  1,438, 31, 31,438,438,438,  1,  1,  1,  1,438,20042],
    [20040, 31,438, 31,  1,  1,  1,212,438,  1, 28, 28,430,212,20042],
    [20040,438,  1,437,  1, 27, 27,430,  1,  1,  1,  1,  1,430,20042],
    [20040,  1,454,437,  1, 27, 27,  1,232,232,232,231,  1, 28,20042],
    [20040,437,437,  1,  1,  1,  1,  1,218,  1,231,231,  1, 28,20042],
    [20040,444,  1,444,430, 30,430,218,218,  1,  1,231,  1,  1,20042],
    [20040,444,454,444,  1, 30,  1,  1,  1,  1,254, 14,254,  1,20042],
    [20040,444,  1,444,  1, 30, 21, 21, 21,  1,254, 29,254,  1,20042],
    [20040,455,  1,454,  1, 30,  1,121, 21,  1, 29, 29, 29,  1,20042],
    [20040,  1,  1,  1,  1,  1,  1,  1, 21,  1,  1,  1,  1,  1,20042],
    [20040, 87,  0,455,454,454,454,218,218,454,232,232,232, 89,20042],
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