import { addExpense , editExpense , removeExpense } from "../../actions/expenses"


test( "should setup Add Expense Action Object with provided values", () => {
    const expenseData = {
        description:'rent',
        amount:"10",
        createdAt: 1000,
        note: "this was last month rent"
    }

    const action = addExpense(expenseData)

    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense : {
            ...expenseData,
            id: expect.any(String)
        }
    })

} )


test( "should setup Add Expense Action Object with default values", () => {
    const expenseData = {
        description : "",
        note : "",
        amount : 0,
        createdAt : 0
    }

    const action = addExpense( expenseData )

    expect( action ).toEqual( {
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id:expect.any(String)
        }
    } )
    
} )

test("should setup Edit Expenw  wse Action Object with id and updates",()=>{
    const action = editExpense("abc123" , {
        note : "this is note"
    })
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id : "abc123",
        updates: {
            note : "this is note"
        }
    } )
})

test("should setup Remove Expense action object with id" , ()=>{
    const action = removeExpense({ id : "abc123"})
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id:"abc123"
    })
})