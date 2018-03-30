import React,{Component} from 'react'
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
class EchartsPie extends Component {
    
        onWindowResize () {
            var myChart = echarts.init(document.getElementById('pie'));
            myChart.resize();
        };    
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
       var myChart = echarts.init(document.getElementById('pie'));
        // 绘制图表
        myChart.setOption({
            title: { text: '' },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['家用电器','食用酒水','个护健康','视频广告','搜索引擎']
             },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    hoverAnimation:false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            // formatter:function(){
                            //     return '总资产元'
                            // },
                            // textStyle:{
                            //     fontSize:'46',
                            //     color:'green'
                            // }
                        },
                        emphasis: {
                            show: true,
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
                        {value:335, name:'家用电器'},
                        {value:310, name:'食用酒水'},
                        {value:234, name:'个护健康'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ]
                }
            ],
            color: ['rgb(254,67,101)','rgb(133,67,224)','rgb(47,194,91)','rgb(250,204,20)','#188df0']
        });
        window.addEventListener('resize', this.onWindowResize)
    }
    render() {
        return (
            <div id="pie" style={{ width: '100%', height: 400 }}></div>
        );
    }
}

export default EchartsPie;