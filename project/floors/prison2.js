main.floors.prison2=
{
    "floorId": "prison2",
    "title": "地牢",
    "name": "地牢",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "060Slow03.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,14": [
            {
                "type": "changeFloor",
                "floorId": "MT49",
                "loc": [
                    11,
                    1
                ]
            }
        ],
        "7,4": {
            "trigger": null,
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "opacity": 0.39,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "switch",
                    "condition": "switch:A",
                    "caseList": [
                        {
                            "case": "1",
                            "action": [
                                {
                                    "type": "if",
                                    "condition": "(item:coin>=7)",
                                    "true": [
                                        "\t[hero]\b[hero]只有6个。",
                                        "\t[捷克,N512]\b[this]我还有1个，你也有一个！OK，我来试试！",
                                        {
                                            "type": "setValue",
                                            "name": "item:coin",
                                            "operator": "-=",
                                            "value": "7"
                                        },
                                        {
                                            "type": "move",
                                            "time": 300,
                                            "steps": [
                                                "down:8"
                                            ]
                                        },
                                        {
                                            "type": "openDoor",
                                            "loc": [
                                                7,
                                                13
                                            ]
                                        }
                                    ],
                                    "false": [
                                        "\t[捷克,N512]\b[this]快找吧！\n（提示：需持有至少7个\\i[coin]幸运金币）"
                                    ]
                                }
                            ]
                        },
                        {
                            "case": "default",
                            "action": [
                                "\t[hero]\b[hero]你是......",
                                "\t[捷克,N512]\b[this]杰克的弟弟。",
                                "\t[hero]\b[hero]你的不透明度好高！",
                                "\t[捷克,N512]\b[this]杰克给我的。在430帧内可穿墙！",
                                "\t[捷克,N512]\b[this]......",
                                {
                                    "type": "setBlockOpacity",
                                    "opacity": 1
                                },
                                "\t[捷克,N512]\b[this]......完了，我们被困住了！",
                                "\t[hero]\b[hero]！@#￥%^&*……就没别的办法么？",
                                "\t[捷克,N512]\b[this]......",
                                {
                                    "type": "move",
                                    "time": 300,
                                    "keep": true,
                                    "steps": [
                                        "down:8"
                                    ]
                                },
                                {
                                    "type": "sleep",
                                    "time": 500
                                },
                                {
                                    "type": "move",
                                    "loc": [
                                        7,
                                        12
                                    ],
                                    "time": 300,
                                    "keep": true,
                                    "steps": [
                                        "up:8"
                                    ]
                                },
                                "\t[捷克,N512]\b[this]有8个幸运金币，即可碰开！",
                                {
                                    "type": "setValue",
                                    "name": "switch:A",
                                    "value": "1"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,  0,20041,20041,20041,20041,20041,20041,20042],
    [20040,10022,10022,10022,10022,10022,10022,162,10022,10022,10022,10022,10022,10022,20042],
    [20040,10022,  0,  0,  0,10022,  0,  0,  0,10022,  0,  0,  0,10022,20042],
    [20040,10022, 53,  0,  0, 86,  0,  0,  0, 86,  0,  0, 53,10022,20042],
    [20040,10022,  0,  0,  0,10022,  0,512,  0,10022,  0,  0,  0,10022,20042],
    [20040,10022,10022,10022,10022,10022,  0,  0,  0,10022,10022,10022,10022,10022,20042],
    [20040,10022,  0,  0,  0,10022,  0,  0,  0,10022,  0,  0,  0,10022,20042],
    [20040,10022, 53,  0,  0, 86,  0,  0,  0, 86,  0,  0, 53,10022,20042],
    [20040,10022,  0,  0,  0,10022,  0,  0,  0,10022,  0,  0,  0,10022,20042],
    [20040,10022,10022,10022,10022,10022,  0,  0,  0,10022,10022,10022,10022,10022,20042],
    [20040,10022,  0,  0,  0,10022,  0,  0,  0,10022,  0,  0,  0,10022,20042],
    [20040,10022, 53,  0,  0, 86,  0,  0,  0, 86,  0,  0, 53,10022,20042],
    [20040,10022,  0,  0,  0,10022,  0,  0,  0,10022,  0,  0,  0,10022,20042],
    [20040,10022,10022,10022,10022,10022,10022, 85,10022,10022,10022,10022,10022,10022,20042],
    [20048,20049,20049,20049,20049,20049,20049,  0,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}