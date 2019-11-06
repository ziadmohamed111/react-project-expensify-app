import expensesReducers from "../../reducers/expenses"
import expenses from "../fixtures/expenses"
import moment from "moment"

test( "should setup default state", () => {
    const state = expensesReducers( undefined, { type: "@@INIT" } )
    expect( state ).toEqual( [] )
} )

test( "should setup new expense", () => {

    const expense = {
        id: "4",
        description: "Coffe",
        note: "",
        amount: 250,
        createdAt: 0
    }
    const action = { type: "ADD_EXPENSE", expense }

    const state = expensesReducers( expenses ,action )
    expect( state ).toEqual( [...expenses, expense] )

} )

test( "should edit an expense with id", () => {

    const action = { 
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        updates : {
            note : "test"
        }
    }

    const state = expensesReducers( expenses, action )
    expect( state[1].note ).toBe("test")

} )

test( "should not edit an expense if ID not found", () => {

    const action = {
        type: "EDIT_EXPENSE",
        id: "-1",
        updates: {
            note: "test"
        }
    }

    const state = expensesReducers( expenses, action )
    expect(state).toEqual(expenses)

} )

test( "should remove expense by ID" , ()=>{
    
    const action = {
        type:"REMOVE_EXPENSE",
        id : expenses[1].id
    }

    const state = expensesReducers( expenses, action )
    expect( state ).toEqual( [expenses[0], expenses[2]] )

})

test( "should not remove expense if ID not found", () => {

    const action = {
        type: "REMOVE_EXPENSE",
        id: "-1"
    }

    const state = expensesReducers( expenses, action )
    expect( state ).toEqual( expenses )

} )