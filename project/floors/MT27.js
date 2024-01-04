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
        },
        "0,10": [
            {
                "type": "confirm",
                "text": "有一些关于本层地形的提示，是否查看？\n（多次查看可能丧失探索的乐趣）",
                "yes": [
                    "\t[H5复刻作者]本层实际结构与表面上的不同，有大量看上去是平地的地块实际为\\i[yellowWall]墙壁。",
                    "\t[H5复刻作者]此外，本层有一个较为关键的暗墙，请留意！",
                    "\t[H5复刻作者]考虑本层实际的地形，从结果上看，获取本层下方的\\i[yellowGem]黄宝石将非常轻松，而获取上半的黄宝石较难。"
                ],
                "no": []
            }
        ]
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
    [129, 88,  0,  0,  0,  0,  0,  0, 11, 11, 11,  0,  0,  0,20042],
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