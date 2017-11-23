$(function(){
	/*柱形图*/
	var barChart = echarts.init(document.getElementById("echarts-bar-chart"));
    var baroption = {
        title : {
            text: '服务类别'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer:{
            	type:'shadow'
            }
        },
        legend: {
            data:['站点服务','志愿陪伴','评估服务','家政服务','医护服务']
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
                name:'站点服务',
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
            	name:'志愿陪伴',
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
            	name:'评估服务',
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
            	name:'家政服务',
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
            	name:'医护服务',
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
        title : {
            text: '服务项目一览表',
            subtext: '提供的服务类型和分类',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['助行服务','维修服务','助餐服务','护理服务','助洁服务','陪同散步','故障维修','养老陪护','上门中医康复','养老保姆','营养午餐',
            '玻璃清洗','家电维修','病患陪护','站点中医康复','钟点家政','午餐配送','站点取餐','上门助浴','代办事项','空调维修','小扫除','代购物品','家具维修',
            '墙地面防水','衣物清洗','管道疏通','上门理发','抽烟机清洗','陪同就诊','中风术后康复训练','大扫除','洁具安装']
        },
        calculable : true,
        series : [
            {
                name:'访问来源',
                type:'pie',
                selectedMode:'single',
                radius : ['0','30%'],
                label:{
                	normal:{
                		position:'inner'
                	}
                },
                labelLine:{
                	normal:{
                		show:false
                	}
                },
                data:[
                    {value:320, name:'维修服务'},
                    {value:335, name:'助行服务'},
                    {value:310, name:'助洁服务'},
                    {value:234, name:'护理服务'},
                    {value:135, name:'助餐服务'},
                    {value:1548, name:'养老陪护'}
                ]
            },
            {
            	name:'访问来源',
            	type:'pie',
            	radius:['40%',"55%"],
            	data:[
                    {value:335, name:'助行服务'},
                    {value:310, name:'维修服务'},
                    {value:135, name:'助餐服务'},
                    {value:320, name:'护理服务'},
                    {value:335, name:'助洁服务'},
                    {value:310, name:'陪同散步'},
                    {value:234, name:'故障维修'},
                    {value:135, name:'养老陪护'},
                    {value:320, name:'上门中医康复'},
                    {value:335, name:'养老保姆'},
                    {value:310, name:'营养午餐'},
                    {value:234, name:'玻璃清洗'},
                    {value:135, name:'家电维修'},
                    {value:320, name:'病患陪护'},
                    {value:335, name:'站点中医康复'},
                    {value:310, name:'钟点家政'},
                    {value:234, name:'午餐配送'},
                    {value:135, name:'站点取餐'},
                    {value:320, name:'上门助浴'},
                    {value:335, name:'代办事项'},
                    {value:310, name:'空调维修'},
                    {value:234, name:'小扫除'},
                    {value:135, name:'代购物品'},
                    {value:320, name:'家具维修'},
                    {value:335, name:'墙地面防水'},
                    {value:310, name:'衣物清洗'},
                    {value:234, name:'管道疏通'},
                    {value:135, name:'上门理发'},
                    {value:320, name:'抽烟机清洗'},
                    {value:335, name:'陪同就诊'},
                    {value:335, name:'中风术后康复训练'},
                    {value:335, name:'大扫除'},
                    {value:1548, name:'洁具安装'}
            	]
            }
        ]
    };
    pieChart.setOption(pieoption);
    $(window).resize(pieChart.resize);
})
