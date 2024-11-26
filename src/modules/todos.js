import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, input=> input);
// export const changeInput = input => ({
//     type: CHANGE_INPUT,
//     input
// })

let id = 3;

export const insert = createAction(INSERT, text=>({
    id: id++,
    text,
    done: false
}))

// export const insert = text => ({
//     type: INSERT,
//     todo: {
//         id: id++,
//         text,
//         done: false
//     }
// })

export const toggle = createAction(TOGGLE, id=>id);
// export const toggle = id => ({
//     type: TOGGLE,
//     id
// })

export const remove = createAction(REMOVE, id=>id);
// export const remove = id => ({
//     type: REMOVE,
//     id
// })


const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초',
            done: true
        },
        {
            id: 2,
            text: 'React Redux 배우기',
            done: false
        }
    ]
}
//
// function todos(state = initialState, action) {
//     switch (action.type) {
//         case CHANGE_INPUT:
//             return {
//                 ...state,
//                 input: action.input
//             }
//
//         case INSERT:
//             return {
//                 ...state,
//                 todos: state.todos.concat(action.todo)
//             };
//         case TOGGLE:
//             return {
//                 ...state,
//                 todos: state.todos.map(todo =>
//                     todo.id === action.id ? {...todo, done: !todo.done} : todo
//                 )
//             }
//
//         case REMOVE:
//             return {
//                 ...state,
//                 todos: state.todos.filter(todo=> todo.id !== action.id)
//             }
//         default:
//             return state;
//     }
// }

const todos = handleActions(
    {
        // (state, {payload: input})
        // [CHANGE_INPUT] : (state, action) => ({
        //     ...state, input: action.payload
        // }),
        [CHANGE_INPUT] : (state, {payload: input}) => ({...state,input}),

        // [INSERT] : (state, action) => ({
        //     ...state,
        //     todos : state.todos.concat(action.payload)
        // }),

        //immer을 사용해서 불변성 유지
        [INSERT] : (state, {payload: todo}) =>
            produce(state, draft => {
                draft.todos.push(todo)
            })
        ,
        [TOGGLE] : (state, action) => ({
            ...state,
            todos : state.todos.map(todo=>
            todo.id === action.payload ? {...todo, done: !todo.done} : todo,
            )
        }),
        [REMOVE] : (state, action) => ({
            ...state,
            todos: state.todos.filter(todo=> todo.id !== action.payload),
        })
    }, initialState
)

export default todos