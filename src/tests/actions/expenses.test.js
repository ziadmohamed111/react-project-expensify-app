import configureMockStrore from "redux-mock-store"
import thunk from "redux-thunk"
import { startAddExpense, addExpense, editExpense, removeExpense , setExpenses ,startSetExpenses} from "../../actions/expenses"
import expenses from "../fixtures/expenses"
import database from "../../firebase/firebase"

const createMockStore = configureMockStrore( [thunk] )
beforeEach( ( done ) => {
    const expensesData = {}
    expenses.forEach( ( { description, amount, note, createdAt, id } ) => {
        expensesData[id] = { description, amount, note, createdAt }
    } )
    database.ref( 'expenses' ).set( expensesData ).then( () => done() )
} )


test( "should setup Edit Expense Action Object", () => {
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

test( "should Add Expense to database and store with default", ( done ) => {
    const store = createMockStore( {} )
    const expenseDefault = {
        description: "",
        amount: 0,
        note: "",
        createdAt: 0
    }
    store.dispatch( startAddExpense( {} ) ).then( () => {
        const actions = store.getActions()
        expect( actions[0] ).toEqual( {
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any( String ),
                ...expenseDefault
            }
        } );

        return database.ref( `expenses/${actions[0].expense.id}` ).once( 'value' )
    }).then( ( snapshot ) => {
        expect( snapshot.val() ).toEqual( expenseDefault )
        done()
    } )
} )

test("should set up set expenses action object with data", () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type : "SET_EXPENSES",
        expenses
    })
})


test( "should fetch data from database and store ", ( done ) => {
    const store = createMockStore( {} )

    store.dispatch( startSetExpenses() ).then( () => {
        const actions = store.getActions()
        expect( actions[0] ).toEqual( {
            type: "SET_EXPENSES",
            expenses 
        } );

        done()
    } )
} )