var index = {
	headers:function(){
		 	var qcloud={};
		$('[dataNav]').hover(function(){
			var _nav = $(this).attr('dataNav');
			clearTimeout( qcloud[ _nav + '_timer' ] );
			qcloud[ _nav + '_timer' ] = setTimeout(function(){
			$('[dataNav]').each(function(){
			$(this)[ _nav == $(this).attr('dataNav') ? 'addClass':'removeClass' ]('nav-up-selected');
			});
			$('.menulist').find('#'+_nav).stop(true,true).slideDown(300);
			}, 100);
		},function(){
			var _nav = $(this).attr('dataNav');
			clearTimeout( qcloud[ _nav + '_timer' ] );
			qcloud[ _nav + '_timer' ] = setTimeout(function(){
			$('[dataNav]').removeClass('nav-up-selected');
			$('.menulist').find('#'+_nav).stop(true,true).slideUp(300);
			}, 100);
		});
	},
	headerSmall:function(){
		var navbarToggle = $('.navbar-toggle');
		var smallLi = $('.small-menu').find('li');
		var mainLi = $('.mainOneli');
		var mainLis = $('.samall-menulists').find('.mainOnelis');
		var samallMenulist = $('.samall-menulist').find('.list');
		var	mainA = samallMenulist.find('ul li a');
		$('.faright').append('<i class="fa fa-angle-right"></i>');
		navbarToggle.click(function(){	
			console.log('ssss')
		var scrollTop = window.pageYOffset  
                || document.documentElement.scrollTop  
                || document.body.scrollTop  
                || 0;
    			sss=scrollTop;
		document.body.style.top=-1*scrollTop+"px";
    	document.body.style.position='fixed';
		if(!$('.opens').is('.active')){
			$('.form-div').animate({right:-500},300)
			$('.opens').addClass('active')
		};  
		if( !$('.small-menu').is(":hidden")){
    				document.body.style.overflow='';
				    document.body.style.position=null;
				    document.body.style.top=null;
				    window.scrollTo(0,sss);
    			}
		if(!$(this).is('.active')){
			$('.mask').show()
			$('.div-wrapper').addClass('divWrap')
			$('header').addClass('divWrap')
				$('.small-menu').show()
				$(this).addClass('active')
				$('.bg-div').show()
		}else{
				$('.mask').hide()
				$('.div-wrapper').removeClass('divWrap')
				$('header').removeClass('divWrap')
				
				$('.small-menu').hide(300)
				samallMenulist.animate({left:'-300px'},250)
				$('.samall-menulists').animate({left:'-300px'},250)
				$(this).removeClass('active')
				$('.bg-div').hide()
		}
		})
    	$('.mask').click(function(){
    		$(this).hide();
    		$('.small-menu').hide();
    		navbarToggle.removeClass('active');
    		$('.yongyou-header').removeClass('divWrap');
    		$('.div-wrapper').removeClass('divWrap');
    		$('.small-menu').hide(300)
			samallMenulist.animate({left:'-300px'},250)
			$('.samall-menulists').animate({left:'-300px'},250)
    		document.body.style.overflow='';
			document.body.style.position=null;
			document.body.style.top=null;
			window.scrollTo(0,sss);
    		
    	})
		smallLi.click(function(){
			var index = $(this).index();
			samallMenulist.eq(index).animate({left:'0'})
		});
		mainLi.click(function(){
			$(this).parents('.list').removeClass('.nav-up-selected');
			$(this).parents('.list').animate({left:'-300px'},250);
		})
		mainA.click(function(){
			$(this).siblings().animate({left:'0'})
		})
		
		mainLis.on('click',function(){
			($(this).parent()).parent('.samall-menulists').animate({left:'-300px'},250);
		})
	},
	push:function(){
		$('.domainCloud').find('.samall-menulists ul').append('<li><a title="营销服务" target="_blank" href="https://m.yonyoucloud.com/cloud_sales.html">用友云 | 营销服务</a></li>'+
														'<li><a title="采购服务" target="_blank" href="https://m.yonyoucloud.com/cloud_buy.html">用友云 | 采购服务</a></li>'+
														'<li><a title="协同服务" target="_blank" href="https://m.yonyoucloud.com/cloud_assist.html">用友云 | 协同服务</a></li>'+
														'<li><a title="财务服务" target="_blank" href="https://m.yonyoucloud.com/cloud_finance.html">用友云 | 财务服务</a></li>'+
														'<li><a title="人力服务" target="_blank" href="https://m.yonyoucloud.com/cloud_hr.html">用友云 | 人力服务</a></li>'+
														'<li><a title="工程服务" target="_blank" href="https://m.yonyoucloud.com/cloud_project.html">用友云 | 工程服务</a></li>'+
														'<li><a title="分析服务" target="_blank" href="https://m.yonyoucloud.com/cloud_analysis.html">用友云 | 分析服务</a></li>'+
														'<li><a title="U8 cloud" target="_blank" href="https://m.yonyoucloud.com/cloud_u8.html">U8 cloud</a></li>'+
														'<li><a title="税务服务" target="_blank" href="https://m.yonyoucloud.com/cloud_ebill.html">用友云 | 税务服务</a></li>'+
														'<li><a title="通信服务" target="_blank" href="https://m.yonyoucloud.com/cloud_connect.html">用友云 | 通信服务</a></li>')
		$('.industryCloud').find('.samall-menulists ul').append('<li><a title="精智 工业互联网平台" target="_blank" href="https://jingzhi.yonyoucloud.com/">精智 | 工业互联网平台</a></li>'+
														'<li><a title="用友政务云" target="_blank" href="http://shyy.chinaetax.com.cn/">用友政务云</a></li>'+
														'<li><a title="用友建筑云" target="_blank" href="http://cc.yonyoucloud.com">用友建筑云</a></li>'+
														'<li><a title="用友医疗云" target="_blank" href="http://www.yonyouhit.com">用友医疗云</a></li>'+
														'<li><a title="用友金融云" target="_blank" href="http://www.yonyoufintech.com">用友金融云</a></li>'+
														'<li><a title="用友能源云" target="_blank" href="http://yonyouny.com/">用友能源云</a></li>'+
														'<li><a title="用友广信云" target="_blank" href="https://item.yonyoucloud.com/13445329-5747-4a96-be20-2fc37f63620b.html">用友广信云</a></li>'+
														'<li><a title="用友烟草云" target="_blank" href="http://www.uf-tobacco.com/plan_list.html?name=all">用友烟草云</a></li>'+
										
														'<li><a title="用友汽车云" target="_blank" href="http://auto.yonyou.com/IT_Solutions/zhengche/IT_zhengche-index.html">用友汽车云</a></li>'+
														'<li><a title="用友餐饮云" target="_blank" href="http://www.honghuotai.com">用友餐饮云</a></li>'+
														'<li><a title="用友教育云" target="_blank" href="http://www.seentao.com/Solution/index">用友教育云</a></li>')
		$('.platformCloud').find('.samall-menulists ul').append('<li><a title"应用平台" target="_blank" href="https://euc.yonyoucloud.com/cas/login?sysid=aps&service=https%3A%2F%2Fapcenter.yonyoucloud.com%2Fapptenant">应用中心</a></li>'+
														'<li><a title"UDN社区" target="_blank" href="http://udn.yyuap.com/">UDN社区</a></li>'+
														'<li><a title"开发者中心" target="_blank" href="https://euc.yonyoucloud.com/cas/login?sysid=developer&service=https%3A%2F%2Fdeveloper.yonyoucloud.com%3A443%2Fportal%2Fsso%2Flogin.jsp%3Fr%3DL3BvcnRhbC8">开发者中心</a></li>')
		$('.financeCloud').find('.samall-menulists ul').append('<li><a title="畅捷支付" target="_blank" href="http://m.chanpay.com/wap/index.html">畅捷支付</a></li>'+
														'<li><a title="用友供应链金融" target="_blank" href="http://chanpay.com/site/index.html">用友供应链金融</a></li>'+
														'<li><a title="银企联云服务" target="_blank" href="http://chanpay.com/site/pages/yin.html">银企联云服务</a></li>'+
														'<li><a title="企业理财" target="_blank" href="http://www.yygold.com/">企业理财</a></li>')
		$('.smallqy').find('.samall-menulists ul').append('<li><a title="小微企业云财务" target="_blank" href="https://www.chanjet.com/hkj">小微企业云财务</a></li>'+
														'<li><a title="云管理" target="_blank" href="http://software.chanjet.com/rj-Tg.html">云管理</a></li>'+
														'<li><a title="云协同" target="_blank" href="https://www.chanjet.com/gzq">云协同</a></li>')
		$('.largeqy').find('.samall-menulists ul').append('<li><a title="大型企业管理与电子商务平台" target="_blank" href="http://nc.yonyou.com/product.php?id=4">用友NC6</a></li>'+
														'<li><a title="多组织企业互联网应用平台" target="_blank" href="http://nc.yonyou.com/product.php?id=5">用友U9</a></li>'+
														'<li><a title="多组织企业互联网应用平台" target="_blank" href="http://nc.yonyou.com/product.php?id=6">用友MES</a></li>'+
														'<li><a title="人力资本管理平台" target="_blank" href="http://nc.yonyou.com/product.php?id=7">用友HCM</a></li>'+
														'<li><a title="商业分析" target="_blank" href="http://bq.yonyou.com/bqweb/index.html">用友BQ</a></li>'+
														'<li><a title="智能IT服务管理解决方案" target="_blank" href="http://subject.yonyou.com/20130426/ism.html">iSM</a></li>')
		$('.mediumqy').find('.samall-menulists ul').append('<li><a title="成长型企业互联网应用平台" target="_blank" href="http://u8.yonyou.com/index.php/Home/Product/detail.html?id=18">用友U8+</a></li>'+
														'<li><a title="企业产品生命周期管理解决方案" target="_blank" href="http://u8.yonyou.com/index.php/Home/Product/detail.html?id=20">用友PLM</a></li>'+
														'<li><a title="企业客户关系管理解决方案" target="_blank" href="http://u8.yonyou.com/index.php/Home/Product/detail.html?id=19">用友CRM</a></li>'+
														'<li><a title="企业实时服务桌面" target="_blank" href="http://fwq.yonyou.com/up_service/index.php?r=up_shop/index">服务圈</a></li>')
		$('.smallqys').find('.samall-menulists ul').append('<li><a title="畅捷通T+" target="_blank" href="http://software.chanjet.com/rj-Tg.html">畅捷通T+</a></li>'+
														'<li><a title="畅捷通T1" target="_blank" href="http://software.chanjet.com/rj-T1.html">畅捷通T1</a></li>'+
														'<li><a title="畅捷通T3" target="_blank" href="http://software.chanjet.com/rj-T3.html">畅捷通T3</a></li>'+
														'<li><a title="畅捷通T6" target="_blank" href="http://software.chanjet.com/rj-T6.html">畅捷通T6</a></li>')
		$('.industrys').find('.samall-menulists ul').append('<li><a target="_blank" href="https://jingzhi.yonyoucloud.com/">工业</a></li>'+
															'<li><a target="_blank" href="http://cc.yonyoucloud.com">建筑</a></li>'+
															'<li><a target="_blank" href="https://www.yonyoucloud.com/cloud_sales.html">零售</a></li>'+
															'<li><a target="_blank" href="http://www.yonyoufintech.com">金融</a></li>'+
															'<li><a target="_blank" href="http://yonyouny.com/">能源</a></li>'+
															'<li><a target="_blank" href="https://item.yonyoucloud.com/13445329-5747-4a96-be20-2fc37f63620b.html">通信与广电</a></li>'+
															'<li><a target="_blank" href="http://auto.yonyou.com/IT_Solutions/zhengche/IT_zhengche-index.html">汽车</a></li>'+
															'<li><a target="_blank" href="http://www.yonyouhit.com">医疗</a></li>'+
															'<li><a target="_blank" href="http://shyy.chinaetax.com.cn/">政务</a></li>'+
															'<li><a target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=42">现代农业</a></li>'+
															'<li><a target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=7">文化与传媒</a></li>'+
															'<li><a target="_blank" href="https://www.chanjet.com/hkj">小微企业</a></li>'+
															'<li><a target="_blank" href="http://www.seentao.com/Solution/index">教育</a></li>'+
															'<li><a target="_blank" href="http://www.uf-tobacco.com/plan_list.html?name=all">烟草</a></li>'+
															'<li><a target="_blank" href="http://www.honghuotai.com">餐饮</a></li>'+
															'<li><a target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=9">园区</a></li>'+
															'<li><a target="_blank" href="http://www.yonyouaud.com/">审计</a></li>'+
															'<li><a target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=8">房地产</a></li>'+
															'<li><a target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=4">交通运输</a></li>'+
															'<li><a target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=5">公共事业</a></li>')
		$('.field').find('.samall-menulists ul').append('<li><a title="大数据" target="_blank" href="http://bq.yonyou.com/bqweb/index.html">大数据</a></li>'+
														'<li><a title="财务共享" target="_blank" href="http://nc.yonyou.com/project.php?stype=2&id=4">财务共享</a></li>'+
														'<li><a title="人力资本" target="_blank" href="http://nc.yonyou.com/project.php?stype=2&id=5">人力资本</a></li>'+
														'<li><a title="智能制造" target="_blank" href="http://nc.yonyou.com/project.php?stype=2&id=3">智能制造</a>'+
														'<li><a title="项目资产" target="_blank" href="http://nc.yonyou.com/project.php?stype=2&id=1">项目资产</a></li>'+
														'<li><a title="审计" target="_blank" href="http://www.yonyouaud.com/">审计</a></li>'+
														'<li><a title="数字营销" target="_blank" href="http://nc.yonyou.com/project.php?stype=2&id=6">数字营销</a></li>')

		$('.enterprise').find('.samall-menulists ul').append('<li><a title="支付结算" target="_blank" href="http://chanpay.com/site/pages/productCenter.html">支付结算</a></li>'+
																'<li><a title="银企联云服务" target="_blank" href="http://chanpay.com/site/pages/yin.html">银企联云服务</a></li>'+
																'<li><a title="用友供应链金融" target="_blank" href="https://www.yonyouscf.com/">用友供应链金融</a></li>'+
																'<li><a title="企业征信" target="_blank" href="http://chanpay.com/site/pages/authService.html">企业征信</a></li>'+
																'<li><a title="企业理财" target="_blank" href="http://www.yygold.com">企业理财</a></li>'+
																'<li><a title="友金所" target="_blank" href="https://www.yyfaxgroup.com/">友金所</a></li>')
		$('.partner').find('.samall-menulists ul').append('<li><a title="云市场入驻" target="_blank" href="https://euc.yonyoucloud.com/register?sysid=market&service=https%3A%2F%2Fwww.yonyoucloud.com%2F">云市场入驻</a></li>'+
																'<li><a title="加入合作伙伴" target="_blank" href="https://euc.yonyoucloud.com/register?sysid=market&service=https%3A%2F%2Fwww.yonyoucloud.com%2F">加入合作伙伴</a></li>')				
	},
	widths:function(){
		$(window).resize(function(){ 
		    var Height = $(window).height();
		    var Width = $(window).width();
		    if(Width>=755){
		    	$('.div-wrapper').removeClass('divWrap')
		    	$('.yongyou-header').removeClass('divWrap')
		    	$('.mask').hide();
		    	$('body').css({
		    		'position':'',
		    		'top':'0',
		    		'left':'0'
		    	});
		    	
		    }
		    if(Width<=1200){
		    	$('.section-seven').hide()
		    }else{
		    	$('.section-seven').show()
		    }
		})
		
	},
    feature: function() {
        if ($("#feature").length > 0) {
            $("#feature li").each(function() {
                var src = $(this).find("img").attr("src");
                //$(this).find("img").remove();
                //$(this).find("a").css({"background":"url("+ src +") center center no-repeat"})
            });
            $("#feature").slide({
                titCell: ".hd ul li",
                mainCell: ".bd ul",
                effect: "left",
                autoPlay: true,
                delayTime: 500,
                startFun: function(i, c) {
                    var aLink = $("#feature .bd li > a:eq(" + i + ")");
                    if (!aLink.attr("style"))

                        aLink.attr("style", "background-image:url(/static/images/banner/feature" + (parseInt(i) + 1) + ".jpg?r=0.0.27); background-repeat:no-repeat; background-size:100% 100%;-moz-background-size:100% 100%;");
                }
            });
            var l = ($(window).width() - $("#feature .main").width()) / 2;
            var l2 = ($("#feature").width() - $("#feature .hd ul").width()) / 2;
            $("#feature .main").css({ "left": l });
            $("#feature .hd").css({ "left": l2 });
        }
    },
    loginnhot: function() {
        $(".loginnhot .bx .label").click(function() {
            if ($(".loginb").is(":hidden")) {
                $(this).siblings(".loginb").slideDown();
                $(this).addClass("on");
            } else {
                $(this).siblings(".loginb").slideUp();
                $(this).removeClass("on");
            }
            return;
        });
    },

    banner: function() {
        if ($(".picScroll-left").length > 0)
            $(".picScroll-left").slide({ titCell: ".hd ul", mainCell: ".bd ul", autoPage: true, effect: "left", autoPlay: true, vis: 6 });
        $(".picList li .pic").hover(function() {
            $(this).children('.links').animate({ top: 0 }, 600, function() {});
        }, function() {
            $(this).children('.links').stop(true, true);
            $(this).children('.links').animate({ top: "100%" }, 600, function() {});
        });
    },


    //行业解决方案 和 领域解决方案 切换

    solutions: function() {
        $(".ly li").click(function() {
            if ($(this).attr("class") != "active") {
                $(this).siblings(".active").removeClass();
                $(this).addClass('active');
                $(this).parent().next().children().hide();
                $(this).parent().next().children().eq($(this).index()).show();
            }
        });
    },



    //企业空间,表魅网等 鼠标hover 菜单滑出
    links: function() {
        $(".link_box").hover(function() {
            $(this).children('.link').hide().next().stop().animate({ top: 0 }, 600, function() {});
        }, function() {
            $(this).children('.link').show().next().stop().animate({ top: "100%" }, 600, function() {});
        });
    },

    //企业新闻切换
    news: function() {
        $(".news_content").children().eq(0).show();
        $(".news_menu ul li").click(function() {
            if ($(this).attr("class") != "active") {
                $(this).siblings(".active").removeClass();
                $(this).addClass('active');
                $(".news_content").children().hide();
                $(".news_content").children().eq($(this).index()).show();
            }
        });
    },

    leftmenu: function() {
        $(".leftmenu").css({ "width": "50" });
        $(window).scroll(function() {
            if ($(window).scrollTop() > 200) {
                $(".leftmenu").fadeIn(300);
            } else {
                $(".leftmenu").fadeOut();
            }
        });
        $(".lm_5").click(function() {
            $('body,html').animate({ scrollTop: 0 }, 1000);
            return false;
        });

        $(".bar li a").click(function() {
            $(".leftmenu").css({ "width": "250" });
            $(".bar li").each(function() {
                $(this).children(".open").animate({ left: -250 }, 200);
            });
            $(this).siblings(".open").animate({ left: 50 }, 200, function() {
                //                $(this).css({"z-index":200});
            });
        });
        $(".bar").mouseleave(function() {
            $(".leftmenu").css({ "width": "50" });
            $(".bar li").each(function() {
                $(this).children(".open").animate({ left: -250 }, 200, function() {
                    //                    $(this).css({"z-index":-200});
                });
            });
        })
    }




}
$(function() {
	index.headers();
    index.headerSmall();
    index.push();
	index.widths();
    index.feature();
    index.loginnhot();
    index.banner();
    index.solutions();
    index.links();
    index.news();
    index.leftmenu();
})