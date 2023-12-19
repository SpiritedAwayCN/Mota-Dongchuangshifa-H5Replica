main.floors.MT32=
{
    "floorId": "MT32",
    "title": "主塔 32 层",
    "name": "第 32 层",
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
        "4,7": [
            {
                "type": "openDoor"
            }
        ],
        "4,2": [
            {
                "type": "openDoor"
            }
        ],
        "3,1": [
            "\t[老人,man]\b[this]领域怪物周围x格时自动减生命y,当然x和y只是个任意数。@clue",
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
        "13,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "3,11": [
            {
                "type": "if",
                "condition": "flag:s68_F13RescuedThief",
                "true": [
                    {
                        "type": "show",
                        "loc": [
                            [
                                13,
                                1
                            ]
                        ]
                    },
                    "\t[杰克,thief]\b[this,13,1]夷？",
                    {
                        "type": "changePos",
                        "direction": "down"
                    },
                    {
                        "type": "move",
                        "loc": [
                            13,
                            1
                        ],
                        "time": 500,
                        "keep": true,
                        "steps": [
                            "down:12",
                            "left:10",
                            "up:1"
                        ]
                    },
                    "\t[hero]\b[this]你怎么在这？",
                    "\t[杰克,thief]\b[this,3,12]呵呵,隐藏层里好多你们国家的好东西啊!",
                    "\t[hero]\b[this]里面有什么？",
                    "\t[杰克,thief]\b[this,3,12]去隐藏层要打N只怪，我帮你K了！",
                    "\t[hero]\b[this]哦，你拿到什么了？",
                    "\t[杰克,thief]\b[this,3,12]给你一个吧。",
                    "\t[hero]\b[this]才一个？小气！",
                    "\t[杰克,thief]\b[this,3,12]我都用完了，就这样，88",
                    {
                        "type": "setValue",
                        "name": "item:bomb",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "hide",
                        "remove": true
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                3,
                                12
                            ]
                        ],
                        "remove": true
                    }
                ]
            }
        ],
        "12,1": [
            {
                "type": "changeFloor",
                "floorId": "boring",
                "loc": [
                    7,
                    7
                ]
            }
        ]
    },
    "changeFloor": {
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "4,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {
        "7,5": [
            "\t[肉质大章鱼,octopus]\b[this]哈哈，你是打不过我的！"
        ]
    },
    "afterBattle": {
        "7,5": [
            {
                "type": "openDoor",
                "loc": [
                    5,
                    1
                ]
            },
            "\t[hero]\b[hero]切，说大话。......等等，除了经验和金钱，没礼物么......小气......"
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040, 87,  0,121,  0, 85,  0,  0,  0,  0,  0,  0, 89,123,20042],
    [20040,  1,  1,  1,  1,  1,161,  1,  1,  1,  1,  1,  1,  0,20042],
    [20040, 29, 29,  1,  0,  1,  0,  0,  0,  1, 27, 27,  1,  0,20042],
    [20040, 28, 28,  1,  0,  1,  0,  0,  0,  1,  1, 34,  1,  0,20042],
    [20040,218,218, 81,  0,  1,  0,258,  0,  1,246,246,  1,  0,20042],
    [20040, 28, 28,  1,  0,  1,  1, 83,  1,  1,246,  1,  1,  0,20042],
    [20040, 29, 29,  1,  1,  1,  0,  0,  0, 81,218,  0,  1,  0,20042],
    [20040,  1,  1,  1,  0,  1,  1,  1,  0,  1,  1,218,  1,  0,20042],
    [20040,  1,  0,  0,  0,  0,  0,  0,  0,  1,218,  0,  1,  0,20042],
    [20040,  1,  0,  1,  1,  1,  1,  1,  1,  1,  0,  1,  1,  0,20042],
    [20040,  1,  0,  0, 88,  1, 27, 27,246,246,246, 33,  1,  0,20042],
    [20040,  1,  1,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,20042],
    [20040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}