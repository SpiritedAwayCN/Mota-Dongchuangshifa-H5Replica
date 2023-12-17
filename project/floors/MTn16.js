main.floors.MTn16=
{
    "floorId": "MTn16",
    "title": "主塔 -16 层",
    "name": "第 -16 层",
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
    "firstArrive": [
        "\t[H5魔塔作者]原版中，本层所有火焰会随机游走，并在触碰角色时造成伤害。\n考虑手机端适配，本复刻版没有让它们移动。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "12,13": {
            "trigger": null,
            "enable": true,
            "noPass": false,
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
                    "type": "setValue",
                    "name": "status:hp",
                    "operator": "-=",
                    "value": "700"
                },
                {
                    "type": "hide",
                    "remove": true
                },
                {
                    "type": "animate",
                    "name": "A15"
                }
            ]
        },
        "13,12": {
            "trigger": null,
            "enable": true,
            "noPass": false,
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
                    "type": "function",
                    "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.hp = Math.max(1, hero.hp - 700);\n});\ncore.updateStatusBar(true);\n}"
                },
                {
                    "type": "hide",
                    "remove": true
                },
                {
                    "type": "animate",
                    "name": "A15"
                }
            ]
        },
        "13,13": [
            {
                "type": "if",
                "condition": "(flag:VerboseHint===1)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(switch:A!==1)",
                        "true": [
                            {
                                "type": "confirm",
                                "text": "下楼后将立即与\"超级石头人\"强制战斗\n确认要下楼吗?",
                                "yes": [
                                    {
                                        "type": "setValue",
                                        "name": "switch:A",
                                        "value": "1"
                                    }
                                ],
                                "no": [
                                    {
                                        "type": "moveHero",
                                        "steps": [
                                            "backward:0"
                                        ]
                                    },
                                    {
                                        "type": "exit"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "changeFloor",
                "floorId": ":before",
                "stair": "upFloor"
            }
        ]
    },
    "changeFloor": {
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
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
    [20040, 87,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,492,  0,20042],
    [20040,  0,  0,  0,492,  0,  0,  0,  0,  0,  0,  0,  0,  0,20042],
    [20040,  0,  0,  0,  0,  0,  0,  0,  0,  0,492,  0,  0,  0,20042],
    [20040,  1,  1,  1,  1,  0,  0,492,  0,  0,  0,  0,  0,  0,20042],
    [20040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,492,  0,20042],
    [20040,  0,492,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,20042],
    [20040,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,20042],
    [20040,  0,  0,  0,  0,492,  1,  0,  1,  0,492,  0,  0,  0,20042],
    [20040,  0,  1,  1,  1,  1,  1,  0,  1,  0,  0,  0,  0,  0,20042],
    [20040,  0,  1,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,20042],
    [20040,  0,492,  0,  1,  1,  1,  1,  1,  0,  0,  0,  0,  0,20042],
    [20040,  0,  1,  1,  0,  0,  0,  0,492,  0,  0,  0,  0,493,20042],
    [20040,  0,  0,  0,  0,492,  0,  0,  0,  0,  0,  0,493, 88,20042],
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