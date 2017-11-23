$("").ready(function(){
			var password='111111';//模拟初始密码
    		$('.initPwd').focus(function(){
    			$(this).css('border','1px solid #e7eaec');
    		})
    		$('.newPwd').focus(function(){
    			$(this).css('border','1px solid #e7eaec');
    			// if(js1()){
    			// 	$('.tishi').html('');
    			// }
    		})
    		$('.conPwd').focus(function(){
    			$('.submit').removeAttr('disabled');
    			$(this).css('border','1px solid #e7eaec');
    			
    		})
    		$('.initPwd').blur(function(){
    			if($('.initPwd').val() ==''){
    				$('.initPwd').css('border','1px solid red');
    				$('.tishi').html('*请输入原密码');
    				return;
    			}else if($('.initPwd').val() !== password){
    				$('.initPwd').val('');
    				$('.initPwd').css('border','1px solid red');
    				$('.tishi').html('*原密码不正确，请重新输入');
    			}else{
    				$('.tishi').html('');
    			}
    		})
    		// 输入新密码的验证
    		$('.newPwd').blur(function(){
    			
    			if($('.initPwd').val() !==''){
    				js1();
    			}
    		});
    		// 重新输入密码输入后的验证
    		$('.conPwd').blur(function(){
    			
    			if(js2()){
    				
    				$('.submit').removeAttr('disabled');
    			}
    		});
    		//提交
    		$('.submit').click(function(){
    			// alert(js1()+'-----'+js2());
    			if(js1()&&js2()){
    				$('.tishi').html('');
    				$(this).removeAttr('disabled');
    				
    			}
    			
    		});
    		//验证新密码是否一致
    		function js2(){
    			if($('.newPwd').val()==''){
    				$('.newPwd').css('border','1px solid red');
    				$('.tishi').html('*请输入新密码');
    			}else if($('.conPwd').val() !== $('.newPwd').val()){
    				 $('.submit').attr('disabled',true);
    				$('.conPwd').val('');
    				$('.conPwd').css('border','1px solid red');
    				$('.tishi').html('* 两次密码不一致，请重新输入');
    				return false;
    			}else{
    				return true;
    			}
    		}
    		//验证新密码跟原密码是否一致
    		function js1(){
    			if($('.newPwd').val() === $('.initPwd').val()){
    				$('.submit').attr('disabled',true);
    				$('.newPwd').val('');
    				$('.newPwd').css('border','1px solid red');
    				$('.tishi').html('*不能跟原密码一致，请重新输入');
    				return false;
    			}else{
    				return true;
    			}
    		}
    		function js3(){
    			var str=/^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
    			if($('.phone').val()==''){

    				$('.phone').css('border','1px solid red');
    				$('.tishi').html('*请输入手机号');
    				return false;
    			}else if(!str.test($('.phone').val())){

    				$('.phone').css('border','1px solid red');
    				$('.tishi').html('*请输入正确的手机号');
    				return false;
    			}else{
    				return true;
    			}
    		}
    		//手机号的验证
    		$('.submit2').click(function(){
    			
    			if(js3()){
    				$('.tishi').html('');
    			}
    			//下面是提交的后台请求
    			//...
    		});
    		$('.phone').focus(function(){
    			$('.phone').css('border','1px solid #e7eaec');
    			
    		})
    	});