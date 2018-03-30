import React, {Component} from 'react'
import {HashRouter } from 'react-router'
import {Router ,Route,Switch,Link } from 'react-router-dom'
import IndexMain from '../container/index'
import List from '../container/list'
//import { createBrowserHistory } from 'history/createBrowserHistory'
import App from '../components/App';
class RouterMap extends Component{
    updateHandle (){
        console.log('路由每次切换之后都会更改内容')
    }
    render () {
        console.log('第一次路由加载')
        return ( 
            <Router history={this.props.history}  onUpdate={this.updateHandle.bind(this)}>
                 <Switch>
                    <Route   exact path='/'  component={IndexMain} />  
                    <Route   exact path='/list' component={List} />
                </Switch>
            </Router>
        )    
    }
}
export default RouterMap
