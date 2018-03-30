import React , { Component } from 'react'
import { Row, Col,Icon,Tabs,Card} from 'antd';
import '../css/index.css';
import EchartsGauge from './echarts/echartsGauge'
import EchartsPieStyle from './echarts/echartsPieStyle'
class List extends Component{
    render () {
        return (
            <div>
                    <Row style={{height:750,background:'#f0f2f5'}}>
                     {/*<Col span={18}   style={{height:180,background:'blue'}}>
                        swswswsw</Col>
                    <Col  span={6} pull={6} style={{height:180,background:'red'}}>
                        
                   </Col>*/}
                    <Col span={6} push={18}   style={{height:180,background:'blue'}}>
                        <Card title="活动情况预测" bordered={false} style={{ width: '100%'}}>
                                <p>目标评估</p><p className="set-size">有望达到预期</p>
                                <p>1520 亿元</p>
                                <p>1520 亿元</p>
                        </Card>
                         <Card title="券核效率" bordered={false} style={{ width: '100%',marginTop:20}}>
                                {/*<p>目标评估</p><p className="set-size">有望达到预期</p>
                                <p>1520 亿元</p>
                                <p>1520 亿元</p>*/}
                                <EchartsGauge></EchartsGauge>
                        </Card>
                    </Col>
                    <Col span={17} pull={6}  style={{height:180,background:'red',marginRight:30}}>
                        <Card title="活动实时交易情况" bordered={false} style={{ width: '100%',marginRight:10 }}>
                                <Row gutter={16}>
                                    <Col span={6} ><p>今日交易总额</p><p className="set-size"> 124,543,233元</p></Col>
                                    <Col span={6} ><p>销售目标完成率</p><p className="set-size">92%</p></Col>
                                    <Col span={6} ><p>活动剩余时间</p><p className="set-size">00:00:00</p></Col>
                                    <Col span={6} ><p>每秒交易总额</p><p className="set-size">133元</p></Col>
                                 </Row>
                                <div className="bg-map"></div>
                        </Card>
                    </Col>
                   
                </Row>
                <Row style={{height:530,background:'#f0f2f5'}}>
                     {/*<Col span={18}   style={{height:180,background:'blue'}}>
                        swswswsw</Col>
                    <Col  span={6} pull={6} style={{height:180,background:'red'}}>
                        
                   </Col>*/}
                    
                    <Col  gutter={2} span={13}  style={{height:180,background:'red'}}>
                        <Card title="活动实时交易情况" bordered={false} style={{ width: '100%'}}>
                                {/*<Row gutter={16}>
                                    <Col span={8} ><p>今日交易总额</p><p className="set-size"> 124,543,233元</p></Col>
                                    <Col span={8} ><p>销售目标完成率</p><p className="set-size">92%</p></Col>
                                    <Col span={8} ><p>活动剩余时间</p><p className="set-size">00:00:00</p></Col>
                                 </Row>*/}
                                 <EchartsPieStyle></EchartsPieStyle>
                        </Card>
                    </Col>
                    <Col  gutter={2} span={5}  style={{height:180,marginLeft:15}}>
                        <Card title="热门搜索" bordered={false} style={{ width: '100%'}}>
                                <p>目标评估</p><p className="set-size">有望达到预期</p>
                                <p>1520 亿元</p>
                                <p>1520 亿元</p>
                        </Card>
                    </Col>
                     <Col gutter={2} span={5}  style={{height:180,marginLeft:15}}>
                        <Card title="资源剩余" bordered={false} style={{ width: '100%'}}>
                                <p>目标评估</p><p className="set-size">有望达到预期</p>
                                <p>1520 亿元</p>
                                <p>1520 亿元</p>
                        </Card>
                    </Col>
                </Row>
            </div>
         )    
    }
}

export default List