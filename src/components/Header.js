import React from "react";
import { Link } from "react-router-dom"
import {startLogout} from "../actions/auth"
import {connect} from "react-redux"

export const Header = (props) => (
    <header className="header">
        <div className="content-container">
            <div className="header_content">
                <Link className="header__title" to="/dashboard">  
                    <h1>Expensify</h1>
                </Link>
                <button className="button-inline" onClick={props.startLogout}>Logout</button>
            </div>
        </div>
    </header>
)
const mapDispatchToProps = (dispatch) =>({
    startLogout: () => dispatch( startLogout())
})
export default connect(undefined , mapDispatchToProps)(Header)