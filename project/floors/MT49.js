main.floors.MT49=
{
    "floorId": "MT49",
    "title": "主塔 49 层",
    "name": "第 49 层",
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
    "bgm": "045Positive03.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "13,13": [
            {
                "type": "function",
                "function": "function(){\ncore.setFlag(\"DryVisitNext\", 1);\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "MT48",
                "loc": [
                    13,
                    13
                ]
            }
        ],
        "1,1": [
            {
                "type": "if",
                "condition": "(blockId:1,1===\"T458\")",
                "true": [
                    {
                        "type": "playSound",
                        "name": "029-Door06.ogg"
                    },
                    {
                        "type": "setBlock",
                        "number": "T459"
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                12
                            ]
                        ],
                        "floorId": "MT43",
                        "remove": true
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                8,
                                12
                            ]
                        ],
                        "floorId": "MT43",
                        "remove": true
                    },
                    "\t[机关]\b[this]43层机关门打开！"
                ]
            }
        ],
        "2,13": [
            "\t[老人,man]\b[this]自爆怪物战斗后，勇士生命降为1。@clue",
            "\t[老人,man]\b[this]魔塔里卖东西的商人、商店特别多，请以最佳选择方式购买。@clue",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "5,11": [
            {
                "type": "openShop",
                "id": "F49GoldShop",
                "open": true
            }
        ],
        "13,1": [
            {
                "type": "if",
                "condition": "core.hasVisitedFloor('MT50')",
                "true": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT50",
                        "loc": [
                            13,
                            1
                        ]
                    }
                ],
                "false": [
                    "请先从主楼梯到达50F后，再从此上楼。"
                ]
            }
        ],
        "11,1": [
            {
                "type": "if",
                "condition": "(flag:VerboseHint===1)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(switch:A !== 1)",
                        "true": [
                            {
                                "type": "confirm",
                                "text": "上楼将永久扣除所有角色66攻66防，\n且49F商人暂时涨价直到71F，\n是否确认上楼？",
                                "yes": [
                                    {
                                        "type": "setValue",
                                        "name": "switch:A",
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
                    }
                ]
            },
            {
                "type": "changeFloor",
                "floorId": ":next",
                "stair": "downFloor"
            }
        ]
    },
    "changeFloor": {
        "1,13": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "5,12": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "7,13": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "9,13": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "10,13": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "11,13": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
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
    [20040,458,  0,  2,  2,  0,239,  0, 82,  3, 82, 87,421,20247,20042],
    [20040,  2, 21, 22,  2,239,  0,  3, 82,  3, 82,508,421,508,20042],
    [20040,  2,227,  2,  2,  0,239,  3, 82,508, 82,  3,421, 21,20042],
    [20040,  2, 81,  2,  0,239,  1,  1,  1, 82,  1,  1,421, 21,20042],
    [20040,503,503,  0,239,  0,  1, 31, 31,508, 31, 31,421, 21,20042],
    [20040,503,  2,  2,  2,  2,  1, 32,  1,  1,  1, 32,421, 21,20042],
    [20040,  0,227,227,  0,  0,  1, 34, 34,  1, 34, 34,421, 21,20042],
    [20040,421,421,227,  0,227,  1,  1,421,421,421,421,421, 21,20042],
    [20040, 21, 21,  0,421,227,508, 31,421, 31, 31, 31, 31, 31,20042],
    [20040, 21, 21,435,421,421, 32, 32,421, 32, 32, 32, 32, 32,20042],
    [20040,421,421,435,421,122,421, 34,421, 34, 34, 34, 34, 34,20042],
    [20040,435,435,435,505,454,421, 33,421, 33, 33, 33, 33,508,20042],
    [20040, 88,121,421,421,421,421,454,421,454,454,454,508,20255,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  5,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  5,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  5,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  5,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  5,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  5,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  5,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  5,  5,  5,  5,  5,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  5,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  5,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  5,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  5,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  5,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}