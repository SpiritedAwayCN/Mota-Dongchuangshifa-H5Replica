main.floors.MTCastle1=
{
    "floorId": "MTCastle1",
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
    "bgm": "mine.ogg",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "13,7": {
            "trigger": "action",
            "enable": true,
            "noPass": true,
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
                {
                    "type": "vibrate",
                    "direction": "horizontal",
                    "time": 2000,
                    "speed": 10,
                    "power": 10
                },
                {
                    "type": "screenFlash",
                    "color": [
                        255,
                        255,
                        255,
                        1
                    ],
                    "time": 500,
                    "times": 2
                },
                {
                    "type": "animate",
                    "name": "A11",
                    "loc": "hero"
                },
                "\t[十字架,I585]\b[this]你得到了神圣的认可，可以获得圣十字架！！",
                {
                    "type": "setValue",
                    "name": "flag:s176_CrossingAdmit",
                    "value": "1"
                },
                {
                    "type": "hide",
                    "remove": true
                }
            ]
        }
    },
    "changeFloor": {
        "1,7": {
            "floorId": "MTCastle4",
            "loc": [
                13,
                7
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
    [20040,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,20042],
    [20040,10041,421,564,  0,567,567,  0,568,  0,564,  0, 27,10041,20042],
    [20040,10041, 28, 28,421,567,421,568, 27,421, 28,421, 32,10041,20042],
    [20040,10041,421,421,421, 27,421,  0,421,421,421,421,564,10041,20042],
    [20040,10041,566,  0,566,  0,421,  0, 28,  0, 28,421, 32,10041,20042],
    [20040,10041,  0,421,421,421,421,421,421,566,566, 28,564,10041,20042],
    [20040, 92,558, 31,421,568,568,568,421,  0,421,  0, 32,585,20042],
    [20040,10041,  0,421,421,  0,421,  0,421, 27,421,421,564,10041,20042],
    [20040,10041,558, 31,421,567,421, 29,421,567,567,421, 32,10041,20042],
    [20040,10041,  0,421,421,567,421, 29,  0, 28,  0, 27,564,10041,20042],
    [20040,10041,566,  0,566, 27,421,421,421,421,421, 27, 32,10041,20042],
    [20040,10041,421,421,421, 27,421, 33, 33,564,568,  0,421,10041,20042],
    [20040,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,143,143,143,143,143,143,143,143,143,143,143,  0,  0],
    [  0,  0,143,143,143,143,143,143,143,143,143,143,143,  0,  0],
    [  0,  0,143,143,143,143,143,143,143,143,143,143,143,  0,  0],
    [  0,  0,143,143,143,143,143,143,143,143,143,143,143,  0,  0],
    [  0,  0,143,143,143,143,143,143,143,143,143,143,143,  0,  0],
    [  0,143,143,143,143,143,143,143,143,143,143,143,143,143,  0],
    [  0,  0,143,143,143,143,143,143,143,143,143,143,143,  0,  0],
    [  0,  0,143,143,143,143,143,143,143,143,143,143,143,  0,  0],
    [  0,  0,143,143,143,143,143,143,143,143,143,143,143,  0,  0],
    [  0,  0,143,143,143,143,143,143,143,143,143,143,143,  0,  0],
    [  0,  0,143,143,143,143,143,143,143,143,143,143,143,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}