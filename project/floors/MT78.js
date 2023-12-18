main.floors.MT78=
{
    "floorId": "MT78",
    "title": "主塔 78 层",
    "name": "第 78 层",
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
    "events": {
        "4,11": [
            {
                "type": "openDoor"
            }
        ],
        "5,5": [
            {
                "type": "openDoor"
            }
        ],
        "8,1": [
            {
                "type": "changeFloor",
                "floorId": "SuperSpace2",
                "loc": [
                    7,
                    12
                ]
            }
        ]
    },
    "changeFloor": {
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,13": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "3,1": [
            {
                "type": "setValue",
                "name": "flag:F78_Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:F78_Door===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            4,
                            2
                        ]
                    }
                ]
            }
        ],
        "3,3": [
            {
                "type": "setValue",
                "name": "flag:F78_Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:F78_Door===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            4,
                            2
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {
        "1,3": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    2235
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
    [20040, 88, 21,201,  1,  1,  1,  1, 89,  1,  1,  1,  1,  1,20042],
    [20040,  0,  0,531, 85,339,339,  1,533,  1, 34, 34, 34,  1,20042],
    [20040,454,399,201,  1,  1,  1,  1,382,  1, 27, 34, 28,  1,20042],
    [20040, 34, 32,  0, 81,  3,202,378,379,  1, 27,529, 28,  1,20042],
    [20040,  3,  3,  3, 34,  3,201,  1,  1,  1,  1, 81,  1,  1,20042],
    [20040, 61,  3, 31, 32,  3,  0, 12, 13,  0, 21,  0,538, 28,20042],
    [20040,401,  3,  3,530,  3,530,  2,  2,  0,  2,  2,  2,  2,20042],
    [20040,401,  3,  0,530, 21,530,  0,  2,  0,  0,  0,530,  0,20042],
    [20040,  0,537,  0,  3, 27,  3, 11,  2,536,  2,  2, 81,  2,20042],
    [20040,535,  3,  3,  3,  3,  3, 11,  2, 27,  2,  0,529,  2,20042],
    [20040,  0,538, 81,  3,  0,538,  0,  2, 28,  2, 27,  0,  2,20042],
    [20040,  0,  3, 34,  3, 28,  2,  2,  2, 14,  2,  0, 31,  2,20042],
    [20040, 87,  3,  0,538,  0,538,  0, 14,400,  2,  2,  2,  2,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}