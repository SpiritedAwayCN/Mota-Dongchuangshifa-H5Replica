main.floors.MT8=
{
    "floorId": "MT8",
    "title": "主塔 8 层",
    "name": "第 8 层",
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
        "8,6": {
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
                    "type": "setValue",
                    "name": "temp:curPrice",
                    "value": "10*(flag:v13_TSWshop*flag:v13_TSWshop+flag:v13_TSWshop+2)+flag:TSWshopOffset"
                },
                {
                    "type": "choices",
                    "text": "\t[商店,moneyShop]花${temp:curPrice}枚金币，您可以：",
                    "choices": [
                        {
                            "text": "加2攻击",
                            "icon": "redGem",
                            "need": "status:money>=temp:curPrice",
                            "action": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "operator": "-=",
                                    "value": "temp:curPrice"
                                },
                                {
                                    "type": "setValue",
                                    "name": "flag:v13_TSWshop",
                                    "operator": "+=",
                                    "value": "1"
                                },
                                {
                                    "type": "setValue",
                                    "name": "status:atk",
                                    "operator": "+=",
                                    "value": "1"
                                }
                            ]
                        },
                        {
                            "text": "加4防御",
                            "icon": "blueGem",
                            "need": "status:money>=temp:curPrice",
                            "action": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "operator": "-=",
                                    "value": "temp:curPrice"
                                },
                                {
                                    "type": "setValue",
                                    "name": "flag:v13_TSWshop",
                                    "operator": "+=",
                                    "value": "1"
                                },
                                {
                                    "type": "setValue",
                                    "name": "status:def",
                                    "operator": "+=",
                                    "value": "2"
                                }
                            ]
                        },
                        {
                            "text": "加400生命",
                            "icon": "redPotion",
                            "need": "status:money>=temp:curPrice",
                            "action": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "operator": "-=",
                                    "value": "temp:curPrice"
                                },
                                {
                                    "type": "setValue",
                                    "name": "flag:v13_TSWshop",
                                    "operator": "+=",
                                    "value": "1"
                                },
                                {
                                    "type": "setValue",
                                    "name": "status:hp",
                                    "operator": "+=",
                                    "value": "400"
                                }
                            ]
                        },
                        {
                            "text": "离开",
                            "condition": "!flag:VerboseHint",
                            "action": []
                        },
                        {
                            "text": "离开(推荐选择)",
                            "condition": "flag:VerboseHint",
                            "action": []
                        }
                    ]
                },
                "\t[商店,moneyShop]\b[this]感谢惠顾，35层商店打开！",
                {
                    "type": "if",
                    "condition": "(switch:A!==1)",
                    "true": [
                        {
                            "type": "show",
                            "loc": [
                                [
                                    3,
                                    7
                                ]
                            ],
                            "floorId": "MT35"
                        },
                        {
                            "type": "setBlock",
                            "number": "blueShopLeft",
                            "loc": [
                                [
                                    2,
                                    7
                                ]
                            ],
                            "floorId": "MT35"
                        },
                        {
                            "type": "setBlock",
                            "number": "blueShopRight",
                            "loc": [
                                [
                                    4,
                                    7
                                ]
                            ],
                            "floorId": "MT35"
                        }
                    ]
                },
                {
                    "type": "setValue",
                    "name": "switch:A",
                    "value": "1"
                }
            ]
        },
        "8,7": [
            "\t[老人,man]\b[this]无论怎样，都会严格按正向和箭头方向前进。",
            "\t[老人,man]\b[this]在踩转换正向方向这个功能上，踩一下转换箭头，传送出去，再回来就有区别了。",
            "\t[老人,man]\b[this]如果不懂，请到箭头空间，传送带在0层",
            {
                "type": "setValue",
                "name": "flag:v116_Chat",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "comment",
                "text": "TODO-箭头空间"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "4,7": [
            {
                "type": "switch",
                "condition": "flag:m8FLog",
                "caseList": [
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:lv>1)",
                                "true": [
                                    "\t[老人,man]\b[this]你升级了！",
                                    "\t[老人,man]\b[this]赋予你魔防！",
                                    {
                                        "type": "comment",
                                        "text": "TODO-动画"
                                    },
                                    {
                                        "type": "function",
                                        "function": "function(){\ncore.values.isMAGValid=true;\n}"
                                    },
                                    {
                                        "type": "hide",
                                        "remove": true
                                    }
                                ],
                                "false": [
                                    "\t[老人,man]\b[this]快去找吧\n(提示：通过黄宝石升到2级即可)"
                                ]
                            }
                        ]
                    },
                    {
                        "case": "1",
                        "action": [
                            "\t[老人,man]\b[this]魔防可有效的防止，可是......",
                            "\t[hero,hero]\b[hero]怎么了？",
                            "\t[老人,man]\b[this]这样吧，我对魔防也有点了解，当你升级时，来找我，我试试看，能不能帮你恢复魔防使用权！",
                            "\t[hero,hero]\b[hero]我尽力吧！",
                            {
                                "type": "setValue",
                                "name": "flag:m8FLog",
                                "value": "2",
                                "norefresh": true
                            }
                        ]
                    },
                    {
                        "case": "default",
                        "action": [
                            "\t[老人,man]\b[this]魔攻怪物的攻击无视角色防御*1。",
                            {
                                "type": "setValue",
                                "name": "flag:v116_Chat",
                                "operator": "+=",
                                "value": "1",
                                "norefresh": true
                            },
                            {
                                "type": "setValue",
                                "name": "flag:m8FLog",
                                "value": "1",
                                "norefresh": true
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "9,7": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "5,9": {
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
    [20040,  1, 31,217, 31, 31,217, 36,  1, 27, 27, 27, 27,  1,20042],
    [20040,  1,  1,161,  1,  1,162,  1,  1,  1,  1, 81,  1,  1,20042],
    [20040,  1,  1,209,  1,  1,209,  0,  0,205,  0,210,  0,217,20042],
    [20040,  1, 33, 33,203,382,  0,  0,  0,  0,  1,  1,  1,217,20042],
    [20040,  1, 82,  1,  1,381,  1,  1,  1,205,  1, 28,  1,217,20042],
    [20040,  1, 82,  1,  0,379,377,  0,131,  0,  1, 27,  1,  0,20042],
    [20040,  1, 34,  1,121,  1,  0,  0,121, 88,  1,210, 81,210,20042],
    [20040,  1,209,216,  1,  1,217,  1,  1,  1,  1,  1,  1,  1,20042],
    [20040,  1,216,209,205, 87,217,  0,  0,  1, 33,210,217,  1,20042],
    [20040,  1,  1,  1,  0,  0,217,  1,217,  1,  1,  1, 81,  1,20042],
    [20040,  0,203,203,  0,  1,  1,  1,216, 81, 28,216, 27,  1,20042],
    [20040, 81,  1,  1,  1,  1, 27,  1,  0,  1, 28,  1, 27,  1,20042],
    [20040,209,  0,209,  0,209, 28, 81,  0,  1,  1,  1,  1,  1,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}