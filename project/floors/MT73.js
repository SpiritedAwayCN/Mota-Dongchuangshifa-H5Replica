main.floors.MT73=
{
    "floorId": "MT73",
    "title": "主塔 73 层",
    "name": "第 73 层",
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
    "bgm": "009LastBoss01.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "8,3": [
            "\t[老人,man]\b[this]魔塔小了一圈，发现了么？@clue",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "2,7": [
            {
                "type": "function",
                "function": "function(){\ncore.setFlag(\"DryVisitNext\", 1);\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "MT74",
                "loc": [
                    2,
                    7
                ]
            }
        ]
    },
    "changeFloor": {
        "7,3": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "7,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "7,2": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    3000
                ]
            }
        ],
        "7,4": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    3000
                ]
            }
        ],
        "8,6": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2002
                ]
            }
        ],
        "9,2": [
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
        "9,4": [
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
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040,20007,20007,20007,20007,20007,20007,20007,20007,20007,20007,20007,20007,20007,20042],
    [20040,20007,  1,  1,  1,  1,  1,454,531,455,  1, 27, 27,20007,20042],
    [20040,20007,  1, 27, 34, 28,  1, 88,121,  1,  1,  1, 81,20007,20042],
    [20040,20007,  1,  0,530,  0,  1,454,531,455, 21,522,522,20007,20042],
    [20040,20007,  1,530,531,530,  1,  1,  1,  1,  1, 81,  1,20007,20042],
    [20040,20007,  1,  1, 81,  1,  1,  0,454,528,  0, 28, 28,20007,20042],
    [20040,20007,20247,530,528,528,  0, 21, 21,  1,  1,  1, 81,20007,20042],
    [20040,20007,  1,  1, 81,  1,  1,522,  0,  1, 32,529,529,20007,20042],
    [20040,20007,  1,530,531,530,  1, 82,  1,  1,  1, 32,  1,20007,20042],
    [20040,20007,  1,  0,530,  0,  1,  0,  0,  1,529,529, 32,20007,20042],
    [20040,20007,  1, 27, 34, 28,  1, 87, 34,  1, 81,  1,  1,20007,20042],
    [20040,20007,  1,  1,  1,  1,  1, 34,  0, 21,  0,528, 25,20007,20042],
    [20040,20007,20007,20007,20007,20007,20007,20007,20007,20007,20007,20007,20007,20007,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}