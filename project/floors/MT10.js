main.floors.MT10=
{
    "floorId": "MT10",
    "title": "主塔 10 层",
    "name": "第 10 层",
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
        "13,2": [
            "\t[老人,man]\b[this]连击怪物每回合攻击n次。使勇士N倍承受怪物的单项攻击。",
            "\t[老人,man]\b[this]对于连击抑制方法，最好一次性解决。",
            {
                "type": "setValue",
                "name": "flag:v116_Chat",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "11,8": [
            "\t[老人,man]\b[this]那个物品是镐，是帮助你的道具。",
            {
                "type": "setValue",
                "name": "flag:v116_Chat",
                "operator": "+=",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "10,7": [
            {
                "type": "openDoor"
            }
        ],
        "4,3": [
            {
                "type": "openDoor"
            }
        ],
        "4,5": [
            {
                "type": "openDoor"
            }
        ],
        "4,9": {
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
            "data": [
                "\t[神秘老人,wizard]\b[this]控制着机关门的怪物你只能用这个特殊手段对它攻击",
                {
                    "type": "setValue",
                    "name": "item:dagger",
                    "operator": "+=",
                    "value": "2"
                },
                {
                    "type": "hide",
                    "remove": true
                }
            ]
        }
    },
    "changeFloor": {
        "13,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,9": {
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
    [20040,  3,  3,  3,  3,  3,  3,  3,  3, 27, 27,  3,  3, 88,20042],
    [20040, 27, 81,  0,209,  0,  3,  3, 28,216,216, 28,  3,121,20042],
    [20040, 34,  3,  0,385,216,  0,  3,  3,  3, 81,  3,  3, 81,20042],
    [20040,  3,  3,  3,  3,  3,205, 81,  0,  0,203,203,203,  0,20042],
    [20040, 34,  3,  0,385,216,  0,  3,382,  3,  3,  3,  3,210,20042],
    [20040, 28, 81,  0,209,  0,  3,  3,  0,210, 21, 21, 21, 21,20042],
    [20040,  3,  3,  3,  3,  3,  3,  3,  0,  0,385,  3,  3,  3,20042],
    [20040, 28,  3,  3, 31, 31,  0,  0,382,  0, 81,121,  0,  3,20042],
    [20040, 28,217,  3,125,  0, 87,205,  3,  3,  3,  3,206,  3,20042],
    [20040,  3, 27,  3,205,  3,  3, 81,  3,  0, 47,  3,206,  3,20042],
    [20040,216, 27,  3,205,  3, 31,205,  3,206,  3,  3, 31,  3,20042],
    [20040, 81,  3,  3,205,  3,  3, 27,  3,206, 31,206,206,  3,20042],
    [20040,216,  0,  0,  0,  3, 31,209,  3,  3,  3,  3,  3,  3,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}