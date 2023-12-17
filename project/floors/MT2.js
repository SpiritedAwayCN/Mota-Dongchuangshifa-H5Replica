main.floors.MT2=
{
    "floorId": "MT2",
    "title": "主塔 2 层",
    "name": "第 2 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "4,10": [
            "\t[老人,man]魔塔里有很多隐藏层。",
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
        "2,14": [
            {
                "type": "if",
                "condition": "(flag:s54_2FExtra===1)",
                "true": [
                    {
                        "type": "changeFloor",
                        "floorId": "Extra1",
                        "loc": [
                            1,
                            13
                        ],
                        "time": 500
                    }
                ],
                "false": [
                    {
                        "type": "setBlock",
                        "number": "portal"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:s54_2FExtra",
                        "value": "1",
                        "norefresh": true
                    },
                    {
                        "type": "waitAsync"
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "7,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,13": {
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
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040,  1,  1,  1,  1,  1, 21, 88, 31,  1,  1,  1,  1,  1,20042],
    [20040,382, 81,  0, 21,  1,  0,  0,  0,  1, 32, 32, 32,  1,20042],
    [20040,  0,  1, 28, 21,  1, 28,  0, 21,  1,  0,  0,  0,  1,20042],
    [20040, 22,  1,  0,380,  1,  1, 81,  1,  1,  0,378,  0,  1,20042],
    [20040,  1,  1,  1,  0, 81,  0,  0,  0,  1,  1, 81,  1,  1,20042],
    [20040, 22,  1,  0,379,  1,382,  1,201, 81,201,  0,  1, 27,20042],
    [20040,  0,  1, 27, 21,  1,382,  1,  1,  1,  1, 32, 81,381,20042],
    [20040,382, 81,  0, 21,  1,382,  1,201, 81,201,  0,  1, 28,20042],
    [20040,  1,  1,  1,  1,  1,  0,  0,  0,  1,  1, 81,  1,  1,20042],
    [20040,  0,  0,  0,121,  0,  0, 31, 31,  1,  0,202,  0,  1,20042],
    [20040,377,377,  1,  1,  1, 81,  1,  1,  1,379,  0,379,  1,20042],
    [20040,  0,  0,  1, 27,  0,203,  0, 27,  1, 31,382, 21,  1,20042],
    [20040, 87,  0,  1, 28,  0, 34,  0, 28,  1,  1,  1,  1,  1,20042],
    [20048,20049,20022,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "bgm.mp3"
}