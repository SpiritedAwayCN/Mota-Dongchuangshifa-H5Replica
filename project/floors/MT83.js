main.floors.MT83=
{
    "floorId": "MT83",
    "title": "主塔 83 层",
    "name": "第 83 层",
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
    "bgm": "055Negative04.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,9": [
            {
                "type": "openDoor"
            }
        ],
        "5,7": [
            {
                "type": "openDoor"
            }
        ]
    },
    "changeFloor": {
        "7,13": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "7,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "11,5": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    4000
                ]
            }
        ],
        "3,3": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    4000
                ]
            }
        ],
        "8,6": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    3,
                    4,
                    0
                ]
            }
        ],
        "9,6": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    3,
                    4,
                    0
                ]
            }
        ],
        "8,5": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    3,
                    4,
                    0
                ]
            }
        ],
        "9,5": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    3,
                    4,
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
    [20040, 27,  1, 32, 32, 32, 32, 87, 32, 32, 32, 32,  1, 28,20042],
    [20040, 27,  1,  1,  1,  1,  1, 83,  1,  1,  1,  1,  1, 28,20042],
    [20040, 27,  1,454,401,  3, 27, 27, 28, 28, 81,530,  1, 28,20042],
    [20040, 27,  1,  3, 81,  3,  0,  3,  3,  3,  3,537,  1, 28,20042],
    [20040, 27,  1,  0,401,  3,533,  3,455,455,  3,454,  1, 28,20042],
    [20040, 27,  1,  0,  0,533,533,  3,455,455,  3,  3,  1, 28,20042],
    [20040, 27,  1,  3,  3,385,  0,  3,  3, 81,  3,  0,  1, 28,20042],
    [20040, 27,  1,536, 81,  0,534, 81,534,  0,530,  0,  1, 28,20042],
    [20040, 27,  1,  0,  3, 31, 31,385, 31, 31,  3,539,  1, 28,20042],
    [20040, 27,  1,535,  3,  3,  3,  3,  3,  3,  3, 34,  1, 28,20042],
    [20040, 27,  1,530,  0, 21, 81,  0, 81, 21,  3, 34,  1, 28,20042],
    [20040, 27,  1,  1,  1,  1,  1, 83,  1,  1,  1,  1,  1, 28,20042],
    [20040,539, 81, 32, 32, 32, 32, 88, 32, 32, 32, 32, 81,539,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}