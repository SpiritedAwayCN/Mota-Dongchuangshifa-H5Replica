main.floors.MT22=
{
    "floorId": "MT22",
    "title": "主塔 22 层",
    "name": "第 22 层",
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
        "3,2": [
            {
                "type": "while",
                "condition": "1",
                "data": [
                    {
                        "type": "setValue",
                        "name": "temp:curPrice",
                        "value": "10*(flag:v13_TSWshop*flag:v13_TSWshop+flag:v13_TSWshop+2)"
                    },
                    {
                        "type": "choices",
                        "text": "\t[商店,moneyShop]花${temp:curPrice}枚金币，您可以：",
                        "choices": [
                            {
                                "text": "加0攻击",
                                "icon": "redGem",
                                "need": "status:money>=temp:curPrice",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "temp:curPrice"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:v13_TSWshop",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "加0防御",
                                "icon": "blueGem",
                                "need": "status:money>=temp:curPrice",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "temp:curPrice"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:v13_TSWshop",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "加0生命",
                                "icon": "redPotion",
                                "need": "status:money>=temp:curPrice",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "temp:curPrice"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:v13_TSWshop",
                                        "operator": "+=",
                                        "value": "1"
                                    }
                                ]
                            },
                            {
                                "text": "离开",
                                "action": [
                                    {
                                        "type": "break",
                                        "n": 1
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "12,1": [
            {
                "type": "openShop",
                "id": "F22WineShop",
                "open": true
            }
        ]
    },
    "changeFloor": {
        "1,13": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "7,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "2,4": [
            {
                "type": "setValue",
                "name": "flag:v69_BatShop",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:v69_BatShop===2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            3
                        ]
                    }
                ]
            }
        ],
        "4,4": [
            {
                "type": "setValue",
                "name": "flag:v69_BatShop",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:v69_BatShop===2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            3
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
    [20040,  2,  2,  2,  2,  2, 27,  2,387, 28,387,  2,128,  2,20042],
    [20040,  2,  7,131,  8,  2,387,  0,  0,  2,  0,  2,410,  2,20042],
    [20040,  2,  2, 85,  2,  2,  0,  2,  2,  2, 60,  0,  0,  0,20042],
    [20040, 27,408,  0,408,  0,  0, 81,387,  2,  2,  2,  2,  0,20042],
    [20040, 27,  2,  0,  0,  0,  2,  2,  0,  2,  0, 28,  2,211,20042],
    [20040, 27,  2,  2,  2, 81,  2,211,211,  2,  2, 28,  2, 60,20042],
    [20040,  2,  2,  0,406,408,  2,  0,  2,  2, 27, 28, 81,406,20042],
    [20040,405,  0,  0,  2,407,  0, 31, 31,  2, 27,  2,  2,  2,20042],
    [20040, 21,  2,  2,  2, 34,  2,  2, 31,  2, 27,  2,  0, 61,20042],
    [20040, 21,  2, 28,  2,  2,  2, 31, 31, 81,406,  2,408,  2,20042],
    [20040, 21,  2, 28, 81,210,  2, 87,  2,  2,  2,  2,407,406,20042],
    [20040,405,  0,207,  2,210,  2,210,  0,  0,  0,  2,  2, 81,20042],
    [20040, 88,207,  2,  2,  0,  0,210,  2,  2, 32, 32,  0,  0,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}