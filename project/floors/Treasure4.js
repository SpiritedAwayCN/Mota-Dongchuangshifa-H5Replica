main.floors.Treasure4=
{
    "floorId": "Treasure4",
    "title": "魔王的宝库",
    "name": "魔王的宝库",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "mine.ogg",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,13": {
            "trigger": "action",
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
                    "type": "if",
                    "condition": "(flag:SuperSteelKeyInvalid!==1)",
                    "true": [
                        {
                            "type": "if",
                            "condition": "(flag:SuperSteelKeyAttained!==1)",
                            "true": [
                                {
                                    "type": "confirm",
                                    "default": true,
                                    "text": "您可以获得该圣水，\n但相关难度选项将锁定，确认获得吗？",
                                    "yes": [],
                                    "no": [
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "false": [
                        "\t[H5难度系统]根据当前难度设置，您不可在宝库获得圣水。\n若确需获得，请在难度页面中修改设置。",
                        {
                            "type": "exit"
                        }
                    ]
                },
                {
                    "type": "setValue",
                    "name": "flag:SuperSteelKeyAttained",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "item:superPotion",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "hide",
                    "remove": true
                }
            ]
        },
        "7,13": {
            "trigger": "action",
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
                    "type": "if",
                    "condition": "(flag:SuperSteelKeyInvalid!==1)",
                    "true": [
                        {
                            "type": "if",
                            "condition": "(flag:SuperSteelKeyAttained!==1)",
                            "true": [
                                {
                                    "type": "confirm",
                                    "default": true,
                                    "text": "您可以获得该圣水，\n但相关难度选项将锁定，确认获得吗？",
                                    "yes": [],
                                    "no": [
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "false": [
                        "\t[H5难度系统]根据当前难度设置，您不可在宝库获得圣水。\n若确需获得，请在难度页面中修改设置。",
                        {
                            "type": "exit"
                        }
                    ]
                },
                {
                    "type": "setValue",
                    "name": "flag:SuperSteelKeyAttained",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "item:superPotion",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "hide",
                    "remove": true
                }
            ]
        },
        "9,13": {
            "trigger": "action",
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
                    "type": "if",
                    "condition": "(flag:SuperSteelKeyInvalid!==1)",
                    "true": [
                        {
                            "type": "if",
                            "condition": "(flag:SuperSteelKeyAttained!==1)",
                            "true": [
                                {
                                    "type": "confirm",
                                    "default": true,
                                    "text": "您可以获得该圣水，\n但相关难度选项将锁定，确认获得吗？",
                                    "yes": [],
                                    "no": [
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "false": [
                        "\t[H5难度系统]根据当前难度设置，您不可在宝库获得圣水。\n若确需获得，请在难度页面中修改设置。",
                        {
                            "type": "exit"
                        }
                    ]
                },
                {
                    "type": "setValue",
                    "name": "flag:SuperSteelKeyAttained",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "item:superPotion",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "hide",
                    "remove": true
                }
            ]
        }
    },
    "changeFloor": {
        "7,1": {
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
    [20040,20169,20170,20171,20172,  0,  0, 88,20177,20178,20188,20195,20186,20169,20042],
    [20040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20042],
    [20040,  0,20005,  0,20005,  0,20005,  0,20005,  0,20005,  0,20005,  0,20042],
    [20040, 86,20005, 86,20005, 86,20005, 86,20005, 86,20005, 86,20005, 86,20042],
    [20040, 86,20005, 86,20005, 86,20005, 86,20005, 86,20005, 86,20005, 86,20042],
    [20040, 86,20005, 86,20005, 86,20005, 86,20005, 86,20005, 86,20005, 86,20042],
    [20040, 86,20005, 86,20005, 86,20005, 86,20005, 86,20005, 86,20005, 86,20042],
    [20040, 86,20005, 86,20005, 86,20005, 86,20005, 86,20005, 86,20005, 86,20042],
    [20040, 86,20005, 86,20005, 86,20005, 86,20005, 86,20005, 86,20005, 86,20042],
    [20040,  0,20005,  0,20005,  0,20005,  0,20005,  0,20005,  0,20005,  0,20042],
    [20040,227,20005,227,20005,227,20005,227,20005,227,20005,227,20005,227,20042],
    [20040, 86,20005, 86,20005, 86,20005, 86,20005, 86,20005, 86,20005, 86,20042],
    [20040, 50,20005, 26,20005, 56,20005, 56,20005, 56,20005, 26,20005, 50,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}