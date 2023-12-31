main.floors.MT0=
{
    "floorId": "MT0",
    "title": "主塔 0 层",
    "name": "第 0 层",
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "defaultGround": "ground",
    "images": [],
    "ratio": 1,
    "map": [
    [10040,10041,10041,10041,10041,10041,10041,  0,10041,10041,10041,10041,10041,10041,10042],
    [10040,421,421,421,421,421,  0,  0,  0,421,421,421,421,421,10042],
    [10040,421,20246,20246,20246,421,  0,124,  0,421,20246,20246,20246,421,10042],
    [10040,421,20246,20246,20246,421,  0,  0,  0,421,20246,20246,20246,421,10042],
    [10040,421,20246,20246,20246,421,  0,  0,  0,421,20246,20246,20246,421,10042],
    [10040,421,421,421,421,421,  0,  0,125,421,421,421,421,421,10042],
    [10040,  0,  0,  0,  0,121,  0,  0,  0,  0,  0,  0,  0,  0,10042],
    [ 89,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,129,10042],
    [10040,  0,  0,  0,  0,  0,  0,  0,  0,128,  0,  0,  0,  0,10042],
    [10040,421,421,421,421,421,126,  0,  0,421,421,421,421,421,10042],
    [10040,421,20246,20246,20246,421,  0,  0,  0,421,20246,20246,20246,421,10042],
    [10040,421,20246,20246,20246,421,  0, 88,  0,421,20246,20246,20246,421,10042],
    [10040,421,20246,20246,20246,421,  0,  0,  0,421,20246,20246,20246,421,10042],
    [10040,421,421,421,421,421,  0, 87,  0,421,421,421,421,421,10042],
    [20048,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20049,20050]
],
    "firstArrive": [
        {
            "type": "setValue",
            "name": "item:book",
            "operator": "+=",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:VerboseHint",
            "value": "1"
        }
    ],
    "parallelDo": "",
    "events": {
        "7,2": [
            {
                "type": "setValue",
                "name": "flag:s172_PerfectEnding",
                "value": "1",
                "norefresh": true
            },
            "\t[hero]\b[hero]这里是......魔塔？",
            "\t[仙子,fairy]\b[this]对啊，这里就是关押着公主和国王的地方。",
            "\t[hero]\b[hero]哦，你是这座塔的守护神么？",
            "\t[仙子,fairy]\b[this]呵呵，我是国家的仙子啦。",
            "\t[hero]\b[hero]哦，你在这干什么？",
            "\t[仙子,fairy]\b[this]等你……",
            "\t[hero]\b[hero]我？为什么？",
            "\t[仙子,fairy]\b[this]你不要去救他们了。",
            "\t[hero]\b[hero]为什么？这是我的任务！",
            "\t[仙子,fairy]\b[this]这个国家不值得你救……\n你一定要救么？",
            "\t[hero]\b[hero]是的！",
            "\t[仙子,fairy]\b[this]好吧，怪物抢走了国家的很多宝物，你可用那些救出公主国王。",
            "\t[hero]\b[hero]只有宝物么？应该还有别的吧，记得上一个魔塔还有商店的。",
            "\t[仙子,fairy]\b[this]好像还有加怪物能力的商店，我想对你也合适吧。",
            "\t[hero]\b[hero]！@#￥%……&*（）——+o(╯□╰)o",
            "\t[仙子,fairy]\b[this]如果你真的想救，我还会给你派来圣人来的，他们在魔塔里等你。",
            "\t[hero]\b[hero]圣人不怕死么，敢到魔塔里。",
            "\t[仙子,fairy]\b[this]圣人嘛，永恒的存在，无限的力量。",
            "\t[hero]\b[hero]那为什么他们不救国家？！",
            "\t[仙子,fairy]\b[this]圣人...不牵扯...你们的...选择\n去吧，勇士，一路顺风！",
            "\t[仙子,fairy]\b[this]最后建议你……不值得……",
            {
                "type": "if",
                "condition": "(flag:baseHard!==2)",
                "true": [
                    {
                        "type": "hide",
                        "remove": true,
                        "time": 2000
                    }
                ],
                "false": [
                    "\t[hero]\b[hero]我一定要去！",
                    "\t[仙子,fairy]\b[this]好吧……等等，你好弱，你先去魔法草原吧。",
                    {
                        "type": "hide",
                        "remove": true
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "NM_FEK0",
                        "loc": [
                            7,
                            13
                        ],
                        "direction": "down"
                    }
                ]
            }
        ],
        "7,11": {
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
        "5,6": [
            {
                "type": "choices",
                "text": "\t[老人,man]要决定当前角色的名字吗？",
                "choices": [
                    {
                        "text": "我有新名字 (请输入)",
                        "action": [
                            {
                                "type": "input2",
                                "text": "为当前角色起一个新名字（留空则不变）："
                            },
                            {
                                "type": "function",
                                "function": "function(){\nvar new_name = core.getFlag(\"input\");\nif (new_name) core.setStatus(\"name\", new_name);\n}"
                            }
                        ]
                    },
                    {
                        "text": "但是我不改名，不换姓",
                        "action": []
                    }
                ]
            },
            "\t[老人,man]\b[this]${core.getStatus(\"name\")}？不错，快去吧，${core.getStatus(\"name\")}！",
            {
                "type": "if",
                "condition": "(switch:A!==1)",
                "true": [
                    "\t[老人,man]\b[this]里面有一位勇士被抓了，请快点救出她！"
                ]
            },
            {
                "type": "setValue",
                "name": "switch:A",
                "value": "1"
            }
        ],
        "8,5": [
            "\t[神秘老人,wizard]\b[this]本复刻版基于H5魔塔样板制作。\n魔塔原作者：Joey·Cooper\n复刻作者：SpiritedAwayCN"
        ],
        "6,9": [
            "\t[隐者,recluse]\b[this]按H键可以查看快捷键",
            "\t[隐者,recluse]\b[this]字母键盘上的\"1\"可以决定血瓶是否道具化；\n字母键盘上的\"2\"可以决定宝石是否道具化；\n字母键盘上的\"3\"可以查看法杖效果；\n\"E\"键可以使用解除异常状态的药水。",
            "\t[隐者,recluse]\b[this]字母键盘上的\"C\"可以动态调整难度；\nPgUp/PgDn可以浏览魔塔地图。"
        ],
        "9,8": {
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
            "data": [
                {
                    "type": "openShop",
                    "id": "F0KeyShop",
                    "open": true
                }
            ]
        },
        "7,0": [
            {
                "type": "if",
                "condition": "(blockId:7,0===\"T621\")",
                "true": [
                    "\t[hero]\b[hero]好像堵住了……",
                    {
                        "type": "if",
                        "condition": "(flag:getQueen===1)",
                        "true": [
                            "\t[国王,N617]\b[hero]有一个暗道，我们快去！",
                            "\t[hero]\b[hero]在哪？",
                            "\t[国王,N617]\b[hero]-69层！快",
                            {
                                "type": "if",
                                "condition": "(switch:A!==1)",
                                "true": [
                                    {
                                        "type": "setBlock",
                                        "number": "upPortal",
                                        "loc": [
                                            [
                                                4,
                                                0
                                            ]
                                        ],
                                        "floorId": "MTn69"
                                    },
                                    {
                                        "type": "show",
                                        "loc": [
                                            [
                                                6,
                                                6
                                            ]
                                        ],
                                        "floorId": "MTn69"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "switch:A",
                                        "value": "1"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "confirm",
                        "text": "确认要离开魔塔吗?",
                        "yes": [
                            {
                                "type": "if",
                                "condition": "((status:money>=2000 )&&((item:greenKey>0 )&& core.values.isMAGValid))",
                                "true": [
                                    {
                                        "type": "lose",
                                        "reason": "结局5"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "lose",
                                        "reason": "结局3"
                                    }
                                ]
                            }
                        ],
                        "no": []
                    }
                ]
            }
        ],
        "13,7": [
            {
                "type": "confirm",
                "text": "有一些来自H5复刻作者的过关提示，\n是否查看？",
                "yes": [
                    "\t[H5复刻作者]36~37F，需要前期保存5把红钥匙，因此，前期开红门须谨慎！\n可通过PgUp/PgDn浏览地图查看。",
                    "\t[H5复刻作者]-3F会让角色丢失所有钥匙、金币经验，且重置角色能力为固定值。\n请适当留存资源，善用血瓶/宝石道具化。",
                    "\t[H5复刻作者]前期非常卡黄钥匙，而因为蓝门稀少，蓝钥匙相对充裕。\n打过前期后，中后期会轻松不少。",
                    "\t[H5复刻作者]同时，强烈建议使用PgUp/PgDn查看下一个领袖的属性，\n（浏览地图期间也可以使用怪物手册）\n以决定现阶段需要提升能力值（如选择攻杀还是防杀）。"
                ],
                "no": []
            },
            {
                "type": "confirm",
                "text": "是否查看H5专属Good End触发条件？",
                "yes": [
                    "\t[H5复刻作者]原版并没有完美结局，H5专属Good End是在原作者Joey·Cooper的同意下加入，作为彩蛋有条件触发。",
                    "\t[H5专属Good End触发条件]开局与0层仙子对话；且在15难度下，与最终领袖战斗前，将出现\r[lime]Good End专属选项\r。\n选择该项并击败最终boss后，即可达成Good End。"
                ],
                "no": []
            }
        ],
        "0,7": {
            "trigger": null,
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
                    "type": "if",
                    "condition": "(flag:s190_NoCheating===1)",
                    "true": [
                        "作弊空间已经关闭。",
                        {
                            "type": "exit"
                        }
                    ]
                },
                {
                    "type": "if",
                    "condition": "(switch:A!==1)",
                    "true": [
                        {
                            "type": "choices",
                            "text": "\t[作弊空间,portal]进入这里可以作弊，\r[red]\n但将失去全部难度点数\n\r确认要进入吗？",
                            "choices": [
                                {
                                    "text": "确认进入",
                                    "action": [
                                        {
                                            "type": "setValue",
                                            "name": "switch:A",
                                            "value": "1"
                                        }
                                    ]
                                },
                                {
                                    "text": "不作弊",
                                    "action": [
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "changeFloor",
                    "floorId": "CheatingZone",
                    "loc": [
                        4,
                        7
                    ]
                }
            ]
        },
        "7,13": [
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        2
                    ]
                ],
                "remove": true
            },
            {
                "type": "changeFloor",
                "floorId": ":next",
                "stair": "downFloor"
            }
        ]
    },
    "changeFloor": {
        "7,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,300,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,140,140,140,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,140,140,140,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,140,140,140,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,140,140,140,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,140,140,140,  0,  0,  0,  0,  0,  0],
    [  0,140,140,140,140,140,140,140,140,140,140,140,140,140,  0],
    [300,140,140,140,140,140,140,140,140,140,140,140,140,140,  0],
    [  0,140,140,140,140,140,140,140,140,140,140,140,140,140,  0],
    [  0,  0,  0,  0,  0,  0,140,140,140,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,140,140,140,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,140,140,140,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,140,140,140,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,140,140,140,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "width": 15,
    "height": 15,
    "autoEvent": {},
    "beforeBattle": {},
    "cannotMoveIn": {},
    "weather": [
        "snow",
        3
    ],
    "bgm": "xxmt0F.mp3"
}