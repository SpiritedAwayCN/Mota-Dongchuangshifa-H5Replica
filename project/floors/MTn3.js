main.floors.MTn3=
{
    "floorId": "MTn3",
    "title": "主塔 -3 层",
    "name": "第 -3 层",
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
    "weather": null,
    "firstArrive": [
        {
            "type": "show",
            "loc": [
                [
                    2,
                    2
                ]
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    1,
                    1
                ]
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    3,
                    1
                ]
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    2,
                    1
                ]
            ]
        },
        "\t[魔王-布鲁斯,blackKing]\b[this,2,1]哈哈哈哈，恭喜你，${core.status.hero.name}，能来到这里，不过，你将死在我的手下！",
        {
            "type": "move",
            "loc": [
                2,
                2
            ],
            "time": 500,
            "keep": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                2,
                1
            ],
            "time": 500,
            "keep": true,
            "steps": [
                "down:12"
            ]
        },
        "\t[魔王-布鲁斯,blackKing]\b[this,2,13]再见，勇士。一路顺风！",
        {
            "type": "animate",
            "name": "A12",
            "loc": "hero"
        },
        "\t[hero]\b[hero]啊......",
        {
            "type": "hide",
            "loc": [
                [
                    16,
                    15
                ]
            ],
            "floorId": "MTWorld"
        },
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
        {
            "type": "setValue",
            "name": "item:poisonWine",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:weakWine",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:curseWine",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:superWine",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "status:money",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "status:exp",
            "value": "600"
        },
        {
            "type": "hide",
            "loc": [
                [
                    2,
                    1
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    2,
                    2
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    1,
                    1
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    3,
                    1
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    1,
                    2
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    2,
                    13
                ]
            ],
            "remove": true
        },
        {
            "type": "setValue",
            "name": "item:yellowKey",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:blueKey",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:redKey",
            "value": "0"
        },
        "\t[hero]到天堂了么？......还没有......",
        "\t[hero]......能力好像有点问题......",
        {
            "type": "switch",
            "condition": "flag:hard",
            "caseList": [
                {
                    "case": "2",
                    "action": [
                        {
                            "type": "setValue",
                            "name": "status:hp",
                            "value": "2500"
                        },
                        {
                            "type": "setValue",
                            "name": "status:atk",
                            "value": "298"
                        },
                        {
                            "type": "setValue",
                            "name": "status:def",
                            "value": "223"
                        }
                    ]
                },
                {
                    "case": "3",
                    "action": [
                        {
                            "type": "setValue",
                            "name": "status:hp",
                            "value": "2250"
                        },
                        {
                            "type": "setValue",
                            "name": "status:atk",
                            "value": "296"
                        },
                        {
                            "type": "setValue",
                            "name": "status:def",
                            "value": "220"
                        }
                    ]
                },
                {
                    "case": "default",
                    "action": [
                        {
                            "type": "setValue",
                            "name": "status:hp",
                            "value": "3000"
                        },
                        {
                            "type": "setValue",
                            "name": "status:atk",
                            "value": "300"
                        },
                        {
                            "type": "setValue",
                            "name": "status:def",
                            "value": "225"
                        }
                    ]
                }
            ]
        },
        {
            "type": "changeFloor",
            "floorId": "prison",
            "loc": [
                2,
                7
            ]
        },
        {
            "type": "setCurtain",
            "time": 500
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "2,1": {
            "trigger": "action",
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
        "3,1": {
            "trigger": "action",
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
        "2,2": {
            "trigger": "action",
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
        "1,1": {
            "trigger": "action",
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
        "11,2": [
            {
                "type": "setValue",
                "name": "flag:Fm3ShopVisited",
                "value": "1"
            },
            {
                "type": "openShop",
                "id": "Fm3m4GoldShop"
            },
            {
                "type": "insert",
                "name": "OtherShops",
                "args": [
                    "MTm3"
                ]
            }
        ],
        "5,13": [
            "\t[老人,man]\b[this]爆破怪物斗时，先给角色造成一个固定伤害。（可被魔防防御）@clue",
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
        ]
    },
    "changeFloor": {
        "1,13": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "12,7": {
            "floorId": ":before",
            "stair": "upFloor"
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
    [20040,223,624,223,  1,438,256,427, 30,  1,  1,  1,  1,  1,20042],
    [20040,  0,223,  0,  1,431,  1,  1,  1,  1,397,446,398,  1,20042],
    [20040,  0,  0,  0,  0,437,437,  0,  0,218,246,214,  0,  1,20042],
    [20040,  0,  0,  1,  1,  1,  0,  0,  0,  1,  0,  0,  0,  1,20042],
    [20040,  0,  0,  1, 28,  1,  1,  1,  0,  1,  1,  1,  1,  1,20042],
    [20040,  0,  0,  1,246, 28,  1,  0,218,248, 30,  1, 31, 31,20042],
    [20040,  0,  0,  1,246,  1,  1,218,  1,  1,  1,  1, 88,  0,20042],
    [20040,  0,  0,  1,246,246,  1,  0,  1, 29, 29,  1,  1,  0,20042],
    [20040,  0,  0,  1,  1,246,  1,437,  1, 29,246,430,  0,  0,20042],
    [20040,  0,  0,  1, 34,246,  1,437,  1,  1,  1,  1,  0,214,20042],
    [20040,  0,  0,  1,  1,432,  1, 33,  0,  1, 33,  1,214,244,20042],
    [20040,  0,  0,  0,  0,  0,244,244,  0,  1,218,  1,  1,244,20042],
    [20040, 87,  0,  0,  0,121,  1, 21, 21, 21, 22, 22, 23,  0,20042],
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