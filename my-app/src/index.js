import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import App from './components/App';
import {HashRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import store from '../src/store/index'
import {addCart} from '../src/actions/index'
let unsubscribe = store.subscribe(() =>
   //store.getState();
   console.log(this)
);
console.log(store)
store.dispatch(addCart('Coffee 500gm', 1, 250));
store.dispatch(addCart('Flour 1kg', 2, 110));
store.dispatch(addCart('Juice 2L', 1, 250));

unsubscribe();
ReactDOM.render( 
<Provider store={store}><HashRouter><App/></HashRouter></Provider>, document.getElementById('root'));
registerServiceWorker();

