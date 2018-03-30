import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import App from './components/App';
import {HashRouter } from 'react-router-dom'
//import List from './container/list'
//import IndexMain from './container/index'
import registerServiceWorker from './registerServiceWorker';
import store from '../src/store/index'
//import RouteMap from './router/index'
/*const router = (
        <Router history={this.props.history}  onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={Router}/>
                <Route path='/Home' component={App}>
                    <Route path='/' component={IndexMain}/>
                    <Route path='/list' component={List}/>
                </Route>
        </Router>
)*/
import {addCart} from '../src/actions/index'
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);
store.dispatch(addCart('Coffee 500gm', 1, 250));
store.dispatch(addCart('Flour 1kg', 2, 110));
store.dispatch(addCart('Juice 2L', 1, 250));
// store.dispatch(deleteCart('Juice 2L', 1, 250));
// store.dispatch(updateCart('Flour 1kg', 12, 250));

unsubscribe();
ReactDOM.render( 
<Provider store={store}><HashRouter><App/></HashRouter></Provider>, document.getElementById('root'));
registerServiceWorker();

