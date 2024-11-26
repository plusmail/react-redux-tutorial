import Todos from "../components/Todos";
import {connect} from "react-redux";
import {changeInput, insert, remove, toggle} from "../modules/todos";

// ({todos}) => ({
//     input : todos.input,
//     todos : todos.todos
// }),
//     {
//         changeInput,
//         insert,
//         toggle,
//         remove
//     }
const TodosContainer = ({
                            input,
                            todos,
                            changeInput,
                            insert,
                            toggle,
                            remove,
                        }) => {
    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={changeInput}
            onInsert={insert}
            onToggle={toggle}
            onRemove={remove}/>
    )
}
// connect(state, dispatch)
export default connect(
    ({todos}) => ({
        input : todos.input,
        todos : todos.todos
    }),
    {
        changeInput,
        insert,
        toggle,
        remove
    }
)(TodosContainer)