//상수
import {createAction, handleAction, handleActions} from "redux-actions";

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션 함수
// export const increase = ()=> ({type:INCREASE});
// export const decrease = ()=> ({type:DECREASE});

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);


// state 초기값
const initialState= {
    number: 0
};

const counter = handleActions(
    {
        [INCREASE] : (state, action) => ({
            number: state.number +1
        }),
        [DECREASE] : (state, action) => ({
            number: state.number -1
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