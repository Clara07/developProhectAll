$(function(){
	//1.初始化Table
	var oTable=new TableInit();
	oTable.Init();
});

var TableInit=function(){
	var oTableInit=new Object();
	// var url = ctxManager+"/aba31/aba31_getPage";
	var url=[
	{
		id:11,
		abax3101:111,
		name:111,
		idcard:111,
		abjx0112:111,
		abax3104:111,
		addressDetail:111,
		linkCel:111,
		abjx0103:111,
		checkName:11,
		ismade:11
	}
	];
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
						 	width:80
						},{
							field:'userName',
						 	title:'用户姓名',
						 	// visible:false,
						 	width:80
						},
						{
							field:'userIdcard',
						 	title:'身份证号',
						 	width:100
						},
						{
							field:'userPhone',
						 	title:'手机号',
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

var userList = {
		
	/*
	 * 查询
	 */
	chakan : function(){

			$('#careSoliderTable').bootstrapTable('refresh');
			/*$table.bootstrapTable('resetView');*/
	}
	
}



