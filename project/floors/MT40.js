main.floors.MT40=
{
    "floorId": "MT40",
    "title": "主塔 40 层",
    "name": "第 40 层",
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
    "bgm": "014Theme03.mp3",
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
    "afterBattle": {
        "1,6": [
            {
                "type": "setValue",
                "name": "flag:F40DoorLeft",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:F40DoorLeft",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            8
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            6
                        ]
                    }
                ]
            }
        ],
        "1,7": [
            {
                "type": "setValue",
                "name": "flag:F40DoorLeft",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:F40DoorLeft",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            8
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            6
                        ]
                    }
                ]
            }
        ],
        "1,8": [
            {
                "type": "setValue",
                "name": "flag:F40DoorLeft",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:F40DoorLeft",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            8
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            6
                        ]
                    }
                ]
            }
        ],
        "13,6": [
            {
                "type": "setValue",
                "name": "flag:F40DoorRight",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:F40DoorRight",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            8
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            6
                        ]
                    }
                ]
            }
        ],
        "13,7": [
            {
                "type": "setValue",
                "name": "flag:F40DoorRight",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:F40DoorRight",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            8
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            6
                        ]
                    }
                ]
            }
        ],
        "13,8": [
            {
                "type": "setValue",
                "name": "flag:F40DoorRight",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:F40DoorRight",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            8
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            6
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
    [20040,20030,20030,20030,20030,20030,20005, 87,20005,10030,10030,10030,10030,10030,20042],
    [20040,20030, 34, 34, 34,20030,20005,20005,20005,10030, 34, 34, 34,10030,20042],
    [20040,20030, 28, 28, 28,20030,20005, 17,20005,10030, 28, 28, 28,10030,20042],
    [20040,20030, 27, 27, 27,20030,20005, 17,20005,10030, 27, 27, 27,10030,20042],
    [20040,20030,20030, 86,20030,20030,20005, 17,20005,10030,10030, 86,10030,10030,20042],
    [20040,256,20030, 85,  0,20030,20005, 17,20005,10030,  0, 85,10030,256,20042],
    [20040,256, 86,  0,  0, 81,  3,20005,  3, 81,  0,  0, 86,256,20042],
    [20040,256,10030, 85,  0,10030,  3,  0,  3,10030,  0, 85,10030,256,20042],
    [20040,10030,10030, 86,10030,10030,  3,  0,  3,10030,10030, 86,10030,10030,20042],
    [20040,10030, 27, 27, 27,10030,  3,  0,  3,10030, 27, 27, 27,10030,20042],
    [20040,10030, 28, 28, 28,10030,  3,  0,  3,10030, 28, 28, 28,10030,20042],
    [20040,10030, 34, 34, 34,10030,  3,  0,  3,10030, 34, 34, 34,10030,20042],
    [20040,10030,10030,10030,10030,10030,  3, 88,  3,10030,10030,10030,10030,10030,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}