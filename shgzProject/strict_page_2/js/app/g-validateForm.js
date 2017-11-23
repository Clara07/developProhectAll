/*jQueryValidate插件进行校验的通用js*/
$(function() {
	// 匹配密码，以字母开头，长度在5-12之间，必须包含数字和特殊字符。
	jQuery.validator.addMethod("isPwd", function(value, element) {
		var str = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){3,11}$/;
		return this.optional(element) || (str).test(value);
	}, "以字母开头，长度在6-12之间，必须包含数字和特殊字符。");
	$('#modifyPwdForm').validate({
		errorElement: 'span',
		errorClass: 'help-block',
		rules: {
			presentPwd: {
				required: true,
				isPwd: true
			},
			newPwd: {
				required: true,
				isPwd: true
			},
			confirmPwd: {
				required: true,
				isPwd: true,
				equalTo: '#newPwd'
			}
		},
		messages: {
			presentPwd: {
				required: "请输入当前密码",
				minlength: jQuery.validator.format("密码不能少于{0}个字符")
			},
			newPwd: {
				required: "请输入新密码",
				minlength: jQuery.validator.format("密码不能少于{0}个字符")
			},
			confirmPwd: {
				required: "请确认密码",
				minlength: "确认密码字符长度不符",
				equalTo: "两次输入密码不一致"
			}

		},
		errorPlacement: function(error, element) {
			element.next().remove();
			element.after('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
			element.closest('.form-group').append(error);
		},

		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error has-feedback');
		},
		success: function(label) {
			var el = label.closest('.form-group').find("input");
			el.next().remove();
			el.after('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');
			label.closest('.form-group').removeClass('has-error').addClass("has-feedback has-success");
			label.remove();
		},
		submitHandler: function(form) {
			alert("更新成功!");
		}
	});
});