main.floors.MTn2=
{
    "floorId": "MTn2",
    "title": "主塔 -2 层",
    "name": "第 -2 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "bgm.mp3",
    "weather": null,
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "8,12": [
            {
                "type": "openDoor"
            }
        ],
        "8,7": [
            {
                "type": "openDoor"
            }
        ],
        "4,10": [
            {
                "type": "openDoor"
            }
        ],
        "7,0": [
            {
                "type": "confirm",
                "text": "有一些关于本层通过方式的提示，是否查看？\n(多次查看可能失去探索的乐趣)",
                "yes": [
                    "\t[H5复刻作者]本层拦路的墙会在击败42F领袖时自动打开，\n也可使用破墙工具提前破开。",
                    "\t[H5复刻作者]到达-3F角色全部能力将被重设为固定值，\n且失去全部的黄蓝红钥匙、异常状态解药。\n请合理规划资源！",
                    "\t[H5复刻作者]此外，本层有3个暗墙，其中一个可能在后续流程较为关键，请留意。"
                ],
                "no": []
            }
        ],
        "1,13": [
            {
                "type": "if",
                "condition": "(flag:VerboseHint&&(switch:A!==1))",
                "true": [
                    {
                        "type": "confirm",
                        "text": "下楼后角色的各项能力将设为固定值，\n且丢失所有的黄蓝红钥匙与异常状态解药。\n建议先卸下全部的装备，是否确认下楼？",
                        "yes": [
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            }
                        ],
                        "no": [
                            {
                                "type": "exit"
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
        "7,1": {
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
    [20040,20041,20041,20041,20041,20041,20041,129,20041,20041,20041,20041,20041,20041,20042],
    [20040,  3,  3,  3,  3,  3,  3, 87,  3,  3,  3,  3,  3,  3,20042],
    [20040,  3, 23, 32, 32, 32,432,  0,432, 32, 32, 32, 23,  3,20042],
    [20040,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,20042],
    [20040,  0,  3,  0, 28, 29,  3,250,  3, 29,  0,  0, 29,  3,20042],
    [20040,435,431,435, 28, 29,  3,250,  3, 34,  3,234, 34,  3,20042],
    [20040,  0,  3,  0, 28, 29,  3,  0,  3, 28,  3,  3, 28,  3,20042],
    [20040,  0,  3,  3,  3,  3,  3,250,385, 27,  0,  3, 27,234,20042],
    [20040,234,  0,  0,  0,  0,  3,  0,  3,  3,  0,  3,  3,  0,20042],
    [20040,430,  3,  3,  3,  0,430,250,431,234,234,  3,  0,234,20042],
    [20040,435, 27, 31,385,  0,  3,  0,  3,  3,  3,  3,  0,  3,20042],
    [20040,436, 27, 31,  3,  3,  3,250,  3,  0,  0,234,  0, 33,20042],
    [20040,  3,  3,  3,  3,  0,250,  0,385,  0,  3,  3,  3,  3,20042],
    [20040, 88,  0,250,  0,250,  3,  3,  3,  0, 27, 28, 34, 29,20042],
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