var effect = {
	Hoverr:function(){
		$(".qahover li").hover(function(){
			$(this).addClass("on");
		},
		function(){
			$(this).removeClass("on");
		});
		$(".qahover2 li").hover(function(){
			$(this).addClass("on2");
		},
		function(){
			$(this).removeClass("on2");
		});
		
		$(".yewu li").hover(function(){
			$(this).addClass("on");
		},function(){
			$(this).removeClass("on");
		});
		$(".qiye li").hover(function(){
			$(this).addClass("on");
		},function(){
			$(this).removeClass("on");
		});		
	},
	Box:function(){
		var h1 = $(".leftnav").height();
		var h2 = $(".rightbox").height();
		var pageh3 = $(".page").height();
        var yewuh4=$(".yewu").height();
		if(null!=pageh3){
			h2=h2+pageh3;
		}
        if(null!=yewuh4){
            h2=h2+yewuh4-61;
        }
		if(h1>=h2){
			$(".bbai").css({"height":h1});
			$(".rightbox").css({"height":h1});
		}
		else{
			$(".bbai").css({"height":h2});
			$(".rightbox").css({"height":h2});
		}		
	},
	Jindu:function(){
		var num1 = $(".baifenbi").attr("data-num");
		var w1 = $(".jindubox").width();
		var w2 = $(".wanchengdu").width();
		var num2 = w1*(num1/100) - w2/2;
		$(".baifenbi").css({"width":num1+"%"});
		$(".wanchengdu").css({"left":num2});
		$(".wanchengdu span").html(num1+"%");	
	},
	Qiehuan:function(){
		$(".labels ul li").click(function(){
			var i = $(this).index();
			$(this).siblings().find("a").removeClass("on");
			$(this).find("a").addClass("on");
			$(".labelbox").each(function(){
				$(this).addClass("hidden");
			});
			$(".labelbox").eq(i).removeClass("hidden");
			var h1 = $(".leftnav").height();
			var h2 = $(".jindubox").height() + 60 + $(".labels").height() + $(".labelbox").eq(i).height();
			if(h1>=h2){
				$(".bbai").css({"height":h1});
				$(".rightbox").css({"height":h1});
			}
			else{
				$(".bbai").css({"height":h2});
				$(".rightbox").css({"height":h2});
			}
		})
	},
	Shanchu:function(){
		$(".delete a").click(function(){
			$(this).parent("td").parent("tr").remove();
		})
	},
	PopupBox:function(){
		var h = $(window).height();
		var w = $(window).width();
		var h2 = $(".popup").height();		
		var w2 = $(".popup").width();
		$(".popup").css({"top":(h-h2)/2,"left":(w-w2)/2});
		$(".labels .setup a").click(function(){
			$(".layer").show();
			$(".popup").show();
		});		
		$(".button .submit").click(function(){
			$(".layer").hide();
			$(".popup").hide();
		});
		$(".button .cancel").click(function(){
			$(".layer").hide();
			$(".popup").hide();
		});		
	}
}
$(function(){
	effect.Box();
	effect.Hoverr();
	effect.Jindu();
	effect.Qiehuan();
	effect.Shanchu();
	effect.PopupBox();
});
