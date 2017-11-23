$("").ready(function(){
	// 用户管理的新增和列表展示
	$(".adduser").click(function(){
		$(".right-table").css('display','none');
		$(".contain-add").css('display','block');
	})
	//新添用户的提交事件
	var str1=/^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
	var str2 = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	$("form").submit( function () {
		if($('.userName').val()==''){
			$('.error-title').css('display','block');
			$('.error-title').html('*请输入姓名');
			return false;
		}else if($(".userJuese").val()==''){
			$('.error-title').css('display','block');
			$('.error-title').html('*请输入角色名称');
			return false;
		}else if($(".userJiedao").val()=='请选择'){
			$('.error-title').css('display','block');
			$('.error-title').html('*请选择所属街道');
			return false;
		}else if($(".userIDcard").val()==''){
			$('.error-title').css('display','block');
			$('.error-title').html('*请输入身份证号');
			return false;
		}else if($(".userPhone").val()==''){
			$('.error-title').css('display','block');
			$('.error-title').html('*请输入手机号');
			return false;
		}else if(!str2.test($('.userIDcard').val())){
			$('.error-title').css('display','block');
			$('.error-title').html('*身份证号码格式不正确，请重新输入');
			$('.userIDcard').val('');
			return false;
		}else if(!str1.test($('.userPhone').val())){
			$('.error-title').css('display','block');
			$('.error-title').html('*手机号格式不正确，请重新输入');
			$('.phone').val('');
			return false;
		}else{
			return true;
		}
	  
	} );
	// 删除按钮
	$('.deluser').click(function(){
		 var arrs=new Array();

        $("input[type='checkbox']:checked").each(function(){ 
        	
            arrs.push($(this).val());
            $(this).parents('tr').css('display','none');
            //把要删除的数据的id发给后台
            // console.log($(this).parents('tr').attr('trId'));
        });
        if(arrs.length==0 ){
            alert('请选择数据!');
            return ;
        }
	})
	//部门管理
	$(".deitDepart").click(function(){
		$("input").attr('disabled',false);
		$("select").attr('disabled',false);
	});
	$(".save").click(function(){
		if($('.departName').val()==''){
			$('.error-title').css('display','block');
			$('.error-title').html('*请输入组织名称');
		}else if($('.departNum').val()==''){
			$('.error-title').css('display','block');
			$('.error-title').html('*请输入组织代码');
		}else if($('.departZuzhi').val()=='请选择'){
			$('.error-title').css('display','block');
			$('.error-title').html('*请选择上级组织');
		}else{
			$('.error-title').css('display','none');
			$("input").attr('disabled',true);
			$("select").attr('disabled',true);
		}
		

	})
	// 新增部门
	$(".addDepart").click(function(){
		$("input").val('');
		$("input").attr('disabled',false);
		$("select").attr('disabled',false);
		$("select").val('请选择');


	})
	//删除
	$(".deleteDepart").click(function(){
		if(window.confirm('确认提交删除操作？')){
			// $('.departList').css('display','none');
			$('.departList input').val('');
			$('.departList input').removeAttr('disabled');
			$('.departList select').val('请选择').attr('disabled','false');
			$('.departList select').removeAttr('disabled');
		}
	})

	//角色管理
	$('.addRole').click(function(){
		$('.roleRight').css('display','block');
		$('.roleName').val('');
	})
	$(".roleSave").click(function(){
		 // alert($('.rolechoose').prop('checked'));
		if($('.roleName').val()==''){
			$('.error-title').css('display','block');
			$('.error-title').html('*请输入角色名称');
		}else if($('.roleNum').val()==''){
			$('.error-title').css('display','block');
			$('.error-title').html('*请输入角色编号');
		}else if(!$('.rolechoose').prop('checked')){
			$('.error-title').css('display','block');
			$('.error-title').html('*请选择功能');
		}else{
			$('.error-title').css('display','none');
			$(".roleLeft").append("<li><i class='fa fa-user'></i><span>"+$('.roleName').val()+"</span></li>");
			$('.roleRight').css('display','none');
			

			 
		}
	});

	// 资源管理
	//提交按钮
	$('.resourceBtn').click(function(){

		if($(".resourceName").val()==''){

			$('.resourceTitle').css('display','block');
			$('.resourceTitle').html('*请输入资源名称');
		}else if($('.resourceChoose').val()=='请选择'){
			$('.resourceTitle').css('display','block');
			$('.resourceTitle').html('*请选择是否可见');
		}else if($(".resourceNum").val()==''){
			$('.resourceTitle').css('display','block');
			$('.resourceTitle').html('*请输入序号');
		}else{
			$('.resourceTitle').css('display','none');
			//提交到后台
		}
	});
	//删除按钮
	$(".resourceDel").click(function(){
		location.reload();
	})
})
