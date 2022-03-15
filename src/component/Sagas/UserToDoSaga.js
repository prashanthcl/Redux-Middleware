import {call,takeEvery,put} from 'redux-saga/effects'
import {GET_USERSAGA} from '../ReduxSaga/Actions/Types'
import {userToDoTask} from '../config/routes'
import {APICALL} from '../config/apiCall'
function* getUserTODoSaga(action){
    const url = userToDoTask
    try{
        let response = yield call(APICALL(url))
        console.log("Response",response)
    }
    catch(e){
        console.log(e)
    }
}

function* workerUserToDoSaga(){
    yield takeEvery(GET_USERSAGA,getUserTODoSaga)
}
export default workerUserToDoSaga