import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {App} from "./components/app/app";
import "./styles/main.scss";

const store = createStore()

const app = (
    <App/>
)

ReactDOM.render(app, document.getElementById('root'))