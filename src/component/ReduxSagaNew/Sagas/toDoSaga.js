import{call,put,takeEvery} from 'redux-saga/effects'
import{GET_TODO} from '../Actions/Types'
import{setTODO} from '../Actions/index'
import{toDoDetail} from '../../APICALL/constant'
import {AxioCall} from '../../APICALL/apicall'
function* getToDoList(){
    let url=toDoDetail;
    try{
      let response = yield call(AxioCall,url);
      console.log(response);
      yield put((setTODO(response.data)))
    }
    catch(error){
        
    }
}

function* toDoWorkerSaga(){
yield takeEvery(GET_TODO,getToDoList)
}
export default toDoWorkerSaga;