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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10042],
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
            "\t[hero,hero]\b[hero]这里是......魔塔？",
            "\t[仙子,fairy]\b[this]对啊，这里就是关押着公主和国王的地方。",
            "\t[hero,hero]\b[hero]哦，你是这座塔的守护神么？",
            "\t[仙子,fairy]\b[this]呵呵，我是国家的仙子啦。",
            "\t[hero,hero]\b[hero]哦，你在这干什么？",
            "\t[仙子,fairy]\b[this]等你……",
            "\t[hero,hero]\b[hero]我？为什么？",
            "\t[仙子,fairy]\b[this]你不要去救他们了。",
            "\t[hero,hero]\b[hero]为什么？这是我的任务！",
            "\t[仙子,fairy]\b[this]这个国家不值得你救……\n你一定要救么？",
            "\t[hero,hero]\b[hero]是的！",
            "\t[仙子,fairy]\b[this]好吧，怪物抢走了国家的很多宝物，你可用那些救出公主国王。",
            "\t[hero,hero]\b[hero]只有宝物么？应该还有别的吧，记得上一个魔塔还有商店的。",
            "\t[仙子,fairy]\b[this]好像还有加怪物能力的商店，我想对你也合适吧。",
            "\t[hero,hero]\b[hero]！@#￥%……&*（）——+o(╯□╰)o",
            "\t[仙子,fairy]\b[this]如果你真的想救，我还会给你派来圣人来的，他们在魔塔里等你。",
            "\t[hero,hero]\b[hero]圣人不怕死么，敢到魔塔里。",
            "\t[仙子,fairy]\b[this]圣人嘛，永恒的存在，无限的力量。",
            "\t[hero,hero]\b[hero]那为什么他们不救国家？！",
            "\t[仙子,fairy]\b[this]圣人...不牵扯...你们的...选择\n去吧，勇士，一路顺风！",
            "\t[仙子,fairy]\b[this]最后建议你……不值得……",
            {
                "type": "if",
                "condition": "(flag:hard!==3)",
                "true": [],
                "false": [
                    "\t[hero,hero]\b[hero]我一定要去！",
                    "\t[仙子,fairy]\b[this]好吧……等等，你好弱，你先去魔法草原吧。",
                    {
                        "type": "changeFloor",
                        "floorId": "NM_FEK0",
                        "loc": [
                            7,
                            13
                        ],
                        "direction": "down",
                        "time": 200
                    }
                ]
            },
            {
                "type": "hide",
                "remove": true,
                "time": 2000
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
            "\t[隐者,recluse]\b[this]字母键盘上的\"1\"可以决定血瓶是否道具化；\n字母键盘上的\"2\"可以决定宝石是否道具化；\n字母键盘上的\"3\"可以使用解除异常状态的药水。\n字母键盘上的\"4\"可以查看法杖效果；"
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
        "6,4": [
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        2
                    ]
                ],
                "remove": true
            }
        ],
        "7,4": [
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        2
                    ]
                ],
                "remove": true
            }
        ],
        "8,4": [
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        2
                    ]
                ],
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "7,13": {
            "floorId": ":next",
            "stair": "downFloor"
        },
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