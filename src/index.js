import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./modules";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import loggerMiddleware from "./lib/loggerMiddleware";
import {createLogger} from "redux-logger/src";
import { thunk as ReduxThunk } from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger();


// const store = createStore(rootReducer);
const store = createStore(
    rootReducer, /* preloadedState, */
    applyMiddleware(
        // logger,
        ReduxThunk,
        sagaMiddleware),
    // composeWithDevTools(),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

