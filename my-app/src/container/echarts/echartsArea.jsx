import React,{Component} from 'react'
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
class EchartsAreaTest extends Component {
    
    onWindowResize () {
            var myChart = echarts.init(document.getElementById('area'));
            myChart.resize();
    };    
     componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
       var myChart = echarts.init(document.getElementById('area'));
        // 绘制图表
        myChart.setOption({
            title: { text: '访问量' },
            tooltip: { 
                 trigger: 'axis',
                 position: function (pt) {
                     return [pt[0], '10%'];
                }},
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data:["2018-5-6", "2018-8-9", "2018-9-85", "2017-8-9", "2017-10-8", "2017-11-20","2011-35-39"],
                show : false,
                splitLine:{show: false},//去除网格线
            },
            yAxis: {
                type: 'value',
                splitLine:{show: false},
                show : false,
                boundaryGap: [0, '100%']
            },
            series: [{
                name:'模拟数据',
                type:'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: '#188df0'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#83bff6'
                        }, {
                            offset: 1,
                            color: '#188df0'
                        }])
                    }
                },
                data: [100,91.3,122.8,109,120]
            }]
        });
        window.addEventListener('resize', this.onWindowResize)
    }
    render() {
        return (
            <div id="area" style={{ width: '100%', height: 220 }}></div>
        );
    }
}

export default EchartsAreaTest;