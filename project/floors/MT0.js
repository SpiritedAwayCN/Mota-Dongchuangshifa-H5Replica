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
    [10040,421,421,421,421,421,129,  0,125,421,421,421,421,421,10042],
    [10040,  0,  0,  0,  0,121,  0,  0,  0,  0,  0,  0,  0,  0,10042],
    [ 89,  0,  0,  0,  0,  0,  0, 89,  0,  0,  0,  0,  0,129,10042],
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
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "tip",
            "text": "已自动存档！"
        },
        {
            "type": "autoSave"
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
                        "time": 1000
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
            "\t[神秘老人,wizard]\b[this]本复刻版基于H5魔塔样板制作。\n魔塔原作者：Joey·Cooper\n复刻作者：SpiritedAwayCN",
            "\t[神秘老人,wizard]\b[this]尽管已尽可能接近原作，但复刻版仍非完美复刻。\n原作特性较多，不影响游戏进程的特性没有复刻。",
            "\t[神秘老人,wizard]\b[this]为了平台兼容性，原作中所有mid格式的BGM均重新内录、并为缩小游戏文件大小有损压制了一遍，因此音质会受到负面影响，十分抱歉。",
            "\t[神秘老人,wizard]\b[this]本H5复刻版由\r[gold]原作者Joey·Cooper授权复刻\r，感谢原作者的支持！",
            "\t[神秘老人,wizard]\b[this]此外，感谢复刻作者的朋友IcyChlorine提出的宝贵建议与修改！"
        ],
        "6,9": [
            "\t[隐者,recluse]\b[this]按H键可以查看本魔塔的全部快捷键。",
            "\t[隐者,recluse]\b[this]比较重要的快捷键有：\nX - 怪物手册\nG - 楼层传送器\nT - 打开道具栏\nQ - 装备栏（也可双击状态栏中的道具栏图标）",
            "\t[隐者,recluse]\b[this]比较重要的快捷键有：\nV - 使用快捷商店\nE - 异常状态解除药水使用\nC - 修改难度选项\n1/2 - 血瓶/宝石道具化控制\nPgUp/PgDn - 浏览全塔地图",
            "\t[隐者,recluse]\b[this]使用PgUp/PgDn浏览地图时，按X也可呼出怪物手册，按G将尝试使用楼层传送器前往。",
            "\t[隐者,recluse]\b[this]原作魔塔并没有PgUp/PgDn浏览地图的功能，\r[#FF60FF]首次游玩魔塔时滥用该功能可能会失去探索的乐趣，请酌情使用\r！",
            "\t[隐者,recluse]\b[this]更多系统的使用说明在“新手教程”有讲解，从标题界面开始新游戏即能进入新手教程！",
            "\t[隐者,recluse]\b[this]在H5魔塔网站平台游玩时，存档数据会存入浏览器本地的IndexedDB中，理论上数据不会丢失（除非杀软垃圾清理给清了），但依然建议将关键备份存档到本地。\n\n操作方式：Esc进入菜单->同步存档->存档至本地文件。\n或者下载离线版本游玩，存档文件会直接以文件形式保留在本地。"
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
                                        "type": "insert",
                                        "name": "结局处理",
                                        "args": [
                                            "结局5"
                                        ]
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "insert",
                                        "name": "结局处理",
                                        "args": [
                                            "结局3"
                                        ]
                                    }
                                ]
                            }
                        ],
                        "no": []
                    }
                ]
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
        ],
        "6,5": [
            "\t[H5复刻作者]魔塔中，我将以\\i[sign]木牌的形式给于原作没有的提示。\n\r[#FF60FF]但多次查看将失去探索的乐趣\r，因此，显示可能影响游戏性的提示信息前，会询问玩家是否继续往下看。",
            {
                "type": "confirm",
                "default": true,
                "text": "进入易被初见杀的地图前弹窗提示？",
                "yes": [
                    {
                        "type": "setValue",
                        "name": "flag:VerboseHint",
                        "value": "1"
                    }
                ],
                "no": [
                    {
                        "type": "setValue",
                        "name": "flag:VerboseHint",
                        "value": "0"
                    }
                ]
            },
            {
                "type": "confirm",
                "default": true,
                "text": "是否查看本魔塔的积分方式？",
                "yes": [
                    "\t[H5复刻作者]作弊难度：不视为通关，平台榜单不计入；\n难度0~9：攻防和+难度值*100000，共用一个榜；\n难度10~15：攻防和，各难度值单独排榜。"
                ],
                "no": []
            },
            {
                "type": "confirm",
                "text": "有一些来自H5复刻作者的通关提示，\n是否查看（黑海躲避指南）？",
                "yes": [
                    "\t[H5复刻作者]7F有5扇黄门，前期请严格把控黄钥匙的使用。",
                    "\t[H5复刻作者]36~37F，需要前期保存5把红钥匙，因此，前期开红门须谨慎！\n可通过PgUp/PgDn浏览地图提前查看地图并规划。",
                    "\t[H5复刻作者]在获取前期全部红钥匙，且其余一个红门不开的情况下，正常到36F可以持有6把红钥匙。",
                    "\t[H5复刻作者]前期非常卡黄钥匙，而因为蓝门稀少，蓝钥匙相对充裕。\n打过前期后，中后期会轻松不少。",
                    "\t[H5复刻作者]首次到达-3F会让角色丢失所有钥匙、药水、金币、经验，且重置角色能力为固定值。\n请适当留存资源，善用血瓶/宝石道具化。（据原作者Joey·Cooper在原作中透露的信息，不留也能过）",
                    "\t[H5复刻作者]同时，强烈建议使用PgUp/PgDn浏览未到达地图，并查看下一个领袖的属性（浏览地图期间也可以使用怪物手册）\n以决定现阶段需要提升能力值（如选择攻杀还是防杀）。",
                    "\t[H5复刻作者]并非所有地图所有宝物都一定要获得，特别是难度等级较高时，请合理取舍。",
                    "\t[H5复刻作者]此外，难度配置可能影响玩法，因此部分难度（特别是与原作差异较大的难度选项）下NPC的提示不一定绝对正确，请留意。",
                    "\t[H5复刻作者]当然，原作魔塔有一定的解密成分，本复刻版在这些解密部分均加入了用于跳过的开关，不会影响难度与最终评分。但如果您想完整体验解密内容，请慎用跳过，这将丧失游戏性。"
                ],
                "no": []
            },
            {
                "type": "confirm",
                "text": "是否查看H5专属Good End触发条件？\n计入H5平台成就榜单要求达成此结局",
                "yes": [
                    "\t[H5复刻作者]原作并没有完美结局，H5专属Good End是在原作者Joey·Cooper的同意下加入，作为彩蛋有条件触发。",
                    "\t[H5专属Good End触发条件]开局与0层仙子对话，在15难度下与最终领袖战斗前，将出现\r[lime]Good End专属选项\r。\n选择该项并击败最终boss后，即可进入Good End。"
                ],
                "no": []
            }
        ],
        "7,7": {
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
        "13,7": [
            {
                "type": "confirm",
                "text": "是否查看全塔商店信息？\n（可能失去探索的乐趣）",
                "yes": [
                    {
                        "type": "while",
                        "condition": "1",
                        "data": [
                            {
                                "type": "choices",
                                "text": "\t[全塔商店信息]请选择楼层范围：\n可能不全，G=塔币，E=经验",
                                "choices": [
                                    {
                                        "text": "-31F以下",
                                        "action": [
                                            "\t[商店-31F以下]\\i[expShop]-32F金币 继承-3/-4F商店价格，对所有角色生效\n  - (击败-57F领袖前)[20攻, 30防, 12K血, 6K血10攻15防5魔] +20G/次 \n  - (击败-57F领袖后)[10攻, 10防, 12K血, 6K血5攻5防5魔] +21G/次\n\\i[N417]-34F经验，击败-57F领袖前后发生变化\n  - 共4项，价格依次为500E, 590E, 670E, 850E\n  - 前：[5K血10攻15防5魔, 7K血20攻30防10魔, 9K血30攻45防15魔, 11110血40攻60防20魔]\n  - 后：[5K血8攻防5魔, 7K血18攻防8魔, 9K血20攻防15魔, 11110血30攻防10魔]\n\\i[trader]魔塔城堡金币 5000G，对所有角色生效\n  - [0.06%攻0.03%防0.01%魔, 0.03%攻0.06%防0.01%魔, 0.04%攻0.04%防0.04%魔]\n  - 各项额外加2500生命，商店性价比难度项生效时不加"
                                        ]
                                    },
                                    {
                                        "text": "-29~0F",
                                        "action": [
                                            "\t[商店-29~0F]\\i[youngMan]-27F解药：[\\i[poisonWine](500G), \\i[weakWine](400G), \\i[curseWine](400G)]\n\\i[trader]-18F出售钥匙：[\\i[yellowKey](+10G), \\i[blueKey](+50G), \\i[redKey](+100G),\\i[greenKey](+600G)]\n\\i[man]-27/-17F经验：对所有角色生效 [1级1K血4攻6防, 6攻, 9防, 8K血] 600E(-27F)/700E(-17F)\n\\i[trader]-5F金币：[3.2K命, 4攻, 8防, 10魔] 700G，商店性价比难度项生效时8防降为4防\n\\i[N446]-3/-4F金币(共用价格)：[800命, 3攻, 3防] 30(+7)G\n\\i[youngMan]0F钥匙：[\\i[yellowKey](20G), \\i[blueKey](100G), \\i[redKey](200G)]"
                                        ]
                                    },
                                    {
                                        "text": "1~42F",
                                        "action": [
                                            "\t[商店1-42F]\\i[expShop]7F经验：[1K命, 2攻, 2防] 100(+45)E，15F起效果翻倍且额外解锁+4魔防选项\n\\i[trader]9F奸商：[100命, 2攻, 2防] 100/185G(第9次起)\n\\i[trader]12F钥匙：[\\i[yellowKey](50G), \\i[blueKey](100G)]，限7+10次\n\\i[N396]15F商店：依次升级\\i[redPotion](600E)/\\i[bluePotion](3000G)/\\i[yellowPotion](4500G400E)/\\i[redGem]\\i[blueGem]二选一(10000G)\n\\i[youngMan]22F解药：[\\i[poisonWine](500G), \\i[weakWine](400G), \\i[curseWine](400G)]\n\\i[N417]25F商店：[800命, 3攻, 3防] 20(+1)G\n\\i[N424]29F商店(G)：[800命, 1攻, 2防, 4魔] 300G\n\\i[N424]29F商店(E)：[1K命2攻3防, 4攻,6防, 2K命] 100E"
                                        ]
                                    },
                                    {
                                        "text": "43F以上",
                                        "action": [
                                            "\t[商店43F以上]\\i[moneyShop]8/35/48/59F金币：同50层魔塔商店\n  - 首次到达59F商店时会重设价格\n\\i[trader]49F金币：[1攻(100G), 1防(100G), 1血(1G)]\n  - 到达50F后71F前攻防价格暂提升为200G\n  - 商店性价比难度项生效时防御价格始终为200G\n\\i[trader]59F经验：[1级2580血6攻6防3魔(400E), 4攻(150E), 4防(150E), 4魔(150E)]"
                                        ]
                                    },
                                    {
                                        "text": "返回游戏",
                                        "action": [
                                            {
                                                "type": "break",
                                                "n": 1
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "7,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "7,7": {
            "floorId": "ArrowTutorial",
            "loc": [
                8,
                0
            ]
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