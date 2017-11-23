$(function(){
	//1.初始化Table
	var oTable=new TableInit();
	oTable.Init();
});

var TableInit=function(){
	var oTableInit=new Object();
	// var url = ctxManager+"/aba31/aba31_getPage";
	var url='';
	//初始化table
	oTableInit.Init=function(){
		$('#careSoliderTable').bootstrapTable({
			url:url,
			method: 'post',  
			toolbar:'#toolbar',
			striped:true,//是否隔行变色
			cache:false,
			pagination:true,//是否分页
			minimumCountColumns: 2,
			queryParamsType : "",
			contentType: "application/x-www-form-urlencoded",
			queryParams : function(params) {
			
			   return {
				   	  name:$("#name").val(),
				   	azcp0002:$("#idcard").val(),
				   	abjx0103:$("#abjx0103").val(),
				   	abax3140:$("#abax3140").val(),
				   	linkCel:$("#linkCel").val(),
				   	  pageSize: params.pageSize,
			          pageIndex: params.pageNumber,
			        };
			},
			responseHandler: function(res) {
				if(res.rowCount==0){
					$("#careSoliderTable tbody").hide();
				}else{
					$("#careSoliderTable tbody").show();
				}
                return {
                    total: res.rowCount,//总条数
                    rows: res.records//数据
                 };
            },
			clickToSelect: true,
			sidePagination:'server',
			pageNumber:1,
			pageSize:10,
			pageList:[10,20,50,100],
			//showColumns:true,
			uniqueId:"abax3101",
			//cardView:false,
			detailView:false,//是否显示父子表
			columns:[
					{
						 	checkbox:true
						},{
							field:'userAccount',
						 	title:'用户账号',
						 	// visible:false,
						 	width:100
						},{
							field:'userName',
						 	title:'用户姓名',
						 	// visible:false,
						 	width:80
						},
						{
							field:'userIdcard',
						 	title:'身份证号',
						 	width:80
						},
						{
							field:'userPhone',
						 	title:'手机号',
						 	width:80
						},
						{
							field:'userJiedao',
						 	title:'所属街道',
						 	width:80
						},
						
						{
							field:'userUse',
						 	title:'是否可用',
						 	width:100
						}
				]
		});
		
	};
	/*得到查询参数*/
	oTableInit.queryParams=function(params){
		var temp={
			limit:params.limit,//页面的大小
			offset:params.offset,//页码
		};
		return temp;
	};
	return oTableInit;
};

var roleList = {
		/**
		 * 删除
		 */
		 
		shan : function(){

			var selList = $("#careSoliderTable").bootstrapTable('getSelections');
			if(selList.length >1 || selList.length==0 ){
				layer.msg("请选择一条数据进行编辑。")
			}else{
				var checkState = selList[0].abax3140;
				if(checkState==1 || checkState == 2){
					layer.alert('',{icon:2,title:'删除确认',content:'您确定要删除这条记录吗？',closeBtn:1},function(index){
							layer.close(index);
							window.location.href = ctx+"/manager/aba31/shanchu?id="+selList[0].id+"&abax3101="+selList[0].abax3101;
						});
				}else{
					layer.alert("请选择审核状态为“未审核”或“街道审核”的数据进行删除。")
				}
			}
		},
	/**
	 * 编辑
	 */
	update : function(){

		var selList = $("#careSoliderTable").bootstrapTable('getSelections');

		if(selList.length >1 || selList.length==0 ){
			layer.msg("请选择一条数据进行编辑。")
		}else{
			var checkState = selList[0].abax3140;
			if(checkState==1 || checkState == 4){
				window.location.href = ctx+"/manager/aba31/updateInit?id="+selList[0].id+"&abax3101="+selList[0].abax3101;
			}else{
				layer.alert("请选择审核状态为“未审核”或“区市退回”的数据进行编辑。")
			}
		}
	},
	/**
	 * 授权
	 */
	shouquan : function(){
		
		var selList = $("#careSoliderTable").bootstrapTable('getSelections');

		if(selList.length >1 || selList.length==0 ){
			layer.msg("请选择一条数据进行编辑。")
		}
	},
	

	/**
	 * 审核
	 */
	shenhe : function(){
		var selList = $("#careSoliderTable").bootstrapTable('getSelections');
		if(selList.length >1 || selList.length==0 ){
			layer.msg("请选择一条数据进行审核。")
		}else{
			var checkState = selList[0].abax3246;
			layer.load();
			window.location.href = ctx+"/manager/aba31/getCheck?id="+selList[0].id+"&abax3101="+selList[0].abax3101;
		}
	},
	/*
	 * 查询
	 */
	chakan : function(){

			$('#careSoliderTable').bootstrapTable('refresh');
			/*$table.bootstrapTable('resetView');*/
	},
	reset:function(){
		$('input').val('');
	}
	
}



