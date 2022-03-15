import {GET_USERSAGA} from '../Actions/Types'
const initialState = {
    toDoTask:[]
}

const reducer = (state=initialState,action)=>{
switch(action.type){
    case GET_USERSAGA:return{
        ...state,
        toDoTask:action.payload
    }
    default:return state
}
}
export default reducer