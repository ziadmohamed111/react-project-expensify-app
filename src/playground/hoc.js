import React from "react"
import ReactDOM from "react-dom"

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>my info is : {props.info}</p>
    </div>
)
const withAdminWarning = (WrapedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>this information is private, please dont share</p>}
            <WrapedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrapedComponent) => {
    return (props) => (
        <div>
            
            { props.isAuthenticated ? 
              <WrapedComponent {...props}/> :
              <p>you have to Authenticate</p>}

        </div>
    )
}


const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render( <AuthInfo isAuthenticated={false} info="my name is zeyad"/> , document.getElementById('app'))