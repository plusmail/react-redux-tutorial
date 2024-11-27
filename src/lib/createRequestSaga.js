import {finishLoading, startLoading} from "../modules/loading";
import {put,call} from "redux-saga/effects";

export default function createRequestSaga(type, request){
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function* (action){
        yield put(startLoading(type));
        try {
            // call은 비동기 호출
            const response = yield call(request, action.payload);

            // put는 dispatch
            yield put({
                type: SUCCESS,
                payload: response.data
            });

        }catch (e) {
            yield put({
                type: FAILURE,
                payload: e,
                error : true
            })

        }
        yield put(finishLoading(type))
    }
}