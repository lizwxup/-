import { createStore,combineReducers } from 'redux'

import {cartReducer} from './cartProduct'
import {formReducer} from './formStep'

const allReducer = {
    shoppingCart:cartReducer,
    formStep:formReducer
} 

const rootRouder = combineReducers(allReducer)
//const store = createStore(rootRouder)

export default rootRouder
//console.log(store.getState())

