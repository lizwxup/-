import React , { Component }from 'react'
import { Row, Col,Icon,Tabs} from 'antd';
//柱状图模块
import Echarts from './echarts/echarts'
import EchartsArea from './echarts/echartsArea'
import Table from './Table/table'
import EchartsPie from './echarts/echartsPie'
import EchartsLine from './echarts/echartsLine'
import EchartsSecond from './echarts/echartsSecond'
import EchartsPieStyle from './echarts/echartsPieStyle'
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import RankList from './rankList'
import '../css/index.css'
const TabPane = Tabs.TabPane;

class IndexMain extends Component{
     gutters = {};
     colCounts = {};
  
    //checked=true;

     constructor(){
        super();
        this.state={
            gutterKey: 1,
            tabList:[
                {item:'内容一'},
                {item:'内容二'},
                {item:'内容三'}
            ],
            list : ['','',''],
            currentIndex:0
        };
        [8, 16, 24, 32, 40, 48].forEach((value, i) => { this.gutters[i] = value; });
        [2, 3, 4, 6, 8, 12].forEach((value, i) => { this.colCounts[i] = value; });
        this.infoList1 = [15022, 200, 400, 300, 690, 100,100,120,500,40,30,500]
        this.infoList = [100, 100, 100, 300, 690, 100,100,120,500,40,30,500]
    }
    //切换选项卡的时候
    changeTabPosition () {
    //    console.log('是谁我是我')
       //this.initPie();
        this.refs.getSwordButton.initPie(this.infoList)
    }
    onChildChanged (newState) {
        // console.log(newState+'子传给父级')
    }
    componentDidMount(){
        var gutterKey = this.state.gutterKey+55
        // this.setState({
        //     gutterKey:this.state.gutterKey+55
        // })
       //this.initPie()
       console.log( gutterKey+'swswswswsw')
    }
  handleClick(index){
    this.setState({ currentIndex:index});

  }
  currentClass(index){

    return this.state.currentIndex === index ? 'currentIndex' : '';
  }
  contentClass(index){
    return this.state.currentIndex === index ? 'active' : '';
  }
    render () {
        const { gutterKey } = this.state;
        const colCount = 4;
        const cols = [];
       // let colCode = '';
      // console.log(this.rankListData)
     // console.log(this.checked + 'swswsss')
        for (var i= 0;i<colCount;i++) {
            cols.push(
                <Col key={i.toString()} span={24/colCount} style={{background:"#f0f2f5"}}>
                    <div style={{ marginRight: 6,background:'#fff',padding:10 }}>
                        <p>访问量{i+1}:10  <Icon type="exclamation-circle-o"  style={{float:'right'}}/></p>
                        <p style={{fontSize:18,fontWeight:'bold'}}>￥ 20000</p>
                        <p><span style={{marginRight:10}}>周同比：12% <Icon type="caret-up" style={{ fontSize: 12, color: 'red' }}/></span>
                        <span>日环比：12% <Icon type="caret-down" style={{ fontSize: 12, color: 'green' }}/></span></p>
                        <p style={{border:'1px solid rgb(222, 219, 219)'}}></p>
                        <p>日均销售额：<span style={{fontSize:18,fontWeight:'bold'}}>￥10</span></p>
                    </div>
                </Col>
            )
           // colCode += ` <Col span={${24 / colCount}} />\n`;
        }
        // const tabsList = []
        // for (var j=1;j<11;j++) {
        //     tabsList.push(<TabPane tab={"门店"+j} key={j.toString()}><EchartsLine></EchartsLine></TabPane>) 
        // }
         const tabsList = []
        //  for (var j=1;j<11;j++) {
        //      tabsList.push(<li style={{width:100,color:'#fff'}}>{this.state.tabList}</li>) 
        //  }
         this.state.tabList.forEach(function(item,index){
                tabsList.push(<li  key={index.toString()} style={{width:100,color:'blue',display:'inline-block'}}>{item.item}</li>)
         })
         const tabsContent = []
        //  for (var j=1;j<11;j++) {
        //      tabsList.push(<li style={{width:100,color:'#fff'}}>{this.state.tabList}</li>) 
        //  }
         this.state.tabList.forEach(function(item,index){
                tabsContent.push(<li  key={index.toString()} style={{width:100,color:'blue',display:'inline-block'}}>{item.item}</li>)
         })
        /*var rankList = []
        this.rankListData.forEach(function(item,index){
            rankList.push(<div  key={index.toString()}  style={{ display:'flex',justifyContent:'space-between',marginBottom:15,width:'100%'}}><div><span className="rank-name">{index+1}</span>{item.content}</div>
                          <div className="rank-num">{item.num}</div></div>)
        })*/
        return (
            <div>           
                {/*<Row gutter={16}>
                    <Col span={8} ><div style={{ marginRight: 6,background:'rgba(0, 0, 0, 0.08)',textAlign:'center' }}>Column1</div></Col>
                    <Col span={6} ><div style={{ marginRight: 6,background:'rgba(0, 0, 0, 0.08)' }}>Column2</div></Col>
                    <Col span={6} ><div style={{ marginRight: 6,background:'rgba(0, 0, 0, 0.08)' }}>Column3</div></Col>
                    <Col span={6} ><div style={{ marginRight: 6,background:'rgba(0, 0, 0, 0.08)' }}>Column4</div></Col>
                </Row>*/}
                 <Row gutter={this.gutters[gutterKey]}>{cols}</Row>
                 {/*<pre>{`<Row gutter={${this.gutters[gutterKey]}}>\n${colCode}</Row>`}</pre>*/}
                 <div style={{background:'#fff',padding:10,marginTop:15}}>
                     <Tabs defaultActiveKey="1" onChange={this.changeTabPosition.bind(this)}>
                        <TabPane tab={<span><Icon type="area-chart"/>销售额</span>} key="1">
                            <div style={{display:'flex'}}>
                                <div style={{width:'70%'}}>
                                   {/*<div id="main" style={{width: 500, height: 400 }} option={this.props.infoList}></div>*/}
                                    <Echarts ref="getSwordButton"  infoList={this.infoList} callbackParent={this.onChildChanged}></Echarts>
                                </div>
                                <div style={{marginLeft:50,width:'30%'}}>
                                    {/*{rankList}*/}
                                    <RankList></RankList>
                                   {/*<div style={{ display:'flex',justifyContent:'space-between',marginBottom:15,width:'100%'}}> 
                                        <div><span className="rank-name">1</span>{rankList}  </div>
                                        <div className="rank-num">230000</div>  
                                    </div>*/}
                                </div>
                            </div>                  
                        </TabPane>
                        <TabPane tab={<span> <Icon type="team"/>访问量</span>} key="2">
                            访问页面
                             <div style={{display:'flex'}}>
                                <div style={{width:'70%'}}>
                                    {/*<EchartsSecond ref="getSwordButton" checked={this.checked}   callbackParent={this.onChildChanged}></EchartsSecond>*/}
                                    <Echarts ref="getSwordButton"  infoList={this.infoList1} callbackParent={this.onChildChanged}></Echarts>
                                    {/*<div id="main" style={{width: 500, height: 400 }} option={this.props.infoList}></div>*/}
                                </div>
                                <div style={{marginLeft:50,width:'30%'}}>
                                    {/*{rankList}*/}
                                     <RankList></RankList>
                                   {/* <div style={{display:'flex',justifyContent:'space-between',marginBottom:15,width:'100%'}}> 
                                        <div><span className="rank-name">1</span>{rankList}  </div>
                                        <div className="rank-num">230000</div>  
                                    </div>*/}
                                </div>
                            </div>  
                        </TabPane>
                    </Tabs>
                 </div> 
                 <div style={{marginTop:15}}>
                    <Row gutter={16}>
                        <Col span={12} ><div style={{ marginRight: 6,background:'#fff',textAlign:'center' }}>
                            <div style={{textAlign:'left',
                                        height:60,
                                        borderBottom:'1px solid rgb(222, 219, 219)',
                                        verticalAlign:'middle',
                                        color:'#000',
                                        padding:10,
                                        lineHeight:'40px',
                                        fontSize:16}}>线上搜索</div>
                            <EchartsArea></EchartsArea>
                            <Table></Table>
                            </div>
                        </Col>
                        <Col span={12} ><div style={{ marginRight: 6,background:'#fff' }}>
                            <div style={{textAlign:'left',
                                        height:90,
                                        borderBottom:'1px solid rgb(222, 219, 219)',
                                        verticalAlign:'middle',
                                        color:'#000',
                                        padding:10,
                                        lineHeight:'40px',
                                        fontSize:16}}>销售额类比
                                 <p>销售额</p></div>
                             <EchartsPie></EchartsPie>
                           </div>
                    </Col>
                </Row>  
                 </div>
                 <div style={{background:'#fff',padding:10,marginTop:15}}>
                     {/*<Tabs defaultActiveKey="1"  >
                          {tabsList}
                     </Tabs>*/}   
                    <div  id="outer">
                        <ul  id="tab" >
                           { this.state.list.map((val,index) => {
                              return (<List currentClass={this.currentClass.bind(this)} handleClick={this.handleClick.bind(this)} val={val} key={index} index={index} /> )
                           })
                         }
                        </ul>
                        <div id="content">
                          { this.state.tabList.map((val,index) => {
                             return ( <Content key={index} val={val.item} index={index}  contentClass = { this.contentClass.bind(this) } /> )
                          })
                         }
                       </div>    
                    </div>  
                </div>       
            </div>
        )     
    }
}

class List extends Component{
    handleClick(){
        this.props.handleClick(this.props.index);
    }
    render(){
      return (
             <li className={this.props.currentClass(this.props.index)} onClick={ this.handleClick.bind(this)} >{this.props.val}
                 <div style={{display:'flex',justifyContent:'space-around',width:150}}>
                    <div className="nav-list">
                     <p>导航一</p>
                     <p style={{color:'rgba(0,0,0,.35)',fontSize:14}}> 转化率</p>
                     <p style={{color:'#000',fontSize:18,marginTop:-10}}>100%</p>
                   </div>
                    <div className="nav-list">
                      <p style={{color:'#f0f2f5'}}>导航一</p>
                      <EchartsPieStyle></EchartsPieStyle>
                    </div>
                 </div>
             </li>
        )
     }
 }

class Content extends Component{
    render(){
        return(
            <div className={this.props.contentClass(this.props.index)}>
                {this.props.val} 
                <EchartsLine id='ss'></EchartsLine>
            </div>
        )
    }
}
export default IndexMain