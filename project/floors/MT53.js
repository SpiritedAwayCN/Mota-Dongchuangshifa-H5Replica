main.floors.MT53=
{
    "floorId": "MT53",
    "title": "主塔 53 层",
    "name": "第 53 层",
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
    "bgm": "031Castle01.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,11": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "6,11": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "7,11": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "6,12": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "2,1": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "3,1": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "4,1": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "0,9": {
            "trigger": null,
            "enable": true,
            "noPass": true,
            "displayDamage": true,
            "opacity": 0.2,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "12,2": [
            "\t[老人,man]\b[this]香蕉可以提升使用者的能力,外表一样,可提升的属性值不一样.",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "12,11": [
            {
                "type": "choices",
                "text": "\t[神秘老人,wizard]给全部角色的150点攻击，保证你和同伴再加一连击！",
                "choices": [
                    {
                        "text": "可以",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\ncore.decreaseStatusWithBuffer(\"atk\", 150, -1);\n}"
                            },
                            {
                                "type": "setValue",
                                "name": "status:combo",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "hide",
                                "remove": true
                            }
                        ]
                    },
                    {
                        "text": "以后再说",
                        "action": []
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "13,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,9": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "5,11": [
            {
                "type": "setBlock",
                "number": "whiteWall"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "6,11": [
            {
                "type": "setBlock",
                "number": "whiteWall"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "7,11": [
            {
                "type": "setBlock",
                "number": "whiteWall"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "6,12": [
            {
                "type": "setBlock",
                "number": "whiteWall"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "2,1": [
            {
                "type": "setBlock",
                "number": "whiteWall"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "3,1": [
            {
                "type": "setBlock",
                "number": "whiteWall"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "4,1": [
            {
                "type": "setBlock",
                "number": "whiteWall"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground"
            }
        ],
        "0,9": [
            {
                "type": "setBlock",
                "number": "X20040"
            },
            {
                "type": "setBlockOpacity",
                "opacity": 1
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
    [20040,  2, 34, 34, 34,  2,515, 81, 27,  2, 27, 82, 21, 87,20042],
    [20040,  2,525,523,524, 82,  0,  2, 28,  2, 28,  2,121,  0,20042],
    [20040,  2,514,514,514,  2,515,  2,  2,  2, 29,  2,  2, 81,20042],
    [20040,  2,  0,514,  0,  2,  0,  2,  0,  0,399,  2,  0,  0,20042],
    [20040,  2,  2, 81,  2,  2,  0, 81,241,  0,241,  0,  0,508,20042],
    [20040, 21,  0,  0,514, 81,  0,  2,  2,  2, 27,  2,  2, 81,20042],
    [20040,  2,241,  2, 33,  2,225,  0,  0,  2, 81,  2, 22, 22,20042],
    [20040, 27, 34, 28,  2,  0,  0,  2, 11,401,401,  2, 23, 23,20042],
    [ 30, 27,241, 28,  2,240, 88,240,  0,  2,  2,  2,  2,  2,20042],
    [20040,  2, 81,  2,241,  0,240,  0, 12,  2,  0,508,  0,  2,20042],
    [20040,401,  0,  2, 81, 32, 32, 32,  0,460,508,508,125,  2,20042],
    [20040,  0,240,  2,241, 33, 32, 13,  0,  2,  0,508,  0,  2,20042],
    [20040,401,  0,240,  0,513, 82,513,  2,  2,  2,  2,  2,  2,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  2,  2,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [20040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  2,  2,  2,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  2,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}