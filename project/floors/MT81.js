main.floors.MT81=
{
    "floorId": "MT81",
    "title": "主塔 81 层",
    "name": "第 81 层",
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
    "bgm": "055Negative04.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "10,1": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "10,2": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        }
    },
    "changeFloor": {
        "13,13": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "13,12": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    4000
                ]
            }
        ],
        "13,10": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    4000
                ]
            }
        ],
        "8,8": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    4000
                ]
            }
        ],
        "5,1": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    4000
                ]
            }
        ],
        "10,1": [
            {
                "type": "setBlock",
                "number": "yellowWall"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "10,2": [
            {
                "type": "setBlock",
                "number": "yellowWall"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040, 87,  0,533,533,454, 33,533,533,  0, 33, 27,  1,  1,20042],
    [20040, 32, 32,  1,  1,  1,  1,  1,  1, 82, 33, 32,  0,  1,20042],
    [20040,  1,  1,  1, 27,  0,  1,  0,535,  0,  1,  0,538,  1,20042],
    [20040,  0,339,  1, 28,  0,536,  0,  1, 31,  1,  1, 81,  1,20042],
    [20040,529,  2,  2,  2,  2,  2,  2,  2, 31,  2,538,  0,538,20042],
    [20040, 14,  0,  0,  0,  2,  0, 81,  0, 31,  0,  0,  2, 28,20042],
    [20040, 60,  2,539,531,  0,  0,  2,533,  2,537,  2,  2,  2,20042],
    [20040,  2,  2, 81,  2,  2,534,  2,454,  2, 33,334,537,  0,20042],
    [20040,  2, 29, 29, 29,  2, 12,  0,  2, 27, 28, 34,  2, 11,20042],
    [20040,  3, 33, 33, 33,  3,  0,534,  0, 11,  3,  3,  3,454,20042],
    [20040,  3, 33, 33, 33,  3,  3,  3,531,  3,  3, 31, 32, 34,20042],
    [20040,  3,  3,  3,  3,  3, 27,  3,  0,  3,  3,  3,  0,454,20042],
    [20040, 27, 28, 34, 29,539,539,530, 28,530,539,539,  0, 88,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}