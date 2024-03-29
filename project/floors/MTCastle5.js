main.floors.MTCastle5=
{
    "floorId": "MTCastle5",
    "title": "魔塔城堡",
    "name": "魔塔城堡",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "mine.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,3": [
            "\t[生命老人,wizard]\b[this]你使用毁灭卷轴过来的么。",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "7,13": {
            "floorId": "MTCastle0",
            "loc": [
                10,
                19
            ]
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
    [20040, 27, 27, 27,141,141,141,141,141,141,141, 28, 28, 28,20042],
    [20040, 27, 27, 27,141,141,141,141,141,141,141, 28, 28, 28,20042],
    [20040, 27, 27, 27,141,  0,  0,125,  0,  0,141, 28, 28, 28,20042],
    [20040,141,141,141,141,141,141,  0,141,141,141,141,141,141,20042],
    [20040,141,141,141,141,141,141,  0,141,141,141,141,141,141,20042],
    [20040, 30, 30, 30,141,  0,  0,  0,  0,  0,141, 29, 29, 29,20042],
    [20040, 30, 30, 30,141,141,141,  0,141,141,141, 29, 29, 29,20042],
    [20040, 30, 30, 30,141,141,141,  0,141,141,141, 29, 29, 29,20042],
    [20040,141,141,141,141,141,  0,  0,  0,141,141,141,141,141,20042],
    [20040,141,141,141,141,  0,141,141,141,  0,141,141,141,141,20042],
    [20040,141,  0,  0,  0,  0,141,141,141,  0,  0,  0,  0,141,20042],
    [20040,141,141,141,141,141,141,  0,141,141,141,141,141,141,20042],
    [20040,141,141,141,141,141,141, 93,141,141,141,141,141,141,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,143,143,143,143,143,143,143,143,143,143,143,143,143,  0],
    [  0,143,143,143,143,143,143,143,143,143,143,143,143,143,  0],
    [  0,143,143,143,143,143,143,143,143,143,143,143,143,143,  0],
    [  0,143,143,143,143,143,143,143,143,143,143,143,143,143,  0],
    [  0,143,143,143,143,143,143,143,143,143,143,143,143,143,  0],
    [  0,143,143,143,143,143,143,143,143,143,143,143,143,143,  0],
    [  0,143,143,143,143,143,143,143,143,143,143,143,143,143,  0],
    [  0,143,143,143,143,143,143,143,143,143,143,143,143,143,  0],
    [  0,143,143,143,143,143,143,143,143,143,143,143,143,143,  0],
    [  0,143,143,143,143,143,143,143,143,143,143,143,143,143,  0],
    [  0,143,143,143,143,143,143,143,143,143,143,143,143,143,  0],
    [  0,143,143,143,143,143,143,143,143,143,143,143,143,143,  0],
    [  0,143,143,143,143,143,143,143,143,143,143,143,143,143,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}