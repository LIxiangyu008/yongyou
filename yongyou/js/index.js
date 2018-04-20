
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
			}, 150);
		},function(){
			var _nav = $(this).attr('dataNav');
			clearTimeout( qcloud[ _nav + '_timer' ] );
			qcloud[ _nav + '_timer' ] = setTimeout(function(){
			$('[dataNav]').removeClass('nav-up-selected');
			$('.menulist').find('#'+_nav).stop(true,true).slideUp(300);
			}, 150);
		});
	},
	headerSmall:function(){
		var navbarToggle = $('.navbar-toggle');
		var smallLi = $('.small-menu').find('li');
		var mainLi = $('.mainOneli');
		var samallMenulist = $('.samall-menulist').find('.list');
		navbarToggle.click(function(){
		if(!$(this).is('.active')){
				$(this).animate({right:'200px'},300)
				$('.small-menu').animate({right:'-15px'},300)
				$(this).addClass('active')
			}else{
				$(this).animate({right:'0'},300);
				$('.small-menu').animate({right:'-250px'},300);
				samallMenulist.animate({right:'-300px'})
				$(this).removeClass('active')
			}
		})
		smallLi.click(function(){
			var index = $(this).index();
			samallMenulist.eq(index).animate({right:'0'})
		});
		mainLi.click(function(){
			$(this).parents('.list').removeClass('.nav-up-selected');
			$(this).parents('.list').animate({right:'-300px'},300);
			
		})
	},
	searchBtn:function(){
		//输入框现隐
		$('#searchBtn').click(function(){
		if($('.search-wrapper label').is(':hidden')){
			$('.search-wrapper label').fadeIn()
		}else{
			$('.search-wrapper label').fadeOut()
		}
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
	twoTop:function(){
		$('.anchorBox a').click(function(){
		var heIght =parseInt($('.section-two').height()+$('.yongyou-header').height())
		$('body,html').stop().animate({"scrollTop":heIght},500)
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
		var cloudFive = $('.cloudFive-div');
		cloudFive.find('.item').hover(function(){
			$(this).addClass('active')
		},function(){
			$(this).removeClass('active')
		})
	}
	
}
$(function() {
    index.headers();
    index.headerSmall();
//  index.searchBtn();
    index.oneLunbo();
    index.twoTop();
    index.top();
    index.tops();
    // index.scroll();
    index.cloud();
})