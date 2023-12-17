main.floors.MT12=
{
    "floorId": "MT12",
    "title": "主塔 12 层",
    "name": "第 12 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "001Battle01.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "12,10": [
            {
                "type": "openDoor"
            }
        ],
        "10,2": [
            {
                "type": "openShop",
                "id": "F12KeyShop",
                "open": true
            }
        ]
    },
    "changeFloor": {
        "8,9": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "8,2": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "7,6": [
            {
                "type": "setValue",
                "name": "flag:v128_Door12F",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v128_Door12F===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            5
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:v128_Door12F===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            3
                        ]
                    }
                ]
            }
        ],
        "9,6": [
            {
                "type": "setValue",
                "name": "flag:v128_Door12F",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v128_Door12F===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            5
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:v128_Door12F===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            3
                        ]
                    }
                ]
            }
        ],
        "9,4": [
            {
                "type": "setValue",
                "name": "flag:v128_Door12F",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v128_Door12F===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            5
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:v128_Door12F===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            3
                        ]
                    }
                ]
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:v128_Door12F",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v128_Door12F===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            5
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:v128_Door12F===4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
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
    [20040, 27, 27,216,216, 28, 28,  3, 34,  3,  3, 31, 31, 31,20042],
    [20040,  3,  3, 34,216,216, 34,  3, 87,  3,122,204,  0,204,20042],
    [20040, 34,  3,  3, 81,  3,  3,  3, 85,  3,  3,  3, 81,  3,20042],
    [20040, 34,  0,  3,216,216,  3,210, 34,210,  3, 31,  0,217,20042],
    [20040, 34,204,204,  3,216,  3,  3, 85,  3,  3,209,  3, 81,20042],
    [20040,  3,  3, 81,  3,  0,  3,206, 34,206,  3,209,  3, 21,20042],
    [20040,217,217,  0,  3,  0,  3,  3,  0,  3,  3,  0,  3, 21,20042],
    [20040,217,  3,  3,  0,210,  0,  3,  0,  3,  0,210,  3, 21,20042],
    [20040,217,217,  0,  0,  3,  0,  3, 88,  3,210,  3,  3,  3,20042],
    [20040, 81,  3,  3,  3,  3,205,205,  0,210,  0,209,385, 21,20042],
    [20040,209,209,209,  0,  0,205,  3,210, 27,  3,  0,  3, 21,20042],
    [20040,  3, 81,  3,  3,  3, 81,  3,  0,  3,  3,  0,  3, 21,20042],
    [20040,  3, 31, 28,  3, 27,205,  3,209, 31, 31,209,204, 21,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}