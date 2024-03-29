main.floors.MT31=
{
    "floorId": "MT31",
    "title": "主塔 31 层",
    "name": "第 31 层",
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
        "2,4": [
            {
                "type": "openDoor"
            }
        ],
        "12,9": [
            "\t[老人,man]\b[this]这一层有个虚墙，你发现了么？@clue",
            "\t[老人,man]\b[this]以后虚墙会难发现，就像这层的潜伏怪一样？@clue",
            "\t[H5复刻作者]原作的潜伏怪完全不可见，H5复刻版统一半透明处理。同时，物种探知器没有实际效果。@clue",
            "\t[H5复刻作者]而虚墙依然保留了外观上的区别，方便玩家。@clue",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "4,12": [
            "\t[老人,man]\b[this]这层的宝物要用破墙用品。@clue",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "6,12": {
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
        "4,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "11,9": {
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
    [20040, 28,  1, 33, 33, 33, 33,  1,  1,  1,  1, 27, 21, 27,20042],
    [20040, 27,  1,  1,  1,  1,  1,425, 81,425,  1,  1,  1, 81,20042],
    [20040,244,  1, 32,226, 21,  1, 30,  1,244,  1,244,425,244,20042],
    [20040,244,383,226,  0,  0,  1,  1,  1,218,  1, 81,  1,  1,20042],
    [20040, 81,  1,  0,226, 28,  1, 29,226,224,  1,218,  0,218,20042],
    [20040,244,  1,  1, 81,  1,  1,  1,  1, 81,  1,  1,  1, 81,20042],
    [20040,  0,  0,  0,218,  1, 27,211,  0,  0,425,425,425,  0,20042],
    [20040,  1,  1,  1, 81,  1,211,  1,211,  1,  1,  1,  1,  0,20042],
    [20040,  0,211, 27,  0,211, 34,  1,  0,211,425, 88,121,  0,20042],
    [20040,  0,  1,  1,  1,  1,  1,  1,  1,  0,  0,  0,  0,226,20042],
    [20040,211, 34,  1, 87, 21, 21,  1, 50,  1,  0,  1,  1, 81,20042],
    [20040,  1,  0, 86,121, 21,  0,  0,  1,  1,224,  1, 27,425,20042],
    [20040, 50,  1,  1,  1,  1,  1,244,226,  0,218,  1, 27,  0,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}