$(function(){
	//1.初始化Table
	var oTable=new TableInit();
	oTable.Init();
});

var TableInit=function(){
	var oTableInit=new Object();
	//初始化table
	oTableInit.Init=function(){
		$('#volunTable').bootstrapTable({
			url:'js/json/workOrderTable.json',
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
						field:'ordernum',
					 	title:'订单编号'
					},
					{
						field:'serviceobject',
					 	title:'服务对象'
					},
					{
						field:'thisservicetime',
					 	title:'本次服务时长'
					},
					{
						field:'serviceprefer',
					 	title:'满意度'
					},
					{ 
                 	field: "ismade", 
                 	title: "操作", 
                 	align: "center",
                    formatter: 
                    function (value, row, index){
	                    return [
	                       '<a href="#">',
			               '<button id="btn_edit" type="button" class="btn btn-primary btn-sm">',
			               '查看详情',
			               '</button>',	
			               '</a>'
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

