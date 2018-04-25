import React, {Component} from 'react'
import { Steps,Button,message,Input,Select } from 'antd';
const Step = Steps.Step;
const Option = Select.Option;


const selectBefore = (
    <Select defaultValue="Http://" style={{ width: 90 }}>
        <Option value="Http://">Http://</Option>
        <Option value="Https://">Https://</Option>
    </Select>
)
const selectAfter = (
    <Select defaultValue=".com" style={{ width: 90 }}>
        <Option value=".com">.com</Option>
        <Option value=".cn">.cn</Option>
        <Option value=".org">.org</Option>
    </Select>
)
class Content extends Component{
    constructor (props) {
        super (props) 
        console.log(props)
        this.state = {
            website:'www.baidu.com',
            message:'时间',
            name:'Elosie',
            money:'$3000'
        }
    }
    render () {
        const { website,message,name,money } = this.state
        return (
            <div>
                <div style={{display:'flex',width:'60%',justifyContent:'center',  alignItems:'center',margin:'0 auto'}}>
                     <label htmlFor="" style={{width:150,float:'right'}}>输入网址信息:</label>
                     <Input addonBefore="Http://" addonAfter=".com" defaultValue={website} style={{width:'80%',marginLeft:30}}/>
                </div>
                 <div style={{display:'flex',width:'60%',justifyContent:'center', alignItems:'center',margin:'30px auto'}}>
                     <label htmlFor="" style={{width:150,float:'right'}}>输入信息:</label>
                     <Input addonBefore={selectBefore} addonAfter={selectAfter}  defaultValue={message} style={{width:'80%',marginLeft:30}}/>
                </div>
                <div style={{display:'flex',width:'60%',justifyContent:'center',  alignItems:'center',margin:'30px auto'}}>
                     <label htmlFor="" style={{width:150,float:'right'}}>输入姓名:</label>
                     <Input  defaultValue={name} style={{width:'80%',marginLeft:30}}/>
                </div>
                <div style={{display:'flex',width:'60%',justifyContent:'center',  alignItems:'center',margin:'30px auto'}}>
                     <label htmlFor="" style={{width:150,float:'right'}}>转账进额:</label>
                     <Input  defaultValue={money}  style={{width:'80%',marginLeft:30}}/>
                </div>
            </div>
         )
    }
}
class ContentSecond extends Component{
    render () {
        return (
            <div>
                <div style={{display:'flex',width:'60%',justifyContent:'center',  alignItems:'center',margin:'0 auto'}}>
                     <label htmlFor="" style={{width:150,float:'right'}}>付款账户:</label>
                     <span></span>
                </div>
                <div style={{display:'flex',width:'60%',justifyContent:'center',  alignItems:'center',margin:'0 auto'}}>
                     <label htmlFor="" style={{width:150,float:'right'}}>收款账户:</label>
                     <span></span>
                </div>
                 <div style={{display:'flex',width:'60%',justifyContent:'center',  alignItems:'center',margin:'0 auto'}}>
                     <label htmlFor="" style={{width:150,float:'right'}}>收款人姓名:</label>
                     <span></span>
                </div>
                 <div style={{display:'flex',width:'60%',justifyContent:'center',  alignItems:'center',margin:'0 auto'}}>
                     <label htmlFor="" style={{width:150,float:'right'}}>转账金额:</label>
                     <span></span>
                </div>
                <Input  defaultValue="￥500" />
            </div>
         )
    }
}
class ContentSuccess extends Component{
    render () {
        return (
            <div>
                <div style={{display:'flex',width:'60%',justifyContent:'center',  alignItems:'center',margin:'0 auto'}}>
                     <label htmlFor="" style={{width:150,float:'right'}}>输入网址信息:</label>
                     <Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" style={{width:'80%',marginLeft:30}}/>
                </div>
            </div>
         )
    }
}
const steps = [{
    title:'填写转账信息',
    content:<Content/> 
},
{
    title:'确认转账信息',
    content:<ContentSecond/>
},
{
    title:'完成',
    content:<ContentSuccess/>  
}]

class FormStep extends Component {
    constructor (props) {
        super (props)
        this.state = {
            current:0,
            
        }
    }
    prev () {
        const current = this.state.current -1
        this.setState ({
            current
        })
    }
    next () {
        const  current = this.state.current+1
        this.setState({
            current
        })
    }
    render () {
        const { current} = this.state
        console.log(this.props)
        console.log('content ')
        return (
            <div>
                <h3>分布表单</h3>
                <p>将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。</p>
                <div style={{width:'100%',margin:'30px auto',background:'#fff',paddingBottom:100,paddingTop:100}}>
                    <div style={{width:'60%',margin:'20px auto',}}>
                        <Steps current={current} style={{marginBottom:30}}>
                            {steps.map(item=><Step title={item.title}  key={item.title}/>)}
                        </Steps>
                        <div className="steps-content">{steps[this.state.current].content}</div>
                    </div>
                    <div className="steps-action">
                        {
                            this.state.current < steps.length-1
                            &&
                            <Button type="primary" onClick={()=>this.next()}>下一步</Button>
                        }
                         {
                            this.state.current === steps.length-1
                            && 
                            <Button  type="primary" onClick={ () => message.success('已经完成了') }>完成</Button>
                        }
                        {
                            this.state.current>0
                            && 
                            <Button  style={{marginLeft:40}}  onClick={()=> this.prev()}>上一步</Button>
                        }
                       
                    </div>
                </div>
            </div>  
        )
    }
}

export default FormStep