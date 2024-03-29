main.floors.MTn40=
{
    "floorId": "MTn40",
    "title": "主塔 -40 层",
    "name": "第 -40 层",
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
        "2,13": [
            "\t[老人,man]\b[this]据说这里很恐怖！",
            "\t[H5复刻作者]原作本层走入死路将丢失楼层传送器并困毙，\n本复刻版没有引入此设定。",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "1,12": [
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
        "1,13": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "13,1": {
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
    [20040,  2,  0,  0,  0,162,  2,  0,  2,  2,  2,  2,  2, 88,20042],
    [20040,  2,  0,  2,  2,  0,164,  0,  0,  2,  0,  2,  0,  0,20042],
    [20040,  0,  0,  0,  2,  0,  2,  2,  0,  0,  0,  2,161,  2,20042],
    [20040,  2,  2,  0,  2,  2,  0,  2,  0,  2,  0,  0,  0,  0,20042],
    [20040,  0,163,  0,  0,  0,  0,  2,  2,  0,  0,  2,  0,  2,20042],
    [20040,  2,  2,  2,  2,  2,  0,  0,  0,  2,  2,  2,164,  0,20042],
    [20040,  2,164,  0,  2,  0,163,  2,  0,  0,  0,  2,  2,  2,20042],
    [20040,  0,  0,  2,  2,  2,  2,  0,  2,  2,  0,163,  2,  0,20042],
    [20040,  2,  0,  0,  0,  0,  2,  0,  0,  0,  2,  0,  0,161,20042],
    [20040,  2,  0,  2,  2,  0,  0,  0,  2,164,  0,  2,  0,  2,20042],
    [20040,  0,  0,  0,  2,  0,  2,  2,  0,  2,  0,  2,  0,  2,20042],
    [20040,129,  2,161,  2,  0,  0,164,  0,  2,  0,  2,  0,  0,20042],
    [20040, 87,121,  0,  2,  0,  2,  2,  2,  2,  0,164,  0,  2,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "underGround": true,
    "bgmap": [

],
    "fgmap": [

],
    "isDark": true
}