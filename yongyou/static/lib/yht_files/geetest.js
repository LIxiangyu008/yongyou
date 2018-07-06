/**
 * 
 */
$(function() {
	var init = function() {
		gtcallback(JSON.parse($("#geetestInfo").val()));
	};
	
	$("#div_id_embed").mousedown(function() {
		$("input:focus").blur()
	})
	
	var gtFailbackFrontInitial = function(result) {
		var s = document.createElement('script');
		s.id = 'gt_lib';
		s.src = 'http://static.geetest.com/static/js/geetest.0.0.0.js';
		s.charset = 'UTF-8';
		s.type = 'text/javascript';
		document.getElementsByTagName('head')[0].appendChild(s);
		var loaded = false;
		s.onload = s.onreadystatechange = function() {
			if (!loaded
					&& (!this.readyState
							|| this.readyState === 'loaded' || this.readyState === 'complete')) {
				loadGeetest(result);
				loaded = true;
			}
		};
	}
	
	// get geetest server status, use the failback solution
	var loadGeetest = function(config) {

		// 1. use geetest captcha
		window.gt_captcha_obj = new window.Geetest({
			gt : config.gt,
			challenge : config.challenge,
			product : 'float',
			offline : !config.success,
			https: true
		});

		gt_captcha_obj.appendTo("#div_id_embed");

		// Ajax request demo,if you use submit form ,then ignore it
		gt_captcha_obj.onSuccess(function() {
			imageCodeOk = true;
			checkSubmitBtn();
		});
		gt_captcha_obj.onRefresh(function() {
			imageCodeOk = false;
			checkSubmitBtn();
		});
	}
	
	var gtcallback =( function() {
		var result, apiFail;
		return function(r) {
			if (r) {
				result = r;
				setTimeout(function() {
					if (!window.Geetest) {
						apiFail = true;
						gtFailbackFrontInitial(result)
					}
				}, 1000)
			}
			else if(apiFail) {
				return
			}
			
			loadGeetest(result);
		}
	})()
	
	init();
});