import React, { Component } from 'react';
//
//import Button from 'antd/lib/button';
//import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
import { Layout,Breadcrumb,Menu,Icon,Badge,Avatar   } from 'antd';
import '../css/App.css';
import IndexMain from '../container/index'
import Routes from '../router/index'
import {Input} from 'antd'
import { menus } from '../constants/menus'
import SiderMenu from './SliderMenu'
const { Header, Content,Footer,Sider } = Layout;
const SubMenu = Menu.SubMenu;
const Search = Input.Search;

class App extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
        openKey: '',
        selectedKey: '',
        firstHide: true,   // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
    };
    onCollapse = (collapsed) => {
      this.setState({ collapsed });
    }

    componentDidMount() {
        this.setMenuOpen(this.props);
    }
    componentWillReceiveProps(nextProps) {
        //console.log(nextProps);
        this.onCollapse(nextProps.collapsed);

    }
    onCollapse = (collapsed) => {
       // console.log(collapsed);
        this.setState({
            collapsed,
            firstHide: collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    };
    openMenu = v => {
       // console.log(v);
        this.setState({
            openKey: v[v.length - 1],
            firstHide: false,
        })
    };
  componentDidMount(){
      // console.log('左边1')
        window.onhashchange = ()=>{
            // console.log(window.location.hash)
            // console.log('执行1')
            this.setState({
                hash:window.location.hash
            });
        }
    }

  render () {
    //  console.log(menus)
    //  console.log('-------------------')
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
              <SiderMenu
                menus={menus}
                theme="dark"
                mode="inline"
            />
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
              <Routes  />
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
