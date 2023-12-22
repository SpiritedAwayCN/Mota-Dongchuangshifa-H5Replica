main.floors.MTn65=
{
    "floorId": "MTn65",
    "title": "主塔 -65 层",
    "name": "第 -65 层",
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
    "events": {},
    "changeFloor": {
        "1,13": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "7,1": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "8,2": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    5000
                ]
            }
        ],
        "8,4": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    5000
                ]
            }
        ],
        "6,4": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    6000
                ]
            }
        ],
        "6,2": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    6000
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
    [20040,20007,20007,20007,20007,20007,20007, 88,20007,20007,20007,20007,20007,20007,20042],
    [20040,20007, 33, 33, 33,20007,454,242,454,20007, 33, 33, 33,20007,20042],
    [20040,20007, 34, 34, 34,20007,20007,587,20007,20007, 34, 34, 34,20007,20042],
    [20040,20007,339,590,339,20007,454,587,454,20007,339,590,339,20007,20042],
    [20040,20007,20007,431,20007,20007,20007,430,20007,20007,20007,431,20007,20007,20042],
    [20040,20007, 28,  0, 28, 28,  0,  0,  0, 28, 28,  0, 28,20007,20042],
    [20040,20007,  2,  2,  0,20007,20007,587,20007,20007,  0,  2,  2,20007,20042],
    [20040, 63, 34, 34,574,20007, 27, 32, 27,20007,574, 34, 34, 63,20042],
    [20040,20007,20007,  2,  0,587, 32,20007, 32,587,  0,  2,20007,20007,20042],
    [20040,20007,587,  0,588,20007, 27, 32, 27,20007,588,  0,587,20007,20042],
    [20040,20007, 30,  2, 33,20007,20007,587,20007,20007, 33,  2, 30,20007,20042],
    [20040,  2,  0,20007,588,  0, 34, 33, 34,  0,588,20007,  0,20007,20042],
    [20040, 87,  2,20007,20007,20007, 34, 33, 34,20007,20007,20007,20007,20007,20042],
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