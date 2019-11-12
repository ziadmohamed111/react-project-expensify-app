import React from "react";
import { NavLink } from "react-router-dom"
import {startLogout} from "../actions/auth"
import {connect} from "react-redux"

export const Header = (props) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName="is-active" exact={true}> DashBoard </NavLink>
        <NavLink to="/create" activeClassName="is-active"> Go create </NavLink>
        <button onClick={props.startLogout}>logout</button>
    </header>
)
const mapDispatchToProps = (dispatch) =>({
    startLogout: () => dispatch( startLogout())
})
export default connect(undefined , mapDispatchToProps)(Header)