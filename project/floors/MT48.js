main.floors.MT48=
{
    "floorId": "MT48",
    "title": "主塔 48 层",
    "name": "第 48 层",
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
                "floorId": "MT49",
                "loc": [
                    13,
                    13
                ]
            }
        ],
        "11,2": {
            "trigger": "action",
            "enable": true,
            "noPass": true,
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
                    "condition": "(item:I389>0)",
                    "true": [
                        {
                            "type": "setValue",
                            "name": "item:I393",
                            "operator": "+=",
                            "value": "1"
                        },
                        {
                            "type": "hide",
                            "remove": true
                        }
                    ],
                    "false": [
                        "\t[蓝钻戒LV2]\b[this]请持有\\i[I389]蓝钻戒时再领取。\n如已持有请先从装备栏卸下。"
                    ]
                }
            ]
        },
        "7,6": [
            {
                "type": "openDoor"
            }
        ],
        "5,9": [
            {
                "type": "openDoor"
            }
        ],
        "8,1": [
            "\t[老人,man]\b[this]右下角的那个箭头是另一个楼梯。@clue",
            "\t[H5复刻作者]本复刻版此处遵循原版设定，经过箭头到达的新楼层不视为已到达过该楼层。\n因此，仅通过箭头到达的新楼层，楼层传送器不可达。@clue",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "10,13": [
            {
                "type": "choices",
                "text": "\t[超级商人,trader]给我当前角色1000点生命，强化钻石效果！",
                "choices": [
                    {
                        "text": "红宝石=2",
                        "icon": "redGem",
                        "color": [
                            255,
                            128,
                            128,
                            1
                        ],
                        "need": "core.values.redGem<2&&status:hp>=1000",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "status:hp",
                                "operator": "-=",
                                "value": "1000"
                            },
                            {
                                "type": "setGlobalValue",
                                "name": "redGem",
                                "value": 2
                            }
                        ]
                    },
                    {
                        "text": "蓝宝石=2",
                        "icon": "blueGem",
                        "color": [
                            128,
                            255,
                            255
                        ],
                        "need": "core.values.blueGem<2&&status:hp>=1000",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "status:hp",
                                "operator": "-=",
                                "value": "1000"
                            },
                            {
                                "type": "setGlobalValue",
                                "name": "blueGem",
                                "value": 2
                            }
                        ]
                    },
                    {
                        "text": "不给",
                        "action": [
                            {
                                "type": "exit"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:noFixSevereBug!==1)",
                "true": [
                    {
                        "type": "hide",
                        "remove": true
                    }
                ]
            }
        ],
        "3,1": [
            {
                "type": "if",
                "condition": "(blockId:3,1===\"moneyShop\")",
                "true": [
                    {
                        "type": "openShop",
                        "id": "F35TSWShop"
                    },
                    {
                        "type": "insert",
                        "name": "OtherShops",
                        "args": [
                            "TSWShop",
                            10
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "7,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,13": {
            "floorId": ":next",
            "stair": "downFloor"
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
    [20040,  2,  2,  2,  2,  2, 34, 88,121,  2,  2,  2,  2,  2,20042],
    [20040,  2, 32, 27, 32,  2, 34, 30, 34,  2,506,393,506,  2,20042],
    [20040,  2,  0,227,  0,  2,  2, 30, 34,  2,  0,506,  0,  2,20042],
    [20040,  2,227,435,227,  2,  0,503,  2,  2,  2, 81,  2,  2,20042],
    [20040,  2,  2, 81,  2,  2,435,  0,506,  0,506,505,506, 27,20042],
    [20040, 29,435,435,435,435,435,383,  1,  1,  1,  1, 81,  3,20042],
    [20040,  3, 81,  2, 81,  2,  2,  1,506,  0,503,239,237,  0,20042],
    [20040,436,227,  2,435, 34,435,  1,505,  1, 84,  1,506,  3,20042],
    [20040,227,  3,  2,  2,384,  0,  1,339,  1,227,  1,505,339,20042],
    [20040,239,  0,239, 31,  2,237,  1,  1,  1,227,  1,  1,  1,20042],
    [20040,  0,  3,  3, 31, 81,237,237, 29,  1,227,227,227,  1,20042],
    [20040,239,  0,  3,  3,  3,  3, 81,  3,  1,  1,  1,227,  1,20042],
    [20040, 87,227,227, 34,503,503, 34,239,239,122,  1,227,20247,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}