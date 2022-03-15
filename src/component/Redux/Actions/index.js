import {GET_USERS,SET_USERS} from './Types'
import {APICALL} from '../../config/apiCall'
import {userDetail} from '../../config/routes'
export const getUserDetails = (dispatch)=>{

   return async(dispatch)=>{
    const result = await APICALL(userDetail) 
    console.log(result)
       dispatch({
           type:GET_USERS,
           payload:result
       })
   }
}