main.floors.MT16=
{
    "floorId": "MT16",
    "title": "主塔 16 层",
    "name": "第 16 层",
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
        "6,11": [
            "\t[H5复刻作者]\b[this]到达此地块后，7F经验商店已升级，请留意。\n（原作没有文字提示）",
            {
                "type": "setValue",
                "name": "flag:s61_MansChat",
                "value": "1"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "5,2": [
            {
                "type": "setValue",
                "name": "status:hp",
                "operator": "-=",
                "value": "9999"
            }
        ],
        "1,13": [
            {
                "type": "if",
                "condition": "(flag:v116_Chat>=11)",
                "true": [
                    "\t[神秘老人,wizard]\b[this]以后陷阱会变多，你可以去陷阱国度去学习一下。@clue",
                    {
                        "type": "setBlock",
                        "number": "portal",
                        "loc": [
                            [
                                2,
                                14
                            ]
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:s62_F16Extra",
                        "value": "1"
                    },
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
                "false": [
                    "\t[神秘老人,wizard]\b[this]我现在没有什么信息。\n（提示：尝试与更多NPC对话）"
                ]
            }
        ],
        "2,14": [
            {
                "type": "if",
                "condition": "flag:s62_F16Extra===1",
                "true": [
                    {
                        "type": "changeFloor",
                        "floorId": "TrapsTutorial",
                        "loc": [
                            27,
                            2
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "3,13": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "7,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "2,7": [
            {
                "type": "setValue",
                "name": "flag:v133_F16Shield",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v133_F16Shield===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            6
                        ]
                    }
                ]
            }
        ],
        "4,7": [
            {
                "type": "setValue",
                "name": "flag:v133_F16Shield",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:v133_F16Shield===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            6
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040,  3,  0, 38,  0,  3,  0, 87,  3,  3,  3,  3,  3,  3,20042],
    [20040,  3,204,  0,204,20273,  0,  3, 27, 27,  0, 28, 28,  3,20042],
    [20040,  3,  3,  0,  3,  3,  0,  3, 27,  3, 81,  3, 28,  3,20042],
    [20040,  3, 27,213, 28,  3,205,  3,  3,  3,221,  3,  3,  3,20042],
    [20040,  3, 27,213, 28,  3,  0,  0,204,  3,  0,  0,204,  3,20042],
    [20040,  3,  3, 85,  3,  3,205,  3, 31,  0,  0,  3, 31,  0,20042],
    [20040,  3,204, 31,204,  3,  0,  3,  3,  3,  3,  3,  3,  0,20042],
    [20040,  3,  0, 31,  0,  3,205,  3, 28, 28,213,  0,  0,  0,20042],
    [20040,  3,  3, 81,  3,  3,  0,  0,213,  3,  3, 81,  3,  3,20042],
    [20040, 21, 21,387, 21,  3,205,  0,  0,  3,  0,216,  0,  3,20042],
    [20040,  3,  3, 81,  3,  3,  0,  3,  3,  3, 31, 31, 31,  3,20042],
    [20040, 34,  0,  0,  0,  0,205,  3, 21,  3, 31, 31, 31,  3,20042],
    [20040,125,  0, 88,  0,  0,  0,221,221,  3,  3,  3,  3,  3,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}