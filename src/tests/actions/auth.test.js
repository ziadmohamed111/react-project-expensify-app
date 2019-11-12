import configureMockStrore from "redux-mock-store"
import thunk from "redux-thunk"
import {login , logout} from "../../actions/auth"


test( "should setup login action", () => {
    const uid = "abc"
    const action = login(uid)
    expect( action ).toEqual( {
        type: "LOGIN",
        uid
    } )
} )
test( "should setup logout action", () => {
    const action = logout()
    expect( action ).toEqual( {
        type: "LOGOUT"
    } )
} )
