main.floors.MTn82=
{
    "floorId": "MTn82",
    "title": "主塔 -82 层",
    "name": "第 -82 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "000.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "7,13": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "1,3": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    12,
                    12,
                    0
                ]
            }
        ],
        "13,3": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    12,
                    12,
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
    [20040, 33,434,434,434,434,434, 87,434,434,434,434,434, 33,20042],
    [20040,  0,  0,434,434,434,434,434,434,434,434,434,  0,  0,20042],
    [20040,455,  1,  0,434,434,434,434,434,434,434,  0,  1,455,20042],
    [20040,  1,490,  1,  0,434,434,434,434,434,  0,  1,490,  1,20042],
    [20040,  1,249,  1,  0,  0,434,434,434,  0,  0,  1,249,  1,20042],
    [20040,  0,  0,  0,  0,489,  0,434,  0,489,  0,  0,  0,  0,20042],
    [20040,  2,599,  2,  0,  3,  3,  0,  3,  3,  0,  2,599,  2,20042],
    [20040,  2,603,  2,  0,  0, 31, 34, 31,  0,  0,  2,603,  2,20042],
    [20040,  2,249,  2, 33,  0,20015,  0,20015,  0, 33,  2,249,  2,20042],
    [20040,  2,607,  2,  2,  0,20015,608,20015,  0,  2,  2,607,  2,20042],
    [20040, 27, 28, 30,  2, 32,20015,609,20015, 32,  2, 27, 27, 27,20042],
    [20040, 27, 28, 30,  2, 32,20015,  0,20015, 32,  2, 28, 28, 28,20042],
    [20040, 27, 28, 30,  2, 32,20015, 88,20015, 32,  2, 34,613, 34,20042],
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
    [  0,  0,  0,  0,  0,  0,616,  0,616,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,616,  0,616,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,616,  0,616,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,616,  0,616,  0,  0,  0,  0,  0,  0],
    [428,  0,  0,  0,  0,  0,616,  0,616,  0,  0,  0,  0,  0,428],
    [429,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,429]
],
    "underGround": true
}