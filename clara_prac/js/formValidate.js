/*this is basic form validation using for validation person's basic information author:Clara Guo data:2017/07/20*/
$(document).ready(function(){
	//手机号码验证身份证正则合并：(^\d{15}$)|(^\d{17}([0-9]|X)$)
	jQuery.validator.addMethod("isPhone",function(value,element){
		var length = value.length;
		var phone=/^1[3|4|5|7|8][0-9]\d{8}$/;
		return this.optional(element)||(length == 11 && phone.test(value));
	},"请填写正确的11位手机号");
	//电话号码验证
	jQuery.validator.addMethod("isTel",function(value,element){
		var tel = /^(0\d{2,3}-)?\d{7,8}$/g;//区号3,4位,号码7,8位
		return this.optional(element) || (tel.test(value));
	},"请填写正确的座机号码");
	//姓名校验
	jQuery.validator.addMethod("isName",function(value,element){
		var name=/^[\u4e00-\u9fa5]{2,4}$/;
		return this.optional(element) || (name.test(value));
	},"姓名只能用汉字,长度2-4位");
	//校验用户名
	jQuery.validator.addMethod("isUserName",function(value,element){
		var userName=/^[a-zA-Z0-9]{2,13}$/;
		return this.optional(element) || (userName).test(value);
	},'请输入数字或者字母,不包含特殊字符');
	// 匹配密码，以字母开头，长度在5-12之间，必须包含数字和特殊字符。
	jQuery.validator.addMethod("isPwd", function(value, element) {
		var str = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){3,11}$/;
		return this.optional(element) || (str).test(value);
	}, "以字母开头，长度在6-12之间，必须包含数字和特殊字符。");
	//校验身份证
	jQuery.validator.addMethod("isIdentity",function(value,element){
		var id= /^(\d{15}$|^\d{18}$|^\d{17}(\d|X))$/;
		return this.optional(element) || (id.test(value));
	},"请输入正确的15或18位身份证号,末尾为大写X");
	//校验出生日期
	jQuery.validator.addMethod("isBirth",function(value,element){
		var birth = /^(19|20)\d{2}-(1[0-2]|0?[1-9])-(0?[1-9]|[1-2][0-9]|3[0-1])$/;
		return this.optional(element) || (birth).test(value);
	},"出生日期格式示例2000-01-01")
	$("#submit_form").validate({
		errorElement:'span',
		errorClass:'help-block',
		rules:{
			username:{
				required:true,
				isUserName:true
			},
			name:{
				required:true,
				isName:true
			},
			sex:"required",
			identity:{
				required:true,
				isIdentity:true
			},
			birth:"required",
			password:{
				required:true,
				isPwd:true
			},
			confirm_password:{
				required:true,
				isPwd:true,
				equalTo:"#password"
			},
			mobile:{
				required:true,
				isPhone:true
			},
			tel:{
				isTel:true
			},
			email:{
				required:true,
				email:true
			}
		},
		messages:{
			username:{
				required:"请输入用户名",
				isUserName:"用户名不包含特殊符号!"
			},
			name:{
				required:"请输入中文姓名",
				isName:"姓名只能为汉字"
			},
			sex:{
				required:"请输入性别"
			},
			identity:{
				required:"请输入身份证号",
				isIdentity:"请输入正确的身份证号,末尾字母大写"
			},
			birth:{
				required:"请输入出生年月"
			},
			password:{
				required:"请输入密码",
				minlength:jQuery.validator.format("密码不能少于{0}个字符")
			},
			confirm_password:{
				required:"请确认密码",
				minlength:"确认密码字符长度不符",
				equalTo:"两次输入密码不一致"
			},
			mobile:{
				required:"请输入手机号"
			},
		},
	
	
		errorPlacement:function(error,element){
			element.next().remove();
			element.after('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
			element.closest('.form-group').append(error);
		},
		
		highlight:function(element){
			$(element).closest('.form-group').addClass('has-error has-feedback');
		},
		success:function(label){
			var el = label.closest('.form-group').find("input");
			el.next().remove();
			el.after('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');
			label.closest('.form-group').removeClass('has-error').addClass("has-feedback has-success");
			label.remove();
		},
		submitHandler:function(form){
			alert("保存成功!");
		}
	});
});