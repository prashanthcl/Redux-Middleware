import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './Reducer/index'

export const store = createStore(reducer,applyMiddleware(thunkMiddleware))
