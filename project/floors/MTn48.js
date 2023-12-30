main.floors.MTn48=
{
    "floorId": "MTn48",
    "title": "主塔 -48 层",
    "name": "第 -48 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "013Theme02.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,3": [
            "\t[老人,man]\b[this]左边是宝物区，右边是普通区，看你走哪边。@clue",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "7,0": [
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
        "7,1": {
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
        "7,5": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    10000
                ]
            }
        ],
        "1,1": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    6000
                ]
            }
        ],
        "13,1": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    6000
                ]
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,129,20041,20041,20041,20041,20041,20041,20042],
    [20040,454, 33, 33, 33,571,  0, 87,  0,571, 33, 33, 33,454,20042],
    [20040,  2,  2,  2,  2,  2,  2,431,  2,  2,  2,  2,  2,  2,20042],
    [20040,  2,573,572,571,  2,524,121,524,  2,339,339,339,  2,20042],
    [20040,  2,333,  2,  0,  2,  2,571,  2,  2, 32, 32, 32,  2,20042],
    [20040,  2,  2,  2,432,  2,571,454,571,  2, 27, 27, 27,  2,20042],
    [20040,574,  0,571,571,571,  0,  2,  0,  2,  2,571,  2,  2,20042],
    [20040,574,  2, 62,  2, 62,  2,  2,558,558,558,  0,  2, 27,20042],
    [20040,574,10041,10041,10041,10041,10041,  2,  2,  0,  2, 31,572, 27,20042],
    [20040, 49,10041, 47, 47,  0,10041,571,  0, 31,  2,  0,  2,  2,20042],
    [20040,572,  1, 47, 47,10041,10041,430,  2,430,  2,573,573,  2,20042],
    [20040,572,10041,10041,10041,  0,  0,574,  2,431,  2,  2,573,  2,20042],
    [20040,572,  0,573,573,573,  2,  0,  0,431,  2, 30, 34,  2,20042],
    [20040,339,  2,  2,  2,339,  2, 88, 28,  0,  2,  2,  2,  2,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "underGround": true,
    "bgmap": [

],
    "fgmap": [

],
    "isDark": true
}