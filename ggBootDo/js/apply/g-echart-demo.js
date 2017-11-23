$(function(){
	/*横向柱形图*/
	var barChart = echarts.init(document.getElementById("echarts-bar-chart"));
    var baroption = {
        tooltip : {
            trigger: 'axis',
            axisPointer:{
            	type:'shadow'
            }
        },
        legend: {
            data:['公诉案件','自诉案件','刑事诉讼','民事诉讼','死刑复核']
        },
        grid:{
            left:'3%',
            right:'4%',
            bottom:'3%',
            containLabel:true
        },
        xAxis : [
            {
            	type:'value'
            }
        ],
        yAxis : [
            {
              type:'category',
              data:['2.21','2.22','2.23','2.24','2.25','2.26','2.27']
            }
        ],
        series : [
            {
                name:'公诉案件',
                type:'bar',
                stack:'总量',
                label:{
                	normal:{
                		show:true,
                		position:'insideRight'
                	}
                },
                data:[320,302,301,334,390,330,320]
            },
            {
            	name:'自诉案件',
            	type:'bar',
            	stack:'总量',
            	label:{
            		normal:{
            			show:true,
            			position:'insideRight'
            		}
            	},
            	data:[120,132,101,134,90,230,210]
            },
            {
            	name:'刑事诉讼',
            	type:'bar',
            	stack:'总量',
            	label:{
            		normal:{
            			show:true,
            			position:'insideRight'
            		}
            	},
            	data:[220,182,191,234,290,330,310]
            },
            {
            	name:'民事诉讼',
            	type:'bar',
            	stack:'总量',
            	label:{
            		normal:{
            			show:true,
            			position:'insideRight'
            		}
            	},
            	data:[150,212,201,154,190,330,410]
            },
            {
            	name:'死刑复核',
            	type:'bar',
            	stack:'总量',
            	label:{
            		normal:{
            			show:true,
            			position:'insideRight'
            		}
            	},
            	data:[820,832,901,934,1290,1330,1320]
            }
        ]
    };
    barChart.setOption(baroption);
    window.onresize = barChart.resize;
    /*饼状图echarts-bar-chart*/
   	var pieChart = echarts.init(document.getElementById("echarts-pie-chart"));
    var pieoption = {
        tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直达', selected:true},
                {value:679, name:'营销广告'},
                {value:1548, name:'搜索引擎'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],

            data:[
                {value:335, name:'直达'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1048, name:'百度'},
                {value:251, name:'谷歌'},
                {value:147, name:'必应'},
                {value:102, name:'其他'}
            ]
        }
    ]
    };
    pieChart.setOption(pieoption);
    $(window).resize(pieChart.resize);
});
