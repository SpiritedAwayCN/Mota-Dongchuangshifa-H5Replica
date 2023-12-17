main.floors.MTn15=
{
    "floorId": "MTn15",
    "title": "主塔 -15 层",
    "name": "第 -15 层",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "012Theme01.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "13,9": [
            "\t[老人,man]\b[this]激光怪物是领域加强，同一行同一列受到攻击100点。",
            {
                "type": "setValue",
                "name": "flag:v116_Chat",
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
        "12,13": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
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
    [20040, 88,  0, 31, 32, 34, 33,  0,  0,  2,  2,  2,  2,  2,20042],
    [20040,  0,  1,  1,  1,  1,  2,  0,  2,  2,254,  2, 30,  2,20042],
    [20040,  1,  1,250,212,430,254,  0,254,430,  0,  0,212,  2,20042],
    [20040,  1,250,212,  1,  1,  2,  0,  2,  2,254,  2, 30,  2,20042],
    [20040,  1,212,  1,  1,  0,  0,  0,  0,  0,  2,  2,  2,  2,20042],
    [20040,  1, 30, 30,  1,  0,421,435,421,  0,  1, 29, 29,  1,20042],
    [20040,  1,  1,  1,  1,  0,435,219,435,  0,  1, 29,220,  1,20042],
    [20040, 33,435,234,  0,  0,421,435,421,  0,  1,  1,430,  1,20042],
    [20040,  3,  3,  3,  3,  0,  0,  0,  0,220,430,220, 32,121,20042],
    [20040,  3, 21, 27, 32,  3, 21,  2,  2,  2,  2, 32, 34, 32,20042],
    [20040,  3, 21, 27, 32,430,244,244,  0,244,244,  0, 32,  2,20042],
    [20040,  3, 21, 27, 32,  3,  3,  3,  3,430,  3, 33,  0,  2,20042],
    [20040,  3,  3,  3,  3,  3, 33,441,441,442,  3,  2, 87,  2,20042],
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