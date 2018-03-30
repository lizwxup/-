import React,{Component} from 'react'
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
class EchartsLine extends Component {
    
        onWindowResize () {
            var myChart = echarts.init(document.getElementById('Line'));
            myChart.resize();
        };    
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
       var myChart = echarts.init(document.getElementById('Line'));
        // 绘制图表
        myChart.setOption({
            title: { text: '' },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['邮件营销','联盟广告']
            },
             xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} °C'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
             series: [
                {
                    name:'邮件营销',
                    type:'line',
                    stack: '总量',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'联盟广告',
                    type:'line',
                    stack: '总量',
                    data:[220, 182, 191, 234, 290, 330, 310]
                }
         ]
        });
        window.addEventListener('resize', this.onWindowResize)
    }
    render() {
        return (
            <div id="Line" style={{ width: '90%', height: 400 }}></div>
        );
    }
}


export default EchartsLine;