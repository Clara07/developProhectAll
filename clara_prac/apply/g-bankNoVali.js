/*
* @Author: Clara
* @Date:   2017-08-22 14:44:39
* @Last Modified by:   Clara
* @Last Modified time: 2017-08-22 14:48:17
*/
$(document).ready(function(){

	//校验银行号格式
	$("#").on('blur',function(t_bankno){
		var bankno =$.trim(t_bankno.val());
		if(bankno ==""){
				alert("请填写本人银行卡号!")
				return false;
			}
			if(bankno.length<16 || bankno.length>19){
				alert("银行卡号长度在16-19位之间");
				return false;
			}
			 var num = /^\d*$/; //全数字
	        if(!num.exec(bankno)) {
	            $("#banknoInfo").html("银行卡号必须全为数字");
	            return false;
	        }
			//开头6位
			var strBin = "10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";
			if(strBin.indexOf(bankno.substr(0,2))==-1){
				alert("银行卡号开头6位不符合规范");
				return false;
			}
			//Luhm校验(新)
			if(!luhmCheck(bankno)){
				return false;
			}
			$('#banknoInfo').html("校验通过")
			return true;
	});
})