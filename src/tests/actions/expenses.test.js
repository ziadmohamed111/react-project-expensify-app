import configureMockStrore from "redux-mock-store"
import thunk from "redux-thunk"
import { startAddExpense, addExpense, editExpense, removeExpense } from "../../actions/expenses"
import expenses from "../fixtures/expenses"
import database from "../../firebase/firebase"

const createMockStore = configureMockStrore( [thunk] )

test( "should setup Add Expense Action Object with provided values", () => {
    const action = addExpense( expenses[2] )

    expect( action ).toEqual( {
        type: "ADD_EXPENSE",
        expense: expenses[2]
    } )

} )

test( "should Add Expense to database and store ", ( done ) => {
    const store = createMockStore( {} )
    const expenseData = {
        description: 'test',
        amount: 1000,
        note: "this one is better",
        createdAt: 1000
    }

    store.dispatch( startAddExpense( expenseData ) ).then( () => {
        const actions = store.getActions()
        expect( actions[0] ).toEqual( {
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any( String ),
                ...expenseData
            }
        } );

        return database.ref( `expenses/${actions[0].expense.id}` ).once( 'value' )
            
    } ).then( ( snapshot ) => {
            expect( snapshot.val() ).toEqual( expenseData )
            done()
        } )
} )

test( "should Add Expense to database and store with default", (done) => {
    const store = createMockStore( {} )

    store.dispatch( startAddExpense( {} ) ).then( () => {
        const actions = store.getActions()
        expect( actions[0] ).toEqual( {
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any( String ),
                description: "",
                note: "",
                amount: 0,
                createdAt: 0
            }
        } );

        return database.ref( `expenses/${actions[0].expense.id}` ).once( 'value' )

    } ).then( ( snapshot ) => {
        expect( snapshot.val() ).toEqual( {
            description: "",
            note: "",
            amount: 0,
            createdAt: 0
        } )
        done()
    } )
} )


// test( "should setup Add Expense Action Object with default values", () => {
//     const expenseData = {
//         description : "",
//         note : "",
//         amount : 0,
//         createdAt : 0
//     }

//     const action = startAddExpense( expenseData )

//     expect( action ).toEqual( {
//         type: "ADD_EXPENSE",
//         expense: {
//             ...expenseData,
//             id:expect.any(String)
//         }
//     } )

// } )

test( "should setup Edit Expenw  wse Action Object with id and updates", () => {
    const action = editExpense( "abc123", {
        note: "this is note"
    } )
    expect( action ).toEqual( {
        type: "EDIT_EXPENSE",
        id: "abc123",
        updates: {
            note: "this is note"
        }
    } )
} )

test( "should setup Remove Expense action object with id", () => {
    const action = removeExpense( { id: "abc123" } )
    expect( action ).toEqual( {
        type: "REMOVE_EXPENSE",
        id: "abc123"
    } )
} )