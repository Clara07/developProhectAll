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
			url:'js/json/oldTable.json',
			toolbar:'#toolbar',
			striped:true,//是否隔行变色
			cache:false,
			pagination:true,//是否分页
			sortName:'plantimeleft',
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
					 	title:'年龄'
					},
					{
						field:'oldservice',
					 	title:'服务组织'
					},
					{
						field:'oldaddress',
					 	title:'住址'
					},
					{
						field:'plantime',
					 	title:'计划时长'
					},
					{
						field:'plantimeleft',
					 	title:'剩余计划时长',
					 	sortable: true
					},
					{ 
                 	field: "ismade", 
                 	title: "操作", 
                 	align: "center",
                    formatter: 
                    function (value, row, index){
	                    return [
	                       '<a href="admineditOldMan.html">',
			               '<button id="btn_edit" type="button" class="btn btn-primary btn-sm">',
			               '<span class="fa fa-pencil-square-o" aria-hidden="true"></span>编辑',
			               '</button>',	
			               '</a>',
			               '&nbsp;&nbsp;&nbsp;',
			               '<a href="javascript:void(0)>',
			               '<button id="btn_delete" type="button" class="btn btn-primary btn-sm">',
			               '<span class="fa fa-times" aria-hidden="true"></sapn>删除',
			               '</button>',
			               '</a>',
			               '&nbsp;&nbsp;&nbsp;',
			               '<a data-toggle="modal" data-target="#huifangModal">',
			               '<button id="btn_huifang" type="button" class="btn btn-primary btn-sm">',
			               '<span class="fa fa-bell" aria-hidden="true"></span>回访',
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

