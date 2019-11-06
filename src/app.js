import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./routers/AppRouter" 
import { Provider } from 'react-redux'
import configureStore from "./store/configureStore"
import {addExpense} from './actions/expenses';
import "./styles/style.scss"
import "normalize.css/normalize.css"
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render( jsx , document.getElementById('app'));
