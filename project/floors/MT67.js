main.floors.MT67=
{
    "floorId": "MT67",
    "title": "主塔 67 层",
    "name": "第 67 层",
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
    "bgm": "037Dungeon03.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,13": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "5,12": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "9,12": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "9,13": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "6,7": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "8,7": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "7,1": {
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
            "data": []
        },
        "6,1": {
            "trigger": "action",
            "enable": true,
            "noPass": true,
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
                    "type": "choices",
                    "text": "\t[血瓶,I454]从以后开始，将会非常难，\n是否加HP来满足要求？\n如果你是高手，请不要拿。\n此血瓶\r[red]影响难度评级\r。",
                    "choices": [
                        {
                            "text": "我不是高手，要拿",
                            "action": []
                        },
                        {
                            "text": "我是高手，无视你",
                            "action": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "DynamicPotion",
                    "args": [
                        "potion",
                        10000
                    ]
                },
                {
                    "type": "hide",
                    "remove": true
                }
            ]
        },
        "6,12": [
            "\t[老人,man]\b[this]48层有个商店。@clue",
            {
                "type": "setBlock",
                "number": "blueShopLeft",
                "loc": [
                    [
                        2,
                        1
                    ]
                ],
                "floorId": "MT48"
            },
            {
                "type": "setBlock",
                "number": "blueShopRight",
                "loc": [
                    [
                        4,
                        1
                    ]
                ],
                "floorId": "MT48"
            },
            {
                "type": "setBlock",
                "number": "moneyShop",
                "loc": [
                    [
                        3,
                        1
                    ]
                ],
                "floorId": "MT48"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "8,12": [
            "\t[老人,man]\b[this]当要扣你的能力时，可先衰弱一下。你可以试一试。@clue",
            "\t[H5复刻作者]注：这个方法在部分难度下无效。@clue",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "7,11": [
            {
                "type": "if",
                "condition": "(switch:A===1)",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[老人,man]要给我啦？",
                        "choices": [
                            {
                                "text": "是",
                                "action": []
                            },
                            {
                                "text": "否",
                                "action": [
                                    {
                                        "type": "exit"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "item:I541",
                        "value": "0"
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                7,
                                1
                            ]
                        ]
                    },
                    {
                        "type": "hide",
                        "remove": true
                    }
                ],
                "false": [
                    "\t[老人,man]\b[this]先给你护符一用，别忘了还给我。",
                    {
                        "type": "setValue",
                        "name": "item:I541",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "1"
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "7,13": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "7,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "5,13": [
            {
                "type": "setBlock",
                "number": "star"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "5,12": [
            {
                "type": "setBlock",
                "number": "star"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "9,12": [
            {
                "type": "setBlock",
                "number": "star"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "9,13": [
            {
                "type": "setBlock",
                "number": "star"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "6,7": [
            {
                "type": "setBlock",
                "number": "whiteWall"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "8,7": [
            {
                "type": "setBlock",
                "number": "whiteWall"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040,  3,  3,  3,  3,  3,454, 87,  0,  3,  3,  3,  3,  3,20042],
    [20040,  3, 27, 27, 27,  3,522,  0,522,  3, 27, 27, 27,  3,20042],
    [20040,  3, 28, 28, 28,  3,365, 81,365,  3, 28, 28, 28,  3,20042],
    [20040,  3,  0,528,  0,  3,522,  0,522,  3,  0,528,  0,  3,20042],
    [20040,  3,  3, 81,  3,  3,365, 81,365,  3,  3, 81,  3,  3,20042],
    [20040, 33, 33, 33, 33, 33,522,  0,522, 33, 33, 33, 33, 33,20042],
    [20040,  2,  2,  2,  2,  2, 34, 81, 34,  2,  2,  2,  2,  2,20042],
    [20040, 33, 33, 33, 33, 33,522,  0,522, 33, 33, 33, 33, 33,20042],
    [20040,  1,  1, 81,  1,  1,  1,  0,  1,  1,  1, 81,  1,  1,20042],
    [20040,  1,  0,528,  0,  1,522,  0,522,  1,  0,528,  0,  1,20042],
    [20040,  1, 28, 28, 28,  4,  4,121,  4,  4, 28, 28, 28,  1,20042],
    [20040,  1, 27, 27, 27, 34,121,  0,121, 34, 27, 27, 27,  1,20042],
    [20040,  1,  1,  1,  1, 34,  0, 88,  0, 34,  1,  1,  1,  1,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  2,  0,  2,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  4,  0,  0,  0,  4,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  4,  0,  0,  0,  4,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}