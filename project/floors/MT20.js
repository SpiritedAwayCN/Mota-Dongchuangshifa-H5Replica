main.floors.MT20=
{
    "floorId": "MT20",
    "title": "主塔 20 层",
    "name": "第 20 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "mtboss.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "13,13": {
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
        "7,9": [
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    7,
                    10
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    7,
                    6
                ]
            },
            {
                "type": "waitAsync"
            },
            "\t[吸血鬼,vampire]\b[this,7,1]你终于来了，我奉魔王之命，在这打败你！",
            {
                "type": "setBlock",
                "number": "skeletonWarrior",
                "loc": [
                    [
                        6,
                        9
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "skeletonWarrior",
                "loc": [
                    [
                        8,
                        9
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "skeletonWarrior",
                "loc": [
                    [
                        6,
                        7
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "skeletonWarrior",
                "loc": [
                    [
                        8,
                        7
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "slimelord",
                "loc": [
                    [
                        4,
                        8
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "slimelord",
                "loc": [
                    [
                        5,
                        8
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "slimelord",
                "loc": [
                    [
                        9,
                        8
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "slimelord",
                "loc": [
                    [
                        10,
                        8
                    ]
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "7,5": [
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    7,
                    2
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    7,
                    6
                ]
            },
            {
                "type": "waitAsync"
            },
            "\t[吸血鬼,vampire]\b[this,7,1]你竟然逃了出去？！蝙蝠，上！",
            {
                "type": "setBlock",
                "number": "bigBat",
                "loc": [
                    [
                        6,
                        5
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "bigBat",
                "loc": [
                    [
                        8,
                        5
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "bigBat",
                "loc": [
                    [
                        6,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "bigBat",
                "loc": [
                    [
                        8,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "bigBat",
                "loc": [
                    [
                        4,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "bigBat",
                "loc": [
                    [
                        5,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "bigBat",
                "loc": [
                    [
                        9,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "bigBat",
                "loc": [
                    [
                        10,
                        4
                    ]
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "2,13": [
            "\t[老人,man]\b[this]与吸血鬼PK后，怪物先攻2次。@clue",
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
        "8,13": [
            "\t[老人,man]\b[this]打败头目及守卫最好一次必杀或让它们无法伤害你。@clue",
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
        ]
    },
    "changeFloor": {
        "7,13": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "13,13": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {
        "7,1": [
            "\t[吸血鬼,vampire]\b[this]很好，你的确很强，你来的目的是什么？",
            "\t[hero]\b[hero]破灭你们的计划！",
            "\t[吸血鬼,vampire]\b[this]哈哈哈哈......那个国家派来了一个军团都没打过我们，何况你？哈哈哈哈......",
            "\t[hero]\b[hero]什么？......一个军团，我？他们明明是派勇士来啊！不会的，你在骗我！",
            "\t[吸血鬼,vampire]\b[this]哼，一个那么强大的国家会派一个人么？他们只不过认为你也是怪物而已！",
            {
                "type": "choices",
                "text": "\t[hero]不，不...不可能！",
                "choices": [
                    {
                        "text": "我要杀了你！",
                        "action": [
                            "\t[吸血鬼,vampire]\b[this]勇气可嘉，不过你要相信你的身份。"
                        ]
                    },
                    {
                        "text": "我要回去看看！",
                        "action": [
                            {
                                "type": "insert",
                                "name": "结局处理",
                                "args": [
                                    "结局4"
                                ]
                            }
                        ]
                    },
                    {
                        "text": "避开判负选项(H5专属)",
                        "color": [
                            192,
                            192,
                            192,
                            1
                        ],
                        "action": [
                            "\t[hero]\b[hero]我要杀了你！",
                            "\t[吸血鬼,vampire]\b[this]勇气可嘉，不过你要相信你的身份。"
                        ]
                    }
                ]
            }
        ]
    },
    "afterBattle": {
        "6,9": [
            {
                "type": "setValue",
                "name": "flag:v134_20FWave1",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "if",
                "condition": "(flag:v134_20FWave1===8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ]
                    }
                ]
            }
        ],
        "6,7": [
            {
                "type": "setValue",
                "name": "flag:v134_20FWave1",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "if",
                "condition": "(flag:v134_20FWave1===8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ]
                    }
                ]
            }
        ],
        "8,7": [
            {
                "type": "setValue",
                "name": "flag:v134_20FWave1",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "if",
                "condition": "(flag:v134_20FWave1===8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ]
                    }
                ]
            }
        ],
        "8,9": [
            {
                "type": "setValue",
                "name": "flag:v134_20FWave1",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "if",
                "condition": "(flag:v134_20FWave1===8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ]
                    }
                ]
            }
        ],
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:v134_20FWave1",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "if",
                "condition": "(flag:v134_20FWave1===8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ]
                    }
                ]
            }
        ],
        "4,8": [
            {
                "type": "setValue",
                "name": "flag:v134_20FWave1",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "if",
                "condition": "flag:v134_20FWave1===8",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ]
                    }
                ]
            }
        ],
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:v134_20FWave1",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "if",
                "condition": "(flag:v134_20FWave1===8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ]
                    }
                ]
            }
        ],
        "10,8": [
            {
                "type": "setValue",
                "name": "flag:v134_20FWave1",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "if",
                "condition": "(flag:v134_20FWave1===8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ]
                    }
                ]
            }
        ],
        "6,5": [
            {
                "type": "setValue",
                "name": "flag:v135_20FWave2",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "if",
                "condition": "(flag:v135_20FWave2===8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            2
                        ]
                    }
                ]
            }
        ],
        "6,3": [
            {
                "type": "setValue",
                "name": "flag:v135_20FWave2",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "if",
                "condition": "(flag:v135_20FWave2===8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            2
                        ]
                    }
                ]
            }
        ],
        "8,3": [
            {
                "type": "setValue",
                "name": "flag:v135_20FWave2",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "if",
                "condition": "(flag:v135_20FWave2===8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            2
                        ]
                    }
                ]
            }
        ],
        "8,5": [
            {
                "type": "setValue",
                "name": "flag:v135_20FWave2",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "if",
                "condition": "(flag:v135_20FWave2===8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            2
                        ]
                    }
                ]
            }
        ],
        "9,4": [
            {
                "type": "setValue",
                "name": "flag:v135_20FWave2",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "if",
                "condition": "(flag:v135_20FWave2===8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            2
                        ]
                    }
                ]
            }
        ],
        "10,4": [
            {
                "type": "setValue",
                "name": "flag:v135_20FWave2",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "if",
                "condition": "(flag:v135_20FWave2===8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            2
                        ]
                    }
                ]
            }
        ],
        "4,4": [
            {
                "type": "setValue",
                "name": "flag:v135_20FWave2",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "if",
                "condition": "(flag:v135_20FWave2===8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            2
                        ]
                    }
                ]
            }
        ],
        "5,4": [
            {
                "type": "setValue",
                "name": "flag:v135_20FWave2",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "if",
                "condition": "(flag:v135_20FWave2===8)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            2
                        ]
                    }
                ]
            }
        ],
        "7,1": [
            {
                "type": "show",
                "loc": [
                    [
                        13,
                        13
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
                        9,
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
                        12,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "redPotion",
                "loc": [
                    [
                        5,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "redPotion",
                "loc": [
                    [
                        9,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "bluePotion",
                "loc": [
                    [
                        4,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "bluePotion",
                "loc": [
                    [
                        10,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowPotion",
                "loc": [
                    [
                        3,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowPotion",
                "loc": [
                    [
                        11,
                        2
                    ]
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    7,
                    6
                ],
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    7,
                    10
                ]
            },
            {
                "type": "function",
                "function": "function(){\ncore.values.firstAttack = 2\n}"
            },
            {
                "type": "waitAsync"
            },
            "\t[系统提示]击败吸血鬼后，所有怪物的先攻次数变为2次。"
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040,  2,  0,  0,  0,  0,  0,208,  0,  0,  0,  0,  0,  2,20042],
    [20040,  2,  2,  0,  0,  0,  2,  0,  2,  0,  0,  0,  2,  2,20042],
    [20040, 28,  2,  2,  2,  2,  0,  0,  0,  2,  2,  2,  2, 28,20042],
    [20040,387,  0,  2,  0,  0,  0,  0,  0,  0,  0,  2,  0,387,20042],
    [20040,  0,  0,  2,  2,  2,  0,  0,  0,  2,  2,  2,  0,  0,20042],
    [20040,387,  0,387, 27,  2,  2,  0,  2,  2, 27,387,  0,387,20042],
    [20040, 81,  2,  2,  2,  2,  0,  0,  0,  2,  2,  2,  2, 81,20042],
    [20040, 21, 21,  2,  0,  0,  0,  0,  0,  0,  0,  2, 21, 21,20042],
    [20040, 81,  2,  2,  2,  2,  0,  0,  0,  2,  2,  2,  2, 81,20042],
    [20040,210,  0,  2, 34,  2,  2,  0,  2,  2, 34,  2,  0,210,20042],
    [20040,  0,  0, 81,204,  2,  0,  0,  0,  2,204, 81,  0,  0,20042],
    [20040,  0,  0,  2,  2,  2,  0,  0,  0,  2,  2,  2,  0,  0,20042],
    [20040,  2,121,  0,  0,  0,  0, 88,121,  0,  0,  0,  0, 87,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}