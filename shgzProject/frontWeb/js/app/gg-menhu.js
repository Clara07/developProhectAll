/*门户网站对应的js*/
$(function () {
	//字体大小切换
	$("#w-big").on("click",function () {
        $(".gg-NewsDetailCon").find("*").css("font-size","18px");
    });
    $("#w-middle").on("click",function () {
    	$(".gg-NewsDetailCon").find("*").css("font-size","16px");
    });
    $("#w-small").on("click",function () {
    	$(".gg-NewsDetailCon").find("*").css("font-size","14px");
    });
	//首页社会项目和政策文件切换
	$(".gg-swPolProTitle li").on("mouseover",function(){
		$(this).addClass("gg-tabactive").siblings().removeClass("gg-tabactive");
		var index =  $(this).index();
		$(".tab-content .gg-swPoPrList:eq("+index+")").show().siblings().hide();
	});
	//切换社工结构和社工风采
	$(".gg-swFcTitle li").on("mouseover",function(){
		$(this).addClass("gg-tabactive").siblings().removeClass("gg-tabactive");
		var index =  $(this).index();
		$(".tab-content .gg-swFcList:eq("+index+")").show().siblings().hide();
	});
	//切换社工项目简介和承接的项目
	$(".gg-OrganRTitle li").on("click",function(){
		$(this).addClass("gg-tabactive").siblings().removeClass("gg-tabactive");
		var index =  $(this).index();
		$(".tab-content .gg-OrganRDetail:eq("+index+")").show().siblings().hide();
	});
	//切换社工机构列表视图
	$('#gg_GridBtn').on('click',function(){
		$('.gg-organGridView').show();
		$('.gg-organListView').hide();
		$(this).removeClass('gx-btn');
		$('#gg_GridBtn').addClass('gx-btnActive');
		$('#gg_ListBtn').addClass('gx-btn');
	})
	$('#gg_ListBtn').on('click',function(){
		$('.gg-organGridView').hide();
		$('.gg-organListView').show();
		$(this).removeClass('gx-btn');
		$('#gg_ListBtn').addClass('gx-btnActive');
		$('#gg_GridBtn').addClass('gx-btn');
	});
	//切换辅导资料和历年真题
	$(".gg-swExamListTitle li").on("click",function(){
		$(this).addClass("gg-tabactive").siblings().removeClass("gg-tabactive");
		var index =  $(this).index();
		$(".tab-content .gg-swExamListDetail:eq("+index+")").show().siblings().hide();
	});
});