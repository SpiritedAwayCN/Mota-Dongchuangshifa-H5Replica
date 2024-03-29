main.floors.MT64=
{
    "floorId": "MT64",
    "title": "主塔 64 层",
    "name": "第 64 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "037Dungeon03.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,1": [
            "\t[老人,man]\b[this]假若你攻击高于1100，魔防高于580，那你是有可能战胜boss的。@clue",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "7,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "7,13": {
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
    [20040,  1,  1,  1,  1,  1,121, 88,  0,  1,  1,  1,  1,  1,20042],
    [20040,  1,  1,520,520,520,  0,  0,  0,520,520,520,  1,  1,20042],
    [20040,  1,  1,520,  1,  1, 29,241, 29,  1,  1,520,  1,  1,20042],
    [20040,  1,  1,520,  1,  1,  1, 81,  1,  1,  1,520,  1,  1,20042],
    [20040,  1,  1,520,  1,  1, 29,241, 29,  1,  1,520,  1,  1,20042],
    [20040,  1,  1,520,  1,  1, 29,241, 29,  1,  1,520,  1,  1,20042],
    [20040,  1,  1,520,  1,  1,  1, 82,  1,  1,  1,520,  1,  1,20042],
    [20040,  1,  1,520,  1,  1, 29,241, 29,  1,  1,520,  1,  1,20042],
    [20040,  1,  1,520,  1,  1, 29,241, 29,  1,  1,520,  1,  1,20042],
    [20040,  1, 27, 27, 27,  1,  1, 83,  1,  1, 27, 27, 27,  1,20042],
    [20040,  1, 28, 28, 28,  1, 29,241, 29,  1, 28, 28, 28,  1,20042],
    [20040,  1, 34, 34, 34,  1,  0,  0,  0,  1, 34, 34, 34,  1,20042],
    [20040,  1,  1,  1,  1,  1,  0, 87,  0,  1,  1,  1,  1,  1,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}