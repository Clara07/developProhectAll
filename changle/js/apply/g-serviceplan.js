$(function(){
	//1.初始化Table
	var oTable=new TableInit();
	oTable.Init();
});

var TableInit=function(){
	var oTableInit=new Object();
	//初始化table
	oTableInit.Init=function(){
		$('#serviceplanTable').bootstrapTable({
			url:'js/json/serviceplanTable.json',
			toolbar:'#toolbar',
			striped:true,//是否隔行变色
			cache:false,
			pagination:true,//是否分页
			queryParamsType : "limit",
			queryParams : function(params) {
			
			   return {
			          sortName: params.sort,
			          sortOrder: params.order
			        };
			},
			clickToSelect: true,
			sidePagination:'client',
			pageNumber:1,
			pageSize:5,
			pageList:[5,10,15,20],
			showColumns:true,
			showRefresh:true,
			uniqueId:"oldnum",
			cardView:false,
			detailView:false,//是否显示父子表
			columns:[
					{
						field:'plansection',
					 	title:'计划区间'
					},
					{
						field:'planproject',
					 	title:'服务项目'
					},
					{
						field:'plantime',
					 	title:'计划时长'
					},
					{
						field:'plantimeuse',
					 	title:'已服务时长'
					},
					{
						field:'plantimeleft',
					 	title:'剩余计划时长'
					},
					{ 
                 	field: 'ismade', 
                 	title: '操作', 
                 	align: 'center',
                    formatter: 
                    function (value, row, index){
	                    return [
	                       '<a data-toggle="modal" data-target="#serviceorderModal">',
			               '<button id="btn_order" type="button" class="btn btn-primary btn-sm">',
			               '<span class="fa fa-phone" aria-hidden="true"></span>&nbsp;快速预约',
			               '</button>',
	                    ].join('');
                	}
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

