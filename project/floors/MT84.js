main.floors.MT84=
{
    "floorId": "MT84",
    "title": "主塔 84 层",
    "name": "第 84 层",
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
        "7,2": [
            "\t[老人,man]\b[this]85是最后一层，请你一定要救出公主！@clue",
            "\t[hero]\b[hero]我会的。",
            "\t[老人,man]\b[this]一个小偷给我了10颗红蓝钻,10个黄药水,送你吧！@clue",
            {
                "type": "setValue",
                "name": "item:redGem",
                "operator": "+=",
                "value": "10"
            },
            {
                "type": "setValue",
                "name": "item:blueGem",
                "operator": "+=",
                "value": "10"
            },
            {
                "type": "setValue",
                "name": "item:yellowPotion",
                "operator": "+=",
                "value": "10"
            },
            "\t[老人,man]\b[this]对了，他说要还给你一个物品。@clue",
            "\t[hero]\b[hero]什么？",
            "\t[老人,man]\b[this]这个。幸运金币！@clue",
            {
                "type": "setValue",
                "name": "item:coin",
                "operator": "+=",
                "value": "1"
            },
            "\t[hero]\b[hero]杰克的弟弟？......",
            "\t[老人,man]\b[this]祝你好运！@clue",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "7,13": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "7,1": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "3,1": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    3,
                    3,
                    0
                ]
            }
        ],
        "11,1": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    3,
                    3,
                    0
                ]
            }
        ],
        "12,1": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    5250
                ]
            }
        ],
        "2,1": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    5250
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
    [20040,  1,454,455,534,  0,  0, 88,  0,  0,534,455,454,  1,20042],
    [20040,  1,  1,  1,  1,  1,  0,121,  0,  1,  1,  1,  1,  1,20042],
    [20040, 27, 28, 81,530,  1,529,529,529,  1,530, 81, 28, 27,20042],
    [20040,  1,  1,  1,  0,535,  0,  1,  0,535,  0,  1,  1,  1,20042],
    [20040, 27, 81,537,  0,  2,  2,  2,  2,  2,  0,537, 81, 28,20042],
    [20040, 27,  2,  0, 33,  0,530,  2,530,  0, 33,  0,  2, 28,20042],
    [20040, 27,  2, 33,  2,530, 30,  2, 30,530,  2, 33,  2, 28,20042],
    [20040, 27,  2,  0,  0,  2,  2,  2,  2,  2,  0,  0,  2, 28,20042],
    [20040, 27, 81,537,  0, 33, 33,  3, 33, 33,  0,537, 81, 28,20042],
    [20040,  3,  3, 81,  3,533, 33,  3, 33,533,  3, 81,  3,  3,20042],
    [20040,  3, 27, 27,  3, 81,  3,  3,  3, 81,  3, 28, 28,  3,20042],
    [20040,  3, 27, 27,  3,533,  0, 33,  0,533,  3, 28, 28,  3,20042],
    [20040,  3,  3,  3,  3,  3,  0, 87,  0,  3,  3,  3,  3,  3,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}