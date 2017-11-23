/*微信端对应的公共js*/
$(function(){
	//声明的几个全局变量
		var pNum_=0;//初始化手机号长度变量
		var rpNum_=/^(1[34578]\d{9})$/;//手机号正则表达式
		var countdown=60; //倒计时初始化变量
	//tab切换
	var tab_wp2 = $('.gg-tab').find('li'),
		examine_wp = $('.gg-muiCard');
	tab_wp2.on('tap', function() {
		tab_wp2.find('span').removeClass("sitip");
		$(this).find('span').addClass("sitip");
		examine_wp.hide();
		examine_wp.eq($(this).index()).show();
	});
	$('.sgwhite').on('click',function(){
		history.back(-1);
	});
	//验证码倒计时
	//验证码60秒倒计时
	$('#phone').on('keyup',function(){
		pNum_=$('#phone').val().length;
		ppNum_=$('#phone').val();
		if(pNum_ == 11 && rpNum_.test(ppNum_)){
			$('#getCaptcha').removeAttr("disabled");
			$('#getCaptcha').removeClass("gg-wx-captchaNo");
			$('#getCaptcha').addClass("gg-wx-captcha");
		}else{
			$('#getCaptcha').attr("disabled","true");
			$('#getCaptcha').removeClass("gg-wx-captcha");
			$('#getCaptcha').addClass("gg-wx-captchaNo");
		}
	});
	var val=document.getElementById('getCaptcha');
	$('#getCaptcha').click(function(){
		settime(val);
	});
	//倒计时函数
	function settime(val){
		if(countdown == 0){
			val.removeAttribute("disabled");
			val.value='获取验证码';
			val.removeAttribute("class","gg-wx-captchaNo");
			val.setAttribute("class","gg-wx-captcha");
			countdown = 60;
		}else{
			val.setAttribute("disabled","true");
			val.removeAttribute("class","gg-wx-captcha");
			val.setAttribute("class","gg-wx-captchaNo");
			val.value='重新发送'+'('+countdown+'s)';
				countdown--; 
				setTimeout(function() { 
		    		settime(val) 
		    		},1000)
			}
		}
	//绑定时间控件
	bindDatePicker('#registime');
	bindDatePicker('.ctm');
	bindDatePicker('.rsts','.rste');
	
	//选择社工成员
	$('.gg-wx-Btnck').on('tap',function(){
		$(this).find('.gg-wx-right').toggle();
		$(this).toggleClass('gg-wx-proBtnSele gg-wx-proBtn');
	});
	//选择知识分类
	$('.gg-mui-KnBtn').on('tap',function(){
		$(this).toggleClass('gg-mui-KnBtn gg-mui-KnBtnActive mui-icon mui-icon-checkbox-filled mui-right');
	});
	
	//点击收起
	$('#_cloBtnAct').on('tap',function(){
		$('#cloActContenTwo').slideToggle();
		$('#cloActContenOne').toggle();
		$(this).toggle();
		$('#_cloBtnActShow').toggle();
	});
	//点击展开
	$('#_cloBtnActShow').on('tap',function(){
		$('#cloActContenTwo').slideToggle();
		$('#cloActContenOne').toggle();
		$(this).toggle();
		$('#_cloBtnAct').toggle();
	});
	//add forms
	$('.fmcpbtns').each(function() {
		var fmcpbtns = $(this),
			cpTpl = fmcpbtns.prev(),
			cpTplHtml = cpTpl.html();

		fmcpbtns.click(function() {
			var _this = $(this);
			
			if(!this.flg) {
				this.flg = 1;
			}
			if(this.flg>1){
				mui.alert("移动设备最多添加2次,如需添加更多,请使用电脑操作");
				return;
			}
			if(!this.tab) {
				this.tab = _this.attr('tab').split('-');
			}
			var tmp = cpTplHtml.replace(/name="(.*?)"/gmi, "name=\"$1" + this.flg + "\"");
			tmp = tmp.replace(/id="(.*?)"/gmi, "id=\"$1" + this.flg + "\"");
			tmp = tmp.replace(/ctm/gmi, "ctm" + this.flg);

			_this.before('<div class="mui-card">' + tmp + '</div>');

			bindDatePicker('#' + this.tab[0] + this.flg, '#' + this.tab[1] + this.flg);

			$('.ctm' + this.flg).fdatepicker({
				format: 'yyyy/mm/dd'
			});
			this.flg++;
		});
	});
	//添加更多兄弟姐妹和子女信息
	$('.fmcpbtnsPP').each(function() {
		var fmcpbtns = $(this),
			cpTpl = fmcpbtns.prev(),
			cpTplHtml = cpTpl.html();

		fmcpbtns.click(function() {
			var _this = $(this);
			
			if(!this.flg) {
				this.flg = 1;
			}
			if(this.flg>2){
				mui.alert("信息最多添加2次,如需添加更多,请使用电脑操作");
				return;
			}
			if(!this.tab) {
				this.tab = _this.attr('tab').split('-');
			}
			var tmp = cpTplHtml.replace(/name="(.*?)"/gmi, "name=\"$1" + this.flg + "\"");
			tmp = tmp.replace(/id="(.*?)"/gmi, "id=\"$1" + this.flg + "\"");
			tmp = tmp.replace(/ctm/gmi, "ctm" + this.flg);

			_this.before('<div class="mui-card-content">' + tmp + '</div>');

			bindDatePicker('#' + this.tab[0] + this.flg, '#' + this.tab[1] + this.flg);

			$('.ctm' + this.flg).fdatepicker({
				format: 'yyyy/mm/dd'
			});
			this.flg++;
		});
	});
	
});
//图片回显的函数
function imgPreview(fileDom) {
	//判断是否支持FileReader
	if(window.FileReader) {
		var reader = new FileReader();
	} else {
		alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
	}

	//获取文件
	var file = fileDom.files[0];
	var imageType = /^image\//;
	//是否是图片
	if(!imageType.test(file.type)) {
		mui.alert("请选择图片！");
		return;
	}
	//读取完成
	reader.onload = function(e) {
		//获取图片dom
		var img = document.getElementById("preview");
		//图片路径设置为读取的图片
		img.src = e.target.result;
	};
	reader.readAsDataURL(file);
}
//身份证回显国徽面
function imgPreviewPez(fileDom) {
	//判断是否支持FileReader
	if(window.FileReader) {
		var reader = new FileReader();
	} else {
		alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
	}

	//获取文件
	var file = fileDom.files[0];
	var imageType = /^image\//;
	//是否是图片
	if(!imageType.test(file.type)) {
		mui.alert("请选择图片！");
		return;
	}
	//读取完成
	reader.onload = function(e) {
		//获取图片dom
		var img = document.getElementById("previewPez");
		//图片路径设置为读取的图片
		img.src = e.target.result;
	};
	reader.readAsDataURL(file);
}
//身份证回显人像面
function imgPreviewPef(fileDom) {
	//判断是否支持FileReader
	if(window.FileReader) {
		var reader = new FileReader();
	} else {
		alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
	}

	//获取文件
	var file = fileDom.files[0];
	var imageType = /^image\//;
	//是否是图片
	if(!imageType.test(file.type)) {
		mui.alert("请选择图片！");
		return;
	}
	//读取完成
	reader.onload = function(e) {
		//获取图片dom
		var img = document.getElementById("previewPef");
		//图片路径设置为读取的图片
		img.src = e.target.result;
	};
	reader.readAsDataURL(file);
}
//绑定时间的函数
function bindDatePicker(p1, p2) {
	var nowTemp = new Date();
	var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
	var checkin = $(p1).fdatepicker({
		format:   'yyyy/mm/dd'
	}).on('changeDate', function(ev) {
		if(ev.date.valueOf() > checkin.date.valueOf()) {
			var newDate = new Date(ev.date)
			newDate.setDate(newDate.getDate() + 1);
			checkout.update(newDate);
		}
		checkin.hide();
	}).data('datepicker');
	var checkout = $(p2).fdatepicker({
		format:   'yyyy/mm/dd'
	}).on('changeDate', function(ev) {
		checkout.hide();
	}).data('datepicker');
}