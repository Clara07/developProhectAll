(function(){
    var jc = {};
    /** 日志输出类 */
    jc.LogUtil = {
        log:function(msg,param){ // 输出日志信息 log
        	if(window.console){
        		console.log(msg, typeof param == 'undefined' ? '':param);
        	}
        },
        warn:function(msg,param){ // 输出日志信息 warn
        	if(window.console){
        		console.warn(msg, typeof param == 'undefined' ? '':param);
        	}
        },
        error:function(msg,param){ // 输出日志信息 error
        	if(window.console){
        		console.error(msg, typeof param == 'undefined' ? '':param);
        	}
        },
        info:function(msg,param){ // 输出日志信息 info
        	if(window.console){
        		console.info(msg, typeof param =='undefined' ? '':param);
        	}
        }
    };
    jc.StrUtil = {
        trim:function(str){ // trim字符串前后空格
           return str.replace(/(^\s*)|(\s*$)/g, ''); 
        },
        lTrim :function(str){ // trim字符串左边空格
           return str.replace(/(^\s*)/g, ''); 
        },
        rTrim :function(str){ // trim字符串右边空格
           return str.replace(/(\s*$)/g, ''); 
        },
        isNull:function(str){ // 判断字符串是否为null
            if(typeof str == 'undefined' || str == null){
                return true;
            }else{
                return false;
            }
        },
        isBlank:function(str){ // 判断字符串是否为空
            if(typeof str == 'undefined' || str == null || jc.StrUtil.trim(str) == ''){
                return true;
            }else{
                return false;
            }
        },
        isNumber: function(str) {  // 判断字符串是否全为数据
            if(typeof str == 'undefined' || str == null || jc.StrUtil.trim(str) == ''){
                return false;
            }
            if (!(/^\d*$/g).test(str)) {
                return false;
            }
            return true;
        }
    };

	jc.Obejct = {
     	parseJSON:function(obj){
     		if (typeof obj == "string") {
     			if(obj=="" || null==obj){//数据为空字符串返回false
     				return false;
     			}
				obj = $.parseJSON(obj);
				if(obj.msgCode == 'SYS_101'){//解析为无权 返回false
					//$.messager.alert('信息', '会话超时，请重新登陆！', 'info');
					alert('会话超时，请重新登录！');
					parent.location.href=ctxPath+"/login/goOut";
				}else if(obj.msgCode == 'SYS_102'){
					//$.messager.alert('信息', '系统错误，请联系管理员！', 'info');
					alert('系统错误，请联系管理员！');
					return false;
				}else{//数据为其他字符串 返回obj
					return obj;
				}
				return false;
			}else{//数据为json 返回true
				if(obj.msgCode == 'SYS_101'){//解析为无权 返回false
					//$.messager.alert('信息', '会话超时或您没有访问权限！', 'info');
					alert('会话超时，请重新登录！');
					parent.location.href=ctxPath+"/login/goOut";
					return false;
				}else if(obj.msgCode == 'SYS_102'){
					//$.messager.alert('信息', '系统错误，请联系管理员！', 'info');
					alert('系统错误，请联系管理员！');
					return false;
				}else{
					return obj;
				}
				return true;
			}
     	}
     	
     };

    window.jc = jc;
})(window)
;

/** 替换全部字符 */
String.prototype.replaceAll = function(s1,s2){   
	return this.replace(new RegExp(s1,"gm"),s2);
}
String.prototype.trim = function(){
	return jc.StrUtil.trim(this);
}

$.messager.defaults={ok:"确定",cancel:"取消"};


(function($) {
  // options是js文件中设置的属性
  $.fn.toolBar = function(options) {
  	var cnt = this;
  	// 控件的默认属性
	var defaults={
  		url:'../login/getToolBar',
  		page:300001,
  		nowrap:false
  	};
 
  	// 页面中设置的属性
  	$.each($(this)[0].attributes,function(idx,item){
  		if(item.name=='page'){
  			defaults['page']=item.value;
  		}else if(item.name=='url'){
  			defaults['url']=item.value;
  		}else if(item.name=='nowrap'){
  			defaults['nowrap']=item.value;
  		}
  	});

	var opts = $.extend(defaults, options);
	if(jc.StrUtil.isBlank(opts.url)){
		jc.LogUtil.error('取得toolBar的相对URL路径不能为空！');
	}else if(!jc.StrUtil.isNumber(opts.page+'')){
		jc.LogUtil.error('此页面的UUID不能为空！');
	}
	
	// 如果要求不换行，则添加不换行的CSS
	if(opts.nowrap){
		cnt.css({'white-space':'nowrap','overflow': 'hidden'});
	}
	
	$.post(opts.url,[{name:'page',value:opts.page}],
	  function(data){
	  	var str="";
	    $.each(data,function(idx, item){
	    	if(idx==0){
	    		str = '<a id="toolbar'+ item.uuid+'-first" class="easyui-linkbutton"  href="javascript:;" ';
	    	}else if(idx==data.length-1){
	    		str = '<a id="toolbar'+ item.uuid+'-last" class="easyui-linkbutton"  href="javascript:;" ';
	    	}else{
	    		str = '<a id="toolbar'+ item.uuid+'-middle" class="easyui-linkbutton"  href="javascript:;" ';
	    	}

           if(!jc.StrUtil.isBlank(item.openMethod)){//判断页面打开方式
           		if(item.openMethod==2){
           			str+= 'onclick="'+item.jsMethod+'()"';
           		}else if(item.openMethod==1){
           			 str+= 'onclick="parent.addTabPage(\''+item.uuid+'\',\''+item.name+'\',\''+item.iconCls+'\',\'\',\'\',\''+item.url+'\')"';//通过新标签页
           		}
           }
            if(!jc.StrUtil.isBlank(item.iconCls)){//判断图标是否为空
            	str+=" iconCls='"+item.iconCls+"'";
            }
            if(!jc.StrUtil.isBlank(item.title)){//判断title是否为空
            	str+=" title='"+item.title+"'";
            }
            str+=' >'+item.name+'</a>';
	    	$(cnt).append(str);
	    });
	    
	  	//页面部分从新渲染easyui 样式
   		$.parser.parse(cnt);
  	    
		var osWidth = window.document.body.offsetWidth;
		var lastOs = $('#'+cnt[0].id+' a').last().offset();
		var lastWdth = $('#'+cnt[0].id+' a').last().width();
		if(cnt.width() - lastOs.left - lastWdth < 17 || cnt.width() > osWidth){
			cnt.css({'margin-left':'16px', 'margin-right':'16px'});
		  	var ofset = cnt.first().offset();
			cnt.parent().prepend('<a class="toolbar_arrow" style="z-index:99999;left:'+(ofset.left-17)+'px;top:'+(ofset.top+1)+'px;" href="javaScript:void(0)" onclick="toolBarMove(1,\''+cnt[0].id+'\')"><span class="toolbar_left"></span></a>');
			cnt.parent().append('<a class="toolbar_arrow" style="z-index:99999;right:0px;top:'+(ofset.top+1)+'px;" href="javaScript:void(0)" onclick="toolBarMove(2,\''+cnt[0].id+'\')"><span class="toolbar_right"></span></a>');	  		  	
		}
	  }
	);
  };     
})(jQuery);

var bars=new Array;
/** 移动toolBar中的标签位置 */
function toolBarMove(direct, tlbar){
	// 向左移
	if(direct == 1){
		if($('#'+tlbar+' a').first().attr("id").split("-")[1]=='last'){//判断是否为最后一个
		}else{
			bars.push($('#'+tlbar+' a').first());//将移除的对象放入数组
			$('#'+tlbar+' a').first().remove();
			//$('#'+tlbar+' a').first().insertAfter($('#'+tlbar+' a').last());		
		}
	// 向右移
	}else{
		if($('#'+tlbar+' a').first().attr("id").split("-")[1]=='first'){//判断是否为第一个
		}else{
			bars[bars.length-1].insertBefore($('#'+tlbar+' a').first());
			bars.splice(bars.length-1,1);////将恢复的按钮对象重数组中移除
			//arr.splice(idx,num,element)  idx开始删除下标，num删除个数，element插入元素
			//$('#'+tlbar+' a').last().insertBefore($('#'+tlbar+' a').first());
		}
	}
}
//数字格式化
//s:待处理数字 n:小数位数
function fnumber(s, n)   
{   
   if((null==s || ""==s || undefined==s || isNaN(s)) && s!=0 && s!="0"){
	   return s;
   }
   s=Math.abs(s);//取绝对值
   n = n > 0 && n <= 20 ? n : 2;   
   s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";   
   var l = s.split(".")[0].split("").reverse(),   
   r = s.split(".")[1];   
   t = "";   
   for(i = 0; i < l.length; i ++ )   
   {   
      t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");   
   }
   return t.split("").reverse().join("") + "." + r;  
} 
//数字格式化还原
function rnumber(s)   
{   
   return parseFloat(s.replace(/[^\d\.-]/g, ""));   
} 
//去空格方法（type :be , all）
function Trim(str,type) 
{ 
	var result=str; 
	if(type.toLowerCase()=="be"){//去首尾空格
		result = str.replace(/(^\s+)|(\s+$)/g,""); 
	}else if(type.toLowerCase()=="all") {//去所有空格
		result = result.replace(/\s/g,""); 
	}
	return result; 
}
//加载等待提示框
function onloading(){  
     $("<div class=\"datagrid-mask\"></div>").css({display:"block",width:"100%",height:$(document.body).height()}).appendTo("body");   
     $("<div class=\"datagrid-mask-msg\"></div>").html("正在处理，请稍候 . . .").appendTo("body").css({display:"block",'font-size':"14px",left:($(document.body).outerWidth(true) - 190) / 2,top:($(document.body).height() - 45) / 2});   
}
//移除等待提示框  
function removeload(){  
    $(".datagrid-mask").remove();  
    $(".datagrid-mask-msg").remove();  
} 
//自定义遮罩
function opencover(){
	$("<div class=\"datagrid-mask\"></div>").css({display:"block",width:"100%",height:$(document.body).height()}).appendTo("body");
}
//关闭遮罩
function closecover(){
	$(".datagrid-mask").remove();
}
//自定义dilog监听 打开关闭遮罩层
function dlglistener(obj){
	 $("#"+obj).dialog({
               onClose:function(){
                   closecover();
               },
               onOpen:function(){
               	opencover();
               }
          });
}
//验证输入查询条件中是否有非法字符
function checkSql(sql){  
	var patrn=/[`~!@#$%^&*_+<>?"{},.\/;'[\]]/im;
    if(patrn.test(sql)){  
        return true;     
    }     
    return false;  
}
//屏蔽页面中F5 ,变换成刷新当前标签页 
document.onkeydown = function () {
//屏蔽页面中不可编辑的文本框中的backspace按钮事件  
	if (window.event.keyCode == 8) {     
	        if (document.activeElement.readOnly == undefined || document.activeElement.readOnly == true) {   
	            return event.returnValue = false;   
	        }    
	}   
    if (window.event.keyCode == 116 && !(window.event.ctrlKey && window.event.keyCode==116)) { 
		location.reload()         
        //禁用F5 
        window.event.keyCode = 0;  
       	return false;   
    }   
}
//ajax 请求公共处理类
$.ajaxSetup({ 
	error: function (XMLHttpRequest, textStatus, errorThrown){
		if(XMLHttpRequest.status==403){
			alert('您没有权限访问此资源或进行此操作');
			return false;
		}
	},  
    complete:function(XMLHttpRequest,textStatus){
		if(typeof(XMLHttpRequest.getResponseHeader)=='function' )
			{
				var sessionstatus=XMLHttpRequest.getResponseHeader("sessionstatus"); //通过XMLHttpRequest取得响应头,sessionstatus -- response.setHeader
		    	var headerresult=XMLHttpRequest.getResponseHeader("headerresult"); //通过XMLHttpRequest获取响应头信息,headerresult -- response.setHeader
		   		//var resulttext = XMLHttpRequest.responseText;//取得相应信息text -- response.getWriter();
		        if(sessionstatus=="timeout"){   
		           jc.Obejct.parseJSON(headerresult);//通过公共方法处理 返回信息字符串
		   	    }   
			
			}
    }   
});

//名称、编号处理
//name 名称
//no 编号 
//单元格宽度 显示长度限制
function dealNameNo(name,no,width){
	var surwidth = width;
	var length = 0;
	var dealstr = "";//对应列表字符串
	var allstr="";//title 对应字符串
	var flag=true;
	if(null!=no && ""!=no){
		dealstr+="["+no+"]";
		allstr+="["+no+"]";
	}
	if(null!=name && ""!=name){
		allstr+=name;
	}
	if(width<dealstr.length*6){
		dealstr=no.substr(0,surwidth/6-2);
		flag=false;
	}else if(width>=(dealstr.length*6+(name+"").length*12)){
		dealstr+=name;
	}else{
		surwidth = width-dealstr.length*6;
		dealstr+=name.substring(0,surwidth/12-1);
		flag=false;
	}
	if(dealstr=="" || dealstr==null || dealstr=='null'){
		return "<span>- -</span>";
	}
	return flag?dealstr:("<span title=\""+allstr+"\">"+dealstr+"...</span>");
}

//EasyUI用DataGrid用日期格式化
 jc.DateUtil = {
        DateFormatter: function (value) {
		    if (value == undefined) {
		        return "";
		    }
		    var time=new Date(value); 
		    var year = time.getFullYear();
		    var month = time.getMonth()+1;
		    month = month<10?"0"+month:month;
		    var day = time.getDate()<10?"0"+time.getDate():time.getDate();
		    var hours = time.getHours()<10?"0"+time.getHours():time.getHours();
		    var minutes = time.getMinutes()<10?"0"+time.getMinutes():time.getMinutes();
		    var seconds = time.getSeconds()<10?"0"+ time.getSeconds(): time.getSeconds();
		     return year + "-" + month+ "-" + day+" "+hours+":"+minutes+":"+seconds;
		}}
 jc.FormUtil = {
		 /**
		  * 将form中的值转换为键值对：
		  * @param form {string} 表单selector  例如："#uploadform"
		  * @returns {} 表单json对象
		  */
		 getFormJson:function(form) {
		 	var o = {};
		 	var a = $(form).serializeArray();
		 	$.each(a, function() {
		 		if (o[this.name] !== undefined) {
		 			if (!o[this.name].push) {
		 				o[this.name] = [ o[this.name] ];
		 			}
		 			o[this.name].push(this.value || '');
		 		} else {
		 			o[this.name] = this.value || '';
		 		}
		 	});
		 	return o;
		 }
 }
 
 
 /**
  * 将form中的值转换为键值对：
  * @param form {string} 表单selector  例如："#uploadform"
  * @returns {} 表单json对象
  */
 function getFormJson(form) {
 	var o = {};
 	var a = $(form).serializeArray();
 	$.each(a, function() {
 		if (o[this.name] !== undefined) {
 			if (!o[this.name].push) {
 				o[this.name] = [ o[this.name] ];
 			}
 			o[this.name].push(this.value || '');
 		} else {
 			o[this.name] = this.value || '';
 		}
 	});
 	return o;
 }

 Date.prototype.format = function(format) {
	  var o = {
	    "M+" : this.getMonth() + 1, // 月
	    "d+" : this.getDate(), // 天
	    "h+" : this.getHours(), // 时
	    "m+" : this.getMinutes(), // 分
	    "s+" : this.getSeconds(), // 秒
	    "q+" : Math.floor((this.getMonth() + 3) / 3), // 刻
	    "S" : this.getMilliseconds() //毫秒
	  // millisecond
	  }
	  if (/(y+)/.test(format))
	    format = format.replace(RegExp.$1, (this.getFullYear() + "")
	        .substr(4 - RegExp.$1.length));
	  for ( var k in o)
	    if (new RegExp("(" + k + ")").test(format))
	      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
	          : ("00" + o[k]).substr(("" + o[k]).length));
	  return format;
	}