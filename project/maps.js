var maps_90f36752_8815_4be8_b32b_d7fad1d0542e = 
{
	"1": {"cls":"animates","id":"yellowWall","canBreak":true,"animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{}},"cannotOut":["up","down","left","right"],"canDestoriedByReels":true},
	"2": {"cls":"animates","id":"whiteWall","canBreak":true,"animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{}},"cannotOut":["up","down","left","right"],"canDestoriedByReels":true},
	"3": {"cls":"animates","id":"blueWall","canBreak":true,"animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{}},"cannotOut":["up","down","left","right"],"canDestoriedByReels":true},
	"4": {"cls":"animates","id":"star","name":"星空","canDestoriedByReels":true},
	"5": {"cls":"animates","id":"lava","name":"岩浆","canDestoriedByReels":true},
	"6": {"cls":"animates","id":"ice","doorInfo":{"time":160,"openSound":"破冰镐","closeSound":"door.mp3","keys":{"icePickaxe":1}},"animate":1,"canDestoriedByReels":true},
	"7": {"cls":"terrains","id":"blueShopLeft"},
	"8": {"cls":"terrains","id":"blueShopRight"},
	"9": {"cls":"terrains","id":"pinkShopLeft"},
	"10": {"cls":"terrains","id":"pinkShopRight"},
	"11": {"cls":"animates","id":"lavaNet","canPass":true,"trigger":"null","script":"(function () {\n\t// 血网的伤害效果移动到 checkBlock 中处理\n\n\t// 如果要做一次性血网，可直接注释掉下面这句话：\n\t// core.removeBlock(core.getHeroLoc('x'), core.getHeroLoc('y'));\n})();","name":"血网"},
	"12": {"cls":"animates","id":"poisonNet","canPass":true,"trigger":"null","script":"(function () {\n\tif (!core.hasItem('amulet')) {\n\t\tcore.triggerDebuff('get', 'poison');\n\t\tcore.updateStatusBar();\n\t}\n\n\t// 如果要做一次性毒网，可直接注释掉下面这句话：\n\t// core.removeBlock(core.getHeroLoc('x'), core.getHeroLoc('y'));\n})()","name":"毒网"},
	"13": {"cls":"animates","id":"weakNet","canPass":true,"trigger":"null","script":"(function () {\n\tif (!core.hasItem('amulet')) {\n\t\tcore.triggerDebuff('get', 'weak');\n\t\tcore.updateStatusBar();\n\t}\n\n\t// 如果要做一次性衰网，可直接注释掉下面这句话：\n\t// core.removeBlock(core.getHeroLoc('x'), core.getHeroLoc('y'));\n})()","name":"衰网"},
	"14": {"cls":"animates","id":"curseNet","canPass":true,"trigger":"null","script":"(function () {\n\tif (!core.hasItem('amulet')) {\n\t\tcore.triggerDebuff('get', 'curse');\n\t\tcore.updateStatusBar();\n\t}\n\n\t// 如果要做一次性咒网，可直接注释掉下面这句话：\n\t// core.removeBlock(core.getHeroLoc('x'), core.getHeroLoc('y'));\n})()","name":"咒网"},
	"15": {"cls":"animates","id":"blueLava","canDestoriedByReels":true},
	"16": {"cls":"animates","id":"water","canDestoriedByReels":true},
	"20": {"cls":"autotile","id":"autotile"},
	"21": {"cls":"items","id":"yellowKey"},
	"22": {"cls":"items","id":"blueKey"},
	"23": {"cls":"items","id":"redKey"},
	"24": {"cls":"items","id":"greenKey"},
	"25": {"cls":"items","id":"steelKey"},
	"26": {"cls":"items","id":"bigKey"},
	"27": {"cls":"items","id":"redGem"},
	"28": {"cls":"items","id":"blueGem"},
	"29": {"cls":"items","id":"greenGem"},
	"30": {"cls":"items","id":"yellowGem"},
	"31": {"cls":"items","id":"redPotion"},
	"32": {"cls":"items","id":"bluePotion"},
	"33": {"cls":"items","id":"greenPotion"},
	"34": {"cls":"items","id":"yellowPotion"},
	"35": {"cls":"items","id":"sword1"},
	"36": {"cls":"items","id":"shield1"},
	"37": {"cls":"items","id":"sword2"},
	"38": {"cls":"items","id":"shield2"},
	"39": {"cls":"items","id":"sword3"},
	"40": {"cls":"items","id":"shield3"},
	"41": {"cls":"items","id":"sword4"},
	"42": {"cls":"items","id":"shield4"},
	"43": {"cls":"items","id":"sword5"},
	"44": {"cls":"items","id":"shield5"},
	"45": {"cls":"items","id":"book_old"},
	"46": {"cls":"items","id":"fly_old"},
	"47": {"cls":"items","id":"pickaxe"},
	"48": {"cls":"items","id":"icePickaxe"},
	"49": {"cls":"items","id":"bomb"},
	"50": {"cls":"items","id":"centerFly"},
	"51": {"cls":"items","id":"upFly"},
	"52": {"cls":"items","id":"downFly"},
	"53": {"cls":"items","id":"coin"},
	"54": {"cls":"items","id":"freezeBadge"},
	"55": {"cls":"items","id":"cross"},
	"56": {"cls":"items","id":"superPotion"},
	"57": {"cls":"items","id":"earthquake"},
	"58": {"cls":"items","id":"poisonWine"},
	"59": {"cls":"items","id":"weakWine"},
	"60": {"cls":"items","id":"curseWine"},
	"61": {"cls":"items","id":"superWine"},
	"62": {"cls":"items","id":"dagger"},
	"63": {"cls":"items","id":"pack"},
	"64": {"cls":"items","id":"amulet"},
	"65": {"cls":"items","id":"hammer"},
	"68": {"cls":"items","id":"lifeWand"},
	"69": {"cls":"items","id":"jumpShoes"},
	"70": {"cls":"items","id":"sword0"},
	"71": {"cls":"items","id":"shield0"},
	"72": {"cls":"items","id":"skill1"},
	"73": {"cls":"items","id":"wand"},
	"81": {"cls":"animates","id":"yellowDoor","trigger":"openDoor","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"yellowKey":1}},"name":"黄门","canDestoriedByReels":true},
	"82": {"cls":"animates","id":"blueDoor","trigger":"openDoor","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"blueKey":1}},"name":"蓝门"},
	"83": {"cls":"animates","id":"redDoor","trigger":"openDoor","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"redKey":1}},"name":"红门"},
	"84": {"cls":"animates","id":"greenDoor","trigger":"openDoor","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"greenKey":1}},"name":"绿门"},
	"85": {"cls":"animates","id":"specialDoor","trigger":"openDoor","animate":1,"doorInfo":{"time":160,"openSound":"029-Door06.ogg","closeSound":"029-Door06.ogg","keys":{"specialKey":1}},"name":"机关门"},
	"86": {"cls":"animates","id":"steelDoor","trigger":"openDoor","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"steelKey":1,"allSteel:o":1}},"name":"铁门"},
	"87": {"cls":"terrains","id":"upFloor","canPass":true},
	"88": {"cls":"terrains","id":"downFloor","canPass":true},
	"89": {"cls":"animates","id":"portal","canPass":true},
	"90": {"cls":"animates","id":"starPortal","canPass":true},
	"91": {"cls":"animates","id":"upPortal","canPass":true},
	"92": {"cls":"animates","id":"leftPortal","canPass":true},
	"93": {"cls":"animates","id":"downPortal","canPass":true},
	"94": {"cls":"animates","id":"rightPortal","canPass":true},
	"101": {"cls":"animates","id":"crystalUp"},
	"102": {"cls":"animates","id":"crystalBottom"},
	"103": {"cls":"animates","id":"fire"},
	"104": {"cls":"animates","id":"switch","canPass":true,"script":"(function () {\n\tvar blockMapper = { 'X10222': 'X10230', 'X10230': 'X10222', 'X10236': 'X10237', 'X10237': 'X10236' };\n\tvar actions = core.searchBlock(\"X102(22|30|36|37)\").map(function (block) {\n\t\treturn {\n\t\t\t\"type\": \"setBlock\",\n\t\t\t\"number\": blockMapper[block.block.event.id],\n\t\t\t\"loc\": [\n\t\t\t\t[block.x, block.y]\n\t\t\t],\n\t\t\t\"async\": true\n\t\t};\n\t});\n\tactions.push({ \"type\": \"waitAsync\" });\n\tcore.insertAction(actions);\n})();"},
	"109": {"cls":"animates","id":"magentaWall","canBreak":true,"animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{}},"canDestoriedByReels":true},
	"121": {"cls":"npcs","id":"man"},
	"122": {"cls":"npcs","id":"trader"},
	"123": {"cls":"npcs","id":"thief"},
	"124": {"cls":"npcs","id":"fairy"},
	"125": {"cls":"npcs","id":"wizard"},
	"126": {"cls":"npcs","id":"recluse"},
	"127": {"cls":"npcs","id":"king"},
	"128": {"cls":"npcs","id":"youngMan"},
	"129": {"cls":"npcs","id":"sign"},
	"130": {"cls":"npcs","id":"expShop"},
	"131": {"cls":"npcs","id":"moneyShop"},
	"132": {"cls":"npcs","id":"princess"},
	"133": {"cls":"npc48","id":"npc0","faceIds":{"down":"npc0","left":"npc1","right":"npc2","up":"npc3"},"animate":1},
	"134": {"cls":"npc48","id":"npc1","faceIds":{"down":"npc0","left":"npc1","right":"npc2","up":"npc3"},"animate":1},
	"135": {"cls":"npc48","id":"npc2","faceIds":{"down":"npc0","left":"npc1","right":"npc2","up":"npc3"},"animate":1},
	"136": {"cls":"npc48","id":"npc3","faceIds":{"down":"npc0","left":"npc1","right":"npc2","up":"npc3"},"animate":1},
	"137": {"cls":"npcs","id":"greenMan"},
	"138": {"cls":"npcs","id":"blueTrader"},
	"140": {"cls":"autotile","id":"autotile4"},
	"141": {"cls":"autotile","id":"autotile5","canDestoriedByReels":true},
	"142": {"cls":"autotile","id":"autotile6","canPass":true},
	"143": {"cls":"autotile","id":"autotile7"},
	"151": {"cls":"autotile","id":"autotile1"},
	"152": {"cls":"autotile","id":"autotile2"},
	"153": {"cls":"autotile","id":"autotile3"},
	"161": {"cls":"terrains","id":"arrowUp","canPass":true,"cannotOut":["left","right","down"],"cannotIn":["up"],"canDestoriedByReels":true},
	"162": {"cls":"terrains","id":"arrowDown","canPass":true,"cannotOut":["left","right","up"],"cannotIn":["down"],"canDestoriedByReels":true},
	"163": {"cls":"terrains","id":"arrowLeft","canPass":true,"cannotOut":["up","down","right"],"cannotIn":["left"],"canDestoriedByReels":true},
	"164": {"cls":"terrains","id":"arrowRight","canPass":true,"cannotOut":["up","down","left"],"cannotIn":["right"],"canDestoriedByReels":true},
	"165": {"cls":"terrains","id":"light","trigger":"null","canPass":true,"script":"(function () {\n\tcore.setBlock(core.getNumberById('darkLight'), core.getHeroLoc('x'), core.getHeroLoc('y'));\n})();"},
	"166": {"cls":"terrains","id":"darkLight"},
	"167": {"cls":"terrains","id":"ski","trigger":"ski","canPass":true},
	"168": {"cls":"terrains","id":"flower","canPass":true},
	"169": {"cls":"terrains","id":"box","trigger":"pushBox"},
	"170": {"cls":"terrains","id":"boxed","trigger":"pushBox"},
	"201": {"cls":"enemys","id":"greenSlime"},
	"202": {"cls":"enemys","id":"redSlime"},
	"203": {"cls":"enemys","id":"blackSlime"},
	"204": {"cls":"enemys","id":"slimelord"},
	"205": {"cls":"enemys","id":"bat"},
	"206": {"cls":"enemys","id":"bigBat"},
	"207": {"cls":"enemys","id":"redBat"},
	"208": {"cls":"enemys","id":"vampire"},
	"209": {"cls":"enemys","id":"skeleton"},
	"210": {"cls":"enemys","id":"skeletonWarrior"},
	"211": {"cls":"enemys","id":"skeletonCaptain"},
	"212": {"cls":"enemys","id":"ghostSoldier"},
	"213": {"cls":"enemys","id":"zombie"},
	"214": {"cls":"enemys","id":"zombieKnight"},
	"215": {"cls":"enemys","id":"rock"},
	"216": {"cls":"enemys","id":"slimeman"},
	"217": {"cls":"enemys","id":"bluePriest"},
	"218": {"cls":"enemys","id":"redPriest"},
	"219": {"cls":"enemys","id":"brownWizard"},
	"220": {"cls":"enemys","id":"redWizard"},
	"221": {"cls":"enemys","id":"yellowGateKeeper"},
	"222": {"cls":"enemys","id":"blueGateKeeper"},
	"223": {"cls":"enemys","id":"redGateKeeper"},
	"224": {"cls":"enemys","id":"swordsman"},
	"225": {"cls":"enemys","id":"soldier"},
	"226": {"cls":"enemys","id":"yellowKnight"},
	"227": {"cls":"enemys","id":"redKnight"},
	"228": {"cls":"enemys","id":"darkKnight"},
	"229": {"cls":"enemys","id":"blackKing"},
	"230": {"cls":"enemys","id":"yellowKing"},
	"231": {"cls":"enemys","id":"greenKing"},
	"232": {"cls":"enemys","id":"blueKnight"},
	"233": {"cls":"enemys","id":"goldSlime"},
	"234": {"cls":"enemys","id":"poisonSkeleton"},
	"235": {"cls":"enemys","id":"poisonBat"},
	"236": {"cls":"enemys","id":"ironRock"},
	"237": {"cls":"enemys","id":"skeletonPriest"},
	"238": {"cls":"enemys","id":"skeletonKing"},
	"239": {"cls":"enemys","id":"skeletonPresbyter"},
	"240": {"cls":"enemys","id":"skeletonKnight"},
	"241": {"cls":"enemys","id":"evilHero"},
	"242": {"cls":"enemys","id":"devilWarrior"},
	"243": {"cls":"enemys","id":"demonPriest"},
	"244": {"cls":"enemys","id":"goldHornSlime"},
	"245": {"cls":"enemys","id":"redKing"},
	"246": {"cls":"enemys","id":"blueKing"},
	"247": {"cls":"enemys","id":"magicMaster"},
	"248": {"cls":"enemys","id":"silverSlime"},
	"249": {"cls":"enemys","id":"blademaster"},
	"250": {"cls":"enemys","id":"whiteHornSlime"},
	"251": {"cls":"enemys","id":"evilPrincess"},
	"252": {"cls":"enemys","id":"evilFairy"},
	"253": {"cls":"enemys","id":"yellowPriest"},
	"254": {"cls":"enemys","id":"redSwordsman"},
	"255": {"cls":"enemys","id":"whiteSlimeman"},
	"256": {"cls":"enemys","id":"poisonZombie"},
	"257": {"cls":"enemys","id":"dragon"},
	"258": {"cls":"enemys","id":"octopus"},
	"259": {"cls":"enemys","id":"fairyEnemy"},
	"260": {"cls":"enemys","id":"princessEnemy"},
	"261": {"cls":"enemy48","id":"angel"},
	"262": {"cls":"enemy48","id":"elemental"},
	"263": {"cls":"enemy48","id":"steelGuard"},
	"264": {"cls":"enemy48","id":"evilBat"},
	"265": {"cls":"enemys","id":"silverSlimelord"},
	"266": {"cls":"enemys","id":"goldSlimelord"},
	"267": {"cls":"enemys","id":"grayRock"},
	"270": {"cls":"enemys","id":"greenKnight"},
	"271": {"cls":"enemys","id":"bowman"},
	"272": {"cls":"enemys","id":"purpleBowman"},
	"275": {"cls":"enemys","id":"watcherSlime"},
	"277": {"cls":"enemys","id":"frostBat"},
	"278": {"cls":"enemys","id":"devilKnight"},
	"279": {"cls":"enemys","id":"grayPriest"},
	"280": {"cls":"enemys","id":"greenGateKeeper"},
	"300": {"cls":"terrains","id":"ground"},
	"301": {"cls":"terrains","id":"sWallT","name":"薄墙-上","cannotOut":["up"],"cannotIn":["up"]},
	"302": {"cls":"terrains","id":"sWallL","name":"薄墙-左","cannotOut":["left"],"cannotIn":["left"]},
	"303": {"cls":"terrains","id":"sWallR","name":"薄墙-右","cannotOut":["right"],"cannotIn":["right"]},
	"304": {"cls":"terrains","id":"sWallB","name":"薄墙-下","cannotOut":["down"],"cannotIn":["down"]},
	"305": {"cls":"terrains","id":"grass"},
	"306": {"cls":"terrains","id":"sWallTL","name":"薄墙-上左","cannotOut":["up","left"],"cannotIn":["up","left"]},
	"307": {"cls":"terrains","id":"sWallBR","name":"薄墙-下右","cannotOut":["down","right"],"cannotIn":["down","right"]},
	"308": {"cls":"terrains","id":"grass2"},
	"309": {"cls":"terrains","id":"sWallTR","name":"薄墙-上右","cannotOut":["up","right"],"cannotIn":["up","right"]},
	"310": {"cls":"terrains","id":"sWallBL","name":"薄墙-下左","cannotOut":["down","left"],"cannotIn":["down","left"]},
	"311": {"cls":"terrains","id":"ground2"},
	"312": {"cls":"terrains","id":"sWallTB","name":"薄墙-上下","cannotOut":["up","down"],"cannotIn":["up","down"]},
	"313": {"cls":"terrains","id":"ground3"},
	"314": {"cls":"terrains","id":"sWallLR","name":"薄墙-左右","cannotOut":["left","right"],"cannotIn":["left","right"]},
	"315": {"cls":"terrains","id":"sWallBLR","name":"薄墙-下左右","cannotOut":["down","left","right"],"cannotIn":["down","left","right"]},
	"316": {"cls":"terrains","id":"sWallTLR","name":"薄墙-上左右","cannotOut":["up","left","right"],"cannotIn":["up","left","right"]},
	"317": {"cls":"terrains","id":"sWallTBR","name":"薄墙-上下右","cannotOut":["up","down","right"],"cannotIn":["up","down","right"]},
	"318": {"cls":"terrains","id":"sWallTBL","name":"薄墙-上下左","cannotOut":["up","down","left"],"cannotIn":["up","down","left"]},
	"319": {"cls":"npc48","id":"tallYellowDoor","trigger":"openDoor","name":"高黄门","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"yellowKey":1}}},
	"320": {"cls":"npc48","id":"tallBlueDoor","trigger":"openDoor","name":"高蓝门","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"blueKey":1}}},
	"321": {"cls":"npc48","id":"tallRedDoor","trigger":"openDoor","name":"高红门","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"redKey":1}}},
	"322": {"cls":"npc48","id":"tallGreenDoor","trigger":"openDoor","name":"高绿门","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"greenKey":1}},"faceIds":{"down":"tallGreenDoor","left":"tallSpecialDoor","right":"tallSteelDoor","up":"N549"}},
	"323": {"cls":"npc48","id":"tallSpecialDoor","trigger":"openDoor","name":"高机关门","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"specialKey":1}},"faceIds":{"down":"tallGreenDoor","left":"tallSpecialDoor","right":"tallSteelDoor","up":"N549"}},
	"324": {"cls":"npc48","id":"tallSteelDoor","trigger":"openDoor","name":"高铁门","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"steelKey":1}},"faceIds":{"down":"tallGreenDoor","left":"tallSpecialDoor","right":"tallSteelDoor","up":"N549"}},
	"325": {"cls":"enemys","id":"keiskeiFairy"},
	"326": {"cls":"enemys","id":"tulipFairy"},
	"327": {"cls":"enemy48","id":"bearDown"},
	"328": {"cls":"enemy48","id":"bearLeft"},
	"329": {"cls":"enemy48","id":"bearRight"},
	"330": {"cls":"enemys","id":"E330"},
	"331": {"cls":"npcs","id":"N331","name":"me","event":null},
	"332": {"cls":"items","id":"allSteel"},
	"333": {"cls":"items","id":"I333"},
	"334": {"cls":"items","id":"I334"},
	"335": {"cls":"items","id":"I335"},
	"336": {"cls":"items","id":"I336"},
	"337": {"cls":"items","id":"I337"},
	"338": {"cls":"items","id":"I338"},
	"339": {"cls":"items","id":"I339"},
	"340": {"cls":"items","id":"I340"},
	"341": {"cls":"items","id":"I341"},
	"342": {"cls":"items","id":"I342"},
	"343": {"cls":"items","id":"book"},
	"344": {"cls":"items","id":"notebook"},
	"345": {"cls":"items","id":"fly"},
	"346": {"cls":"enemys","id":"E346"},
	"347": {"cls":"items","id":"I347"},
	"348": {"cls":"enemys","id":"E348"},
	"349": {"cls":"enemys","id":"E349"},
	"350": {"cls":"enemys","id":"E350"},
	"351": {"cls":"enemys","id":"E351"},
	"352": {"cls":"enemys","id":"E352"},
	"353": {"cls":"enemys","id":"E353"},
	"354": {"cls":"enemys","id":"E354"},
	"355": {"cls":"enemys","id":"E355"},
	"356": {"cls":"enemys","id":"E356"},
	"357": {"cls":"enemys","id":"E357"},
	"358": {"cls":"enemys","id":"E358"},
	"359": {"cls":"enemys","id":"E359"},
	"360": {"cls":"enemys","id":"E360"},
	"361": {"cls":"enemys","id":"E361"},
	"362": {"cls":"enemys","id":"E362"},
	"363": {"cls":"enemys","id":"E363"},
	"364": {"cls":"enemys","id":"E364"},
	"365": {"cls":"animates","id":"Ice","doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{}},"animate":1,"name":"冰","canDestoriedByReels":true},
	"366": {"cls":"animates","id":"A366","doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{}},"animate":1,"canDestoriedByReels":true},
	"367": {"cls":"enemys","id":"E367"},
	"368": {"cls":"enemys","id":"E368"},
	"369": {"cls":"enemys","id":"E369"},
	"370": {"cls":"enemys","id":"E370"},
	"371": {"cls":"enemys","id":"E371"},
	"372": {"cls":"enemys","id":"E372"},
	"373": {"cls":"enemys","id":"E373"},
	"374": {"cls":"enemys","id":"E374"},
	"375": {"cls":"animates","id":"A375","canPass":true},
	"376": {"cls":"npcs","id":"N376"},
	"377": {"cls":"enemys","id":"E377"},
	"378": {"cls":"enemys","id":"E378"},
	"379": {"cls":"enemys","id":"E379"},
	"380": {"cls":"enemys","id":"E380"},
	"381": {"cls":"enemys","id":"E381"},
	"382": {"cls":"enemys","id":"E382"},
	"383": {"cls":"animates","id":"A383","canBreak":true,"animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{}},"canDestoriedByReels":true},
	"384": {"cls":"animates","id":"A384","canBreak":true,"animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{}},"canDestoriedByReels":true},
	"385": {"cls":"animates","id":"A385","doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{}},"canBreak":true,"animate":1,"canDestoriedByReels":true},
	"386": {"cls":"animates","id":"A386","script":"(function () {\n\tcore.setBlock(core.getNumberById('darkLight'), core.getHeroLoc('x'), core.getHeroLoc('y'));\n})();","canPass":true},
	"387": {"cls":"enemys","id":"E387"},
	"388": {"cls":"items","id":"I388"},
	"389": {"cls":"items","id":"I389"},
	"390": {"cls":"items","id":"I390"},
	"391": {"cls":"items","id":"I391"},
	"392": {"cls":"items","id":"I392"},
	"393": {"cls":"items","id":"I393"},
	"394": {"cls":"items","id":"I394"},
	"395": {"cls":"items","id":"I395"},
	"396": {"cls":"npcs","id":"N396"},
	"397": {"cls":"terrains","id":"T397"},
	"398": {"cls":"terrains","id":"T398"},
	"399": {"cls":"animates","id":"A399","name":"退化网","canPass":true,"script":"(function () {\n\tif (!core.hasItem('amulet')) {\n\t\tcore.decreaseStatusWithBuffer(\"atk\", 3);\n\t\tcore.decreaseStatusWithBuffer(\"def\", 4);\n\t\tcore.decreaseStatusWithBuffer(\"mdef\", 5);\n\t\tcore.updateStatusBar();\n\t}\n})()"},
	"400": {"cls":"animates","id":"A400","name":"缓慢网","canPass":true},
	"401": {"cls":"animates","id":"A401","name":"终极网","canPass":true,"script":"(function () {\n\tif (!core.hasItem('amulet')) {\n\t\tcore.triggerDebuff('get', [\"poison\", \"weak\", \"curse\"]);\n\t\tcore.updateStatusBar();\n\t}\n\n\t// 如果要做一次性毒网，可直接注释掉下面这句话：\n\t// core.removeBlock(core.getHeroLoc('x'), core.getHeroLoc('y'));\n})()"},
	"402": {"cls":"items","id":"I402"},
	"403": {"cls":"items","id":"I403"},
	"404": {"cls":"terrains","id":"T404"},
	"405": {"cls":"enemys","id":"E405"},
	"406": {"cls":"enemys","id":"E406"},
	"407": {"cls":"enemys","id":"E407"},
	"408": {"cls":"enemys","id":"E408"},
	"409": {"cls":"items","id":"I409"},
	"410": {"cls":"enemys","id":"E410"},
	"411": {"cls":"items","id":"I411"},
	"412": {"cls":"items","id":"I412"},
	"413": {"cls":"items","id":"I413"},
	"414": {"cls":"items","id":"I414"},
	"415": {"cls":"terrains","id":"T415"},
	"416": {"cls":"terrains","id":"T416"},
	"417": {"cls":"npcs","id":"N417"},
	"418": {"cls":"animates","id":"A418","script":"(function () {\n\tcore.setBlock(core.getNumberById('A386'), core.getHeroLoc('x'), core.getHeroLoc('y'));\n})();","canPass":true},
	"419": {"cls":"animates","id":"A419","script":"(function () {\n\tcore.setBlock(core.getNumberById('A418'), core.getHeroLoc('x'), core.getHeroLoc('y'));\n})();","canPass":true},
	"420": {"cls":"animates","id":"A420","script":"(function () {\n\tcore.setBlock(core.getNumberById('A419'), core.getHeroLoc('x'), core.getHeroLoc('y'));\n})();","canPass":true},
	"421": {"cls":"animates","id":"starTrans","canDestoriedByReels":true},
	"422": {"cls":"terrains","id":"T422"},
	"423": {"cls":"terrains","id":"T423"},
	"424": {"cls":"npcs","id":"N424"},
	"425": {"cls":"enemys","id":"E425"},
	"426": {"cls":"enemys","id":"E426"},
	"427": {"cls":"enemys","id":"E427"},
	"428": {"cls":"animates","id":"A428"},
	"429": {"cls":"animates","id":"A429"},
	"430": {"cls":"animates","id":"yellowDoor2","name":"黄门","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"yellowKey":1}},"trigger":"openDoor","canDestoriedByReels":true},
	"431": {"cls":"animates","id":"blueDoor2","name":"蓝门","trigger":"openDoor","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"blueKey":1}}},
	"432": {"cls":"animates","id":"redDoor2","name":"红门","trigger":"openDoor","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"redKey":1}}},
	"433": {"cls":"animates","id":"specialDoor2","doorInfo":{"time":160,"openSound":"029-Door06.ogg","closeSound":"029-Door06.ogg","keys":{"specialKey":1}},"name":"机关门","trigger":"openDoor","animate":1},
	"434": {"cls":"animates","id":"greenDoor2","name":"绿门","animate":1,"trigger":"openDoor","doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"greenKey":1}}},
	"435": {"cls":"enemys","id":"E435"},
	"436": {"cls":"items","id":"I436"},
	"437": {"cls":"enemys","id":"E437"},
	"438": {"cls":"enemys","id":"E438"},
	"439": {"cls":"enemys","id":"E439"},
	"440": {"cls":"enemys","id":"E440"},
	"441": {"cls":"enemys","id":"E441"},
	"442": {"cls":"enemys","id":"E442"},
	"443": {"cls":"enemys","id":"E443"},
	"444": {"cls":"enemys","id":"E444"},
	"445": {"cls":"enemys","id":"E445"},
	"446": {"cls":"npcs","id":"N446"},
	"447": {"cls":"npcs","id":"N447"},
	"448": {"cls":"npcs","id":"N448","event":null},
	"449": {"cls":"npcs","id":"N449"},
	"450": {"cls":"enemys","id":"E450"},
	"451": {"cls":"animates","id":"A451","trigger":"openDoor","animate":1,"doorInfo":{"time":160,"openSound":"029-Door06.ogg","closeSound":"029-Door06.ogg","keys":{"specialKey":1}}},
	"452": {"cls":"npcs","id":"hero0inactive","event":[{"type":"choices","text":"\t[${(core.getFlag('hero0') || core.status.hero).name},N331]要操纵我了吗","choices":[{"text":"确认","action":[{"type":"function","function":"function(){\ncore.changeHero(0);\n}"}]},{"text":"取消","action":[]}]}]},
	"453": {"cls":"npcs","id":"hero1inactive","event":[{"type":"choices","text":"\t[${(core.getFlag('hero1') || core.status.hero).name},N448]要操纵我了吗","choices":[{"text":"确认","action":[{"type":"function","function":"function(){\ncore.changeHero(1);\n}"}]},{"text":"取消","action":[]}]}]},
	"454": {"cls":"items","id":"I454"},
	"455": {"cls":"items","id":"I455"},
	"456": {"cls":"animates","id":"A456","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{}},"trigger":"openDoor","canDestoriedByReels":true},
	"457": {"cls":"items","id":"I457"},
	"458": {"cls":"terrains","id":"T458"},
	"459": {"cls":"terrains","id":"T459"},
	"460": {"cls":"animates","id":"A460","doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"I436":1,"HSpecialKey":1}},"animate":1,"trigger":"openDoor"},
	"461": {"cls":"animates","id":"A461","animate":1,"trigger":"openDoor","doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"LSpecialKey":1,"I436":1}}},
	"462": {"cls":"animates","id":"A462"},
	"463": {"cls":"animates","id":"A463","animate":1,"trigger":"openDoor","doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"I436":1,"BSpecialKey":1}}},
	"464": {"cls":"terrains","id":"T464","canPass":true},
	"465": {"cls":"terrains","id":"T465"},
	"466": {"cls":"terrains","id":"T466","canPass":true},
	"467": {"cls":"terrains","id":"T467"},
	"468": {"cls":"terrains","id":"T468","canPass":true},
	"469": {"cls":"terrains","id":"T469"},
	"470": {"cls":"terrains","id":"T470","canPass":true},
	"471": {"cls":"terrains","id":"T471"},
	"472": {"cls":"terrains","id":"T472"},
	"473": {"cls":"terrains","id":"T473"},
	"474": {"cls":"terrains","id":"T474"},
	"475": {"cls":"terrains","id":"T475"},
	"476": {"cls":"terrains","id":"T476"},
	"477": {"cls":"terrains","id":"T477"},
	"478": {"cls":"terrains","id":"T478"},
	"479": {"cls":"terrains","id":"T479"},
	"480": {"cls":"terrains","id":"T480"},
	"481": {"cls":"terrains","id":"T481"},
	"482": {"cls":"terrains","id":"T482"},
	"483": {"cls":"terrains","id":"T483"},
	"484": {"cls":"terrains","id":"T484"},
	"485": {"cls":"terrains","id":"T485"},
	"486": {"cls":"terrains","id":"T486"},
	"487": {"cls":"terrains","id":"T487"},
	"488": {"cls":"terrains","id":"T488"},
	"489": {"cls":"items","id":"BSpecialKey"},
	"490": {"cls":"items","id":"HSpecialKey"},
	"491": {"cls":"items","id":"LSpecialKey"},
	"492": {"cls":"animates","id":"A492","script":null,"event":[{"type":"function","function":"function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.hp = Math.max(1, hero.hp - 100);\n});\ncore.updateStatusBar(true);\n}"},{"type":"animate","name":"A14","loc":"hero"}]},
	"493": {"cls":"animates","id":"A493","canPass":false},
	"494": {"cls":"items","id":"I494"},
	"495": {"cls":"items","id":"I495"},
	"496": {"cls":"items","id":"I496"},
	"497": {"cls":"items","id":"I497"},
	"498": {"cls":"animates","id":"yellowDoor3","trigger":"openDoor","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"yellowKey":1}},"name":"黄门","canDestoriedByReels":true},
	"499": {"cls":"animates","id":"blueDoor3","name":"蓝门","trigger":"openDoor","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"blueKey":1}}},
	"500": {"cls":"animates","id":"redDoor3","name":"红门","trigger":"openDoor","animate":1,"doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"redKey":1}}},
	"501": {"cls":"animates","id":"greenDoor3","name":"绿门","animate":1,"trigger":"openDoor","doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{"greenKey":1}}},
	"502": {"cls":"npcs","id":"N502"},
	"503": {"cls":"enemys","id":"E503"},
	"504": {"cls":"enemys","id":"E504"},
	"505": {"cls":"enemys","id":"E505"},
	"506": {"cls":"enemys","id":"E506"},
	"507": {"cls":"enemys","id":"E507"},
	"508": {"cls":"enemys","id":"E508"},
	"509": {"cls":"enemys","id":"E509"},
	"510": {"cls":"animates","id":"A510"},
	"511": {"cls":"npcs","id":"N511"},
	"512": {"cls":"npcs","id":"N512"},
	"513": {"cls":"enemys","id":"E513"},
	"514": {"cls":"enemys","id":"E514"},
	"515": {"cls":"enemys","id":"E515"},
	"516": {"cls":"enemys","id":"E516"},
	"517": {"cls":"enemys","id":"E517"},
	"518": {"cls":"enemys","id":"E518"},
	"519": {"cls":"enemys","id":"E519"},
	"520": {"cls":"enemys","id":"E520"},
	"521": {"cls":"enemys","id":"E521"},
	"522": {"cls":"enemys","id":"E522"},
	"523": {"cls":"items","id":"bAtkGem"},
	"524": {"cls":"items","id":"bDefGem"},
	"525": {"cls":"items","id":"bMdefGem"},
	"526": {"cls":"items","id":"I526"},
	"527": {"cls":"terrains","id":"T527","canPass":true},
	"528": {"cls":"enemys","id":"E528"},
	"529": {"cls":"enemys","id":"E529"},
	"530": {"cls":"enemys","id":"E530"},
	"531": {"cls":"enemys","id":"E531"},
	"532": {"cls":"enemys","id":"E532"},
	"533": {"cls":"enemys","id":"E533"},
	"534": {"cls":"enemys","id":"E534"},
	"535": {"cls":"enemys","id":"E535"},
	"536": {"cls":"enemys","id":"E536"},
	"537": {"cls":"enemys","id":"E537"},
	"538": {"cls":"enemys","id":"E538"},
	"539": {"cls":"enemys","id":"E539"},
	"540": {"cls":"enemys","id":"E540"},
	"541": {"cls":"items","id":"I541"},
	"542": {"cls":"items","id":"I542"},
	"543": {"cls":"items","id":"I543"},
	"544": {"cls":"items","id":"I544"},
	"545": {"cls":"items","id":"I545"},
	"546": {"cls":"items","id":"I546"},
	"547": {"cls":"items","id":"I547"},
	"548": {"cls":"items","id":"I548"},
	"549": {"cls":"npc48","id":"N549","faceIds":{"down":"N549","left":"N550","right":"N551","up":"N552"}},
	"550": {"cls":"npc48","id":"N550"},
	"551": {"cls":"npc48","id":"N551"},
	"552": {"cls":"npc48","id":"N552"},
	"553": {"cls":"items","id":"candle"},
	"554": {"cls":"animates","id":"specialDoor3","doorInfo":{"time":160,"openSound":"029-Door06.ogg","closeSound":"029-Door06.ogg","keys":{"specialKey":1}},"animate":1,"trigger":"openDoor","name":"机关门"},
	"555": {"cls":"enemys","id":"E555"},
	"556": {"cls":"enemys","id":"E556"},
	"557": {"cls":"enemys","id":"E557"},
	"558": {"cls":"enemys","id":"E558"},
	"559": {"cls":"enemys","id":"E559"},
	"560": {"cls":"enemys","id":"E560"},
	"561": {"cls":"enemys","id":"E561"},
	"562": {"cls":"enemys","id":"E562"},
	"563": {"cls":"enemys","id":"E563"},
	"564": {"cls":"enemys","id":"E564"},
	"565": {"cls":"enemys","id":"E565"},
	"566": {"cls":"enemys","id":"E566"},
	"567": {"cls":"enemys","id":"E567"},
	"568": {"cls":"enemys","id":"E568"},
	"569": {"cls":"enemys","id":"E569"},
	"570": {"cls":"enemys","id":"E570"},
	"571": {"cls":"enemys","id":"E571"},
	"572": {"cls":"enemys","id":"E572"},
	"573": {"cls":"enemys","id":"E573"},
	"574": {"cls":"enemys","id":"E574"},
	"575": {"cls":"enemys","id":"E575"},
	"576": {"cls":"items","id":"I576"},
	"577": {"cls":"animates","id":"IceWall","doorInfo":{"time":160,"openSound":"door.mp3","closeSound":"door.mp3","keys":{}},"animate":1},
	"578": {"cls":"enemys","id":"E578"},
	"579": {"cls":"npcs","id":"N579","bigImage":"196-Support04_2.png"},
	"580": {"cls":"npc48","id":"N580","faceIds":{"down":"N580","left":"N581","right":"N582","up":"N583"}},
	"581": {"cls":"npc48","id":"N581"},
	"582": {"cls":"npc48","id":"N582"},
	"583": {"cls":"npc48","id":"N583"},
	"584": {"cls":"items","id":"I584"},
	"585": {"cls":"items","id":"I585"},
	"586": {"cls":"animates","id":"lavaNet2","canPass":true},
	"587": {"cls":"enemys","id":"E587"},
	"588": {"cls":"enemys","id":"E588"},
	"589": {"cls":"enemys","id":"E589"},
	"590": {"cls":"enemys","id":"E590"},
	"591": {"cls":"enemys","id":"E591"},
	"592": {"cls":"enemys","id":"E592"},
	"593": {"cls":"enemys","id":"E593"},
	"594": {"cls":"enemys","id":"E594"},
	"595": {"cls":"enemys","id":"E595"},
	"596": {"cls":"items","id":"I596"},
	"597": {"cls":"items","id":"I597"},
	"598": {"cls":"items","id":"I598"},
	"599": {"cls":"enemys","id":"E599"},
	"600": {"cls":"enemys","id":"E600"},
	"601": {"cls":"enemys","id":"E601"},
	"602": {"cls":"enemys","id":"E602"},
	"603": {"cls":"enemys","id":"E603"},
	"604": {"cls":"items","id":"I604"},
	"605": {"cls":"enemys","id":"E605"},
	"606": {"cls":"enemys","id":"E606"},
	"607": {"cls":"enemys","id":"E607"},
	"608": {"cls":"enemys","id":"E608"},
	"609": {"cls":"enemys","id":"E609"},
	"610": {"cls":"items","id":"I610"},
	"611": {"cls":"terrains","id":"T611"},
	"612": {"cls":"items","id":"I612"},
	"613": {"cls":"items","id":"I613"},
	"614": {"cls":"items","id":"I614"},
	"615": {"cls":"items","id":"I615"},
	"616": {"cls":"animates","id":"A616"},
	"617": {"cls":"npc48","id":"N617","faceIds":{"down":"N617","left":"N618","right":"N619","up":"N620"}},
	"618": {"cls":"npc48","id":"N618"},
	"619": {"cls":"npc48","id":"N619"},
	"620": {"cls":"npc48","id":"N620"},
	"621": {"cls":"terrains","id":"T621"},
	"622": {"cls":"npcs","id":"N622"},
	"623": {"cls":"npcs","id":"N623"},
	"624": {"cls":"npcs","id":"N624"},
	"625": {"cls":"items","id":"I625"},
	"626": {"cls":"items","id":"I626"},
	"10003": {"cls":"tileset","id":"X10003","canPass":true},
	"10022": {"cls":"tileset","id":"X10022","canPass":false,"canDestoriedByReels":true},
	"10030": {"cls":"tileset","id":"X10030","canDestoriedByReels":true},
	"10041": {"cls":"tileset","id":"X10041","canDestoriedByReels":true},
	"10043": {"cls":"tileset","id":"X10043","canDestoriedByReels":true},
	"10044": {"cls":"tileset","id":"X10044","canDestoriedByReels":true},
	"10045": {"cls":"tileset","id":"X10045","canDestoriedByReels":true},
	"10049": {"cls":"tileset","id":"X10049","canDestoriedByReels":true},
	"10052": {"cls":"tileset","id":"X10052","canDestoriedByReels":true},
	"10053": {"cls":"tileset","id":"X10053","canDestoriedByReels":true},
	"10222": {"cls":"tileset","id":"X10222","canPass":true,"cannotIn":["up"],"cannotOut":["down","left","right"],"canDestoriedByReels":true},
	"10230": {"cls":"tileset","id":"X10230","cannotIn":["down"],"cannotOut":["up","left","right"],"canPass":true,"canDestoriedByReels":true},
	"10236": {"cls":"tileset","id":"X10236","cannotIn":["left"],"cannotOut":["up","down","right"],"canPass":true,"canDestoriedByReels":true},
	"10237": {"cls":"tileset","id":"X10237","cannotOut":["up","down","left"],"cannotIn":["right"],"canPass":true,"canDestoriedByReels":true},
	"20005": {"cls":"tileset","id":"X20005","canDestoriedByReels":true},
	"20006": {"cls":"tileset","id":"X20006","canDestoriedByReels":true},
	"20007": {"cls":"tileset","id":"X20007","canDestoriedByReels":true},
	"20015": {"cls":"tileset","id":"X20015","canDestoriedByReels":true},
	"20040": {"cls":"tileset","id":"X20040","canPass":false},
	"20103": {"cls":"tileset","id":"X20103","canPass":true},
	"20169": {"cls":"tileset","id":"X20169","canPass":true},
	"20170": {"cls":"tileset","id":"X20170","canPass":true},
	"20171": {"cls":"tileset","id":"X20171","canPass":true},
	"20172": {"cls":"tileset","id":"X20172","canPass":true},
	"20177": {"cls":"tileset","id":"X20177","canPass":true},
	"20178": {"cls":"tileset","id":"X20178","canPass":true},
	"20185": {"cls":"tileset","id":"X20185","canPass":true},
	"20186": {"cls":"tileset","id":"X20186","canPass":true},
	"20187": {"cls":"tileset","id":"X20187","canPass":true},
	"20188": {"cls":"tileset","id":"X20188","canPass":true},
	"20189": {"cls":"tileset","id":"X20189","canPass":true},
	"20193": {"cls":"tileset","id":"X20193","canPass":true},
	"20194": {"cls":"tileset","id":"X20194","canPass":true},
	"20195": {"cls":"tileset","id":"X20195","canPass":true},
	"20196": {"cls":"tileset","id":"X20196","canPass":true},
	"20197": {"cls":"tileset","id":"X20197","canPass":true},
	"20207": {"cls":"tileset","id":"X20207","event":[{"type":"setBlock","number":"0"}],"canPass":true},
	"20223": {"cls":"tileset","id":"X20223","canPass":true},
	"20247": {"cls":"tileset","id":"X20247","canPass":true},
	"20255": {"cls":"tileset","id":"X20255","canPass":true},
	"20256": {"cls":"tileset","id":"X20256","canPass":true},
	"20257": {"cls":"tileset","id":"X20257","canPass":true},
	"20258": {"cls":"tileset","id":"X20258","canPass":true},
	"20259": {"cls":"tileset","id":"X20259","canPass":true},
	"20260": {"cls":"tileset","id":"X20260","canPass":true},
	"20261": {"cls":"tileset","id":"X20261","canPass":true},
	"20262": {"cls":"tileset","id":"X20262","canPass":true},
	"20264": {"cls":"tileset","id":"X20264","canPass":true},
	"20265": {"cls":"tileset","id":"X20265","canPass":true},
	"20266": {"cls":"tileset","id":"X20266","canPass":true},
	"20267": {"cls":"tileset","id":"X20267","canPass":true},
	"20272": {"cls":"tileset","id":"X20272","canPass":true},
	"20273": {"cls":"tileset","id":"X20273","canPass":true},
	"20283": {"cls":"tileset","id":"X20283","canPass":true},
	"30004": {"cls":"tileset","id":"X30004","canPass":true},
	"30008": {"cls":"tileset","id":"X30008","canPass":true},
	"30009": {"cls":"tileset","id":"X30009","canPass":true},
	"30010": {"cls":"tileset","id":"X30010","canPass":true},
	"30019": {"cls":"tileset","id":"X30019","canPass":true},
	"30020": {"cls":"tileset","id":"X30020","canPass":true},
	"30021": {"cls":"tileset","id":"X30021","canPass":true},
	"30022": {"cls":"tileset","id":"X30022","canPass":true},
	"30023": {"cls":"tileset","id":"X30023","canPass":true},
	"30091": {"cls":"tileset","id":"X30091","canPass":true},
	"30092": {"cls":"tileset","id":"X30092","canPass":true},
	"30093": {"cls":"tileset","id":"X30093","canPass":true},
	"30099": {"cls":"tileset","id":"X30099","canPass":true},
	"30107": {"cls":"tileset","id":"X30107","canPass":true},
	"30108": {"cls":"tileset","id":"X30108","canPass":true},
	"30109": {"cls":"tileset","id":"X30109","canPass":true},
	"30115": {"cls":"tileset","id":"X30115","canPass":true},
	"30116": {"cls":"tileset","id":"X30116","canPass":true},
	"30117": {"cls":"tileset","id":"X30117","canPass":true},
	"30124": {"cls":"tileset","id":"X30124","canPass":true},
	"30190": {"cls":"tileset","id":"X30190","canPass":true},
	"30191": {"cls":"tileset","id":"X30191","canPass":true},
	"30214": {"cls":"tileset","id":"X30214","canPass":true}
}