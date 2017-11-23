 $(document).ready(function(){ 
	 $(document).keydown(function(event){ 
		 if(event.keyCode==13){ 
			 goDetail(); 
		 } 
	});
});
 /**
 * DOM结构:
 ************************************************************
 * 	div  class='ww-maplist'
 *		p class='ww-listtitle' (需检索内容)
 *		div	class='ww-listdetial'
 *			div class='ww-lefttitle'
 *				span  (需检索内容)
 *			ul
 *				li 
 *					a(需检索内容)
 *************************************************************
 */
function goDetail(){
	  // 录入的检索内容去掉空格后内容为空则提示
	  var searchField=$("#sq").val(); 
	  var field=$.trim(searchField);
	  if (field.length==0) { 
		 alert("请输入内容!");
	  } else {
		 $(".ww-maplist").hide();
		 $(".ww-listdetial").hide();
		 $(".ww-listdetial ul li").hide();
		 $(".ww-maplist").each(function(ind,obj){//第一层 map
			// console.log(obj)
			 var $list_a = $(obj);
			 var $list_t = $list_a.find(".ww-listtitle");
			 var $list_t_index = $($list_t[0]).html().indexOf(searchField);
			 if($list_t_index > -1){
				 $list_a.show();
				 $list_a.find(".ww-listdetial").show();
				 $list_a.find(".ww-listdetial ul li").show();
			 }else{
				 //ww-lefttitle
				 $list_a.find(".ww-listdetial").each(function(ind,obj){ //第二层 listdetail
					 var $list_b = $(obj);
					 var $list_b_t = $list_b.find(".ww-lefttitle span");
					 var $list_b_t_index = $($list_b_t[0]).html().indexOf(searchField);
					 //console.log(1);
					 if($list_b_t_index > -1){
						 $list_a.show();
						 $list_b.show();
						 $list_b.find(" ul li").show();
					 }else{
						 $list_b.find("ul li").each(function(ind,obj){ //第三层 li
							var $list_c = $(obj);
						 	var $list_c_a = $($list_c.find("a")[0]);
						 	var $list_c_a_index = $list_c_a.html().indexOf(searchField);
						 	if($list_c_a_index > -1){
						 		 $list_a.show();
								 $list_b.show();
								 $list_c.show();
						 	}else{
						 		
						 	}
						 })
					 }
				 });
			 }
		 })
		 
	  }
	  var all=document.getElementById("allc");
	  var allc=all.innerHTML;
	  var fen=allc.split(searchField);
	  all.innerHTML=fen.join('<span style="background:yellow;">' + searchField + '</span> ');
	    
}
