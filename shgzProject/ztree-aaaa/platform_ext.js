var PTUtil = (function(){
	function platForm(){
		
	};
//	展示登录
	function showLogin(){
		var zhzhao = [
  		'<div id="zz_loading_div" style="z-index:998;position: absolute; left: 0px; top: 0px; width: 100%;height:9000px; background-color:#ccc; filter: alpha(opacity=50);opacity: 0.5;"></div>',
     		'<div style="z-index: 999;display:block;width: 270px; background-color: #fff; position: fixed; top: 50%; margin-top: -82px; left: 50%; margin-left: -135px; text-align: center; padding: 10px 10px 10px 0px; font-size: 0px;">',
     			'<span style="font-size: 20px; line-height: 30px; font-family: "microsoft yahei"; color: #666;">超时登录</span>',
     			'<div>',
     				'<form:form>',
     					'<p style=" margin-top: 10px; text-align: center;">',
     						'<label for="user" style=" width: 56px; display: inline-block; text-align: right; color: #333; font-size: 14px; line-height: 22px; font-family: sans-serif; vertical-align: middle;">用户名：</label>',
     						'<input type="text" name="out_user" value="" placeholder="请输入用户名" style=" width: 150px; font-size: 12px; line-height: 18px; font-family: sans-serif; padding: 5px 0px 5px 3px; vertical-align: middle; color: #333; border: 1px solid #9e9e9e;">',
     					'</p>',
     					'<p style=" margin-top: 10px; text-align: center;">',
     						'<label for="user" style=" width: 56px; display: inline-block; text-align: right; color: #333; font-size: 14px; line-height: 22px; font-family: sans-serif; vertical-align: middle;">密 码：</label>',
     						'<input type="password" name="out_password" value="" placeholder="请输入密码" style=" width: 150px; font-size: 12px; line-height: 18px; font-family: sans-serif; padding: 5px 0px 5px 3px; vertical-align: middle; color: #333; border: 1px solid #9e9e9e;">',
     					'</p>',
     					'<button type="button" id="zhzh_quxiao" style="width: 70px; font-size: 14px; line-height: 22px; padding: 5px 0px; border-radius: 3px; border: 0px; cursor: pointer; display: inline-block; margin-top: 10px; background-color: #eaeaea; color: #000; font-family: sans-serif; float: right; margin-right: 27px; margin-bottom: 5px;">取消</button>',
     					'<button type="button" id="zhzh_login" style="width: 70px; font-size: 14px; line-height: 22px; padding: 5px 0px; border-radius: 3px; border: 0px; cursor: pointer; display: inline-block; margin-top: 10px; background-color: #1e96ff; color: #fff; font-family: sans-serif; float: right; margin-right: 27px; margin-bottom: 5px;">登录</button>',
     				'</form:form>',
     			'</div>',
     		'</div>'
     		];
		return $(zhzhao.join()).appendTo(document.body);
	};
	function _onStateChange(xhr, success, failure) {
		if (xhr.readyState == 4) {
			var s = xhr.status;
			if (s >= 200 && s < 300) {
				success(xhr);
			} else {
				failure(xhr);
			}
		} else {
		}
	};
	function ifloginAgain(){
		var lgflag = false;
		$.ajax({
			type:'post',
			url:webroot+"/hasSession",
			dataType:'json',
//			同步请求，锁住浏览器
			async:false,
			success:function(data){
				lgflag =  data.flag;
			},
			error:function(){
				lgflag = false;
			}
		});
		return lgflag;
	};
	return {
		PlatForm:platForm,
		showLogin:showLogin,
		ifloginAgain:ifloginAgain
	};
})();
$(function(){
	
	$.extend($.fn.datagrid.defaults,{
		 pageSize:20
	});
	
	$.validationEngine.defaults.scroll = false;
	$.validationEngine.defaults.addPromptClass = "formError-small";
	$.validationEngine.defaults.promptPosition = "bottomRight";
	$.validationEngine.defaults.autoHidePrompt = true;
	$.validationEngine.defaults.autoHideDelay = 2000;
	$.validationEngine.defaults.fadeDuration = 0.5;
	$.validationEngine.defaults.autoPositionUpdate = true;
//	首页菜单
	$(".ui_menu").on("click","a",function(event){
		var that = this;
		event.preventDefault();event.stopPropagation(); 
		if(PTUtil.ifloginAgain()){
			$(that).closest(".easyui-accordion").find("a").removeClass("hover_cls");		
			var src = $(that).addClass("hover_cls").attr("href");
			$("#main_frame").attr("src",src);
		}else{
			var a = PTUtil.showLogin();
			$("#zhzh_quxiao",a).on("click",function(){
				a.remove();
			});
			$("#zhzh_login",a).on("click",function(){
				$.ajax({
					type:'post',
					url:webroot+"/loginAdmin",
					data:{"account":$("input[name='out_user']",a).val(),"password":$("input[name='out_password']",a).val()},
					dataType:'json',
					success:function(data){
						if(data.flag){
							a.remove();
							$(that).closest(".easyui-accordion").find("a").removeClass("hover_cls");		
							var src = $(that).addClass("hover_cls").attr("href");
							$("#main_frame").attr("src",src);
						}else{
							layer.alert(data.msg,{icon:2});
						}
					}
				});
			});
		}
	});
	
//	个人设置
	$("#user_set").on("click",function(){
		$("#main_frame").attr("src",webroot+"/basic/user_viewUserDetaiNosec");
	});
//	用户退出
	$("#logout_btn").on("click",function(){
		location.href = webroot+"/logoutAdmin";
	});
	
	
});
(function($){  
    $.fn.serializeJson=function(){  
        var serializeObj={};  
        var array=this.serializeArray();  
        $(array).each(function(){  
            if(serializeObj[this.name]){  
                if($.isArray(serializeObj[this.name])){  
                    serializeObj[this.name].push(this.value);  
                }else{  
                    serializeObj[this.name]=[serializeObj[this.name],this.value];  
                }  
            }else{  
                serializeObj[this.name]=this.value;   
            }  
        });  
        return serializeObj;  
    };  
    
})(jQuery); 