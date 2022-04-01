
import {GET_POST_DETAIL,GET_TODO_LIST,SET_POST_DETAIL,SET_TODO_LIST} from './Types';
import axios from 'axios';
import {toDoDetail} from '../../APICALL/constant'
import {AxioCall} from '../../APICALL/apicall'
export const getToDoListThunk = ()=>{

    return async(dispatch)=>{


            let result = await AxioCall(toDoDetail)
            console.log("Result",result);



        dispatch({
            type:GET_TODO_LIST,
            payload:result.data
        })
    }
}

export const setToDoListThunk = ()=>{
    return{

    }
}