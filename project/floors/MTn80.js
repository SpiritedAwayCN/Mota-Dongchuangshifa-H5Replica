main.floors.MTn80=
{
    "floorId": "MTn80",
    "title": "主塔 -80 层",
    "name": "第 -80 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "000.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,2": [
            {
                "type": "choices",
                "text": "\t[老人,man]给我800塔币，帮你提升宝石和血瓶能力",
                "choices": [
                    {
                        "text": "好的",
                        "need": "status:money>=800",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "status:money",
                                "operator": "-=",
                                "value": "800"
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.values.redGem = 10;\ncore.values.blueGem = 10;\ncore.values.greenGem = 10;\ncore.values.yellowGem = 8;\ncore.values.redPotion = core.getFlag(\"PotionLessValue\", 0) ? 900 : 1500;\ncore.values.bluePotion = core.getFlag(\"PotionLessValue\", 0) ? 1700 : 2500;\ncore.values.yellowPotion = core.getFlag(\"PotionLessValue\", 0) ? 2700 : 3500;\ncore.values.greenPotion = core.getFlag(\"PotionLessValue\", 0) ? 3550 : 4200;\n}"
                            }
                        ]
                    },
                    {
                        "text": "不要",
                        "action": []
                    },
                    {
                        "text": "稍后再来",
                        "action": [
                            {
                                "type": "exit"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:PotionLessValueDisabled!==1)",
                "true": [
                    {
                        "type": "tip",
                        "text": "血瓶增益相关难度选项已生效，已锁定！"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:PotionLessValueDisabled",
                        "value": "1"
                    }
                ]
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
        "7,13": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "6,7": [
            "\t[hero]\b[hero]哇，好幸运，护符就这样捡到了！"
        ],
        "9,13": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    10000
                ]
            }
        ],
        "5,13": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    10,
                    10,
                    10
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
    [20040, 24,249,249,249,  0,  0, 87,  0,  0,249,249,249, 24,20042],
    [20040, 24,421,421,421,421,421,121,421,421,421,421,421, 24,20042],
    [20040,421,421, 27, 28,  0,421,599,421,  0, 28, 27,421,421,20042],
    [20040, 34,421, 27, 28,600,421,600,421,600, 28, 27,421, 34,20042],
    [20040, 34,249,421,421,430,421,249,421,430,421,421,249, 34,20042],
    [20040,421,249,  0,  0,599,  0,  0,  0,599,  0,  0,249,421,20042],
    [20040,421,421,  0,  0,421,541,  0,  0,421,  0,  0,421,421,20042],
    [20040, 27,421,603,421,421,421,603,421,421,421,603,421, 27,20042],
    [20040, 31,421,603,421, 27, 27,  0, 31, 31,421,603,421, 31,20042],
    [20040, 28,421,  0,421, 28, 28,  0, 32, 32,421,  0,421, 28,20042],
    [20040, 32,421,603,421, 30, 30,  0, 34, 34,421,603,421, 32,20042],
    [20040,249,421,603,421, 29, 29,  0, 33, 33,421,603,421,249,20042],
    [20040,249,  0,  0,421,455,  0, 88,  0,454,421,  0,  0,249,20042],
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