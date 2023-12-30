main.floors.MT50=
{
    "floorId": "MT50",
    "title": "主塔 50 层",
    "name": "第 50 层",
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
            "type": "playBgm",
            "name": "mtboss.mp3"
        },
        {
            "type": "setBlock",
            "number": "blackKing",
            "loc": [
                [
                    6,
                    3
                ]
            ]
        },
        "\t[Black devil,blackKing]\b[this,6,3]欢迎到来！勇士。",
        "\t[hero]\b[hero]......",
        "\t[Black devil,blackKing]\b[this,6,3]来认识魔王吧！",
        {
            "type": "setBlock",
            "number": "N622",
            "loc": [
                [
                    7,
                    2
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "N511",
            "loc": [
                [
                    8,
                    3
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "N623",
            "loc": [
                [
                    7,
                    4
                ]
            ]
        },
        "\t[Black devil,blackKing]\b[this,6,3]红衣魔王、Magic Master、魔王·布鲁斯都在。",
        "\t[hero]\b[hero]你......你想干嘛！",
        {
            "type": "setBlock",
            "number": "A510",
            "loc": [
                [
                    7,
                    3
                ]
            ]
        },
        "\t[炫彩の魔王,A510]\b[this,7,3]哼哼哼........他们要听我的。",
        {
            "type": "setBlock",
            "number": "redGateKeeper",
            "loc": [
                [
                    6,
                    4
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "redGateKeeper",
            "loc": [
                [
                    8,
                    4
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "redGateKeeper",
            "loc": [
                [
                    8,
                    2
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "redGateKeeper",
            "loc": [
                [
                    6,
                    2
                ]
            ]
        },
        "\t[炫彩の魔王,A510]\b[this,7,3]你们先下去吧。",
        "\t[众魔王]是~~~~~~~~~",
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    3
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    8,
                    3
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    2
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    4
                ]
            ],
            "remove": true
        },
        "\t[炫彩の魔王,A510]\b[this,7,3]魔族是靠吸收能量而强大的，这次，就让高级士兵吸收吧！",
        "\t[hero]\b[hero]你......（惨了！@#￥%……&*）",
        {
            "type": "move",
            "loc": [
                6,
                2
            ],
            "time": 500,
            "keep": true,
            "steps": [
                "up:1",
                "right:4"
            ]
        },
        {
            "type": "animate",
            "name": "A08",
            "loc": "hero"
        },
        {
            "type": "function",
            "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.atk = Math.max(0, hero.atk - 11);\n\thero.def = Math.max(0, hero.def - 11);\n});\ncore.updateStatusBar(true);\n}"
        },
        {
            "type": "move",
            "loc": [
                10,
                1
            ],
            "time": 300,
            "keep": true,
            "steps": [
                "left:4",
                "down:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                8,
                2
            ],
            "time": 300,
            "keep": true,
            "steps": [
                "up:1",
                "right:2"
            ]
        },
        {
            "type": "animate",
            "name": "A08",
            "loc": "hero"
        },
        {
            "type": "function",
            "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.atk = Math.max(0, hero.atk - 11);\n\thero.def = Math.max(0, hero.def - 11);\n});\ncore.updateStatusBar(true);\n}"
        },
        {
            "type": "move",
            "loc": [
                10,
                1
            ],
            "time": 300,
            "keep": true,
            "steps": [
                "left:2",
                "down:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                6,
                4
            ],
            "time": 300,
            "keep": true,
            "steps": [
                "down:1",
                "right:5",
                "up:3"
            ]
        },
        {
            "type": "move",
            "loc": [
                8,
                4
            ],
            "time": 300,
            "keep": true,
            "steps": [
                "right:2",
                "up:3"
            ]
        },
        {
            "type": "animate",
            "name": "A06",
            "loc": "hero"
        },
        {
            "type": "function",
            "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.atk = Math.max(0, hero.atk - 44);\n\thero.def = Math.max(0, hero.def - 44);\n});\ncore.updateStatusBar(true);\n}"
        },
        "\t[炫彩の魔王,A510]\b[this,7,3]够了，走吧！",
        "\t[众高级卫兵]是。",
        "\t[炫彩の魔王,A510]\b[this,7,3]你有同伴吧,他也被吸了能力去了,哈哈哈哈",
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    2
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    10,
                    1
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    8,
                    2
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    11,
                    2
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    3
                ]
            ],
            "remove": true
        },
        {
            "type": "setValue",
            "name": "flag:s186_F49NoSale",
            "value": "1"
        },
        "\t[hero]\b[hero]受不了......",
        "\t[炫彩の魔王,A510]\b[this,7,3]打入地牢！",
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 500,
            "keep": true
        },
        "\t[hero]扑通......又被揍了......",
        "\t[捷克,N512]喂！醒醒！",
        {
            "type": "changeFloor",
            "floorId": "prison2",
            "loc": [
                7,
                0
            ],
            "direction": "down"
        },
        {
            "type": "setCurtain",
            "time": 500
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "13,1": [
            {
                "type": "function",
                "function": "function(){\ncore.setFlag(\"DryVisitNext\", 1);\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "MT49",
                "loc": [
                    13,
                    1
                ]
            }
        ],
        "7,3": {
            "trigger": null,
            "enable": true,
            "noPass": null,
            "displayDamage": false,
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
        "7,2": {
            "trigger": null,
            "enable": true,
            "noPass": null,
            "displayDamage": false,
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
        "6,3": {
            "trigger": null,
            "enable": true,
            "noPass": null,
            "displayDamage": false,
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
        "8,3": {
            "trigger": null,
            "enable": true,
            "noPass": null,
            "displayDamage": false,
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
        "7,4": {
            "trigger": null,
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        }
    },
    "changeFloor": {
        "11,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,13": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "13,3": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "13,5": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "13,7": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "13,9": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "13,10": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "11,8": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "11,10": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "11,12": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "12,12": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "10,13": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "8,13": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "6,13": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "4,13": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "3,12": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "3,10": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "5,11": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "6,11": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "8,11": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "9,11": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "7,10": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "6,9": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "8,9": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "9,8": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "5,8": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
                ]
            }
        ],
        "3,8": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2000
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
    [20040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 88,  1,20255,20042],
    [20040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,508,20042],
    [20040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,454,20042],
    [20040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,508,20042],
    [20040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,454,20042],
    [20040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,508,20042],
    [20040,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,454,20042],
    [20040,  0,  1,454,508,454,  2,  2,  2,454,  3,454,  3,508,20042],
    [20040,  0,  1,508,  2,508,454,508,454,508,  2,508,508,454,20042],
    [20040,  0,  1,454,  2,  2,  2,454,  2,  2,  2,454,  3,454,20042],
    [20040,  0,  1,508,  2,454,454,508,454,454,  2,508,  3,  3,20042],
    [20040,  0,  1,454,508,  3,  2,  2,  2,  3,508,454,454,  3,20042],
    [20040, 87,  1,  3,454,508,454,508,454,508,454,  3,  3,  3,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}