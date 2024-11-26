import Counter from '../components/Counter';
import {connect, useDispatch, useSelector} from "react-redux";
import {decrease, increase} from "../modules/counter";
import {useCallback} from "react";

// const CounterContainer = ({number, increase, decrease})=>{
const CounterContainer = ()=>{

    const number =useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    // Store에 있는 dispatch 함수를 바로 사용 할 수 있다.
    const onIncrease = useCallback(()=> dispatch(increase()), [dispatch])
    const onDecrease = useCallback(()=> dispatch(decrease()), [dispatch])

    return <Counter number={number}
                    onIncrease={onIncrease}
                    onDecrease={onDecrease}/>
}

// const mapStateToProps = state =>({
//     number : state.counter.number,
// })
//
// const mapDispatchToProps = dispatch => (
//     {
//         increase : ()=>{
//             console.log('증가')
//             //dispatch는 Store에 있는 Reducer를 실행하는 함수
//             //{type:INCREASE}
//             //dispatch({type:INCREASE})
//             dispatch(increase())
//         },
//         decrease: ()=> {
//             console.log("감소")
//             dispatch(decrease())
//         },
//     }
// );

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(CounterContainer)

export default connect(
    state =>({
        number: state.counter.number,
    }),
    dispatch => ({
        increase: ()=> dispatch(increase()),
        decrease: ()=>{
            return dispatch(decrease())
        }
    })
)(CounterContainer)

// export default connect(
//     state =>({
//         number: state.counter.number,
//     }),
//     dispatch =>
//         bindActionCreators(
//             {
//                 increase,
//                 decrease
//             },
//             dispatch,
//         ),
// )(CounterContainer)
