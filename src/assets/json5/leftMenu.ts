
const data = [
	{
		id: 53,
		url: '/monitor',
		title: '全局监控',
		parent: -1,
		type: 'menu',
		icon:'account-book',
		children: [
			{
				id: 54,
				url: '/monitor/index',
				title: '全局监控页面',
				parent: 53,
				type: 'page',
				children: []
			},
			{
				id: 55,
				url: '/monitor/indexPark',
				title: '园区详情',
				parent: 53,
				type: 'page',
				children: [
					{
						id: 94,
						url: 'monitorPutWork',
						title: '投入作业',
						parent: 55,
						type: 'button',
						children: []
					},
					{
						id: 95,
						url: 'monitorStopWork',
						title: '停止作业',
						parent: 55,
						type: 'button',
						children: []
					},
					{
						id: 182,
						url: 'openCamera',
						title: '摄像头',
						parent: 55,
						type: 'button',
						children: []
					}
				]
			}
		]
	},
	{
		id: 215,
		url: '/operationManage',
		title: '运营管理',
		parent: -1,
		type: 'menu',
		icon:'alert',
		children: [
			{
				id: 216,
				url: '/operationManage/index',
				title: '运营管理首页',
				parent: 215,
				type: 'page',
				children: [
					{
						id: 217,
						url: 'revenueManage',
						title: '营收管理',
						parent: 216,
						type: 'tab',
						children: [
							{
								id: 249,
								url: 'revenueManageToday',
								title: '营收管理今日统计',
								parent: 217,
								type: 'tab',
								children: [
									{
										id: 251,
										url: 'parkRevenueToday',
										title: '园区营收今日统计',
										parent: 249,
										type: 'tab',
										children: [
											{
												id: 253,
												url: 'parkRevenueToadyDetail',
												title: '营收详情',
												parent: 251,
												type: 'button',
												children: []
											}
										]
									},
									{
										id: 252,
										url: 'vehicleRevenueToday',
										title: '车辆营收今日统计',
										parent: 249,
										type: 'tab',
										children: [
											{
												id: 254,
												url: 'vehicleRevenueTodaydetail',
												title: '营收详情',
												parent: 252,
												type: 'button',
												children: []
											}
										]
									}
								]
							},
							{
								id: 250,
								url: 'revenueManageHistory',
								title: '营收管理历史统计',
								parent: 217,
								type: 'tab',
								children: [
									{
										id: 256,
										url: 'vehicleRevenueHistory',
										title: '车辆营收历史统计',
										parent: 250,
										type: 'tab',
										children: [
											{
												id: 258,
												url: 'vehicleRevenueHistoryDetail',
												title: '营收详情',
												parent: 256,
												type: 'button',
												children: []
											},
											{
												id: 260,
												url: 'vehicleRevenueExportHistory',
												title: '数据导出',
												parent: 256,
												type: 'button',
												children: []
											}
										]
									},
									{
										id: 255,
										url: 'parkRevenueHistory',
										title: '园区营收历史统计',
										parent: 250,
										type: 'tab',
										children: [
											{
												id: 257,
												url: 'parkRevenueHistoryDetail',
												title: '营收详情',
												parent: 255,
												type: 'button',
												children: []
											},
											{
												id: 259,
												url: 'parkRevenueHistoryExport',
												title: '数据导出',
												parent: 255,
												type: 'button',
												children: []
											}
										]
									}
								]
							}
						]
					},
					{
						id: 218,
						url: 'orderManage',
						title: '订单管理',
						parent: 216,
						type: 'tab',
						children: [
							{
								id: 261,
								url: 'cashOrder',
								title: '现金订单',
								parent: 218,
								type: 'tab',
								children: [
									{
										id: 262,
										url: 'completeAccount',
										title: '完成对账',
										parent: 261,
										type: 'button',
										children: []
									}
								]
							},
							{
								id: 240,
								url: 'parkOrder',
								title: '园区订单',
								parent: 218,
								type: 'tab',
								children: [
									{
										id: 242,
										url: 'parkOrderDoing',
										title: '执行中订单',
										parent: 240,
										type: 'tab',
										children: [
											{
												id: 245,
												url: 'parkOrderCheck',
												title: '上车验票',
												parent: 242,
												type: 'button',
												children: []
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
		id: 56,
		url: '/industry',
		title: '工业车',
		parent: -1,
		type: 'menu',
		icon:'api',
		children: [
			{
				id: 57,
				url: '/industry/index',
				title: '工业车页面',
				parent: 56,
				type: 'page',
				children: [
					{
						id: 58,
						url: 'industryOSStatistic',
						title: '运营统计',
						parent: 57,
						type: 'tab',
						children: [
							{
								id: 59,
								url: 'industryOSStatisticToday',
								title: '今日统计',
								parent: 58,
								type: 'tab',
								children: []
							},
							{
								id: 96,
								url: 'industryOSStatisticHistory',
								title: '历史统计',
								parent: 58,
								type: 'tab',
								children: [
									{
										id: 191,
										url: 'industryExportHistory',
										title: '数据导出',
										parent: 96,
										type: 'button',
										children: []
									}
								]
							}
						]
					},
					{
						id: 97,
						url: 'industryTask',
						title: '任务管理',
						parent: 57,
						type: 'tab',
						children: [
							{
								id: 98,
								url: 'industryTaskDoing',
								title: '执行中的任务',
								parent: 97,
								type: 'tab',
								children: []
							},
							{
								id: 99,
								url: 'industryTaskError',
								title: '异常任务',
								parent: 97,
								type: 'tab',
								children: []
							}
						]
					},
					{
						id: 68,
						url: 'industryVehicle',
						title: '车辆管理',
						parent: 57,
						type: 'tab',
						children: [
							{
								id: 100,
								url: 'industryVehicleAdd',
								title: '添加车辆',
								parent: 68,
								type: 'button',
								children: []
							},
							{
								id: 101,
								url: 'industryVehicleEdit',
								title: '编辑车辆',
								parent: 68,
								type: 'button',
								children: []
							},
							{
								id: 102,
								url: 'industryVehicleDelete',
								title: '删除车辆',
								parent: 68,
								type: 'button',
								children: []
							},
							{
								id: 103,
								url: 'industryVehiclePutWork',
								title: '投入作业',
								parent: 68,
								type: 'button',
								children: []
							},
							{
								id: 104,
								url: 'industryVehicleStopWork',
								title: '停止作业',
								parent: 68,
								type: 'button',
								children: []
							},
							{
								id: 105,
								url: 'industryVehicleArchives',
								title: '单车档案',
								parent: 68,
								type: 'button',
								children: [
									{
										id: 106,
										url: 'industryVehicleArchivesPutWork',
										title: '工业车单车投入作业',
										parent: 105,
										type: 'button',
										children: []
									},
									{
										id: 107,
										url: 'industryVehicleArchivesStopWork',
										title: '工业车单车停止作业',
										parent: 105,
										type: 'button',
										children: []
									},
									{
										id: 108,
										url: 'industryVehicleArchivesStart',
										title: '工业车单车开车',
										parent: 105,
										type: 'button',
										children: []
									},
									{
										id: 109,
										url: 'industryVehicleArchivesStop',
										title: '工业车单车停车',
										parent: 105,
										type: 'button',
										children: []
									},
									{
										id: 110,
										url: 'industryVehicleArchivesRemoteMonitor',
										title: '工业车单车远程监控',
										parent: 105,
										type: 'button',
										children: []
									},
									{
										id: 112,
										url: 'industryVehicleArchivesRemoteDrive',
										title: '工业车单车远程驾驶',
										parent: 105,
										type: 'button',
										children: []
									},
									{
										id: 186,
										url: 'industryArchivesShowMap',
										title: '工业车展示地图',
										parent: 105,
										type: 'button',
										children: []
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
		id: 60,
		url: '/shuttle',
		title: '观光车',
		parent: -1,
		type: 'menu',
		icon:'audio',
		children: [
			{
				id: 61,
				url: '/shuttle/index',
				title: '观光车页面',
				parent: 60,
				type: 'page',
				children: [
					{
						id: 118,
						url: 'shuttleOSStatistic',
						title: '运营统计',
						parent: 61,
						type: 'tab',
						children: [
							{
								id: 119,
								url: 'shuttleOSStatisticToday',
								title: '今日统计',
								parent: 118,
								type: 'tab',
								children: []
							},
							{
								id: 120,
								url: 'shuttleOSStatisticHistory',
								title: '历史统计',
								parent: 118,
								type: 'tab',
								children: [
									{
										id: 192,
										url: 'shuttleExportHistory',
										title: '数据导出',
										parent: 120,
										type: 'button',
										children: []
									}
								]
							}
						]
					},
					{
						id: 127,
						url: 'shuttleVehicle',
						title: '车辆管理',
						parent: 61,
						type: 'tab',
						children: [
							{
								id: 128,
								url: 'shuttleVehicleAdd',
								title: '添加车辆',
								parent: 127,
								type: 'button',
								children: []
							},
							{
								id: 129,
								url: 'shuttleVehicleEdit',
								title: '编辑车辆',
								parent: 127,
								type: 'button',
								children: []
							},
							{
								id: 130,
								url: 'shuttleVehicleDelete',
								title: '删除车辆',
								parent: 127,
								type: 'button',
								children: []
							},
							{
								id: 131,
								url: 'shuttleVehiclePutWork',
								title: '投入作业',
								parent: 127,
								type: 'button',
								children: []
							},
							{
								id: 132,
								url: 'shuttleVehicleStopWork',
								title: '停止作业',
								parent: 127,
								type: 'button',
								children: []
							},
							{
								id: 201,
								url: 'shuttleSwitchWorkModel',
								title: '切换作业模式',
								parent: 127,
								type: 'button',
								children: []
							},
							{
								id: 202,
								url: 'shuttleSwitchRoute',
								title: '切换线路',
								parent: 127,
								type: 'button',
								children: []
							},
							{
								id: 133,
								url: 'shuttleVehicleArchives',
								title: '单车档案',
								parent: 127,
								type: 'button',
								children: [
									{
										id: 134,
										url: 'shuttleVehicleArchivesSwitchRoute',
										title: '观光车单车切换路线',
										parent: 133,
										type: 'button',
										children: []
									},
									{
										id: 135,
										url: 'shuttleVehicleArchivesSwitchWorkModel',
										title: '观光车单车切换作业模式',
										parent: 133,
										type: 'button',
										children: []
									},
									{
										id: 136,
										url: 'shuttleVehicleArchivesPutWork',
										title: '观光车单车投入作业',
										parent: 133,
										type: 'button',
										children: []
									},
									{
										id: 137,
										url: 'shuttleVehicleArchivesStopWork',
										title: '观光车单车停止作业',
										parent: 133,
										type: 'button',
										children: []
									},
									{
										id: 138,
										url: 'shuttleVehicleArchivesStart',
										title: '观光车单车开车',
										parent: 133,
										type: 'button',
										children: []
									},
									{
										id: 139,
										url: 'shuttleVehicleArchivesStop',
										title: '观光车单车停车',
										parent: 133,
										type: 'button',
										children: []
									},
									{
										id: 140,
										url: 'shuttleVehicleArchivesRemoteMonitor',
										title: '观光车单车远程监控',
										parent: 133,
										type: 'button',
										children: []
									},
									{
										id: 185,
										url: 'shuttleArchivesShowMap',
										title: '观光车展示地图',
										parent: 133,
										type: 'button',
										children: []
									},
									{
										id: 142,
										url: 'shuttleVehicleArchivesRemoteDrive',
										title: '观光车单车远程驾驶',
										parent: 133,
										type: 'button',
										children: []
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
		id: 64,
		url: '/clean',
		title: '清扫车',
		parent: -1,
		type: 'menu',
		icon:'bell',
		children: [
			{
				id: 148,
				url: '/clean/index',
				title: '清扫车页面',
				parent: 64,
				type: 'page',
				children: [
					{
						id: 149,
						url: 'cleanOSStatistic',
						title: '运营统计',
						parent: 148,
						type: 'tab',
						children: [
							{
								id: 150,
								url: 'cleanOSStatisticToday',
								title: '今日统计',
								parent: 149,
								type: 'tab',
								children: []
							},
							{
								id: 151,
								url: 'cleanOSStatisticHistory',
								title: '历史统计',
								parent: 149,
								type: 'tab',
								children: [
									{
										id: 193,
										url: 'cleanExportHistory',
										title: '数据导出',
										parent: 151,
										type: 'button',
										children: []
									}
								]
							}
						]
					},
					{
						id: 152,
						url: 'cleanVehicle',
						title: '车辆管理',
						parent: 148,
						type: 'tab',
						children: [
							{
								id: 153,
								url: 'cleanVehicleAdd',
								title: '添加车辆',
								parent: 152,
								type: 'button',
								children: []
							},
							{
								id: 154,
								url: 'cleanVehicleEdit',
								title: '编辑车辆',
								parent: 152,
								type: 'button',
								children: []
							},
							{
								id: 155,
								url: 'cleanVehicleDelete',
								title: '删除车辆',
								parent: 152,
								type: 'button',
								children: []
							},
							{
								id: 156,
								url: 'cleanVehicleArchives',
								title: '单车档案',
								parent: 152,
								type: 'button',
								children: [
									{
										id: 184,
										url: 'cleanArchivesShowMap',
										title: '清扫车展示地图',
										parent: 156,
										type: 'button',
										children: []
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
		id: 65,
		url: '/security',
		title: '安防车',
		parent: -1,
		type: 'menu',
		icon:'bug',
		children: [
			{
				id: 157,
				url: '/security/index',
				title: '安防车页面',
				parent: 65,
				type: 'page',
				children: [
					{
						id: 158,
						url: 'securityTask',
						title: '任务管理',
						parent: 157,
						type: 'tab',
						children: [
							{
								id: 159,
								url: 'securityTaskDoing',
								title: '执行中任务',
								parent: 158,
								type: 'tab',
								children: []
							},
							{
								id: 160,
								url: 'securityTaskError',
								title: '异常任务',
								parent: 158,
								type: 'tab',
								children: []
							}
						]
					}
				]
			}
		]
	},
	{
		id: 66,
		url: '/remote',
		title: '人机共驾',
		parent: -1,
		type: 'menu',
		icon:'bulb',
		children: [
			{
				id: 161,
				url: '/remote/index',
				title: '人机共驾',
				parent: 66,
				type: 'page',
				children: [
					{
						id: 162,
						url: 'remoteMonitor',
						title: '远程监控',
						parent: 161,
						type: 'button',
						children: []
					},
					{
						id: 165,
						url: 'remoteDrive',
						title: '远程驾驶',
						parent: 161,
						type: 'button',
						children: []
					},
					{
						id: 183,
						url: 'remotePutWork',
						title: '人机共驾投入作业',
						parent: 161,
						type: 'button',
						children: []
					}
				]
			}
		]
	},
	{
		id: 62,
		url: '/info',
		title: '基础数据',
		parent: -1,
		type: 'menu',
		icon:'build',
		children: [
			{
				id: 166,
				url: '/info/index',
				title: '基础数据页面',
				parent: 62,
				type: 'page',
				children: [
					{
						id: 167,
						url: 'parkManage',
						title: '园区管理',
						parent: 166,
						type: 'tab',
						children: [
							{
								id: 168,
								url: 'park',
								title: '园区',
								parent: 167,
								type: 'tab',
								children: [
									{
										id: 169,
										url: 'parkAdd',
										title: '添加园区',
										parent: 168,
										type: 'button',
										children: []
									},
									{
										id: 170,
										url: 'parkEdit',
										title: '编辑园区',
										parent: 168,
										type: 'button',
										children: []
									},
									{
										id: 171,
										url: 'parkDelete',
										title: '删除园区',
										parent: 168,
										type: 'button',
										children: []
									},
									{
										id: 172,
										url: 'parkOS',
										title: '运营停止与恢复',
										parent: 168,
										type: 'button',
										children: []
									},
									{
										id: 187,
										url: 'showParkMap',
										title: '查看园区地图',
										parent: 168,
										type: 'button',
										children: []
									}
								]
							},
							{
								id: 173,
								url: 'map',
								title: '地图',
								parent: 167,
								type: 'tab',
								children: [
									{
										id: 174,
										url: 'mapEdit',
										title: '编辑地图',
										parent: 173,
										type: 'button',
										children: []
									},
									{
										id: 175,
										url: 'routeAdd',
										title: '添加路线',
										parent: 173,
										type: 'button',
										children: []
									},
									{
										id: 176,
										url: 'routeEdit',
										title: '编辑路线',
										parent: 173,
										type: 'button',
										children: []
									},
									{
										id: 177,
										url: 'routeDelete',
										title: '删除路线',
										parent: 173,
										type: 'button',
										children: []
									},
									{
										id: 178,
										url: 'crossAdd',
										title: '添加路口',
										parent: 173,
										type: 'button',
										children: []
									},
									{
										id: 179,
										url: 'crossEdit',
										title: '编辑路口',
										parent: 173,
										type: 'button',
										children: []
									},
									{
										id: 180,
										url: 'crossDelete',
										title: '删除路口',
										parent: 173,
										type: 'button',
										children: []
									},
									{
										id: 203,
										url: 'editStation',
										title: '编辑站点',
										parent: 173,
										type: 'button',
										children: []
									},
									{
										id: 204,
										url: 'deleteStation',
										title: '删除站点',
										parent: 173,
										type: 'button',
										children: []
									},
									{
										id: 205,
										url: 'addStation',
										title: '添加站点',
										parent: 173,
										type: 'button',
										children: []
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

export default data