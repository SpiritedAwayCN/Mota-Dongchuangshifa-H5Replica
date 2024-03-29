main.floors.MTCastle3=
{
    "floorId": "MTCastle3",
    "title": "魔塔城堡",
    "name": "魔塔城堡",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "mine.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "13,7": {
            "floorId": "MTCastle4",
            "loc": [
                1,
                7
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "4,8": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    8000
                ]
            }
        ],
        "5,6": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    5000
                ]
            }
        ],
        "4,6": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    8000
                ]
            }
        ],
        "12,5": [
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
        "12,4": [
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
        "12,3": [
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
        "2,10": [
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
    [20040,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,20042],
    [20040,10041, 27,568,  3, 27,  3, 28,  0,561,561,561,455,10041,20042],
    [20040,10041,  3,  0,  0,568,  0, 33,  0,  3,  3,  3,455,10041,20042],
    [20040,10041, 31,567,  3,  3,  3,  3,566,  3,  3,  3,455,10041,20042],
    [20040,10041,567,  3,  3,  0,566,  0,  0,561,561,561,455,10041,20042],
    [20040,10041, 31,  3,454,454,  3,566,  3,  3,  3,  3,  3,10041,20042],
    [20040,10041,567,  3,  3,  3,  3,  0,558,558,556,556,  0, 94,20042],
    [20040,10041,  0,  0,454, 32, 32,  0,  3,  3,  3,  3,  3,10041,20042],
    [20040,10041,568,  3,568,  3,  3,566, 27, 27,  3, 28, 28,10041,20042],
    [20040,10041,455,  3, 33, 33,  3,  0,  3,  3,  3,  3, 27,10041,20042],
    [20040,10041,568,  3,  3,  3,  3,  0,  0,  3, 34,  3, 27,10041,20042],
    [20040,10041,  0,567,  0, 30,  0,567,  0,568,  0, 34,567,10041,20042],
    [20040,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,143,143,143,143,143,143,143,143,143,143,143,  0,  0],
    [  0,  0,143,143,143,143,143,143,143,143,143,143,143,  0,  0],
    [  0,  0,143,143,143,143,143,143,143,143,143,143,143,  0,  0],
    [  0,  0,143,143,143,143,143,143,143,143,143,143,143,  0,  0],
    [  0,  0,143,143,143,143,143,143,143,143,143,143,143,  0,  0],
    [  0,  0,143,143,143,143,143,143,143,143,143,143,143,143,  0],
    [  0,  0,143,143,143,143,143,143,143,143,143,143,143,  0,  0],
    [  0,  0,143,143,143,143,143,143,143,143,143,143,143,  0,  0],
    [  0,  0,143,143,143,143,143,143,143,143,143,143,143,  0,  0],
    [  0,  0,143,143,143,143,143,143,143,143,143,143,143,  0,  0],
    [  0,  0,143,143,143,143,143,143,143,143,143,143,143,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}