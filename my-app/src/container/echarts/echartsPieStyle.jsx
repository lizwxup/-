import React,{Component} from 'react'
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/graphic';
class EchartsPie extends Component { 
    onWindowResize () {
        var myChart = echarts.init(document.getElementById('pie1'));
        myChart.resize();
    };    
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
       var myChart = echarts.init(document.getElementById('pie1'));
       var labelTop = {
            normal : {
                label : {
                    show : true,
                    position : 'center',
                    formatter : '{b}',
                    textStyle: {
                        baseline : 'bottom'
                    }
                },
                labelLine : {
                    show : false
                }
            }
        };
        var labelFromatter = {
            normal : {
                label : {
                    formatter : function (params){
                       // console.log(100 - params.value)
                        return 100 - params.value + '%'
                    },
                    textStyle: {
                        baseline : 'center'
                    }
                }
            },
        }
        var labelBottom = {
            normal : {
                color: '#ccc',
                label : {
                    show : true,
                    position : 'center'
                },
                labelLine : {
                    show : false
                }
            },
            emphasis: {
                color: 'rgba(0,0,0,0.2)'
            }
        };
     var radius = ['40%', '55%'];
        // 绘制图表
     var option = {         
          graphic:{
            type:'text',
            left:'28%',
            top:'28%',
            style:{
                text:'效果展示 \n 50%',
                textAlign:'center',
                fill:'#000',
                width:1000,
                height:1000
            }
         },   
            series : [
                {
                    type : 'pie',
                    center : ['30%', '30%'],
                    radius : radius, // for funnel
                    hoverAnimation:false,
                    data : [
                        {name:'', value:54},
                        {name:'', value:46}
                    ]
                }
            ]
        }
        myChart.setOption(option);
        window.addEventListener('resize', this.onWindowResize)
     }
    render () {
        return (
            <div id="pie1" style={{width: '100%', height: 300 }}></div>
        );
    }
}

export default EchartsPie;