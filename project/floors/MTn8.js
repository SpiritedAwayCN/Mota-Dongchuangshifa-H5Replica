main.floors.MTn8=
{
    "floorId": "MTn8",
    "title": "主塔 -8 层",
    "name": "第 -8 层",
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
        "2,1": [
            "\t[老人,man]\b[this]一些路面可能也会打开一些暗墙。@clue",
            "\t[H5复刻作者]原版中，一些路面走过若干次才会把一些墙变为暗墙；\n本复刻版删去了绝大部分该机制，相关的墙直接就是可以撞开的暗墙。@clue",
            "\t[H5复刻作者]但存在部分暗墙，其所对应的开启路面并不是直接可达的。\n对于这些暗墙，本复刻版只要经过了起对应的开启路面，便会自动倒下，不需要再人为撞击。@clue",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "1,4": [
            {
                "type": "openDoor"
            }
        ],
        "1,11": [
            "\t[老人,man]\b[this]收好！",
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
    "changeFloor": {
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "7,1": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "2,2": [
            "\t[I454] 一种新的血瓶，加HP量随机，不可道具化。",
            {
                "type": "function",
                "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n(hero_id == 0 ? core.status.hero : core.getFlag(\"hero0\")).hp += 9000;\n(hero_id == 1 ? core.status.hero : core.getFlag(\"hero1\")).hp += 9000;\ncore.updateStatusBar(true);\n}"
            }
        ],
        "3,7": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    897
                ]
            }
        ],
        "3,8": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    897
                ]
            }
        ],
        "8,6": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    897
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
    [20040, 87,121,385,385,385,385, 88,  2, 21,  2, 21,  2, 69,20042],
    [20040,  0,454,440,  0,  0,  0,244,  2, 27, 29, 28,  2,443,20042],
    [20040,385, 34,385,442,385,385,  0,  2,430,  2,430,  1,443,20042],
    [20040,  1, 34,385, 30,385, 33,214,  0,214,  0,214,  0,439,20042],
    [20040,  0,442,385,439,385,385,385,218,  2,  2,  2,  2,  2,20042],
    [20040,214,385,385,  0,244,  0,385,454,  2,  0,234,  0,  2,20042],
    [20040,214,385,454,246,  1,244,385,218,234,234,234, 41,  2,20042],
    [20040, 28,385,454,246,  1, 32,244,  0,  2,  0,234,  0,  2,20042],
    [20040, 28,214,214,  1, 28,  1, 32,218,  2,  2,  2,  2,  2,20042],
    [20040,  1,  1,  1, 27, 29, 30,  1,  0,  0,214,  0,214,  0,20042],
    [20040,121,250,  0,  1,212,  1,  0,218,  1,430,  1,430,  1,20042],
    [20040,  1,  0,  0,  0,212,  0, 29, 29,  1, 27, 29, 28,  1,20042],
    [20040,  1,  1,  0,  2,  2,  2,  2, 29,  1, 21,  1, 21,  1,20042],
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