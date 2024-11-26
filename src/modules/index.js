import {combineReducers} from "redux";
import counter from "./counter";
import todos from "./todos";

// 각각 따로 reducer함수를 조합 해야 함.
const rootReducer = combineReducers({
    counter,
    todos
})

export default rootReducer;