import authReducers from "../../reducers/auth"


test("should setup uid on login" , ()=>{
    const action = {
        type : "LOGIN",
        uid : "abc"
    }
    const state = authReducers({} , action)
    expect(state.uid).toBe("abc")
})
test("should remove uid on logout" , ()=>{
    const action = {
        type: "LOGOUT"
    }
    const state = authReducers( {uid : "abc"}, action )
    expect(state).toEqual({})
})