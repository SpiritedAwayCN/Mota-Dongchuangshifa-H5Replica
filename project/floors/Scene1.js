main.floors.Scene1=
{
    "floorId": "Scene1",
    "title": "国家",
    "name": "国家",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "mine.ogg",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "setText",
            "time": 60
        },
        "\t[神父,N580]\b[this,9,11]欢迎回来！国家已经狂欢了，快去吧！",
        {
            "type": "pauseBgm"
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 1000,
            "keep": true
        },
        {
            "type": "playSound",
            "name": "157-Skill01.ogg",
            "stop": true,
            "pitch": 70
        },
        "\r[#ff8080]结局10：无奈的奈落\n国家保下来了，在人们狂欢的时候，国王确神秘失踪了……终于，在5天后，在乱草中找到国王的尸体……周围全是魔塔怪物的死尸……",
        "\r[#ff8080]国家又陷入一片恐慌……仿佛又听见了怪物的狞笑……国家……最终未能逃脱魔塔的魔抓……预言是真的，国家是保不住的……",
        "\r[#ff8080]几年后……",
        {
            "type": "setHeroOpacity",
            "opacity": 0,
            "time": 0
        },
        {
            "type": "hide",
            "loc": [
                [
                    9,
                    11
                ]
            ],
            "remove": true
        },
        {
            "type": "show",
            "loc": [
                [
                    4,
                    14
                ]
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    4,
                    13
                ]
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    3,
                    12
                ]
            ]
        },
        {
            "type": "show",
            "loc": [
                [
                    5,
                    12
                ]
            ]
        },
        {
            "type": "resumeBgm"
        },
        {
            "type": "setCurtain",
            "time": 2000
        },
        "\t[仙子,fairy]\b[this,4,13]国家不再存在了……",
        "\t[战争魔王,yellowKing]\b[this,4,14]就是这样。",
        "\t[仙子,fairy]\b[this,4,13]是的",
        {
            "type": "if",
            "condition": "(flag:s172_PerfectEnding===1)",
            "true": [
                "\t[战争魔王,yellowKing]\b[this,4,14]勇士太傻了……",
                "\t[仙子,fairy]\b[this,4,13]一个不值得同情的国家……",
                "\t[战争魔王,yellowKing]\b[this,4,14]是啊，所有恶习都降临到了这个国家上，勇士做的真不值。",
                "\t[仙子,fairy]\b[this,4,13]为什么他要救这个国家？",
                "\t[战争魔王,yellowKing]\b[this,4,14]出于人类的好心吧。"
            ],
            "false": [
                "\t[战争魔王,yellowKing]\b[this,4,14]勇士没问你话么？",
                "\t[仙子,fairy]\b[this,4,13]是啊！一个不值得同情的勇士……",
                "\t[战争魔王,yellowKing]\b[this,4,14]是啊，所有恶习都降临到了这个国家上，勇士做的真不值。",
                "\t[仙子,fairy]\b[this,4,13]不问我话，就敢进入魔塔……",
                "\t[战争魔王,yellowKing]\b[this,4,14]是啊，早知道我杀了他算了。"
            ]
        },
        "\t[仙子,fairy]\b[this,4,13]也许他还有很多东西不明白。",
        "\t[战争魔王,yellowKing]\b[this,4,14]是啊，重建这个国家吧。我会叫魔塔里的人帮忙……",
        {
            "type": "waitAsync"
        },
        {
            "type": "insert",
            "name": "难度配置",
            "args": [
                "final"
            ]
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 500,
            "keep": true
        },
        "就是这样……\n扑朔迷离的国家，扑朔迷离魔塔，扑朔迷离圣人……\n\n\r[#80FF80]您已通关本游戏，难度${flag:realHard}。\n积分方式：当前角色攻防和",
        {
            "type": "if",
            "condition": "(flag:realHard>=10)",
            "true": [
                {
                    "type": "setValue",
                    "name": "flag:hard",
                    "value": "\"难度\"+flag:realHard"
                },
                {
                    "type": "win",
                    "reason": "结局10：无奈的奈落"
                }
            ],
            "false": [
                {
                    "type": "if",
                    "condition": "(flag:realHard>=0)",
                    "true": [
                        {
                            "type": "setValue",
                            "name": "flag:hard",
                            "value": "\"难度0~9\""
                        },
                        {
                            "type": "win",
                            "reason": "结局10：无奈的奈落"
                        }
                    ],
                    "false": [
                        {
                            "type": "setValue",
                            "name": "flag:hard",
                            "value": "\"作弊难度\""
                        },
                        {
                            "type": "win",
                            "reason": "结局10：无奈的奈落",
                            "norank": 1
                        }
                    ]
                }
            ]
        }
    ],
    "parallelDo": "",
    "events": {
        "4,14": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "4,13": {
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
            "data": []
        },
        "3,12": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 210,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "5,12": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 210,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        }
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [30137,30138,30139,30140,30141,30136,30137,30138,30139,30140,30141,30136,30137,30138,30139],
    [30145,30146,30147,30148,30149,30144,30145,30146,30147,30148,30149,30144,30145,30146,30147],
    [30145,30146,30147,30148,30149,30144,30145,30146,30147,30148,30149,30144,30145,30146,30147],
    [30153,30154,30155,30156,30157,30152,30153,30154,30155,30156,30157,30152,30153,30154,30155],
    [30161,30162,30163,30164,30165,30160,30161,30162,30163,30164,30165,30160,30161,30162,30163],
    [30169,30170,30171,30172,30173,30168,30169,30170,30171,30172,30173,30168,30169,30170,30171],
    [30177,30178,30182,30183,30181,30176,30177,30178,30182,30183,30181,30176,30177,30178,30182],
    [30185,30186,30190,30191,30189,30184,30185,30186,30190,30191,30189,30184,30185,30186,30190],
    [30108,30109,30107,30108,30109,30107,30108,30109,30107,30108,30109,30107,30108,30109,30107],
    [30116,30117,30115,30116,30117,30115,30116,30117,30115,30116,30117,30115,30116,30117,30115],
    [30124,30125,30123,30124,30125,30123,30124,30125,30123,30124,30125,30123,30124,30125,30123],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,580,  0,  0,  0,  0,  0],
    [  0,  0,  0,124,  0,124,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,124,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,230,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [
    [30151,30151,30151,30151,30151,30151,30151,30151,30151,30151,30151,30151,30151,30151,30151],
    [30151,30151,30151,30151,30151,30151,30151,30151,30151,30151,30151,30151,30151,30151,30151],
    [30151,30151,30151,30151,30151,30151,30151,30151,30151,30151,30151,30151,30151,30151,30151],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,30179,30180,  0,  0,  0,  0,30179,30180,  0,  0,  0,  0,30179],
    [  0,  0,30187,30188,  0,  0,  0,  0,30187,30188,  0,  0,  0,  0,30187],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}