import { call, put, takeEvery } from "redux-saga/effects";
import { getPostData,setPostData } from "../Actions/index";
import { GET_POSTDATA } from "../Actions/Types";
import { postsDetail } from "../../APICALL/constant";
import { AxioCall } from "../../APICALL/apicall";
function* getPostDataDetails(action) {
  let url = postsDetail;
  try{
    const response = yield call(AxioCall,url);
    console.log("postData", response);
    yield put(setPostData(response.data))
  }
  catch(e){

  }
 
//   yield put(setPostData(response))
}

function* postDataWorkerSaga() {
  yield takeEvery(GET_POSTDATA, getPostDataDetails);
}
export default postDataWorkerSaga;
