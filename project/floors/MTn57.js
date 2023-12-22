main.floors.MTn57=
{
    "floorId": "MTn57",
    "title": "主塔 -57 层",
    "name": "第 -57 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "xxmt0F.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,13": [
            "\t[老人,man]\b[this]这是一个小boss，我想你一定能打败它的吧？哈哈哈哈.....@clue",
            {
                "type": "if",
                "condition": "(flag:VerboseHint===1)",
                "true": [
                    "\t[H5复刻作者]击败本层boss后，-32/-34F商店性价比将大幅降低，且魔塔城堡将不再可进入（其中的商店也将失效），请合理规划路线！@clue",
                    "\t[H5复刻作者]进入-58F时，会强制将所有角色的生命设为固定值，请合理规划资源！@clue"
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "1,5": {
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
                "\t[老人,man]\b[this]这些血瓶晚点再拿。@clue",
                {
                    "type": "hide",
                    "remove": true
                }
            ]
        },
        "13,5": {
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
                "\t[老人,man]\b[this]这些血瓶晚点再拿。@clue",
                {
                    "type": "hide",
                    "remove": true
                }
            ]
        }
    },
    "changeFloor": {
        "7,13": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "7,1": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {
        "7,2": [
            "\t[骷髅¤魔王,skeletonKing]\b[this]哦，这就是那个宣称要拯救国家的勇士啊，哈哈哈哈......",
            "\t[hero]\b[hero]你...........",
            "\t[骷髅¤魔王,skeletonKing]\b[this]你虽然能打败我，不过你是打不败我们的魔王的。",
            "\t[hero]\b[hero]为什么？为什么我不会打败？",
            "\t[骷髅¤魔王,skeletonKing]\b[this]你连魔王的忠实守卫火鬼都打不过，何况我们的魔王呢？",
            "\t[hero]\b[hero]可恶......",
            "\t[骷髅¤魔王,skeletonKing]\b[this]你的能力至少是一个3等魔王，何乐而不为呢？",
            {
                "type": "choices",
                "text": "\t[hero]这......",
                "choices": [
                    {
                        "text": "好，我听懂你的意思。",
                        "action": [
                            {
                                "type": "lose",
                                "reason": "结局7"
                            }
                        ]
                    },
                    {
                        "text": "不可能的，你妄想！",
                        "action": []
                    },
                    {
                        "text": "避开判负选项(H5专属)",
                        "color": [
                            192,
                            192,
                            192,
                            1
                        ],
                        "action": []
                    }
                ]
            },
            "\t[骷髅¤魔王,skeletonKing]\b[this]自不量力！高级领域！",
            {
                "type": "setValue",
                "name": "status:hp",
                "operator": "-=",
                "value": "4000"
            },
            {
                "type": "animate",
                "name": "A03",
                "loc": "hero"
            },
            "\t[骷髅¤魔王,skeletonKing]\b[this]再见！！ "
        ]
    },
    "afterBattle": {
        "7,2": [
            "\t[骷髅¤魔王,skeletonKing]\b[this]可...可...可...可恶，你...你不得好死 ",
            "\t[hero]\b[hero]9死1生，呼.....",
            {
                "type": "setValue",
                "name": "flag:s110_Fm57boss",
                "value": "1"
            },
            {
                "type": "openDoor",
                "loc": [
                    1,
                    6
                ],
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    13,
                    6
                ],
                "async": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        1,
                        5
                    ]
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        13,
                        5
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowPotion",
                "loc": [
                    [
                        2,
                        5
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowPotion",
                "loc": [
                    [
                        2,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowPotion",
                "loc": [
                    [
                        1,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowPotion",
                "loc": [
                    [
                        1,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowPotion",
                "loc": [
                    [
                        2,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowPotion",
                "loc": [
                    [
                        2,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowPotion",
                "loc": [
                    [
                        1,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowPotion",
                "loc": [
                    [
                        12,
                        5
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowPotion",
                "loc": [
                    [
                        13,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowPotion",
                "loc": [
                    [
                        12,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowPotion",
                "loc": [
                    [
                        12,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowPotion",
                "loc": [
                    [
                        13,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowPotion",
                "loc": [
                    [
                        12,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowPotion",
                "loc": [
                    [
                        13,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "redGem",
                "loc": [
                    [
                        1,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "redGem",
                "loc": [
                    [
                        2,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "redGem",
                "loc": [
                    [
                        3,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "redGem",
                "loc": [
                    [
                        4,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "redGem",
                "loc": [
                    [
                        5,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "blueGem",
                "loc": [
                    [
                        13,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "blueGem",
                "loc": [
                    [
                        12,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "blueGem",
                "loc": [
                    [
                        11,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "blueGem",
                "loc": [
                    [
                        10,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "blueGem",
                "loc": [
                    [
                        9,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "X30187",
                "loc": [
                    [
                        3,
                        7
                    ]
                ],
                "floorId": "MTCastle0"
            },
            {
                "type": "setBlock",
                "number": "X30187",
                "loc": [
                    [
                        4,
                        7
                    ]
                ],
                "floorId": "MTCastle0"
            },
            {
                "type": "disableShop",
                "id": "CastleRatioShop"
            },
            {
                "type": "waitAsync"
            }
        ],
        "6,5": [
            {
                "type": "setValue",
                "name": "flag:Fm57_Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:Fm57_Door===2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            3
                        ]
                    }
                ]
            }
        ],
        "8,5": [
            {
                "type": "setValue",
                "name": "flag:Fm57_Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:Fm57_Door===2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            3
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {
        "6,10": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    8000
                ]
            }
        ],
        "8,10": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    8000
                ]
            }
        ],
        "6,3": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    16000
                ]
            }
        ],
        "8,3": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    16000
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
    [20040,  0,  0,  0,  0,  0,421, 88,421,  0,  0,  0,  0,  0,20042],
    [20040,  0,  0,421,421,421,421,238,421,421,421,421,  0,  0,20042],
    [20040,  0,  0,421,572,  0,454, 85,454,  0,572,421,  0,  0,20042],
    [20040,  0,  0,421,572,421,432,421,432,421,572,421,  0,  0,20042],
    [20040,121,  0,421,572,421,575,421,575,421,572,421,  0,121,20042],
    [20040, 85,421,421,573,421,421,421,421,421,573,421,421, 85,20042],
    [20040, 27,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 28,20042],
    [20040, 25,  0,  0, 25,  1,  0,  0,  0,  1, 25,  0,  0, 25,20042],
    [20040,  1,  1,574,  1,  1,  1,571,  1,  1,  1,574,  1,  1,20042],
    [20040,  1, 27, 27, 27,  1,454,  0,454,  1, 27, 27, 27,  1,20042],
    [20040,  1, 28, 28, 28,  1,  1,571,  1,  1, 28, 28, 28,  1,20042],
    [20040,  1, 33, 33, 33,  1,  0,  0,  0,  1, 33, 33, 33,  1,20042],
    [20040,  1,  1,  1,  1,  1,121, 87,  0,  1,  1,  1,  1,  1,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "underGround": true,
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
]
}