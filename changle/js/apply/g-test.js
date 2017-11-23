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
		 $('#OldManTable').bootstrapTable({
 
                method: 'get',
 
                url:'js/json/oldman.json',
 
                striped: true,
 
                pagination: true,
 
                pageSize: 50,
 
                pageList: [10, 25, 50, 100, 200],
 
                search: true,
 
                sidePagination: "client",
 
                showColumns: true,
 
                minimunCountColumns: 2,
 
                columns: [{
 
                    field: 'state',
 
                    radio: true
 
                }, {
 
                    field: 'Id',
 
                    title: 'ID',
 
                    align: 'right',
 
                    valign: 'bottom',
 
                    sortable: true
 
                }, {
 
                    field: 'UserName',
 
                    title: '姓名',
 
                    width: 100,
 
                    align: 'center',
 
                    valign: 'middle',
 
                    sortable: true,
 
 
                }, {
 
                    field: 'Account',
 
                    title: '账号',
 
                    align: 'left',
 
                    valign: 'top',
 
                    sortable: true
 
                }, {
 
                    field: 'Address',
 
                    title: '家乡',
 
                    align: 'middle',
 
                    valign: 'top',
 
                    sortable: true
 
                }, {
 
                    field: 'Phone',
 
                    title: '电话',
 
                    align: 'left',
 
                    valign: 'top',
 
                    sortable: true
 
                }, {
 
                    field: 'QQ',
 
                    title: 'QQ号码',
 
                    align: 'left',
 
                    valign: 'top',
 
                    sortable: true
 
                }, {
 
                    field: 'Remark',
 
                    title: '备注',
 
                    align: 'left',
 
                    valign: 'top',
 
                    sortable: true
                }, 
                 { 
                 	field: "Operator", 
                 	title: "操作", 
                 	align: "center",
                    formatter: 
                    function (value, row, index){
                    return [
		               '<a class="like" href="javascript:void(0)" title="Like">',
		               '<i class="glyphicon glyphicon-heart"></i>',
		               '</a>',
		               '<a class="remove" href="javascript:void(0)" title="Remove">',
		               '<i class="glyphicon glyphicon-remove"></i>',
		               '</a>'
                    ].join('');
                }
                }
            });
 
	};
	return oTableInit;
}
