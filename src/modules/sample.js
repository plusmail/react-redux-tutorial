import * as api from '../lib/api';
import {handleActions} from "redux-actions";
import createRequestThunk from "../lib/createRequestThunk";

// 1. action type 정의
const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);


// 3. state의 초기값 설정
const initialState = {
    loading : {
        GET_POST: false,
        GET_USERS : false
    },
    post: null,
    users: null
}


//4. reducer함수 정의(handleActions사용)
const sample = handleActions(
    {
        [GET_POST_SUCCESS] : (state, action) => ({
            //원본 복사(불변성)
            // 추후에 immer로 변경하는 좋음.
            ...state,
            post : action.payload
        }),
        [GET_USERS_SUCCESS] : (state, action ) => ({
            ...state,
            users : action.payload
        }),

    }, initialState
)

export default sample;