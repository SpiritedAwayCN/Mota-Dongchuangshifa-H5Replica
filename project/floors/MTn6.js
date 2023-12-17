main.floors.MTn6=
{
    "floorId": "MTn6",
    "title": "主塔 -6 层",
    "name": "第 -6 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "bgm.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "2,9": [
            "\t[老人,this]\b[this]净化怪物战斗前，附加勇士魔防的3倍作为伤害。",
            "\t[老人,this]\b[this]左上角的勇士是你要救的人。",
            {
                "type": "setValue",
                "name": "flag:v116_Chat",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "3,3": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
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
                "\t[女子,N448]\b[this]谢谢你救了我！",
                "\t[hero,hero]\b[hero]你就是那位女战士？",
                "\t[女子,N448]\b[this]对。按U就可以交换人物了。",
                {
                    "type": "function",
                    "function": "function(){\ncore.resetHero1();\n}"
                },
                {
                    "type": "setValue",
                    "name": "flag:FoundWoman",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "item:fly_old",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "choices",
                    "text": "\t[女子,N448]我的名字可以改变",
                    "choices": [
                        {
                            "text": "我有新名字 (请输入)",
                            "action": [
                                {
                                    "type": "input2",
                                    "text": "为“女子”起一个新名字（留空则不变）："
                                },
                                {
                                    "type": "function",
                                    "function": "function(){\ncore.getFlag(\"hero1\").name = core.getFlag(\"input\") || \"女子\";\n}"
                                }
                            ]
                        },
                        {
                            "text": "但是我不改名，不换姓",
                            "action": []
                        }
                    ]
                },
                {
                    "type": "hide",
                    "remove": true
                }
            ]
        },
        "13,6": [
            {
                "type": "choices",
                "text": "\t[神秘老人,wizard]你有个炸弹，可以给我么？",
                "choices": [
                    {
                        "text": "好(炸弹-1)",
                        "icon": "bomb",
                        "need": "core.hasItem(\"bomb\")",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "item:bomb",
                                "operator": "-=",
                                "value": "1"
                            },
                            "\t[神秘老人,wizard]\b[this]感谢，拜拜~\n我在\"进，甲\"等你。",
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        4,
                                        9
                                    ]
                                ],
                                "floorId": "MT10"
                            },
                            {
                                "type": "hide",
                                "remove": true
                            },
                            {
                                "type": "choices",
                                "text": "\t[H5复刻作者]NPC提到了“我在'进，甲'等你”，\n是否直接查看\"进，甲\"的含义？",
                                "choices": [
                                    {
                                        "text": "不，我要自己解密",
                                        "action": []
                                    },
                                    {
                                        "text": "要 (H5专属选项)",
                                        "color": [
                                            192,
                                            192,
                                            192,
                                            1
                                        ],
                                        "action": [
                                            "\t[H5复刻作者]“我在'进，甲'等你。”\n进=1，甲=0。请前往第10层！"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "算了",
                        "action": []
                    }
                ]
            }
        ],
        "7,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
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
                    "type": "hide",
                    "loc": [
                        [
                            10,
                            7
                        ]
                    ]
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            12,
                            6
                        ]
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "1,13": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "13,8": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {
        "12,8": [
            "\t[奥尼斯姆,E439]\b[this]死去吧！愚蠢的勇士！",
            "\t[hero,hero]\b[hero]你是Boss么？",
            "\t[奥尼斯姆,E439]\b[this]哼，你将死无葬身之地！",
            "\t[hero,hero]\b[hero]试试吧！"
        ]
    },
    "afterBattle": {
        "12,8": [
            {
                "type": "sleep",
                "time": 500
            },
            "\t[hero,hero]\b[hero]还以为你有多强呢。"
        ],
        "6,2": [
            {
                "type": "setValue",
                "name": "flag:v140_Women",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v140_Women===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            3
                        ]
                    }
                ]
            }
        ],
        "6,4": [
            {
                "type": "setValue",
                "name": "flag:v140_Women",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v140_Women===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            3
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040,  2,  2,  2,  2,  2,  0, 34,  0,  2,  2,  2,  2,  2,20042],
    [20040,  2,  0,  0,  0,  2,450,  0,  0,  2,  0,437, 27,  2,20042],
    [20040,  2,  0,448,  0,451,  0,  0,438,430,438,  0,438,  2,20042],
    [20040,  2,  0,  0,  0,  2,450,  0,  0,  2,  0,437, 27,  2,20042],
    [20040,  2,  2,  2,  2,  2,  0,168,  0,  2,  2,  2,  2,  2,20042],
    [20040, 21,214,  0,214,  0,214,  2,  0,  2, 31, 32,445,125,20042],
    [20040, 21,  2,  2,  2,  2,  2,  2,  0,  2,445,  2,  2,  2,20042],
    [20040,214, 31, 31, 31,218,  0,  0, 33,431,  0,  0,440, 88,20042],
    [20040, 31,121,  2,  2,430,  2,  2,  2,  2,  2,430,  2,  2,20042],
    [20040,218,  2,  2, 59, 59, 59,  2, 27, 28, 21,218, 21, 27,20042],
    [20040,218, 34,  2, 58, 58, 58,  2, 27, 28,  2,218,  2, 27,20042],
    [20040, 29, 29,  2, 60, 60, 60,  2,  2,  2,  2,430,  2,  2,20042],
    [20040, 87, 29,  2,  2,  2,  2,  2, 32, 32, 32, 32, 32, 32,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [
    [428,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,428],
    [429,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,429],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [428,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,428],
    [429,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,429]
],
    "underGround": true
}