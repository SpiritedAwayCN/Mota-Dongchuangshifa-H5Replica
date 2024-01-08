main.floors.MT7=
{
    "floorId": "MT7",
    "title": "主塔 7 层",
    "name": "第 7 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "guitar.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "11,2": [
            {
                "type": "openShop",
                "id": "Expshop7F",
                "open": true
            }
        ],
        "9,5": [
            "\t[老人,man]\b[this]伪装怪物在怪物手册中除了伤害可见，其余都无法显示。@clue",
            "\t[H5复刻作者]但本复刻版伪装效果无效！@clue",
            "\t[老人,man]\b[this]破甲怪物战斗附加角色防御的90%点作为伤害。@clue",
            {
                "type": "setValue",
                "name": "flag:v116_Chat",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "2,14": [
            {
                "type": "if",
                "condition": "switch:A===1",
                "true": [
                    "\t[H5难度系统]您已获得额外物资了，当前最终难度修正：${flag:realHardOffset}"
                ],
                "false": [
                    {
                        "type": "choices",
                        "text": "\t[H5难度系统]可以给予您6把\\i[yellowKey]和4把\\i[redKey]，\r[#FF6060]但通关时结算的难度等级永久减1\r，且若最终难度等级为负数则视为作弊难度。",
                        "choices": [
                            {
                                "text": "获得钥匙，难度-1",
                                "color": [
                                    255,
                                    96,
                                    96,
                                    1
                                ],
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "switch:A",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:realHardOffset",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "item:redKey",
                                        "operator": "+=",
                                        "value": "4"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "item:yellowKey",
                                        "operator": "+=",
                                        "value": "6"
                                    }
                                ]
                            },
                            {
                                "text": "我不需要",
                                "color": [
                                    96,
                                    255,
                                    96
                                ],
                                "action": []
                            }
                        ]
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
        "9,7": {
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
    [20040,203,203,  0,205,216,209, 23,  1,  1,  1,  1,  1,  1,20042],
    [20040,203,  1,  1,  1,  0,  1,  1,  1, 34,  9,130, 10,  1,20042],
    [20040,  0,  1, 27,  1,224,  1, 28,  1, 34,  0,216,  0,  1,20042],
    [20040,  0,  1, 27, 81, 86, 81, 28,  1,  1,  1, 81,  1,  1,20042],
    [20040,  0,  1, 27,  1,224,  1, 28,  1,121,  0,216,  0,  1,20042],
    [20040,  0,  1,  1,  1,  0,  1,  1,  1,  0,  0,  1,  1, 27,20042],
    [20040,379,  0,377,377,377,  0,  0,  0, 87,205, 81,216,209,20042],
    [20040, 81,  1,  1,  1,  1, 81,  1,  0,  0,  0,  1,209, 31,20042],
    [20040,380,  1, 31,  0,  1,378,  1, 21,  1,  0,209,  1, 28,20042],
    [20040, 27,  1, 31,381, 81,378,  1, 21,  1,  1, 81,  1,  1,20042],
    [20040, 32,  1, 31,  0,  1, 28,  1,  0,  1, 27,209, 27,  1,20042],
    [20040,  1,  1,  1,  1,  1,  1,  1,382,  1,  0, 27,  0,  1,20042],
    [20040, 88,  0, 81, 81, 81, 81, 81,  0,  1, 27,  0, 27,  1,20042],
    [20048,20049,129,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}