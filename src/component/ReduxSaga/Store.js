
import {createStore,applyMiddleware} from 'redux'
import sagaMiddleWare from 'redux-saga'
import reducer from './Reducers/index'
import mainSaga from '../Sagas'
import {getUserToDoList} from './Actions/index'
const sagaMiddleWareData = sagaMiddleWare()
export const sagaStore = createStore(reducer,applyMiddleware(sagaMiddleWareData))
sagaMiddleWareData.run(mainSaga)
sagaStore.dispatch(getUserToDoList())