import {createStore,applyMiddleware} from 'redux';
import { CombineReducer } from './Reducers/CombineReducer';
import reduxSagaMiddleware from 'redux-saga';
import RootSaga from './Sagas/rootSaga';
const reduxSaga = reduxSagaMiddleware()
export const store = createStore(CombineReducer,applyMiddleware(reduxSaga));
reduxSaga.run(RootSaga);
