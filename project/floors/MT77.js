main.floors.MT77=
{
    "floorId": "MT77",
    "title": "主塔 77 层",
    "name": "第 77 层",
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
    "bgm": "060Slow03.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "9,6": {
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
        "10,7": {
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
        "9,9": {
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
        "11,9": {
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
        "7,8": {
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
        "11,11": {
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
        "7,12": {
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
        "5,10": [
            {
                "type": "openDoor"
            }
        ],
        "7,10": [
            {
                "type": "openDoor"
            }
        ],
        "2,8": [
            {
                "type": "openDoor"
            }
        ],
        "1,6": [
            {
                "type": "openDoor"
            }
        ],
        "1,2": [
            "\t[老人,man]\b[this]在这个时候，加攻击比较好，不过你要确定能防杀暗黑蝙蝠。@clue",
            "\t[老人,man]\b[this]防杀指勇士DEF≥敌人ATK。@clue",
            "\t[老人,man]\b[this]当你的生命无法再攻击怪物,周围的往往就是虚墙。@clue",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "13,7": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,7": [
            {
                "type": "setBlock",
                "number": "greenPotion",
                "loc": [
                    [
                        6,
                        7
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "greenPotion",
                "loc": [
                    [
                        4,
                        7
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "greenPotion",
                "loc": [
                    [
                        4,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "greenPotion",
                "loc": [
                    [
                        6,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowGem",
                "loc": [
                    [
                        5,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowGem",
                "loc": [
                    [
                        5,
                        5
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "redGem",
                "loc": [
                    [
                        4,
                        5
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "redGem",
                "loc": [
                    [
                        6,
                        5
                    ]
                ]
            }
        ]
    },
    "afterGetItem": {
        "9,6": [
            {
                "type": "setBlock",
                "number": "yellowWall"
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
        "10,7": [
            {
                "type": "setBlock",
                "number": "yellowWall"
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
        "9,9": [
            {
                "type": "setBlock",
                "number": "yellowWall"
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
        "11,9": [
            {
                "type": "setBlock",
                "number": "yellowWall"
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
        "7,8": [
            {
                "type": "setBlock",
                "number": "yellowWall"
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
        "11,11": [
            {
                "type": "setBlock",
                "number": "yellowWall"
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
        "7,12": [
            {
                "type": "setBlock",
                "number": "yellowWall"
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
        "13,2": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    10000
                ]
            }
        ],
        "11,5": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    6,
                    6,
                    2,
                    12000
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
    [20040, 87,  0,535,535,  0,535,535,  0,534,  1,  1,  1,  1,20042],
    [20040,121,  0,  1,  1,  1,  1,  1,  1,  0,535,536,535,454,20042],
    [20040,  0, 28,  1, 27, 27, 28, 28,537,  0,  1,536,  1, 25,20042],
    [20040,  0,  1,  1,  1,  1,  1,  1,  0,  1,  1,537,  1,  1,20042],
    [20040,531,  0,  1,  0,  0,  0,  1,529,  1,537,455,537,  1,20042],
    [20040,  1,531,  1,  0,  0,  0,  1,529, 33,  1,537,  1,  1,20042],
    [20040,531,  0,  1,  0,257,  0,  1,  0,  0, 33,  1,  1, 88,20042],
    [20040, 27,  1,  1,  1, 84,  1, 33,  0,529,529,  0,533,  0,20042],
    [20040,531,  0,531,  0,  0,534,534,  0, 33,  1, 33,  1,533,20042],
    [20040,  1,  1,  1,  1,  1,  0,  1,  0,531,531,  0,  0,  0,20042],
    [20040, 27, 28,538,531, 81,  0,  1,  1,  1, 27, 33,  1,530,20042],
    [20040,  1,  1,  1,  1,  1,  0, 33,  1,  1,  1,  1,  1,530,20042],
    [20040, 27, 28,538,531, 81,  0,530,530,530, 27, 28, 28,530,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  1,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}