import React from "react"
import { shallow } from "enzyme"
import { AddExpensePage } from "../../components/AddExpensePage"
import expenses from "../fixtures/expenses"

let history, startAddExpense, wrapper
beforeEach( () => {
    startAddExpense = jest.fn()
    history = {
        push: jest.fn()
    }
    wrapper = shallow( <AddExpensePage startAddExpense={startAddExpense} history={history} /> )
} )

test( "should render Add Expense Page Correctly", () => {
    expect( wrapper ).toMatchSnapshot()
} )

test( "should handel on Submit", () => {
    wrapper.find( "ExpenseForm" ).prop( "onSubmit" )( expenses[1] )
    expect( history.push ).toHaveBeenLastCalledWith( "/" )
    expect( startAddExpense ).toHaveBeenLastCalledWith( expenses[1] )
} )