main.floors.lostWorld1=
{
    "floorId": "lostWorld1",
    "title": "迷惘の世界",
    "name": "迷惘の世界",
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
        "9,8": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.95,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "7,13": [
            {
                "type": "changeFloor",
                "floorId": "lostWorld2",
                "loc": [
                    7,
                    13
                ]
            }
        ],
        "7,1": {
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
                    "type": "if",
                    "condition": "(flag:VerboseHint===1)",
                    "true": [
                        {
                            "type": "confirm",
                            "text": "有种不好的预感，确认要进入吗?",
                            "yes": [],
                            "no": [
                                {
                                    "type": "exit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "insert",
                    "name": "结局处理",
                    "args": [
                        "结局6"
                    ]
                }
            ]
        }
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "9,8": [
            {
                "type": "setBlock",
                "number": "star"
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040, 27,218,  0,246,218,  0, 89,  0,244,218,  0,  0, 28,20042],
    [20040,  4,246,  4,  0,  4,246,  4,246,  4,246,  4,218,  4,20042],
    [20040,218,399,  0,218,399,  0,399, 34,246,  0,244,  0, 28,20042],
    [20040,  4,246,  4,246,421,246,  4,246,  4,226,  4,246,  4,20042],
    [20040, 27,  0,244,  0,  0,218, 11,  0,246,  0,246,244, 28,20042],
    [20040,  4,  0,  4,246,  4,246,421,244,  4,244,  4,246,  4,20042],
    [20040, 27,218,  0,  0,399,  0,246,  0,246, 34,  0,218, 28,20042],
    [20040,  4,246,  4,246,  4,244,  4,  0, 34,246,  4,  0,  4,20042],
    [20040, 27,  0,  0,226,  0,  0,246,226,  0,218,246,  0, 28,20042],
    [20040,  4,  0,  4,246,  4,246,  4,246,  4,  0,  4,  0,  4,20042],
    [20040, 27, 34,246,  0,226, 34, 11,  0,246,  0,246,  0, 28,20042],
    [20040,  4,218,  4,  0,  4,246,  4,218,  4,218,  4,  0,  4,20042],
    [20040, 27,  0,244,  0,246,  0, 89,  0,246,  0,244,  0, 28,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}