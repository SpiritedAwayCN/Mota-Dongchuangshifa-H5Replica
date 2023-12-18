var events_c12a15a8_c380_4b28_8144_256cba95f760 = 
{
	"commonEvent": {
		"加点事件": [
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
			}
		],
		"回收钥匙商店": [
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
								"need": "core.hasItem(\"redKey\")",
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
												"need": "item:redPotion>0",
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
												"need": "item:bluePotion>0",
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
												"need": "item:yellowPotion>0",
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
												"need": "item:greenPotion>0",
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
							}
						]
					}
				]
			}
		],
		"OtherShops": [
			{
				"type": "switch",
				"condition": "flag:arg1",
				"caseList": [
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
										"type": "choices",
										"text": "\t[金币商店,N446]本商店仅供\\i[N331]使用！\n花${20+7*flag:Fm3m4Shop}枚金币，您可以：",
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
												"need": "status:money>=20+7*flag:Fm3m4Shop",
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
														"value": "20+7*flag:Fm3m4Shop"
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
												"need": "status:money>=20+7*flag:Fm3m4Shop",
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
														"value": "20+7*flag:Fm3m4Shop"
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
												"need": "status:money>=20+7*flag:Fm3m4Shop",
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
														"value": "20+7*flag:Fm3m4Shop"
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
												"need": "status:money>=20+7*flag:Fm3m4Shop",
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
														"value": "20+7*flag:Fm3m4Shop"
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
												"need": "status:money>=20+7*flag:Fm3m4Shop",
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
														"value": "20+7*flag:Fm3m4Shop"
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
												"need": "status:money>=20+7*flag:Fm3m4Shop",
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
														"value": "20+7*flag:Fm3m4Shop"
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
										"text": "\t[老人,man]本商店需当面购买！\n600点经验，可以同时提升所有角色。\n购买扣除所有玩家600经验，\n但当前角色经验足够即可购买。",
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
										"text": "\t[老人,man]本商店需当面购买！\n700点经验，可以同时提升所有角色。\n购买扣除所有玩家700经验，\n但当前角色经验足够即可购买。",
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
										"text": "\t[商人,trader]只要有足够的经验，你就可以交换。\n为当前角色增加：",
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
					}
				]
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
		"攻防降低处理": []
	}
}