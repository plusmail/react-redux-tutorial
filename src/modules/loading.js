import {createAction, handleActions} from "redux-actions";
//1. action type정의
const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

// 2. action 함수.
export const startLoading = createAction(
    START_LOADING,
    requestType => requestType
);

export const finishLoading = createAction(
    FINISH_LOADING,
    requestType => requestType
);



// 3. 초기값
const initialState = {};

// 4. reducer함수
const loading = handleActions(
    {
        [START_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: true
        }),
        [FINISH_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: false
        })
    }, initialState
)
export default loading;