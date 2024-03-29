main.floors.MT33=
{
    "floorId": "MT33",
    "title": "主塔 33 层",
    "name": "第 33 层",
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
    "bgm": "060Slow03.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "2,1": [
            "\t[老人,man]\b[this]天哪，你知道你闯过了多少机关么？@clue",
            "\t[老人,man]\b[this]16个可随时要你命的机关！@clue",
            "\t[hero]\b[hero]那些机关在哪？",
            "\t[老人,man]\b[this]这个魔塔是个计时魔塔，每单数层都有一个计时器，你只能在奇数层最多呆一分钟，多了就会死。@clue",
            "\t[H5复刻作者]注：这个特性没有移植到H5版，本复刻版不会计时。@clue",
            "\t[hero]\b[hero]哦。我可以走了么？",
            "\t[老人,man]\b[this]有惊无险，给你15把黄钥匙，3把蓝钥匙，快去开郁闷你很久的N扇门吧！@clue",
            {
                "type": "setValue",
                "name": "item:yellowKey",
                "operator": "+=",
                "value": "15"
            },
            {
                "type": "setValue",
                "name": "item:blueKey",
                "operator": "+=",
                "value": "3"
            },
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
        ],
        "3,8": [
            {
                "type": "openDoor"
            }
        ],
        "11,13": [
            {
                "type": "openDoor"
            }
        ]
    },
    "changeFloor": {
        "7,13": {
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
    [20040, 88,121,  0,218,  3,  3,  3,  3,  3,  3,  3,  3,  3,20042],
    [20040,246,  3,  3,218,  0,  0,214, 81,214,  3, 27, 27,  3,20042],
    [20040,246,246,  0,218,  3,  0,  0,  3,  0,  3, 27, 27,  3,20042],
    [20040,  3,  3, 81,  3,  3,  3,  3,  3,408,  3,410,410,  3,20042],
    [20040,  0,  0,218,  0,  3,215,  0,408,408,  3,406,406,  3,20042],
    [20040,224,  3,  0,  3,  3, 81,  3,  3,  3,  3,407,407,  3,20042],
    [20040,224,  3,406, 58,  3,215,  0,  0,246, 81,246,  0,  3,20042],
    [20040,224,  3,385,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,20042],
    [20040, 34,  3, 58,406,  0,  0,  0,408,408,408,  0,408,408,20042],
    [20040,224,  3,  3,  3,  3,  3,  0, 34,  3,  0,  3,  3,408,20042],
    [20040,224,  3, 59,407,407, 81,246,  3,  3,215, 28,  3,  0,20042],
    [20040,224,  3,  3,  3,  3,  3,  0,  0,214,  0,  3,  3,410,20042],
    [20040, 34,224,224,224,  0,  0, 87,  0,  3,  0,385,  0,334,20042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "bgmap": [

],
    "fgmap": [

]
}