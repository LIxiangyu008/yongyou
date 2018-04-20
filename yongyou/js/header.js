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
					'<li dataNav="software"><a title="软件">软件</a></li>'+
					'<li dataNav="finance"><a title="金融">金融</a></li>'+
					'<li dataNav="organize"><a title="生态伙伴">生态伙伴</a></li>'+
					'<li dataNav="community"><a title="社区">社区</a></li>'+
					'<li dataNav="about"><a title="关于用友">关于用友</a></li>'+
				'</ul>'+
				'<ul class="small-menu">'+
					'<li dataNavs="product"><a title="产品">产品<i class="fa fa-angle-right"></i></a></li>'+
					'<li dataNavs="industry"><a title="行业">行业<i class="fa fa-angle-right"></i></a></li>'+
					'<li dataNavs="service"><a title="云服务">云服务<i class="fa fa-angle-right"></i></a></li>'+
					'<li dataNavs="software"><a title="软件">软件<i class="fa fa-angle-right"></i></a></li>'+
					'<li dataNavs="finance"><a title="金融">金融<i class="fa fa-angle-right"></i></a></li>'+
					'<li dataNavs="organize"><a title="生态伙伴">生态伙伴<i class="fa fa-angle-right"></i></a></li>'+
					'<li dataNavs="community"><a title="社区">社区<i class="fa fa-angle-right"></i></a></li>'+
					'<li dataNavs="about"><a title="关于用友">关于用友<i class="fa fa-angle-right"></i></a></li>'+
				'</ul>'+
			'</nav>'+
		'</div>'+
		'</div>'+
		'<div class="menulist">'+
					'<div class="list" id="product" dataNav="product">'+
						'<div class="container">'+
						'<ul class="main main-one row">'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">工业</a></li>'+
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
					'<div class="list" id="industry" dataNav="industry">'+
						'<div class="container">'+
						'<ul class="main main-two row">'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">工业</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">建筑</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">审计</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">能源</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">传媒出版</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">交通运输</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">教育</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">房地产</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">汽车</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">园区</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">餐饮</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">农业</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">金融</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">公共事业</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">政务</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">零售</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">烟草</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">卫生医疗</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">小微企业</a></li>'+
						'</ul>'+
						'</div>'+
					'</div>'+
					'<div class="list" id="service" dataNav="service">'+
						'<div class="container">'+
						'<ul class="main main-three row">'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">工业</a></li>'+
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
					'<div class="list" id="software" dataNav="software">'+
						'<div class="container">'+
						'<ul class="main main-four row">'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">工业</a></li>'+
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
					'<div class="list" id="finance" dataNav="finance">'+
						'<div class="container">'+
						'<ul class="main main-five row">'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">工业</a></li>'+
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
					'<div class="list" id="organize" dataNav="organize">'+
						'<div class="container">'+
						'<ul class="main main-six row">'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">工业</a></li>'+
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
					'<div class="list" id="community" dataNav="community">'+
						'<div class="container">'+
						'<ul class="main main-seven row">'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">工业</a></li>'+
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
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">公司简介</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">成员企业</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">企业文化</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">公司领导</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">用友荣誉</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">用友大事记</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">投资者关系</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">视觉用友</a></li>'+
							'<li class="col-md-3 col-sm-3 col-xs-3"><a href="">联系用友</a></li>'+
						'</ul>'+
						'</div>'+
					'</div>'+
				'</div>'+
				'<div class="samall-menulist">'+
					'<div class="list" id="product" dataNavs="product">'+
						'<ul class="main main-one">'+
							'<li class="mainOneli"><b><i class="fa fa-angle-left"></i>产品</b></li>'+
							'<li><a href="">产品</a></li>'+
							'<li><a href="">设计</a></li>'+
							'<li><a href="">工业</a></li>'+
							'<li><a href="">设计</a></li>'+
							'<li><a href="">工业</a></li>'+
							'<li><a href="">设计</a></li>'+
							'<li><a href="">设计</a></li>'+
							'<li><a href="">工业</a></li>	'+
							'<li><a href="">工业</a></li>'+
							'<li><a href="">设计</a></li>'+
						'</ul>'+
					'</div>'+
					'<div class="list" id="industry" dataNavs="industry">'+
						'<ul class="main main-two">'+
							'<li class="mainOneli"><b><i class="fa fa-angle-left"></i>工业</b></li>'+
							'<li><a href="">工业</a></li>'+
							'<li><a href="">建筑</a></li>'+
							'<li><a href="">审计</a></li>'+
							'<li><a href="">能源</a></li>'+
							'<li><a href="">传媒出版</a></li>'+
							'<li><a href="">交通运输</a></li>'+
							'<li><a href="">教育</a></li>'+
							'<li><a href="">房地产</a></li>'+
							'<li><a href="">园区</a></li>'+
							'<li><a href="">餐饮</a></li>'+
							'<li><a href="">汽车</a></li>'+
							'<li><a href="">农业</a></li>'+
							'<li><a href="">金融</a></li>'+
							'<li><a href="">公共事业</a></li>'+
							'<li><a href="">政务</a></li>'+
							'<li><a href="">零售</a></li>'+
							'<li><a href="">烟草</a></li>'+
							'<li><a href="">卫生医疗</a></li>'+
							'<li><a href="">小微企业</a></li>'+
						'</ul>'+
					'</div>'+
					'<div class="list" id="service" dataNavs="service">'+
						'<ul class="main main-three">'+
							'<li class="mainOneli"><b><i class="fa fa-angle-left"></i>云服务</b></li>'+
							'<li><a href="">云服务</a></li>'+
							'<li><a href="">设计</a></li>'+
							'<li><a href="">工业</a></li>'+
							'<li><a href="">设计</a></li>'+
							'<li><a href="">工业</a></li>'+
							'<li><a href="">设计</a></li>'+
							'<li><a href="">工业</a></li>'+
							'<li><a href="">设计</a></li>'+
							'<li><a href="">工业</a></li>'+
							'<li><a href="">设计</a></li>'+
						'</ul>'+
					'</div>'+
					'<div class="list" id="software" dataNavs="software">'+
						'<ul class="main main-four">'+
							'<li class="mainOneli"><b><i class="fa fa-angle-left"></i>软件</b></li>'+
							'<li><a href="">软件</a></li>'+
							'<li><a href="">设计</a></li>'+
							'<l><a href="">工业</a></li>'+
							'<li><a href="">设计</a></li>'+
							'<li><a href="">工业</a></li>'+
							'<li><a href="">设计</a></li>'+
							'<li><a href="">工业</a></li>'+
							'<li><a href="">设计</a></li>'+
							'<li><a href="">工业</a></li>'+
							'<li><a href="">设计</a></li>'+
						'</ul>'+
					'</div>'+
					'<div class="list" id="finance" dataNavs="finance">'+
						'<ul class="main main-five">'+
							'<li class="mainOneli"><b><i class="fa fa-angle-left"></i>金融</b></li>'+
							'<li><a href="">金融</a></li>'+
							'<li><a href="">设计</a></li>'+
							'<li><a href="">工业</a></li>'+
							'<li><a href="">设计</a></li>'+
							'<li><a href="">工业</a></li>'+
							'<li><a href="">设计</a></li>'+
							'<li><a href="">工业</a></li>'+
							'<li><a href="">设计</a></li>'+
							'<li><a href="">工业</a></li>'+
							'<li><a href="">设计</a></li>'+
						'</ul>'+
					'</div>'+
					'<div class="list" id="organize" dataNavs="organize">'+
						'<ul class="main main-six">'+
							'<li class="mainOneli"><b><i class="fa fa-angle-left"></i>生态伙伴</b></li>'+
							'<li><a href="">生态伙伴</a></li>'+
							'<li><a href="">设计</a></li>'+
							'<li><a href="">工业</a></li>'+
							'<li><a href="">设计</a></li>'+
							'<li><a href="">工业</a></li>'+
							'<li><a href="">设计</a></li>'+
							'<li><a href="">工业</a></li>'+
							'<li><a href="">设计</a></li>'+
							'<li><a href="">工业</a></li>'+
							'<li><a href="">设计</a></li>'+
						'</ul>'+
					'</div>'+
					'<div class="list" id="community" dataNavs="community">'+
						'<ul class="main main-seven">'+
							'<li class="mainOneli"><b><i class="fa fa-angle-left"></i>社区</b></li>'+
							'<li><a href="">社区</a></li>'+
							'<li><a href="">设计</a></li>'+
							'<li><a href="">工业</a></li>'+
							'<li><a href="">设计</a></li>'+
							'<li><a href="">工业</a></li>'+
							'<li><a href="">设计</a></li>'+
							'<li><a href="">工业</a></li>'+
							'<li><a href="">设计</a></li>'+
							'<li><a href="">工业</a></li>'+
							'<li><a href="">设计</a></li>'+
						'</ul>'+
					'</div>'+
					'<div class="list" id="about" dataNavs="about">'+
						'<ul class="main main-eight">'+
							'<li class="mainOneli"><b><i class="fa fa-angle-left"></i>关于用友</b></li>'+
							'<li><a href="">公司简介</a></li>'+
							'<li><a href="">成员企业</a></li>'+
							'<li><a href="">企业文化</a></li>'+
							'<li><a href="">公司领导</a></li>'+
							'<li><a href="">用友荣誉</a></li>'+
							'<li><a href="">用友大事记</a></li>'+
							'<li><a href="">投资者关系</a></li>'+
							'<li><a href="">视觉用友</a></li>'+
							'<li><a href="">联系用友</a></li>'+
						'</ul>'+
					'</div>'+
				'</div>'
	$("#headerjs").html(header);
})
