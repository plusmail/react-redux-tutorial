//상수
import {createAction, handleActions} from "redux-actions";
import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';


export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
    yield  delay(1000);
    yield put(increase());
}

function* decreaseSaga() {
    yield delay(1000);
    yield put(decrease());
}

export function* counterSaga(){
    yield takeEvery(INCREASE_ASYNC, increaseSaga);
    yield takeEvery(DECREASE_ASYNC, decreaseSaga);
}
// 효과	        처리 방식	            동시 처리 가능 여부	        이벤트 유실 가능성
// takeEvery	모든 이벤트를             비동기 처리	        가능	없음
// takeLatest	마지막 이벤트만 처리	    불가능	            있음
// takeLeading	첫 번째 이벤트만 처리	    불가능	            있음
// take	        한 번만 처리	            불가능	            없음
// throttle	    일정 시간 내 한 번만 처리	가능	                있음
// debounce	    일정 시간 후 마지막 이벤트만  가능	            있음

// state 초기값
const initialState = {
    number: 0
};

const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({
            number: state.number + 1
        }),
        [DECREASE]: (state, action) => ({
            number: state.number - 1
        }),
    }, initialState
)

//
// // Reducer함수
// function counter(state=initialState , action ){
//     switch (action.type) {
//         case INCREASE:
//
//             return {
//                 number: state.number + 1
//             }
//         case DECREASE:
//
//             return {
//                 number: state.number - 1
//             }
//         default:
//             return state
//     }
//
// }

export default counter;