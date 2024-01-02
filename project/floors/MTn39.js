main.floors.MTn39=
{
    "floorId": "MTn39",
    "title": "主塔 -39 层",
    "name": "第 -39 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "013Theme02.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,6": [
            "\t[老人,man]\b[this]据说这里面有4对红蓝宝石。@clue",
            "\t[老人,man]\b[this]有一个宝物可使你的视线扩大，有一个宝物可使你脱离黑暗，就看你会不会使用了。@clue",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "8,6": [
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
                        "text": "确认要禁用漆黑层效果吗?\n（禁用后可能会失去探索的乐趣）",
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
        "7,6": {
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
    [20040,  2,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20042],
    [20040,  2,  0,  0,  2,  2,  0,  0,  0,  0,  2,  2,  2,  0,20042],
    [20040,  2,  0,  2,  2,  2,  2,  2,  2,  2,  2,  0,  0,  0,20042],
    [20040,  0,  0,  0,  2,  0,  0,  0,  0,  0,  2,  2,  0,  2,20042],
    [20040,  0,  2,  2,  2,  0,  2,  2,  2,  0,  2,  0,  0,  0,20042],
    [20040,  0,  2, 27,  2,  0,121, 87,129,  0,  2,  2,  2,  0,20042],
    [20040,  0,  2, 28,  2,  2,  2,  2,  2,  0,  0,  0,  2,  0,20042],
    [20040,  0,  2,  0,  0,  0,  0,  0,  0,  0,  2,  0,  2,  0,20042],
    [20040,  0,  2,  2,  0,  2,  0,  2,  2,  2,  2,  0,  2,  0,20042],
    [20040,  0,  0,  2,  0,  2,  0,  0,  0,  2, 27, 28,  2,  0,20042],
    [20040,  2,  0,  2, 28,  2,  2,  2,  0,  2,  2,  2,  2,  0,20042],
    [20040,  2,  0,  2, 27,  2, 27, 28,  0,  0,  0,  0,  0,  0,20042],
    [20040, 88,  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "underGround": true,
    "bgmap": [

],
    "fgmap": [

],
    "isDark": true
}