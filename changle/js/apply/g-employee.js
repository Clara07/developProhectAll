$(function(){
	//1.初始化Table
	var oTable=new TableInit();
	oTable.Init();
});

var TableInit=function(){
	var oTableInit=new Object();
	//初始化table
	oTableInit.Init=function(){
		$('#employeeTable').bootstrapTable({
			url:'js/json/employeeTable.json',
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
			uniqueId:"empnum",
			cardView:false,
			detailView:false,//是否显示父子表
			columns:[
					{
						field:'empnum',
					 	title:'员工编号'
					},
					{
						field:'empname',
					 	title:'员工姓名'
					},
					{
						field:'empsex',
					 	title:'性别'
					},
					{
						field:'emptel',
					 	title:'联系电话'
					},
					{
						field:'emptotalwork',
					 	title:'累计工时'
					},
					{
						field:'empprefer',
					 	title:'满意度'
					},
					{ 
                 	field: "ismade", 
                 	title: "操作", 
                 	align: "center",
                    formatter: 
                    function (value, row, index){
	                    return [
	                       '<a href="admineditEmployee.html">',
			               '<button id="btn_edit" type="button" class="btn btn-primary btn-sm">',
			               '<span class="fa fa-pencil-square-o" aria-hidden="true"></span>编辑',
			               '</button>',	
			               '</a>',
			               '&nbsp;&nbsp;&nbsp;',
			               '<a href="javascript:void(0)>',
			               '<button id="btn_delete" type="button" class="btn btn-primary btn-sm">',
			               '<span class="fa fa-times" aria-hidden="true"></sapn>删除',
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

