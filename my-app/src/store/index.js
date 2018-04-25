import { createStore } from 'redux'
import RootRouder from '../reducer/index'

const store = createStore(
    RootRouder,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store