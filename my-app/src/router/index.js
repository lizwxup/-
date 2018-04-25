import React, {Component} from 'react'
import {HashRouter } from 'react-router'
import {Router , hashHistory,BrowserRouter,Route,Switch,Link } from 'react-router-dom'
import IndexMain from '../container/index'
import List from '../container/list'
import Form from '../container/form'
import FormStep from '../container/FormStep'
//import { createBrowserHistory } from 'history/createBrowserHistory'
import App from '../components/App';
class RouterMap extends Component{
    render () {
        return ( 
            // <BrowserRouter>
                 <div>
                    <Route   exact path='/'  component={IndexMain} />  
                    <Route   exact path='/list' component={List} />
                    <Route   exact path="/form/:id" component={Form}></Route>
                    <Route  exact path="/formstep" component={FormStep}></Route>
                </div>
            // </BrowserRouter>
        )    
    }
}
export default RouterMap
