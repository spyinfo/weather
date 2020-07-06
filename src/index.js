import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from "./components/app/app";
import "./styles/main.scss";
import {rootReducer} from "./reducers/rootReducer";

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk)
))

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'))