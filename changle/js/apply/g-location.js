$(function(){
	//1.初始化Table
	var oTable=new TableInit();
	oTable.Init();
	//2.初始化button点击事件
	/*var oButtonInit= new ButtonInit();
	oButtonInit.Init();*/
});

var TableInit=function(){
	var oTableInit=new Object();
	//初始化table
	oTableInit.Init=function(){
		$('#locationTable').bootstrapTable({
			url:'js/json/locationTable.json',
			toolbar:'#toolbar',
			striped:true,//是否隔行变色
			cache:false,
			pagination:true,//是否分页
			sortOrder:"asc",
			clickToSelect: true,
			/*queryParams:oTableInit.queryParams,*/
			queryParams: function (param) {
                return {};
            },//传递参数
			sidePagination:"client",
			pageNumber:1,
			pageSize:5,
			pageList:[5,10,15,20],
			search:false,
			strictSearch:false,
			showColumns:true,
			showRefresh:true,
			clickToSelect:false,
			uniqueId:"id",
			cardView:false,
			editable:true,
			detailView:false,//是否显示父子表
			columns:[
				
					{checkbox:true},
					{
						field:'id',
					 	title:'城市排序'
					},
					{
						field:'city',
					 	title:'城市名称'
					},
					{
						field:'letter',
					 	title:'关联字母'
					},
					{
						field:'isFront',
					 	title:'前台是否展示',
					 	formatter:
					 	function(value,row,index){
					 		return [
							'<select class="g-table-select">',
							'<option value="">--请选择--</option>',
							'<option value="0">是</option>',
							'<option value="1">否</option>',
							'</select>'
					 		].join('')
					 	}
					},
					{
						field:'isMulti',
					 	title:'多城市显示',
					 	formatter:
					 	function(value,row,index){
					 		return [
							'<select class="g-table-select">',
							'<option value="">--请选择--</option>',
							'<option value="0">是</option>',
							'<option value="1">否</option>',
							'</select>'
					 		].join('')
					 	}
					},
					{ 
                 	field: "ismade", 
                 	title: "操作", 
                 	align: "center",
                    formatter: 
                    function (value, row, index){
	                    return [
			               '<button id="btn_edit" type="button" class="btn btn-success btn-sm">',
			               '<span class="fa fa-pencil" aria-hidden="true"></span>更新',
			               '</button>',
			               '&nbsp;&nbsp;&nbsp;',
			               '<button id="btn_delete" type="button" class="btn btn-danger btn-sm">',
			               '<span class="fa fa-times" aria-hidden="true"></sapn>删除',
			               '</button>'
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
