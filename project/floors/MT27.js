main.floors.MT27=
{
    "floorId": "MT27",
    "title": "主塔 27 层",
    "name": "第 27 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "xxmtUdG.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "11,13": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "13,11": [
            {
                "type": "openDoor"
            }
        ],
        "7,2": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "4,3": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "2,4": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "8,5": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "7,7": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "9,3": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        },
        "11,6": {
            "trigger": null,
            "enable": true,
            "noPass": true,
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
                    "type": "closeDoor",
                    "id": "yellowWall"
                }
            ]
        }
    },
    "changeFloor": {
        "13,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "1,10": {
            "floorId": ":before",
            "stair": "upFloor"
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
    [20040,407,407,407,  1,  0,  0,410,  0,218,  0,  1,  1, 87,20042],
    [20040, 27,  1,  0,  1,  0,  1,  0,  1,  1,  0,  0,  1,  0,20042],
    [20040, 28,  1,  0,  0,406,406, 61, 29,  0,410,  1,  1,  0,20042],
    [20040,408,  0,408,  1,  1,218,  1,  1,  0,  0,218,  1, 11,20042],
    [20040, 28,  1,  0, 61,211,211, 28,  0,  0,  1,  0,  1, 11,20042],
    [20040, 27,  1,  0, 81,  1,  1,  1,  1,218,  1,  0,  1, 11,20042],
    [20040,  1,  1,  1,  0,210,210,  0, 28, 30, 29,218,  1,  0,20042],
    [20040, 27, 27,211,211,  1,210,  1, 27,  1,  1, 27,  1,  0,20042],
    [20040,  1,  1,  1,  1,  1,420,  1,  1,  1,  1,  1,  1, 32,20042],
    [20040, 88,  0,  0,  0,  0,  0,  0, 11, 11, 11,  0,  0,  0,20042],
    [20040,  1,  1,  1,  1,  1,420,  1,  1,  1,  1,  1,  1,383,20042],
    [20040, 33, 33,  1,218,  0,  0,  1,218,  0,218,  1,  0,  0,20042],
    [20040,  1,218,  0,218,  1,  0,  0,218,  1,218,  0, 30,  1,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}