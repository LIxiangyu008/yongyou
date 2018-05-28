$(function(){
	var top = '<ul class="bar">'+
	    		'<li>'+
	    			'<a class="open active"></a>'+
	    			'<div class="openDiv form-div">'+
	    					'<h4 class="form-li"><span>请致电免费热线</span><span style="color: #D80A14;">400-6600-588</span></h4>'+
	    					'<ul class="formBottom-div list-inline">'+
	    						'<li class="formBottom-left"><a><span></span><h4>人工客服</h4><b>若当前离线,点击右侧联系我们,将有专人尽快与您联系.</b></a></li>'+
	    						'<li class="formBottom-right"><a><span></span><h4>咨询反馈</h4><b>如有任何意见、问题或反馈,欢迎您给我们发送电子邮件.</b></a></li>'+
	    					'</ul>'+
	    			'</div>'+
	    		'</li>'+
	    		'<li class="barLi-two"><a>联系我们</a></li>'+
	    		'<li class="barLi-three"><a class="top" title="回到顶部"></a></li>'+
	    	'</ul>'
	    	
	var sub =  '<div class="form-sub">'+
	    					'<form class="form-horizontal">'+
	    					'<button type="button" class="form-b">关闭</button>'+
	    						'<h4><span>注册申请</span><span style="padding:0 10px">|</span><span>咨询服务</span></h4>'+
	    						'<p>请填写所有</p>'+
	    						'<ul class="sub-ul">'+
	    							'<li><input type="text" placeholder="姓名" title="姓名"></li>'+
	    							'<li><input type="email" placeholder="电子邮件" title="电子邮件"></li>'+
	    							'<li><input type="text" placeholder="公司" title="公司"></li>'+
	    							'<li><input type="tel" placeholder="电话" title="电话"></li>'+
	    							'<li><input type="text" placeholder="职务" title="职务"></li>'+
	    							'<li><textarea rows="3" placeholder="业务需求"></textarea></li>'+
	    							'<li><input type="text" placeholder="与用友的关系" title="与用友的关系"></li>'+
	    							'<li style="margin:0;">是否愿意接受邮件、电话'+
	    							'<div class="radio-div">'+
	    							'<label ><input type="radio" name="inlineRadioOptions"  value="是"><b>是</b></label>'+
	    							'<label style="margin:0"><input type="radio" name="inlineRadioOptions"  value="否"><b>否</b></label>'+
	    							'</div>'+
	    							'</li>'+
	    							'<li style="background:none;margin:0;"><label class="flexbox"><input type="checkbox"><b>同意协议</b></label></li>'+
	    							'<li style="background:none;text-align:center"><button>提交</button></li>'+
	    						'</ul>'+
	    					'</form>'+
	    		'</div>'
	$('#sub').html(sub);
	$("#top").html(top);
})
