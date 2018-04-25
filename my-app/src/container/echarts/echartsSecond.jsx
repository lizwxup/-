import React,{Component} from 'react'
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
class EchartsTest extends Component {
    constructor(props) {
        super(props)
        this.initPie = this.initPie.bind(this)    
    }
    initPie (data) {
       var myChart = echarts.init(document.getElementById('main1'));
        // 绘制图表
       var option = {
            title: { text: '销售量' },
            tooltip: {},
            xAxis: {
                data: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月","9月","10月","11月","12月"]
            },
            yAxis: {},
            series: [{
                name: '销售额趋势',
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#83bff6'},
                                {offset: 0.5, color: '#188df0'},
                                {offset: 1, color: '#188df0'}
                            ]
                        )
                    },
                    emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#2378f7'},
                                {offset: 0.7, color: '#2378f7'},
                                {offset: 1, color: '#83bff6'}
                            ]
                        )
                    }
                },
                data: data
            }]
        };
        myChart.setOption(option);
       // console.log('绑定的数据')
      //  console.log(data)
        window.addEventListener('resize', this.onWindowResize)
    }
    onWindowResize () {
        var myChart = echarts.init(document.getElementById('main1'));
        myChart.resize();
    };   
    componentDidUpdate() {
        this.initPie([100, 200, 400, 300, 690, 1000,200,120,500,40,50,700])
    } 
    componentDidMount() {
        this.initPie([100, 200, 400, 300, 690, 1000,200,120,500,40,50,700])
    }
    onTextChange () {
       var  newState= '这是数据啊' 
        //这里将子组件的信息传递给了父组件  
       //this.props.callbackParent(newState);     
       fetch('http://117.78.33.100:8080/yysite/v1/article/details?article_id=3',{
            method: 'get',
       }).then((res)=>{
            if(res.ok) {
                res.text().then((data)=> {
                     console.log(data);
                })
            }
       }).catch((error)=>{
            console.log(error)
       })
    }
    render () {
        //console.log('表格中所传过来的值：'+this.props.checked)
        var  checked = this.props.checked;
        return (
            <div>
                <button onClick={this.onTextChange.bind(this)}>点击事件</button>
                <div id="main1" style={{width: '100%', height: 400 }} checked={checked}></div>
            </div>
        );
    }
}

export default EchartsTest;