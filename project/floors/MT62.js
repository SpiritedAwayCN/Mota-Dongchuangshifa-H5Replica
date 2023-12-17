main.floors.MT62=
{
    "floorId": "MT62",
    "title": "主塔 62 层",
    "name": "第 62 层",
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
    "bgm": "040Dungeon06.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "4,2": {
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
        "5,2": {
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
        "2,7": {
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
        "3,1": [
            "\t[老人,man]\b[this]我旁边的墙可凿开。",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "1,1": [
            {
                "type": "changeFloor",
                "floorId": "SuperSpace1",
                "loc": [
                    7,
                    12
                ]
            }
        ]
    },
    "changeFloor": {
        "7,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "7,13": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "4,2": [
            {
                "type": "setBlock",
                "number": "X20006"
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
        "5,2": [
            {
                "type": "setBlock",
                "number": "X20006"
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
        "2,7": [
            {
                "type": "setBlock",
                "number": "X20006"
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
        "10,2": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    3,
                    3,
                    0
                ]
            }
        ],
        "11,2": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    3,
                    3,
                    0
                ]
            }
        ],
        "12,2": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    3,
                    3,
                    0
                ]
            }
        ],
        "1,3": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    3,
                    3,
                    0
                ]
            }
        ],
        "2,3": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    3,
                    3,
                    0
                ]
            }
        ],
        "3,3": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    3,
                    3,
                    0
                ]
            }
        ],
        "6,4": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    3,
                    3,
                    0
                ]
            }
        ],
        "8,8": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    3,
                    3,
                    0
                ]
            }
        ],
        "10,3": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    4000
                ]
            }
        ],
        "11,3": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    4000
                ]
            }
        ],
        "12,3": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    4000
                ]
            }
        ],
        "7,8": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    4000
                ]
            }
        ],
        "4,4": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    4000
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
    [20040, 89,  1,121,  0,  0,  0, 88,  0,20006,20006,20006,20006,20006,20042],
    [20040,20006,20006,20006, 21, 21,20006,20006,515,20006,455,455,455,20006,20042],
    [20040,455,455,455,513,513,513,515,515,20006,454,454,454,20006,20042],
    [20040,20006,20006,20006,454,20006,455,20006,515,20006,517,519,517,20006,20042],
    [20040,518,517,519,  0,20006,20006,20006,514,20006,20006, 82,20006,20006,20042],
    [20040, 27,20006,20006,241,  0,240,240,  0,240,240,  0, 21, 21,20042],
    [20040,520, 31, 33,241,20006,20006,20006,514,20006, 81,20006,20006,20006,20042],
    [20040, 28,20006,20006,241,  0,20006,454,455,20006,516,516,  0, 21,20042],
    [20040,518,517,519,  0,20006,20006,20006,20006,20006,20006,20006,513,20006,20042],
    [20040,20006,20006,  0,  0,516,  0,240,240,  0,240,240,  0,20006,20042],
    [20040, 27,20006, 31,20006,20006,516,20006,20006,20006, 29,20006,513,20006,20042],
    [20040, 28,20006,20006,20006,516,  0,516, 81,20006,20006,20006,  0,20006,20042],
    [20040,517,518,519, 81,  0,20006, 87,  0, 22,513,  0,513, 31,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,20006,20006,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,20006,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}