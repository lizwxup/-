import React,{Component} from 'react'
import { Table} from 'antd';

class TableList extends Component {
    columns = [{
            title: '排名',
            dataIndex: 'key',
            key: 'key',
            render: text => <a href="#">{text}</a>,
        }, {
            title: '搜索关键词',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '用户数',
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age,
        }, {
            title: '周涨幅',
            key: 'address',
            dataIndex: 'address',
            sorter: (a, b) => a.age - b.age,
      }];
     data = [{
            key: '1',
            name: '关键词1',
            age: 32,
            address: '1111',
        }, {
            key: '2',
            name: '关键词2',
            age: 42,
            address: '2222',
        }, {
            key: '3',
            name: '关键词3',
            age: 32,
            address: '2001',
        }];

    render () {
        console.log(this.columns)
        return (
            <div> 
                <Table columns={this.columns} dataSource={this.data}  bordered size="small" />
            </div>
          )
        }
    }

export default  TableList;

