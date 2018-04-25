import React,{Component} from 'react'
import moment from 'moment';
import {Input,Icon,DatePicker,Radio,Button } from 'antd'
const { TextArea } = Input;
const {RangePicker} = DatePicker;
const RadioGroup  = Radio.Group
class Form extends Component{
    constructor (props) {
        super(props)
        this.state={
            value:1,
            display:'none',
            basicValue:'wwwww',
            titleCont:'内容'
        }
    }
    
    onChange (date, dateString) {
       // console.log('wwwwwwww')
    }
    onChangeRadio (e) {
        //console.log(e.target.value)
        if (e.target.value === 2 ) {
          this.setState({
            display:'block',
          })
        } else {
          this.setState({
            display:'none',
          })
        }
        this.setState({
            value:e.target.value,
        })
    }
    Submit (e) {
        // console.log(e)
        // console.log(this.refs.basic.props.value)
        // console.log(this.refs.titleCont.props.value)
        // console.log(this.refs)
    }
    handelChange (e) {
        this.setState({
            basicValue:e.target.value,  
            titleCont:e.target.value
        })
        // console.log(this.refs.basic)
        // console.log('swwwwwwwwww')
    }
    onChangerangePicker (value, dateString) {
        // console.log(value)
        // console.log(dateString)
    }
    render () {
        return (
            <div style={{width:'50%',margin:'0 auto'}}>
                 <h4 style={{textAlign:'center',marginTop:10}}>form Submit</h4>
                
                 <div style={{display:'flex'}}>
                    <div style={{verticalAlign:'middle',marginRight:20,height:30,lineHeight:'30px',width:60}}>标题:</div>
                    <div style={{width:'90%'}}>
                        <Input placeholder="Basic usage"  
                           onChange={this.handelChange.bind(this)} 
                           ref="basic" 
                           value={this.state.basicValue}
                           prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}/></div>
                 </div>
                 <div style={{display:'flex',marginTop:30}}>
                    <div style={{verticalAlign:'middle',marginRight:20,height:30,lineHeight:'30px',width:60}}>标题时间:</div>
                    <div style={{width:'90%'}}> 
                    <RangePicker  
                        showTime 
                        format="YYYY/MM/DD HH:mm"
                        onChange={this.onChangerangePicker.bind(this)}
                        showTime={{ format: 'HH:mm' , defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],}}
                    /></div>
                 </div>
                 <div style={{display:'flex',marginTop:30}}>
                    <div style={{verticalAlign:'middle',marginRight:20,height:30,lineHeight:'30px',width:60}}>标题内容:</div>
                    <div style={{width:'90%'}}><TextArea rows={4}  ref="titleCont"  onChange={this.handelChange.bind(this)}  value={this.state.titleCont}/></div>
                 </div>
                  <div style={{display:'flex',marginTop:30}}>
                    <div style={{verticalAlign:'middle',marginRight:20,height:30,lineHeight:'30px',width:60}}>衡量标准:</div>
                    <div style={{width:'90%'}}><TextArea rows={4}   value={this.state.basicValue}/></div>
                 </div>
                 <div style={{display:'flex',marginTop:30}}>
                    <div style={{verticalAlign:'middle',marginRight:20,height:30,lineHeight:'30px',width:60}}>选择对象:</div>
                    <div style={{width:'90%',lineHeight:'30px'}}>
                        <RadioGroup onChange={this.onChangeRadio.bind(this)} value={this.state.value}>
                            <Radio value={1}>公开</Radio>
                            <Radio value={2}>部分公开</Radio>
                            <Radio value={3}>公开</Radio>
                        </RadioGroup>
                        <Input placeholder="选择默认的提交数据表单" style={{display:this.state.display}}></Input>
                        <div>客户,人物默认被邀请</div>
                    </div>
                 </div>
                 <div style={{display:'flex',marginTop:30,width:200,margin:'0 auto'}}>
                    <Button type="primary" icon='right-circle-o' style={{marginRight:20}} onClick={this.Submit.bind(this)}> 提交</Button>
                    <Button type="default" icon='save'>保存</Button>
                 </div>
            </div> 
        )
    }
}

export default Form;