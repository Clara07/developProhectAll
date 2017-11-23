$(function(){
	//新增人员信息表tab切换
	$(".gg-infoTitle a").on("click",function(){
		//$("this").addClass("gg-tabactive").siblings().removeClass("gg-tabactive");
		var index =  $(this).index();
		$(".gg-allInfo .gg-infoDetail:eq("+index+")").show().siblings().hide();
		$(".gg-infoTitle a span").css('color','#333333');
		$(this).children('span').css('color','#13b5b1');
	});
	//拨付单模块资金维护界面按钮控制
	$(".g-disburse-table input").attr("readonly","readonly");
  	$(".g-disburse-table input").css("background-color","#fff")
	$('.g-btn-adjust').on("click",function(){
		$(this).parent().prev().find('input').removeAttr("readonly");
		$(this).parent().prev().find('input').css("border","1px solid #e5e6e7");
	});
	$('.g-btn-save').on("click",function(){
		$(this).parent().prev().find('input').attr("readonly","readonly");
		$(this).parent().prev().find('input').css("border","none");
	});
	//校验拨付单界面金额输入框校验
	$('.g-disburse-cell').on('blur',function(){
		if( !/^[0-9]{1,}(?:.[0-9]{0,2})?$/.test(this.value)){
			alert('只能输入数字，小数点后只能保留两位');
			this.value='';
		}
	});
	
});
