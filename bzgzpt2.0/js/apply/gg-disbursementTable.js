$(function(){
	//1.初始化Table
	var oTable=new TableInit();
	oTable.Init();
});

var TableInit=function(){
	var oTableInit=new Object();
	//初始化table
	oTableInit.Init=function(){
		$('#disbursementTable').bootstrapTable({
			url:'js/json/disbursementTable.json',
			toolbar:'#toolbar',
			striped:true,//是否隔行变色
			cache:false,
			pagination:true,//是否分页
			minimumCountColumns: 1,
			queryParamsType : "limit",
			queryParams : function(params) {
			
			   return {
			          sortName: params.sort,
			          sortOrder: params.order
			        };
			},
			sidePagination:'client',
			pageNumber:1,
			pageSize:10,
			pageList:[10,20,50,100],
			showColumns:false,
			uniqueId:"aid",
			cardView:false,
			detailView:false,//是否显示父子表
			columns:[
					{
						field:'aid',
						title:'编号',
						align:"center",
						width:100,
						visible:false
						
					},
					{
						field:'title',
					 	title:'标题',
					 	align:"center",
					 	width:120
					},
					{
						field:'type',
					 	title:'类型',
					 	align:"center",
					 	width:100
					},
					{
						field:'year',
					 	title:'生效时间',
					 	align:"center",
					 	width:100
					},
					{ 
                 	field: "ismade", 
                 	title: "操作", 
                 	align: "center",
                 	width:80,
                    formatter: 
                    function (value, row, index){
	                    return [
			               '<a data-toggle="modal" data-target="#huifangModal" title="查看">',
			               '<button id="btn_huifang" type="button" class="btn btn-primary btn-sm">',
			               '<span class="fa fa-eye" aria-hidden="true"></span>',
			               '</button>',
			               '</a>'
	                    ].join('');
                	}
                }    
			]
		});
		
	};
	return oTableInit;
};

