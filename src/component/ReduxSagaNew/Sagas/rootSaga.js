import {all,fork} from 'redux-saga/effects'
import postDataWorkerSaga from './postDataSaga'
import toDoWorkerSaga from './toDoSaga'
function* RootSaga(){
    // yield[fork(postDataWorkerSaga)]
    yield all([fork(postDataWorkerSaga),fork(toDoWorkerSaga)])
}
export default RootSaga