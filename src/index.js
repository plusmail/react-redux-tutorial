import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from "redux";
import rootReducer from "./modules";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";

// const store = createStore(rootReducer);
const store = createStore(
    rootReducer, /* preloadedState, */
    // composeWithDevTools(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

