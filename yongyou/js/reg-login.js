var reg = {
	body:function(){
		var height = $(window).height();
		var width = $(window).width();
	},
	regbox:function(){
		var height = $(window).height()+100;
		var width = $(window).width();
		var h = (height-$(".regbox").height())/2;
		var w = (width-$(".regbox").width())/2;
		var w2 = (width-$(".icon").width())/2;
		//$(".regbox").css({"left":w,"top":h});
		
		$("#reg .qiehuan .titles a").click(function(){
			$(this).parent(".titles").parent(".qiehuan").parent("#reg").children(".qiehuan").each(function(){
				$(this).removeClass("hidden");
			});
			$(this).parent(".titles").parent(".qiehuan").addClass("hidden");
		});
	},
	check_regbox:function(){
		$("#reg .submit").click(function(){
			$("#reg .qiehuan").each(function(){
				if(!$(this).is(":hidden")){
					check($(this).index())
				}
			})
		});
		if($("#pwd .show input").is(":checked")){
			 $("#pwd").children("input").hideShowPassword(true);
		}
		$("#pwd .show input").click(function(){
			if($(this).is(":checked")){
				 $("#pwd").children("input").hideShowPassword(true);
			}
			else{
				$("#pwd").children("input").hideShowPassword(false);
			}
		});	
		if($("#pwd2 .show input").is(":checked")){
			 $("#pwd2").children("input").hideShowPassword(true);
		}
		$("#pwd2 .show input").click(function(){
			if($(this).is(":checked")){
				 $("#pwd2").children("input").hideShowPassword(true);
			}
			else{
				$("#pwd2").children("input").hideShowPassword(false);
			}
		});		
		function check(i){
			var _this = $("#reg .qiehuan").eq(i);
			if(i ==0){
				var userid = _this.children("#userid");
				var verify1 = _this.children("#verify1");
				var pwd = _this.children("#pwd");
				var verify2 = _this.children("#verify2");
				var tnc = _this.children("#tnc");
				if(userid.find("input").val()<=0){
					err(userid,"请输入手机号/邮箱！");
				}
				else{
					correct(userid);
				}
				if(verify1.find("input").val()<=0){
					err(verify1,"请输入验证码！");
				}
				else{
					correct(verify1);
				}
				if(pwd.find("input").val()<=0){
					err(pwd,"请输入密码！");
				}
				else{
					correct(pwd);
				}
				if(verify2.find("input").val()<=0){
					err(verify2,"请输入右侧识别码！");
				}
				else{
					correct(verify2);
				}
				if(!tnc.find("input").is(":checked")){
					err(tnc,"请仔细阅读并同意！《用户协议》《隐私权政策》!");
				}
				else{
					correct(tnc);
				}
				var l = _this.find("span").length;
				var status = true;
				for(i=0;i<=l;i++){
					if(_this.find("span").eq(i).hasClass("cuo")){
						status = status&&false;
					}
				}
				if(status){
					$("#reg").submit();
				}
			}
			else if(i ==1){
				var username = _this.children("#username");
				var pwd2 = _this.children("#pwd2");
				var verify3 = _this.children("#verify3");
				var tnc2 = _this.children("#tnc2");
				if(username.find("input").val()<=0){
					err(username,"请输入用户名！");
				}
				else{
					correct(username);
				}
				if(verify3.find("input").val()<=0){
					err(verify3,"请输入验证码！");
				}
				else{
					correct(verify3);
				}
				if(pwd2.find("input").val()<=0){
					err(pwd2,"请输入密码！");
				}
				else{
					correct(pwd2);
				}
				if(!tnc2.find("input").is(":checked")){
					err(tnc2,"请仔细阅读并同意！《用户协议》《隐私权政策》!");
				}
				else{
					correct(tnc2);
				}
				var l = _this.find("span").length;
				var status = true;
				for(i=0;i<=l;i++){
					if(_this.find("span").eq(i).hasClass("cuo")){
						status = status&&false;
					}
				}
				if(status){
					$("#reg").submit();
				}				
			}
		}
		function err(id,txt){
			var _this = id;
			_this.find(".error").html(txt);
			_this.find("span").addClass("cuo");
			_this.find("input").addClass("on");
			return false;
			
		}
		function correct(id){
			var _this = id;
			_this.find(".error").html("");
			_this.find("span").removeClass("cuo").addClass("dui");
			_this.find("input").removeClass("on");	
			return false;
		}
	},
	success:function(){
		$("#reg .wuqiehuan .checkbox ul li label input").change(function(){
			if($(this).is(":checked")){
				$(this).parent("label").addClass("on");
			}
			else{
				$(this).parent("label").removeClass("on");
			}
		})
	}
}
var login = {
	check_loginbox:function(){
		$("#login .but-login").click(function(){
			check();
		});
		if($("#pwd3 .show input").is(":checked")){
			 $("#pwd3").children("input").hideShowPassword(true);
		}
		$("#pwd3 .show input").click(function(){
			if($(this).is(":checked")){
				 $("#pwd3").children("input").hideShowPassword(true);
			}
			else{
				$("#pwd3").children("input").hideShowPassword(false);
			}
		});		
		function check(obj){
			var _this = $("#login .wuqiehuan");
			var userid2 = _this.children("#userid2");
			var pwd3 = _this.children("#pwd3");
			var verify4 = _this.children("#verify4");
			if(userid2.find("input").val()<=0){
				err(userid2,"请输入手机号/邮箱！");
			}
			else{
				correct(userid2);
			}
			if(pwd3.find("input").val()<=0){
				err(pwd3,"请输入密码！");
			}
			else{
				correct(pwd3);
			}
			if(verify4.find("input").val()<=0){
				err(verify4,"请输入验证码！");
			}
			else{
				correct(verify4);
			}
			var l = _this.find("span").length;
			var status = true;
			for(i=0;i<=l;i++){
				if(_this.find("span").eq(i).hasClass("cuo")){
					status = status&&false;
				}
			}
			if(status){
				$("#login").submit();
			}
		}
		function err(id,txt){
			var _this = id;
			_this.find(".error").html(txt);
			_this.find("span").addClass("cuo");
			_this.find("input").addClass("on");
			return false;
			
		}
		function correct(id){
			var _this = id;
			_this.find(".error").html("");
			_this.find("span").removeClass("cuo").addClass("dui");
			_this.find("input").removeClass("on");	
			return false;
		}
	}	
}
$(function(){
	reg.body();
	reg.regbox();
	reg.check_regbox();
	reg.success();
	login.check_loginbox();
});
