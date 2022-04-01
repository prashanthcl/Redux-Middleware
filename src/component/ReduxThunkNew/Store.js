import {createStore,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import toDoReducerThunk from './Reducers/toDoReducer';

export const storeThunk = createStore(toDoReducerThunk,applyMiddleware(reduxThunk))