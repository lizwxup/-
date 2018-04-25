import React,{Component} from 'react'
import Echarts from './echarts/echarts'
class RankList extends Component{
    constructor () {
        super();
        this.state={
             rankListData: [
                {id: 1, content: 'Hello World1', num: '230000'},
                {id: 2, content: 'Hello World2', num: '54200'},
                {id: 3, content: '这是一个content', num: '542000'},
                {id: 4, content: '这是一个content1', num: '8585000'},
            ]   
        }
    }

    render () {
        return (
           this.state.rankListData.map((item,index)=>
                 <div key={index} style={{ display:'flex',justifyContent:'space-between',marginBottom:15,width:'100%'}}><div>
                 <span className="rank-name">{item.id}</span>{item.content}</div>
                 <div className="rank-num">{item.num}</div></div>
          )
        )
    }
}

export default RankList