import Todos from "../components/Todos";
import {connect, useDispatch, useSelector} from "react-redux";
import {changeInput, insert, remove, toggle} from "../modules/todos";
import {useCallback} from "react";

// connect(state, dispatch)
const TodosContainer = () => {
    // useSelector은 Store에 있는 state를 바로 꺼내 사용
    const {input, todos} = useSelector(({todos})=>({
        input : todos.input,
        todos : todos.todos
    }));

    // useDispatch도 Store에 reducer 액션 함수를 바로 호출 하도록
    const dispatch = useDispatch();
    const onChangeInput = useCallback(
        input => dispatch(changeInput(input)),[dispatch]
    );
    const onInsert = useCallback(text => dispatch(insert(text)),[dispatch]);
    const onToggle = useCallback(id => dispatch(toggle(id)),[dispatch]);
    const onRemove = useCallback(id => dispatch(remove(id)),[dispatch]);

    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}/>
    )
}
export default TodosContainer;