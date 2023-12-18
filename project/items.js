var items_296f5d02_12fd_4166_a7c1_b5e830c9ee3a = 
{
	"yellowKey": {
		"cls": "tools",
		"name": "黄钥匙",
		"text": "可以打开一扇黄门",
		"hideInToolbox": true
	},
	"blueKey": {
		"cls": "tools",
		"name": "蓝钥匙",
		"text": "可以打开一扇蓝门",
		"hideInToolbox": true
	},
	"redKey": {
		"cls": "tools",
		"name": "红钥匙",
		"text": "可以打开一扇红门",
		"hideInToolbox": true
	},
	"redGem": {
		"cls": "tools",
		"name": "红宝石",
		"text": "攻击+${core.values.redGem}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true",
		"hideInToolbox": true
	},
	"blueGem": {
		"cls": "tools",
		"name": "蓝宝石",
		"text": "防御+${core.values.blueGem}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true",
		"hideInToolbox": true
	},
	"greenGem": {
		"cls": "tools",
		"name": "绿宝石",
		"text": "护盾+${core.values.greenGem}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true",
		"hideInToolbox": true
	},
	"yellowGem": {
		"cls": "items",
		"name": "黄宝石",
		"text": "可以进行加点",
		"itemEffect": "core.values.levelupPoint += core.values.yellowGem;\ncore.status.hero.lv += 1;\ncore.plugin.refreshComboWand();",
		"itemEffectTip": "获得新的加点数，按\"2\"进行加点。",
		"useItemEvent": [
			{
				"type": "insert",
				"name": "加点事件"
			}
		],
		"canUseItemEffect": "true",
		"useItemEffect": "core.values.levelupPoint += core.values.yellowGem;\ncore.status.hero.lv += 1;\ncore.plugin.refreshComboWand();",
		"hideInToolbox": true
	},
	"redPotion": {
		"cls": "tools",
		"name": "红血瓶",
		"text": "\t生命+${core.values.redPotion}",
		"itemEffect": "core.status.hero.hp += core.values.redPotion * core.status.thisMap.ratio;",
		"itemEffectTip": "，生命+${core.values.redPotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.redPotion",
		"canUseItemEffect": "true",
		"hideInToolbox": true
	},
	"bluePotion": {
		"cls": "tools",
		"name": "蓝血瓶",
		"text": "生命+${core.values.bluePotion}",
		"itemEffect": "core.status.hero.hp += core.values.bluePotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.bluePotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.bluePotion",
		"canUseItemEffect": "true",
		"hideInToolbox": true
	},
	"yellowPotion": {
		"cls": "tools",
		"name": "黄血瓶",
		"text": "生命+${core.values.yellowPotion}",
		"itemEffect": "core.status.hero.hp += core.values.yellowPotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.yellowPotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.yellowPotion",
		"canUseItemEffect": "true",
		"hideInToolbox": true
	},
	"greenPotion": {
		"cls": "tools",
		"name": "绿血瓶",
		"text": "生命+${core.values.greenPotion}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true",
		"hideInToolbox": true
	},
	"sword0": {
		"cls": "items",
		"name": "破旧的剑",
		"text": "一把已经生锈的剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 0
			}
		},
		"itemEffect": "core.status.hero.atk += 0",
		"itemEffectTip": "，攻击+0"
	},
	"sword1": {
		"cls": "equips",
		"name": "铁剑",
		"text": "纯铁打铸的剑(装备物品)",
		"equip": {
			"type": 0,
			"animate": "A02",
			"value": {
				"atk": 10
			},
			"percentage": {}
		},
		"itemEffect": "core.status.hero.atk += 10",
		"itemEffectTip": "，攻击+10",
		"canUseItemEffect": "true"
	},
	"sword2": {
		"cls": "equips",
		"name": "崟剑",
		"text": "添加了金属的剑，耐用性高(装备物品)",
		"equip": {
			"type": 0,
			"animate": "A07",
			"value": {
				"mdef": 1,
				"atk": 30
			},
			"percentage": {}
		},
		"itemEffect": "core.status.hero.atk += 30",
		"itemEffectTip": "，攻击+30",
		"canUseItemEffect": "true"
	},
	"sword3": {
		"cls": "equips",
		"name": "勇士剑",
		"text": "装备力中等的剑(装备物品)",
		"equip": {
			"type": 0,
			"animate": "A09",
			"value": {
				"mdef": 5,
				"atk": 60
			},
			"percentage": {}
		},
		"itemEffect": "core.status.hero.atk += 100",
		"itemEffectTip": "，攻击+100",
		"canUseItemEffect": "true"
	},
	"sword4": {
		"cls": "equips",
		"name": "骑士剑",
		"text": "装备力较强的剑(装备物品)",
		"equip": {
			"type": 0,
			"animate": "A10",
			"value": {
				"mdef": 15,
				"def": 8,
				"atk": 100
			},
			"percentage": {}
		},
		"itemEffect": "core.status.hero.atk += 80",
		"itemEffectTip": "，攻击+80"
	},
	"sword5": {
		"cls": "items",
		"name": "神圣剑",
		"text": "一把很普通的神圣剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 160
			}
		},
		"itemEffect": "core.status.hero.atk += 100",
		"itemEffectTip": "，攻击+100"
	},
	"shield0": {
		"cls": "items",
		"name": "破旧的盾",
		"text": "一个很破旧的铁盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 0
			}
		},
		"itemEffect": "core.status.hero.def += 0",
		"itemEffectTip": "，防御+0"
	},
	"shield1": {
		"cls": "equips",
		"name": "铁盾",
		"text": "纯铁打铸的盾(装备物品)",
		"equip": {
			"type": 1,
			"value": {
				"mdef": 5,
				"def": 5
			},
			"percentage": {}
		},
		"itemEffect": "core.status.hero.def += 5",
		"itemEffectTip": "，防御+5",
		"canUseItemEffect": "true"
	},
	"shield2": {
		"cls": "equips",
		"name": "崟盾",
		"text": "添加了金属的盾，耐用性高(装备物品)",
		"equip": {
			"type": 1,
			"value": {
				"def": 25
			}
		},
		"itemEffect": "core.status.hero.def += 25",
		"itemEffectTip": "，防御+25",
		"canUseItemEffect": "true"
	},
	"shield3": {
		"cls": "equips",
		"name": "勇士盾",
		"text": "装备力中等的盾(装备物品)",
		"equip": {
			"type": 1,
			"value": {
				"def": 60,
				"mdef": 10
			},
			"percentage": {}
		},
		"itemEffect": "core.status.hero.def += 60\ncore.status.hero.mdef += 10",
		"itemEffectTip": "",
		"canUseItemEffect": "true"
	},
	"shield4": {
		"cls": "equips",
		"name": "骑士盾",
		"text": "装备力较强的盾(装备物品)",
		"equip": {
			"type": 1,
			"value": {
				"atk": 5,
				"def": 100,
				"mdef": 25
			},
			"percentage": {}
		},
		"itemEffect": "core.status.hero.def += 80",
		"itemEffectTip": "，防御+80",
		"canUseItemEffect": "true"
	},
	"shield5": {
		"cls": "items",
		"name": "神圣盾",
		"text": "一个很普通的神圣盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 100,
				"mdef": 100
			}
		},
		"itemEffect": "core.status.hero.def += 100;core.status.hero.mdef += 100",
		"itemEffectTip": "，防御+100，护盾+100"
	},
	"superPotion": {
		"cls": "tools",
		"name": "圣水",
		"itemEffect": "core.status.hero.hp *= 2",
		"itemEffectTip": "，生命值翻倍",
		"useItemEffect": "core.status.hero.hp *= 2;core.playSound('回血');",
		"canUseItemEffect": "true",
		"text": "用后生命翻倍（消耗物品）"
	},
	"coin": {
		"cls": "tools",
		"name": "幸运金币",
		"text": "持有时打败怪物可得双倍金币（不叠加）"
	},
	"freezeBadge": {
		"cls": "tools",
		"name": "冰冻徽章",
		"text": "可以将面前的熔岩变成平地",
		"useItemEffect": "(function () {\n\tvar success = false;\n\n\tvar snowFourDirections = false; // 是否多方向雪花；如果是将其改成true\n\tif (snowFourDirections) {\n\t\t// 多方向雪花\n\t\tfor (var direction in core.utils.scan) { // 多方向雪花默认四方向，如需改为八方向请将这两个scan改为scan2\n\t\t\tvar delta = core.utils.scan[direction];\n\t\t\tvar nx = core.getHeroLoc('x') + delta.x,\n\t\t\t\tny = core.getHeroLoc('y') + delta.y;\n\t\t\tvar next_id = core.getBlockId(nx, ny);\n\t\t\tif (next_id == 'lava' || next_id == 'A366') {\n\t\t\t\tcore.removeBlock(nx, ny);\n\t\t\t\tsuccess = true;\n\t\t\t}\n\t\t}\n\t} else {\n\t\tvar next_id = core.getBlockId(core.nextX(), core.nextY());\n\t\tif (next_id == 'lava' || next_id == 'A366') {\n\t\t\tcore.removeBlock(core.nextX(), core.nextY());\n\t\t\tsuccess = true;\n\t\t}\n\t}\n\n\tif (success) {\n\t\tcore.playSound('打开界面');\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\t} else {\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip(\"当前无法使用\" + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n})();",
		"canUseItemEffect": "true"
	},
	"cross": {
		"cls": "constants",
		"name": "十字架",
		"text": "持有后无视怪物的无敌属性"
	},
	"dagger": {
		"cls": "tools",
		"name": "神者之剑",
		"text": "将面前的怪物变成噬菌体（消耗物品）",
		"canUseItemEffect": "true",
		"useItemEffect": "(function () {\n\tvar bombList = []; // 炸掉的怪物坐标列表\n\tvar todo = []; // 炸弹后事件\n\tvar money = 0,\n\t\texp = 0; // 炸弹获得的金币和经验\n\n\tvar canBomb = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null || block.disable || block.event.cls.indexOf('enemy') != 0) return false;\n\t\tvar enemy = core.material.enemys[block.event.id];\n\t\treturn enemy && !enemy.notBomb;\n\t};\n\n\tvar bomb = function (x, y) {\n\t\tif (!canBomb(x, y)) return;\n\t\tbombList.push([x, y]);\n\t\tvar id = core.getBlockId(x, y),\n\t\t\tenemy = core.material.enemys[id];\n\t\tmoney += core.getEnemyValue(enemy, 'money', x, y) || 0;\n\t\texp += core.getEnemyValue(enemy, 'exp', x, y) || 0;\n\t\tcore.setBlock(\"E374\", x, y);\n\t}\n\n\t// 如果要多方向可炸，把这里的false改成true\n\tif (false) {\n\t\tvar scan = core.utils.scan; // 多方向炸时默认四方向，如果要改成八方向炸可以改成 core.utils.scan2\n\t\tfor (var direction in scan) {\n\t\t\tvar delta = scan[direction];\n\t\t\tbomb(core.getHeroLoc('x') + delta.x, core.getHeroLoc('y') + delta.y);\n\t\t}\n\t} else {\n\t\t// 仅炸当前\n\t\tbomb(core.nextX(), core.nextY());\n\t}\n\n\tif (bombList.length == 0) {\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip('当前无法使用' + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n\n\tcore.playSound('recovery.mp3');\n\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\n\t// 取消这里的注释可以炸弹后获得金币和经验\n\t// core.status.hero.money += money;\n\t// core.status.hero.exp += exp;\n\n\t// 取消这里的注释可以炸弹引发战后事件\n\t// if (todo.length > 0) core.insertAction(todo);\n\n})();"
	},
	"amulet": {
		"cls": "constants",
		"name": "自然之靴",
		"text": "持有时无视负面地形"
	},
	"bigKey": {
		"cls": "tools",
		"name": "大黄门钥匙",
		"text": "可以开启当前层所有黄门",
		"itemEffect": "core.addItem('yellowKey', 1);\ncore.addItem('blueKey', 1);\ncore.addItem('redKey', 1);",
		"itemEffectTip": "，全钥匙+1",
		"useItemEffect": "(function () {\n\tcore.setFlag(\"noDoorSound\", 1);\n\tvar actions = core.searchBlock(\"yellowDoor\\\\d*\").map(function (block) {\n\t\treturn { \"type\": \"openDoor\", \"loc\": [block.x, block.y], \"async\": true };\n\t});\n\tactions.push({ \"type\": \"waitAsync\" });\n\tactions.push({ \"type\": \"tip\", \"text\": core.material.items[itemId].name + \"使用成功\" });\n\tactions.push({ \"type\": \"function\", \"function\": \"function(){\\ncore.removeFlag(\\\"noDoorSound\\\");\\n}\" });\n\tcore.insertAction(actions);\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.searchBlock(\"yellowDoor\\\\d*\").length > 0;\n})();"
	},
	"greenKey": {
		"cls": "tools",
		"name": "绿钥匙",
		"text": "可以打开一扇绿门",
		"hideInToolbox": true
	},
	"steelKey": {
		"cls": "tools",
		"name": "铁门钥匙",
		"text": "可以打开一扇铁门",
		"hideInToolbox": false
	},
	"pickaxe": {
		"cls": "tools",
		"name": "破墙镐",
		"text": "可以破坏勇士面前的墙",
		"useItemEffect": "(function () {\n\tvar canBreak = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null || block.disable) return false;\n\t\treturn block.event.canBreak;\n\t};\n\n\tvar success = false;\n\tvar pickaxeFourDirections = false; // 是否多方向破；如果是将其改成true\n\tif (pickaxeFourDirections) {\n\t\t// 多方向破\n\t\tfor (var direction in core.utils.scan) { // 多方向破默认四方向，如需改成八方向请将这两个scan改为scan2\n\t\t\tvar delta = core.utils.scan[direction];\n\t\t\tvar nx = core.getHeroLoc('x') + delta.x,\n\t\t\t\tny = core.getHeroLoc('y') + delta.y;\n\t\t\tif (canBreak(nx, ny)) {\n\t\t\t\tcore.removeBlock(nx, ny);\n\t\t\t\tsuccess = true;\n\t\t\t}\n\t\t}\n\t} else {\n\t\t// 仅破当前\n\t\tif (canBreak(core.nextX(), core.nextY())) {\n\t\t\tcore.removeBlock(core.nextX(), core.nextY());\n\t\t\tsuccess = true;\n\t\t}\n\t}\n\n\tif (success) {\n\t\tcore.playSound('破墙镐');\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\t} else {\n\t\t// 无法使用\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip(\"当前无法使用\" + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n})();",
		"canUseItemEffect": "true"
	},
	"icePickaxe": {
		"cls": "tools",
		"name": "破冰镐",
		"text": "可以破坏勇士面前的一堵冰墙",
		"useItemEffect": "(function () {\n\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\tcore.insertAction({ \"type\": \"openDoor\", \"loc\": [\"core.nextX()\", \"core.nextY()\"] });\n})();",
		"canUseItemEffect": "(function () {\n\tvar next_id = core.getBlockId(core.nextX(), core.nextY());\n\treturn next_id == 'Ice' || next_id == 'A456';\n})();"
	},
	"bomb": {
		"cls": "tools",
		"name": "炸弹",
		"text": "可以炸掉勇士面前的怪物",
		"useItemEffect": "(function () {\n\tvar bombList = []; // 炸掉的怪物坐标列表\n\tvar todo = []; // 炸弹后事件\n\tvar money = 0,\n\t\texp = 0; // 炸弹获得的金币和经验\n\n\tvar canBomb = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null || block.disable || block.event.cls.indexOf('enemy') != 0) return false;\n\t\tvar enemy = core.material.enemys[block.event.id];\n\t\treturn enemy && !enemy.notBomb;\n\t};\n\n\tvar bomb = function (x, y) {\n\t\tif (!canBomb(x, y)) return;\n\t\tbombList.push([x, y]);\n\t\tvar id = core.getBlockId(x, y),\n\t\t\tenemy = core.material.enemys[id];\n\t\tmoney += core.getEnemyValue(enemy, 'money', x, y) || 0;\n\t\texp += core.getEnemyValue(enemy, 'exp', x, y) || 0;\n\t\tcore.push(todo, core.floors[core.status.floorId].afterBattle[x + \",\" + y]);\n\t\tcore.push(todo, enemy.afterBattle);\n\t\tcore.removeBlock(x, y);\n\t}\n\n\t// 如果要多方向可炸，把这里的false改成true\n\tif (false) {\n\t\tvar scan = core.utils.scan; // 多方向炸时默认四方向，如果要改成八方向炸可以改成 core.utils.scan2\n\t\tfor (var direction in scan) {\n\t\t\tvar delta = scan[direction];\n\t\t\tbomb(core.getHeroLoc('x') + delta.x, core.getHeroLoc('y') + delta.y);\n\t\t}\n\t} else {\n\t\t// 仅炸当前\n\t\tbomb(core.nextX(), core.nextY());\n\t}\n\n\tif (bombList.length == 0) {\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip('当前无法使用' + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n\n\tcore.playSound('炸弹');\n\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\n\t// 取消这里的注释可以炸弹后获得金币和经验\n\t// core.status.hero.money += money;\n\t// core.status.hero.exp += exp;\n\n\t// 取消这里的注释可以炸弹引发战后事件\n\t// if (todo.length > 0) core.insertAction(todo);\n\n})();",
		"canUseItemEffect": "true"
	},
	"centerFly": {
		"cls": "tools",
		"name": "中心对称飞行器",
		"text": "可以飞向当前楼层中心对称的位置",
		"useItemEffect": "core.playSound('centerFly.mp3');\ncore.clearMap('hero');\ncore.setHeroLoc('x', core.bigmap.width - 1 - core.getHeroLoc('x'));\ncore.setHeroLoc('y', core.bigmap.height - 1 - core.getHeroLoc('y'));\ncore.drawHero();\ncore.drawTip(core.material.items[itemId].name + '使用成功');",
		"canUseItemEffect": "(function () {\n\tvar toX = core.bigmap.width - 1 - core.getHeroLoc('x'),\n\t\ttoY = core.bigmap.height - 1 - core.getHeroLoc('y');\n\tvar id = core.getBlockId(toX, toY);\n\treturn id == null;\n})();"
	},
	"upFly": {
		"cls": "tools",
		"name": "上楼器",
		"text": "可以飞往楼上的相同位置",
		"useItemEffect": "(function () {\n\tvar floorId = core.floorIds[core.floorIds.indexOf(core.status.floorId) + 1];\n\tif (core.status.event.id == 'action') {\n\t\tcore.insertAction([\n\t\t\t{ \"type\": \"changeFloor\", \"stair\": \"downFloor\", \"floorId\": floorId },\n\t\t\t{ \"type\": \"tip\", \"text\": core.material.items[itemId].name + '使用成功' }\n\t\t]);\n\t} else {\n\t\tcore.changeFloor(floorId, \"downFloor\", null, null, function () {\n\t\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t\t\tcore.replay();\n\t\t});\n\t}\n})();",
		"canUseItemEffect": "(function () {\n\tvar floorId = core.status.floorId,\n\t\tindex = core.floorIds.indexOf(floorId);\n\tif (index < core.floorIds.length - 1) {\n\t\tvar toId = core.floorIds[index + 1],\n\t\t\ttoX = core.getHeroLoc('x'),\n\t\t\ttoY = core.getHeroLoc('y');\n\t\tvar mw = core.floors[toId].width,\n\t\t\tmh = core.floors[toId].height;\n\t\tif (toX >= 0 && toX < mw && toY >= 0 && toY < mh) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n})();"
	},
	"downFly": {
		"cls": "tools",
		"name": "下楼器",
		"text": "可以飞往楼下的相同位置",
		"useItemEffect": "(function () {\n\tvar floorId = core.floorIds[core.floorIds.indexOf(core.status.floorId) - 1];\n\tif (core.status.event.id == 'action') {\n\t\tcore.insertAction([\n\t\t\t{ \"type\": \"changeFloor\", \"stair\": \"upFloor\", \"floorId\": floorId },\n\t\t\t{ \"type\": \"tip\", \"text\": core.material.items[itemId].name + '使用成功' }\n\t\t]);\n\t} else {\n\t\tcore.changeFloor(floorId, \"upFloor\", null, null, function () {\n\t\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t\t\tcore.replay();\n\t\t});\n\t}\n})();",
		"canUseItemEffect": "(function () {\n\tvar floorId = core.status.floorId,\n\t\tindex = core.floorIds.indexOf(floorId);\n\tif (index > 0) {\n\t\tvar toId = core.floorIds[index - 1],\n\t\t\ttoX = core.getHeroLoc('x'),\n\t\t\ttoY = core.getHeroLoc('y');\n\t\tvar mw = core.floors[toId].width,\n\t\t\tmh = core.floors[toId].height;\n\t\tif (toX >= 0 && toX < mw && toY >= 0 && toY < mh) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n})();"
	},
	"earthquake": {
		"cls": "tools",
		"name": "地震卷轴",
		"text": "可以破坏当前层的所有墙",
		"useItemEffect": "(function () {\n\tvar indexes = [];\n\tfor (var index in core.status.thisMap.blocks) {\n\t\tvar block = core.status.thisMap.blocks[index];\n\t\tif (!block.disable && block.event.canBreak) {\n\t\t\tindexes.push(index);\n\t\t}\n\t}\n\tcore.removeBlockByIndexes(indexes);\n\tcore.redrawMap();\n\tcore.playSound('炸弹');\n\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.status.thisMap.blocks.filter(function (block) {\n\t\treturn !block.disable && block.event.canBreak;\n\t}).length > 0;\n})();"
	},
	"poisonWine": {
		"cls": "tools",
		"name": "解毒药水",
		"text": "可以解除中毒状态",
		"useItemEffect": "core.triggerDebuff('remove', 'poison');",
		"canUseItemEffect": "core.hasFlag('poison');"
	},
	"weakWine": {
		"cls": "tools",
		"name": "解衰药水",
		"text": "可以解除衰弱状态",
		"useItemEffect": "core.triggerDebuff('remove', 'weak');",
		"canUseItemEffect": "core.hasFlag('weak');"
	},
	"curseWine": {
		"cls": "tools",
		"name": "解咒药水",
		"text": "可以解除诅咒状态",
		"useItemEffect": "core.triggerDebuff('remove', 'curse');",
		"canUseItemEffect": "core.hasFlag('curse');"
	},
	"superWine": {
		"cls": "tools",
		"name": "解百纳",
		"text": "可以解除所有不良状态",
		"useItemEffect": "core.triggerDebuff('remove', ['poison', 'weak', 'curse']);",
		"canUseItemEffect": "(function() {\n\treturn core.hasFlag('poison') || core.hasFlag('weak') || core.hasFlag('curse');\n})();"
	},
	"hammer": {
		"cls": "tools",
		"name": "圣锤",
		"text": "该道具尚未被定义"
	},
	"lifeWand": {
		"cls": "tools",
		"name": "生命魔杖",
		"text": "可以恢复100点生命值",
		"useItemEvent": [
			{
				"type": "comment",
				"text": "先恢复一个魔杖（因为使用道具必须消耗一个）"
			},
			{
				"type": "function",
				"function": "function(){\ncore.addItem('lifeWand', 1);\n}"
			},
			{
				"type": "playSound",
				"name": "打开界面"
			},
			{
				"type": "input",
				"text": "请输入生命魔杖使用次数：(0-${item:lifeWand})"
			},
			{
				"type": "comment",
				"text": "【接受用户输入】弹窗输入的结果将会保存在“flag:input”中\n如果需要更多帮助，请查阅帮助文档"
			},
			{
				"type": "if",
				"condition": "flag:input<=item:lifeWand",
				"true": [
					{
						"type": "setValue",
						"name": "item:lifeWand",
						"operator": "-=",
						"value": "flag:input"
					},
					{
						"type": "setValue",
						"name": "status:hp",
						"operator": "+=",
						"value": "flag:input*100"
					},
					{
						"type": "playSound",
						"name": "回血"
					},
					"成功使用${flag:input}次生命魔杖，恢复${flag:input*100}点生命。"
				],
				"false": [
					{
						"type": "playSound",
						"name": "操作失败"
					},
					"输入不合法！"
				]
			}
		],
		"canUseItemEffect": "true"
	},
	"jumpShoes": {
		"cls": "tools",
		"name": "穿毹鞋",
		"text": "可穿过怪物或墙及其他东东",
		"useItemEffect": "core.playSound(\"跳跃\");\ncore.insertAction({ \"type\": \"jumpHero\", \"loc\": [core.nextX(2), core.nextY(2)] });",
		"canUseItemEffect": "(function () {\n\tvar nx = core.nextX(2),\n\t\tny = core.nextY(2);\n\treturn nx >= 0 && nx < core.bigmap.width && ny >= 0 && ny < core.bigmap.height && !core.noPass(nx, ny); // && core.getBlockId(nx, ny) == null;\n})();"
	},
	"skill1": {
		"cls": "constants",
		"name": "技能：二倍斩",
		"text": "可以打开或关闭主动技能二倍斩",
		"hideInReplay": true,
		"useItemEffect": "(function () {\n\tvar skillValue = 1; // 技能的flag:skill值，可用于当前开启技能的判定；对于新技能可以依次改成2，3等等\n\tvar skillNeed = 5; // 技能的需求\n\tvar skillName = '二倍斩'; // 技能的名称\n\n\tif (core.getFlag('skill', 0) != skillValue) { // 判断当前是否已经开了技能\n\t\tif (core.getStatus('mana') >= skillNeed) { // 这里要写当前能否开技能的条件判断，比如魔力值至少要多少\n\t\t\tcore.playSound('打开界面');\n\t\t\tcore.setFlag('skill', skillValue); // 开技能1\n\t\t\tcore.setFlag('skillName', skillName); // 设置技能名\n\t\t} else {\n\t\t\tcore.playSound('操作失败');\n\t\t\tcore.drawTip('魔力不足，无法开启技能');\n\t\t}\n\t} else { // 关闭技能\n\t\tcore.setFlag('skill', 0); // 关闭技能状态\n\t\tcore.setFlag('skillName', '无');\n\t}\n})();",
		"canUseItemEffect": "true"
	},
	"wand": {
		"cls": "items",
		"name": "新物品"
	},
	"pack": {
		"cls": "tools",
		"name": "锦囊袋",
		"itemEffect": "core.status.hero.money += 500",
		"itemEffectTip": "，金币+500",
		"text": "可得到一些血瓶(4红3蓝2黄1绿)、宝石(1红1蓝1绿)、钥匙(5黄3蓝1红)，和1个大金币（消耗物品）",
		"canUseItemEffect": "true",
		"useItemEffect": "core.insertCommonEvent(\"DynamicPotion\", [\"brocade\"]);"
	},
	"I333": {
		"cls": "items",
		"name": "毁灭卷轴",
		"canUseItemEffect": "(function () {\n\treturn core.status.thisMap.blocks.filter(function (block) {\n\t\treturn !block.disable && block.event.canDestoriedByReels;\n\t}).length > 0;\n})();",
		"useItemEffect": "(function () {\n\tvar indexes = [];\n\tfor (var index in core.status.thisMap.blocks) {\n\t\tvar block = core.status.thisMap.blocks[index];\n\t\tif (!block.disable && block.event.canDestoriedByReels) {\n\t\t\tindexes.push(index);\n\t\t}\n\t}\n\tcore.removeBlockByIndexes(indexes);\n\tcore.redrawMap();\n\tcore.playSound('炸弹');\n\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n})();",
		"text": "用于摧毁一层中所有的墙和黄门（消耗物品）"
	},
	"I334": {
		"cls": "items",
		"name": "解慢药水",
		"canUseItemEffect": "true",
		"text": "可以解除缓慢状态（H5版本中无效果）"
	},
	"I335": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I336": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I337": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I338": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I339": {
		"cls": "tools",
		"name": "大金币",
		"canUseItemEffect": "true",
		"text": "加1000点金钱，200点经验（消耗物品）",
		"useItemEffect": "core.status.hero.money += 1000;\ncore.status.hero.exp += 200;"
	},
	"I340": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I341": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I342": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I344": {
		"cls": "constants",
		"name": "对话手册",
		"canUseItemEffect": "true"
	},
	"book_old": {
		"cls": "constants",
		"name": "怪物手册",
		"text": "可以查看当前楼层各怪物属性",
		"hideInToolbox": true,
		"useItemEffect": "core.ui.drawBook(0);",
		"canUseItemEffect": "true"
	},
	"book": {
		"cls": "constants",
		"name": "怪物手册",
		"text": "可以查看当前楼层各怪物属性",
		"hideInToolbox": true,
		"useItemEffect": "core.ui.drawBook(0);",
		"canUseItemEffect": "true"
	},
	"I347": {
		"cls": "items",
		"name": "？？？，回复生命",
		"canUseItemEffect": "true",
		"hideInToolbox": true,
		"text": null
	},
	"fly_old": {
		"cls": "constants",
		"name": "角色切换",
		"text": "可以切换所操作的角色（快捷键\"U\"）",
		"hideInReplay": false,
		"hideInToolbox": false,
		"useItemEffect": "core.insertCommonEvent(\"SwitchCharactor\");",
		"canUseItemEffect": "true"
	},
	"fly": {
		"cls": "constants",
		"name": "楼层传送器",
		"text": "可以自由往来去过的楼层",
		"hideInReplay": true,
		"hideInToolbox": true,
		"useItemEffect": "core.ui.drawFly(core.floorIds.indexOf(core.status.floorId));",
		"canUseItemEffect": "(function () {\n\tif (core.flags.flyNearStair && !core.nearStair()) return false;\n\treturn core.status.maps[core.status.floorId].canFlyFrom;\n})();"
	},
	"I388": {
		"cls": "equips",
		"name": "红钻戒",
		"canUseItemEffect": "true",
		"equip": {
			"type": 4,
			"value": {
				"atk": 20
			},
			"percentage": {}
		},
		"text": "提升攻击20点（装饰品）"
	},
	"I389": {
		"cls": "equips",
		"name": "蓝钻戒",
		"canUseItemEffect": "true",
		"text": "提升防御20点（装饰品）",
		"equip": {
			"type": 4,
			"value": {
				"def": 20
			},
			"percentage": {}
		}
	},
	"I390": {
		"cls": "equips",
		"name": "绿钻戒",
		"canUseItemEffect": "true",
		"text": "提升魔防20点（装饰品）",
		"equip": {
			"type": 4,
			"value": {
				"mdef": 20
			},
			"percentage": {}
		}
	},
	"I391": {
		"cls": "equips",
		"name": "万能钻戒",
		"canUseItemEffect": "true",
		"text": "提升攻击、防御、魔防各15点（装饰品）",
		"equip": {
			"type": 4,
			"value": {
				"atk": 15,
				"def": 15,
				"mdef": 15
			},
			"percentage": {}
		}
	},
	"I392": {
		"cls": "equips",
		"name": "红钻戒LV2",
		"canUseItemEffect": "true",
		"equip": {
			"type": 4,
			"value": {
				"atk": 30
			},
			"percentage": {}
		},
		"text": "提升攻击30点（装饰品）"
	},
	"I393": {
		"cls": "equips",
		"name": "蓝钻戒LV2",
		"canUseItemEffect": "true",
		"equip": {
			"type": 4,
			"value": {
				"def": 30
			},
			"percentage": {}
		},
		"text": "提升防御30点（装饰品）"
	},
	"I394": {
		"cls": "equips",
		"name": "绿钻戒LV2",
		"canUseItemEffect": "true",
		"equip": {
			"type": 4,
			"value": {
				"mdef": 30
			},
			"percentage": {}
		},
		"text": "提升魔防30点（装饰品）"
	},
	"I395": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I402": {
		"cls": "equips",
		"name": "幽缗剑",
		"canUseItemEffect": "true",
		"text": "国王遗留下的剑(装备物品)",
		"equip": {
			"type": 0,
			"animate": "A13",
			"value": {
				"atk": 150,
				"mdef": 25
			},
			"percentage": {}
		}
	},
	"I403": {
		"cls": "equips",
		"name": "幽缗盾",
		"canUseItemEffect": "true",
		"text": "国王遗留下的盾(装备物品)",
		"equip": {
			"type": 1,
			"value": {
				"def": 150,
				"mdef": 25,
				"atk": 3
			},
			"percentage": {}
		}
	},
	"I409": {
		"cls": "constants",
		"name": "攻击法杖",
		"canUseItemEffect": null,
		"text": "按角色等级战前增加角色攻击，不显示在状态栏上。（请按\"3\"查看详情）"
	},
	"I411": {
		"cls": "constants",
		"name": "防御法杖",
		"canUseItemEffect": null,
		"text": "按角色等级战前增加角色防御，不显示在状态栏上。（请按\"3\"查看详情）"
	},
	"I412": {
		"cls": "constants",
		"name": "魔防法杖",
		"canUseItemEffect": null,
		"text": "按角色等级战前增加角色魔防，不显示在状态栏上。（请按\"3\"查看详情）"
	},
	"I413": {
		"cls": "constants",
		"name": "生命法杖",
		"canUseItemEffect": null,
		"text": "按角色等级战后回复角色生命（请按\"3\"查看详情）"
	},
	"I414": {
		"cls": "constants",
		"name": "连击法杖",
		"canUseItemEffect": null,
		"itemEffect": "",
		"text": "按角色等级给予角色额外的连击次数。（请按\"3\"查看详情）"
	},
	"I436": {
		"cls": "tools",
		"name": "通行证",
		"canUseItemEffect": "",
		"text": "可通行一些路"
	},
	"I454": {
		"cls": "items",
		"name": "紫血瓶",
		"canUseItemEffect": "true",
		"itemEffectTip": "回复生命",
		"text": ""
	},
	"I455": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I457": {
		"cls": "tools",
		"name": "珍贵钥匙",
		"canUseItemEffect": "(function () {\n\treturn core.searchBlock(\"(yellow|blue|red|green|steel)Door\\\\d*\").length > 0;\n})();",
		"useItemEffect": "(function () {\n\tcore.setFlag(\"noDoorSound\", 1);\n\tvar actions = core.searchBlock(\"(yellow|blue|red|green|steel)Door\\\\d*\").map(function (block) {\n\t\treturn { \"type\": \"openDoor\", \"loc\": [block.x, block.y], \"async\": true };\n\t});\n\tactions.push({ \"type\": \"waitAsync\" });\n\tactions.push({ \"type\": \"tip\", \"text\": core.material.items[itemId].name + \"使用成功\" });\n\tactions.push({ \"type\": \"function\", \"function\": \"function(){\\ncore.removeFlag(\\\"noDoorSound\\\");\\n}\" });\n\tcore.insertAction(actions);\n})();",
		"text": "抵消一层中所有门（消耗物品）"
	},
	"BSpecialKey": {
		"cls": "tools",
		"name": "B-特殊钥匙",
		"text": "用来开特殊的门",
		"hideInToolbox": true
	},
	"HSpecialKey": {
		"cls": "tools",
		"name": "H-特殊钥匙",
		"text": "用来开特殊的门",
		"hideInToolbox": true
	},
	"LSpecialKey": {
		"cls": "tools",
		"name": "L-特殊钥匙",
		"text": "用来开特殊的门",
		"hideInToolbox": true
	},
	"I494": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I495": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true",
		"hideInToolbox": true
	},
	"I496": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true",
		"hideInToolbox": true
	},
	"I497": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true",
		"hideInToolbox": true
	},
	"allSteel": {
		"cls": "constants",
		"name": "万能铁门钥匙",
		"canUseItemEffect": null,
		"text": "用来开所有的铁门"
	},
	"I526": {
		"cls": "items",
		"name": "物种探知器",
		"canUseItemEffect": "true",
		"text": "用来侦测潜伏的怪物（复刻版无效果）",
		"itemEffectTip": "，用来侦测潜伏的怪物（复刻版无效果）"
	},
	"bAtkGem": {
		"cls": "items",
		"name": "攻击香蕉",
		"canUseItemEffect": "true",
		"text": "可增加使用者3点攻击（消耗物品）",
		"itemEffect": "core.addStatus(\"atk\", 3);",
		"itemEffectTip": "，攻击+3",
		"useItemEffect": "core.addStatus(\"atk\", 3);",
		"hideInToolbox": true
	},
	"bDefGem": {
		"cls": "items",
		"name": "防御香蕉",
		"canUseItemEffect": "true",
		"text": "可增加使用者3点攻击（消耗物品）",
		"itemEffect": "core.addStatus(\"def\", 3);",
		"itemEffectTip": "，防御+3",
		"useItemEffect": "core.addStatus(\"def\", 3);"
	},
	"bMdefGem": {
		"cls": "items",
		"name": "魔防香蕉",
		"canUseItemEffect": "true",
		"text": "可增加使用者3点魔防（消耗物品）",
		"itemEffect": "core.addStatus(\"mdef\", 3);",
		"itemEffectTip": "，魔防+3",
		"useItemEffect": "core.addStatus(\"mdef\", 3);"
	},
	"I541": {
		"cls": "constants",
		"name": "护符",
		"canUseItemEffect": null,
		"text": "持有后不受怪物领域、夹击的伤害"
	},
	"I542": {
		"cls": "items",
		"name": "？？？",
		"canUseItemEffect": "true",
		"itemEffect": "var hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.hp += 9999;\n});\ncore.updateStatusBar(true);",
		"itemEffectTip": "，全体角色回复9999点生命！"
	},
	"I543": {
		"cls": "items",
		"name": "？？？",
		"canUseItemEffect": "true",
		"itemEffect": "var hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.hp += 9999;\n});\ncore.updateStatusBar(true);",
		"itemEffectTip": "，全体角色回复9999点生命！"
	},
	"I544": {
		"cls": "items",
		"name": "？？？",
		"canUseItemEffect": "true",
		"itemEffect": "var hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.hp += 9999;\n});\ncore.updateStatusBar(true);",
		"itemEffectTip": "，全体角色回复9999点生命！"
	},
	"I545": {
		"cls": "items",
		"name": "？？？",
		"canUseItemEffect": "true",
		"itemEffect": "var hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.hp += 9999;\n});\ncore.updateStatusBar(true);",
		"itemEffectTip": "，全体角色回复9999点生命！"
	},
	"I546": {
		"cls": "equips",
		"name": "铠甲",
		"canUseItemEffect": "true",
		"text": "最差的盔甲，掺入部分木质品(装备物品)",
		"equip": {
			"type": 3,
			"value": {
				"mdef": 5,
				"def": 15,
				"atk": 10
			},
			"percentage": {}
		}
	},
	"I547": {
		"cls": "equips",
		"name": "头盔",
		"canUseItemEffect": "true",
		"text": "头盔而已啦(装备物品)",
		"equip": {
			"type": 2,
			"value": {
				"mdef": 5,
				"def": 10,
				"atk": 5
			},
			"percentage": {}
		}
	},
	"I548": {
		"cls": "equips",
		"name": "高级铠甲",
		"canUseItemEffect": "true",
		"text": "纯铁打造的盔甲(装备物品)",
		"equip": {
			"type": 3,
			"value": {
				"mdef": 10,
				"def": 25,
				"atk": 20
			},
			"percentage": {}
		}
	},
	"candle": {
		"cls": "constants",
		"name": "蜡烛",
		"canUseItemEffect": null,
		"text": "照亮勇士的周围",
		"useItemEvent": [
			{
				"type": "function",
				"function": "function(){\ncore.updateDarkMask(core.status.heroCenter.px, core.status.heroCenter.py);\n}"
			}
		]
	}
}