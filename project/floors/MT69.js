main.floors.MT69=
{
    "floorId": "MT69",
    "title": "主塔 69 层",
    "name": "第 69 层",
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
        "7,12": [
            "\t[杰克,thief]\b[this]咦？你还没死？",
            "\t[hero]\b[hero]欠扁！我能死么？",
            "\t[杰克,thief]\b[this]不说这个了,晦气.你看见我的弟弟了么？",
            "\t[hero]\b[hero]不知道，偷走了我的幸运金币后就没看见他。",
            "\t[杰克,thief]\b[this]哎，小偷就是小偷。",
            "\t[hero]\b[hero](想)你还不是一样.....",
            "\t[杰克,thief]\b[this]我偷来了2个武器，送你用吧。",
            "\t[杰克,thief]\b[this]至于幸运金币......以后再说吧。",
            "\t[hero]\b[hero]喂...算了。",
            {
                "type": "setValue",
                "name": "item:I546",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:I547",
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
        "7,13": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "13,13": {
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
    [20040,  3, 27, 27, 28, 28, 34,530, 34, 28, 28, 27, 27,  3,20042],
    [20040,  3,  3,  3,  3,  3,  3, 81,  3,  3,  3,  3,  3,  3,20042],
    [20040, 27,  3, 28,  3,  0, 34,521, 34,  0,  3, 28,  3, 27,20042],
    [20040, 27, 32,530, 81,521,  3,  3,  3,521, 81,530, 32, 27,20042],
    [20040, 27, 28, 28,  3,  0,  3,  3,  3,  0,  3, 28, 28, 27,20042],
    [20040,  3,  3,  3,  3,  0,  3,  3,  3,  0,  3,  3,  3,  3,20042],
    [20040, 27,  3, 28,  3,  0, 34,  3, 34,  0,  3, 28,  3, 27,20042],
    [20040, 27, 32,522, 81,521, 34,  3, 34,521, 81,522, 32, 27,20042],
    [20040, 27, 28, 28,  3,  3, 34,528, 34,  3,  3, 28, 28, 27,20042],
    [20040,  3,  3, 81,  3,  3,  3, 83,  3,  3,  3, 81,  3,  3,20042],
    [20040,339,  0,530,  0,  3, 21, 21, 21,  3,  0,530,  0,339,20042],
    [20040,339,  0,  0,  0,  3,  0,123,  0,  3,  0,  0,  0,339,20042],
    [20040,  0,  0, 29, 33,  3,  0, 88,  0,  3, 33, 29,  0, 87,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}