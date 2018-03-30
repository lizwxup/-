import React ,{Component}from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

//import List from '../container/list'
import IndexMain from '../container/index'
class Content extends Component{
   constructor(){
        super();
        this.state={
            hash:window.location.hash
        }
    }
    componentDidMount(){
        window.onhashchange = ()=>{
            console.log(window.location.hash)
            console.log('执行')
            this.setState({
                hash:window.location.hash
            });
        }
    }
    componentDidUpdate() {
        window.onhashchange = ()=>{
            console.log('componentDidUpdate')
            console.log(window.location.hash)
        }
    }
    render () {
        console.log('主要内容')
        console.log(this)
        // let o;
        // let {hash} = this.state;
        // console.log(hash)
        // console.log('router')
        // switch (hash) {
        //     case "/":
        //         o = (
        //             <IndexMain/>
        //         );
        //         break;
        //     case "/list":
        //         o = <List/>;
        //         break;
        //     default:
        //          o = <IndexMain/>;
        //         break;
          
        // }
        console.log()
        return (
            <Router>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>          
                     wwwwww
                   <IndexMain></IndexMain>
                </div>
            </Router>
        )
    }
}

export default Content;
