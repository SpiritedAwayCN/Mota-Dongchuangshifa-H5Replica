main.floors.NM_FEX1=
{
    "floorId": "NM_FEX1",
    "title": "骑士城堡",
    "name": "骑士城堡",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "mine.ogg",
    "weather": [
        "snow",
        3
    ],
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "beforeBattle": {
        "7,8": [
            "\t[黑骑士,E358]只要打死3个剑王就行了，但前提是打败我！"
        ]
    },
    "afterBattle": {
        "7,13": [
            {
                "type": "setValue",
                "name": "flag:v148_BeatBoss",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            "\t[剑王,E364]通过！",
            {
                "type": "changeFloor",
                "floorId": "NM_FEX2",
                "loc": [
                    1,
                    13
                ],
                "direction": "down",
                "time": 200
            }
        ],
        "2,7": [
            {
                "type": "setValue",
                "name": "flag:v148_BeatBoss",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "if",
                "condition": "(flag:v148_BeatBoss===1)",
                "true": [
                    {
                        "type": "setBlock",
                        "number": "I347",
                        "loc": [
                            [
                                2,
                                1
                            ]
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "setBlock",
                        "number": "I347",
                        "loc": [
                            [
                                1,
                                1
                            ]
                        ]
                    }
                ]
            }
        ],
        "12,7": [
            {
                "type": "setValue",
                "name": "flag:v148_BeatBoss",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "if",
                "condition": "(flag:v148_BeatBoss===1)",
                "true": [
                    {
                        "type": "setBlock",
                        "number": "I347",
                        "loc": [
                            [
                                2,
                                1
                            ]
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "setBlock",
                        "number": "I347",
                        "loc": [
                            [
                                1,
                                1
                            ]
                        ]
                    }
                ]
            }
        ],
        "5,9": [
            {
                "type": "setValue",
                "name": "status:hp",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,9": [
            {
                "type": "setValue",
                "name": "status:hp",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {
        "11,1": [
            {
                "type": "setBlock",
                "number": "arrowDown",
                "loc": [
                    [
                        7,
                        6
                    ]
                ]
            }
        ],
        "2,1": [
            {
                "type": "setValue",
                "name": "status:hp",
                "operator": "+=",
                "value": "800"
            }
        ],
        "1,1": [
            {
                "type": "setValue",
                "name": "status:hp",
                "operator": "+=",
                "value": "200"
            }
        ],
        "3,1": [
            {
                "type": "setValue",
                "name": "status:hp",
                "operator": "-=",
                "value": "1"
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {
        "3,13": {
            "0": {
                "condition": "flag:v148_BeatBoss===2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor",
                        "async": true
                    }
                ]
            },
            "1": null
        },
        "6,12": {
            "0": {
                "condition": "flag:v148_BeatBoss===2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor",
                        "async": true
                    }
                ]
            },
            "1": null
        },
        "8,12": {
            "0": {
                "condition": "flag:v148_BeatBoss===2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor",
                        "async": true
                    }
                ]
            },
            "1": null
        },
        "11,13": {
            "0": {
                "condition": "flag:v148_BeatBoss===2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor",
                        "async": true
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040,  0,  0, 34,350,350,350,350,  0,357,357, 34,357,357,20042],
    [20040,  2,  2,  2,  2,  2,  2,162,  2,  2,  2,  2,  2,  0,20042],
    [20040, 32, 32,  2,  0, 27,  2, 27,  2, 28,  0,  2, 32, 32,20042],
    [20040,  2,357,  2,  0,  2,  2, 28,  2,  2,  0,  2,357,  2,20042],
    [20040, 31, 31,  0,356, 32,356, 32,356, 32,356,  0, 31, 31,20042],
    [20040,  2,  2,  2,  0,  2,  2,  2,  2,  2,  0,  2,  2,  2,20042],
    [20040, 27,362,  2,357, 27,357,  0,357, 28,357,  2,363, 28,20042],
    [20040, 27, 27,  2,  2,  2,  2,358,  2,  2,  2,  2, 28, 28,20042],
    [20040,20260,  2,  2,360,359, 27, 34, 27,359,360,  2,  2,20261,20042],
    [20040,  0,361,  0, 32,  2,  2, 28,  2,  2, 32,  0,  0,361,20042],
    [20040,  2, 31,  0,  0,  0,  0,358,  0,  0,  0,  0, 31,  2,20042],
    [20040,  2, 31,  2,  2,  2, 85,  2, 85,  2,  2,  2, 31,  2,20042],
    [20040,  2, 31, 85,  0,  0,20262,364,20262,  0,  0, 85, 31,  2,20042],
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,  0],
    [  0,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,  0],
    [  0,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,  0],
    [  0,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,  0],
    [  0,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,  0],
    [  0,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,  0],
    [  0,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,  0],
    [  0,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,  0],
    [  0,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,  0],
    [  0,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,  0],
    [  0,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,  0],
    [  0,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,  0],
    [  0,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,10003,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}