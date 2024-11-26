import Counter from '../components/Counter';
import {connect, useDispatch, useSelector} from "react-redux";
import {decreaseAsync, increaseAsync} from "../modules/counterThunk";

const CounterThunkContainer = ({number, increaseAsync, decreaseAsync})=>{

    return <Counter number={number}
                    onIncrease={increaseAsync}
                    onDecrease={decreaseAsync}/>
}

export default connect(
    state =>({
        number: state.counter.number,
    }),{
        increaseAsync,
        decreaseAsync
    }
)(CounterThunkContainer)

