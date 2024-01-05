var items_296f5d02_12fd_4166_a7c1_b5e830c9ee3a = 
{
	"yellowKey": {
		"cls": "tools",
		"name": "黄钥匙",
		"text": "可以打开一扇黄门",
		"hideInToolbox": true,
		"defaultPrice": 20
	},
	"blueKey": {
		"cls": "tools",
		"name": "蓝钥匙",
		"text": "可以打开一扇蓝门",
		"hideInToolbox": true,
		"defaultPrice": 100
	},
	"redKey": {
		"cls": "tools",
		"name": "红钥匙",
		"text": "可以打开一扇红门",
		"hideInToolbox": true,
		"defaultPrice": 200
	},
	"redGem": {
		"cls": "tools",
		"name": "红宝石",
		"text": "攻击+${core.values.redGem}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true",
		"hideInToolbox": false,
		"defaultPrice": 1000
	},
	"blueGem": {
		"cls": "tools",
		"name": "蓝宝石",
		"text": "防御+${core.values.blueGem}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true",
		"hideInToolbox": false,
		"defaultPrice": 1000
	},
	"greenGem": {
		"cls": "tools",
		"name": "绿宝石",
		"text": "魔防+${core.values.greenGem}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio",
		"itemEffectTip": "，魔防+${core.values.greenGem * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true",
		"hideInToolbox": false,
		"defaultPrice": 1000
	},
	"yellowGem": {
		"cls": "tools",
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
		"hideInToolbox": false,
		"defaultPrice": 6000
	},
	"redPotion": {
		"cls": "tools",
		"name": "红血瓶",
		"text": "\t生命+${core.values.redPotion}",
		"itemEffect": "if (core.hasFlag('dying')) core.insertCommonEvent('结局处理', ['结局1']);\ncore.status.hero.hp += core.values.redPotion * core.status.thisMap.ratio;",
		"itemEffectTip": "，生命+${core.values.redPotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.redPotion",
		"canUseItemEffect": "!core.hasFlag('dying')",
		"hideInToolbox": false,
		"defaultPrice": 1000
	},
	"bluePotion": {
		"cls": "tools",
		"name": "蓝血瓶",
		"text": "生命+${core.values.bluePotion}",
		"itemEffect": "if (core.hasFlag('dying')) core.insertCommonEvent('结局处理', ['结局1']);\ncore.status.hero.hp += core.values.bluePotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.bluePotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.bluePotion",
		"canUseItemEffect": "!core.hasFlag('dying')",
		"hideInToolbox": false,
		"defaultPrice": 2000
	},
	"yellowPotion": {
		"cls": "tools",
		"name": "黄血瓶",
		"text": "生命+${core.values.yellowPotion}",
		"itemEffect": "if (core.hasFlag('dying')) core.insertCommonEvent('结局处理', ['结局1']);\ncore.status.hero.hp += core.values.yellowPotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.yellowPotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.yellowPotion",
		"canUseItemEffect": "!core.hasFlag('dying')",
		"hideInToolbox": false,
		"defaultPrice": 4000
	},
	"greenPotion": {
		"cls": "tools",
		"name": "绿血瓶",
		"text": "生命+${core.values.greenPotion}",
		"itemEffect": "if (core.hasFlag('dying')) core.insertCommonEvent('结局处理', ['结局1']);\ncore.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "!core.hasFlag('dying')",
		"hideInToolbox": false,
		"defaultPrice": 6000
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
		"canUseItemEffect": "true",
		"defaultPrice": 50
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
		"canUseItemEffect": "true",
		"defaultPrice": 200
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
		"canUseItemEffect": "true",
		"defaultPrice": 800
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
		"itemEffectTip": "，攻击+80",
		"defaultPrice": 1000
	},
	"sword5": {
		"cls": "equips",
		"name": "神圣剑",
		"text": "装备力强的剑(装备物品)",
		"equip": {
			"type": 0,
			"animate": "A17",
			"value": {
				"atk": 250,
				"def": 10,
				"mdef": 10
			},
			"percentage": {}
		},
		"itemEffect": "core.status.hero.atk += 100",
		"itemEffectTip": "，攻击+100",
		"defaultPrice": 10000
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
		"canUseItemEffect": "true",
		"defaultPrice": 50
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
		"canUseItemEffect": "true",
		"defaultPrice": 200
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
		"canUseItemEffect": "true",
		"defaultPrice": 800
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
		"canUseItemEffect": "true",
		"defaultPrice": 1000
	},
	"shield5": {
		"cls": "equips",
		"name": "神圣盾",
		"text": "装备力强的盾(装备物品)",
		"equip": {
			"type": 1,
			"value": {
				"mdef": 40,
				"def": 250,
				"atk": 10
			},
			"percentage": {}
		},
		"itemEffect": "core.status.hero.def += 100;core.status.hero.mdef += 100",
		"itemEffectTip": "，防御+100，护盾+100",
		"defaultPrice": 10000
	},
	"superPotion": {
		"cls": "tools",
		"name": "圣水",
		"itemEffect": "core.status.hero.hp *= 2",
		"itemEffectTip": "，生命值翻倍",
		"useItemEffect": "core.status.hero.hp *= 2;core.playSound('回血');",
		"canUseItemEffect": "true",
		"text": "用后生命翻倍（消耗物品）",
		"defaultPrice": 8000
	},
	"coin": {
		"cls": "tools",
		"name": "幸运金币",
		"text": "持有时打败怪物可得双倍金币（不叠加）",
		"defaultPrice": 8000
	},
	"freezeBadge": {
		"cls": "tools",
		"name": "冰冻徽章",
		"text": "消去一块熔岩地面",
		"useItemEffect": "(function () {\n\tvar success = false;\n\n\tvar snowFourDirections = false; // 是否多方向雪花；如果是将其改成true\n\tif (snowFourDirections) {\n\t\t// 多方向雪花\n\t\tfor (var direction in core.utils.scan) { // 多方向雪花默认四方向，如需改为八方向请将这两个scan改为scan2\n\t\t\tvar delta = core.utils.scan[direction];\n\t\t\tvar nx = core.getHeroLoc('x') + delta.x,\n\t\t\t\tny = core.getHeroLoc('y') + delta.y;\n\t\t\tvar next_id = core.getBlockId(nx, ny);\n\t\t\tif (next_id == 'lava' || next_id == 'A366') {\n\t\t\t\tcore.removeBlock(nx, ny);\n\t\t\t\tsuccess = true;\n\t\t\t}\n\t\t}\n\t} else {\n\t\tvar next_id = core.getBlockId(core.nextX(), core.nextY());\n\t\tif (next_id == 'lava' || next_id == 'A366') {\n\t\t\tcore.removeBlock(core.nextX(), core.nextY());\n\t\t\tsuccess = true;\n\t\t}\n\t}\n\n\tif (success) {\n\t\tcore.playSound('打开界面');\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\t} else {\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip(\"当前无法使用\" + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n})();",
		"canUseItemEffect": "true",
		"defaultPrice": 4000
	},
	"cross": {
		"cls": "constants",
		"name": "圣十字架",
		"text": "持有后无视怪物的无敌属性",
		"defaultPrice": 12000
	},
	"dagger": {
		"cls": "tools",
		"name": "神者之剑",
		"text": "将面前的怪物变成噬菌体（消耗物品）",
		"canUseItemEffect": "true",
		"useItemEffect": "(function () {\n\tvar bombList = []; // 炸掉的怪物坐标列表\n\tvar todo = []; // 炸弹后事件\n\tvar money = 0,\n\t\texp = 0; // 炸弹获得的金币和经验\n\n\tvar canBomb = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null || block.disable || block.event.cls.indexOf('enemy') != 0) return false;\n\t\tvar enemy = core.material.enemys[block.event.id];\n\t\treturn enemy && !enemy.notBomb;\n\t};\n\n\tvar bomb = function (x, y) {\n\t\tif (!canBomb(x, y)) return;\n\t\tbombList.push([x, y]);\n\t\tvar id = core.getBlockId(x, y),\n\t\t\tenemy = core.material.enemys[id];\n\t\tmoney += core.getEnemyValue(enemy, 'money', x, y) || 0;\n\t\texp += core.getEnemyValue(enemy, 'exp', x, y) || 0;\n\t\tcore.setBlock(\"E374\", x, y);\n\t}\n\n\t// 如果要多方向可炸，把这里的false改成true\n\tif (false) {\n\t\tvar scan = core.utils.scan; // 多方向炸时默认四方向，如果要改成八方向炸可以改成 core.utils.scan2\n\t\tfor (var direction in scan) {\n\t\t\tvar delta = scan[direction];\n\t\t\tbomb(core.getHeroLoc('x') + delta.x, core.getHeroLoc('y') + delta.y);\n\t\t}\n\t} else {\n\t\t// 仅炸当前\n\t\tbomb(core.nextX(), core.nextY());\n\t}\n\n\tif (bombList.length == 0) {\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip('当前无法使用' + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n\n\tcore.playSound('recovery.mp3');\n\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\n\t// 取消这里的注释可以炸弹后获得金币和经验\n\t// core.status.hero.money += money;\n\t// core.status.hero.exp += exp;\n\n\t// 取消这里的注释可以炸弹引发战后事件\n\t// if (todo.length > 0) core.insertAction(todo);\n\n})();",
		"defaultPrice": 6000
	},
	"amulet": {
		"cls": "constants",
		"name": "自然之靴",
		"text": "持有时无视负面地形",
		"defaultPrice": 8000
	},
	"bigKey": {
		"cls": "tools",
		"name": "大黄门钥匙",
		"text": "可以开启当前层所有黄门",
		"itemEffect": "core.addItem('yellowKey', 1);\ncore.addItem('blueKey', 1);\ncore.addItem('redKey', 1);",
		"itemEffectTip": "，全钥匙+1",
		"useItemEffect": "(function () {\n\tcore.setFlag(\"noDoorSound\", 1);\n\tvar actions = core.searchBlock(\"yellowDoor\\\\d*\").map(function (block) {\n\t\treturn { \"type\": \"openDoor\", \"loc\": [block.x, block.y], \"async\": true };\n\t});\n\tactions.push({ \"type\": \"waitAsync\" });\n\tactions.push({ \"type\": \"tip\", \"text\": core.material.items[itemId].name + \"使用成功\" });\n\tactions.push({ \"type\": \"function\", \"function\": \"function(){\\ncore.removeFlag(\\\"noDoorSound\\\");\\n}\" });\n\tcore.insertAction(actions);\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.searchBlock(\"yellowDoor\\\\d*\").length > 0;\n})();",
		"defaultPrice": 6000
	},
	"greenKey": {
		"cls": "tools",
		"name": "绿钥匙",
		"text": "可以打开一扇绿门，须经-18F NPC鉴定后才有效。",
		"hideInToolbox": true,
		"defaultPrice": 1200
	},
	"steelKey": {
		"cls": "tools",
		"name": "铁门钥匙",
		"text": "可以打开一扇铁门",
		"hideInToolbox": true,
		"defaultPrice": 1500
	},
	"pickaxe": {
		"cls": "tools",
		"name": "破墙镐",
		"text": "可以破坏勇士面前的墙",
		"useItemEffect": "(function () {\n\tvar canBreak = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null || block.disable) return false;\n\t\treturn block.event.canBreak;\n\t};\n\n\tvar success = false;\n\tvar pickaxeFourDirections = false; // 是否多方向破；如果是将其改成true\n\tif (pickaxeFourDirections) {\n\t\t// 多方向破\n\t\tfor (var direction in core.utils.scan) { // 多方向破默认四方向，如需改成八方向请将这两个scan改为scan2\n\t\t\tvar delta = core.utils.scan[direction];\n\t\t\tvar nx = core.getHeroLoc('x') + delta.x,\n\t\t\t\tny = core.getHeroLoc('y') + delta.y;\n\t\t\tif (canBreak(nx, ny)) {\n\t\t\t\tcore.removeBlock(nx, ny);\n\t\t\t\tsuccess = true;\n\t\t\t}\n\t\t}\n\t} else {\n\t\t// 仅破当前\n\t\tif (canBreak(core.nextX(), core.nextY())) {\n\t\t\tcore.removeBlock(core.nextX(), core.nextY());\n\t\t\tsuccess = true;\n\t\t}\n\t}\n\n\tif (success) {\n\t\tcore.playSound('破墙镐');\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\t} else {\n\t\t// 无法使用\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip(\"当前无法使用\" + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n})();",
		"canUseItemEffect": "true",
		"defaultPrice": 5000
	},
	"icePickaxe": {
		"cls": "tools",
		"name": "破冰镐",
		"text": "可以破坏勇士面前的一堵冰墙",
		"useItemEffect": "(function () {\n\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\tvar next_id = core.getBlockId(core.nextX(), core.nextY());\n\tif (next_id === \"IceWall\") {\n\t\tvar nx = core.nextX(),\n\t\t\tny = core.nextY();\n\t\tcore.insertAction([{\n\t\t\t\"type\": \"setBlock\",\n\t\t\t\"number\": \"yellowWall\",\n\t\t\t\"loc\": [\n\t\t\t\t[nx, ny]\n\t\t\t]\n\t\t}, \"\\\\t[H5复刻作者]这不是BUG，原作在这里用确实会变成墙。\"]);\n\t} else {\n\t\tcore.insertAction({ \"type\": \"openDoor\", \"loc\": [\"core.nextX()\", \"core.nextY()\"] });\n\t}\n})();",
		"canUseItemEffect": "(function () {\n\tvar next_id = core.getBlockId(core.nextX(), core.nextY());\n\treturn next_id == 'Ice' || next_id == 'A456' || next_id == 'IceWall';\n})();",
		"defaultPrice": 5000
	},
	"bomb": {
		"cls": "tools",
		"name": "炸弹",
		"text": "消灭玩家面对的单个非Boss怪物（消耗物品）",
		"useItemEffect": "(function () {\n\tvar bombList = []; // 炸掉的怪物坐标列表\n\tvar todo = []; // 炸弹后事件\n\tvar money = 0,\n\t\texp = 0; // 炸弹获得的金币和经验\n\n\tvar canBomb = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null || block.disable || block.event.cls.indexOf('enemy') != 0) return false;\n\t\tvar enemy = core.material.enemys[block.event.id];\n\t\treturn enemy && !enemy.notBomb;\n\t};\n\n\tvar bomb = function (x, y) {\n\t\tif (!canBomb(x, y)) return;\n\t\tbombList.push([x, y]);\n\t\tvar id = core.getBlockId(x, y),\n\t\t\tenemy = core.material.enemys[id];\n\t\tmoney += core.getEnemyValue(enemy, 'money', x, y) || 0;\n\t\texp += core.getEnemyValue(enemy, 'exp', x, y) || 0;\n\t\tcore.push(todo, core.floors[core.status.floorId].afterBattle[x + \",\" + y]);\n\t\tcore.push(todo, enemy.afterBattle);\n\t\tcore.removeBlock(x, y);\n\t}\n\n\t// 如果要多方向可炸，把这里的false改成true\n\tif (false) {\n\t\tvar scan = core.utils.scan; // 多方向炸时默认四方向，如果要改成八方向炸可以改成 core.utils.scan2\n\t\tfor (var direction in scan) {\n\t\t\tvar delta = scan[direction];\n\t\t\tbomb(core.getHeroLoc('x') + delta.x, core.getHeroLoc('y') + delta.y);\n\t\t}\n\t} else {\n\t\t// 仅炸当前\n\t\tbomb(core.nextX(), core.nextY());\n\t}\n\n\tif (bombList.length == 0) {\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip('当前无法使用' + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n\n\tcore.playSound('炸弹');\n\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\n\t// 取消这里的注释可以炸弹后获得金币和经验\n\t// core.status.hero.money += money;\n\t// core.status.hero.exp += exp;\n\n\t// 取消这里的注释可以炸弹引发战后事件\n\t// if (todo.length > 0) core.insertAction(todo);\n\n})();",
		"canUseItemEffect": "true",
		"defaultPrice": 10000
	},
	"centerFly": {
		"cls": "tools",
		"name": "中心对称飞行器",
		"text": "飞到勇士当前位置的中心对称点（消耗物品）",
		"useItemEffect": "core.playSound('centerFly.mp3');\ncore.clearMap('hero');\ncore.setHeroLoc('x', core.bigmap.width - 1 - core.getHeroLoc('x'));\ncore.setHeroLoc('y', core.bigmap.height - 1 - core.getHeroLoc('y'));\ncore.drawHero();\ncore.drawTip(core.material.items[itemId].name + '使用成功');",
		"canUseItemEffect": "(function () {\n\tvar toX = core.bigmap.width - 1 - core.getHeroLoc('x'),\n\t\ttoY = core.bigmap.height - 1 - core.getHeroLoc('y');\n\tvar id = core.getBlockId(toX, toY);\n\treturn id == null;\n})();",
		"defaultPrice": 3000
	},
	"upFly": {
		"cls": "tools",
		"name": "升飞羽",
		"text": "去到当前楼层的上一层（消耗物品）",
		"useItemEffect": "(function () {\n\tvar floorId = core.floorIds[core.floorIds.indexOf(core.status.floorId) + 1];\n\tif (core.status.event.id == 'action') {\n\t\tcore.insertAction([\n\t\t\t{ \"type\": \"changeFloor\", \"stair\": \"downFloor\", \"floorId\": floorId },\n\t\t\t{ \"type\": \"tip\", \"text\": core.material.items[itemId].name + '使用成功' }\n\t\t]);\n\t} else {\n\t\tcore.changeFloor(floorId, \"downFloor\", null, null, function () {\n\t\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t\t\tcore.replay();\n\t\t});\n\t}\n})();",
		"canUseItemEffect": "(function () {\n\tvar floorId = core.status.floorId,\n\t\tindex = core.floorIds.indexOf(floorId);\n\tif (!/MTn?\\d+/.test(floorId)) return false;\n\tif (core.inArray(['MT20', 'MT42', 'MT65', 'MT85'], floorId))\n\t\treturn false;\n\tif (index < core.floorIds.length - 1) {\n\t\tvar toId = core.floorIds[index + 1],\n\t\t\ttoX = core.getHeroLoc('x'),\n\t\t\ttoY = core.getHeroLoc('y');\n\t\tvar mw = core.floors[toId].width,\n\t\t\tmh = core.floors[toId].height;\n\t\tif (toX >= 0 && toX < mw && toY >= 0 && toY < mh) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n})();",
		"defaultPrice": 4000
	},
	"downFly": {
		"cls": "tools",
		"name": "降飞羽",
		"text": "去到当前楼层的下一层（消耗物品）",
		"useItemEffect": "(function () {\n\tvar floorId = core.floorIds[core.floorIds.indexOf(core.status.floorId) - 1];\n\tif (core.status.event.id == 'action') {\n\t\tcore.insertAction([\n\t\t\t{ \"type\": \"changeFloor\", \"stair\": \"upFloor\", \"floorId\": floorId },\n\t\t\t{ \"type\": \"tip\", \"text\": core.material.items[itemId].name + '使用成功' }\n\t\t]);\n\t} else {\n\t\tcore.changeFloor(floorId, \"upFloor\", null, null, function () {\n\t\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t\t\tcore.replay();\n\t\t});\n\t}\n})();",
		"canUseItemEffect": "(function () {\n\tvar floorId = core.status.floorId,\n\t\tindex = core.floorIds.indexOf(floorId);\n\tif (!/MTn?\\d+/.test(floorId)) return false;\n\tif (core.inArray(['MTn29', 'MTn57', 'MTn75', 'MTn86', 'MTn90', 'MT65'], floorId))\n\t\treturn false;\n\tif (index > 0) {\n\t\tvar toId = core.floorIds[index - 1],\n\t\t\ttoX = core.getHeroLoc('x'),\n\t\t\ttoY = core.getHeroLoc('y');\n\t\tvar mw = core.floors[toId].width,\n\t\t\tmh = core.floors[toId].height;\n\t\tif (toX >= 0 && toX < mw && toY >= 0 && toY < mh) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n})();",
		"defaultPrice": 4000
	},
	"earthquake": {
		"cls": "tools",
		"name": "地震卷轴",
		"text": "可以破坏当前层的所有墙",
		"useItemEffect": "(function () {\n\tvar indexes = [];\n\tfor (var index in core.status.thisMap.blocks) {\n\t\tvar block = core.status.thisMap.blocks[index];\n\t\tif (!block.disable && block.event.canBreak) {\n\t\t\tindexes.push(index);\n\t\t}\n\t}\n\tcore.removeBlockByIndexes(indexes);\n\tcore.redrawMap();\n\tcore.playSound('炸弹');\n\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.status.thisMap.blocks.filter(function (block) {\n\t\treturn !block.disable && block.event.canBreak;\n\t}).length > 0;\n})();",
		"defaultPrice": 9000
	},
	"poisonWine": {
		"cls": "tools",
		"name": "解毒药水",
		"text": "可以解除中毒状态",
		"useItemEffect": "core.triggerDebuff('remove', 'poison');",
		"canUseItemEffect": "core.hasFlag('poison');",
		"defaultPrice": 500,
		"hideInToolbox": false
	},
	"weakWine": {
		"cls": "tools",
		"name": "解衰药水",
		"text": "可以解除衰弱状态",
		"useItemEffect": "core.triggerDebuff('remove', 'weak');",
		"canUseItemEffect": "core.hasFlag('weak');",
		"defaultPrice": 400,
		"hideInToolbox": false
	},
	"curseWine": {
		"cls": "tools",
		"name": "解咒药水",
		"text": "可以解除诅咒状态",
		"useItemEffect": "core.triggerDebuff('remove', 'curse');",
		"canUseItemEffect": "core.hasFlag('curse');",
		"defaultPrice": 400,
		"hideInToolbox": false
	},
	"superWine": {
		"cls": "tools",
		"name": "解百纳",
		"text": "可以解除所有不良状态",
		"useItemEffect": "core.triggerDebuff('remove', ['poison', 'weak', 'curse']);",
		"canUseItemEffect": "(function() {\n\treturn core.hasFlag('poison') || core.hasFlag('weak') || core.hasFlag('curse');\n})();",
		"defaultPrice": 800,
		"hideInToolbox": false
	},
	"hammer": {
		"cls": "tools",
		"name": "圣锤",
		"text": "直接消灭玩家四周的非boss级怪物（消耗物品）",
		"useItemEffect": "(function () {\n\tvar bombList = []; // 炸掉的怪物坐标列表\n\tvar todo = []; // 炸弹后事件\n\tvar money = 0,\n\t\texp = 0; // 炸弹获得的金币和经验\n\n\tvar canBomb = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null || block.disable || block.event.cls.indexOf('enemy') != 0) return false;\n\t\tvar enemy = core.material.enemys[block.event.id];\n\t\treturn enemy && !enemy.notBomb;\n\t};\n\n\tvar bomb = function (x, y) {\n\t\tif (!canBomb(x, y)) return;\n\t\tbombList.push([x, y]);\n\t\tvar id = core.getBlockId(x, y),\n\t\t\tenemy = core.material.enemys[id];\n\t\tmoney += core.getEnemyValue(enemy, 'money', x, y) || 0;\n\t\texp += core.getEnemyValue(enemy, 'exp', x, y) || 0;\n\t\tcore.push(todo, core.floors[core.status.floorId].afterBattle[x + \",\" + y]);\n\t\tcore.push(todo, enemy.afterBattle);\n\t\tcore.removeBlock(x, y);\n\t}\n\n\t// 如果要多方向可炸，把这里的false改成true\n\tif (true) {\n\t\tvar scan = core.utils.scan; // 多方向炸时默认四方向，如果要改成八方向炸可以改成 core.utils.scan2\n\t\tfor (var direction in scan) {\n\t\t\tvar delta = scan[direction];\n\t\t\tbomb(core.getHeroLoc('x') + delta.x, core.getHeroLoc('y') + delta.y);\n\t\t}\n\t} else {\n\t\t// 仅炸当前\n\t\tbomb(core.nextX(), core.nextY());\n\t}\n\n\tif (bombList.length == 0) {\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip('当前无法使用' + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n\n\tcore.playSound('炸弹');\n\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\n\t// 取消这里的注释可以炸弹后获得金币和经验\n\t// core.status.hero.money += money;\n\t// core.status.hero.exp += exp;\n\n\t// 取消这里的注释可以炸弹引发战后事件\n\t// if (todo.length > 0) core.insertAction(todo);\n\n})();",
		"canUseItemEffect": "true",
		"defaultPrice": 10000
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
		"canUseItemEffect": "(function () {\n\tvar nx = core.nextX(2),\n\t\tny = core.nextY(2);\n\treturn nx >= 0 && nx < core.bigmap.width && ny >= 0 && ny < core.bigmap.height && !core.noPass(nx, ny); // && core.getBlockId(nx, ny) == null;\n})();",
		"defaultPrice": 5000
	},
	"skill1": {
		"cls": "constants",
		"name": "血瓶道具化(快捷键1)",
		"text": "血瓶可以设置直接使用或放入背包，快捷键1。手机玩家可通过道具栏使用本道具呼出界面。",
		"hideInReplay": true,
		"useItemEffect": "core.insertCommonEvent(\"SetPotionItemized\", [\"Potion\"]);",
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
		"useItemEffect": "core.insertCommonEvent(\"DynamicPotion\", [\"brocade\"]);",
		"defaultPrice": 12000
	},
	"I333": {
		"cls": "tools",
		"name": "毁灭卷轴",
		"canUseItemEffect": "(function () {\n\tif (core.status.floorId === \"MTn75\") return false;\n\treturn core.status.thisMap.blocks.filter(function (block) {\n\t\treturn !block.disable && block.event.canDestoriedByReels;\n\t}).length > 0;\n})();",
		"useItemEffect": "(function () {\n\tvar blocks = [];\n\tfor (var index in core.status.thisMap.blocks) {\n\t\tvar block = core.status.thisMap.blocks[index];\n\t\tif (!block.disable && block.event.canDestoriedByReels) {\n\t\t\tblocks.push(block);\n\t\t}\n\t}\n\t// \tcore.removeBlockByIndexes(indexes);\n\tblocks.forEach(block => {\n\t\tcore.removeBlock(block.x, block.y);\n\t});\n\tcore.redrawMap();\n\tcore.playSound('炸弹');\n\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n})();",
		"text": "用于摧毁一层中所有的墙和黄门（消耗物品）",
		"defaultPrice": 16000
	},
	"I334": {
		"cls": "tools",
		"name": "解慢药水",
		"canUseItemEffect": null,
		"text": "可以解除缓慢状态（H5版本中无效果）",
		"defaultPrice": 300,
		"hideInToolbox": true
	},
	"I335": {
		"cls": "constants",
		"name": "宝石道具化(快捷键2)",
		"text": "宝石可以设置直接使用或放入背包，快捷键2。手机玩家可通过道具栏使用本道具呼出界面。",
		"hideInReplay": true,
		"useItemEffect": "core.insertCommonEvent(\"SetPotionItemized\", [\"Gem\"]);",
		"canUseItemEffect": "true"
	},
	"I336": {
		"cls": "constants",
		"name": "药水快捷使用(快捷键E)",
		"text": "药水可以快捷使用，快捷键E。手机玩家可通过道具栏使用本道具呼出界面。",
		"hideInReplay": true,
		"useItemEffect": "core.insertCommonEvent(\"SetPotionItemized\", [\"Wine\"]);",
		"canUseItemEffect": "true"
	},
	"I337": {
		"cls": "constants",
		"name": "难度设置(快捷键C)",
		"canUseItemEffect": "true",
		"text": "游戏中，使用本物品或按下C键，可以调整难度词条。",
		"useItemEvent": [
			{
				"type": "insert",
				"name": "难度配置",
				"args": [
					"tutorialSetting"
				]
			}
		]
	},
	"I338": {
		"cls": "constants",
		"name": "难度设置(快捷键C)",
		"canUseItemEffect": "true",
		"text": "游戏中，使用本物品或按下C键，可以调整难度词条。",
		"useItemEvent": [
			{
				"type": "insert",
				"name": "难度配置"
			}
		],
		"hideInReplay": true
	},
	"I339": {
		"cls": "tools",
		"name": "大金币",
		"canUseItemEffect": "true",
		"text": "加1000点金钱，200点经验（消耗物品）",
		"useItemEffect": "core.status.hero.money += 1000;\ncore.status.hero.exp += 200;",
		"defaultPrice": 1400
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
		"canUseItemEffect": "true",
		"defaultPrice": null
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
		"hideInReplay": true,
		"hideInToolbox": false,
		"useItemEffect": "core.insertCommonEvent(\"SwitchCharactor\");",
		"canUseItemEffect": "true"
	},
	"fly": {
		"cls": "constants",
		"name": "楼层传送器",
		"text": "可以自由往来去过的楼层",
		"hideInReplay": true,
		"hideInToolbox": false,
		"useItemEffect": "core.ui.drawFly(core.floorIds.indexOf(core.status.floorId));",
		"canUseItemEffect": "(function () {\n\tif (core.flags.flyNearStair && !core.nearStair()) return false;\n\treturn core.status.maps[core.status.floorId].canFlyFrom;\n})();",
		"defaultPrice": 20
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
		"text": "提升攻击20点（装饰品）",
		"defaultPrice": 1500
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
		},
		"defaultPrice": 1500
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
		},
		"defaultPrice": 1500
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
		},
		"defaultPrice": 4000
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
		"text": "提升攻击30点（装饰品）",
		"defaultPrice": 6000
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
		"text": "提升防御30点（装饰品）",
		"defaultPrice": 6000
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
		"text": "提升魔防30点（装饰品）",
		"defaultPrice": 6000
	},
	"I395": {
		"cls": "equips",
		"name": "万能钻戒LV2",
		"canUseItemEffect": "true",
		"defaultPrice": 8000,
		"text": "提升攻击、防御、魔防各20点（装饰品）",
		"equip": {
			"type": 4,
			"value": {
				"mdef": 20,
				"def": 20,
				"atk": 20
			},
			"percentage": {}
		}
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
		},
		"defaultPrice": 4000
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
		},
		"defaultPrice": 4000
	},
	"I409": {
		"cls": "constants",
		"name": "攻击法杖",
		"canUseItemEffect": "true",
		"text": "按角色等级战前增加角色攻击，不显示在状态栏上。（请按\"3\"查看详情）",
		"useItemEffect": "core.insertCommonEvent(\"SetPotionItemized\", [\"Wand\"]);",
		"hideInReplay": true
	},
	"I411": {
		"cls": "constants",
		"name": "防御法杖",
		"canUseItemEffect": "true",
		"text": "按角色等级战前增加角色防御，不显示在状态栏上。（请按\"3\"查看详情）",
		"useItemEffect": "core.insertCommonEvent(\"SetPotionItemized\", [\"Wand\"]);",
		"hideInReplay": true
	},
	"I412": {
		"cls": "constants",
		"name": "魔防法杖",
		"canUseItemEffect": "true",
		"text": "按角色等级战前增加角色魔防，不显示在状态栏上。（请按\"3\"查看详情）",
		"useItemEffect": "core.insertCommonEvent(\"SetPotionItemized\", [\"Wand\"]);",
		"hideInReplay": true
	},
	"I413": {
		"cls": "constants",
		"name": "生命法杖",
		"canUseItemEffect": "true",
		"text": "按角色等级战后回复角色生命（请按\"3\"查看详情）",
		"useItemEffect": "core.insertCommonEvent(\"SetPotionItemized\", [\"Wand\"]);",
		"hideInReplay": true
	},
	"I414": {
		"cls": "constants",
		"name": "连击法杖",
		"canUseItemEffect": "true",
		"itemEffect": "",
		"text": "按角色等级给予角色额外的连击次数。（请按\"3\"查看详情）",
		"useItemEffect": "core.insertCommonEvent(\"SetPotionItemized\", [\"Wand\"]);",
		"hideInReplay": true
	},
	"I436": {
		"cls": "tools",
		"name": "通行证",
		"canUseItemEffect": "",
		"text": "可通行一些路",
		"defaultPrice": 1200
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
		"name": "白宝石",
		"canUseItemEffect": "true"
	},
	"I457": {
		"cls": "tools",
		"name": "珍贵钥匙",
		"canUseItemEffect": "(function () {\n\treturn core.searchBlock(\"(yellow|blue|red|green|steel)Door\\\\d*\").length > 0;\n})();",
		"useItemEffect": "(function () {\n\tcore.setFlag(\"noDoorSound\", 1);\n\tvar actions = core.searchBlock(\"(yellow|blue|red|green|steel)Door\\\\d*\").map(function (block) {\n\t\treturn { \"type\": \"openDoor\", \"loc\": [block.x, block.y], \"async\": true };\n\t});\n\tactions.push({ \"type\": \"waitAsync\" });\n\tactions.push({ \"type\": \"tip\", \"text\": core.material.items[itemId].name + \"使用成功\" });\n\tactions.push({ \"type\": \"function\", \"function\": \"function(){\\ncore.removeFlag(\\\"noDoorSound\\\");\\n}\" });\n\tcore.insertAction(actions);\n})();",
		"text": "抵消一层中所有门（消耗物品）",
		"defaultPrice": 16000
	},
	"BSpecialKey": {
		"cls": "tools",
		"name": "B-特殊钥匙",
		"text": "用来开特殊的门",
		"hideInToolbox": false,
		"defaultPrice": 6660
	},
	"HSpecialKey": {
		"cls": "tools",
		"name": "H-特殊钥匙",
		"text": "用来开特殊的门",
		"hideInToolbox": false,
		"defaultPrice": 6660
	},
	"LSpecialKey": {
		"cls": "tools",
		"name": "L-特殊钥匙",
		"text": "用来开特殊的门",
		"hideInToolbox": false,
		"defaultPrice": 6660
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
		"text": "用来开所有的铁门",
		"defaultPrice": 10000
	},
	"I526": {
		"cls": "constants",
		"name": "物种探知器",
		"canUseItemEffect": "true",
		"text": "用来侦测潜伏的怪物（复刻版无效果）",
		"itemEffectTip": "，用来侦测潜伏的怪物（复刻版无效果）",
		"defaultPrice": 5000
	},
	"bAtkGem": {
		"cls": "tools",
		"name": "攻击香蕉",
		"canUseItemEffect": "true",
		"text": "可增加使用者3点攻击（消耗物品）",
		"itemEffect": "core.addStatus(\"atk\", 3);",
		"itemEffectTip": "，攻击+3",
		"useItemEffect": "core.addStatus(\"atk\", 3);",
		"hideInToolbox": true
	},
	"bDefGem": {
		"cls": "tools",
		"name": "防御香蕉",
		"canUseItemEffect": "true",
		"text": "可增加使用者3点攻击（消耗物品）",
		"itemEffect": "core.addStatus(\"def\", 3);",
		"itemEffectTip": "，防御+3",
		"useItemEffect": "core.addStatus(\"def\", 3);",
		"hideInToolbox": true
	},
	"bMdefGem": {
		"cls": "tools",
		"name": "魔防香蕉",
		"canUseItemEffect": "true",
		"text": "可增加使用者3点魔防（消耗物品）",
		"itemEffect": "core.addStatus(\"mdef\", 3);",
		"itemEffectTip": "，魔防+3",
		"useItemEffect": "core.addStatus(\"mdef\", 3);",
		"hideInToolbox": true
	},
	"I541": {
		"cls": "constants",
		"name": "护符",
		"canUseItemEffect": null,
		"text": "持有后不受怪物领域、夹击的伤害",
		"defaultPrice": 8000
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
		},
		"defaultPrice": 500
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
		},
		"defaultPrice": 500
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
		},
		"defaultPrice": 1000
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
		],
		"defaultPrice": 4000
	},
	"notebook": {
		"cls": "constants",
		"name": "对话手册",
		"canUseItemEffect": "true",
		"useItemEffect": "core.events.openNotebook(true);",
		"hideInReplay": true,
		"text": "显示与魔塔老人的对话（快捷键F）",
		"defaultPrice": 2000
	},
	"I576": {
		"cls": "equips",
		"name": "高级头盔",
		"canUseItemEffect": "true",
		"text": "防御力较好的头盔啦(装备物品)",
		"equip": {
			"type": 2,
			"value": {
				"mdef": 7,
				"def": 20,
				"atk": 10
			},
			"percentage": {}
		},
		"defaultPrice": 1000
	},
	"I584": {
		"cls": "items",
		"name": "冰十字架",
		"canUseItemEffect": null
	},
	"I585": {
		"cls": "items",
		"name": "十字架",
		"canUseItemEffect": null
	},
	"I596": {
		"cls": "equips",
		"name": "新物品",
		"canUseItemEffect": "true",
		"text": "纯黄金打造的头盔而已啦(装备物品)",
		"equip": {
			"type": 2,
			"value": {
				"mdef": 18,
				"def": 70,
				"atk": 20
			},
			"percentage": {}
		},
		"defaultPrice": 2200
	},
	"I597": {
		"cls": "equips",
		"name": "魂魄剑",
		"text": "充满神圣意义的剑，纯金打造(装备物品)",
		"equip": {
			"type": 0,
			"animate": "A16",
			"value": {
				"mdef": 25,
				"def": 50,
				"atk": 550
			},
			"percentage": {}
		},
		"itemEffect": "core.status.hero.atk += 100",
		"itemEffectTip": "，攻击+100",
		"defaultPrice": 15000
	},
	"I598": {
		"cls": "equips",
		"name": "魂魄盾",
		"canUseItemEffect": "true",
		"text": "国王遗留下的盾(装备物品)",
		"equip": {
			"type": 1,
			"value": {
				"mdef": 50,
				"def": 550,
				"atk": 25
			},
			"percentage": {}
		},
		"defaultPrice": 12000
	},
	"I604": {
		"cls": "equips",
		"name": "光職盾",
		"canUseItemEffect": "true",
		"text": "充满光芒的盾，永存的力量(装备物品)",
		"equip": {
			"type": 1,
			"value": {
				"mdef": 100,
				"def": 960,
				"atk": 100
			},
			"percentage": {}
		},
		"defaultPrice": 20000
	},
	"I610": {
		"cls": "equips",
		"name": "裂爆铠甲",
		"canUseItemEffect": "true",
		"text": "最强的的盔甲(装备物品)",
		"equip": {
			"type": 3,
			"value": {
				"mdef": 80,
				"def": 900,
				"atk": 80
			},
			"percentage": {}
		},
		"defaultPrice": 2500
	},
	"I612": {
		"cls": "items",
		"name": "？？？",
		"canUseItemEffect": "true",
		"text": "离获得十字架更近了一步",
		"itemEffectTip": "离获得十字架更近了一步",
		"useItemEvent": [
			{
				"type": "setValue",
				"name": "flag:F880_Crossing",
				"operator": "+=",
				"value": "1"
			},
			{
				"type": "if",
				"condition": "(flag:F880_Crossing===2)",
				"true": [
					{
						"type": "openDoor",
						"loc": [
							7,
							5
						],
						"floorId": "MT880"
					}
				]
			}
		]
	},
	"I613": {
		"cls": "equips",
		"name": "光職剑",
		"text": "充满神圣意义的剑，纯金打造(装备物品)",
		"equip": {
			"type": 0,
			"animate": "A08",
			"value": {
				"mdef": 100,
				"def": 100,
				"atk": 960
			},
			"percentage": {}
		},
		"itemEffect": "core.status.hero.atk += 100",
		"itemEffectTip": "，攻击+100",
		"defaultPrice": 20000
	},
	"I614": {
		"cls": "equips",
		"name": "神者の剑",
		"text": "最终的装备物品，最强的装备(装备物品)",
		"equip": {
			"type": 0,
			"animate": "A17",
			"value": {
				"mdef": 999,
				"def": 999,
				"atk": 999
			},
			"percentage": {}
		},
		"itemEffect": "core.status.hero.atk += 100",
		"itemEffectTip": "，攻击+100",
		"defaultPrice": 400000
	},
	"I615": {
		"cls": "equips",
		"name": "神者の盾",
		"canUseItemEffect": "true",
		"text": "最终的装备物品，最强的装备(装备物品)",
		"equip": {
			"type": 1,
			"value": {
				"mdef": 999,
				"def": 999,
				"atk": 999
			},
			"percentage": {}
		},
		"defaultPrice": 400000
	},
	"I625": {
		"cls": "equips",
		"name": "排枪",
		"text": "作弊的(装备物品)",
		"equip": {
			"type": 0,
			"animate": "A03",
			"value": {
				"mdef": 888,
				"def": 888,
				"atk": 888
			},
			"percentage": {}
		},
		"itemEffect": "core.status.hero.atk += 100",
		"itemEffectTip": "，攻击+100",
		"defaultPrice": null
	},
	"I626": {
		"cls": "equips",
		"name": "真·神者の剑",
		"text": "作弊的(装备物品)",
		"equip": {
			"type": 0,
			"animate": "A06",
			"value": {
				"mdef": 999,
				"def": 999,
				"combo": 5,
				"atk": 999
			},
			"percentage": {}
		},
		"itemEffect": "core.status.hero.atk += 100",
		"itemEffectTip": "，攻击+100",
		"defaultPrice": null
	}
}