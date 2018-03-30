import React, { Component } from 'react';
//
//import Button from 'antd/lib/button';
//import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
import { Layout,Breadcrumb,Menu,Icon,Badge,Avatar   } from 'antd';
import '../css/App.css';
import IndexMain from '../container/index'
import List from '../container/list'
import Form from '../container/form'
//import Slider from '../container/leftSlider'
//import ContentMain from '../container/content'
//import RouterIndex from '../router/index'
import {Input} from 'antd'
const { Header, Content,Footer,Sider } = Layout;
const SubMenu = Menu.SubMenu;
const Search = Input.Search;
class App extends Component {
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
      this.setState({ collapsed });
    }
    handleRouterPush(path,e) {
      this.props.history.push(path)
    }
   
  componentDidMount(){
       console.log('左边1')
        window.onhashchange = ()=>{
            console.log(window.location.hash)
            console.log('执行1')
            this.setState({
                hash:window.location.hash
            });
        }
    }
  render () {
    return (
      <Router >
      <Layout style={{ minHeight: '100vh' }}>
       {/*<Slider></Slider>*/} 
        <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
            >
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                  <Menu.Item key="1">
                    <Icon type="home" />
                    <span> <NavLink to="/" className="app-index">首页</NavLink> </span>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Icon type="desktop" />
                    {/*<span onClick={ this.handleRouterPush.bind(this, '/list') }> </span> */}
                    <span><NavLink to="/list" className="app-index" >表单页</NavLink></span>
                  </Menu.Item>
                  <SubMenu
                    key="sub1"
                    title={<span><Icon type="user"/><span>列表页</span></span>}
                  >
                    <Menu.Item key="3"><NavLink to="/form" className="app-index" >列表详情</NavLink></Menu.Item>
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
        <Layout>
          <Header style={{ background: '#fff', padding: 0 , paddingLeft: '60%'}} >
             <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200,marginRight:20 }}
             />
              <Icon type="search" style={{marginRight:25,fontSize:16}}/>
              <Icon type="question-circle-o" style={{marginRight:25,fontSize:16}}/> 
              <span style={{ marginRight: 24 }}>
                <Badge count={1}><Avatar shape="square" icon="message" size="small" /></Badge>
              </span>
                {/*<Badge count={5} overflowCount={10}>
                   <a href="#" className="head-example" style={{width:100,height:100}}/>
                </Badge>*/}
              <span style={{marginLeft:20}}>登录</span>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            {/*<ContentMain>
                <RouterIndex />
            </ContentMain>*/}
            <div style={{minHeight: 360 }}>          
              <Route exact path="/" component={IndexMain}></Route>
              <Route exact path="/list" component={List}></Route>
              <Route exact path="/form" component={Form}></Route>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            @ezhenduan.com 沸腾医疗
          </Footer>
        </Layout>
      </Layout>
   </Router>
    );
  }
}
export default App;
