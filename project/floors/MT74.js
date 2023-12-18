main.floors.MT74=
{
    "floorId": "MT74",
    "title": "主塔 74 层",
    "name": "第 74 层",
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
        "2,7": [
            {
                "type": "changeFloor",
                "floorId": "MT73",
                "loc": [
                    2,
                    7
                ]
            }
        ],
        "12,2": [
            {
                "type": "function",
                "function": "function(){\ncore.setFlag(\"DryVisitNext\", 1);\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "MT75",
                "loc": [
                    12,
                    2
                ]
            }
        ]
    },
    "changeFloor": {
        "7,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "7,8": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "2,8": [
            {
                "type": "setValue",
                "name": "flag:v191_F76Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:v191_F76Door===5",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            12,
                            3
                        ]
                    }
                ]
            }
        ],
        "3,7": [
            {
                "type": "setValue",
                "name": "flag:v191_F76Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:v191_F76Door===5",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            12,
                            3
                        ]
                    }
                ]
            }
        ],
        "4,8": [
            {
                "type": "setValue",
                "name": "flag:v191_F76Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:v191_F76Door===5",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            12,
                            3
                        ]
                    }
                ]
            }
        ],
        "4,6": [
            {
                "type": "setValue",
                "name": "flag:v191_F76Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:v191_F76Door===5",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            12,
                            3
                        ]
                    }
                ]
            }
        ],
        "2,6": [
            {
                "type": "setValue",
                "name": "flag:v191_F76Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:v191_F76Door===5",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            12,
                            3
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040,20007,20007,20007,20007,20007,20007,20007,20007,20007,20007,20007,20007,20007,20042],
    [20040,20007,  1, 31,  0,534,  0,529,  0,531,  0,  1,20247,20007,20042],
    [20040,20007,  1,  0,  0,  1,  1, 81,  1,  1,531,  1, 85,20007,20042],
    [20040,20007,  1,  0,534,  1,  0,529,  0,  1,  0,530,  0,20007,20042],
    [20040,20007,  1,  1, 81,  1, 27,  0, 28,  1,  1, 81,  1,20007,20042],
    [20040,20007,533,  0,533,  1,  1,  1,  1,  1, 32,530, 32,20007,20042],
    [20040,20007,20255,533,  1,  1, 27,522, 28,  1, 32,534, 32,20007,20042],
    [20040,20007,533,  0,533,  1, 33, 87, 33,  1,  1, 81,  1,20007,20042],
    [20040,20007,  1,  1,  1,  1,  1, 82,  1,  1,531,534,  1,20007,20042],
    [20040,20007,530,530,530,  1,  0,528,  0,  1,  0,531,  1,20007,20042],
    [20040,20007, 81,  1, 81,  1,528, 88,528,  1, 27, 28,  1,20007,20042],
    [20040,20007,548,  1,530,  0,  0,528,  0,  1,  1,  1,  1,20007,20042],
    [20040,20007,20007,20007,20007,20007,20007,20007,20007,20007,20007,20007,20007,20007,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}