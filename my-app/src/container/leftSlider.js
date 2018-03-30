import React, { Component } from 'react'
import { Layout,Menu,Icon } from 'antd';
import {  BrowserRouter as Router,Link,NavLink, withRouter} from 'react-router-dom';
//import IndexMain from '../container/index'
//import List from '../container/list'
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Slider extends Component{

    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
      this.setState({ collapsed });
    }
    handleRouterPush(path,e) {
      this.props.history.push(path)
    }
   
    render () {
        return (
          <Router>
             <div>
                <Sider
                  collapsible
                  collapsed={this.state.collapsed}
                  onCollapse={this.onCollapse}
                >
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                  <Menu.Item key="1">
                    <Icon type="pie-chart" />
                    <span> <NavLink to="/" className="app-index">首页</NavLink> </span>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Icon type="desktop" />
                    {/*<span onClick={ this.handleRouterPush.bind(this, '/list') }> </span> */}
                    <span><Link to="/list">表单页</Link></span>
                  </Menu.Item>
                  <SubMenu
                    key="sub1"
                    title={<span><Icon type="user"/><span>列表页</span></span>}
                  >
                    <Menu.Item key="3">列表详情</Menu.Item>
                    <Menu.Item key="4">列表展示</Menu.Item>
                    <Menu.Item key="5">Alex</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    title={<span><Icon type="team"/><span>异常页</span></span>}
                  >
                    <Menu.Item key="6">403</Menu.Item>
                    <Menu.Item key="8">406</Menu.Item>
                  </SubMenu>
                  <Menu.Item key="9">
                    <Icon type="file" />
                    <span>File</span>
                  </Menu.Item>
                </Menu>
              </Sider>
           </div>
        </Router>
        )
    }    
}
export default withRouter(Slider);