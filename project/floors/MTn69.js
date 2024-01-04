main.floors.MTn69=
{
    "floorId": "MTn69",
    "title": "主塔 -69 层",
    "name": "第 -69 层",
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
        "9,9": [
            {
                "type": "confirm",
                "text": "要重置这些箱子吗?",
                "yes": [
                    {
                        "type": "function",
                        "function": "function(){\nvar actions = core.searchBlock(\"box\").map(function (block) {\n\treturn { \"type\": \"setBlock\", \"number\": 0, \"loc\": [block.x, block.y] };\n});\n\nvar box_locs = [\n\t[1, 9],\n\t[4, 9],\n\t[5, 9],\n\t[1, 10],\n\t[3, 10],\n\t[5, 10],\n\t[2, 11],\n\t[4, 11],\n\t[5, 11],\n\t[10, 11],\n\t[3, 12],\n\t[1, 13],\n\t[3, 13]\n];\nbox_locs.forEach(loc => {\n\tactions.push({ \"type\": \"setBlock\", \"number\": \"box\", \"loc\": [loc] })\n});\n\nactions.push({ \"type\": \"tip\", \"text\": \"箱子复原成功\" });\nconsole.log(actions);\ncore.insertAction(actions);\n}"
                    }
                ],
                "no": []
            }
        ],
        "6,6": {
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
                "\t[国王,N617]\b[this]这。",
                "\t[hero]\b[hero]我没有卷轴。",
                "\t[国王,N617]\b[this]我有！给你。",
                {
                    "type": "setValue",
                    "name": "item:I333",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "hide",
                    "remove": true
                }
            ]
        },
        "4,0": [
            {
                "type": "if",
                "condition": "(blockId:4,0===\"upPortal\")",
                "true": [
                    {
                        "type": "confirm",
                        "text": "为便于结局判定，进入后将丢失所有：\n背包中的血瓶、宝石、圣水、解药。\n且进入后将无法返回，是否前往？",
                        "yes": [
                            {
                                "type": "setValue",
                                "name": "item:redPotion",
                                "value": "0",
                                "norefresh": true
                            },
                            {
                                "type": "setValue",
                                "name": "item:bluePotion",
                                "value": "0",
                                "norefresh": true
                            },
                            {
                                "type": "setValue",
                                "name": "item:yellowPotion",
                                "value": "0",
                                "norefresh": true
                            },
                            {
                                "type": "setValue",
                                "name": "item:greenPotion",
                                "value": "0",
                                "norefresh": true
                            },
                            {
                                "type": "setValue",
                                "name": "item:redGem",
                                "value": "0",
                                "norefresh": true
                            },
                            {
                                "type": "setValue",
                                "name": "item:blueGem",
                                "value": "0",
                                "norefresh": true
                            },
                            {
                                "type": "setValue",
                                "name": "item:yellowGem",
                                "value": "0",
                                "norefresh": true
                            },
                            {
                                "type": "setValue",
                                "name": "item:greenGem",
                                "value": "0",
                                "norefresh": true
                            },
                            {
                                "type": "setValue",
                                "name": "item:bAtkGem",
                                "value": "0",
                                "norefresh": true
                            },
                            {
                                "type": "setValue",
                                "name": "item:bDefGem",
                                "value": "0",
                                "norefresh": true
                            },
                            {
                                "type": "setValue",
                                "name": "item:bMdefGem",
                                "value": "0",
                                "norefresh": true
                            },
                            {
                                "type": "setValue",
                                "name": "item:superPotion",
                                "value": "0",
                                "norefresh": true
                            },
                            {
                                "type": "setValue",
                                "name": "item:weakWine",
                                "value": "0",
                                "norefresh": true
                            },
                            {
                                "type": "setValue",
                                "name": "item:poisonWine",
                                "value": "0",
                                "norefresh": true
                            },
                            {
                                "type": "setValue",
                                "name": "item:curseWine",
                                "value": "0",
                                "norefresh": true
                            },
                            {
                                "type": "setValue",
                                "name": "item:superWine",
                                "value": "0",
                                "norefresh": true
                            },
                            {
                                "type": "setValue",
                                "name": "item:I334",
                                "value": "0",
                                "norefresh": true
                            },
                            {
                                "type": "changeFloor",
                                "floorId": "SecretPath",
                                "loc": [
                                    12,
                                    23
                                ],
                                "direction": "down"
                            }
                        ],
                        "no": []
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "10,9": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "7,12": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "13,10": [
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
    [20040,421,421,421,421,421,421,421,421,  2,  2,  2,  2,  2,20042],
    [20040,421,421,421,421,421,421,421,421,  2, 33, 33, 33,  2,20042],
    [20040,421,421,421,421,421,421,421,421,  2, 34, 34, 34,  2,20042],
    [20040,421,421,421,421,421,421,421,421,  2, 32, 32, 32,  2,20042],
    [20040,421,421,421,421,421,421,421,421,  2,  2,431,  2,  2,20042],
    [20040,  1,  1,  1,  1,  1,  0,  3,  3,  3,  3,  0,  3,  3,20042],
    [20040,  0,  0,  0,  0,  0,  0,  0,  0,588,588,588,  0,589,20042],
    [20040,  3,  3,243,  3,  3,  1,  1,  1,  1,  1,  1,  1,589,20042],
    [20040,169,  0,  0,169,169,  1,  0,  1,129, 87,  0,431,  0,20042],
    [20040,169,  0,169,  0,169,  1, 31, 31, 31, 31, 31,  1,455,20042],
    [20040,  0,169,  0,169,169,  1,  1,  1,  0,169,431,  1,  1,20042],
    [20040,  0,  0,169,  0, 24,  1, 88,587,587,  1, 34, 34, 34,20042],
    [20040,169,  0,169,  0,  0,  1, 27,  0,  1,  1,  1, 34,  1,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,143,143,143,143,143,143,143,143,  0,  0,  0,  0,  0,  0],
    [  0,143,143,143,143,143,143,143,143,  0,  0,  0,  0,  0,  0],
    [  0,143,143,143,143,143,143,143,143,  0,  0,  0,  0,  0,  0],
    [  0,143,143,143,143,143,143,143,143,  0,  0,  0,  0,  0,  0],
    [  0,143,143,143,143,143,143,143,143,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
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