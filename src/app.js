import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from "./routers/AppRouter"
import { Provider } from 'react-redux'
import { startSetExpenses } from "./actions/expenses"
import { login , logout } from "./actions/auth"
import configureStore from "./store/configureStore"
import "./styles/style.scss"
import "normalize.css/normalize.css"
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from "./firebase/firebase";

const store = configureStore();
let hasRenderd = false
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
const renderApp = () => {
    if ( !hasRenderd ) {
        ReactDOM.render( jsx, document.getElementById( 'app' ) );
        hasRenderd = true
    }
}

ReactDOM.render( <p>loading...</p>, document.getElementById( 'app' ) );



firebase.auth().onAuthStateChanged( ( user ) => {
    if ( user ) {
        store.dispatch(login(user.uid))
        store.dispatch( startSetExpenses() ).then( () => {
            renderApp()
            if ( history.location.pathname === "/" ) {
                history.push( "./dashboard" )
            }
        } )
    } else {
        store.dispatch(logout())
        renderApp()
        history.push( "./" )
    }
} )