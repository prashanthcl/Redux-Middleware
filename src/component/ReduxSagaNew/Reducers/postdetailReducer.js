import {GET_POSTDATA,SET_POSTDATA} from '../Actions/Types'

const initialState={
    postDataResult : []
}

const PostDetailReducer = (state=initialState,action)=>{
               switch(action.type){
                   case SET_POSTDATA:return {
                       ...state,
                       postDataResult:action.payload
                   }
                   default: return state;
               }
}
export default PostDetailReducer;