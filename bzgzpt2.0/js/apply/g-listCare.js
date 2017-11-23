$(function(){
	//1.初始化Table
	var oTable=new TableInit();
	oTable.Init();
});

var TableInit=function(){
	var oTableInit=new Object();
	//初始化table
	oTableInit.Init=function(){
		$('#oldManTable').bootstrapTable({
			url:'js/json/listCareTable.json',
			toolbar:'#toolbar',
			striped:true,//是否隔行变色
			cache:false,
			pagination:true,//是否分页
			minimumCountColumns: 2,
			showExport: true,
			exportTypes:['excel'],
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
			pageSize:10,
			pageList:[10,20,50,100],
			showColumns:true,
			uniqueId:"oldnum",
			cardView:false,
			detailView:false,//是否显示父子表
			columns:[
					{
						field:'oldnum',
					 	title:'编号'
					},
					{
						field:'oldname',
					 	title:'姓名'
					},
					{
						field:'oldid',
					 	title:'身份证号'
					},
					{
						field:'oldsex',
					 	title:'性别'
					},
					{
						field:'oldage',
					 	title:'服役年数'
					},
					{
						field:'oldservice',
					 	title:'人员类型'
					},
					{
						field:'oldaddress',
					 	title:'住址'
					},
					{
						field:'plantime',
					 	title:'人数'
					},
					{
						field:'plantimeleft',
					 	title:'审核状态',
					},
					{ 
                 	field: "ismade", 
                 	title: "操作", 
                 	align: "center",
                    formatter: 
                    function (value, row, index){
	                    return [
	                       '<a href="#" title="查看">',
			               '<button id="btn_edit" type="button" class="btn btn-primary btn-xs">',
			               '<span class="fa fa-pencil-square-o" aria-hidden="true"></span>',
			               '</button>',	
			               '</a>',
			               '&nbsp;&nbsp;&nbsp;',
			               '<a href="javascript:void(0)" title="删除">',
			               '<button id="btn_delete" type="button" class="btn btn-primary btn-xs">',
			               '<span class="fa fa-times" aria-hidden="true"></sapn>',
			               '</button>',
			               '</a>',
			               '&nbsp;&nbsp;&nbsp;',
			               '<a data-toggle="modal" data-target="#huifangModal" title="审核">',
			               '<button id="btn_huifang" type="button" class="btn btn-primary btn-xs">',
			               '<span class="fa fa-bell" aria-hidden="true"></span>',
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

