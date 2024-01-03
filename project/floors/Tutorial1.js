main.floors.Tutorial1=
{
    "floorId": "Tutorial1",
    "title": "教学空间",
    "name": "教学空间",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "mine.ogg",
    "weather": [
        "snow",
        3
    ],
    "firstArrive": [
        "\t[H5复刻作者]欢迎来到H5复刻版专属新手教程！",
        "\t[H5复刻作者]本教程旨在为缺少魔塔游玩经验，特别是缺少H5平台魔塔游玩经验的玩家提供帮助。",
        "\t[H5复刻作者]原版魔塔中有许多专属系统，在此将有所提及。",
        "\t[H5复刻作者]现在，请定位到你角色的所在位置。",
        {
            "type": "setText",
            "time": 60
        },
        "\t[hero]\b[hero]我在这里。",
        "\t[hero]\b[hero]我是您要操控的角色，按上下左右键即可操纵我的行动。",
        "\t[hero]\b[hero]在左手模式下，上下左右将更改为WSAD键操控。",
        "\t[hero]\b[hero]同时，直接点击地图上的图块，在可以到达的情况下，我也会直接出现在该图块。这既方便了手机玩家操作，也为电脑玩家节省了行走时间。",
        "\t[hero]\b[hero]现在，请让我随意走走吧。我周围有几位NPC，去看看他们想说些什么。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "12,9": [
            {
                "type": "openShop",
                "id": "shop1",
                "open": true
            }
        ],
        "1,1": [
            "\b[hero]这里是下楼梯，可以前往下方一层。\n但是现在没有下一层了。"
        ],
        "3,1": [
            "\t[老人,man]\b[this]我是塔里的NPC，将给予你必要的提示。",
            "\t[老人,man]\b[this]现在我将提示你：\r[lime]按下键盘上的H键\r，将出现本魔塔所有的键位信息。",
            "\t[老人,man]\b[this]对于手机玩家，屏幕下方有一排工具栏，点击左起第4个即可打开虚拟键盘。"
        ],
        "2,4": [
            {
                "type": "switch",
                "condition": "switch:A",
                "caseList": [
                    {
                        "case": "1",
                        "action": [
                            {
                                "type": "choices",
                                "text": "\t[老人,man]\r[lime]请按下X键\r可打开怪物手册！\n(手机玩家点击下方工具栏第一个按钮)\n你了解如何打开\\i[book]怪物手册了吗？",
                                "choices": [
                                    {
                                        "text": "我已了解，进入下一步",
                                        "action": [
                                            "\t[老人,man]\b[up]很好，现在请前往击杀这个敌方单位吧！",
                                            "\t[绿头怪,greenSlime]\b[down,3,5]我在这里，触碰我即可与我战斗。",
                                            {
                                                "type": "hide",
                                                "remove": true
                                            }
                                        ]
                                    },
                                    {
                                        "text": "让我试一试，离开对话",
                                        "action": []
                                    },
                                    {
                                        "text": "没有了解，重新上一步",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "switch:A",
                                                "operator": "-=",
                                                "value": "1"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "case": "default",
                        "action": [
                            "\t[hero]\b[hero]你好！",
                            "\t[老人,man]\b[this]你好，勇士！看起来你已经知道了如何操纵自己的移动。",
                            "\t[老人,man]\b[up]我的左下方有一个敌方单位",
                            "\t[绿头怪,greenSlime]\b[down,3,5]我在这里，是你需要击败的单位。",
                            "\t[老人,man]\b[this]为了更好地了解敌方单位，我们需要\\i[book]怪物手册。现在我把它交给你！",
                            {
                                "type": "setValue",
                                "name": "item:book",
                                "operator": "+=",
                                "value": "1"
                            },
                            "\t[老人,man]\b[up]现在，敌方单位的下方出现了两个数字。",
                            "\t[绿头怪,greenSlime]\b[down,3,5]我下方有两个数字。其中，下方的数字代表\r[#FF8080]击杀我需要耗费的生命值\r。",
                            "\t[绿头怪,greenSlime]\b[down,3,5]另一个，上方的数字代表\r[#FF80FF]再增加多少攻击力后，我对你的伤害将降低\r。",
                            "\t[绿头怪,greenSlime]\b[down,3,5]比如现在，你攻击我将对你造成\r[#FF8080]28点伤害\r，这个伤害将在你\r[#FF80FF]再获得1点攻击力\r后变得更低。",
                            "\t[老人,man]\b[up]除了这两个数据，怪物手册中有更加详细的信息。",
                            "\t[老人,man]\b[this]现在，\r[lime]请按下X键\r，打开怪物手册，里面有敌方单位的详细信息。（手机玩家请点击下方工具栏的\\i[book]左起第1个按钮）",
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "operator": "+=",
                                "value": "1"
                            }
                        ]
                    }
                ]
            }
        ],
        "5,5": [
            "\t[老人,man]\b[this]很好，你已经学会如何与敌方单位战斗了，接下来我讲为你讲解魔塔里的钥匙。",
            "\t[老人,man]\b[this]对应颜色的钥匙开启对应颜色的门，每开一扇门将消耗对应颜色的钥匙，",
            "\t[老人,man]\b[this]比如，我上方的\\i[yellowDoor]黄门，需要消耗一把\\i[yellowKey]黄钥匙开启。",
            "\t[老人,man]\b[this]现在，请拿上我身后的全部钥匙，开启上方的门吧！",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "5,2": [
            "\t[老人,man]\b[this]我上方是一个血瓶，它将回复你的生命值。",
            "\t[老人,man]\b[this]不同颜色的血瓶有不同的回复量，我上方的\\i[redPotion]红血瓶可以为你回复75点生命。",
            "\t[老人,man]\b[this]现在，请拿取这个血瓶，并击败右侧的敌方单位吧！",
            {
                "type": "show",
                "loc": [
                    [
                        7,
                        2
                    ]
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "7,2": {
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
                    "type": "if",
                    "condition": "(switch:A===2)",
                    "true": [
                        "\t[老人,man]\b[this]我右侧的夹击敌人，\r[yellow]击杀任意一个\r就能让夹击失效。失效后经过它们中间就不会损失生命值了！",
                        {
                            "type": "hide",
                            "remove": true
                        },
                        {
                            "type": "exit"
                        }
                    ]
                },
                {
                    "type": "if",
                    "condition": "(switch:A===1)",
                    "true": [
                        {
                            "type": "if",
                            "condition": "core.values.isPotionItemized",
                            "true": [
                                "\t[老人,man]\b[this]你的血瓶已经道具化了！现在获得血瓶会存入背包中。",
                                "\t[老人,man]\b[this]我身后的两个敌人有“夹击”的特殊能力，经过它们中间时\r[red]生命会减半\r",
                                "\t[老人,man]\b[this]如果获得血瓶时直接生效，那么经过夹击时会损失更多的生命！",
                                "\t[老人,man]\b[this]而如果把血瓶放入背包，经过夹击后再使用血瓶，就可以节省不少生命值。",
                                "\t[老人,man]\b[this]现在，请把我身后的血瓶放入背包，然后过夹击吧！",
                                {
                                    "type": "setValue",
                                    "name": "switch:A",
                                    "operator": "+=",
                                    "value": "1"
                                },
                                {
                                    "type": "hide"
                                }
                            ],
                            "false": [
                                {
                                    "type": "choices",
                                    "text": "\t[老人,man]\r[yellow]请先把血瓶设置为\"道具化\"状态！\r\n\r[lime]按1打开血瓶设置界面！\r\n手机玩家点击下方左起第3个图标进入物品\n栏，然后选择\"血瓶道具化\"图标进入界面",
                                    "choices": [
                                        {
                                            "text": "我知道了，去设置",
                                            "action": []
                                        },
                                        {
                                            "text": "没明白，返回上一步",
                                            "action": [
                                                {
                                                    "type": "setValue",
                                                    "name": "switch:A",
                                                    "operator": "-=",
                                                    "value": "1"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "false": [
                        "\t[老人,man]\b[this]相信刚才获得血瓶的时候你已经发现了，\r[lime]血瓶是可以道具化的\r！",
                        "\t[老人,man]\b[this]一般情况下，拾取血瓶时将立刻回复生命值。但是，血瓶也可以\\d道具化\\d，直接存入背包以后再使用。",
                        "\t[老人,man]\b[this]\r[lime]按下1键即可设置血瓶是否道具化！\r(手机玩家请点击下方\\i[toolbox]左起第3个图标进入物品栏，然后\r[lime]双击\\i[skill1]血瓶道具化图标\r进入界面)",
                        "\t[老人,man]\b[this]现在，\r[yellow]请将血瓶设置为\"道具化\"状态\r，这样获取血瓶时会存入背包，而不是直接喝掉。",
                        {
                            "type": "setValue",
                            "name": "switch:A",
                            "operator": "+=",
                            "value": "1"
                        }
                    ]
                }
            ]
        },
        "9,2": [
            {
                "type": "if",
                "condition": "(switch:A===1)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(item:redPotion<=0)",
                        "true": [
                            "\t[老人,man]\b[this]现在可以击杀右侧的敌方单位了！\r[lime]如果你先前的操作正确，你的生命是足够的！\r",
                            {
                                "type": "hide",
                                "remove": true
                            }
                        ],
                        "false": [
                            {
                                "type": "choices",
                                "text": "\t[老人,man]\r[yellow]请先使用背包中的所有血瓶！\n\r[lime]按1键\r呼出血瓶道具化界面使用\n也可\r[lime]按T键\r直接在背包界面使用",
                                "choices": [
                                    {
                                        "text": "知道了，现在使用",
                                        "action": []
                                    },
                                    {
                                        "text": "没明白，回上一步",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "switch:A",
                                                "operator": "+=",
                                                "value": "0"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "false": [
                    "\t[老人,man]\b[this]好了，现在可以使用血瓶增加生命了。同样\r[lime]按1快速使用背包中的血瓶\r。手机玩家按之前的方式进入血瓶道具化界面使用，也可直接在物品栏使用！",
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "operator": "+=",
                        "value": "1"
                    }
                ]
            }
        ],
        "12,3": [
            "\t[老人,man]\b[this]我上面是更多种类的血瓶还有宝石。",
            "\t[老人,man]\b[this]红宝石可以为你增加攻击，蓝宝石增加防御。和血瓶一样，宝石也可道具化。\r[lime]按2键设置宝石的道具化\r与使用背包中的宝石。",
            "\t[老人,man]\b[this]对于手机玩家，在物品栏中选择\\i[I335]宝石道具化图标可进入相同的页面。",
            {
                "type": "choices",
                "text": "\t[老人,man]目前已讲解了血瓶宝石的作用/道具化/使用\r[lime]\n按1键\r使用\\i[redPotion]血瓶/设置血瓶道具化\r[lime]\n按2键\r使用\\i[blueGem]宝石/设置宝石道具化\n手机玩家在物品栏选择对应图标可进入相应的界面",
                "choices": [
                    {
                        "text": "我明白了，下一步",
                        "action": [
                            "\t[老人,man]\b[this]我身后，是一颗\\i[yellowGem]黄宝石，它可以增加角色的等级。",
                            "\t[老人,man]\b[this]每当角色的等级因为黄宝石提升时，会\r[yellow]触发加点事件，获得2个点数\r！每有一个点数，玩家可以在多种增益中任选一项加强角色。",
                            "\t[老人,man]\b[this]现在，请捡起右边的黄宝石，并进行加点吧！",
                            {
                                "type": "hide",
                                "remove": true
                            }
                        ]
                    },
                    {
                        "text": "没明白，再看一遍",
                        "action": [
                            {
                                "type": "exit"
                            }
                        ]
                    }
                ]
            }
        ],
        "11,5": [
            {
                "type": "if",
                "condition": "(status:atk>=13)",
                "true": [
                    "\t[老人,man]\b[this]你已经拥有13点攻击力了！我现在进行接下来的教学。",
                    "\t[老人,man]\b[up]我身后是一个机关门，它不能被直接打开，但\r[lime]满足特定条件时将自动打开\r！",
                    "\t[老人,man]\b[up]在这里，当\r[lime]击杀我身旁的两个\\i[blackSlime]黑色史莱姆\r后，机关门将自动开启！",
                    "\t[老人,man]\b[up]\r[yellow]如果你已经\\d获取并使用\\d了所有的血瓶，\r你的生命应当足够击杀我身旁的两个\\i[blackSlime]黑色史莱姆。",
                    "\t[老人,man]\b[up]现在，请击杀它们吧，我在机关门后等你！",
                    {
                        "type": "hide",
                        "remove": true
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                12,
                                8
                            ]
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(switch:A===1)",
                        "true": [
                            "\t[老人,man]\b[this]请\r[lime]按2键进入宝石道具化页面\r，并在其中\r[yellow]使用加点数，全提升攻击力！\r（手机玩家请在物品栏双击\\d\\i[I335]宝石道具化\\d图标进入）",
                            "\t[老人,man]\b[this]如果你全部的加点数用于提升攻击，\r[yellow]你将应该用有13点攻击力\r！"
                        ],
                        "false": [
                            "\t[老人,man]\b[this]正如刚刚获得黄宝石时的提示，\r[lime]加点数可以暂存并随时在宝石道具化界面使用\r！",
                            {
                                "type": "function",
                                "function": "function(){\ncore.values.levelupPoint += core.values.yellowGem;\n}"
                            },
                            {
                                "type": "update"
                            },
                            "\t[老人,man]\b[this]现在，我凭空给了你2个额外的加点数，\r[yellow]请尝试在宝石道具化页面使用这2个加点数，并全加攻击力！\r",
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
        "12,8": {
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
                "\t[老人,man]\b[this]我身后是魔塔的商店。每当你击杀敌方单位时，能够获得一定数量的金币与经验。而\r[yellow]商店可以把金币与经验转化为你的能力\r。",
                "\t[老人,man]\b[this]由于魔塔中楼层与商店繁多，H5复刻版中包含了快捷商店。在商店已访问过的前提下，\r[lime]按V键可以呼出快捷商店界面\r，玩家可以快速通过商店购买能力或物品。",
                "\t[老人,man]\b[this]现在，请\r[yellow]去商店购买攻击力\r吧！",
                {
                    "type": "hide",
                    "remove": true
                }
            ]
        },
        "10,7": [
            {
                "type": "if",
                "condition": "(status:atk>=17)",
                "true": [
                    "\t[老人,man]\b[up]你已经访问过右侧的商店了。现在无论你在何处，\r[lime]按V键\r即可直接呼出该商店，无需当面购买。",
                    "\t[老人,man]\b[up]我左侧是一个箭头，角色只能按箭头指向的方向前进！",
                    {
                        "type": "hide",
                        "remove": true
                    }
                ],
                "false": [
                    "\t[老人,man]\b[up]请先去右边的商店购买能力，\r[yellow]攻击力不低于17\r时再来找我吧。"
                ]
            }
        ],
        "8,6": [
            "\t[老人,man]\b[this]我上方是一个大金币，\r[yellow]在物品栏使用它后\r可以获得数量客观的金币与经验。",
            "\t[老人,man]\b[this]绝大部分消耗类物品都需要在背包使用，\r[lime]按T键\r即可呼出背包界面，\r[lime]选中对应物品并再次点击\r即可使用。（手机玩家请在下方工具栏中点击左起第3项进入）",
            {
                "type": "choices",
                "text": "\t[流浪者,man]现在，请\r[yellow]拾起并使用\r我身后的大金币！",
                "choices": [
                    {
                        "text": "我知道怎么操作了，尝试",
                        "action": []
                    },
                    {
                        "text": "我没看懂怎么操作，重来",
                        "action": [
                            {
                                "type": "exit"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "hide",
                "remove": true
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
            "data": [
                {
                    "type": "if",
                    "condition": "(status:atk>=33)",
                    "true": [
                        "\t[老人,man]\b[up]看起来你已经学会通过\r[lime]按下V键\r呼出快捷商店了。需要说明：这里的快捷商店仅供教学使用，\r[yellow]在实际游玩中快捷商店是有限制的\r，部分访问过但不可达的商店不可快捷购买，请参考实际游戏过程中的提示信息！",
                        {
                            "type": "hide",
                            "remove": true
                        }
                    ],
                    "false": [
                        {
                            "type": "if",
                            "condition": "(switch:A===1)",
                            "true": [
                                {
                                    "type": "choices",
                                    "text": "\t[老人,man]\r[yellow]请通过快捷商店购买能力\r！\n如果一切正常，你将拥有33点攻击力！",
                                    "choices": [
                                        {
                                            "text": "我不知道如何使用大金币",
                                            "icon": "I339",
                                            "action": [
                                                "\t[老人,man]\b[up]\r[lime]按T键\r即可呼出背包界面，\r[lime]选中对应物品并再次点击\r即可使用。（手机玩家在下方工具栏中点击\\i[toolbox]左起第3项进入）"
                                            ]
                                        },
                                        {
                                            "text": "我不知道如何打开快捷商店",
                                            "icon": "moneyShop",
                                            "action": [
                                                "\t[老人,man]\b[up]\r[lime]按下V键\r打开快捷商店（手机玩家请在下方工具栏点击\\i[moneyShop]左数第5项）"
                                            ]
                                        },
                                        {
                                            "text": "我知道怎么做",
                                            "action": []
                                        }
                                    ]
                                }
                            ],
                            "false": [
                                "\t[老人,man]\b[up]现在你已经获得了大金币，有了相当多的金币，把它们用\r[yellow]在右边商店换取攻击\r就能击败我下方的敌物了。",
                                "\t[老人,man]\b[up]但是，因为箭头的存在，你似乎是回不去了。因此，现在请\r[lime]按下V键\r打开快捷商店，你仍然可以\r[yellow]通过快捷商店购买\r！（手机玩家请在下方工具栏点击\\i[moneyShop]左数第5项）",
                                {
                                    "type": "setValue",
                                    "name": "switch:A",
                                    "value": "1"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "5,9": [
            {
                "type": "openDoor"
            }
        ],
        "8,10": [
            "\t[老人,man]\b[this]我左边的敌方单位是“魔攻”怪，它们攻击时会无视角色的防御力。因此即使你拿了我右上方的\\i[blueGem]蓝宝石，它们对角色的伤害也不会降低。",
            "\t[老人,man]\b[this]但是，你注意到你状态栏中“魔防”一项了吗？魔攻怪的攻击可被魔防防御。",
            "\t[老人,man]\b[this]\r[yellow]当魔防有效化后，你的魔防值就会实际生效\r，防御魔攻怪的攻击。",
            "\t[老人,man]\b[this]现在，我将让你的魔防有效化。我身后的\\i[greenGem]绿宝石可以增加你的魔防！",
            {
                "type": "setGlobalValue",
                "name": "isMAGValid",
                "value": true
            },
            {
                "type": "update",
                "doNotCheckAutoEvents": true
            },
            "\t[老人,man]\b[this]你的魔防现在有效了！需要说明的是：在魔防被NPC有效化前，即使通过一些手段增加了魔防，其也没有实际效果，\r[#FF00FF]必须魔防有效化后才有实际作用！\r",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "4,10": [
            {
                "type": "if",
                "condition": "(blockId:5,9==='A385')",
                "true": [
                    "\t[老人,man]\b[down]注意到我右上方的这一堵与众不同的墙了吗？",
                    "\t[老人,man]\b[this]魔塔里有不少这样的墙，只要角色\r[lime]去撞击就会倒下\r，而后可供通行，这样的墙被称作“暗墙”或者“虚墙”。",
                    "\t[老人,man]\b[this]现在，请\r[yellow]撞开我右上方的暗墙\r吧！"
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.hasEquip('sword5')",
                        "true": [
                            "\t[老人,man]\b[this]你已经装备上\\i[sword5]神圣剑了！",
                            "\t[老人,man]\b[this]我下方的怪物被击杀后，角色\r[yellow]将获得\"衰弱\"异常状态\r，攻防将下降一定比例，但在\"衰弱\"状态解除后恢复。",
                            "\t[老人,man]\b[this]\r[yellow]请留意战斗前后角色的攻防数值！",
                            {
                                "type": "hide",
                                "remove": true
                            }
                        ],
                        "false": [
                            "\t[老人,man]\b[this]你获得了一把很厉害的\\i[sword5]神圣剑。但你需要\r[yellow]装备它\r才能发挥其功效。",
                            "\t[老人,man]\b[this]\r[lime]按下Q键\r即可呼出装备界面（手机玩家需要\r[lime]双击\\i[toolbox]物品栏图标\r呼出装备界面），现在，请装备上\\i[sword5]神圣剑！"
                        ]
                    }
                ]
            }
        ],
        "3,12": [
            {
                "type": "if",
                "condition": "core.hasFlag('weak')",
                "true": [
                    "\t[老人,man]\b[this]请先\r[yellow]在物品栏使用\\i[weakWine]解衰药水\r解除衰弱状态！此外，\r[lime]按下E键\r也可以快捷使用各类异常状态解药！",
                    {
                        "type": "if",
                        "condition": "(blockId:4,13==='weakWine')",
                        "true": [
                            "\t[weakWine]\b[this,4,13]我在这里！"
                        ]
                    },
                    {
                        "type": "exit"
                    }
                ]
            },
            "\t[老人,man]\b[this]除了有特殊能力的敌物可以给角色异常状态外，一些\r[yellow]路障也会给予角色异常状态\r，比如我左边的这些。",
            "\t[中毒网,poisonNet]\b[this,1,11]我是中毒网，踩上后，角色会被赋予\r[lime]“中毒”异常状态——每行走一步扣除10点生命值。\r",
            "\t[熔岩网,lavaNet]\b[this,1,10]我是熔岩网，踩上后，\r[#ff6060]扣除角色一定生命值\r，但不会给角色赋予异常状态。",
            "\t[老人,man]\b[this]我的左下角是\\i[poisonWine]解毒药水，可以解除角色的中毒状态，使用方法与解衰药水一致。请\r[yellow]前往获取\\i[freezeBadge]冰冻徽章，并在合理的时机使用解毒药水\r！",
            "\t[freezeBadge]\b[this,3,9]我在这里！",
            {
                "type": "choices",
                "text": "\t[老人,man]\r[yellow]需前往获取冰冻徽章，  \n并在合理的时机使用解毒药水\r\n是否已经了解下一步任务？",
                "choices": [
                    {
                        "text": "已了解，前往获取",
                        "action": [
                            {
                                "type": "hide",
                                "remove": true
                            },
                            {
                                "type": "autoSave"
                            },
                            {
                                "type": "tip",
                                "text": "自动存档成功！"
                            }
                        ]
                    },
                    {
                        "text": "不太清楚，回上一步",
                        "action": []
                    }
                ]
            }
        ],
        "6,13": [
            {
                "type": "if",
                "condition": "(blockId:3,9==='freezeBadge')",
                "true": [
                    "\t[老人,man]\b[this]请先获得\\i[freezeBadge]冰冻徽章后，再来找我！",
                    "\t[freezeBadge]\b[this,3,9]我在这里！",
                    {
                        "type": "exit"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(blockId:2,7==='bomb')",
                "true": [
                    {
                        "type": "if",
                        "condition": "(switch:A===1)",
                        "true": [
                            {
                                "type": "choices",
                                "text": "\t[老人,man]\r[yellow]G键使用楼层传送器传送到下楼梯口\n\r[yellow]从背包使用冰冻徽章获得炸弹\r\n手机玩家请通过下方工具栏图标使用相关道具\n您是否已经了解任务？",
                                "choices": [
                                    {
                                        "text": "了解，现在去做",
                                        "action": []
                                    },
                                    {
                                        "text": "不太了解，回上一步",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "switch:A",
                                                "value": "0"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        "false": [
                            "\t[老人,man]\b[this]看来你已经持有\\i[freezeBadge]冰冻徽章了！",
                            "\t[老人,man]\b[this]本层上楼梯口附近有一个怪物，你的生命值已经不够了，需要用\\i[bomb]炸弹解决。你可以\r[yellow]使用\\i[freezeBadge]冰冻徽章消除其上方的熔岩\r获得它！",
                            "\t[skeletonCaptain]\b[this,11,12]需要对我使用\\i[bomb]炸弹才可通过！",
                            "\t[bomb]\b[this,2,7]\r[yellow]使用\\i[freezeBadge]冰冻徽章消除我上方的熔岩\r即可获得我！",
                            "\t[老人,man]\b[this]但很遗憾，因为单向箭头的存在，你似乎无法回到最开始的位置了。所以，我送你一个\\i[fly]楼层传送器！",
                            {
                                "type": "setValue",
                                "name": "item:fly",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "setGlobalFlag",
                                "name": "flyNearStair",
                                "value": false
                            },
                            "\t[老人,man]\b[this]楼层传送器可以把你传送到已到达过的楼层，\r[lime]按下G键\r即可呼出使用界面！（手机用户请点击下方工具栏中的\\i[fly]第二项）",
                            "\t[老人,man]\b[this]尽管现在只有一层，但楼层传送器仍然\r[yellow]可以把你传送到本层的下楼梯处\r。",
                            "\b[this,1,1]本层下楼梯在这，在本层使用\\i[fly]楼层传送器，落点会在此处。",
                            "\t[老人,man]\b[this]现在，\r[lime]按下G键\r[yellow]使用楼层传送器传送到下楼梯口\r处，然后\r[yellow]使用冰冻徽章获得炸弹后，再来找我吧！",
                            {
                                "type": "setValue",
                                "name": "switch:A",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "type": "exit"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(switch:A===2)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(flag:lavaNetLevel===-1)",
                        "true": [
                            "\t[老人,man]\b[this]很好，现在的难度值更低了，你的生命值也足够通过我身后的路障了！",
                            "\t[老人,man]\b[this]正如刚刚演示的这样，\r[lime]难度选项可以在游戏中随时调整\r！",
                            "\t[老人,man]\b[this]但是，如果当前已生效效果，\r[#FF60FF]违反了更高难度选项的要求\r，那么更高的难度选项将\r[#FF60FF]不再可用\r！",
                            "\t[老人,man]\b[this]比如，在刚刚配置难度的时候，你应该已经发现：\r[yellow]难度项“熔岩网扣血效果+400%”不可选择\r。",
                            "\t[熔岩网,lavaNet]\b[this,1,10]这是因为刚才经过了我这里，当时只扣除了100点生命。这\r[#FF60FF]与难度更高的效果\"熔岩网扣血效果+400%\"相违背\r，所以这一项已经不可用了！",
                            "\t[老人,man]\b[this]但是，\r[yellow]您仍然可以选择更低的难度项\r，即“熔岩网扣血效果-95%”，现在它已经生效了，向前走吧！",
                            {
                                "type": "move",
                                "time": 500,
                                "keep": true,
                                "steps": [
                                    "up:1"
                                ]
                            },
                            "\t[老人,man]\b[this,6,12]如果你没有理解刚才的对话内容，与我接触会重放刚才的对话！"
                        ],
                        "false": [
                            {
                                "type": "choices",
                                "text": "\t[老人,man]\r[lime]按C键\r进入难度设置界面，\r[yellow]\n把难度调低，使得角色足够通过三个\\i[lavaNet]！\r\n手机玩家请通过\r[lime]背包的\\i[I337]难度设置图标\r进入",
                                "choices": [
                                    {
                                        "text": "我已明白，开始调整难度",
                                        "action": []
                                    },
                                    {
                                        "text": "不太明白，返回上一步",
                                        "action": [
                                            {
                                                "type": "setValue",
                                                "name": "switch:A",
                                                "operator": "-=",
                                                "value": "1"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "false": [
                    "\t[老人,man]\b[this]看上去你已经得到\\i[bomb]炸弹了！如果你前面的操作正确，到目前为止\r[yellow]你应该有19点生命值\r！",
                    {
                        "type": "if",
                        "condition": "(status:hp<19)",
                        "true": [
                            "\t[老人,man]\b[this]如果您的生命值不足19，可能因为：\n1. 有部分血瓶/宝石仍在背包中没有及时使用\n2. \\i[poisonWine]解毒药水使用时机不及时\n3. 获得\\i[bomb]炸弹后回来路上经过了不必要的夹击",
                            "\t[老人,man]\b[this]您可能需要读取存档，请在\r[yellow]生命值至少19\r的情况下来找我！"
                        ]
                    },
                    "\t[老人,man]\b[this]但是，这点生命值是不足以通过我身后的三个熔岩网的。借此机会，我将为你介绍本魔塔的\r[yellow]难度系统\r！",
                    "\t[老人,man]\b[this]难度系统，是本H5复刻版新增的功能，为了在原版的基础上增加一些挑战而设计。",
                    "\t[老人,man]\b[this]难度系统内\r[yellow]有许多可供选择的难度选项\r，\r[lime]按C键\r可以呼出难度配置界面！",
                    {
                        "type": "setValue",
                        "name": "item:I337",
                        "operator": "+=",
                        "value": "1"
                    },
                    "\t[老人,man]\b[this]除了\r[lime]按C键\r设置难度，直接\r[lime]在背包选择\\i[I337]难度设置图标\r也可进入相同的界面。现在，请\r[yellow]进入难度设置界面，将难度值调更低\r，使得你的生命值足够通过我身后的三个熔岩网！",
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "operator": "+=",
                        "value": "1"
                    }
                ]
            }
        ],
        "2,9": [
            "\t[老人,man]\b[this]我身后就是冰冻徽章，但获取它略有技巧。",
            "\t[老人,man]\b[this]\r[lime]轻按\r，是指想要获取在角色面前的物品时，\r[lime]直接拾起面前的物品，而角色不会产生位移\r。",
            "\t[老人,man]\b[this]这样的操作是可行的。在一些情况（比如现在的中毒状态）下，“轻按”可以节省生命值。",
            "\t[老人,man]\b[this]实际操作时，首先让角色面对要获得的物品，然后\r[lime]按下空格键（或在屏幕上双击角色）\r，即可实现轻按——不产生移动的情况下获得物品！",
            "\t[老人,man]\b[this]这里的冰冻徽章\r[#ff6060]需要使用“轻按”技巧获得\r，否则最终血量将不足！",
            {
                "type": "choices",
                "text": "\t[老人,man]轻按：不产生移动的情况下面前的获得物品\n\r[lime]按下空格键或双击角色可实现轻按\r\n您是否已了解了\"轻按\"的操作方式？",
                "choices": [
                    {
                        "text": "我已了解，开始实操",
                        "action": [
                            {
                                "type": "hide",
                                "remove": true
                            }
                        ]
                    },
                    {
                        "text": "没太看懂，再看一次",
                        "action": []
                    }
                ]
            }
        ],
        "6,12": [
            "\t[老人,man]\b[this]正如刚刚演示的这样，\r[lime]难度选项可以在游戏中随时调整，按C键或通过背包呼出界面\r即可 ！",
            "\t[老人,man]\b[this]但是，如果当前已生效效果，\r[#FF60FF]违反了更高难度选项的要求\r，那么更高的难度选项将\r[#FF60FF]不再可用\r！",
            "\t[老人,man]\b[this]比如，在刚刚配置难度的时候，你应该已经发现：\r[yellow]难度项“熔岩网扣血效果+400%”不可选择\r。",
            "\t[熔岩网,lavaNet]\b[this,1,10]这是因为刚才经过了我这里，当时只扣除了100点生命。这\r[#FF60FF]与难度更高的效果\"熔岩网扣血效果+400%\"相违背\r，所以这一项已经不可用了！",
            "\t[老人,man]\b[this]但是，\r[yellow]您仍然可以选择更低的难度项\r，即“熔岩网扣血效果-95%”，现在它已经生效了，向前走吧！"
        ],
        "10,13": [
            {
                "type": "if",
                "condition": "(switch:A===1)",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[老人,man]\r[lime]按C键或通过背包\r可以呼出难度设置界面\n游戏过程中\r[lime]可以随时调整难度设置\r，\n但\r[yellow]违反更高难度效果时，对应选项将失效！\n\r您是否已大致了解难度系统的特性？",
                        "choices": [
                            {
                                "text": "我已大致了解，继续",
                                "action": [
                                    "\t[老人,man]\b[this]需要说明的是，正式游戏的难度选项将更多，难度\r[yellow]选项间可能存在依赖关系\r，且系统也更加复杂。届时请仔细阅读相关说明！",
                                    {
                                        "type": "setValue",
                                        "name": "status:hp",
                                        "value": "200"
                                    },
                                    "\t[老人,man]\b[this]现在，我\r[yellow]把你的生命变为200\r，但仍需要\r[yellow]使用\\i[bomb]炸弹消灭我右上角的敌人\r！",
                                    "\t[skeletonCaptain]\b[this,11,12]我在这里，你需要\r[yellow]先朝向我，然后\\i[bomb]使用炸弹\r来消灭我！直接与我战斗的话，你的生命将不足以通过我身后的路障！",
                                    "\t[老人,man]\b[this]提示：\r[lime]按下Z键，或单击角色\r，可以实现角色的原地转向！",
                                    {
                                        "type": "move",
                                        "time": 500,
                                        "keep": true,
                                        "steps": [
                                            "right:2"
                                        ]
                                    },
                                    "\t[老人,man]\b[this,12,13]我在这里，如果仍有不懂可以来找我对话！"
                                ]
                            },
                            {
                                "text": "不太理解，请再说一次",
                                "action": [
                                    "\t[老人,man]\b[this]难度系统，是本H5复刻版新增的功能，为了在原版的基础上增加一些挑战而设计。",
                                    "\t[老人,man]\b[this]难度系统内\r[yellow]有许多可供选择的难度选项\r，\r[lime]按C键\r可以呼出难度配置界面，直接\r[lime]在背包选择\\i[I337]难度设置图标\r也可进入相同的界面（适用于手机玩家）！",
                                    "\t[老人,man]\b[this]\r[lime]难度选项可以在游戏中随时调整，按C键或通过背包呼出界面\r即可 ！",
                                    "\t[老人,man]\b[this]但是，如果当前已生效效果，\r[#FF60FF]违反了更高难度选项的要求\r，那么更高的难度选项将\r[#FF60FF]不再可用\r！",
                                    "\t[老人,man]\b[this]比如，在刚刚配置难度的时候，你应该已经发现：\r[yellow]难度项“熔岩网扣血效果+400%”不可选择\r。",
                                    "\t[熔岩网,lavaNet]\b[this,1,10]这是因为刚才经过了我这里，当时只扣除了100点生命。这\r[#FF60FF]与难度更高的效果\"熔岩网扣血效果+400%\"相违背\r，所以这一项已经不可用了！",
                                    "\t[熔岩网,lavaNet]\b[this,7,13]而你在选择了难度更低的“熔岩网扣血效果-95%”后通过了我这里，于是\r[#FF60FF]之前的\"熔岩网扣血效果遵循原版\"也不可用了！",
                                    "\t[老人,man]\b[this]您可以\r[lime]按C键或通过背包\r打开难度设置界面验证：相关的难度选项是否已经失效！"
                                ]
                            }
                        ]
                    }
                ],
                "false": [
                    "\t[老人,man]\b[this]刚刚经过路障的时候，由于更低的难度效果已生效，所以\r[#FF60FF]之前的难度项\"熔岩网扣血效果遵循原版\"也不可用了\r！",
                    "\t[老人,man]\b[this]您可以\r[lime]按C键或通过背包\r打开难度设置界面验证：相关的难度选项是否已经失效！",
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "1"
                    }
                ]
            }
        ],
        "12,13": [
            "\t[老人,man]\b[this]你需要\r[yellow]使用\\i[bomb]炸弹消灭我左上角的敌人\r！",
            "\t[老人,man]\b[this]首先\r[lime]按下Z键或单击角色\r，原地调整角色朝向面向敌人，然后使用\\i[bomb]炸弹即可！",
            "\t[老人,man]\b[this]需要说明：\r[lime]单击角色\r是改变角色朝向，而\r[lime]双击角色\r是轻按获取面前的物品，你获得\\i[freezeBadge]冰冻徽章的时候曾使用过“轻按”的技巧。"
        ],
        "12,11": [
            {
                "type": "if",
                "condition": "(switch:A===1)",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[老人,man]\r[lime]按下H键\r可查阅本魔塔所有键位，\n手机玩家\r[lime]点击下方\\i[keyboard]\r开启虚拟键盘\n您是否已了解上述两条信息？",
                        "choices": [
                            {
                                "text": "已了解，下一步",
                                "action": [
                                    "\t[老人,man]\b[this]我身后是上楼梯，可以到达当前楼层的后一层。",
                                    "\t[老人,man]\b[this]但教程关没有更多楼层了，因此到达楼梯口即视为通过教程关！请向前吧！",
                                    {
                                        "type": "hide",
                                        "remove": true
                                    }
                                ]
                            },
                            {
                                "text": "我再试试，上一步",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "switch:A",
                                        "operator": "-=",
                                        "value": "1"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "false": [
                    "\t[老人,man]\b[this]恭喜你来到了这里，只差一步就能通过教学关卡了！",
                    "\t[老人,man]\b[this]我现在给于你最后的提示：因为本魔塔键位较多一时难以记住，\r[lime]按下H键\r可以随时查阅本魔塔的全部键位！而手机玩家可以\r[lime]点击下方工具栏\\i[keyboard]第4项\r开启虚拟键盘！",
                    "\t[老人,man]\b[this]去试一试吧！",
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "operator": "+=",
                        "value": "1"
                    }
                ]
            }
        ],
        "13,11": [
            {
                "type": "setText",
                "time": 0
            },
            "\t[H5复刻作者]恭喜通过教程关！更多内容实际游戏中会有NPC再次提示。",
            "\t[H5复刻作者]真正游戏中的第0层就有许多NPC，他们也会给你一些操作上的提示，请留意。",
            "\t[H5复刻作者]现在将返回标题界面，开始新游戏进行真正的游玩吧！祝你玩得愉快！",
            {
                "type": "restart"
            }
        ]
    },
    "changeFloor": {},
    "beforeBattle": {
        "3,5": [
            "\t[绿头怪,greenSlime]\b[this]战胜敌方单位后，通常你将获得一定数量的金币/经验，在之后可以用它们换取资源。"
        ],
        "11,12": [
            "\t[skeletonCaptain]\b[this]直接触碰我将与我战斗！请通过\r[lime]按下Z键或单击角色\r的方式调整角色朝向，并对我使用炸弹。",
            "\t[skeletonCaptain]\b[this]在真正的游戏中，\r[yellow]如果你无法战胜我，触碰我不会进入战斗\r。但是，为了教你学会角色原地转向，现在\r[red]我将与你强制战斗！",
            "\t[skeletonCaptain]\b[this]请注意，\r[lime]每次战斗前游戏将自动存档\r，所以与我战斗后可以\r[lime]按下A键\r（或在存档页面读取自动存档）撤销操作！"
        ]
    },
    "afterBattle": {
        "6,2": [
            "\t[红头怪,redSlime]\b[this]你成功击败了我。",
            "\t[红头怪,redSlime]\b[this]如果不小心点错了，错误地击杀了怪物或开启了门等，\r[lime]按下A键可撤回操作\r。",
            "\t[红头怪,redSlime]\b[this]但注意，撤回的\r[#FF4040]次数是有上限的\r，现在试着不断地\r[lime]按下A键进行撤回\r吧，这样我就能复活了！"
        ],
        "10,5": [
            {
                "type": "setValue",
                "name": "flag:tutorialDoor",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:tutorialDoor===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            6
                        ]
                    }
                ]
            }
        ],
        "12,5": [
            {
                "type": "setValue",
                "name": "flag:tutorialDoor",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flag:tutorialDoor===2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            6
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {
        "13,3": [
            "\t[yellowGem]\b[this]获得的加点点数不一定要立刻使用。游戏中可随时\r[lime]按2键进入宝石道具化页面\r。该页面中也有加点系统的入口。",
            "\t[yellowGem]\b[this]提示：本教程关卡中，\r[yellow]加点请全加攻击\r！"
        ],
        "8,5": [
            {
                "type": "show",
                "loc": [
                    [
                        7,
                        7
                    ]
                ]
            }
        ],
        "3,9": {
            "disableOnGentleClick": true,
            "data": [
                "\t[freezeBadge]看上去您并没有“轻按”成功！这可能导致最终血量不足！再次提醒：\r[yellow]按下空格键或双击角色即可实现轻按\r！您可能需要读档重试！"
            ]
        },
        "2,7": [
            {
                "type": "show",
                "loc": [
                    [
                        7,
                        2
                    ]
                ]
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040, 88,  0,121,  3, 31,  3, 31,204,  3, 31, 32, 34, 33,20042],
    [20040,  0,  0,  0,  3,121,202,121,  0,121,377, 27, 28,  3,20042],
    [20040,  0,  0,  0,  3, 81,  3, 31,204,  3, 32,  0,121, 30,20042],
    [20040,  3,121,  3,  3,  0,  3,  3,  3,  3,  3, 82,  3,  3,20042],
    [20040,  0,  0,201,  0,121, 22,  3,339,  3,203,121,203,  3,20042],
    [20040,  5,  5,  3,  3, 21, 23,  3,121,  3,  3, 85,  3,  3,20042],
    [20040,  3, 49,  3,  3,  3,  3,121,  0,163,121,  0,  0, 33,20042],
    [20040,  3,  3,  3, 34, 43,  3,217,  3,  3,  3,  0,121,  0,20042],
    [20040,  0,121, 54,  3,385,  3, 34,  0, 28,  3,  7,131,  8,20042],
    [20040, 11,  3,  3,121,  0,217,  0,121,  3,  3,  3,  3,  3,20042],
    [20040, 12,  3,  3,407,  3,  3,  3, 29, 29,  3, 11,121, 87,20042],
    [20040,  0,  0,121,  0,  3,  0,  3,  3,  3,  3,211,  3,  3,20042],
    [20040, 31, 58,  3, 59,  0,121, 11, 11, 11,121,  0,  0,  3,20042],
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042]
],
    "bgmap": [
    [10040,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10042],
    [10040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10042],
    [10040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10042],
    [10040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10042],
    [10040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10042],
    [10040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10042],
    [10040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10042],
    [10040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10042],
    [10040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10042],
    [10040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10042],
    [10040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10042],
    [10040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10042],
    [10040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10042],
    [10040,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10042],
    [10040,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10042]
],
    "fgmap": [

],
    "flyPoint": [
        1,
        1
    ]
}