import {combineReducers} from 'redux';
import PostDetailReducer from './postdetailReducer';
import toDoResult from './toDoDetailReducer';
export const CombineReducer = combineReducers({PostDetailReducer:PostDetailReducer,toDoResult:toDoResult})