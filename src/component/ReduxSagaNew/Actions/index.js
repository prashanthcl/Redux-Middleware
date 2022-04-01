import {GET_POSTDATA,GET_TODO,SET_POSTDATA,SET_TODO} from './Types'


export const getPostData = ()=>{
    return{
        type:GET_POSTDATA
    }
}

export const setPostData = (data)=>{
    return{
        type:SET_POSTDATA,
        payload:data
    }
}

export const getToDo = ()=>{
    return{
        type:GET_TODO
    }
}

export const setTODO = (data)=>{
    return{
        type:SET_TODO,
        payload:data
    }
}