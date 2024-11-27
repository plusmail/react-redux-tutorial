import {createAction, handleActions} from "redux-actions";

//1. 액션 type 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//2. 액션 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//2. 액션 함수 비동기
export const increaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(increase())
    }, 1000)
}
export const decreaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(decrease())
    }, 1000)
}

//3. state 초기값
const initialState= {
    number: 0,

};


//4. Reducer함수 handleActions를 사용해서 편리하게 사용.
//
const counterThunk = handleActions(
    {
        [INCREASE] : (state, action) => ({
            number: state.number +1
        }),
        [DECREASE] : (state, action) => ({
            number: state.number -1
        }),
    }, initialState
)

export default counterThunk;