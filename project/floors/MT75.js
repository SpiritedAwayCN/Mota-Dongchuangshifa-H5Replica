main.floors.MT75=
{
    "floorId": "MT75",
    "title": "主塔 75 层",
    "name": "第 75 层",
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
        "12,2": [
            {
                "type": "function",
                "function": "function(){\ncore.setFlag(\"DryVisitNext\", 1);\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "MT74",
                "loc": [
                    12,
                    2
                ]
            }
        ]
    },
    "changeFloor": {
        "7,8": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,7": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "9,12": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    2,
                    2,
                    0,
                    2000
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
    [20040,20007,  1,  1,  1,  1,  1,  1,  1,533,533,533,20255,20007,20042],
    [20040,20007,  1,  1,530, 81, 32,  1, 28, 28,  1,  0,533,20007,20042],
    [20040,20007,  1,  1,530,  1, 32,  1, 28, 28,  1,  1, 81,20007,20042],
    [20040,20007,  1,  1,530,  1, 32,  1, 27, 27,  1,  0,530,20007,20042],
    [20040,20007,  1,  1, 81,  1,  1,  1, 27, 27,  1, 81,  1,20007,20042],
    [20040, 87,  0,  0,530,530,  0,  1,  1,  1,  1,533,  0,20007,20042],
    [20040,20007,  0,  0,  1,  0,  0, 88,  1, 30,  1,  0,  0,20007,20042],
    [20040,20007,533,  0,  1,  1,  1,  1,  1,534,  1,  1,530,20007,20042],
    [20040,20007, 81,  1,  1,  0, 81,534,  1,534,530, 81,530,20007,20042],
    [20040,20007,534,  0,  1, 48,  1,  0, 81,534,  1,  1,  0,20007,20042],
    [20040,20007,  1, 34,  1,  1,  1,  1,  1,455,  1, 29,534,20007,20042],
    [20040,20007,20007,20007,20007,20007,20007,20007,20007,20007,20007,20007,20007,20007,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}