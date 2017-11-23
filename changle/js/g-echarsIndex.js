/*首页展示echarts图标需要的js文件   author:guoxiaozhen*/
/*echarts html related data js document author:Clara*/
$(function(){
	/*环形图*/
	var pieChart= echarts.init(document.getElementById('pieChart'),'macarons');
    var pieoption = {
    	color:['#ffd500','#2bcaca','#36a9f9','#5434da','#1bba5d','#f245a6'],
	    title:{
	        text:'服务类别占领情况',
	        x:'center',
	       textStyle:{
	           fontSize:'24',
	           fontWeight:'bold'
	       }
	    },
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a}:{b}"
	    },
	    legend: {
	        orient: 'vertical',
	        x: 'center',
	        y:'bottom',
	        data:['助行                         2%','助乐                         65%','助医                         3%','助洁                         15%','助浴                          0%','助餐                         15%']
	    },
	    series: [
	        {
	            name:'占比统计',
	            type:'pie',
	            radius: ['50%', '70%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	                emphasis: {
	                    show:false,
	                    textStyle: {
	                        fontSize: '30',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:2, name:'助行                         2%'},
	                {value:65, name:'助乐                         65%'},
	                {value:3, name:'助医                         3%'},
	                {value:15, name:'助洁                         15%'},
	                {value:0, name:'助浴                          0%'},
	                {value:15, name:'助餐                         15%'},
	            ]
	        }
	    ]
	};
	 pieChart.setOption(pieoption);
	 $(window).resize(pieChart.resize);
	/*柱状图one*/
	var barChartOne= echarts.init(document.getElementById('barChartOne'),'macarons');
	var barOneoption = {
		color: ['#2bcaca'],
		title:{
			text:'月均服务量:126766',
			subtext:'月均服务量总计',
	        x:'left',
	        textStyle:{
	           fontSize:'24',
	           fontWeight:'bold'
	        },
		},
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            data : ['3月', '4月', '5月', '6月', '7月'],
	            axisTick: {
	                alignWithLabel: true
	            }
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'本月服务量',
	            type:'bar',
	            barWidth: '40%',
	            data:[62890, 107532, 138965, 180765, 29853]
	        }
	    ]
	};
	barChartOne.setOption(barOneoption);
	$(window).resize(barChartOne.resize);
	/*柱状图TWO*/
	var barChartTwo= echarts.init(document.getElementById('barChartTwo'),'macarons');
	var barTwooption = {
		color: ['#36a9f9'],
		title:{
			text:'地区服务总量',
	        x:'left',
	        textStyle:{
	           fontSize:'24',
	           fontWeight:'bold'
	        },
		},
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            data : ['长乐', '秀屿', '福安', '连江', '永定','新罗','周宁','连城'],
	            axisTick: {
	                alignWithLabel: true
	            }
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'服务总量',
	            type:'bar',
	            barWidth: '50%',
	            data:[25053,39783,40267, 60427, 92073,128907,30131,50342]
	        }
	    ]
	};
	barChartTwo.setOption(barTwooption);
	$(window).resize(barChartTwo.resize);
})

