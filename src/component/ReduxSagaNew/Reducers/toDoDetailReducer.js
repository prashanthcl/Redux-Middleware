import{SET_TODO} from '../Actions/Types'

const initialState={
    toDoResult:[]
}

const toDoResult = (state=initialState,action)=>{
    switch(action.type){
        case SET_TODO: return{
            ...state,
            toDoResult:action.payload
        }
        default:return state;
    }
}
export default toDoResult;