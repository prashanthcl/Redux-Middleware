import {call,fork} from 'redux-saga/effects'
import workerUserToDoSaga from './UserToDoSaga'

function* mainSaga(){
    yield [fork(workerUserToDoSaga)]
}
export default mainSaga