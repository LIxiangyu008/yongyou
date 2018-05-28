$(function(){
	var header = '<div class="container">'+
			'<div class="headers">'+
			'<div class="header-left pull-left">'+
				'<a class="yongyou-logo" href="http://www.yonyou.com/index.html?t=0.3137281661701088" title="用友"><img src="http://www.yonyou.com/static/images/logo.png"/></a>'+
			'</div>'+
			'<div class="header-right pull-right">'+
				'<span class="opens active"><i class="fa fa-comments-o"></i></span>'+
				'<button type="button" class="navbar-toggle">'+
		            '<span class="icon-bar"></span>'+
		            '<span class="icon-bar"></span>'+
		            '<span class="icon-bar"></span>'+
		        '</button>'+
			'</div>'+
			'<nav>'+
				'<ul class="menu list-unstyled list-inline">'+
					'<li dataNav="product"><a title="产品">产品</a></li>'+
					'<li dataNav="industry"><a title="行业">行业</a></li>'+
					'<li dataNav="service"><a title="云服务">云服务</a></li>'+
					'<li dataNav="finance"><a title="金融">金融</a></li>'+
					'<li dataNav="software"><a title="软件">软件</a></li>'+
					'<li dataNav="organize"><a title="生态伙伴">生态伙伴</a></li>'+
//					'<li dataNav="community"><a title="社区">社区</a></li>'+
					'<li dataNav="about"><a title="关于用友">关于用友</a></li>'+
				'</ul>'+
			'</nav>'+
		'</div>'+
		'</div>'+
		'<div class="menulist">'+
					'<div class="list" id="product" dataNav="product">'+
						'<div class="container">'+
						'<ul class="main main-one">'+
							'<li><h3>云服务</h3>'+
								'<ul class="row">'+
									'<li class="col-md-2 col-sm-2 col-xs-2"><b title="领域云">领域云</b>'+
										'<a title="营销服务" target="_blank" href="https://www.yonyoucloud.com/cloud_sales.html">用友云 | 营销服务</a>'+
										'<a title="采购服务" target="_blank" href="https://www.yonyoucloud.com/cloud_buy.html">用友云 | 采购服务</a>'+
										'<a title="协同服务" target="_blank" href="https://www.yonyoucloud.com/cloud_assist.html">用友云 | 协同服务</a>'+
										'<a title="财务服务" target="_blank" href="https://www.yonyoucloud.com/cloud_finance.html">用友云 | 财务服务</a>'+
										'<a title="人力服务" target="_blank" href="https://www.yonyoucloud.com/cloud_hr.html">用友云 | 人力服务</a>'+
										'<a title="工程服务" target="_blank" href="https://www.yonyoucloud.com/cloud_project.html">用友云 | 工程服务</a>'+
										'<a title="分析服务" target="_blank" href="https://www.yonyoucloud.com/cloud_analysis.html">用友云 | 分析服务</a>'+
										'<a title="U8 cloud" target="_blank" href="https://www.yonyoucloud.com/cloud_u8.html">U8 cloud</a>'+
										'<a title="税务服务" target="_blank" href="https://www.yonyoucloud.com/cloud_ebill.html">用友云 | 税务服务</a>'+
										'<a title="通信服务" target="_blank" href="https://www.yonyoucloud.com/cloud_connect.html">用友云 | 通信服务</a>'+
									'</li>'+
									'<li class="col-md-2 col-sm-2 col-xs-2"><b title="行业云">行业云</b>'+
										'<a title="用友建筑云" target="_blank" href="http://cc.yonyoucloud.com">用友建筑云</a>'+
										'<a title="用友金融云" target="_blank" href="http://www.yonyoufintech.com">用友金融云</a>'+
										'<a title="用友能源云" target="_blank" href="http://yonyouny.com/">用友能源云</a>'+
										'<a title="精智 工业互联网平台" target="_blank" href="https://jingzhi.yonyoucloud.com/">精智 工业互联网平台</a>'+
										'<a title="用友汽车云" target="_blank" href="http://auto.yonyou.com/IT_Solutions/zhengche/IT_zhengche-index.html">用友汽车云</a>'+
										'<a title="用友教育云" target="_blank" href="http://www.seentao.com/Solution/index">用友教育云</a>'+
										'<a title="用友医疗云" target="_blank" href="http://www.yonyouhit.com">用友医疗云</a>'+
										'<a title="用友烟草云" target="_blank" href="http://www.uf-tobacco.com/plan_list.html?name=all">用友烟草云</a>'+
									'</li>'+
									'<li class="col-md-2 col-sm-2 col-xs-2"><b title="云平台">云平台</b>'+
										'<a title"应用平台" target="_blank" href="https://euc.yonyoucloud.com/cas/login?sysid=aps&service=https%3A%2F%2Fapcenter.yonyoucloud.com%2Fapptenant">应用中心</a>'+
										'<a title"UDN社区" target="_blank" href="http://udn.yyuap.com/">UDN社区</a>'+
										'<a title"开发者中心" target="_blank" href="https://euc.yonyoucloud.com/cas/login?sysid=developer&service=https%3A%2F%2Fdeveloper.yonyoucloud.com%3A443%2Fportal%2Fsso%2Flogin.jsp%3Fr%3DL3BvcnRhbC8">开发者中心</a>'+
									'</li>'+
									'<li class="col-md-2 col-sm-2 col-xs-2"><b title="企业金融云">企业金融云</b>'+
										'<a title="畅捷支付" target="_blank" href="http://chanpay.com/">畅捷支付</a>'+
										'<a title="用友供应链金融" target="_blank" href="https://scf.yonyou.com">用友供应链金融</a>'+
										'<a title="银企联云服务" target="_blank" href="http://chanpay.com/site/pages/yin.html">银企联云服务</a>'+
										'<a title="企业理财" target="_blank" href="http://www.yygold.com/">企业理财</a>'+
									'</li>'+
									'<li class="col-md-2 col-sm-2 col-xs-2"><b title="小微企业云">小微企业云</b>'+
										'<a title="小微企业云财务" target="_blank" href="https://www.chanjet.com/hkj">小微企业云财务</a>'+
										'<a title="云管理" target="_blank" href="http://software.chanjet.com/rj-Tg.html">云管理</a>'+
										'<a title="云协同" target="_blank" href="https://www.chanjet.com/gzq">云协同</a>'+
									'</li>'+
									'<li class="col-md-2 col-sm-2 col-xs-2"><b title="云市场">云市场</b>'+
										'<a title="云市场" target="_blank" href="https://market.yonyoucloud.com/">云市场</a>'+
									'</li>'+
								'</ul>'+
							'</li>'+
							'<li><h3>软件</h3>'+
								'<ul class="row">'+
							'<li class="col-md-2 col-sm-2 col-xs-2"><b title="面向大型企业">面向大型企业</b>'+
							'<a title="大型企业管理与电子商务平台" target="_blank" href="http://nc.yonyou.com/product.php?id=4">用友NC6</a>'+
							'<a title="多组织企业互联网应用平台" target="_blank" href="http://nc.yonyou.com/product.php?id=5">用友U9</a>'+
							'<a title="智能工厂" target="_blank" href="http://nc.yonyou.com/product.php?id=6">用友智能工厂</a>'+
							'<a title="人力资本管理平台" target="_blank" href="http://nc.yonyou.com/product.php?id=7">用友HCM</a>'+
							'<a title="商业分析" target="_blank" href="http://bq.yonyou.com/bqweb/index.html">用友BQ</a>'+
							'<a title="智能IT服务管理解决方案" target="_blank" href="http://subject.yonyou.com/20130426/ism.html">iSM</a>'+
							'<a title="打通所有电商平台数据" target="_blank" href="http://www.dsclouds.com">电商通</a>'+
							'</li>'+
							'<li class="col-md-2 col-sm-3 col-xs-3"><b title="面向中型及成长型企业">面向中型及成长型企业</b>'+
							'<a title="成长型企业互联网应用平台" target="_blank" href="http://u8.yonyou.com/index.php/Home/Product/detail.html?id=18">用友U8+</a>'+
							'<a title="企业产品生命周期管理解决方案" target="_blank" href="http://u8.yonyou.com/index.php/Home/Product/detail.html?id=20">用友PLM</a>'+
							'<a title="企业客户关系管理解决方案" target="_blank" href="http://u8.yonyou.com/index.php/Home/Product/detail.html?id=19">用友CRM</a>'+
							'<a title="企业实时服务桌面" target="_blank" href="http://fwq.yonyou.com/up_service/index.php?r=up_shop/index">服务圈</a>'+
							'<a title="企业一体化营销服务平台" target="_blank" href="https://uhy.yonyoucloud.com/">U会员</a>'+
							'<a title="让企业生意快起来" target="_blank" href="https://udh.yonyoucloud.com/">U订货</a>'+
							'</li>'+
							'<li class="col-md-2 col-sm-2 col-xs-2"><b title="面向小微企业">面向小微企业</b>'+
							'<a title="畅捷通T+" target="_blank" href="http://software.chanjet.com/rj-Tg.html">畅捷通T+</a>'+
							'<a title="畅捷通T1" target="_blank" href="http://software.chanjet.com/rj-T1.html">畅捷通T1</a>'+
							'<a title="畅捷通T3" target="_blank" href="http://software.chanjet.com/rj-T3.html">畅捷通T3</a>'+
							'<a title="畅捷通T6" target="_blank" href="http://software.chanjet.com/rj-T6.html">畅捷通T6</a>'+
							'</li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><b title="行业">行业</b>'+
							'<div class="maincol6 col-md-6 col-sm-6 col-xs-6">'+
								'<a title="制造业" target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=3">制造业</a>'+
								'<a title="传媒.出版" target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=7">传媒.出版</a>'+
								'<a title="汽车" target="_blank" href="http://auto.yonyou.com/IT_Solutions/IT_index.html">汽车</a>'+
								'<a title="金融" target="_blank" href="http://www.yonyoufintech.com">金融</a>'+
								'<a title="烟草" target="_blank" href="http://www.uf-tobacco.com/plan_list.html?name=all">烟草</a>'+
								'<a title="消费" target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=6">消费品</a>'+
								'<a title="房地产" target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=8">房地产</a>'+
							'</div>'+
							'<div class="maincol6 col-md-6 col-sm-6 col-xs-6">'+
								'<a title="建筑" target="_blank" href="https://www.yonyouccs.com/icop-website/">建筑</a>'+
								'<a title="交通运输" target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=4">交通运输</a>'+
								'<a title="园区" target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=9">园区</a>'+
								'<a title="公用事业" target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=5">公用事业</a>'+
								'<a title="医疗卫生" target="_blank" href="http://www.yonyouhit.com/">医疗卫生</a>'+
								'<a title="医药.农业" target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=42">医药.农业</a>'+
								'<a title="能源" target="_blank" href="http://yonyouny.com/">能源</a>'+
							'</div>'+
							'</li>'+
							'<li class="col-md-3 col-sm-2 col-xs-2"><b title="领域">领域</b>'+
							'<div class="maincol4 col-md-4 col-sm-12 col-xs-12">'+
								'<a title="大数据" target="_blank" href="http://bq.yonyou.com/bqweb/index.html">大数据</a>'+
								'<a title="财务共享" target="_blank" href="http://nc.yonyou.com/project.php?stype=2&id=4">财务共享</a>'+
								'<a title="人力资本" target="_blank" href="http://nc.yonyou.com/project.php?stype=2&id=5">人力资本</a>'+
							'</div>'+
							'<div class="maincol4 col-md-4 col-sm-12 col-xs-12">'+
								'<a title="智能制造" target="_blank" href="http://nc.yonyou.com/project.php?stype=2&id=3">智能制造</a>'+
								'<a title="项目资产" target="_blank" href="http://nc.yonyou.com/project.php?stype=2&id=1">项目资产</a>'+
							'</div>'+
							'<div class="maincol4 col-md-4 col-sm-12 col-xs-12">'+
								'<a title="审计" target="_blank" href="http://www.yonyouaud.com/">审计</a>'+
								'<a title="数字营销" target="_blank" href="http://nc.yonyou.com/project.php?stype=2&id=6">数字营销</a>'+
							'</div>'+						
							'</li>'+
						'</ul>'+
							'</li>'+
							'<li><h3>金融</h3>'+
							'<ul class="row">'+
							'<li class="col-md-2 col-xs-2 col-sm-2">'+
							'<b title="个人">个人</b>'+
							'<a title="资金增值服务" target="_blank" href="https://www.yyfax.com/activity/activityDeploy/activity.html?id=299">资金增值服务</a>'+
							'<a title="立即体验高收益" target="_blank" href="https://www.yyfax.com/activity/activityDeploy/activity.html?id=299">立即体验高收益</a>'+
							'<a title="用友用户专享福利" target="_blank" href="https://www.yyfax.com/activity/activityDeploy/activity.html?id=299">用友用户专享福利</a>'+
							'</li>'+
							'<li class="col-md-2 col-xs-2 col-sm-2">'+
							'<b title="企业">企业</b>'+
							'<a title="支付结算" target="_blank" href="http://chanpay.com/site/pages/productCenter.html">支付结算</a>'+
							'<a title="银企联云服务" target="_blank" href="http://chanpay.com/site/pages/yin.html">银企联云服务</a>'+
							'<a title="用友供应链金融" target="_blank" href="https://www.yonyouscf.com/">用友供应链金融</a>'+
							'<a title="企业征信" target="_blank" href="http://chanpay.com/site/pages/authService.html">企业征信</a>'+
							'<a title="企业理财" target="_blank" href="http://www.yygold.com">企业理财</a>'+
							'</li>'+
							'</ul>'+
							'</li>'+
						'</ul>'+
						'</div>'+
					'</div>'+
					'<div class="list" id="industry" dataNav="industry">'+
						'<div class="container">'+
						'<ul class="main main-two row">'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a target="_blank" href="http://subject.yonyou.com/zt/jingzhi/">工业</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a target="_blank" href="http://cc.yonyoucloud.com">建筑</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a target="_blank" href="">审计</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a target="_blank" href="http://yonyouny.com/">能源</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=7">传媒出版</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a target="_blank" href="">交通运输</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a target="_blank" href="http://www.seentao.com/Solution/index">教育</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=8">房地产</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a target="_blank" href="http://auto.yonyou.com/IT_Solutions/zhengche/IT_zhengche-index.html">汽车</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=9">园区</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a target="_blank" href="http://www.honghuotai.com">餐饮</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=42">农业</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a target="_blank" href="http://www.yonyoufintech.com">金融</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=5">公共事业</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a target="_blank" href="">政务</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a target="_blank" href="">零售</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a target="_blank" href="http://www.uf-tobacco.com/plan_list.html?name=all">烟草</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a target="_blank" href="http://www.yonyouhit.com">卫生医疗</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a target="_blank" href="https://www.chanjet.com/hkj">小微企业</a></li>'+
						'</ul>'+
						'</div>'+
					'</div>'+
					'<div class="list" id="service" dataNav="service">'+
						'<div class="container">'+
						'<ul class="main main-three row">'+
							'<li class="col-md-2 col-sm-2 col-xs-2"><b title="领域云">领域云</b>'+
							'<a title="营销服务" target="_blank" href="https://www.yonyoucloud.com/cloud_sales.html">用友云 | 营销服务</a>'+
							'<a title="采购服务" target="_blank" href="https://www.yonyoucloud.com/cloud_buy.html">用友云 | 采购服务</a>'+
							'<a title="协同服务" target="_blank" href="https://www.yonyoucloud.com/cloud_assist.html">用友云 | 协同服务</a>'+
							'<a title="财务服务" target="_blank" href="https://www.yonyoucloud.com/cloud_finance.html">用友云 | 财务服务</a>'+
							'<a title="人力服务" target="_blank" href="https://www.yonyoucloud.com/cloud_hr.html">用友云 | 人力服务</a>'+
							'<a title="工程服务" target="_blank" href="https://www.yonyoucloud.com/cloud_project.html">用友云 | 工程服务</a>'+
							'<a title="分析服务" target="_blank" href="https://www.yonyoucloud.com/cloud_analysis.html">用友云 | 分析服务</a>'+
							'<a title="U8 cloud" target="_blank" href="https://www.yonyoucloud.com/cloud_u8.html">U8 cloud</a>'+
							'<a title="税务服务" target="_blank" href="https://www.yonyoucloud.com/cloud_ebill.html">用友云 | 税务服务</a>'+
							'<a title="通信服务" target="_blank" href="https://www.yonyoucloud.com/cloud_connect.html">用友云 | 通信服务</a>'+
							'</li>'+
							'<li class="col-md-2 col-sm-2 col-xs-2"><b title="行业云">行业云</b>'+
							'<a title="用友建筑云" target="_blank" href="http://cc.yonyoucloud.com">用友建筑云</a>'+
							'<a title="用友金融云" target="_blank" href="http://www.yonyoufintech.com">用友金融云</a>'+
							'<a title="用友能源云" target="_blank" href="http://yonyouny.com/">用友能源云</a>'+
							'<a title="精智 工业互联网平台" target="_blank" href="https://jingzhi.yonyoucloud.com/">精智 工业互联网平台</a>'+
							'<a title="用友汽车云" target="_blank" href="http://auto.yonyou.com/IT_Solutions/zhengche/IT_zhengche-index.html">用友汽车云</a>'+
							'<a title="用友教育云" target="_blank" href="http://www.seentao.com/Solution/index">用友教育云</a>'+
							'<a title="用友医疗云" target="_blank" href="http://www.yonyouhit.com">用友医疗云</a>'+
							'<a title="用友烟草云" target="_blank" href="http://www.uf-tobacco.com/plan_list.html?name=all">用友烟草云</a>'+
							'</li>'+
							'<li class="col-md-2 col-sm-2 col-xs-2"><b title="云平台">云平台</b>'+
							'<a title"应用平台" target="_blank" href="https://euc.yonyoucloud.com/cas/login?sysid=aps&service=https%3A%2F%2Fapcenter.yonyoucloud.com%2Fapptenant">应用中心</a>'+
							'<a title"UDN社区" target="_blank" href="http://udn.yyuap.com/">UDN社区</a>'+
							'<a title"开发者中心" target="_blank" href="https://euc.yonyoucloud.com/cas/login?sysid=developer&service=https%3A%2F%2Fdeveloper.yonyoucloud.com%3A443%2Fportal%2Fsso%2Flogin.jsp%3Fr%3DL3BvcnRhbC8">开发者中心</a>'+
							'</li>'+
							'<li class="col-md-2 col-sm-2 col-xs-2"><b title="企业金融云">企业金融云</b>'+
							'<a title="畅捷支付" target="_blank" href="http://chanpay.com/">畅捷支付</a>'+
							'<a title="用友供应链金融" target="_blank" href="https://scf.yonyou.com">用友供应链金融</a>'+
							'<a title="银企联云服务" target="_blank" href="http://chanpay.com/site/pages/yin.html">银企联云服务</a>'+
							'<a title="企业理财" target="_blank" href="http://www.yygold.com/">企业理财</a>'+
							'</li>'+
							'<li class="col-md-2 col-sm-2 col-xs-2"><b title="小微企业云">小微企业云</b>'+
							'<a title="小微企业云财务" target="_blank" href="https://www.chanjet.com/hkj">小微企业云财务</a>'+
							'<a title="云管理" target="_blank" href="http://software.chanjet.com/rj-Tg.html">云管理</a>'+
							'<a title="云协同" target="_blank" href="https://www.chanjet.com/gzq">云协同</a>'+
							'</li>'+
							'<li class="col-md-2 col-sm-2 col-xs-2"><b title="云市场">云市场</b>'+
							'<a title="云市场" target="_blank" href="https://market.yonyoucloud.com/">云市场</a>'+
							'</li>'+
						'</ul>'+
						'</div>'+
					'</div>'+
					'<div class="list" id="software" dataNav="software">'+
						'<div class="container">'+
						'<ul class="main main-four row">'+
							'<li class="col-md-2 col-sm-2 col-xs-2"><b title="面向大型企业">面向大型企业</b>'+
							'<a title="大型企业管理与电子商务平台" target="_blank" href="http://nc.yonyou.com/product.php?id=4">用友NC6</a>'+
							'<a title="多组织企业互联网应用平台" target="_blank" href="http://nc.yonyou.com/product.php?id=5">用友U9</a>'+
							'<a title="智能工厂" target="_blank" href="http://nc.yonyou.com/product.php?id=6">用友智能工厂</a>'+
							'<a title="人力资本管理平台" target="_blank" href="http://nc.yonyou.com/product.php?id=7">用友HCM</a>'+
							'<a title="商业分析" target="_blank" href="http://bq.yonyou.com/bqweb/index.html">用友BQ</a>'+
							'<a title="智能IT服务管理解决方案" target="_blank" href="http://subject.yonyou.com/20130426/ism.html">iSM</a>'+
							'<a title="打通所有电商平台数据" target="_blank" href="http://www.dsclouds.com">电商通</a>'+
							'</li>'+
							'<li class="col-md-2 col-sm-3 col-xs-3"><b title="面向中型及成长型企业">面向中型及成长型企业</b>'+
							'<a title="成长型企业互联网应用平台" target="_blank" href="http://u8.yonyou.com/index.php/Home/Product/detail.html?id=18">用友U8+</a>'+
							'<a title="企业产品生命周期管理解决方案" target="_blank" href="http://u8.yonyou.com/index.php/Home/Product/detail.html?id=20">用友PLM</a>'+
							'<a title="企业客户关系管理解决方案" target="_blank" href="http://u8.yonyou.com/index.php/Home/Product/detail.html?id=19">用友CRM</a>'+
							'<a title="企业实时服务桌面" target="_blank" href="http://fwq.yonyou.com/up_service/index.php?r=up_shop/index">服务圈</a>'+
							'<a title="企业一体化营销服务平台" target="_blank" href="https://uhy.yonyoucloud.com/">U会员</a>'+
							'<a title="让企业生意快起来" target="_blank" href="https://udh.yonyoucloud.com/">U订货</a>'+
							'</li>'+
							'<li class="col-md-2 col-sm-2 col-xs-2"><b title="面向小微企业">面向小微企业</b>'+
							'<a title="畅捷通T+" target="_blank" href="http://software.chanjet.com/rj-Tg.html">畅捷通T+</a>'+
							'<a title="畅捷通T1" target="_blank" href="http://software.chanjet.com/rj-T1.html">畅捷通T1</a>'+
							'<a title="畅捷通T3" target="_blank" href="http://software.chanjet.com/rj-T3.html">畅捷通T3</a>'+
							'<a title="畅捷通T6" target="_blank" href="http://software.chanjet.com/rj-T6.html">畅捷通T6</a>'+
							'</li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><b title="行业">行业</b>'+
							'<div class="maincol6 col-md-6 col-sm-6 col-xs-6">'+
								'<a title="制造业" target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=3">制造业</a>'+
								'<a title="传媒.出版" target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=7">传媒.出版</a>'+
								'<a title="汽车" target="_blank" href="http://auto.yonyou.com/IT_Solutions/IT_index.html">汽车</a>'+
								'<a title="金融" target="_blank" href="http://www.yonyoufintech.com">金融</a>'+
								'<a title="烟草" target="_blank" href="http://www.uf-tobacco.com/plan_list.html?name=all">烟草</a>'+
								'<a title="消费" target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=6">消费品</a>'+
								'<a title="房地产" target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=8">房地产</a>'+
							'</div>'+
							'<div class="maincol6 col-md-6 col-sm-6 col-xs-6">'+
								'<a title="建筑" target="_blank" href="https://www.yonyouccs.com/icop-website/">建筑</a>'+
								'<a title="交通运输" target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=4">交通运输</a>'+
								'<a title="园区" target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=9">园区</a>'+
								'<a title="公用事业" target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=5">公用事业</a>'+
								'<a title="医疗卫生" target="_blank" href="http://www.yonyouhit.com/">医疗卫生</a>'+
								'<a title="医药.农业" target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=42">医药.农业</a>'+
								'<a title="能源" target="_blank" href="http://yonyouny.com/">能源</a>'+
							'</div>'+
							'</li>'+
							'<li class="col-md-3 col-sm-2 col-xs-2"><b title="领域">领域</b>'+
							'<div class="maincol4 col-md-4 col-sm-12 col-xs-12">'+
								'<a title="大数据" target="_blank" href="http://bq.yonyou.com/bqweb/index.html">大数据</a>'+
								'<a title="财务共享" target="_blank" href="http://nc.yonyou.com/project.php?stype=2&id=4">财务共享</a>'+
								'<a title="人力资本" target="_blank" href="http://nc.yonyou.com/project.php?stype=2&id=5">人力资本</a>'+
							'</div>'+
							'<div class="maincol4 col-md-4 col-sm-12 col-xs-12">'+
								'<a title="智能制造" target="_blank" href="http://nc.yonyou.com/project.php?stype=2&id=3">智能制造</a>'+
								'<a title="项目资产" target="_blank" href="http://nc.yonyou.com/project.php?stype=2&id=1">项目资产</a>'+
							'</div>'+
							'<div class="maincol4 col-md-4 col-sm-12 col-xs-12">'+
								'<a title="审计" target="_blank" href="http://www.yonyouaud.com/">审计</a>'+
								'<a title="数字营销" target="_blank" href="http://nc.yonyou.com/project.php?stype=2&id=6">数字营销</a>'+
							'</div>'+						
							'</li>'+
						'</ul>'+
						'</div>'+
					'</div>'+
					'<div class="list" id="finance" dataNav="finance">'+
						'<div class="container">'+
						'<ul class="main main-five row">'+
						'<li class="col-md-2 col-xs-2 col-sm-2">'+
						'<b title="个人">个人</b>'+
						'<a title="资金增值服务" target="_blank" href="https://www.yyfax.com/activity/activityDeploy/activity.html?id=299">资金增值服务</a>'+
						'<a title="立即体验高收益" target="_blank" href="https://www.yyfax.com/activity/activityDeploy/activity.html?id=299">立即体验高收益</a>'+
						'<a title="用友用户专享福利" target="_blank" href="https://www.yyfax.com/activity/activityDeploy/activity.html?id=299">用友用户专享福利</a>'+
						'</li>'+
						'<li class="col-md-2 col-xs-2 col-sm-2">'+
						'<b title="企业">企业</b>'+
						'<a title="支付结算" target="_blank" href="http://chanpay.com/site/pages/productCenter.html">支付结算</a>'+
						'<a title="银企联云服务" target="_blank" href="http://chanpay.com/site/pages/yin.html">银企联云服务</a>'+
						'<a title="用友供应链金融" target="_blank" href="https://www.yonyouscf.com/">用友供应链金融</a>'+
						'<a title="企业征信" target="_blank" href="http://chanpay.com/site/pages/authService.html">企业征信</a>'+
						'<a title="企业理财" target="_blank" href="http://www.yygold.com">企业理财</a>'+
						'</li>'+
						'</ul>'+
						'</div>'+
					'</div>'+
					'<div class="list" id="organize" dataNav="organize">'+
						'<div class="container">'+
						'<ul class="main main-five row">'+
						'<li class="col-md-2 col-xs-2 col-sm-2">'+
						'<b title="鲲鹏合作伙伴计划">鲲鹏合作伙伴计划</b>'+
						'<a title="云市场入驻" target="_blank" href="https://www.yonyoucloud.com/cooperativeEcology.html">云市场入驻</a>'+
						'<a title="加入合作伙伴" target="_blank" href="https://www.yonyoucloud.com/cooperativeEcology.html">加入合作伙伴</a>'+
						'</li>'+
						'<li class="col-md-2 col-xs-2 col-sm-2">'+
						'<b title="获取产品演示">获取产品演示</b>'+
						'<a title="获取产品演示" target="_blank" href="https://www.yonyoucloud.com/cloud_form.html">获取产品演示</a>'+
						'</li>'+
						'</ul>'+
						'</div>'+
					'</div>'+
					'<div class="list" id="community" dataNav="community">'+
						'<div class="container">'+
						'<ul class="main main-seven row">'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">生态</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">设计</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">工业</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">设计</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">工业</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">设计</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">工业</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">设计</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">工业</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">设计</a></li>'+
						'</ul>'+
						'</div>'+
					'</div>'+
					'<div class="list" id="about" dataNav="about">'+
						'<div class="container">'+
						'<ul class="main main-eight row">'+
							'<li class="col-md-4 col-xs-4 col-sm-4"><a href="http://www.yonyou.com/yy/guanyu.html?id=0&v=0.0.3">公司介绍</a><a href="http://www.yonyou.com/yy/guanyu.html?id=3&v=0.0.3">公司领导</a><a href="http://www.yonyou.com/yy/guanyu.html?id=6&v=0.0.3">投资者关系</a></li>'+
							'<li class="col-md-4 col-xs-4 col-sm-4"><a href="http://www.yonyou.com/yy/guanyu.html?id=1&v=0.0.3">成员企业</a><a href="http://www.yonyou.com/yy/guanyu.html?id=4&v=0.0.3">用友荣誉</a><a href="http://www.yonyou.com/yy/guanyu.html?id=7&v=0.0.3">视觉用友</a></li>'+
							'<li class="col-md-4 col-xs-4 col-sm-4"><a href="http://www.yonyou.com/yy/guanyu.html?id=2&v=0.0.3">企业文化</a><a href="http://www.yonyou.com/yy/guanyu.html?id=5&v=0.0.3">用友大事记</a><a href="http://www.yonyou.com/yy/lianxiyonyou.html?v=0.0.10">联系用友</a></li>'+
						'</ul>'+
						'</div>'+
					'</div>'+
				'</div>'
	var samll = 
				'<div class="small-menuDiv" id="small-menuDiv">'+
				'<ul class="small-menu scrollable" id="aside">'+
					'<li dataNavs="product"><a class="faright" title="产品">产品</a></li>'+
					'<li dataNavs="industry"><a class="faright" title="行业">行业</a></li>'+
					'<li dataNavs="service"><a class="faright" title="云服务">云服务</a></li>'+
					'<li dataNavs="finance"><a class="faright" title="金融">金融</a></li>'+
					'<li dataNavs="software"><a class="faright" title="软件">软件</a></li>'+
					'<li dataNavs="organize"><a class="faright" title="生态伙伴">生态伙伴</a></li>'+
					'<li dataNavs="about"><a class="faright" title="关于用友">关于用友</a></li>'+
				'</ul>'+
				'</div>'+
				'<div class="samall-menulist">'+
					'<div class="list" id="product" dataNavs="product">'+
						'<ul class="main main-one">'+
							'<li class="mainOneli"><b><i class="fa fa-angle-left"></i>产品</b>'+
							'</li>'+
							'<li><a class="faright">云服务</a>'+
								'<div class="samall-menulists">'+
										'<ul class="main main-two">'+
										'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>云服务</b>'+
											'<li class="domainCloud"><a class="faright">领域云</a>'+
												'<div class="samall-menulists">'+
													'<ul class="main main-two">'+
														'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>领域云</b></li>'+
													'</ul>'+
												'</div>'+
											'</li>'+
											'<li class="industryCloud"><a class="faright">行业云</a>'+
												'<div class="samall-menulists">'+
													'<ul class="main main-two">'+
														'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>行业云</b></li>'+
													'</ul>'+
												'</div>'+
											'</li>'+
											'<li class="platformCloud"><a class="faright">云平台</a>'+
												'<div class="samall-menulists">'+
													'<ul class="main main-two">'+
														'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>云平台</b></li>'+
													'</ul>'+
												'</div>'+
											'</li>'+
											'<li class="financeCloud"><a class="faright">企业金融云</a>'+
												'<div class="samall-menulists">'+
													'<ul class="main main-two">'+
														'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>企业金融云</b></li>'+
													'</ul>'+
												'</div>'+
											'</li>'+
											'<li class="smallqy"><a class="faright">小微企业云</a>'+
												'<div class="samall-menulists">'+
													'<ul class="main main-two">'+
														'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>小微企业云</b></li>'+
													'</ul>'+
												'</div>'+
											'</li>'+
											'<li><a target="_blank" href="https://market.yonyoucloud.com/">云市场</a></li>'+
										'</ul>'+
								'</div>'+
							'</li>'+
							
							'<li><a class="faright">软件</a>'+
							'<div class="samall-menulists">'+
										'<ul class="main main-two">'+
										'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>软件</b>'+
											'<li class="largeqy"><a class="faright">面向大型企业</a>'+
												'<div class="samall-menulists">'+
													'<ul class="main main-two">'+
														'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>面向大型企业</b></li>'+
													'</ul>'+
												'</div>'+
											'</li>'+
											'<li class="mediumqy"><a class="faright">面向中型及成长型企业</a>'+
												'<div class="samall-menulists">'+
													'<ul class="main main-two">'+
														'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>面向中型及成长型企业</b></li>'+
													'</ul>'+
												'</div>'+
											'</li>'+
											'<li class="smallqys"><a class="faright">面向小微企业</a>'+
												'<div class="samall-menulists">'+
													'<ul class="main main-two">'+
														'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>面向小微企业</b></li>'+
													'</ul>'+
												'</div>'+
											'</li>'+
											'<li class="industrys"><a class="faright">行业</a>'+
												'<div class="samall-menulists">'+
													'<ul class="main main-two">'+
														'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>行业</b></li>'+		
													'</ul>'+
												'</div>'+
											'</li>'+
											'<li class="field"><a class="faright">领域</a>'+
												'<div class="samall-menulists">'+
													'<ul class="main main-two">'+
														'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>领域</b></li>'+
													'</ul>'+
												'</div>'+
											'</li>'+
											
										'</ul>'+
								'</div>'+
								
							'</li>'+
							
							'<li><a class="faright">金融</a>'+
								'<div class="samall-menulists">'+
										'<ul class="main main-two">'+
										'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>金融</b>'+
											'<li class="personal"><a class="faright">个人</a>'+
												'<div class="samall-menulists">'+
													'<ul class="main main-two">'+
														'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>个人</b></li>'+
													'</ul>'+
												'</div>'+
											'</li>'+
											'<li class="enterprise"><a class="faright">企业</a>'+
												'<div class="samall-menulists">'+
													'<ul class="main main-two">'+
														'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>企业</b></li>'+
													'</ul>'+
												'</div>'+
											'</li>'+
										'</ul>'+
								'</div>'+
							'</li>'+
						'</ul>'+
					'</div>'+
					'<div class="list" id="industry" dataNavs="industry">'+
						'<ul class="main main-two">'+
							'<li class="mainOneli"><b><i class="fa fa-angle-left"></i>行业</b></li>'+
							'<li><a href="http://subject.yonyou.com/zt/jingzhi/" target="_blank">工业</a></li>'+
							'<li><a href="https://www.yonyouccs.com/icop-website/" target="_blank">建筑</a></li>'+
							'<li><a href="http://www.yonyouaud.com/" target="_blank">审计</a></li>'+
							'<li><a href="http://yonyouny.com/" target="_blank">能源</a></li>'+
							'<li><a href="http://nc.yonyou.com/project.php?stype=1&id=7" target="_blank">传媒出版</a></li>'+
							'<li><a href="http://nc.yonyou.com/project.php?stype=1&id=4" target="_blank">交通运输</a></li>'+
							'<li><a href="http://www.seentao.com/Solution/index" target="_blank">教育</a></li>'+
							'<li><a href="http://nc.yonyou.com/project.php?stype=1&id=8" target="_blank">房地产</a></li>'+
							'<li><a href="http://nc.yonyou.com/project.php?stype=1&id=9" target="_blank">园区</a></li>'+
							'<li><a href="http://www.honghuotai.com" target="_blank">餐饮</a></li>'+
							'<li><a href="http://auto.yonyou.com/IT_Solutions/IT_index.html" target="_blank">汽车</a></li>'+
							'<li><a href="http://nc.yonyou.com/project.php?stype=1&id=42" target="_blank">农业</a></li>'+
							'<li><a href="http://www.yonyoufinancial.com/index.php?m=content&c=index&a=lists&catid=11" target="_blank">金融</a></li>'+
							'<li><a href="http://nc.yonyou.com/project.php?stype=1&id=5" target="_blank">公共事业</a></li>'+
							'<li><a href="" target="_blank">政务</a></li>'+
							'<li><a href="" target="_blank">零售</a></li>'+
							'<li><a href="https://www.uf-tobacco.com/plan_list.html?name=all" target="_blank">烟草</a></li>'+
							'<li><a href="http://www.yonyouhit.com/" target="_blank">卫生医疗</a></li>'+
							'<li><a href="http://h.chanjet.com/" target="_blank">小微企业</a></li>'+
						'</ul>'+
					'</div>'+
					'<div class="list" id="service" dataNavs="service">'+
						'<ul class="main main-three">'+
							'<li class="mainOneli"><b><i class="fa fa-angle-left"></i>云服务</b></li>'+
							'<li class="domainCloud"><a class="faright">领域云</a>'+
												'<div class="samall-menulists">'+
													'<ul class="main main-two">'+
														'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>领域云</b></li>'+
													'</ul>'+
												'</div>'+
											'</li>'+
											'<li class="industryCloud"><a class="faright">行业云</a>'+
												'<div class="samall-menulists">'+
													'<ul class="main main-two">'+
														'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>行业云</b></li>'+
													'</ul>'+
												'</div>'+
											'</li>'+
											'<li class="platformCloud"><a class="faright">云平台</a>'+
												'<div class="samall-menulists">'+
													'<ul class="main main-two">'+
														'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>云平台</b></li>'+
													'</ul>'+
												'</div>'+
											'</li>'+
											'<li class="financeCloud"><a class="faright">企业金融云</a>'+
												'<div class="samall-menulists">'+
													'<ul class="main main-two">'+
														'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>企业金融云</b></li>'+
													'</ul>'+
												'</div>'+
											'</li>'+
											'<li class="smallqy"><a class="faright">小微企业云</a>'+
												'<div class="samall-menulists">'+
													'<ul class="main main-two">'+
														'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>小微企业云</b></li>'+
													'</ul>'+
												'</div>'+
											'</li>'+
											'<li><a target="_blank" href="https://market.yonyoucloud.com/">云市场</a></li>'+
							'</li>'+
						'</ul>'+
					'</div>'+
					'<div class="list" id="finance" dataNavs="finance">'+
						'<ul class="main main-five">'+
							'<li class="mainOneli"><b><i class="fa fa-angle-left"></i>金融</b></li>'+
							'<li class="personal"><a class="faright">个人</a>'+
										'<div class="samall-menulists">'+
											'<ul class="main main-two">'+
												'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>个人</b></li>'+
											'</ul>'+
										'</div>'+
							'</li>'+
							'<li class="enterprise"><a class="faright">企业</a>'+
									'<div class="samall-menulists">'+
										'<ul class="main main-two">'+
											'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>企业</b></li>'+
										'</ul>'+
									'</div>'+
							'</li>'+
						'</ul>'+
					'</div>'+
					'<div class="list" id="software" dataNavs="software">'+
						'<ul class="main main-four">'+
							'<li class="mainOneli"><b><i class="fa fa-angle-left"></i>软件</b></li>'+
							'<li class="largeqy"><a class="faright">面向大型企业</a>'+
												'<div class="samall-menulists">'+
													'<ul class="main main-two">'+
														'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>面向大型企业</b></li>'+
													'</ul>'+
												'</div>'+
											'</li>'+
											'<li class="mediumqy"><a class="faright">面向中型及成长型企业</a>'+
												'<div class="samall-menulists">'+
													'<ul class="main main-two">'+
														'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>面向中型及成长型企业</b></li>'+
													'</ul>'+
												'</div>'+
											'</li>'+
											'<li class="smallqys"><a class="faright">面向小微企业</a>'+
												'<div class="samall-menulists">'+
													'<ul class="main main-two">'+
														'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>面向小微企业</b></li>'+
													'</ul>'+
												'</div>'+
											'</li>'+
											'<li class="industrys"><a class="faright">行业</a>'+
												'<div class="samall-menulists">'+
													'<ul class="main main-two">'+
														'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>行业</b></li>'+		
													'</ul>'+
												'</div>'+
											'</li>'+
											'<li class="field"><a class="faright">领域</a>'+
												'<div class="samall-menulists">'+
													'<ul class="main main-two">'+
														'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>领域</b></li>'+
													'</ul>'+
												'</div>'+
											'</li>'+
						'</ul>'+
					'</div>'+
					'<div class="list" id="organize" dataNavs="organize">'+
						'<ul class="main main-six">'+
							'<li class="mainOneli"><b><i class="fa fa-angle-left"></i>生态伙伴</b></li>'+
							'<li class="partner"><a class="faright">鲲鹏合作伙伴计划</a>'+
												'<div class="samall-menulists">'+
													'<ul class="main main-two">'+
														'<li class="mainOnelis"><b><i class="fa fa-angle-left"></i>鲲鹏合作伙伴计划</b></li>'+
													'</ul>'+
												'</div>'+
											'</li>'+
											'<li><a href="https://www.yonyoucloud.com/cloud_form.html" target="_blank">获取产品演示</a></li>'+
											
											
											
						'</ul>'+
					'</div>'+
					'<div class="list" id="about" dataNavs="about">'+
						'<ul class="main main-eight">'+
							'<li class="mainOneli"><b><i class="fa fa-angle-left"></i>关于用友</b></li>'+
							'<li><a href="http://www.yonyou.com/yy/guanyu.html?id=0&v=0.0.3">公司简介</a></li>'+
							'<li><a href="http://www.yonyou.com/yy/guanyu.html?id=1&v=0.0.3">成员企业</a></li>'+
							'<li><a href="http://www.yonyou.com/yy/guanyu.html?id=2&v=0.0.3">企业文化</a></li>'+
							'<li><a href="http://www.yonyou.com/yy/guanyu.html?id=3&v=0.0.3">公司领导</a></li>'+
							'<li><a href="http://www.yonyou.com/yy/guanyu.html?id=4&v=0.0.3">用友荣誉</a></li>'+
							'<li><a href="http://www.yonyou.com/yy/guanyu.html?id=5&v=0.0.3">用友大事记</a></li>'+
							'<li><a href="http://www.yonyou.com/yy/guanyu.html?id=6&v=0.0.3">投资者关系</a></li>'+
							'<li><a href="http://www.yonyou.com/yy/guanyu.html?id=7&v=0.0.3">视觉用友</a></li>'+
							'<li><a href="http://www.yonyou.com/yy/lianxiyonyou.html?v=0.0.10">联系用友</a></li>'+
						'</ul>'+
					'</div>'+
				'</div>'
	$("#headerjs").html(header);
	$("#samallList").html(samll);
})
