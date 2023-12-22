main.floors.MTn70=
{
    "floorId": "MTn70",
    "title": "主塔 -70 层",
    "name": "第 -70 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "020Field03.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,11": [
            "\t[老人,man]\b[this]知道为什么F73、74、75层小了一圈？因为里面藏有血瓶，你知道该做什么了么？",
            {
                "type": "function",
                "function": "function(){\nvar actions = core.searchBlock(\"X20007\", \"MT73\").map(function (block) {\n\treturn { \"type\": \"setBlock\", \"number\": \"redPotion\", \"loc\": [block.x, block.y], \"floorId\": \"MT73\" };\n});\ncore.searchBlock(\"X20007\", \"MT74\").forEach(block => {\n\tactions.push({ \"type\": \"setBlock\", \"number\": \"redPotion\", \"loc\": [block.x, block.y], \"floorId\": \"MT74\" });\n});\ncore.searchBlock(\"X20007\", \"MT75\").forEach(block => {\n\tactions.push({ \"type\": \"setBlock\", \"number\": \"redPotion\", \"loc\": [block.x, block.y], \"floorId\": \"MT75\" });\n});\ncore.insertAction(actions);\n}"
            },
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "7,12": {
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
        "13,6": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    8000
                ]
            }
        ],
        "1,6": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    8000
                ]
            }
        ],
        "4,4": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    6125
                ]
            }
        ],
        "4,3": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    6125
                ]
            }
        ],
        "5,4": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    6125
                ]
            }
        ],
        "9,4": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    6125
                ]
            }
        ],
        "10,4": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    6125
                ]
            }
        ],
        "10,3": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "potion",
                    6125
                ]
            }
        ],
        "6,12": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    6,
                    6,
                    0
                ]
            }
        ],
        "8,12": [
            {
                "type": "insert",
                "name": "DynamicPotion",
                "args": [
                    "gem",
                    6,
                    6,
                    0
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
    [20040,  2,  2,  2,  2,  2,  2, 88,  2,  2,  2,  2,  2,  2,20042],
    [20040,  2,  0,590,  0,  0,  2,243,  2,  0,  0,590,  0,  2,20042],
    [20040,  2,588,  2,454,  2,  2,242,  2,  2,454,  2,588,  2,20042],
    [20040,  2,588,  2,454,454,  2,434,  2,454,454,  2,588,  2,20042],
    [20040,  2,  0,  2,  2,  0,  0,590,  0,  0,  2,  2,  0,  2,20042],
    [20040,454,588,  2, 27, 28, 34,  2, 34, 28, 27,  2,588,454,20042],
    [20040,  2,  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0,  2,20042],
    [20040,  2,589,589,  0,  0,587,  2,587,  0,  0,589,589,  2,20042],
    [20040,  2,  2,430,  2,  2,587,  2,587,  2,  2,430,  2,  2,20042],
    [20040,  2, 27, 27, 27,  2,587,  2,587,  2, 27, 27, 27,  2,20042],
    [20040,  2, 28, 28, 28,  2,  0,121,  0,  2, 28, 28, 28,  2,20042],
    [20040,  2, 34, 34, 34,  2,455, 87,455,  2, 34, 34, 34,  2,20042],
    [20040,  2,  2,  2,  2,  2,339,339,339,  2,  2,  2,  2,  2,20042],
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