import './App.css';
import Counter from "./components/Counter";
import Todos from "./components/Todos";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";
import CounterThunkContainer from "./containers/CounterThunkContainer";
import SampleContainer from "./containers/SampleContainer";

function App() {
    return (
        <div>
            {/*<CounterContainer/>*/}
            <CounterThunkContainer/>
            <hr/>
            <TodosContainer/>
            <SampleContainer/>
        </div>
    );
}

export default App;
