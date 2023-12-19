main.floors.MTn12=
{
    "floorId": "MTn12",
    "title": "主塔 -12 层",
    "name": "第 -12 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "012Theme01.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "3,13": [
            "\t[老人,man]\b[this]属性+夹击=属性+夹击+伪装。@clue",
            "\t[老人,man]\b[this]属性+激光=属性+激光+伪装。@clue",
            "\t[老人,man]\b[this]属性+劲敌=属性+劲敌+伪装。@clue",
            "\t[老人,man]\b[this]与深黄色属性接触的属性都会附加伪装属性。@clue",
            "\t[H5复刻作者]由于本复刻版伪装属性无效，所以没有实际效果。@clue",
            {
                "type": "setValue",
                "name": "flag:v116_Chat",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "13,13": [
            {
                "type": "if",
                "condition": "(blockId:13,13===\"T458\")",
                "true": [
                    {
                        "type": "playSound",
                        "name": "029-Door06.ogg"
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                13,
                                13
                            ]
                        ],
                        "floorId": "MTn11"
                    },
                    {
                        "type": "setBlock",
                        "number": "T459"
                    },
                    {
                        "type": "if",
                        "condition": "flag:VerboseHint",
                        "true": [
                            "\t[H5复刻作者]提示：-11F出现了一些变化。"
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "1,13": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "13,8": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "9,3": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    3,
                    2,
                    1
                ]
            }
        ],
        "11,11": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    1885
                ]
            }
        ],
        "12,11": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    1885
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
    [20040,365, 27,365,365,365,365,365,365,365, 29,365, 21,365,20042],
    [20040,365, 27,  0,365,365,339,365,365,  0,439,365, 29,439,20042],
    [20040,365, 28,  0,212,218,218,  0,439,455,  0,365,365,430,20042],
    [20040,244, 28,365,365,365,365,244,365,365, 21,  0,439,  0,20042],
    [20040,244,244,365, 27, 27,365, 33, 33,365,365,365,365,432,20042],
    [20040,244,365,365, 28, 28,430,244,365,365, 31, 31,365,432,20042],
    [20040,  0,  0,365,365,365,365,  0,  0,  0,437, 31,  0,  0,20042],
    [20040,365, 21,  0,  0,439,439,  0, 21,  0,365,365,  0, 88,20042],
    [20040,365,246,  0,365,365,365,365,365,  0,432,365, 27, 27,20042],
    [20040,365,246,365,365,456,456,456,365,365,432,365,439,439,20042],
    [20040, 30,246,  0,254,  0,254,  0,  0,  0,  0,454,454,  0,20042],
    [20040,365,365,365,365,430,365,365,365,365,365,365,365,365,20042],
    [20040, 87,  0,121,  0,  0,  0,439,439,439,439,439,457,458,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
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
],
    "underGround": true
}