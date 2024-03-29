main.floors.MTn63=
{
    "floorId": "MTn63",
    "title": "主塔 -63 层",
    "name": "第 -63 层",
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
        "8,12": [
            "\t[老人,man]\b[this]选择最好的路。@clue",
            "\t[老人,man]\b[this]你一直往前做就行了。@clue",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "7,14": [
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
        "7,13": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "7,7": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "13,7": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    3,
                    3,
                    0
                ]
            }
        ],
        "13,8": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    3,
                    3,
                    0
                ]
            }
        ],
        "3,13": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    4000
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
    [20040,421,421,421,421,421,421,421,421,421,421,421,421,421,20042],
    [20040,421, 61, 27, 60, 27, 61,421, 61, 27, 60, 27, 61,421,20042],
    [20040,421, 61, 60,401, 60, 61,421, 61, 60,401, 60, 61,421,20042],
    [20040,421,421,421,431,421,421,421,421,421,431,421,421,421,20042],
    [20040,421,421,421,431,421,421,421,421,421,431,421,421,421,20042],
    [20040,421,421,421,431,421,421,421,421,421,431,421,421,421,20042],
    [20040, 27,  1,  0,  0,587,  0, 88,  0,587,  0,589,  0,455,20042],
    [20040, 28,  1, 12,  1,  1,  1, 12,  1, 12,  1,  1,  1,455,20042],
    [20040,590,  0,  0, 29, 29,  0,587,  0,  0,589,  0,  0,  1,20042],
    [20040,  1, 12,  1,  1,  1,  1,587,  0,  1,  1,  1,588,  1,20042],
    [20040,  0,589,589,  0,587,  1, 12,  1,  1, 34,  1, 12, 65,20042],
    [20040, 12,  1,  1,  1, 12,  1,  0,121,  1, 34,  1,588,  1,20042],
    [20040,589,  0,454,  0,587,  0, 87,  0, 12, 34, 12,  0,  1,20042],
    [20048,20049,20049,20049,20049,20049,20049,129,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

],
    "underGround": true,
    "isDark": true
}