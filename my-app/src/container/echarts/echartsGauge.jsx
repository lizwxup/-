import React,{Component} from 'react'
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/gauge';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class echartsGauge extends Component{
    componentDidMount(){
        var myChart = echarts.init(document.getElementById('gauge'));
        var option = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '跳出率',
                    type: 'gauge',
                    detail: {formatter:'{value}%'},
                    data: [{value: 50, name: '跳出率'}],
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 10,
                            color: [[0.3, 'skyblue'],[0.6, 'skyblue'],[0.8, 'skyblue'],[1, 'skyblue']], 
                        }
                   },
                    axisTick: {            // 坐标轴小标记
                        length: 10,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                  },
                 axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                    show: true,
                    formatter: function(v){
                        switch (v+''){
                            case '10': return '差';
                            case '30': return '中';
                            case '60': return '良';
                            case '90': return '优';
                            default: return '';
                        }
                    },
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        color: '#333'
                    }
                 },
                    splitLine: {           // 分隔线
                        length: 15,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                }
            ]
      };
      myChart.setOption(option, true);
    }
    render () {
        return (
            <div id="gauge" style={{width:400,height:300}}></div>
        )
    }
}

export default echartsGauge