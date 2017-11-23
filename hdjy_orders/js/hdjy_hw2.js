$(function(){
	$(".hh-listTab ul li").on("click",function(){
		$(this).addClass("hh-active").siblings().removeClass("hh-active")
	});
	
	/*商圈菜单动画样式*/
	$(".hh-headerB .hh-hbUl> li").hover(function(){
		$(this).find(".hh-hbUlin").stop().slideDown(300);
	},function(){
		$(this).find(".hh-hbUlin").stop().slideUp(300);
	});
});
