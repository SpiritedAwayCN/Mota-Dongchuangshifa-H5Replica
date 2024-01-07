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
    "bgm": "mine.mp3",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "insert",
            "name": "难度配置",
            "args": [
                "final"
            ]
        },
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
            "type": "if",
            "condition": "(!(flag:realHard>=15))",
            "true": [
                {
                    "type": "setValue",
                    "name": "flag:GoodEnding",
                    "value": "0"
                }
            ]
        },
        {
            "type": "if",
            "condition": "(flag:GoodEnding===1)",
            "true": [
                "\r[#80ff80]结局12：灭亡与新生\n国家保下来了，在人们狂欢的时候，国王却神秘失踪了……终于，在5天后，在乱草中找到国王的尸体……周围全是魔塔怪物的死尸……",
                "\r[#80ff80]国家又陷入一片恐慌……仿佛又听见了怪物的狞笑……而在此危难之际，魔塔却并没有向国家发起进攻。",
                "\r[#80ff80]那位曾经将国王带出魔塔的勇者站了出来，凭借其战胜魔塔的威望、被魔王认可过的实力，开始以道德约束国民的行为，利用这种变数改革社会的生产关系……",
                "\r[#80ff80]将国民们的精力从无休止的明争暗斗中，转换到了国家的重建上。国王呢？公主呢？或许这些已经不再重要了，曾经那充满恶行国家附带的产物，换一种存在的身份未尝不可。",
                "\r[#80ff80]……预言是真的，国家是保不住的…………那个充满恶行的国家是保不住的。",
                "\r[#80ff80]几年后……"
            ],
            "false": [
                {
                    "type": "playSound",
                    "name": "157-Skill01.ogg",
                    "stop": true,
                    "pitch": 70
                },
                {
                    "type": "if",
                    "condition": "flag:s172_PerfectEnding",
                    "true": [
                        "\r[#ff8080]结局10：无奈的奈落\n国家保下来了，在人们狂欢的时候，国王却神秘失踪了……终于，在5天后，在乱草中找到国王的尸体……周围全是魔塔怪物的死尸……"
                    ],
                    "false": [
                        "\r[#ff8080]结局11：无奈的奈落\n国家保下来了，在人们狂欢的时候，国王却神秘失踪了……终于，在5天后，在乱草中找到国王的尸体……周围全是魔塔怪物的死尸……"
                    ]
                },
                "\r[#ff8080]国家又陷入一片恐慌……仿佛又听见了怪物的狞笑……国家……最终未能逃脱魔塔的魔抓……预言是真的，国家是保不住的……",
                "\r[#ff8080]几年后……"
            ]
        },
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
            "type": "function",
            "function": "function(){\ncore.status.hard = \"难度\" + core.getFlag('realHard') + \"（分数=攻防和）\";\n}"
        },
        {
            "type": "if",
            "condition": "(flag:GoodEnding===1)",
            "true": [
                "\t[战争魔王,yellowKing]\b[this,4,14]旧的国家不存在了，老国王也已经不在了。这个建立在旧国家上的新国家，包含的恶行会就此结束吗？",
                "\t[仙子,fairy]\b[this,4,13]一个曾经不值得同情的国家……积累了几代人的横征暴敛，所包含的恶不会就因为一个人，在短短几年内就完全消散。",
                "\t[战争魔王,yellowKing]\b[this,4,14]是啊，所有恶行都降临到了曾经的这个国家上，勇士当年想做的真不值。但他做到了。",
                "\t[仙子,fairy]\b[this,4,13]好了，快回魔塔吧，我们毕竟是魔物，在人类的心中仍然是防备而敌对的存在……",
                "\t[战争魔王,yellowKing]\b[this,4,14]魔塔将继续充当守护人，如果曾经充满恶的国家再临，魔塔的意志将促使我们再次发起进攻。",
                "\t[仙子,fairy]\b[this,4,13]拭目以待吧，比起屠龙者终成恶龙的发展，我更愿意相信希望。",
                {
                    "type": "setValue",
                    "name": "flag:enddingName",
                    "value": "\"结局12：灭亡与新生\""
                }
            ],
            "false": [
                {
                    "type": "if",
                    "condition": "(flag:s172_PerfectEnding===1)",
                    "true": [
                        "\t[战争魔王,yellowKing]\b[this,4,14]勇士太傻了……",
                        "\t[仙子,fairy]\b[this,4,13]一个不值得同情的国家……",
                        "\t[战争魔王,yellowKing]\b[this,4,14]是啊，所有恶习都降临到了这个国家上，勇士做的真不值。",
                        "\t[仙子,fairy]\b[this,4,13]为什么他要救这个国家？",
                        "\t[战争魔王,yellowKing]\b[this,4,14]出于人类的好心吧。",
                        {
                            "type": "setValue",
                            "name": "flag:enddingName",
                            "value": "\"结局10：无奈的奈落\""
                        }
                    ],
                    "false": [
                        "\t[战争魔王,yellowKing]\b[this,4,14]勇士没问你话么？",
                        "\t[仙子,fairy]\b[this,4,13]是啊！一个不值得同情的勇士……",
                        "\t[战争魔王,yellowKing]\b[this,4,14]是啊，所有恶习都降临到了这个国家上，勇士做的真不值。",
                        "\t[仙子,fairy]\b[this,4,13]不问我话，就敢进入魔塔……",
                        "\t[战争魔王,yellowKing]\b[this,4,14]是啊，早知道我杀了他算了。",
                        {
                            "type": "setValue",
                            "name": "flag:enddingName",
                            "value": "\"结局11：无奈的奈落\""
                        }
                    ]
                },
                "\t[仙子,fairy]\b[this,4,13]也许他还有很多东西不明白。",
                "\t[战争魔王,yellowKing]\b[this,4,14]是啊，重建这个国家吧。我会叫魔塔里的人帮忙……"
            ]
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "hideStatusBar"
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
        {
            "type": "if",
            "condition": "(flag:realHard>=10)",
            "true": [
                "就是这样……\n扑朔迷离的国家，扑朔迷离魔塔，扑朔迷离圣人……\n\n\r[#80FF80]您已通关${flag:enddingName}，难度${flag:realHard}。\n积分方式：当前角色攻防和"
            ],
            "false": [
                "就是这样……\n扑朔迷离的国家，扑朔迷离魔塔，扑朔迷离圣人……\n\n\r[#80FF80]您已通关${flag:enddingName}，难度${flag:realHard}。\n积分方式：难度*100000 + 当前角色攻防和"
            ]
        },
        {
            "type": "setText"
        },
        {
            "type": "if",
            "condition": "(flag:GoodEnding!==1)",
            "true": [
                {
                    "type": "setValue",
                    "name": "flag:enddingName",
                    "value": "\"结局10/11：无奈的奈落\""
                },
                {
                    "type": "if",
                    "condition": "(flag:GoodEnding===2)",
                    "true": [
                        "\t[H5复刻作者]\r[orange]警告：检测到与\\i[blackKing]Black Devil战斗前可选择另一项\r，且选择另一项仍能战斗胜利！\n\r[lime]请选择另一项以Good End结局结算游戏！\r（既然能过真结局，就别卷这个结局的排行榜了）",
                        {
                            "type": "lose",
                            "reason": "与Black Devil战斗请选择另一项，按Good End结算游戏！"
                        }
                    ]
                }
            ]
        },
        {
            "type": "if",
            "condition": "(flag:realHard>=10)",
            "true": [
                {
                    "type": "setValue",
                    "name": "flag:hard",
                    "value": "flag:realHard-9"
                },
                {
                    "type": "if",
                    "condition": "(flag:GoodEnding===1)",
                    "true": [
                        {
                            "type": "win",
                            "reason": "${flag:enddingName}"
                        }
                    ],
                    "false": [
                        {
                            "type": "win",
                            "reason": "${flag:enddingName}",
                            "norank": 1
                        }
                    ]
                }
            ],
            "false": [
                {
                    "type": "if",
                    "condition": "(flag:realHard>=0)",
                    "true": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.status.hard = \"难度0~9（分数=难度*100000+攻防和）\";\n}"
                        },
                        {
                            "type": "setValue",
                            "name": "flag:hard",
                            "value": "0"
                        },
                        {
                            "type": "win",
                            "reason": "${flag:enddingName}",
                            "norank": 1
                        }
                    ],
                    "false": [
                        {
                            "type": "function",
                            "function": "function(){\ncore.status.hard = \"作弊难度\";\n}"
                        },
                        {
                            "type": "setValue",
                            "name": "flag:hard",
                            "value": "0"
                        },
                        "\t[H5复刻作者]\r[orange]警告：当前为作弊难度，无法进入积分榜！\r",
                        {
                            "type": "restart"
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