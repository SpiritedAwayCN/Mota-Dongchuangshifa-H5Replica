main.floors.MTn61=
{
    "floorId": "MTn61",
    "title": "主塔 -61 层",
    "name": "第 -61 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "061Slow04.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "13,13": [
            {
                "type": "changePos",
                "loc": [
                    7,
                    10
                ]
            }
        ],
        "7,10": [
            {
                "type": "changePos",
                "loc": [
                    13,
                    13
                ]
            }
        ],
        "6,12": [
            "\t[老人,man]\b[this]你需要按甲乙丙丁顺序传送。@clue",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "2,7": [
            "\t[老人,man]\b[this]62、63层不能用楼层传送器，而且是黑暗层。@clue",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "13,7": [
            {
                "type": "function",
                "function": "function(){\ncore.setFlag(\"DryVisitNext\", 1);\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "MTn62",
                "loc": [
                    13,
                    7
                ]
            }
        ]
    },
    "changeFloor": {
        "7,13": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "1,7": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "9,1": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    6,
                    6,
                    0
                ]
            }
        ],
        "1,1": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    5,
                    5,
                    0
                ]
            }
        ],
        "11,1": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    6,
                    6,
                    0
                ]
            }
        ],
        "1,2": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    8000
                ]
            }
        ],
        "10,1": [
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
    [20040,455,  2, 29,  2, 28,430,  0,  3,455,454,455,  3, 27,20042],
    [20040,454,  2, 29,431, 28,  2,588,  3,  3,431,  3,  3,590,20042],
    [20040,587,  2,  2,  2,  2,  2,  0,588,  0,590,  0,  0,  0,20042],
    [20040,587,  0,589, 33,589,  0,588,  1,  1,  1,  1,430,  1,20042],
    [20040,431,  2,  2, 33,  2,587,  0,  1,431,431,589,589,  0,20042],
    [20040,589,  0,  2,  2,  2,431,  2,  1,431,  1,  1,  1,  1,20042],
    [20040, 88,121,  2, 27, 28, 34, 33,  1,588,  1,  0,  0,20255,20042],
    [20040,  2,  2,  2,  2,431,  2,  2,  1,588,  1,  0,590,  0,20042],
    [20040, 31, 31, 31, 31, 31, 27,  0,  1,431,  1,  1,430,  1,20042],
    [20040,  3,  3,  0,  3,  3, 27,20261,  1,431,431,590,590,  0,20042],
    [20040,  3, 27,588, 28,  3,  3,  3,  1,  1,  1,  1,  1,  1,20042],
    [20040,  3, 27, 34, 28,  3,121,  0,587,  0,  3,  0,587,  0,20042],
    [20040,  3,  3,  3,  3,  3,  0, 87,  3,587,587,587,  3,20260,20042],
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