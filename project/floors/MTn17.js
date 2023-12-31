main.floors.MTn17=
{
    "floorId": "MTn17",
    "title": "主塔 -17 层",
    "name": "第 -17 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "001Battle01.mp3",
    "firstArrive": [
        {
            "type": "move",
            "loc": [
                13,
                3
            ],
            "time": 200,
            "keep": true,
            "steps": [
                "down:9"
            ]
        },
        "\t[石头人,E444]\b[this,13,12]祝你死得愉快！恕不远送！",
        {
            "type": "battle",
            "loc": [
                13,
                12
            ]
        },
        {
            "type": "sleep",
            "time": 700
        },
        "\t[hero]\b[hero]石头也能跑得这么快......"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "9,12": [
            {
                "type": "openDoor"
            }
        ],
        "10,6": [
            {
                "type": "openDoor"
            }
        ],
        "13,1": [
            {
                "type": "if",
                "condition": "(blockId:13,1===\"portal\")",
                "true": [
                    {
                        "type": "changePos",
                        "loc": [
                            1,
                            7
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "setBlock",
                        "number": "portal",
                        "loc": [
                            [
                                13,
                                1
                            ]
                        ]
                    }
                ]
            }
        ],
        "6,8": [
            "\t[老人,man]\b[this]劲敌怪物生命=勇士生命+135；怪物攻击=勇士基础攻击+15；怪物防御=勇士基础防御+1。@clue",
            "\t[老人,man]\b[this]几乎属于模仿翻版。不过这个怪物永远与你为敌，当你生命少的时候，你可秒杀它，当然，如果你知道如何对付模仿怪，对它也适用。@clue",
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
        "13,2": [
            "\t[老人,man]\b[this]你绝不可能过去，在这一竖行走走你可能就过去了。@clue",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "10,13": [
            {
                "type": "setValue",
                "name": "flag:Fm17ShopVisited",
                "value": "1"
            },
            {
                "type": "openShop",
                "id": "Fm17ExpShop"
            },
            {
                "type": "insert",
                "name": "OtherShops",
                "args": [
                    "MTn17"
                ]
            }
        ]
    },
    "changeFloor": {
        "13,13": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "1,8": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "7,8": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    1885
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
    [20040,  2,  2,  2,  2,  2,389,444,  0, 33, 33,225,  1,  0,20042],
    [20040,  2, 29, 31,254,  2,  3,  3,439,  3,  3,430,  1,121,20042],
    [20040,  2, 29,246,218,430,218,  3,  0,441,  0,439,  1,444,20042],
    [20040,  2, 29, 31,254,  2,  0,  3,  3,  3,  3,430,  1,  0,20042],
    [20040,  2,  2,  2,  2,  2,  0,  0, 31,441, 21,  0,  1,  0,20042],
    [20040, 21, 34,  2, 34,441,441, 31,  1, 33,383, 34,436,  0,20042],
    [20040,  0,225,430,225,  2,  0,  1,  1,  1,  1,  1,  1,  0,20042],
    [20040, 88, 34,  2, 34,  2,121,454,  0,  1, 27, 29,  1,  0,20042],
    [20040,  2,  2,  2,  2,  2,  0, 21,219,430,219,  1,  1,  0,20042],
    [20040,  2, 27, 27,  2,254,  0,254,  3,  3,  3,  3,  1,  0,20042],
    [20040,  2, 28, 28,212,430,  0,  3,250,  0,  0,  0,  1,400,20042],
    [20040,  2, 34, 34, 33,  2,  0,  3,  0,385,  3,444,  1,  0,20042],
    [20040,  2,  2,  2,  2,  2, 21,430,  0,  3,121,  0,  1, 87,20042],
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