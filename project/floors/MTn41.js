main.floors.MTn41=
{
    "floorId": "MTn41",
    "title": "主塔 -41 层",
    "name": "第 -41 层",
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
        "12,1": [
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
        "13,1": {
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
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040,  0,  2,  0,  2,  0,  0,  2,  0,  2,  0,  2,129, 87,20042],
    [20040,  0,  2,  0,  0,  0,  2,  2,  0,  2,  0,  0,  0,  0,20042],
    [20040,  0,  2,  2,  2,  0,  2,  0,  0,  0,  0,  2,  0,  2,20042],
    [20040,  0,  0,  0,  0,  0,  2,  2,  2,  2,  0,  2,  0,  0,20042],
    [20040,  2,  0,  2,  2,  0,  0,  0,  0,  2,  2,  2,  0,  2,20042],
    [20040,  0,  0,  0,  2,  0,  2,  2,  0,  0,  0,  0,  0,  2,20042],
    [20040,  2,  2,  2,  2,  0,  0,  2,  2,  0,  2,  2,  2,  0,20042],
    [20040,  0,  0,  0,  0,  0,  2,  2,  0,  0,  2,  0,  0,  0,20042],
    [20040,  2,  2,  2,  2,  0,  2,  0,  0,  2,  2,  0,  2,  0,20042],
    [20040,  2,  0,  0,  0,  0,  2,  2,  0,  0,  0,  0,  2,  0,20042],
    [20040,  2,  0,  2,  2,  2,  2,  0,  0,  2,  2,  2,  2,  0,20042],
    [20040,  0,  0,  0,  0,  0,  0,  2,  2,  0,  0,  0,  0,  0,20042],
    [20040,  0,  2,  2,  2,  2,  0, 88,  2,  0,  2,  2,  2,  2,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "underGround": true,
    "bgmap": [

],
    "fgmap": [

],
    "isDark": true
}