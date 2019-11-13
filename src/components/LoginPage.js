import React from "react"
import { connect } from "react-redux"
import { startLogin } from "../actions/auth"

export const LoginPage = ( props ) => (
    <div className="box-layout">
        <div className="box-layout__login-box">
            <h1>Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <button className="button-big" onClick={props.startLogin}>Login With Google</button>
        </div>
        
    </div>
)

const mapDispatchToProps = ( dispatch ) => ( {
    startLogin: () => dispatch( startLogin() )
} )

export default connect( undefined, mapDispatchToProps )( LoginPage ) 