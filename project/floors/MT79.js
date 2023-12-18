main.floors.MT79=
{
    "floorId": "MT79",
    "title": "主塔 79 层",
    "name": "第 79 层",
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
    "events": {},
    "changeFloor": {
        "1,13": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "7,7": [
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
        "8,10": [
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
        "10,11": [
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
        "11,11": [
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
        "12,11": [
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
    [20040, 87,  2, 27, 27, 28, 28,537,537,537, 28, 28, 27, 27,20042],
    [20040,  0,  2,  2,  2,  2,  2, 82,  2, 82,  2,  2,  2,  2,20042],
    [20040, 31,  2, 27, 28,529,  0, 22,  2,  0,  0,529, 28, 27,20042],
    [20040, 33,  2,  2,  2, 82,  2,  2,  2,  2,  2, 82,  2,  2,20042],
    [20040,533,  2,529, 82,529,  0, 33,  0,536, 34,  0,536,  0,20042],
    [20040,533,  2,  0,  2,  0,  2,  2,  0,  2, 32,  2,  2, 82,20042],
    [20040,  0, 84, 24, 30,  2,  2,455,531,  2, 31,  0,  2,  0,20042],
    [20040,533,  2,  0,  2, 22,  2,  2,  0, 82,  0,535,  0, 22,20042],
    [20040,533,  2,  0,  2, 32, 32,  0,531,  2,  2, 82,  2,  2,20042],
    [20040, 33,  2,530, 82,530,  2,  2,455,  2,529,529,529,  2,20042],
    [20040, 31,  2,  2,  2, 32, 32,  2,  2,  2,455,455,455,  2,20042],
    [20040,  0,  2, 22,  2,  2,  0,  2,  0,  2, 24, 24, 24,  2,20042],
    [20040, 88,  2,  0,531,531,  0, 82, 22,  2,  2,  2,  2,  2,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}