var currentShowCity=0;

$(document).ready(function() {
    // var nowTemp = new Date();
    // var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
    // var checkin = $('#dpd1').fdatepicker({
    //     format:   'yyyy-mm-dd',
    //     onRender: function(date) {
    //         return date.valueOf() < now.valueOf() ? 'disabled' : '';
    //     }
    // }).on('changeDate', function(ev) {
    //     if (ev.date.valueOf() > checkout.date.valueOf()) {
    //         var newDate = new Date(ev.date)
    //         newDate.setDate(newDate.getDate() + 1);
    //         checkout.update(newDate);
    //     }
    //     checkin.hide();
    //     $('#dpd2')[0].focus();
    // }).data('datepicker');
    // var checkout = $('#dpd2').fdatepicker({
    //     format:   'yyyy-mm-dd',
    //     onRender: function(date) {
    //         return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
    //     }
    // }).on('changeDate', function(ev) {
    //     checkout.hide();
    // }).data('datepicker');


    var show_wp = $('.show_wp');
    $('.tab li').click(function() {
        $(this).parent().find('li').removeClass('ac');
        $(this).addClass('ac');
        show_wp.hide();
        show_wp.eq($(this).index()).show();
    });


    $('#import').click(function() {
        layer.open({
            type: 1,
            title: '数据导入结果',
            content: '<div class="msg_wp">\
			  	<ul><li>共计上传500条数据</li><li>导入成功<em>460</em>条数据，导入失败<b>40</b>条</li><li class="tc"><input type="button" class="pub_btn" value="下载错误数据报告" onclick="window.location.href=\'error.html\'"></li></ul>\
			  </div>'
        });
    });

    var show_charts = $('.show_charts');
    $('.wstatistic_charts_items li').click(function() {

        $(this).parent().find('li').removeClass('charts_column');
        $(this).addClass('charts_column');
        show_charts.hide();
        show_charts.eq($(this).index()).show();
    });


    var right_show_charts = $('.right_show_charts');
    $('.right_wstatistic_charts_items li').click(function() {
        $(this).parent().find('li').removeClass('charts_column');
        $(this).addClass('charts_column');
        right_show_charts.hide();
        right_show_charts.eq($(this).index()).show();
    });

    // circle
    (function() {
        var app = echarts.init(document.getElementById('left_circle_wp'));

        app.title = '青岛市各区社会工作人员情况';

        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['市南区', '市北区', '李沧区', '崂山区', '黄岛区']
            },
            series: [{
                name: '总量',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '18',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    { value: 335, name: '市南区' },
                    { value: 310, name: '市北区' },
                    { value: 234, name: '李沧区' },
                    { value: 135, name: '崂山区' },
                    { value: 1548, name: '黄岛区' }
                ]
            }]
        };
        app.setOption(option);
    })();
    (function() {
        //column
        var app = echarts.init(document.getElementById('left_column'));

        app.title = '青岛市社会工作机构情况分析';

        option = {
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['市南区', '市北区', '李沧区', '崂山区', '黄岛区'],
                axisTick: {
                    alignWithLabel: true
                }
            }],
            yAxis: [{
                type: 'value'
            }],
            series: [{
                name: '总量',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390]
            }]
        };

        app.setOption(option);
    })();


    // circle
    (function() {
        var app = echarts.init(document.getElementById('right_circle_wp'));

        app.title = '青岛市各区社会工作人员情况';

        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['市南区', '市北区', '李沧区', '崂山区', '黄岛区']
            },
            series: [{
                name: '总量',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '18',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    { value: 335, name: '市南区' },
                    { value: 310, name: '市北区' },
                    { value: 234, name: '李沧区' },
                    { value: 135, name: '崂山区' },
                    { value: 1548, name: '黄岛区' }
                ]
            }]
        };
        app.setOption(option);
    })();
    (function() {
        //column
        var app = echarts.init(document.getElementById('right_column'));

        app.title = '青岛市社会工作机构情况分析';

        option = {
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['市南区', '市北区', '李沧区', '崂山区', '黄岛区'],
                axisTick: {
                    alignWithLabel: true
                }
            }],
            yAxis: [{
                type: 'value'
            }],
            series: [{
                name: '总量',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390]
            }]
        };

        app.setOption(option);
    })();

// $("#wstastic_data_start").change(function(){
//     $("#wstastic_data_start option").each(function(i,o){
//      if($(this).attr("selected"))
//         {
//              $("#wstastic_data_end").hide();
//              $("#wstastic_data_end").eq(i).show();
//          }
//     });
//   });

  
})














