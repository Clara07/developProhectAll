$(function(){
	//新增人员信息表tab切换
	$(".gg-infoTitle a").on("click",function(){
		//$("this").addClass("gg-tabactive").siblings().removeClass("gg-tabactive");
		var index =  $(this).index();
		$(".gg-allInfo .gg-infoDetail:eq("+index+")").show().siblings().hide();
		$(".gg-infoTitle a span").css('color','#333333');
		$(this).children('span').css('color','#13b5b1');
	});
});
