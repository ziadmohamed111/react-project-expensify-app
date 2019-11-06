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

store.dispatch( addExpense( { description: "Bill Water", amount: 5000, createdAt: 11245}))
store.dispatch( addExpense( { description : "Gas Bill" , amount : 1000 , createdAt : 21245}))
store.dispatch( addExpense( { description: "Rent", amount: 109500, createdAt: 31245}))


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render( jsx , document.getElementById('app'));
