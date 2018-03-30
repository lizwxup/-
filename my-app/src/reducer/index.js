import { createStore,combineReducers } from 'redux'

import {cartReducer} from './cartProduct'

const allReducer = {
    shoppingCart:cartReducer
} 

const rootRouder = combineReducers(allReducer)
//const store = createStore(rootRouder)

export default rootRouder
//console.log(store.getState())

