main.floors.MTn50=
{
    "floorId": "MTn50",
    "title": "主塔 -50 层",
    "name": "第 -50 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "013Theme02.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "9,4": [
            {
                "type": "openDoor"
            }
        ],
        "8,4": [
            "\t[老人,man]\b[this]你的另一个同伴的金钱也可加你的能力值哦。@clue",
            "\t[老人,man]\b[this]还有哦，好久没有暗墙了......@clue",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "2,2": [
            "\t[仙子,fairy]\b[this]呼，终于有人来了，你来干嘛？",
            "\t[hero]\b[hero]解救国王。",
            "\t[仙子,fairy]\b[this]你就是那个勇士啊，那我就助你一步之力吧！",
            {
                "type": "function",
                "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.hp += 10000;\n\thero.atk += 20;\n\thero.def += 20\n});\ncore.updateStatusBar(true);\n}"
            },
            {
                "type": "animate",
                "name": "A08",
                "loc": "hero"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "4,2": [
            {
                "type": "openShop",
                "id": "itemShop",
                "open": true
            }
        ]
    },
    "changeFloor": {
        "7,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "7,13": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "2,11": [
            {
                "type": "setValue",
                "name": "flag:Fm50F_Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:Fm50F_Door===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            10
                        ]
                    }
                ]
            }
        ],
        "4,11": [
            {
                "type": "setValue",
                "name": "flag:Fm50F_Door",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:Fm50F_Door===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            10
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
    [20040,  2,  2,  2,  2,  2,571, 87,571,  2, 34,573,573, 28,20042],
    [20040,  2,124,  2,122,  2,  0,571,  0,  2, 34,  2, 28,  2,20042],
    [20040,  2, 86,  2, 86,  2,571,  2,571,  2, 34,  2,  2,  2,20042],
    [20040,  2,571,  0,571,  0,  0,  2,121,  2,  0,574,574,574,20042],
    [20040,  2,  2,  2,  2,  2,  2,  2,  0,  2,  2,  2,  2,  0,20042],
    [20040,  2, 27,  2, 28,  2, 33, 33, 33,  0,430,430,  0,  0,20042],
    [20040,  2, 27,  2, 28,  2,  0,  2,  2,572,  2,  2,574,  2,20042],
    [20040,  2, 27,  2, 28,  2, 33,  2, 27, 27, 27,  2,  0,  2,20042],
    [20040,  2, 27,573, 28,  2, 33,  2,  2,  2,  2,  2,574,  2,20042],
    [20040,  2,  2,451,  2,  2, 33,  0,  0,572,572,  0,  0,  0,20042],
    [20040,  2,573,  0,573,  2,  2,430,  2,  2,430,  2,  2,  2,20042],
    [20040,  2,  2,430,  2,  2,  0,571,  0,  2, 27, 34, 28,  2,20042],
    [20040, 49,573,  0,573,  0,571, 88,571,  2,  2,  2,  2,  2,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "underGround": true,
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
]
}