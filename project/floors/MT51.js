main.floors.MT51=
{
    "floorId": "MT51",
    "title": "主塔 51 层",
    "name": "第 51 层",
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
    "bgm": "031Castle01.mp3",
    "firstArrive": [
        {
            "type": "if",
            "condition": "(flag:F51promote===1)",
            "true": [
                "\t[H5难度系统]根据当前难度设置，非领袖敌人的生命/攻击提升。\n相关难度选项已生效！并已锁定。",
                {
                    "type": "setValue",
                    "name": "flag:diffPromoteRate",
                    "operator": "+=",
                    "value": "0.15"
                },
                {
                    "type": "setValue",
                    "name": "flag:diffPromoteRateHp",
                    "operator": "+=",
                    "value": "0.15"
                }
            ],
            "false": [
                "\t[H5难度系统]根据当前难度设置，51F起敌方属性无变化。\n\"51F起敌方属性提升\"相关难度选项已锁定。"
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "2,8": [
            {
                "type": "openDoor"
            }
        ],
        "3,4": [
            {
                "type": "openDoor"
            }
        ],
        "9,7": [
            {
                "type": "choices",
                "text": "\t[商人,trader]用初级红、蓝、绿钻石换初级黄钻石！\n（请先从装备栏卸下）",
                "choices": [
                    {
                        "text": "好啊，可以",
                        "icon": "I391",
                        "need": "item:I388>0&&item:I389>0&&item:I390>0",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "item:I388",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "item:I389",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "item:I390",
                                "operator": "-=",
                                "value": "1"
                            },
                            {
                                "type": "setValue",
                                "name": "item:I391",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "hide",
                                "remove": true
                            }
                        ]
                    },
                    {
                        "text": "不了，我在想想",
                        "action": []
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "1,13": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "13,13": {
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
    [20040, 33,  0,  0,  1,  0, 31,514,  1, 31,  1, 32, 33,515,20042],
    [20040,  0,  1, 83,  1, 83,  1,515,  1, 31,  1,  1,  1, 81,20042],
    [20040,240,  1, 27, 27, 27,  1,513, 31, 31,  1,  0,241,513,20042],
    [20040, 34,  1,383,  1,  1,  1,  1,  1, 31,515,  0,  1,241,20042],
    [20040,240,  1,515,  0, 28,  0,  1,  1,  1,162,  1,  1,  0,20042],
    [20040,  0,  1, 82,  1,  1,515, 32,  1,  0,513,  0,  0,  0,20042],
    [20040,240,  1, 21, 21,  1,  0,  1,  1,122,  0,  1,  1,  1,20042],
    [20040,  0,383, 21, 21,  1,  0,  0,  0,  0,  0,  1, 32, 32,20042],
    [20040,240,  1,  1,  1,  1,  1,  1, 82,  0, 81,  1, 28, 28,20042],
    [20040, 34,  1, 27, 27, 27, 27,  1,513,  1,514,  1, 82,  1,20042],
    [20040,240,  1,  1,  1,  1, 81,  1,  0,  0,  0,  1, 23, 23,20042],
    [20040,  0,  0,  1, 22, 81,  0,  1, 81,  1,  0,  1,  1, 82,20042],
    [20040, 88,  0, 81, 22,  1,  1, 33,514,  1,  0,  0,  0, 87,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}