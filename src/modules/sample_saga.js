import * as api from '../lib/api';
import {createAction, handleActions} from "redux-actions";
import {finishLoading, startLoading} from "./loading";
import {put, call, takeLatest} from "redux-saga/effects";
import createRequestSaga from "../lib/createRequestSaga";

// 1. action type 정의
const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);


// function* getPostSaga(action) {
//     yield put(startLoading(GET_POST));
//     try {
//         const post = yield call(api.getPost, action.payload);
//         yield put({
//             type: GET_POST_SUCCESS,
//             payload: post.data
//         })
//     } catch (e) {
//         yield put({
//             type: GET_POST_FAILURE,
//             payload: e,
//             error: true
//         })
//     }
//     yield put(finishLoading(GET_POST));
// }
//
// function* getUsersSaga() {
//     yield put(startLoading(GET_USERS));
//     try {
//         const users = yield call(api.getUsers);
//         yield put({
//             type: GET_USERS_SUCCESS,
//             payload: users.data
//         })
//     } catch (e) {
//         yield put({
//             type: GET_USERS_FAILURE,
//             payload: e,
//             error: true
//         })
//     }
//     yield put(finishLoading(GET_USERS));
// }

// store.dispatch({ type: 'INCREMENT', payload: 1 });
// store.dispatch({ type: 'INCREMENT', payload: 1 });
// store.dispatch({ type: 'INCREMENT', payload: 1 });
// takeEvery가 실행되면 3개의 이벤트 발생을 다 처리 하는 것
// takeLatest가 실행되면 같은 이벤트가 중복되면 마지막 것만 실행
export function* sampleSaga(){
    yield takeLatest(GET_POST, getPostSaga);
    yield takeLatest(GET_USERS, getUsersSaga);
}

// 3. state의 초기값 설정
const initialState = {
    post: null,
    users: null
}


//4. reducer함수 정의(handleActions사용)
const sample_saga = handleActions(
    {
        [GET_POST_SUCCESS]: (state, action) => ({
            //원본 복사(불변성)
            // 추후에 immer로 변경하는 좋음.
            ...state,
            post: action.payload
        }),
        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            users: action.payload
        }),

    }, initialState
)

export default sample_saga;