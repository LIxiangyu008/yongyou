//function prevent (e) {
//　　e.preventDefault();
//}
//
//function topPropagation(e){
//	e.stopPropagation();
//	console.log('sss')
//}
//var divWrapper = document.getElementById("div-wrapper");
//divWrapper.addEventListener('touchmove',prevent, { passive: false });
//$('.small-menu').on('touchmove',topPropagation)
var Top = '';
$(window).scroll(function(){
			var topDistance = $(document).scrollTop();
			Top=topDistance;
			if(topDistance>=500){
				$('.barLi-three').stop().fadeIn(150)
			}else{
				$('.barLi-three').stop().fadeOut(150)
			}
		})
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
	oneLunbo:function(){
		var liSlider = $('.slider1 li');
		liSlider.hover(function(){
			$(this).addClass('active')
		},function(){
			$(this).removeClass('active');
		})
	},
	top:function(){
		var leftWidth = $('.leftmenu').width();
		
         $(".top").click(function() {
            $('body,html').animate({ scrollTop: 0 }, 1000);
            return false;
        });
        $('.form-b').on('click',function(){
			$('.open').addClass('active')
			$('.form-sub').animate({right:-600},300);
			$('.form-div').animate({right:-500},300)
		})
		$('.open').on('click',function(){
			if($(this).hasClass('active')){
				$('.form-div').animate({right:60},300)
				$(this).removeClass('active')
			}else if(!$(this).hasClass('active')){
				$(this).addClass('active')
				$('.form-div').animate({right:-500},300)
				$('.form-sub').animate({right:-600},300)
			}
		});
		$('.openDiv').mouseleave(function(){
			$('.form-div').animate({right:-500},300)
			$('.open').addClass('active')
			$('.opens').addClass('active')

		})
		$('.formBottom-right').click(function(){
					$('.form-div').animate({right:-500},300)
					$('.form-sub').animate({right:leftWidth},300)
					$('.open').addClass('active')
			})
		$('.form-sub').mouseenter(function(){
			$('.open').removeClass('active')
		})
	},
	tops:function(){
		var opens = $('.opens');
		opens.on('click',function(){
			if($(this).hasClass('active')){
				$('.opens').addClass('active')
				$('.form-div').animate({right:0},300)
				$(this).removeClass('active')
			}else if(!$(this).hasClass('active')){
				$(this).addClass('active')
				$('.form-div').animate({right:-500},300)	
			}
			
			
		})
		
	},
	scroll:function(){
		var scRoll = $(document).scrollTop();
    	var header_yongyou = $('.yongyou-header').outerHeight();
   	 	$(window).scroll(function(e){ 
   	 		var header_yy = $(document).scrollTop();
	            if(header_yy == 0){
	            	$('.yongyou-header').removeClass('bg')
	            }else{
	            	
	            	$('.yongyou-header').addClass('bg')
	            }
	            if(header_yy > header_yongyou){//下滚  	
	                $('.yongyou-header').removeClass('active')
	            }  
	            else{//上滚  
	                $('.yongyou-header').addClass('active')
	            } 
	            if(header_yy > scRoll){
	            	$('.yongyou-header').addClass('active')
	            }else{
	            	$('.yongyou-header').removeClass('active')
	            }
	            scRoll = $(document).scrollTop();	
	    });
	},
	cloud:function(){
		var cloudFive = $('.sections');
		cloudFive.find('.item').hover(function(){
			$(this).addClass('active')
		},function(){
			$(this).removeClass('active')
		})
	},
	sectionBtn:function(){
		var sectionBtn  = $('.sectionFive-btn');
		sectionBtn.click(function(){
			$(".section-five").addClass('active')
		})
		$(".section-five").mouseleave(function(){
			$(this).removeClass('active')
		})
	},
	videoBtn:function(){
		var videoDiv = $('.videoBtn');
		var videoBtn = videoDiv.find('.video-a');
		videoBtn.click(function(){
			var videos = ($(this).parent()).siblings('.videoWrapper').find('video')[0];
			($(this).parent()).siblings('.videoWrapper').show();
			($(this).parent()).siblings('.videoWrapper').find('.gb').show();
			videos.play();
			$('.gb').click(function(){
			var videoWrap = $(this).parent().parent();
			videoWrap.hide();
			$(this).hide();
			videos.pause();
		})
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
		$('.industryCloud').find('.samall-menulists ul').append('<li><a title="用友建筑云" target="_blank" href="https://www.yonyouccs.com/icop-website/">用友建筑云</a></li>'+
														'<li><a title="用友金融云" target="_blank" href="http://www.yonyoufintech.com/">用友金融云</a></li>'+
														'<li><a title="用友能源云" target="_blank" href="http://yonyouny.com/">用友能源云</a></li>'+
														'<li><a title="精智 工业互联网平台" target="_blank" href="https://jingzhi.yonyoucloud.com/">精智 | 工业互联网平台</a></li>'+
														'<li><a title="用友汽车云" target="_blank" href="http://auto.yonyou.com/IT_Solutions/zhengche/IT_zhengche-index.html">用友汽车云</a></li>'+
														'<li><a title="用友教育云" target="_blank" href="http://www.seentao.com/Solution/index">用友教育云</a></li>'+
														'<li><a title="用友医疗云" target="_blank" href="http://www.yonyouhit.com">用友医疗云</a></li>'+
														'<li><a title="用友烟草云" target="_blank" href="http://www.uf-tobacco.com/plan_list.html?name=all">用友烟草云</a></li>')
		$('.platformCloud').find('.samall-menulists ul').append('<li><a title"应用平台" target="_blank" href="https://euc.yonyoucloud.com/cas/login?sysid=aps&service=https%3A%2F%2Fapcenter.yonyoucloud.com%2Fapptenant">应用中心</a></li>'+
														'<li><a title"UDN社区" target="_blank" href="http://udn.yyuap.com/">UDN社区</a></li>'+
														'<li><a title"开发者中心" target="_blank" href="https://euc.yonyoucloud.com/cas/login?sysid=developer&service=https%3A%2F%2Fdeveloper.yonyoucloud.com%3A443%2Fportal%2Fsso%2Flogin.jsp%3Fr%3DL3BvcnRhbC8">开发者中心</a></li>')
		$('.financeCloud').find('.samall-menulists ul').append('<li><a title="畅捷支付" target="_blank" href="http://m.chanpay.com/wap/index.html">畅捷支付</a></li>'+
														'<li><a title="用友供应链金融" target="_blank" href="https://scf.yonyou.com">用友供应链金融</a></li>'+
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
														'<li><a title="智能IT服务管理解决方案" target="_blank" href="http://subject.yonyou.com/20130426/ism.html">iSM</a></li>'+
														'<li><a title="打通所有电商平台数据" target="_blank" href="http://www.dsclouds.com">电商通</a></li>')
		$('.mediumqy').find('.samall-menulists ul').append('<li><a title="成长型企业互联网应用平台" target="_blank" href="http://u8.yonyou.com/index.php/Home/Product/detail.html?id=18">用友U8+</a></li>'+
														'<li><a title="企业产品生命周期管理解决方案" target="_blank" href="http://u8.yonyou.com/index.php/Home/Product/detail.html?id=20">用友PLM</a></li>'+
														'<li><a title="企业客户关系管理解决方案" target="_blank" href="http://u8.yonyou.com/index.php/Home/Product/detail.html?id=19">用友CRM</a></li>'+
														'<li><a title="企业实时服务桌面" target="_blank" href="http://fwq.yonyou.com/up_service/index.php?r=up_shop/index">服务圈</a></li>'+
														'<li><a title="企业一体化营销服务平台" target="_blank" href="https://uhy.yonyoucloud.com/">U会员</a></li>'+
														'<li><a title="让企业生意快起来" target="_blank" href="https://udh.yonyoucloud.com/">U订货</a></li>'+
														'<li><a title="友联客服" target="_blank" href="http://ulink.yonyou.com">友联客服</a></li>')
		$('.smallqys').find('.samall-menulists ul').append('<li><a title="畅捷通T+" target="_blank" href="http://software.chanjet.com/rj-Tg.html">畅捷通T+</a></li>'+
														'<li><a title="畅捷通T1" target="_blank" href="http://software.chanjet.com/rj-T1.html">畅捷通T1</a></li>'+
														'<li><a title="畅捷通T3" target="_blank" href="http://software.chanjet.com/rj-T3.html">畅捷通T3</a></li>'+
														'<li><a title="畅捷通T6" target="_blank" href="http://software.chanjet.com/rj-T6.html">畅捷通T6</a></li>')
		$('.industrys').find('.samall-menulists ul').append('<li><a title="制造业" target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=3">制造业</a></li>'+
														'<li><a title="传媒.出版" target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=7">传媒.出版</a></li>'+
														'<li><a title="汽车" target="_blank" href="http://auto.yonyou.com/IT_Solutions/IT_index.html">汽车</a></li>'+
														'<li><a title="金融" target="_blank" href="http://www.yonyoufintech.com">金融</a></li>'+
														'<li><a title="烟草" target="_blank" href="http://www.uf-tobacco.com/plan_list.html?name=all">烟草</a></li>'+
														'<li><a title="消费" target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=6">消费品</a></li>'+
														'<li><a title="房地产" target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=8">房地产</a></li>'+
														'<li><a title="建筑" target="_blank" href="https://www.yonyouccs.com/icop-website/">建筑</a></li>'+
														'<li><a title="交通运输" target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=4">交通运输</a></li>'+
														'<li><a title="园区" target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=9">园区</a></li>'+
														'<li><a title="公用事业" target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=5">公用事业</a></li>'+
														'<li><a title="医疗卫生" target="_blank" href="http://www.yonyouhit.com/">医疗卫生</a></li>'+
														'<li><a title="医药.农业" target="_blank" href="http://nc.yonyou.com/project.php?stype=1&id=42">医药.农业</a></li>'+
														'<li><a title="能源" target="_blank" href="http://yonyouny.com/">能源</a></li>')
		$('.field').find('.samall-menulists ul').append('<li><a title="大数据" target="_blank" href="http://bq.yonyou.com/bqweb/index.html">大数据</a></li>'+
														'<li><a title="财务共享" target="_blank" href="http://nc.yonyou.com/project.php?stype=2&id=4">财务共享</a></li>'+
														'<li><a title="人力资本" target="_blank" href="http://nc.yonyou.com/project.php?stype=2&id=5">人力资本</a></li>'+
														'<li><a title="智能制造" target="_blank" href="http://nc.yonyou.com/project.php?stype=2&id=3">智能制造</a>'+
														'<li><a title="项目资产" target="_blank" href="http://nc.yonyou.com/project.php?stype=2&id=1">项目资产</a></li>'+
														'<li><a title="审计" target="_blank" href="http://www.yonyouaud.com/">审计</a></li>'+
														'<li><a title="数字营销" target="_blank" href="http://nc.yonyou.com/project.php?stype=2&id=6">数字营销</a></li>')
		$('.personal').find('.samall-menulists ul').append('<li><a title="资金增值服务" target="_blank" href="https://www.yyfax.com/activity/activityDeploy/activity.html?id=299">资金增值服务</a></li>'+
															'<li><a title="立即体验高收益" target="_blank" href="https://www.yyfax.com/activity/activityDeploy/activity.html?id=299">立即体验高收益</a></li>'+
															'<li><a title="用友用户专享福利" target="_blank" href="https://www.yyfax.com/activity/activityDeploy/activity.html?id=299">用友用户专享福利</a></li>')
		$('.enterprise').find('.samall-menulists ul').append('<li><a title="支付结算" target="_blank" href="http://chanpay.com/site/pages/productCenter.html">支付结算</a></li>'+
																'<li><a title="银企联云服务" target="_blank" href="http://chanpay.com/site/pages/yin.html">银企联云服务</a></li>'+
																'<li><a title="用友供应链金融" target="_blank" href="https://www.yonyouscf.com/">用友供应链金融</a></li>'+
																'<li><a title="企业征信" target="_blank" href="http://chanpay.com/site/pages/authService.html">企业征信</a></li>'+
																'<li><a title="企业理财" target="_blank" href="http://www.yygold.com">企业理财</a></li>')
		$('.partner').find('.samall-menulists ul').append('<li><a title="云市场入驻" target="_blank" href="https://euc.yonyoucloud.com/register?sysid=market&service=https%3A%2F%2Fwww.yonyoucloud.com%2F">云市场入驻</a></li>'+
																'<li><a title="加入合作伙伴" target="_blank" href="https://euc.yonyoucloud.com/register?sysid=market&service=https%3A%2F%2Fwww.yonyoucloud.com%2F">加入合作伙伴</a></li>')				
	},
	widths:function(){
		$(window).resize(function(){ 
		    var Height = $(window).height();
		    var Width = $(window).width();
		    if(Width>=755){
		    	$('.div-wrapper').removeClass('divWrap')
		    	$('.mask').hide();
		    	$('body').css({'position':''});
		    }
		})
		
	}
	
	
}
$(function() {
    index.headers();
    index.headerSmall();
//  index.searchBtn();
    index.oneLunbo();
    index.top();
    index.tops();
    index.sectionBtn();
    // index.scroll();
//  index.cloud();
	index.videoBtn();
	index.push();
	index.widths();
})