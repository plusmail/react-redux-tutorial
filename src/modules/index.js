import {combineReducers} from "redux";
import counter, {counterSaga} from "./counter";
import todos from "./todos";
// import sample from "./sample";
import loading from "./loading";
import {all} from "redux-saga/effects";
import sample_saga, {sampleSaga} from "./sample_saga";

// 각각 따로 reducer함수를 조합 해야 함.
// 프로젝트에는 Store가 하나 이다.
// 각각 js파일로 만들이 reducer의 합쳐 준다.
const rootReducer = combineReducers({
    counter,
    todos,
    // sample,
    sample_saga,
    loading
})

export function* rootSaga(){
    yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;