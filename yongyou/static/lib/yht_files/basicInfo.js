$(function() {
	var init, queryUserInfo;
	
	init = function() {
		queryUserInfo();
	}
	
	queryUserInfo = function() {
		$.ajax({
			url: $ctx + "/queryUserBasicInfo",
			type: "POST",
			dataType: "json",
			success: function(data) {
				if(data.isValidateMobile) {
					$("#mobileValid").addClass("on");
				}
				if(data.isValidateEmail) {
					$("#emailValid").addClass("on");
				}
				
				if(data.userImg)
					$("#userHeadImg").attr("src", $ctx + "/userImg/" + data.userImg + "?v=" + new Date().getTime());
				else
					$("#userHeadImg").attr("src", $ctx + "/userImg/user.jpg");
			}
		});
	};
	
	init();
});