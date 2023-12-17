main.floors.MTn9=
{
    "floorId": "MTn9",
    "title": "主塔 -9 层",
    "name": "第 -9 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "guitar.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "9,5": [
            "\t[老人,man]\b[this]这种钻石会随机增加你的攻防魔。",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "8,1": [
            {
                "type": "choices",
                "text": "\t[老人,man]你认为最讨厌的属性是什么？",
                "choices": [
                    {
                        "text": "破甲or反击",
                        "action": [
                            "\t[老人,man]\b[this]赞成！这两个属性会永远费你血。支一个招：去掉一部分攻/防装备。我想你以前一定用过这个办法，没错吧。不过放心，以后这些怪物会变少的，你就不会这么麻烦了。"
                        ]
                    },
                    {
                        "text": "魔攻or模仿",
                        "action": [
                            "\t[老人,man]\b[this]想法独特！魔攻的怪物的攻击不算太变态。主要是模仿。对付模仿怪物的窍门：去掉装备物品的防御。假如在-9F你是用困难打过的，那你一定用了这个办法，对么？",
                            {
                                "type": "if",
                                "condition": "flag:VerboseHint",
                                "true": [
                                    "\t[H5复刻作者]对NPC的补充说明：对付模仿怪物的窍门——通过调整装备，控制攻防差到合适的数值。"
                                ]
                            }
                        ]
                    },
                    {
                        "text": "中毒or衰弱",
                        "action": [
                            "\t[老人,man]\b[this]唉，解毒药及解衰药在-6F很全了，你还害怕这两个属性，你浪费了这个对话！"
                        ]
                    }
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "9,13": [
            "\t[仙子,fairy]\b[this]谢谢你救了我，这里有5点攻击，送给你吧。",
            {
                "type": "function",
                "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n(hero_id == 0 ? core.status.hero : core.getFlag(\"hero0\")).atk += 5;\n(hero_id == 1 ? core.status.hero : core.getFlag(\"hero1\")).atk += 5;\ncore.updateStatusBar(true);\n}"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "11,13": [
            "\t[仙子,fairy]\b[this]谢谢你救了我，这里有9点防御，送给你吧。",
            {
                "type": "function",
                "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n(hero_id == 0 ? core.status.hero : core.getFlag(\"hero0\")).def += 9;\n(hero_id == 1 ? core.status.hero : core.getFlag(\"hero1\")).def += 9;\ncore.updateStatusBar(true);\n}"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "13,13": [
            "\t[仙子,fairy]\b[this]谢谢你救了我，这里有20点魔防，送给你吧。",
            {
                "type": "function",
                "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n(hero_id == 0 ? core.status.hero : core.getFlag(\"hero0\")).mdef += 20;\n(hero_id == 1 ? core.status.hero : core.getFlag(\"hero1\")).mdef += 20;\ncore.updateStatusBar(true);\n}"
            },
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "7,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "3,5": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {
        "9,1": [
            "\t[红色史莱姆,redSlime]\b[this]呵呵，你死定了！",
            "\t[hero,hero]\b[hero]不就是个连身子都没有的小头么......",
            "\t[红色史莱姆,redSlime]\b[this]哼，你不就是一个被人当作是怪物的勇士么......",
            "\t[hero,hero]\b[hero]又来了，作者懒得弄选项了，我只接说吧，你又来了！我不会上当了！",
            "\t[红色史莱姆,redSlime]\b[this]哼，勇士，你将死在我的手里！",
            "\t[hero,hero]\b[hero]该死的是你！",
            "\t[红色史莱姆,redSlime]\b[this]哼，再给你你一次机会，不过，你死定的！因为我是\r[#FF8080]红色史莱姆！\r",
            {
                "type": "setEnemy",
                "id": "redSlime",
                "name": "hp",
                "value": "510",
                "norefresh": true
            },
            {
                "type": "setEnemy",
                "id": "redSlime",
                "name": "atk",
                "value": "309",
                "norefresh": true
            },
            {
                "type": "setEnemy",
                "id": "redSlime",
                "name": "def",
                "value": "308"
            },
            {
                "type": "callBook"
            },
            "\t[hero,hero]\b[hero]明明是红头怪嘛。"
        ]
    },
    "afterBattle": {
        "9,1": [
            {
                "type": "setEnemy",
                "id": "redSlime",
                "name": "hp",
                "value": "45"
            },
            {
                "type": "setEnemy",
                "id": "redSlime",
                "name": "atk",
                "value": "20"
            },
            {
                "type": "setEnemy",
                "id": "redSlime",
                "name": "def",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {
        "8,9": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    100
                ]
            }
        ],
        "9,9": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    100
                ]
            }
        ],
        "10,9": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    100
                ]
            }
        ],
        "11,9": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    100
                ]
            }
        ],
        "12,8": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    1021
                ]
            }
        ],
        "10,5": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    1,
                    1,
                    0
                ]
            }
        ],
        "12,7": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    1,
                    1,
                    2
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
    [20040,  2, 22, 27,246, 29,  1, 87,121,202,202,  2, 29, 29,20042],
    [20040,  2,  2,  2,  0,  1,  1,212,  1,  1,202,  2,218,  2,20042],
    [20040, 21,  2,  0,  0,250,389,212,  0,202,202,  2,218,218,20042],
    [20040,218,  2,  0,  3,  3,  3,  3, 34,  2,  2,  2,  2,218,20042],
    [20040,  0,  0, 88,  3, 33, 33,  3, 34,121,455,  0,244,244,20042],
    [20040, 23,  2,  0,  3,  3,246,  3, 34,  1,  1,  1,  1, 33,20042],
    [20040, 23,  2,214,  0,214,  0,214,  0,  1, 28,  1,455,438,20042],
    [20040, 23,  2,  0,  2,  0,  1,  1,  1,  1,214,214,454,438,20042],
    [20040,246,246,246,  2,  0,  0,  1,454,454,454,454,  3, 34,20042],
    [20040, 27,  2,  2,  2,  2,  0,430,430,  0,  3,  0,  3,438,20042],
    [20040, 28,  2, 34,  2,430,  0,  0,  3,212,  3,212,  3,438,20042],
    [20040, 30,  2,430,430,430,  1,  0,  3,  0,  3,  0,  3,  0,20042],
    [20040, 29,  2, 34,430,430,  1,  0,  3,124,  3,124,  3,124,20042],
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