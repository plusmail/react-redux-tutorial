import Todos from "../components/Todos";
import {connect, useDispatch, useSelector} from "react-redux";
import {changeInput, insert, remove, toggle} from "../modules/todos";
import {useCallback} from "react";

// connect(state, dispatch)
const TodosContainer = () => {
    const {input, todos} = useSelector(({todos})=>({
        input : todos.input,
        todos : todos.todos
    }));

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