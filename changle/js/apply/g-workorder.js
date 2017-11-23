$(function(){
	//1.初始化Table
	var oTable=new TableInit();
	oTable.Init();
});

var TableInit=function(){
	var oTableInit=new Object();
	//初始化table
	oTableInit.Init=function(){
		$('#workOrderTable').bootstrapTable({
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
			showExport:true,
			exportDataType:"basic",
			uniqueId:"ordernum",
			cardView:false,
			detailView:false,//是否显示父子表
			columns:[
					{
						field:'ordernum',
					 	title:'订单编号'
					},
					{
						field:'serviceproject',
					 	title:'服务项目'
					},
					{
						field:'ordertime',
					 	title:'预约时间'
					},
					{
						field:'orderstatus',
					 	title:'工单状态'
					},
					{
						field:'oldname',
					 	title:'老人姓名'
					},
					{
						field:'oldaddress',
					 	title:'住址'
					},
					{
						field:'serviceorganization',
					 	title:'服务组织'
					},
					{
						field:'serviceperson',
					 	title:'服务人员',
					 	formatter:
					 	function(value,row,index){
					 		return [
					 		'<a data-toggle="modal" data-target="#selectpersonModal">',
					 		'<button id="selectpersonbtn" type="button" class="btn btn-success btn-xs">请选择',
					 		'</button>'
					 		].join('');
					 	}
					},
					{
						field:'servicedetail',
					 	title:'服务详情'
					},
					{
						field:'servicetime',
					 	title:'服务时长',
					},
					{ 
                 	field: "ismade", 
                 	title: "操作", 
                 	align: "center",
                    formatter: 
                    function (value, row, index){
                    	var status = row.orderstatus;
                    	var res=[];
                    	var str=[];
                    	if(status!="完成" && status!="服务中"){
                    		str=['<a>',
			               '<button id="btn_start" type="button" class="btn btn-success btn-xs">',
			               '<span class="fa fa-pencil-square-o" aria-hidden="true"></span>开始服务',
			               '</button>',	
			               '</a>',
			               '&nbsp;&nbsp;&nbsp;']
                    	}
                    	return res.concat(str,
			               ['<a>',
			               '<button id="btn_stop" type="button" class="btn btn-success btn-xs">',
			               '<span class="fa fa-times" aria-hidden="true"></sapn>结单',
			               '</button>',
			               '</a>',
			               '&nbsp;&nbsp;&nbsp;',
			               '<a data-toggle="modal" data-target="#orderDetailModal">',
			               '<button id="btn_detail" type="button" class="btn btn-success btn-xs">',
			               '<span class="fa fa-bell" aria-hidden="true"></span>详情',
			               '</button>',
			               '</a>',
			               '&nbsp;&nbsp;&nbsp;',
			               '<a data-toggle="modal" data-target="#orderSearchModal">',
			               '<button id="btn_search" type="button" class="btn btn-success btn-xs">',
			               '<span class="fa fa-bell" aria-hidden="true"></span>追踪',
			               '</button>',
			               '</a>'
	                    ]).join('');
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

