main.floors.NM_FEX2=
{
    "floorId": "NM_FEX2",
    "title": "魔宫殿",
    "name": "魔宫殿",
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
    "bgm": "mine.mp3",
    "weather": [
        "snow",
        3
    ],
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "4,5": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "operator": "-=",
                    "value": "2"
                }
            ]
        },
        "13,12": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "setValue",
                    "name": "status:atk",
                    "operator": "-=",
                    "value": "1"
                }
            ]
        },
        "13,11": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "setValue",
                    "name": "status:def",
                    "operator": "-=",
                    "value": "1"
                }
            ]
        },
        "13,10": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "setValue",
                    "name": "status:atk",
                    "operator": "-=",
                    "value": "1"
                }
            ]
        },
        "13,8": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "setValue",
                    "name": "status:atk",
                    "operator": "-=",
                    "value": "1"
                }
            ]
        },
        "13,6": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "setValue",
                    "name": "status:atk",
                    "operator": "-=",
                    "value": "1"
                }
            ]
        },
        "13,4": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "setValue",
                    "name": "status:atk",
                    "operator": "-=",
                    "value": "1"
                }
            ]
        },
        "13,2": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "setValue",
                    "name": "status:atk",
                    "operator": "-=",
                    "value": "8"
                }
            ]
        },
        "13,9": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "setValue",
                    "name": "status:def",
                    "operator": "-=",
                    "value": "1"
                }
            ]
        },
        "13,7": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "setValue",
                    "name": "status:def",
                    "operator": "-=",
                    "value": "1"
                }
            ]
        },
        "13,5": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "setValue",
                    "name": "status:def",
                    "operator": "-=",
                    "value": "1"
                }
            ]
        },
        "13,3": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "setValue",
                    "name": "status:def",
                    "operator": "-=",
                    "value": "8"
                }
            ]
        },
        "13,1": {
            "trigger": null,
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "setValue",
                    "name": "flag:v148_BeatBoss",
                    "operator": "+=",
                    "value": "1"
                },
                "\t[神秘人,N376]通过！",
                {
                    "type": "changeFloor",
                    "floorId": "MT0",
                    "loc": [
                        7,
                        3
                    ],
                    "direction": "down",
                    "time": 200
                }
            ]
        }
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {
        "8,1": [
            {
                "type": "setBlock",
                "number": "I347",
                "loc": [
                    [
                        1,
                        13
                    ]
                ]
            }
        ]
    },
    "afterGetItem": {
        "1,12": [
            {
                "type": "setValue",
                "name": "status:hp",
                "operator": "+=",
                "value": "23"
            }
        ],
        "2,13": [
            {
                "type": "setValue",
                "name": "status:hp",
                "operator": "+=",
                "value": "23"
            }
        ],
        "1,13": [
            {
                "type": "setValue",
                "name": "status:hp",
                "operator": "+=",
                "value": "432"
            }
        ],
        "6,3": [
            {
                "type": "setValue",
                "name": "status:hp",
                "operator": "+=",
                "value": "112"
            }
        ],
        "9,11": [
            {
                "type": "setValue",
                "name": "status:hp",
                "operator": "+=",
                "value": "1"
            }
        ],
        "13,13": [
            {
                "type": "setValue",
                "name": "status:hp",
                "operator": "+=",
                "value": "774"
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10040,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10042],
    [10040, 31,367,367,367, 31,367,367,367,365,365,365,365,376,10042],
    [10040,367,365,365,365,365,365,365,368,369, 34, 34,365,375,10042],
    [10040,367,365,365, 27, 28,347,370, 32,365,368,365,365,375,10042],
    [10040,367,365,365,371,  0,365,370,  0,365,368, 27,365,375,10042],
    [10040, 31,365, 31,375,365,365, 34,365,365,365, 28,365,375,10042],
    [10040,367,365, 31, 27,371,365,368, 27,365,368,368,365,375,10042],
    [10040,367,365,365,365,  0,371,368, 28,365, 32,365,365,375,10042],
    [10040,367, 31,367,367,365,  0,365,373,  0,372, 31,365,375,10042],
    [10040,365,365,365,367,365,371,365,365,371,365,  0,365,375,10042],
    [10040, 32, 27,367,  0,365, 32,365, 32,368,365,  0,365,375,10042],
    [10040,367,365,  0,367,365, 28,369, 28,347,365,  0,365,375,10042],
    [10040,347,365,365, 28,365,371,365,371,365,  0,  0,365,375,10042],
    [10040,  0,347,367, 31,365,371, 31,371,374,  0,  0,  0,347,10042],
    [10040,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10042]
],
    "bgmap": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040,140,140,140,140,140,140,140,140,140,140,140,140,140,20042],
    [20040,140,140,140,140,140,140,140,140,140,140,140,140,140,20042],
    [20040,140,140,140,140,140,140,140,140,140,140,140,140,140,20042],
    [20040,140,140,140,140,140,140,140,140,140,140,140,140,140,20042],
    [20040,140,140,140,140,140,140,140,140,140,140,140,140,140,20042],
    [20040,140,140,140,140,140,140,140,140,140,140,140,140,140,20042],
    [20040,140,140,140,140,140,140,140,140,140,140,140,140,140,20042],
    [20040,140,140,140,140,140,140,140,140,140,140,140,140,140,20042],
    [20040,140,140,140,140,140,140,140,140,140,140,140,140,140,20042],
    [20040,140,140,140,140,140,140,140,140,140,140,140,140,140,20042],
    [20040,140,140,140,140,140,140,140,140,140,140,140,140,140,20042],
    [20040,140,140,140,140,140,140,140,140,140,140,140,140,140,20042],
    [20040,140,140,140,140,140,140,140,140,140,140,140,140,140,20042],
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042]
],
    "fgmap": [

]
}