main.floors.MT46=
{
    "floorId": "MT46",
    "title": "主塔 46 层",
    "name": "第 46 层",
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
    "bgm": "045Positive03.mp3",
    "firstArrive": [
        "\t[Joey Cooper]这是魔鬼地带。走错一步你就完了。",
        "\t[H5复刻作者]复刻版中，走错只会传送回起点不会导致游戏结束。\n且增加了跳关用的木牌。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "8,4": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "6,4": [
            {
                "type": "changePos",
                "loc": [
                    11,
                    8
                ]
            }
        ],
        "10,4": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "11,1": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "13,1": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "13,3": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "13,5": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "11,6": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "11,8": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "13,9": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "13,11": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "5,6": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "7,7": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "9,6": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "9,10": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "11,10": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "5,8": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "5,10": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "3,11": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "3,13": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "1,10": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "1,8": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "1,6": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "1,1": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "3,2": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "5,4": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    2
                ]
            }
        ],
        "9,4": [
            {
                "type": "changePos",
                "loc": [
                    5,
                    10
                ]
            }
        ],
        "12,1": [
            {
                "type": "changePos",
                "loc": [
                    1,
                    10
                ]
            }
        ],
        "2,1": [
            {
                "type": "changePos",
                "loc": [
                    9,
                    10
                ]
            }
        ],
        "13,4": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    8
                ]
            }
        ],
        "1,5": [
            {
                "type": "changePos",
                "loc": [
                    13,
                    11
                ]
            }
        ],
        "11,7": [
            {
                "type": "changePos",
                "loc": [
                    11,
                    1
                ]
            }
        ],
        "5,9": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    6
                ]
            }
        ],
        "3,12": [
            {
                "type": "changePos",
                "loc": [
                    1,
                    1
                ]
            }
        ],
        "10,10": [
            {
                "type": "changePos",
                "loc": [
                    8,
                    4
                ]
            }
        ],
        "13,10": [
            {
                "type": "changePos",
                "loc": [
                    13,
                    3
                ]
            }
        ],
        "1,9": [
            {
                "type": "changePos",
                "loc": [
                    3,
                    11
                ]
            }
        ],
        "8,0": [
            {
                "type": "confirm",
                "text": "想要跳关(直接传送至对面)吗?",
                "yes": [
                    {
                        "type": "changePos",
                        "loc": [
                            7,
                            7
                        ]
                    }
                ],
                "no": []
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
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,129,20041,20041,20041,20041,20041,20042],
    [20040,  0,  0,  0,  1, 27,  0, 88,  0, 27,  1,  0,  0,  0,20042],
    [20040,  0,  1,  0,  1, 27,  0,  0,  0, 27,  1,  0,  1,  0,20042],
    [20040,  0,  1,  0,  1,  1,162,  1,162,  1,  1,  0,  1,  0,20042],
    [20040,  0,  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  1,  0,20042],
    [20040,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,20042],
    [20040,  0,  0,  0,  1,  0,164,  0,163,  0,  1,  0,  0,  0,20042],
    [20040,  1,  1,  0,  1,  0,  1,  0,  1,  0,  1,  0,  1,  1,20042],
    [20040,  0,  0,  0,  1,  0,  1,  0,  1,  0,  1,  0,  0,  0,20042],
    [20040,  0,  1,  1,  1,  0,  1,  0,  1,  0,  1,  1,  1,  0,20042],
    [20040,  0,  1,  0,  0,  0,  1,  0,  1,  0,  0,  0,  1,  0,20042],
    [20040,  0,  1,  0,  1,  1,  1,  0,  1,  1,  1,  0,  1,  0,20042],
    [20040,  0,  1,  0,  1, 28,  0,  0,  0, 28,  1,  0,  1,  0,20042],
    [20040,  0,  0,  0,  1, 28,  0, 87,  0, 28,  1,  0,  0,  0,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}