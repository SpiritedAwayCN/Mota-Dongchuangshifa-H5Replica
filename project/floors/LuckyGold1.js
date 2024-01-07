main.floors.LuckyGold1=
{
    "floorId": "LuckyGold1",
    "title": "魔法楼阁",
    "name": "魔法楼阁",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "mine.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,13": [
            {
                "type": "confirm",
                "text": "离开将强制扣除所有角色的全部金币/经验\n是否继续？",
                "yes": [
                    {
                        "type": "function",
                        "function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.money = 0;\n\thero.exp = 0;\n});\ncore.updateStatusBar(true);\n}"
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "MTWorld",
                        "loc": [
                            15,
                            3
                        ]
                    }
                ],
                "no": []
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
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040,  1,  1,  1,  1,  1,201, 87,201,  1,  1,  1,  1,  1,20042],
    [20040,  1, 25, 25, 25,  1,  0, 22,  0,  1, 25, 25, 25,  1,20042],
    [20040,  1,  1,248,  1,  1,  1,439,  1,  1,  1,248,  1,  1,20042],
    [20040,  1, 22,380, 22,  1,204,  0,204,  1, 22,380, 22,  1,20042],
    [20040,  1,  1,379,  1,  1,  1,203,  1,  1,  1,379,  1,  1,20042],
    [20040,  1, 21,377, 21,  1, 21,382, 21,  1, 21,377, 21,  1,20042],
    [20040,  1,  1,378,  1,  1,  1,381,  1,  1,  1,378,  1,  1,20042],
    [20040,  1, 21,202, 21,  1, 21,380, 21,  1, 21,202, 21,  1,20042],
    [20040,  1,  1,500,  1,  1,  1,379,  1,  1,  1,500,  1,  1,20042],
    [20040,439,  0, 23, 23,  0,202,377,202,  0, 23, 23,  0,439,20042],
    [20040,500,  1,  1,  1,  1,378,  1,378,  1,  1,  1,  1,500,20042],
    [20040,439,248, 24, 24,  1,  0,201,  0,  1, 24, 24,248,439,20042],
    [20040,  1,  1,  1,  1,  1,201, 88,201,  1,  1,  1,  1,  1,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}