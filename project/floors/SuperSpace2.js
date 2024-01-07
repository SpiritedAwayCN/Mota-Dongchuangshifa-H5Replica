main.floors.SuperSpace2=
{
    "floorId": "SuperSpace2",
    "title": "异次元空间",
    "name": "异次元空间",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "mine.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,10": [
            "\t[老人,man]\b[this]净化怪的伤害十分厉害，所以帮你减轻一点负担。",
            "\t[老人,man]\b[this]净化怪的净化倍率降为0.2",
            {
                "type": "setGlobalValue",
                "name": "purify",
                "value": 0.2
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "7,12": [
            {
                "type": "changeFloor",
                "floorId": "MT78",
                "loc": [
                    8,
                    1
                ]
            }
        ]
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "7,6": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    6,
                    6,
                    2,
                    10000
                ]
            }
        ],
        "3,5": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    5000
                ]
            }
        ],
        "3,7": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    5000
                ]
            }
        ],
        "4,7": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    5000
                ]
            }
        ],
        "11,5": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    5000
                ]
            }
        ],
        "11,7": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    5000
                ]
            }
        ],
        "10,7": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    5000
                ]
            }
        ],
        "10,9": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    100
                ]
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [365,365,365,365,365,365,365,365,365,365,365,365,365,365,365],
    [365,365, 31,402, 31,365, 25, 25, 25,365, 31,403, 31,365,365],
    [365,365, 31, 32, 31,365, 25, 25, 25,365, 31, 32, 31,365,365],
    [365,365, 32, 32, 32,365, 25, 25, 25,365, 32, 32, 32,365,365],
    [365,365,365, 86,365,365,365, 86,365,365,365, 86,365,365,365],
    [365,365, 32,454, 32,365,  0,525,  0,365, 32,454, 32,365,365],
    [365,365,365,  0,  0,  0,525,455,525,  0,  0,  0,365,365,365],
    [365,365, 32,454,454, 32,365,525,365, 32,454,454, 32,365,365],
    [365,365,365,365, 86,365,365, 86,365,365, 86,365,365,365,365],
    [365,365,365, 34, 34, 34,365,  0,365, 33,454, 33,365,365,365],
    [365,365,365, 34, 34, 34,365,121,365, 33, 33, 33,365,365,365],
    [365,365,365, 34, 34, 34,365,  0,365, 33, 33, 33,365,365,365],
    [365,365,365,365,365,365,365, 89,365,365,365,365,365,365,365],
    [365,365,365,365,365,365,365,365,365,365,365,365,365,365,365],
    [365,365,365,365,365,365,365,365,365,365,365,365,365,365,365]
],
    "bgmap": [

],
    "fgmap": [

]
}