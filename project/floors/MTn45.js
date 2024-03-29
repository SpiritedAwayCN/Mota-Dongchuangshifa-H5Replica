main.floors.MTn45=
{
    "floorId": "MTn45",
    "title": "主塔 -45 层",
    "name": "第 -45 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "013Theme02.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "13,1": [
            {
                "type": "function",
                "function": "function(){\ncore.setFlag(\"DryVisitNext\", 1);\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "MTn44",
                "loc": [
                    13,
                    1
                ]
            }
        ],
        "1,6": [
            {
                "type": "function",
                "function": "function(){\ncore.setFlag(\"DryVisitNext\", 1);\n}"
            },
            {
                "type": "changeFloor",
                "floorId": "MTn46",
                "loc": [
                    1,
                    6
                ]
            }
        ],
        "13,12": [
            "\t[老人,man]\b[this]本层白宝石有概率的。所以知道干什么了么？这次的2者变量可是10~20倍哦",
            "\t[H5复刻作者]复刻版移除了随机性，无需SL。",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "13,13": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "1,8": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "12,13": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    40,
                    20,
                    10
                ]
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040,  2,573,430,573,  2,  2,  2,  2, 34, 34,  2,574,20247,20042],
    [20040,  2,  0,  2, 30,  2,  0,572,  0,  0,  0,574,574,574,20042],
    [20040,  2,  0,  2,  2,  2,  2,430,  2,  2,  2,430,  2,  2,20042],
    [20040,  2,574,574,574,  0,  0,572, 27,  2, 27,571, 28,  2,20042],
    [20040,  2,430,  2,  2,573,  2,  2,430,  2, 27, 34, 28,  2,20042],
    [20040,20255,  0,430, 28, 28,  0,572, 27,  2,  2,  2,  2,  2,20042],
    [20040,421,421,421,421,421,421,421,421,421,421,421,421,421,20042],
    [20040, 88,  1,  0,558,  0,  1, 32,  0,558,  0,  0,558, 29,20042],
    [20040, 28,  1,556,  1,556,  1,556,  1,  1,  1,570,  1,  1,20042],
    [20040,567,  1,556,  1,556,  1,  0,558,  0,570,564,  0,  1,20042],
    [20040,567,  1, 34,  1,  0,570, 28,  1,  1,  1,  1,567,  1,20042],
    [20040,  0,  1,  0,  1,558,  1,558,  1,564, 27,567,567,121,20042],
    [20040,564,570,564,  1, 27,570, 32,  0,570,  1,  1,455, 87,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "underGround": true,
    "bgmap": [

],
    "fgmap": [
    [428,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,428],
    [429,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,429],
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
    [428,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,428],
    [429,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,429]
]
}