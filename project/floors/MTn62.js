main.floors.MTn62=
{
    "floorId": "MTn62",
    "title": "主塔 -62 层",
    "name": "第 -62 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "061Slow04.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "13,7": [
            {
                "type": "function",
                "function": "function(){\ncore.setFlag(\"DryVisitNext\", 1);\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "MTn61",
                "loc": [
                    13,
                    7
                ]
            }
        ],
        "1,6": [
            {
                "type": "if",
                "condition": "(flag:NoDarkFloorValid===1)",
                "true": [
                    {
                        "type": "confirm",
                        "text": "确认要重新启用漆黑层吗?",
                        "yes": [
                            {
                                "type": "setValue",
                                "name": "flag:NoDarkFloorValid",
                                "value": "0"
                            }
                        ],
                        "no": []
                    }
                ],
                "false": [
                    {
                        "type": "confirm",
                        "text": "确认要禁用漆黑层效果吗?",
                        "yes": [
                            {
                                "type": "setValue",
                                "name": "flag:NoDarkFloorValid",
                                "value": "1"
                            }
                        ],
                        "no": []
                    }
                ]
            },
            {
                "type": "function",
                "function": "function(){\nif (core.shouldDrawDarkMask())\n\tcore.updateDarkMask(core.status.heroCenter.px - (core.bigmap.offsetX || 0), core.status.heroCenter.py - (core.bigmap.offsetY || 0));\nelse\n\tcore.cleanDarkMask();\n}"
            }
        ],
        "14,7": [
            {
                "type": "if",
                "condition": "(flag:NoDarkFloorValid===1)",
                "true": [
                    {
                        "type": "confirm",
                        "text": "确认要重新启用漆黑层吗?",
                        "yes": [
                            {
                                "type": "setValue",
                                "name": "flag:NoDarkFloorValid",
                                "value": "0"
                            }
                        ],
                        "no": []
                    }
                ],
                "false": [
                    {
                        "type": "confirm",
                        "text": "确认要禁用漆黑层效果吗?",
                        "yes": [
                            {
                                "type": "setValue",
                                "name": "flag:NoDarkFloorValid",
                                "value": "1"
                            }
                        ],
                        "no": []
                    }
                ]
            },
            {
                "type": "function",
                "function": "function(){\nif (core.shouldDrawDarkMask())\n\tcore.updateDarkMask(core.status.heroCenter.px - (core.bigmap.offsetX || 0), core.status.heroCenter.py - (core.bigmap.offsetY || 0));\nelse\n\tcore.cleanDarkMask();\n}"
            }
        ]
    },
    "changeFloor": {
        "1,7": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "7,13": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "4,2": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    3,
                    3,
                    3
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
    [20040,  1,  1,  1,  1,  1,  3,  3,596,  2,  2,  2,  2,  2,20042],
    [20040,  1, 28,  0,455,  1,  0,  0,  0,  2, 34, 34, 34,  2,20042],
    [20040,  1,  0, 27,  0,  1,590,  3,  3,  2, 28, 28, 28,  2,20042],
    [20040,  1, 30,  0, 29,  1,  0,  0,588,  2, 27, 27, 27,  2,20042],
    [20040,  1,  1,430,  1,  1,  3,  3,588,  2,  2,430,  2,  2,20042],
    [20040,129,  0,587,587,  1,  0,  3,588,  0,  2,590,  2,  0,20042],
    [20040, 87,  0,365,  0,589,589,  0,  0,365,365,  0,  0,20247,129],
    [20040,  0,  0,365,365,365,365,365,365,365, 32, 32,365,  0,20042],
    [20040,587,  0,  0,430,588,  0,430, 27,365,365,  0,365,590,20042],
    [20040,430,365,365,365,365,590,365, 27,365, 32, 32,365,590,20042],
    [20040,587, 33,365, 27, 28, 27,365,365,365,365,365,365,590,20042],
    [20040,431,365,365,365,590,365,365, 34,365, 27,  0, 28,  0,20042],
    [20040,  0,587,432,587,  0,  0, 88, 34,365, 27,365, 28,365,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

],
    "underGround": true,
    "isDark": true
}