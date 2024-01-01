var events_c12a15a8_c380_4b28_8144_256cba95f760 = 
{
	"commonEvent": {
		"加点事件": [
			{
				"type": "function",
				"function": "function(){\ncore.addFlag('@temp@shop', 1);\n}"
			},
			{
				"type": "while",
				"condition": "1",
				"data": [
					{
						"type": "choices",
						"text": "\t[升级加点,yellowGem]本界面可随时按\"2\"呼出。\n\n每有一点即可选一项获得\n当前剩余可用点数：${core.values.levelupPoint}",
						"choices": [
							{
								"text": "攻击+1",
								"need": "core.values.levelupPoint>0",
								"action": [
									{
										"type": "setValue",
										"name": "status:atk",
										"operator": "+=",
										"value": "1"
									},
									{
										"type": "function",
										"function": "function(){\ncore.values.levelupPoint-=1;\n}"
									}
								]
							},
							{
								"text": "防御+2",
								"need": "core.values.levelupPoint>0",
								"action": [
									{
										"type": "setValue",
										"name": "status:def",
										"operator": "+=",
										"value": "2"
									},
									{
										"type": "function",
										"function": "function(){\ncore.values.levelupPoint-=1;\n}"
									}
								]
							},
							{
								"text": "魔防+5",
								"need": "core.values.levelupPoint>0",
								"condition": "core.values.isMAGValid",
								"action": [
									{
										"type": "setValue",
										"name": "status:mdef",
										"operator": "+=",
										"value": "5"
									},
									{
										"type": "function",
										"function": "function(){\ncore.values.levelupPoint-=1;\n}"
									}
								]
							},
							{
								"text": "生命+125",
								"need": "core.values.levelupPoint>0",
								"action": [
									{
										"type": "setValue",
										"name": "status:hp",
										"operator": "+=",
										"value": "125"
									},
									{
										"type": "function",
										"function": "function(){\ncore.values.levelupPoint-=1;\n}"
									}
								]
							},
							{
								"text": "${core.values.levelupPoint>0?\"稍后处理\":\"返回\"}",
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
			},
			{
				"type": "if",
				"condition": "((!core.values.isMAGValid)&&(status:lv>1))",
				"true": [
					{
						"type": "if",
						"condition": "flag:VerboseHint",
						"true": [
							"\t[H5复刻作者]检测到您已升级，但魔防仍未启用。\n请前往8F的老人处获取魔防使用权。"
						]
					}
				]
			},
			{
				"type": "function",
				"function": "function(){\ncore.addFlag('@temp@shop', -1);\n}"
			}
		],
		"回收钥匙商店": [
			{
				"type": "function",
				"function": "function(){\ncore.addFlag('@temp@shop', 1);\n}"
			},
			{
				"type": "while",
				"condition": "1",
				"data": [
					{
						"type": "choices",
						"text": "\t[商人,trader]无限\r[red]收购\r钥匙！",
						"choices": [
							{
								"text": "黄钥匙（+10金币）",
								"icon": "yellowKey",
								"color": [
									255,
									255,
									128,
									1
								],
								"need": "core.hasItem(\"yellowKey\")",
								"action": [
									{
										"type": "setValue",
										"name": "item:yellowKey",
										"operator": "-=",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "status:money",
										"operator": "+=",
										"value": "10"
									}
								]
							},
							{
								"text": "蓝钥匙（+50金币）",
								"icon": "blueKey",
								"color": [
									128,
									128,
									255,
									1
								],
								"need": "core.hasItem(\"blueKey\")",
								"action": [
									{
										"type": "setValue",
										"name": "item:blueKey",
										"operator": "-=",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "status:money",
										"operator": "+=",
										"value": "50"
									}
								]
							},
							{
								"text": "红钥匙（+100金币）",
								"icon": "redKey",
								"color": [
									255,
									128,
									128,
									1
								],
								"need": "core.hasItem(\"redKey\")",
								"action": [
									{
										"type": "setValue",
										"name": "item:redKey",
										"operator": "-=",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "status:money",
										"operator": "+=",
										"value": "100"
									}
								]
							},
							{
								"text": "绿钥匙（+600金币）",
								"icon": "greenKey",
								"color": [
									128,
									255,
									128,
									1
								],
								"need": "core.hasItem(\"greenKey\")",
								"action": [
									{
										"type": "setValue",
										"name": "item:greenKey",
										"operator": "-=",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "status:money",
										"operator": "+=",
										"value": "600"
									}
								]
							},
							{
								"text": "离开",
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
				"type": "function",
				"function": "function(){\ncore.addFlag('@temp@shop', -1);\n}"
			}
		],
		"F12KeyShop": [
			{
				"type": "if",
				"condition": "flag:s59_F12Imported",
				"true": [
					{
						"type": "while",
						"condition": "1",
						"data": [
							{
								"type": "choices",
								"text": "\t[商人,trader]我进货完了！\n有足够的塔币可购买钥匙。\n（剩余可购买次数：${10-flag:v127_12FShopP2}）",
								"choices": [
									{
										"text": "黄钥匙(50塔币)",
										"icon": "yellowKey",
										"color": [
											255,
											255,
											128,
											1
										],
										"need": "status:money>=50",
										"condition": "flag:v127_12FShopP2<10",
										"action": [
											{
												"type": "setValue",
												"name": "flag:v127_12FShopP2",
												"operator": "+=",
												"value": "1",
												"norefresh": true
											},
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "50"
											},
											{
												"type": "setValue",
												"name": "item:yellowKey",
												"operator": "+=",
												"value": "1"
											}
										]
									},
									{
										"text": "蓝钥匙(100塔币)",
										"icon": "blueKey",
										"color": [
											128,
											255,
											255,
											1
										],
										"need": "status:money>=100",
										"condition": "flag:v127_12FShopP2<10",
										"action": [
											{
												"type": "setValue",
												"name": "flag:v127_12FShopP2",
												"operator": "+=",
												"value": "1",
												"norefresh": true
											},
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "100"
											},
											{
												"type": "setValue",
												"name": "item:blueKey",
												"operator": "+=",
												"value": "1"
											}
										]
									},
									{
										"text": "离开",
										"color": [
											255,
											255,
											255,
											1
										],
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
					},
					{
						"type": "if",
						"condition": "(flag:v127_12FShopP2>=10)",
						"true": [
							"\t[商人,trader]暴利喽，拜拜~~~",
							{
								"type": "disableShop",
								"id": "F12KeyShop"
							},
							{
								"type": "hide",
								"loc": [
									[
										10,
										2
									]
								],
								"floorId": "MT12",
								"remove": true
							}
						]
					}
				],
				"false": [
					{
						"type": "while",
						"condition": "1",
						"data": [
							{
								"type": "choices",
								"text": "\t[商人,trader]有足够的塔币可购买钥匙。\n（剩余可购买次数：${7-flag:v126_12FShopP1}）",
								"choices": [
									{
										"text": "黄钥匙(50塔币)",
										"icon": "yellowKey",
										"color": [
											255,
											255,
											128,
											1
										],
										"need": "status:money>=50",
										"condition": "flag:v126_12FShopP1<7",
										"action": [
											{
												"type": "setValue",
												"name": "flag:v126_12FShopP1",
												"operator": "+=",
												"value": "1",
												"norefresh": true
											},
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "50"
											},
											{
												"type": "setValue",
												"name": "item:yellowKey",
												"operator": "+=",
												"value": "1"
											}
										]
									},
									{
										"text": "蓝钥匙(100塔币)",
										"icon": "blueKey",
										"color": [
											128,
											255,
											255,
											1
										],
										"need": "status:money>=100",
										"condition": "flag:v126_12FShopP1<7",
										"action": [
											{
												"type": "setValue",
												"name": "flag:v126_12FShopP1",
												"operator": "+=",
												"value": "1",
												"norefresh": true
											},
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "100"
											},
											{
												"type": "setValue",
												"name": "item:blueKey",
												"operator": "+=",
												"value": "1"
											}
										]
									},
									{
										"text": "离开",
										"color": [
											255,
											255,
											255,
											1
										],
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
					},
					{
						"type": "if",
						"condition": "(flag:v126_12FShopP1>=7)",
						"true": [
							"\t[商人,trader]钥匙卖完了，我去进货！",
							{
								"type": "disableShop",
								"id": "F12KeyShop"
							},
							{
								"type": "hide",
								"loc": [
									[
										10,
										2
									]
								],
								"floorId": "MT12"
							}
						]
					}
				]
			}
		],
		"SetPotionItemized": [
			{
				"type": "switch",
				"condition": "flag:arg1",
				"caseList": [
					{
						"case": "\"Wand\"",
						"action": [
							{
								"type": "setValue",
								"name": "temp:wandLv",
								"value": "core.plugin.getWandLvByHeroLv(status:lv)"
							},
							{
								"type": "setValue",
								"name": "temp:colorStr",
								"value": "core.plugin.getInvalidColorString()"
							},
							{
								"type": "while",
								"condition": "1",
								"data": [
									{
										"type": "choices",
										"text": "\t[法杖效果]当前已获得的法杖列表，法杖等级：${temp:wandLv}\n\n法杖在角色等级达到2、22、51级时升级。\n单击法杖以查看效果",
										"choices": [
											{
												"text": "生命法杖：战后回复${(core.hasItem(\"I413\") ? (temp:wandLv===0 ? 0 : (temp:wandLv===1 ? 30 : (temp:wandLv===2 ? 120 : 121)))  : 0)}HP",
												"icon": "I413",
												"need": "core.hasItem(\"I413\")",
												"action": [
													"\t[生命法杖 Lv.${temp:wandLv},I413]${temp:wandLv===0?\"> \": (temp:colorStr)}等级0：无效果\r\n${temp:wandLv===1?\"> \": (temp:colorStr)}等级1：战后回复角色30HP\r\n${temp:wandLv===2?\"> \": (temp:colorStr)}等级2：战后回复角色120HP\r\n${temp:wandLv===3?\"> \": (temp:colorStr)}等级3：战后回复角色121HP\r"
												]
											},
											{
												"text": "连击法杖：获得额外${(core.hasItem(\"I414\")&&temp:wandLv>0)?1:0}连击",
												"icon": "I414",
												"need": "core.hasItem(\"I414\")",
												"action": [
													"\t[连击法杖 Lv.${temp:wandLv},I412]${temp:wandLv===0?\"> \": (temp:colorStr)}等级0：无效果\r\n${temp:wandLv>=1?\"> \": (temp:colorStr)}等级1以上：获得额外1连击数\r"
												]
											},
											{
												"text": "攻击法杖：攻击+${(core.hasItem(\"I409\")&&temp:wandLv>0)?10*temp:wandLv:0}%",
												"icon": "I409",
												"need": "core.hasItem(\"I409\")",
												"action": [
													"\t[攻击法杖 Lv.${temp:wandLv},I409]${temp:wandLv===0?\"> \": (temp:colorStr)}等级0：无效果\r\n${temp:wandLv===1?\"> \": (temp:colorStr)}等级1：战前角色攻击+10%(不显示在状态栏)\r\n${temp:wandLv===2?\"> \": (temp:colorStr)}等级2：战前角色攻击+20%(不显示在状态栏)\r\n${temp:wandLv===3?\"> \": (temp:colorStr)}等级3：战前角色攻击+30%(不显示在状态栏)\r"
												]
											},
											{
												"text": "防御法杖：防御+${(core.hasItem(\"I411\")&&temp:wandLv>0)?10*temp:wandLv:0}%",
												"icon": "I411",
												"need": "core.hasItem(\"I411\")",
												"action": [
													"\t[攻击法杖 Lv.${temp:wandLv},I411]${temp:wandLv===0?\"> \": (temp:colorStr)}等级0：无效果\r\n${temp:wandLv===1?\"> \": (temp:colorStr)}等级1：战前角色防御+10%(不显示在状态栏)\r\n${temp:wandLv===2?\"> \": (temp:colorStr)}等级2：战前角色防御+20%(不显示在状态栏)\r\n${temp:wandLv===3?\"> \": (temp:colorStr)}等级3：战前角色防御+30%(不显示在状态栏)\r"
												]
											},
											{
												"text": "魔防法杖：魔防+${(core.hasItem(\"I412\")&&temp:wandLv>0)?10+10*temp:wandLv:0}%",
												"icon": "I412",
												"need": "core.hasItem(\"I412\")",
												"action": [
													"\t[魔防法杖 Lv.${temp:wandLv},I412]${temp:wandLv===0?\"> \": (temp:colorStr)}等级0：无效果\r\n${temp:wandLv===1?\"> \": (temp:colorStr)}等级1：战前角色魔防+20%(不显示在状态栏)\r\n${temp:wandLv===2?\"> \": (temp:colorStr)}等级2：战前角色魔防+30%(不显示在状态栏)\r\n${temp:wandLv===3?\"> \": (temp:colorStr)}等级3：战前角色魔防+40%(不显示在状态栏)\r"
												]
											},
											{
												"text": "返回",
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
						]
					},
					{
						"case": "\"Wine\"",
						"action": [
							{
								"type": "while",
								"condition": "1",
								"data": [
									{
										"type": "choices",
										"text": "\t[使用药水]请选择要使用的解药",
										"choices": [
											{
												"text": "解毒药水(x${item:poisonWine})",
												"icon": "poisonWine",
												"need": "item:poisonWine>0&&core.canUseItem(\"poisonWine\")",
												"action": [
													{
														"type": "useItem",
														"id": "poisonWine"
													}
												]
											},
											{
												"text": "解衰药水(x${item:weakWine})",
												"icon": "weakWine",
												"need": "item:weakWine>0&&core.canUseItem(\"weakWine\")",
												"action": [
													{
														"type": "useItem",
														"id": "weakWine"
													}
												]
											},
											{
												"text": "解咒药水(x${item:curseWine})",
												"icon": "curseWine",
												"need": "item:curseWine>0&&core.canUseItem(\"curseWine\")",
												"action": [
													{
														"type": "useItem",
														"id": "curseWine"
													}
												]
											},
											{
												"text": "解百纳(x${item:superWine})",
												"icon": "superWine",
												"need": "item:superWine>0&&core.canUseItem(\"superWine\")",
												"action": [
													{
														"type": "useItem",
														"id": "superWine"
													}
												]
											},
											{
												"text": "完成",
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
						]
					},
					{
						"case": "\"Gem\"",
						"action": [
							{
								"type": "function",
								"function": "function(){\ncore.addFlag('@temp@shop', 1);\n}"
							},
							{
								"type": "while",
								"condition": "1",
								"data": [
									{
										"type": "choices",
										"text": "\t[使用宝石]开启道具化以获得物品形式的宝石。\n每点击一次使用一个宝石。",
										"choices": [
											{
												"text": "宝石道具化 [${core.values.isGemItemized ? \"ON\" : \"OFF\"}]",
												"color": [
													255,
													215,
													0,
													1
												],
												"action": [
													{
														"type": "function",
														"function": "function(){\ncore.values.isGemItemized = !core.values.isGemItemized\n}"
													}
												]
											},
											{
												"text": "红宝石(x${item:redGem})：+${core.values.redGem} ATK",
												"icon": "redGem",
												"need": "item:redGem>0",
												"action": [
													{
														"type": "useItem",
														"id": "redGem"
													}
												]
											},
											{
												"text": "蓝宝石(x${item:blueGem})：+${core.values.blueGem} DEF",
												"icon": "blueGem",
												"need": "item:blueGem>0",
												"action": [
													{
														"type": "useItem",
														"id": "blueGem"
													}
												]
											},
											{
												"text": "绿宝石(x${item:greenGem})：+${core.values.greenGem} MAG",
												"icon": "greenGem",
												"need": "item:greenGem>0",
												"condition": "core.values.isMAGValid",
												"action": [
													{
														"type": "useItem",
														"id": "greenGem"
													}
												]
											},
											{
												"text": "黄宝石(x${item:yellowGem})：+${core.values.yellowGem} 点数",
												"icon": "yellowGem",
												"need": "item:yellowGem>0",
												"action": [
													{
														"type": "useItem",
														"id": "yellowGem"
													}
												]
											},
											{
												"text": "使用香蕉(共${item:bAtkGem+item:bDefGem+item:bMdefGem}个可用)",
												"icon": "bAtkGem",
												"need": "item:bAtkGem+item:bDefGem+item:bMdefGem>0",
												"action": [
													{
														"type": "insert",
														"name": "SetPotionItemized",
														"args": [
															"Banana"
														]
													}
												]
											},
											{
												"text": "升级加点（可用点数:${core.values.levelupPoint}）",
												"color": [
													255,
													255,
													128,
													1
												],
												"need": "core.values.levelupPoint>0",
												"action": [
													{
														"type": "insert",
														"name": "加点事件"
													}
												]
											},
											{
												"text": "完成",
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
							},
							{
								"type": "function",
								"function": "function(){\ncore.addFlag('@temp@shop', -1);\n}"
							}
						]
					},
					{
						"case": "\"Banana\"",
						"action": [
							{
								"type": "while",
								"condition": "1",
								"data": [
									{
										"type": "choices",
										"text": "\t[使用香蕉]香蕉与宝石共用道具化设置\n每点击一次使用一个香蕉。",
										"choices": [
											{
												"text": "宝石道具化 [${core.values.isGemItemized ? \"ON\" : \"OFF\"}]",
												"color": [
													255,
													215,
													0,
													1
												],
												"action": [
													{
														"type": "function",
														"function": "function(){\ncore.values.isGemItemized = !core.values.isGemItemized\n}"
													}
												]
											},
											{
												"text": "攻击香蕉(x${item:bAtkGem})：+3 ATK",
												"icon": "bAtkGem",
												"color": [
													255,
													128,
													128
												],
												"need": "item:bAtkGem>0",
												"action": [
													{
														"type": "useItem",
														"id": "bAtkGem"
													}
												]
											},
											{
												"text": "防御香蕉(x${item:bDefGem})：+3 DEF",
												"icon": "bDefGem",
												"color": [
													128,
													128,
													255
												],
												"need": "item:bDefGem>0",
												"action": [
													{
														"type": "useItem",
														"id": "bDefGem"
													}
												]
											},
											{
												"text": "魔防香蕉(x${item:bMdefGem})：+3 MAG",
												"icon": "bMdefGem",
												"color": [
													128,
													255,
													128
												],
												"need": "item:bMdefGem>0",
												"condition": "core.values.isMAGValid",
												"action": [
													{
														"type": "useItem",
														"id": "bMdefGem"
													}
												]
											},
											{
												"text": "返回上一级",
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
						]
					},
					{
						"case": "default",
						"action": [
							{
								"type": "function",
								"function": "function(){\ncore.addFlag('@temp@shop', 1);\n}"
							},
							{
								"type": "while",
								"condition": "1",
								"data": [
									{
										"type": "choices",
										"text": "\t[使用血瓶]开启道具化以获得物品形式的血瓶。\n每点击一次使用一个血瓶。",
										"choices": [
											{
												"text": "血瓶道具化 [${core.values.isPotionItemized? \"ON\" : \"OFF\"}]",
												"color": [
													255,
													215,
													0,
													1
												],
												"action": [
													{
														"type": "function",
														"function": "function(){\ncore.values.isPotionItemized = !core.values.isPotionItemized\n}"
													}
												]
											},
											{
												"text": "红血瓶(x${item:redPotion})：+${core.values.redPotion}HP",
												"icon": "redPotion",
												"need": "core.canUseItem('redPotion')",
												"action": [
													{
														"type": "useItem",
														"id": "redPotion"
													}
												]
											},
											{
												"text": "蓝血瓶(x${item:bluePotion})：+${core.values.bluePotion}HP",
												"icon": "bluePotion",
												"need": "core.canUseItem('bluePotion')",
												"action": [
													{
														"type": "useItem",
														"id": "bluePotion"
													}
												]
											},
											{
												"text": "黄血瓶(x${item:yellowPotion})：+${core.values.yellowPotion}HP",
												"icon": "yellowPotion",
												"need": "core.canUseItem('yellowPotion')",
												"action": [
													{
														"type": "useItem",
														"id": "yellowPotion"
													}
												]
											},
											{
												"text": "绿血瓶(x${item:greenPotion})：+${core.values.greenPotion}HP",
												"icon": "greenPotion",
												"need": "core.canUseItem('greenPotion')",
												"action": [
													{
														"type": "useItem",
														"id": "greenPotion"
													}
												]
											},
											{
												"text": "完成",
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
							},
							{
								"type": "function",
								"function": "function(){\ncore.addFlag('@temp@shop', -1);\n}"
							}
						]
					}
				]
			}
		],
		"OtherShops": [
			{
				"type": "function",
				"function": "function(){\ncore.addFlag('@temp@shop', 1);\n}"
			},
			{
				"type": "switch",
				"condition": "flag:arg1",
				"caseList": [
					{
						"case": "\"MTn81\"",
						"action": [
							{
								"type": "choices",
								"text": "\t[仙子,fairy]本商店被分类为“其他商店”！\n全部角色的3攻3防，解除死亡状态。\n要解除死亡状态么？",
								"choices": [
									{
										"text": "好的",
										"need": "core.hasFlag(\"dying\")",
										"action": [
											{
												"type": "playSound",
												"name": "shop.mp3",
												"stop": true
											},
											{
												"type": "function",
												"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\tcore.decreaseStatusWithBuffer(\"atk\", 3, id);\n\tcore.decreaseStatusWithBuffer(\"def\", 3, id);\n});\ncore.triggerDebuff(\"remove\", \"dying\");\ncore.updateStatusBar(true);\n}"
											}
										]
									},
									{
										"text": "不要",
										"action": []
									}
								]
							}
						]
					},
					{
						"case": "\"MTCastle4\"",
						"action": [
							{
								"type": "while",
								"condition": "1",
								"data": [
									{
										"type": "choices",
										"text": "\t[比例商店,trader]5000塔币，回复全体角色2500生命，\n并选择一项：",
										"choices": [
											{
												"text": "0.6%攻,0.3%防,0.1%魔防",
												"color": [
													255,
													128,
													128,
													1
												],
												"need": "status:money>=5000",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "function",
														"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.atk = Math.floor(hero.atk * 1.006);\n\thero.def = Math.floor(hero.def * 1.003);\n\thero.mdef = Math.floor(hero.mdef * 1.001);\n});\ncore.updateStatusBar(true);\n}"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "-=",
														"value": "5000"
													}
												]
											},
											{
												"text": "0.3%攻,0.6%防,0.1%魔防",
												"color": [
													128,
													255,
													255,
													1
												],
												"need": "status:money>=5000",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "function",
														"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.atk = Math.floor(hero.atk * 1.003);\n\thero.def = Math.floor(hero.def * 1.006);\n\thero.mdef = Math.floor(hero.mdef * 1.001);\n});\ncore.updateStatusBar(true);\n}"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "-=",
														"value": "5000"
													}
												]
											},
											{
												"text": "0.4%攻,0.4%防,0.4%魔防",
												"color": [
													128,
													255,
													128,
													1
												],
												"need": "status:money>=5000",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "function",
														"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.atk = Math.floor(hero.atk * 1.004);\n\thero.def = Math.floor(hero.def * 1.004);\n\thero.mdef = Math.floor(hero.mdef * 1.004);\n});\ncore.updateStatusBar(true);\n}"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "-=",
														"value": "5000"
													}
												]
											},
											{
												"text": "离开",
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
						]
					},
					{
						"case": "\"MTn32\"",
						"action": [
							{
								"type": "while",
								"condition": "1",
								"data": [
									{
										"type": "setValue",
										"name": "temp:price",
										"value": "20+7*flag:Fm3m4Shop+20*flag:Fm32Shop1+flag:Fm32Shop2"
									},
									{
										"type": "choices",
										"text": "\t[金币商店,expShop]花${temp:price}枚金币，为所有角色提升：",
										"choices": [
											{
												"text": "加20攻击",
												"icon": "redGem",
												"color": [
													255,
													128,
													128,
													1
												],
												"need": "status:money>=temp:price",
												"condition": "flag:s110_Fm57boss!==1",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "function",
														"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.atk += 20;\n});\ncore.updateStatusBar(true);\n}"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "-=",
														"value": "temp:price"
													},
													{
														"type": "setValue",
														"name": "flag:Fm32Shop1",
														"operator": "+=",
														"value": "1"
													}
												]
											},
											{
												"text": "加10攻击",
												"icon": "redGem",
												"color": [
													255,
													128,
													128,
													1
												],
												"need": "status:money>=temp:price",
												"condition": "flag:s110_Fm57boss===1",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "function",
														"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.atk += 10;\n});\ncore.updateStatusBar(true);\n}"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "-=",
														"value": "temp:price"
													},
													{
														"type": "setValue",
														"name": "flag:Fm32Shop1",
														"operator": "+=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "flag:Fm32Shop2",
														"operator": "+=",
														"value": "1"
													}
												]
											},
											{
												"text": "加30防御",
												"icon": "blueGem",
												"color": [
													128,
													255,
													255,
													1
												],
												"need": "status:money>=temp:price",
												"condition": "flag:s110_Fm57boss!==1",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "function",
														"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.def += 30;\n});\ncore.updateStatusBar(true);\n}"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "-=",
														"value": "temp:price"
													},
													{
														"type": "setValue",
														"name": "flag:Fm32Shop1",
														"operator": "+=",
														"value": "1"
													}
												]
											},
											{
												"text": "加10防御",
												"icon": "blueGem",
												"color": [
													128,
													255,
													255,
													1
												],
												"need": "status:money>=temp:price",
												"condition": "flag:s110_Fm57boss===1",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "function",
														"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.def += 10;\n});\ncore.updateStatusBar(true);\n}"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "-=",
														"value": "temp:price"
													},
													{
														"type": "setValue",
														"name": "flag:Fm32Shop1",
														"operator": "+=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "flag:Fm32Shop2",
														"operator": "+=",
														"value": "1"
													}
												]
											},
											{
												"text": "加12000生命",
												"icon": "greenPotion",
												"color": [
													192,
													192,
													192,
													1
												],
												"need": "status:money>=temp:price",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "function",
														"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.hp += 12000;\n});\ncore.updateStatusBar(true);\n}"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "-=",
														"value": "temp:price"
													},
													{
														"type": "setValue",
														"name": "flag:Fm32Shop1",
														"operator": "+=",
														"value": "1"
													},
													{
														"type": "if",
														"condition": "(flag:s110_Fm57boss===1)",
														"true": [
															{
																"type": "setValue",
																"name": "flag:Fm32Shop2",
																"operator": "+=",
																"value": "1"
															}
														]
													}
												]
											},
											{
												"text": "6k血10攻15防5魔防",
												"color": [
													255,
													255,
													128,
													1
												],
												"need": "status:money>=temp:price",
												"condition": "flag:s110_Fm57boss!==1",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "function",
														"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.hp += 6000;\n\thero.atk += 10;\n\thero.def += 15;\n\thero.mdef += 5;\n});\ncore.updateStatusBar(true);\n}"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "-=",
														"value": "temp:price"
													},
													{
														"type": "setValue",
														"name": "flag:Fm32Shop1",
														"operator": "+=",
														"value": "1"
													}
												]
											},
											{
												"text": "6k血5攻5防5魔防",
												"color": [
													255,
													255,
													128,
													1
												],
												"need": "status:money>=temp:price",
												"condition": "flag:s110_Fm57boss===1",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "function",
														"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.hp += 6000;\n\thero.atk += 5;\n\thero.def += 5;\n\thero.mdef += 5;\n});\ncore.updateStatusBar(true);\n}"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "-=",
														"value": "temp:price"
													},
													{
														"type": "setValue",
														"name": "flag:Fm32Shop1",
														"operator": "+=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "flag:Fm32Shop2",
														"operator": "+=",
														"value": "1"
													}
												]
											},
											{
												"text": "离开",
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
						]
					},
					{
						"case": "\"MT29\"",
						"action": [
							{
								"type": "choices",
								"text": "\t[超级商店,N424]呵呵，欢迎光临！\n请选择交易方式：",
								"choices": [
									{
										"text": "经验交易(≥100)",
										"need": "status:exp>=100",
										"action": [
											{
												"type": "while",
												"condition": "1",
												"data": [
													{
														"type": "choices",
														"text": "\t[超级商店,N424]呵呵，请选择：\n（需支付100经验）",
														"choices": [
															{
																"text": "1000HP 2攻 3防",
																"icon": "yellowGem",
																"color": [
																	255,
																	255,
																	128,
																	1
																],
																"need": "status:exp>=100",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3",
																		"stop": true
																	},
																	{
																		"type": "setValue",
																		"name": "status:exp",
																		"operator": "-=",
																		"value": "100"
																	},
																	{
																		"type": "setValue",
																		"name": "status:hp",
																		"operator": "+=",
																		"value": "1000"
																	},
																	{
																		"type": "setValue",
																		"name": "status:atk",
																		"operator": "+=",
																		"value": "2"
																	},
																	{
																		"type": "setValue",
																		"name": "status:def",
																		"operator": "+=",
																		"value": "3"
																	}
																]
															},
															{
																"text": "4点攻击",
																"icon": "redGem",
																"color": [
																	255,
																	128,
																	128,
																	1
																],
																"need": "status:exp>=100",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3",
																		"stop": true
																	},
																	{
																		"type": "setValue",
																		"name": "status:exp",
																		"operator": "-=",
																		"value": "100"
																	},
																	{
																		"type": "setValue",
																		"name": "status:atk",
																		"operator": "+=",
																		"value": "4"
																	}
																]
															},
															{
																"text": "6点防御",
																"icon": "blueGem",
																"color": [
																	128,
																	255,
																	255,
																	1
																],
																"need": "status:exp>=100",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3",
																		"stop": true
																	},
																	{
																		"type": "setValue",
																		"name": "status:exp",
																		"operator": "-=",
																		"value": "100"
																	},
																	{
																		"type": "setValue",
																		"name": "status:def",
																		"operator": "+=",
																		"value": "6"
																	}
																]
															},
															{
																"text": "2000点生命",
																"icon": "yellowPotion",
																"color": [
																	192,
																	192,
																	192,
																	1
																],
																"need": "status:exp>=100",
																"action": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3",
																		"stop": true
																	},
																	{
																		"type": "setValue",
																		"name": "status:exp",
																		"operator": "-=",
																		"value": "100"
																	},
																	{
																		"type": "setValue",
																		"name": "status:hp",
																		"operator": "+=",
																		"value": "2000"
																	}
																]
															},
															{
																"text": "离开",
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
										]
									},
									{
										"text": "塔币交易(≥300)",
										"need": "status:money>=300",
										"action": [
											{
												"type": "choices",
												"text": "\t[超级商店,N424]呵呵，请选择：\n（需支付300塔币）",
												"choices": [
													{
														"text": "1点攻击",
														"icon": "redGem",
														"color": [
															255,
															128,
															128,
															1
														],
														"need": "status:money>=300",
														"action": [
															{
																"type": "playSound",
																"name": "shop.mp3",
																"stop": true
															},
															{
																"type": "setValue",
																"name": "status:money",
																"operator": "-=",
																"value": "300"
															},
															{
																"type": "setValue",
																"name": "status:atk",
																"operator": "+=",
																"value": "1"
															}
														]
													},
													{
														"text": "2点防御",
														"icon": "blueGem",
														"color": [
															128,
															255,
															255,
															1
														],
														"need": "status:money>=300",
														"action": [
															{
																"type": "playSound",
																"name": "shop.mp3",
																"stop": true
															},
															{
																"type": "setValue",
																"name": "status:money",
																"operator": "-=",
																"value": "300"
															},
															{
																"type": "setValue",
																"name": "status:def",
																"operator": "+=",
																"value": "2"
															}
														]
													},
													{
														"text": "4点魔防",
														"icon": "greenGem",
														"color": [
															128,
															255,
															128,
															1
														],
														"need": "status:money>=300",
														"action": [
															{
																"type": "playSound",
																"name": "shop.mp3",
																"stop": true
															},
															{
																"type": "setValue",
																"name": "status:money",
																"operator": "-=",
																"value": "300"
															},
															{
																"type": "setValue",
																"name": "status:mdef",
																"operator": "+=",
																"value": "4"
															}
														]
													},
													{
														"text": "800点生命",
														"icon": "yellowPotion",
														"color": [
															192,
															192,
															192,
															1
														],
														"need": "status:money>=300",
														"action": [
															{
																"type": "playSound",
																"name": "shop.mp3",
																"stop": true
															},
															{
																"type": "setValue",
																"name": "status:money",
																"operator": "-=",
																"value": "300"
															},
															{
																"type": "setValue",
																"name": "status:hp",
																"operator": "+=",
																"value": "800"
															}
														]
													},
													{
														"text": "离开",
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
									},
									{
										"text": "离开",
										"action": []
									}
								]
							}
						]
					},
					{
						"case": "\"MTm3m4\"",
						"action": [
							{
								"type": "choices",
								"text": "\t[金币商店]-3/-4F商店价格：${20+7*flag:Fm3m4Shop}(+7)\n-5F商店价格：${flag:Fm5ShopVisited===1?\"700\":\"???\"}，须当面购买\n请选择要前往的商店：",
								"choices": [
									{
										"text": "-3F金币商店",
										"icon": "N331",
										"need": "flag:Fm3ShopVisited===1",
										"action": [
											{
												"type": "insert",
												"name": "OtherShops",
												"args": [
													"MTm3"
												]
											}
										]
									},
									{
										"text": "-4F金币商店",
										"icon": "N448",
										"need": "flag:Fm4ShopVisited===1",
										"action": [
											{
												"type": "insert",
												"name": "OtherShops",
												"args": [
													"MTm4"
												]
											}
										]
									},
									{
										"text": "前往-5F(当面购买)",
										"icon": "fly",
										"need": "flag:Fm5ShopVisited===1",
										"action": [
											{
												"type": "changeFloor",
												"floorId": "MTn5",
												"stair": "upFloor"
											}
										]
									},
									{
										"text": "返回",
										"action": []
									}
								]
							}
						]
					},
					{
						"case": "\"MTm3\"",
						"action": [
							{
								"type": "while",
								"condition": "1",
								"data": [
									{
										"type": "setValue",
										"name": "temp:price",
										"value": "20+7*flag:Fm3m4Shop+20*flag:Fm32Shop1+flag:Fm32Shop2"
									},
									{
										"type": "choices",
										"text": "\t[金币商店,N446]本商店仅供\\i[N331]使用！\n花${temp:price}枚金币，您可以：",
										"choices": [
											{
												"text": "加3攻击",
												"icon": "redGem",
												"color": [
													255,
													128,
													128,
													1
												],
												"need": "status:money>=temp:price",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "function",
														"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n(hero_id == 0 ? core.status.hero : core.getFlag(\"hero0\")).atk += 3;\n}"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "-=",
														"value": "temp:price"
													},
													{
														"type": "setValue",
														"name": "flag:Fm3m4Shop",
														"operator": "+=",
														"value": "1"
													}
												]
											},
											{
												"text": "加3防御",
												"icon": "blueGem",
												"color": [
													128,
													255,
													255,
													1
												],
												"need": "status:money>=temp:price",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "function",
														"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n(hero_id == 0 ? core.status.hero : core.getFlag(\"hero0\")).def += 3;\n}"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "-=",
														"value": "temp:price"
													},
													{
														"type": "setValue",
														"name": "flag:Fm3m4Shop",
														"operator": "+=",
														"value": "1"
													}
												]
											},
											{
												"text": "加800生命",
												"icon": "yellowPotion",
												"color": [
													192,
													192,
													192,
													1
												],
												"need": "status:money>=temp:price",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "function",
														"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n(hero_id == 0 ? core.status.hero : core.getFlag(\"hero0\")).hp += 800;\n}"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "-=",
														"value": "temp:price"
													},
													{
														"type": "setValue",
														"name": "flag:Fm3m4Shop",
														"operator": "+=",
														"value": "1"
													}
												]
											},
											{
												"text": "离开",
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
						]
					},
					{
						"case": "\"MTm4\"",
						"action": [
							{
								"type": "while",
								"condition": "1",
								"data": [
									{
										"type": "setValue",
										"name": "temp:price",
										"value": "20+7*flag:Fm3m4Shop+20*flag:Fm32Shop1+flag:Fm32Shop2"
									},
									{
										"type": "choices",
										"text": "\t[金币商店,N447]本商店仅供\\i[N448]使用！\n花${20+7*flag:Fm3m4Shop}枚金币，您可以：",
										"choices": [
											{
												"text": "加3攻击",
												"icon": "redGem",
												"color": [
													255,
													128,
													128,
													1
												],
												"need": "status:money>=temp:price",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "function",
														"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n(hero_id == 1 ? core.status.hero : core.getFlag(\"hero1\")).atk += 3;\n}"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "-=",
														"value": "temp:price"
													},
													{
														"type": "setValue",
														"name": "flag:Fm3m4Shop",
														"operator": "+=",
														"value": "1"
													}
												]
											},
											{
												"text": "加3防御",
												"icon": "blueGem",
												"color": [
													128,
													255,
													255,
													1
												],
												"need": "status:money>=temp:price",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "function",
														"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n(hero_id == 1 ? core.status.hero : core.getFlag(\"hero1\")).def += 3;\n}"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "-=",
														"value": "temp:price"
													},
													{
														"type": "setValue",
														"name": "flag:Fm3m4Shop",
														"operator": "+=",
														"value": "1"
													}
												]
											},
											{
												"text": "加800生命",
												"icon": "yellowPotion",
												"color": [
													192,
													192,
													192,
													1
												],
												"need": "status:money>=temp:price",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "function",
														"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n(hero_id == 1 ? core.status.hero : core.getFlag(\"hero1\")).hp += 800;\n}"
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "-=",
														"value": "temp:price"
													},
													{
														"type": "setValue",
														"name": "flag:Fm3m4Shop",
														"operator": "+=",
														"value": "1"
													}
												]
											},
											{
												"text": "离开",
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
						]
					},
					{
						"case": "\"MTn27\"",
						"action": [
							{
								"type": "while",
								"condition": "1",
								"data": [
									{
										"type": "choices",
										"text": "\t[老人,man]本商店需当面购买！\n600点经验，可以同时提升所有角色。\n购买扣除所有玩家600经验，\n但当前角色经验足够即可购买。\n每1级额外包含：1k血2攻3防",
										"choices": [
											{
												"text": "加一级",
												"icon": "yellowGem",
												"color": [
													255,
													255,
													128,
													1
												],
												"need": "status:exp>=600",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "function",
														"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.hp += 1000;\n\thero.atk += 2;\n\thero.def += 3;\n\thero.exp = Math.max(0, hero.exp - 600);\n});\ncore.status.hero.lv += 1;\ncore.updateStatusBar(true);\n}"
													}
												]
											},
											{
												"text": "6点攻击",
												"icon": "redGem",
												"color": [
													255,
													128,
													128,
													1
												],
												"need": "status:exp>=600",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "function",
														"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.atk += 6;\n\thero.exp = Math.max(0, hero.exp - 600);\n});\ncore.updateStatusBar(true);\n}"
													}
												]
											},
											{
												"text": "9点防御",
												"icon": "blueGem",
												"color": [
													128,
													255,
													255,
													1
												],
												"need": "status:exp>=600",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "function",
														"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.def += 9;\n\thero.exp = Math.max(0, hero.exp - 600);\n});\ncore.updateStatusBar(true);\n}"
													}
												]
											},
											{
												"text": "8000点生命",
												"icon": "yellowPotion",
												"color": [
													192,
													192,
													192,
													1
												],
												"need": "status:exp>=600",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "function",
														"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.hp += 8000;\n\thero.exp = Math.max(0, hero.exp - 600);\n});\ncore.updateStatusBar(true);\n}"
													}
												]
											},
											{
												"text": "离开",
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
						]
					},
					{
						"case": "\"MTn17\"",
						"action": [
							{
								"type": "while",
								"condition": "1",
								"data": [
									{
										"type": "choices",
										"text": "\t[老人,man]本商店需当面购买！\n700点经验，可以同时提升所有角色。\n购买扣除所有玩家700经验，\n但当前角色经验足够即可购买。\n每1级额外包含：1k血2攻3防",
										"choices": [
											{
												"text": "加一级",
												"icon": "yellowGem",
												"color": [
													255,
													255,
													128,
													1
												],
												"need": "status:exp>=700",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "function",
														"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.hp += 1000;\n\thero.atk += 2;\n\thero.def += 3;\n\thero.exp = Math.max(0, hero.exp - 700);\n});\ncore.status.hero.lv += 1;\ncore.updateStatusBar(true);\n}"
													}
												]
											},
											{
												"text": "6点攻击",
												"icon": "redGem",
												"color": [
													255,
													128,
													128,
													1
												],
												"need": "status:exp>=700",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "function",
														"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.atk += 6;\n\thero.exp = Math.max(0, hero.exp - 700);\n});\ncore.updateStatusBar(true);\n}"
													}
												]
											},
											{
												"text": "9点防御",
												"icon": "blueGem",
												"color": [
													128,
													255,
													255,
													1
												],
												"need": "status:exp>=700",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "function",
														"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.def += 9;\n\thero.exp = Math.max(0, hero.exp - 700);\n});\ncore.updateStatusBar(true);\n}"
													}
												]
											},
											{
												"text": "8000点生命",
												"icon": "yellowPotion",
												"color": [
													192,
													192,
													192,
													1
												],
												"need": "status:exp>=700",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "function",
														"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n[0, 1].forEach(id => {\n\tvar hero = hero_id === id ? core.status.hero : core.getFlag(\"hero\" + id);\n\thero.hp += 8000;\n\thero.exp = Math.max(0, hero.exp - 700);\n});\ncore.updateStatusBar(true);\n}"
													}
												]
											},
											{
												"text": "离开",
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
						]
					},
					{
						"case": "\"TSWShop\"",
						"action": [
							{
								"type": "if",
								"condition": "(flag:arg2 > flag:TSWshopBest)",
								"true": [
									{
										"type": "setValue",
										"name": "flag:TSWshopBest",
										"value": "flag:arg2",
										"norefresh": true
									}
								]
							},
							{
								"type": "if",
								"condition": "(flag:arg2<0)",
								"true": [
									{
										"type": "setValue",
										"name": "flag:arg2",
										"value": "flag:TSWshopBest",
										"norefresh": true
									},
									{
										"type": "tip",
										"text": "已自动选择性价比最高的商店"
									}
								]
							},
							{
								"type": "setValue",
								"name": "temp:bestFloorId",
								"value": "(flag:arg2===8?\"35F\":(flag:arg2===10?\"48F\":(flag:arg2===12?\"59F\":\"金币\")))"
							},
							{
								"type": "while",
								"condition": "1",
								"data": [
									{
										"type": "setValue",
										"name": "temp:curPrice",
										"value": "10*(flag:v13_TSWshop*flag:v13_TSWshop+flag:v13_TSWshop+2)+flag:TSWshopOffset"
									},
									{
										"type": "choices",
										"text": "\t[${temp:bestFloorId}商店,moneyShop]花${temp:curPrice}枚金币，您可以：",
										"choices": [
											{
												"text": "加${flag:arg2}攻击",
												"icon": "redGem",
												"need": "status:money>=temp:curPrice",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "-=",
														"value": "temp:curPrice"
													},
													{
														"type": "setValue",
														"name": "flag:v13_TSWshop",
														"operator": "+=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "status:atk",
														"operator": "+=",
														"value": "8"
													}
												]
											},
											{
												"text": "加${2*flag:arg2}防御",
												"icon": "blueGem",
												"need": "status:money>=temp:curPrice",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "-=",
														"value": "temp:curPrice"
													},
													{
														"type": "setValue",
														"name": "flag:v13_TSWshop",
														"operator": "+=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "status:def",
														"operator": "+=",
														"value": "16"
													}
												]
											},
											{
												"text": "加${150+125*flag:arg2}生命",
												"icon": "redPotion",
												"need": "status:money>=temp:curPrice",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "-=",
														"value": "temp:curPrice"
													},
													{
														"type": "setValue",
														"name": "flag:v13_TSWshop",
														"operator": "+=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "status:hp",
														"operator": "+=",
														"value": "1150"
													}
												]
											},
											{
												"text": "离开",
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
						]
					},
					{
						"case": "\"MT0\"",
						"action": [
							{
								"type": "while",
								"condition": "1",
								"data": [
									{
										"type": "choices",
										"text": "\t[商人,youngMan]我是商人，请挑选您要购买的物品",
										"choices": [
											{
												"text": "黄钥匙(20塔币)",
												"icon": "yellowKey",
												"color": [
													255,
													255,
													128,
													1
												],
												"need": "status:money>=20",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "-=",
														"value": "20"
													},
													{
														"type": "setValue",
														"name": "item:yellowKey",
														"operator": "+=",
														"value": "1"
													}
												]
											},
											{
												"text": "蓝钥匙(100塔币)",
												"icon": "blueKey",
												"color": [
													128,
													255,
													255,
													1
												],
												"need": "status:money>=100",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "-=",
														"value": "100"
													},
													{
														"type": "setValue",
														"name": "item:blueKey",
														"operator": "+=",
														"value": "1"
													}
												]
											},
											{
												"text": "红钥匙(200塔币)",
												"icon": "redKey",
												"color": [
													255,
													128,
													128,
													1
												],
												"need": "status:money>=200",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "setValue",
														"name": "status:money",
														"operator": "-=",
														"value": "200"
													},
													{
														"type": "setValue",
														"name": "item:redKey",
														"operator": "+=",
														"value": "1"
													}
												]
											},
											{
												"text": "离开",
												"color": [
													255,
													255,
													255,
													1
												],
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
						]
					},
					{
						"case": "\"MT49\"",
						"action": [
							{
								"type": "if",
								"condition": "(flag:s186_F49NoSale===1)",
								"true": [
									{
										"type": "while",
										"condition": "1",
										"data": [
											{
												"type": "choices",
												"text": "\t[商人,trader]为当前角色增加能力值。\n选择后将要求输入购买次数：",
												"choices": [
													{
														"text": "1攻击(200金币)",
														"icon": "redGem",
														"color": [
															255,
															128,
															128,
															1
														],
														"need": "status:money>=100",
														"action": [
															{
																"type": "input",
																"text": "每200金币换1攻击，请输入购买次数(1~${Math.floor(status:money/100)})："
															},
															{
																"type": "if",
																"condition": "((flag:input>=1 )&&( flag:input <=Math.floor(status:money/200) ))",
																"true": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3",
																		"stop": true
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "-=",
																		"value": "flag:input*200"
																	},
																	{
																		"type": "setValue",
																		"name": "status:atk",
																		"operator": "+=",
																		"value": "flag:input"
																	}
																],
																"false": [
																	"输入不合法，购买失败！"
																]
															}
														]
													},
													{
														"text": "1防御(200金币)",
														"icon": "blueGem",
														"color": [
															128,
															255,
															255,
															1
														],
														"need": "status:money>=100",
														"action": [
															{
																"type": "input",
																"text": "每200金币换1防御，请输入购买次数(1~${Math.floor(status:money/100)})："
															},
															{
																"type": "if",
																"condition": "((flag:input>=1 )&&( flag:input <=Math.floor(status:money/200) ))",
																"true": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3",
																		"stop": true
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "-=",
																		"value": "flag:input*200"
																	},
																	{
																		"type": "setValue",
																		"name": "status:def",
																		"operator": "+=",
																		"value": "flag:input"
																	}
																],
																"false": [
																	"输入不合法，购买失败！"
																]
															}
														]
													},
													{
														"text": "1生命(1金币)",
														"icon": "yellowPotion",
														"color": [
															192,
															192,
															192,
															1
														],
														"need": "status:money>=1",
														"action": [
															{
																"type": "input",
																"text": "每1金币换1生命，请输入购买次数(1~${status:money})："
															},
															{
																"type": "if",
																"condition": "((flag:input>=1 )&&( flag:input <=status:money))",
																"true": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3",
																		"stop": true
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "-=",
																		"value": "flag:input"
																	},
																	{
																		"type": "setValue",
																		"name": "status:hp",
																		"operator": "+=",
																		"value": "flag:input"
																	}
																],
																"false": [
																	"输入不合法，购买失败！"
																]
															}
														]
													},
													{
														"text": "离开",
														"color": [
															255,
															255,
															255,
															1
														],
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
								"false": [
									{
										"type": "while",
										"condition": "1",
										"data": [
											{
												"type": "choices",
												"text": "\t[商人,trader]为当前角色增加能力值。\n选择后将要求输入购买次数：",
												"choices": [
													{
														"text": "1攻击(100金币)",
														"icon": "redGem",
														"color": [
															255,
															128,
															128,
															1
														],
														"need": "status:money>=100",
														"action": [
															{
																"type": "input",
																"text": "每100金币换1攻击，请输入购买次数(1~${Math.floor(status:money/100)})："
															},
															{
																"type": "if",
																"condition": "((flag:input>=1 )&&( flag:input <=Math.floor(status:money/100) ))",
																"true": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3",
																		"stop": true
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "-=",
																		"value": "flag:input*100"
																	},
																	{
																		"type": "setValue",
																		"name": "status:atk",
																		"operator": "+=",
																		"value": "flag:input"
																	}
																],
																"false": [
																	"输入不合法，购买失败！"
																]
															}
														]
													},
													{
														"text": "1防御(100金币)",
														"icon": "blueGem",
														"color": [
															128,
															255,
															255,
															1
														],
														"need": "status:money>=100",
														"action": [
															{
																"type": "input",
																"text": "每100金币换1防御，请输入购买次数(1~${Math.floor(status:money/100)})："
															},
															{
																"type": "if",
																"condition": "((flag:input>=1 )&&( flag:input <=Math.floor(status:money/100) ))",
																"true": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3",
																		"stop": true
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "-=",
																		"value": "flag:input*100"
																	},
																	{
																		"type": "setValue",
																		"name": "status:def",
																		"operator": "+=",
																		"value": "flag:input"
																	}
																],
																"false": [
																	"输入不合法，购买失败！"
																]
															}
														]
													},
													{
														"text": "1生命(1金币)",
														"icon": "yellowPotion",
														"color": [
															192,
															192,
															192,
															1
														],
														"need": "status:money>=1",
														"action": [
															{
																"type": "input",
																"text": "每1金币换1生命，请输入购买次数(1~${status:money})："
															},
															{
																"type": "if",
																"condition": "((flag:input>=1 )&&( flag:input <=status:money))",
																"true": [
																	{
																		"type": "playSound",
																		"name": "shop.mp3",
																		"stop": true
																	},
																	{
																		"type": "setValue",
																		"name": "status:money",
																		"operator": "-=",
																		"value": "flag:input"
																	},
																	{
																		"type": "setValue",
																		"name": "status:hp",
																		"operator": "+=",
																		"value": "flag:input"
																	}
																],
																"false": [
																	"输入不合法，购买失败！"
																]
															}
														]
													},
													{
														"text": "离开",
														"color": [
															255,
															255,
															255,
															1
														],
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
								]
							}
						]
					},
					{
						"case": "\"MT59\"",
						"action": [
							{
								"type": "while",
								"condition": "1",
								"data": [
									{
										"type": "choices",
										"text": "\t[商人,trader]只要有足够的经验，当前角色可增加能力。\n每1级额外包含：\n2580血6攻6防3魔防",
										"choices": [
											{
												"text": "400经验升1级",
												"icon": "yellowGem",
												"color": [
													255,
													255,
													128,
													1
												],
												"need": "status:exp>=400",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "setValue",
														"name": "status:exp",
														"operator": "-=",
														"value": "400"
													},
													{
														"type": "setValue",
														"name": "status:lv",
														"operator": "+=",
														"value": "1"
													},
													{
														"type": "setValue",
														"name": "status:hp",
														"operator": "+=",
														"value": "2580"
													},
													{
														"type": "setValue",
														"name": "status:atk",
														"operator": "+=",
														"value": "6"
													},
													{
														"type": "setValue",
														"name": "status:def",
														"operator": "+=",
														"value": "6"
													},
													{
														"type": "setValue",
														"name": "status:mdef",
														"operator": "+=",
														"value": "3"
													}
												]
											},
											{
												"text": "150经验换4攻击",
												"icon": "redGem",
												"color": [
													255,
													128,
													128,
													1
												],
												"need": "status:exp>=150",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "setValue",
														"name": "status:exp",
														"operator": "-=",
														"value": "150"
													},
													{
														"type": "setValue",
														"name": "status:atk",
														"operator": "+=",
														"value": "4"
													}
												]
											},
											{
												"text": "150经验换4防御",
												"icon": "blueGem",
												"color": [
													128,
													255,
													255,
													1
												],
												"need": "status:exp>=150",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "setValue",
														"name": "status:exp",
														"operator": "-=",
														"value": "150"
													},
													{
														"type": "setValue",
														"name": "status:def",
														"operator": "+=",
														"value": "4"
													}
												]
											},
											{
												"text": "150经验换4魔防",
												"icon": "greenGem",
												"color": [
													128,
													255,
													128,
													1
												],
												"need": "status:exp>=150",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "setValue",
														"name": "status:exp",
														"operator": "-=",
														"value": "150"
													},
													{
														"type": "setValue",
														"name": "status:mdef",
														"operator": "+=",
														"value": "4"
													}
												]
											},
											{
												"text": "离开",
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
						]
					},
					{
						"case": "\"MTn34\"",
						"action": [
							{
								"type": "while",
								"condition": "1",
								"data": [
									{
										"type": "choices",
										"text": "\t[经验商店,N417]只要有足够的经验，当前角色可增加能力。",
										"choices": [
											{
												"text": "5000血10攻15防5魔防/500exp",
												"color": [
													255,
													255,
													128,
													1
												],
												"need": "status:exp>=500",
												"condition": "flag:s110_Fm57boss!==1",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "setValue",
														"name": "status:exp",
														"operator": "-=",
														"value": "500"
													},
													{
														"type": "setValue",
														"name": "status:hp",
														"operator": "+=",
														"value": "5000"
													},
													{
														"type": "setValue",
														"name": "status:atk",
														"operator": "+=",
														"value": "10"
													},
													{
														"type": "setValue",
														"name": "status:def",
														"operator": "+=",
														"value": "15"
													},
													{
														"type": "setValue",
														"name": "status:mdef",
														"operator": "+=",
														"value": "5"
													}
												]
											},
											{
												"text": "5000血8攻防5魔防/500exp",
												"color": [
													255,
													255,
													128,
													1
												],
												"need": "status:exp>=500",
												"condition": "flag:s110_Fm57boss!==0",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "setValue",
														"name": "status:exp",
														"operator": "-=",
														"value": "500"
													},
													{
														"type": "setValue",
														"name": "status:hp",
														"operator": "+=",
														"value": "5000"
													},
													{
														"type": "setValue",
														"name": "status:atk",
														"operator": "+=",
														"value": "8"
													},
													{
														"type": "setValue",
														"name": "status:def",
														"operator": "+=",
														"value": "8"
													},
													{
														"type": "setValue",
														"name": "status:mdef",
														"operator": "+=",
														"value": "5"
													}
												]
											},
											{
												"text": "7000血20攻30防10魔防/590exp",
												"color": [
													255,
													255,
													128,
													1
												],
												"need": "status:exp>=590",
												"condition": "flag:s110_Fm57boss!==1",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "setValue",
														"name": "status:exp",
														"operator": "-=",
														"value": "590"
													},
													{
														"type": "setValue",
														"name": "status:hp",
														"operator": "+=",
														"value": "7000"
													},
													{
														"type": "setValue",
														"name": "status:atk",
														"operator": "+=",
														"value": "20"
													},
													{
														"type": "setValue",
														"name": "status:def",
														"operator": "+=",
														"value": "30"
													},
													{
														"type": "setValue",
														"name": "status:mdef",
														"operator": "+=",
														"value": "10"
													}
												]
											},
											{
												"text": "7000血18攻防8魔防/590exp",
												"color": [
													255,
													255,
													128,
													1
												],
												"need": "status:exp>=590",
												"condition": "flag:s110_Fm57boss!==0",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "setValue",
														"name": "status:exp",
														"operator": "-=",
														"value": "590"
													},
													{
														"type": "setValue",
														"name": "status:hp",
														"operator": "+=",
														"value": "7000"
													},
													{
														"type": "setValue",
														"name": "status:atk",
														"operator": "+=",
														"value": "18"
													},
													{
														"type": "setValue",
														"name": "status:def",
														"operator": "+=",
														"value": "18"
													},
													{
														"type": "setValue",
														"name": "status:mdef",
														"operator": "+=",
														"value": "8"
													}
												]
											},
											{
												"text": "9000血30攻45防15魔防/670exp",
												"color": [
													255,
													255,
													128,
													1
												],
												"need": "status:exp>=670",
												"condition": "flag:s110_Fm57boss!==1",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "setValue",
														"name": "status:exp",
														"operator": "-=",
														"value": "670"
													},
													{
														"type": "setValue",
														"name": "status:hp",
														"operator": "+=",
														"value": "9000"
													},
													{
														"type": "setValue",
														"name": "status:atk",
														"operator": "+=",
														"value": "30"
													},
													{
														"type": "setValue",
														"name": "status:def",
														"operator": "+=",
														"value": "45"
													},
													{
														"type": "setValue",
														"name": "status:mdef",
														"operator": "+=",
														"value": "15"
													}
												]
											},
											{
												"text": "9000血20攻防15魔防/670exp",
												"color": [
													255,
													255,
													128,
													1
												],
												"need": "status:exp>=670",
												"condition": "flag:s110_Fm57boss!==0",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "setValue",
														"name": "status:exp",
														"operator": "-=",
														"value": "670"
													},
													{
														"type": "setValue",
														"name": "status:hp",
														"operator": "+=",
														"value": "9000"
													},
													{
														"type": "setValue",
														"name": "status:atk",
														"operator": "+=",
														"value": "20"
													},
													{
														"type": "setValue",
														"name": "status:def",
														"operator": "+=",
														"value": "20"
													},
													{
														"type": "setValue",
														"name": "status:mdef",
														"operator": "+=",
														"value": "15"
													}
												]
											},
											{
												"text": "11110血40攻60防20魔防/850exp",
												"color": [
													255,
													255,
													128,
													1
												],
												"need": "status:exp>=850",
												"condition": "flag:s110_Fm57boss!==1",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "setValue",
														"name": "status:exp",
														"operator": "-=",
														"value": "850"
													},
													{
														"type": "setValue",
														"name": "status:hp",
														"operator": "+=",
														"value": "11110"
													},
													{
														"type": "setValue",
														"name": "status:atk",
														"operator": "+=",
														"value": "40"
													},
													{
														"type": "setValue",
														"name": "status:def",
														"operator": "+=",
														"value": "60"
													},
													{
														"type": "setValue",
														"name": "status:mdef",
														"operator": "+=",
														"value": "20"
													}
												]
											},
											{
												"text": "11110血30攻防10魔防/850exp",
												"color": [
													255,
													255,
													128,
													1
												],
												"need": "status:exp>=850",
												"condition": "flag:s110_Fm57boss!==0",
												"action": [
													{
														"type": "playSound",
														"name": "shop.mp3",
														"stop": true
													},
													{
														"type": "setValue",
														"name": "status:exp",
														"operator": "-=",
														"value": "850"
													},
													{
														"type": "setValue",
														"name": "status:hp",
														"operator": "+=",
														"value": "11110"
													},
													{
														"type": "setValue",
														"name": "status:atk",
														"operator": "+=",
														"value": "30"
													},
													{
														"type": "setValue",
														"name": "status:def",
														"operator": "+=",
														"value": "30"
													},
													{
														"type": "setValue",
														"name": "status:mdef",
														"operator": "+=",
														"value": "10"
													}
												]
											},
											{
												"text": "离开",
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
						]
					}
				]
			},
			{
				"type": "function",
				"function": "function(){\ncore.addFlag('@temp@shop', -1);\n}"
			}
		],
		"SwitchCharactor": [
			{
				"type": "choices",
				"text": "\t[角色切换]请选择要操作的角色：",
				"choices": [
					{
						"text": "${core.getFlag('hero0', core.status.hero).name}",
						"icon": "N331",
						"action": [
							{
								"type": "function",
								"function": "function(){\ncore.changeHero(0);\n}"
							}
						]
					},
					{
						"text": "${core.getFlag('hero1', core.status.hero).name}",
						"icon": "N448",
						"need": "flag:FoundWoman===1",
						"action": [
							{
								"type": "function",
								"function": "function(){\ncore.changeHero(1);\n}"
							}
						]
					},
					{
						"text": "返回游戏",
						"action": []
					}
				]
			}
		],
		"DynamicPotion": [
			{
				"type": "switch",
				"condition": "flag:arg1",
				"caseList": [
					{
						"case": "\"potion\"",
						"action": [
							{
								"type": "if",
								"condition": "(flag:PotionLessRate===1)",
								"true": [
									{
										"type": "setValue",
										"name": "flag:arg2",
										"value": "Math.floor(0.2*flag:arg2)"
									}
								],
								"false": [
									{
										"type": "if",
										"condition": "(flag:PotionLessRateHinted!==1)",
										"true": [
											"\t[H5难度系统]根据当前难度设置，紫血瓶按原效果增加生命值。\n紫血瓶弱化相关难度选项已失效。",
											{
												"type": "setValue",
												"name": "flag:PotionLessRateHinted",
												"value": "1"
											}
										]
									}
								]
							},
							{
								"type": "choices",
								"text": "\t[获得血瓶,I454]选择一名角色：\n+${flag:arg2}HP",
								"choices": [
									{
										"text": "当前行动角色",
										"color": [
											0,
											255,
											0,
											1
										],
										"action": [
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "flag:arg2"
											}
										]
									},
									{
										"text": "${(core.getFlag('hero0') || core.status.hero).name}",
										"icon": "N331",
										"action": [
											{
												"type": "function",
												"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n(hero_id == 0 ? core.status.hero : core.getFlag(\"hero0\")).hp += core.getFlag(\"arg2\", 0);\ncore.updateStatusBar(true);\n}"
											}
										]
									},
									{
										"text": "${(core.getFlag('hero1') || core.status.hero).name}",
										"icon": "N448",
										"need": "flag:FoundWoman===1",
										"action": [
											{
												"type": "function",
												"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n(hero_id == 1 ? core.status.hero : core.getFlag(\"hero1\")).hp += core.getFlag(\"arg2\", 0);\ncore.updateStatusBar(true);\n}"
											}
										]
									}
								]
							},
							{
								"type": "playSound",
								"name": "recovery.mp3"
							}
						]
					},
					{
						"case": "\"potionDouble\"",
						"action": [
							{
								"type": "choices",
								"text": "\t[获得血瓶,I454]选择一名角色：生命翻倍！\n（实际生命回复量受难度影响）",
								"choices": [
									{
										"text": "当前行动角色",
										"color": [
											0,
											255,
											0,
											1
										],
										"action": [
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "*=",
												"value": "2"
											}
										]
									},
									{
										"text": "${(core.getFlag('hero0') || core.status.hero).name}",
										"icon": "N331",
										"action": [
											{
												"type": "function",
												"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n(hero_id == 0 ? core.status.hero : core.getFlag(\"hero0\")).hp *= 2;\ncore.updateStatusBar(true);\n}"
											}
										]
									},
									{
										"text": "${(core.getFlag('hero1') || core.status.hero).name}",
										"icon": "N448",
										"need": "flag:FoundWoman===1",
										"action": [
											{
												"type": "function",
												"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\n(hero_id == 1 ? core.status.hero : core.getFlag(\"hero1\")).hp *= 2;\ncore.updateStatusBar(true);\n}"
											}
										]
									}
								]
							},
							{
								"type": "playSound",
								"name": "recovery.mp3"
							}
						]
					},
					{
						"case": "\"gem\"",
						"action": [
							{
								"type": "function",
								"function": "function(){\nvar prompt = \"\";\nvar atk = core.getFlag(\"arg2\", 0),\n\tdef = core.getFlag(\"arg3\", 0),\n\tmdef = core.getFlag(\"arg4\", 0),\n\thp = core.getFlag(\"arg5\", 0);\n\nif (atk) prompt += `\n+` + atk + \"攻击\";\nif (def) prompt += `\n+` + def + \"防御\";\nif (mdef) prompt += `\n+` + mdef + \"魔防\";\nif (hp) prompt += `\n+` + hp + \"生命\";\n\ncore.setFlag(\"arg1\", prompt);\n}"
							},
							{
								"type": "choices",
								"text": "\t[获得宝石,I455]选择一名角色：${flag:arg1}",
								"choices": [
									{
										"text": "当前行动角色",
										"color": [
											0,
											255,
											0,
											1
										],
										"action": [
											{
												"type": "function",
												"function": "function(){\nvar hero = core.status.hero;\nhero.atk += core.getFlag(\"arg2\", 0);\nhero.def += core.getFlag(\"arg3\", 0);\nhero.mdef += core.getFlag(\"arg4\", 0);\nhero.hp += core.getFlag(\"arg5\", 0);\ncore.setFlag(\"arg2\", 0);\ncore.setFlag(\"arg3\", 0);\ncore.setFlag(\"arg4\", 0);\ncore.setFlag(\"arg5\", 0);\ncore.updateStatusBar(true);\n}"
											}
										]
									},
									{
										"text": "${(core.getFlag('hero0') || core.status.hero).name}",
										"icon": "N331",
										"action": [
											{
												"type": "function",
												"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\nvar hero = (hero_id == 0 ? core.status.hero : core.getFlag(\"hero0\"))\nhero.atk += core.getFlag(\"arg2\", 0);\nhero.def += core.getFlag(\"arg3\", 0);\nhero.mdef += core.getFlag(\"arg4\", 0);\nhero.hp += core.getFlag(\"arg5\", 0);\ncore.setFlag(\"arg2\", 0);\ncore.setFlag(\"arg3\", 0);\ncore.setFlag(\"arg4\", 0);\ncore.setFlag(\"arg5\", 0);\ncore.updateStatusBar(true);\n}"
											}
										]
									},
									{
										"text": "${(core.getFlag('hero1') || core.status.hero).name}",
										"icon": "N448",
										"need": "flag:FoundWoman===1",
										"action": [
											{
												"type": "function",
												"function": "function(){\nvar hero_id = core.getFlag(\"heroId\", 0);\nvar hero = (hero_id == 1 ? core.status.hero : core.getFlag(\"hero1\"))\nhero.atk += core.getFlag(\"arg2\", 0);\nhero.def += core.getFlag(\"arg3\", 0);\nhero.mdef += core.getFlag(\"arg4\", 0);\nhero.hp += core.getFlag(\"arg5\", 0);\ncore.setFlag(\"arg2\", 0);\ncore.setFlag(\"arg3\", 0);\ncore.setFlag(\"arg4\", 0);\ncore.setFlag(\"arg5\", 0);\ncore.updateStatusBar(true);\n}"
											}
										]
									}
								]
							},
							{
								"type": "playSound",
								"name": "recovery.mp3"
							}
						]
					},
					{
						"case": "\"brocade\"",
						"action": [
							{
								"type": "function",
								"function": "function(){\ncore.setFlag(\"noItemSound\", 1);\n}"
							},
							{
								"type": "setValue",
								"name": "item:yellowKey",
								"operator": "+=",
								"value": "5",
								"norefresh": true
							},
							{
								"type": "setValue",
								"name": "item:blueKey",
								"operator": "+=",
								"value": "3",
								"norefresh": true
							},
							{
								"type": "setValue",
								"name": "item:redKey",
								"operator": "+=",
								"value": "1",
								"norefresh": true
							},
							{
								"type": "setValue",
								"name": "item:redPotion",
								"operator": "+=",
								"value": "4",
								"norefresh": true
							},
							{
								"type": "setValue",
								"name": "item:bluePotion",
								"operator": "+=",
								"value": "3",
								"norefresh": true
							},
							{
								"type": "setValue",
								"name": "item:yellowPotion",
								"operator": "+=",
								"value": "2",
								"norefresh": true
							},
							{
								"type": "setValue",
								"name": "item:greenPotion",
								"operator": "+=",
								"value": "1",
								"norefresh": true
							},
							{
								"type": "setValue",
								"name": "item:redGem",
								"operator": "+=",
								"value": "1",
								"norefresh": true
							},
							{
								"type": "setValue",
								"name": "item:blueGem",
								"operator": "+=",
								"value": "1",
								"norefresh": true
							},
							{
								"type": "setValue",
								"name": "item:greenGem",
								"operator": "+=",
								"value": "1",
								"norefresh": true
							},
							{
								"type": "function",
								"function": "function(){\ncore.removeFlag(\"noItemSound\");\n}"
							},
							{
								"type": "setValue",
								"name": "item:I339",
								"operator": "+=",
								"value": "1"
							}
						]
					}
				]
			}
		],
		"全局商店二级分类": [
			{
				"type": "choices",
				"text": "\t[快捷商店]可用的快捷商店已较多，\n请先选择您要购买的商店类别：",
				"choices": [
					{
						"text": "金币能力商店",
						"icon": "money",
						"action": [
							{
								"type": "function",
								"function": "function(){\ncore.status.route.pop();\nif (!core.events._checkStatus('selectShop', false)) {\n\treturn;\n}\ncore.ui._drawQuickShop(\"金币\");\n}"
							}
						]
					},
					{
						"text": "经验能力商店",
						"icon": "exp",
						"action": [
							{
								"type": "function",
								"function": "function(){\ncore.status.route.pop();\nif (!core.events._checkStatus('selectShop', false)) return;\ncore.ui._drawQuickShop(\"经验\");\n}"
							}
						]
					},
					{
						"text": "其他商店",
						"icon": "toolbox",
						"action": [
							{
								"type": "function",
								"function": "function(){\ncore.status.route.pop();\nif (!core.events._checkStatus('selectShop', false)) return;\ncore.ui._drawQuickShop(\"道具\");\n}"
							}
						]
					},
					{
						"text": "返回游戏",
						"icon": "speedDown",
						"action": [
							{
								"type": "function",
								"function": "function(){\ncore.status.route.pop();\n}"
							}
						]
					}
				]
			}
		],
		"难度配置": [
			{
				"type": "if",
				"condition": "(flag:arg1==='final')",
				"true": [
					{
						"type": "if",
						"condition": "(flag:weakTagLevel<flag:weakTagLevelUb)",
						"true": [
							{
								"type": "setValue",
								"name": "flag:weakTagLevel",
								"value": "flag:weakTagLevelUb"
							}
						]
					},
					{
						"type": "if",
						"condition": "(flag:37FItemlevel<flag:37FItemlevelUb)",
						"true": [
							{
								"type": "setValue",
								"name": "flag:37FItemlevel",
								"value": "flag:37FItemlevelUb"
							}
						]
					},
					{
						"type": "if",
						"condition": "((flag:PotionLessValue!==1)&&(flag:PotionLessValueDisabled!==1))",
						"true": [
							{
								"type": "setValue",
								"name": "flag:PotionLessValue",
								"value": "1"
							}
						]
					},
					{
						"type": "if",
						"condition": "((flag:PotionLessRate!==1)&&(flag:PotionLessRateHinted!==1))",
						"true": [
							{
								"type": "setValue",
								"name": "flag:PotionLessRate",
								"value": "1"
							}
						]
					},
					{
						"type": "if",
						"condition": "((flag:SuperSteelKeyInvalid!==1)&&(flag:SuperSteelKeyAttained!==1))",
						"true": [
							{
								"type": "setValue",
								"name": "flag:SuperSteelKeyInvalid",
								"value": "1"
							}
						]
					},
					{
						"type": "if",
						"condition": "((flag:F51promote!==1)&&(!core.hasVisitedFloor('MT51')))",
						"true": [
							{
								"type": "setValue",
								"name": "flag:F51promote",
								"value": "1"
							}
						]
					},
					{
						"type": "if",
						"condition": "((flag:F85promote!==1)&&(!core.hasVisitedFloor('MT85')))",
						"true": [
							{
								"type": "setValue",
								"name": "flag:F85promote",
								"value": "1"
							}
						]
					},
					{
						"type": "if",
						"condition": "((flag:Fm58promote!==1)&&(!core.hasVisitedFloor('MTn58')))",
						"true": [
							{
								"type": "setValue",
								"name": "flag:Fm58promote",
								"value": "1"
							}
						]
					},
					{
						"type": "if",
						"condition": "(flag:realHard>=0)",
						"true": [
							{
								"type": "setValue",
								"name": "flag:realHard",
								"value": "flag:noFixSevereBug?0:(flag:weakTagLevel+(flag:37FItemlevel<3?flag:37FItemlevel:4)+flag:PotionLessValue+flag:PotionLessRate+flag:SuperSteelKeyInvalid+flag:F51promote+flag:F85promote+flag:Fm58promote)+flag:baseHard"
							}
						]
					},
					{
						"type": "tip",
						"text": "难度已自动调整为可能的最高难"
					}
				],
				"false": [
					{
						"type": "while",
						"condition": "1",
						"data": [
							{
								"type": "if",
								"condition": "(flag:realHard>=0)",
								"true": [
									{
										"type": "setValue",
										"name": "flag:realHard",
										"value": "flag:noFixSevereBug?0:(flag:weakTagLevel+(flag:37FItemlevel<3?flag:37FItemlevel:4)+flag:PotionLessValue+flag:PotionLessRate+flag:SuperSteelKeyInvalid+flag:F51promote+flag:F85promote+flag:Fm58promote)+flag:baseHard"
									}
								]
							},
							{
								"type": "choices",
								"text": "\t[H5复刻版难度系统]总难度10起，将单独计入排行榜\n\r[orange]当前总难度：${flag:realHard}/15\r[red]\n${flag:noFixSevereBug ? '启用\"恶性特性修复\"才可结算难度值' : \"\"}\n\r游戏过程中可随时呼出本界面",
								"choices": [
									{
										"text": "原版难度：${['简单','困难','噩梦'][flag:baseHard]} (难度+${flag:baseHard})",
										"color": [
											255,
											215,
											0,
											1
										],
										"need": "flag:arg1===\"title\"",
										"action": [
											{
												"type": "choices",
												"text": "\t[原版难度]请选择原版难度。\r[#FF4040]\n本项仅在游戏开始时可设置，\n游戏中不可修改",
												"choices": [
													{
														"text": "原版简单",
														"action": [
															{
																"type": "setValue",
																"name": "status:hp",
																"value": "1000"
															},
															{
																"type": "setValue",
																"name": "status:atk",
																"value": "10"
															},
															{
																"type": "setValue",
																"name": "status:def",
																"value": "10"
															},
															{
																"type": "setValue",
																"name": "flag:s190_NoCheating",
																"value": "0"
															},
															{
																"type": "setValue",
																"name": "flag:baseHard",
																"value": "0"
															}
														]
													},
													{
														"text": "原版困难",
														"action": [
															{
																"type": "setValue",
																"name": "status:hp",
																"value": "1000"
															},
															{
																"type": "setValue",
																"name": "status:atk",
																"value": "8"
															},
															{
																"type": "setValue",
																"name": "status:def",
																"value": "8"
															},
															{
																"type": "setValue",
																"name": "flag:baseHard",
																"value": "1"
															}
														]
													},
													{
														"text": "原版噩梦",
														"action": [
															{
																"type": "setValue",
																"name": "flag:baseHard",
																"value": "2"
															},
															{
																"type": "setValue",
																"name": "flag:s190_NoCheating",
																"value": "1"
															}
														]
													},
													{
														"text": "返回上一级",
														"action": []
													}
												]
											}
										]
									},
									{
										"text": "使用预设(首次游玩推荐)",
										"color": [
											255,
											215,
											0,
											1
										],
										"condition": "flag:arg1===\"title\"",
										"action": [
											{
												"type": "choices",
												"text": "\t[选择预设难度]以下是一些预设的难度选项，可选择后再\n进行细粒度修改。\n\r[orange]\n首次游玩推荐选择：体验优化[+5难]\r",
												"choices": [
													{
														"text": "接近原版 [+0难]",
														"action": [
															{
																"type": "setValue",
																"name": "flag:noFixSevereBug",
																"value": "1"
															},
															{
																"type": "setValue",
																"name": "flag:weakTagLevel",
																"value": "0"
															},
															{
																"type": "setValue",
																"name": "flag:37FItemlevel",
																"value": "0"
															},
															{
																"type": "setValue",
																"name": "flag:PotionLessValue",
																"value": "0"
															},
															{
																"type": "setValue",
																"name": "flag:PotionLessRate",
																"value": "0"
															},
															{
																"type": "setValue",
																"name": "flag:SuperSteelKeyInvalid",
																"value": "0"
															},
															{
																"type": "setValue",
																"name": "flag:F51promote",
																"value": "0"
															},
															{
																"type": "setValue",
																"name": "flag:F85promote",
																"value": "0"
															},
															{
																"type": "setValue",
																"name": "flag:Fm58promote",
																"value": "0"
															}
														]
													},
													{
														"text": "体验优化 [+5难]",
														"color": [
															128,
															255,
															128
														],
														"action": [
															{
																"type": "setValue",
																"name": "flag:noFixSevereBug",
																"value": "0"
															},
															{
																"type": "setValue",
																"name": "flag:weakTagLevel",
																"value": "1"
															},
															{
																"type": "setValue",
																"name": "flag:37FItemlevel",
																"value": "1"
															},
															{
																"type": "setValue",
																"name": "flag:PotionLessValue",
																"value": "1"
															},
															{
																"type": "setValue",
																"name": "flag:PotionLessRate",
																"value": "0"
															},
															{
																"type": "setValue",
																"name": "flag:SuperSteelKeyInvalid",
																"value": "1"
															},
															{
																"type": "setValue",
																"name": "flag:F51promote",
																"value": "0"
															},
															{
																"type": "setValue",
																"name": "flag:F85promote",
																"value": "1"
															},
															{
																"type": "setValue",
																"name": "flag:Fm58promote",
																"value": "0"
															}
														]
													},
													{
														"text": "难度上榜 [+9难]",
														"action": [
															{
																"type": "setValue",
																"name": "flag:noFixSevereBug",
																"value": "0"
															},
															{
																"type": "setValue",
																"name": "flag:weakTagLevel",
																"value": "2"
															},
															{
																"type": "setValue",
																"name": "flag:37FItemlevel",
																"value": "2"
															},
															{
																"type": "setValue",
																"name": "flag:PotionLessValue",
																"value": "1"
															},
															{
																"type": "setValue",
																"name": "flag:PotionLessRate",
																"value": "1"
															},
															{
																"type": "setValue",
																"name": "flag:SuperSteelKeyInvalid",
																"value": "1"
															},
															{
																"type": "setValue",
																"name": "flag:F51promote",
																"value": "1"
															},
															{
																"type": "setValue",
																"name": "flag:F85promote",
																"value": "1"
															},
															{
																"type": "setValue",
																"name": "flag:Fm58promote",
																"value": "0"
															}
														]
													},
													{
														"text": "最高难度 [+13难]",
														"color": [
															255,
															0,
															255
														],
														"action": [
															{
																"type": "setValue",
																"name": "flag:noFixSevereBug",
																"value": "0"
															},
															{
																"type": "setValue",
																"name": "flag:weakTagLevel",
																"value": "3"
															},
															{
																"type": "setValue",
																"name": "flag:37FItemlevel",
																"value": "3"
															},
															{
																"type": "setValue",
																"name": "flag:PotionLessValue",
																"value": "1"
															},
															{
																"type": "setValue",
																"name": "flag:PotionLessRate",
																"value": "1"
															},
															{
																"type": "setValue",
																"name": "flag:SuperSteelKeyInvalid",
																"value": "1"
															},
															{
																"type": "setValue",
																"name": "flag:F51promote",
																"value": "1"
															},
															{
																"type": "setValue",
																"name": "flag:F85promote",
																"value": "1"
															},
															{
																"type": "setValue",
																"name": "flag:Fm58promote",
																"value": "1"
															}
														]
													},
													{
														"text": "返回上一级",
														"action": []
													}
												]
											}
										]
									},
									{
										"text": "恶性特性修复 [${flag:noFixSevereBug?'OFF':'ON'}]",
										"color": [
											255,
											96,
											96
										],
										"need": "flag:arg1===\"title\"",
										"action": [
											{
												"type": "choices",
												"text": "\t[恶性特性修复]只有开启此项才可正常计算难度，确认${flag:noFixSevereBug?'启':'禁'}用吗？\n\r[orange]启用时，将影响：\r\n① -23/-59F控血NPC不可跳过\n② 领袖战斗楼层升/降飞羽不可用\n③ 48F宝石升级NPC仅可用一次\n④ 地牢捷克将要求持有幸运金币\n⑤ -50F商店将仅允许出售装备\n\r[#FF4040]本项仅在游戏开始时可设置，游戏中不可修改\r",
												"choices": [
													{
														"text": "启用",
														"action": [
															{
																"type": "setValue",
																"name": "flag:noFixSevereBug",
																"value": "0"
															}
														]
													},
													{
														"text": "禁用",
														"action": [
															{
																"type": "setValue",
																"name": "flag:noFixSevereBug",
																"value": "1"
															}
														]
													}
												]
											}
										]
									},
									{
										"text": "衰弱相关 (难度+${flag:weakTagLevel})",
										"action": [
											{
												"type": "while",
												"condition": "1",
												"data": [
													{
														"type": "if",
														"condition": "(flag:realHard>=0)",
														"true": [
															{
																"type": "setValue",
																"name": "flag:realHard",
																"value": "flag:noFixSevereBug?0:(flag:weakTagLevel+(flag:37FItemlevel<3?flag:37FItemlevel:4)+flag:PotionLessValue+flag:PotionLessRate+flag:SuperSteelKeyInvalid+flag:F51promote+flag:F85promote+flag:Fm58promote)+flag:baseHard"
															}
														]
													},
													{
														"type": "choices",
														"text": "\t[附加难度：衰弱相关]\r[orange]当前总难度：${flag:realHard}/15\r\n原版中，多数在衰弱时触发的攻防扣减将在解衰时恢复\n如：退化、路障、NPC、剧情事件等。\n\n\r[#FF8080]难度Tag：请选择挑战项目\r\n\r[#80FF80]当前已选择：\r${['遵循原版','5以内扣减不可被衰弱避免','20以内扣减不可被衰弱避免','所有扣减不可被衰弱避免'][flag:weakTagLevel]}，+${flag:weakTagLevel}难",
														"choices": [
															{
																"text": "遵循原版[+0难]",
																"action": [
																	{
																		"type": "setValue",
																		"name": "flag:weakTagLevel",
																		"value": "0"
																	}
																]
															},
															{
																"text": "5以内扣减不可被衰弱避免[+1难]",
																"need": "flag:weakTagLevelUb>=1",
																"action": [
																	{
																		"type": "setValue",
																		"name": "flag:weakTagLevel",
																		"value": "1"
																	}
																]
															},
															{
																"text": "20以内扣减不可被衰弱避免[+2难]",
																"need": "flag:weakTagLevelUb>=2",
																"action": [
																	{
																		"type": "setValue",
																		"name": "flag:weakTagLevel",
																		"value": "2"
																	}
																]
															},
															{
																"text": "所有扣减不可被衰弱避免[+3难]",
																"color": [
																	255,
																	0,
																	255
																],
																"need": "flag:weakTagLevelUb>=3",
																"action": [
																	{
																		"type": "setValue",
																		"name": "flag:weakTagLevel",
																		"value": "3"
																	}
																]
															},
															{
																"text": "返回上一级",
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
										]
									},
									{
										"text": "37F宝物相关 (难度+${flag:noFixSevereBug? 0 : (flag:37FItemlevel<3?flag:37FItemlevel:4)})",
										"action": [
											{
												"type": "while",
												"condition": "1",
												"data": [
													{
														"type": "if",
														"condition": "(flag:realHard>=0)",
														"true": [
															{
																"type": "setValue",
																"name": "flag:realHard",
																"value": "flag:noFixSevereBug?0:(flag:weakTagLevel+(flag:37FItemlevel<3?flag:37FItemlevel:4)+flag:PotionLessValue+flag:PotionLessRate+flag:SuperSteelKeyInvalid+flag:F51promote+flag:F85promote+flag:Fm58promote)+flag:baseHard"
															}
														]
													},
													{
														"type": "choices",
														"text": "\t[附加难度：37F宝物相关]\r[orange]当前总难度：${flag:realHard}/15\r\n原版中，37F有12个高价值宝物可以全部获得\n\n\r[#FF8080]难度Tag：请选择挑战项目\r\n\r[#80FF80]当前已选择：\r${['遵循原版','至多只拾取6个宝物','至多只拾取3个宝物','至多只拾取1个宝物'][flag:37FItemlevel]}，+${flag:37FItemlevel<3?flag:37FItemlevel:4}难",
														"choices": [
															{
																"text": "遵循原版[+0难]",
																"action": [
																	{
																		"type": "setValue",
																		"name": "flag:37FItemlevel",
																		"value": "0"
																	}
																]
															},
															{
																"text": "至多只拾取6个宝物[+1难]",
																"need": "flag:37FItemlevelUb>=1",
																"action": [
																	{
																		"type": "setValue",
																		"name": "flag:37FItemlevel",
																		"value": "1"
																	}
																]
															},
															{
																"text": "至多只拾取3个宝物[+2难]",
																"need": "flag:37FItemlevelUb>=2",
																"action": [
																	{
																		"type": "setValue",
																		"name": "flag:37FItemlevel",
																		"value": "2"
																	}
																]
															},
															{
																"text": "至多只拾取1个宝物[+4难]",
																"color": [
																	255,
																	0,
																	255
																],
																"need": "flag:37FItemlevelUb>=3",
																"action": [
																	{
																		"type": "setValue",
																		"name": "flag:37FItemlevel",
																		"value": "3"
																	}
																]
															},
															{
																"text": "返回上一级",
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
										]
									},
									{
										"text": "血瓶宝物相关 (难度+${flag:noFixSevereBug? 0 : flag:PotionLessValue+flag:PotionLessRate+flag:SuperSteelKeyInvalid})",
										"action": [
											{
												"type": "while",
												"condition": "1",
												"data": [
													{
														"type": "if",
														"condition": "(flag:realHard>=0)",
														"true": [
															{
																"type": "setValue",
																"name": "flag:realHard",
																"value": "flag:noFixSevereBug?0:(flag:weakTagLevel+(flag:37FItemlevel<3?flag:37FItemlevel:4)+flag:PotionLessValue+flag:PotionLessRate+flag:SuperSteelKeyInvalid+flag:F51promote+flag:F85promote+flag:Fm58promote)+flag:baseHard"
															}
														]
													},
													{
														"type": "choices",
														"text": "\t[附加难度：血瓶宝物相关]\r[orange]当前总难度：${flag:realHard}/15\r\n相比于原版，血瓶宝物可以效果有更多限制。\n\r[#FF8080]\n难度Tag：每项+1难可叠加，请选择挑战项目\r\n\r[#80FF80]当前已选择：+${flag:PotionLessValue+flag:PotionLessRate+flag:SuperSteelKeyInvalid}难",
														"choices": [
															{
																"text": "85/-80F血瓶增益效果降低[ON]",
																"color": [
																	255,
																	215,
																	0,
																	1
																],
																"need": "flag:PotionLessValueDisabled!==1",
																"condition": "flag:PotionLessValue===1",
																"action": [
																	{
																		"type": "setValue",
																		"name": "flag:PotionLessValue",
																		"value": "0"
																	}
																]
															},
															{
																"text": "85/-80F血瓶增益效果降低[OFF]",
																"need": "flag:PotionLessValueDisabled!==1",
																"condition": "flag:PotionLessValue!==1",
																"action": [
																	{
																		"type": "setValue",
																		"name": "flag:PotionLessValue",
																		"value": "1"
																	}
																]
															},
															{
																"text": "紫血瓶效果*0.2,且部分不可拾取[ON]",
																"color": [
																	255,
																	215,
																	0,
																	1
																],
																"need": "flag:PotionLessRateHinted!==1",
																"condition": "flag:PotionLessRate===1",
																"action": [
																	{
																		"type": "setValue",
																		"name": "flag:PotionLessRate",
																		"value": "0"
																	}
																]
															},
															{
																"text": "紫血瓶效果*0.2,且部分不可拾取[OFF]",
																"need": "flag:PotionLessRateHinted!==1",
																"condition": "flag:PotionLessRate!==1",
																"action": [
																	{
																		"type": "setValue",
																		"name": "flag:PotionLessRate",
																		"value": "1"
																	}
																]
															},
															{
																"text": "万能铁门钥匙不再出现[ON]",
																"color": [
																	255,
																	215,
																	0,
																	1
																],
																"need": "flag:SuperSteelKeyAttained!==1",
																"condition": "flag:SuperSteelKeyInvalid===1",
																"action": [
																	{
																		"type": "setValue",
																		"name": "flag:SuperSteelKeyInvalid",
																		"value": "0"
																	},
																	{
																		"type": "hide",
																		"loc": [
																			[
																				4,
																				10
																			]
																		],
																		"floorId": "Treasure3"
																	}
																]
															},
															{
																"text": "万能铁门钥匙不再出现[OFF]",
																"need": "flag:SuperSteelKeyAttained!==1",
																"condition": "flag:SuperSteelKeyInvalid!==1",
																"action": [
																	{
																		"type": "setValue",
																		"name": "flag:SuperSteelKeyInvalid",
																		"value": "1"
																	},
																	{
																		"type": "show",
																		"loc": [
																			[
																				4,
																				10
																			]
																		],
																		"floorId": "Treasure3"
																	}
																]
															},
															{
																"text": "返回上一级",
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
										]
									},
									{
										"text": "敌方属性相关 (难度+${flag:noFixSevereBug? 0 : flag:F51promote+flag:F85promote+flag:Fm58promote})",
										"action": [
											{
												"type": "while",
												"condition": "1",
												"data": [
													{
														"type": "if",
														"condition": "(flag:realHard>=0)",
														"true": [
															{
																"type": "setValue",
																"name": "flag:realHard",
																"value": "flag:noFixSevereBug?0:(flag:weakTagLevel+(flag:37FItemlevel<3?flag:37FItemlevel:4)+flag:PotionLessValue+flag:PotionLessRate+flag:SuperSteelKeyInvalid+flag:F51promote+flag:F85promote+flag:Fm58promote)+flag:baseHard"
															}
														]
													},
													{
														"type": "choices",
														"text": "\t[附加难度：敌方属性相关]\r[orange]当前总难度：${flag:realHard}/15\r\n相比于原版，敌方属性可以更高。\n\r[#FF8080]\n难度Tag：每项+1难可叠加，请选择挑战项目\r\n\r[#80FF80]当前已选择：+${flag:F51promote+flag:F85promote+flag:Fm58promote}难",
														"choices": [
															{
																"text": "51F起非领袖敌人+15%命/15%攻[ON]",
																"color": [
																	255,
																	215,
																	0,
																	1
																],
																"need": "!core.hasVisitedFloor('MT51')",
																"condition": "flag:F51promote===1",
																"action": [
																	{
																		"type": "setValue",
																		"name": "flag:F51promote",
																		"value": "0"
																	}
																]
															},
															{
																"text": "51F起非领袖敌人+15%命/15%攻[OFF]",
																"need": "!core.hasVisitedFloor('MT51')",
																"condition": "flag:F51promote!==1",
																"action": [
																	{
																		"type": "setValue",
																		"name": "flag:F51promote",
																		"value": "1"
																	}
																]
															},
															{
																"text": "85F起非领袖敌人+10%命/25%伤害[ON]",
																"color": [
																	255,
																	215,
																	0,
																	1
																],
																"need": "!core.hasVisitedFloor('MT85')",
																"condition": "flag:F85promote===1",
																"action": [
																	{
																		"type": "setValue",
																		"name": "flag:F85promote",
																		"value": "0"
																	}
																]
															},
															{
																"text": "85F起非领袖敌人+10%命/25%伤害[OFF]",
																"need": "!core.hasVisitedFloor('MT85')",
																"condition": "flag:F85promote!==1",
																"action": [
																	{
																		"type": "setValue",
																		"name": "flag:F85promote",
																		"value": "1"
																	}
																]
															},
															{
																"text": "-58F起非领袖敌人+20%命/20%攻[ON]",
																"color": [
																	255,
																	215,
																	0,
																	1
																],
																"need": "!core.hasVisitedFloor('MTn58')",
																"condition": "flag:Fm58promote===1",
																"action": [
																	{
																		"type": "setValue",
																		"name": "flag:Fm58promote",
																		"value": "0"
																	}
																]
															},
															{
																"text": "-58F起非领袖敌人+20%命/20%攻[OFF]",
																"need": "!core.hasVisitedFloor('MTn58')",
																"condition": "flag:Fm58promote!==1",
																"action": [
																	{
																		"type": "setValue",
																		"name": "flag:Fm58promote",
																		"value": "1"
																	}
																]
															},
															{
																"text": "返回上一级",
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
										]
									},
									{
										"text": "完成配置",
										"color": [
											64,
											255,
											64,
											1
										],
										"action": [
											{
												"type": "playSound",
												"name": "confirm.mp3"
											},
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
				]
			}
		],
		"结局处理": [
			{
				"type": "setText",
				"time": 50
			},
			{
				"type": "pauseBgm"
			},
			{
				"type": "playSound",
				"name": "157-Skill01.ogg",
				"stop": true,
				"pitch": 70
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
				"type": "switch",
				"condition": "flag:arg1",
				"caseList": [
					{
						"case": "\"结局2\"",
						"action": [
							"\r[#8080FF]结局二：中毒\n勇士因为未注意自己，使自己中毒身亡了。国家也因没了勇士，最终灭亡了......"
						]
					},
					{
						"case": "\"结局3\"",
						"action": [
							"\r[#80FF80]结局三：逃跑\n勇士逃了回来，虽然任务未完，但是人们并不责怪，新的勇士又进去了......"
						]
					},
					{
						"case": "\"结局4\"",
						"action": [
							"\r[#8080FF]结局四：失魂落魄\n勇士离开了了魔塔，但是魔塔和国家再也没看见勇士。发生了什么事情？谁也不知道......"
						]
					},
					{
						"case": "\"结局5\"",
						"action": [
							"\r[#80FF80]结局五：失魂落魄\n勇士离开了了魔塔，但是魔塔和国家再也没看见勇士。发生了什么事情？谁也不知道......"
						]
					},
					{
						"case": "\"结局6\"",
						"action": [
							"\r[#8080FF]结局六：跌落\n勇士终究没有成功，不小心失足跌落到了时空里，从此，没有了勇士，也没了国家......"
						]
					},
					{
						"case": "\"结局7\"",
						"action": [
							"\r[#8080FF]结局七：奈落\n勇士成了魔王的手下，帮助魔王一起毁灭了自己的国家，魔塔重新耸立起来，变得强盛了......"
						]
					},
					{
						"case": "\"结局8\"",
						"action": [
							"\r[#FF8080]结局八：灭亡\n勇士带着公主回去了,但是勇士忘了救出国王。在勇士再去魔塔的时候,国家不知不觉的灭亡了.....\n发生了什么？谁也不知道。",
							"\r[#FF8080]在勇士又奔赴国家的时候，国家已经是废墟了。奇怪的是，公主也不见了，魔塔也不见了，一切想梦一样的过去了，勇士又奔赴到了别的国家，不过那些国家也已经成了废虚......",
							"\r[#FF8080]魔塔呢？国家呢？公主呢？\n或许，勇士忽略了一个地方......"
						]
					},
					{
						"case": "\"结局9\"",
						"action": [
							"\r[#80FFFF]结局九：东窗事发\n勇士奔回了魔塔，可是剩下的只是废墟而已......\n在勇士又赶回国家时，国家也只是废墟而已......\n坏的角色真的永胜么？",
							"\r[#80FFFF]总之，世界上在这一刻又少了个英雄......."
						]
					},
					{
						"case": "default",
						"action": [
							"\r[#8080FF]结局一：失败\n勇士和其他勇士一样，也再也没回到国家。一切都是那样平静，像没发生一样......"
						]
					}
				]
			},
			{
				"type": "function",
				"function": "function(){\ncore.status.gameOver = true;\ncore.events.eventdata.lose(core.getStatus(\"arg1\", \"结局1\"));\n}"
			}
		]
	}
}