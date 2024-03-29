main.floors.NM_FEK0=
{
    "floorId": "NM_FEK0",
    "title": "魔法草原",
    "name": "魔法草原",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [
        "\t[Joey Cooper]我临时加的，它的难度属困难。",
        {
            "type": "playSound",
            "name": "029-Door06.mp3"
        },
        "\t[Joey Cooper]作弊器关闭。",
        {
            "type": "setValue",
            "name": "flag:s190_NoCheating",
            "value": "1",
            "norefresh": true
        },
        {
            "type": "setBlock",
            "number": "X20040",
            "loc": [
                [
                    0,
                    7
                ]
            ],
            "floorId": "MT0"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,1": {
            "floorId": "NM_FEX1",
            "direction": "down",
            "time": 200,
            "ignoreChangeFloor": true
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "11,13": [
            {
                "type": "setValue",
                "name": "status:hp",
                "operator": "-=",
                "value": "1"
            }
        ],
        "7,6": [
            {
                "type": "setValue",
                "name": "status:hp",
                "operator": "-=",
                "value": "1"
            }
        ],
        "10,9": [
            {
                "type": "setValue",
                "name": "status:hp",
                "operator": "-=",
                "value": "1"
            }
        ],
        "1,4": [
            {
                "type": "setValue",
                "name": "status:hp",
                "operator": "-=",
                "value": "1"
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042],
    [20040, 89,  0,354,  0, 20,  0,  0,  0,  0,353,  0, 20, 20,20042],
    [20040, 20, 20, 20,  0, 20,351,351,351, 20,353,353,  0, 20,20042],
    [20040,  0,349,349,349, 20,  0, 20,  0, 20, 20, 28, 31, 27,20042],
    [20040, 32,  0, 20,349,349,349, 20,352,  0,  0, 20, 20, 20,20042],
    [20040,353, 20,  0, 20, 20, 28,352,  0, 20, 20,349,349, 27,20042],
    [20040,349,  0,  0,352,  0, 20, 32, 28, 20,349,  0,349, 20,20042],
    [20040, 31, 20, 27, 31,  0, 20, 20,351,  0,  0, 20, 20, 20,20042],
    [20040, 20, 20, 20,351, 20, 20, 31,346,348, 28,  0,  0, 20,20042],
    [20040, 31, 20,  0,  0,330, 27, 20,330, 20, 32, 20,348,  0,20042],
    [20040, 28, 20,  0,  0, 20,348, 20, 27,  0, 20,  0, 20, 27,20042],
    [20040, 27, 20,346, 20,330,330,  0,  0,  0,  0,346,346,  0,20042],
    [20040,330, 20,330,  0,  0, 20,  0, 20, 20,  0, 20, 20, 20,20042],
    [20040,  0,  0,330, 20, 20, 20,  0, 20, 20,  0, 32,330,343,20042],
    [20040,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20041,20042]
],
    "bgmap": [
    [10040,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10042],
    [10040,142,142,142,142,142,142,142,142,142,142,142,142,142,10042],
    [10040,142,142,142,142,142,142,142,142,142,142,142,142,142,10042],
    [10040,142,142,142,142,142,142,142,142,142,142,142,142,142,10042],
    [10040,142,142,142,142,142,142,142,142,142,142,142,142,142,10042],
    [10040,142,142,142,142,142,142,142,142,142,142,142,142,142,10042],
    [10040,142,142,142,142,142,142,142,142,142,142,142,142,142,10042],
    [10040,142,142,142,142,142,142,142,142,142,142,142,142,142,10042],
    [10040,142,142,142,142,142,142,142,142,142,142,142,142,142,10042],
    [10040,142,142,142,142,142,142,142,142,142,142,142,142,142,10042],
    [10040,142,142,142,142,142,142,142,142,142,142,142,142,142,10042],
    [10040,142,142,142,142,142,142,142,142,142,142,142,142,142,10042],
    [10040,142,142,142,142,142,142,142,142,142,142,142,142,142,10042],
    [10040,142,142,142,142,142,142,142,142,142,142,142,142,142,10042],
    [10040,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10041,10042]
],
    "fgmap": [

],
    "bgm": "mine.mp3",
    "weather": [
        "snow",
        3
    ]
}