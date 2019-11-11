import React from "react"
import { shallow } from "enzyme"
import { EditExpensePage } from "../../components/EditExpensePage"
import expenses from "../fixtures/expenses"

let history, editExpense, startRemoveExpense, wrapper

beforeEach( () => {
    editExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <EditExpensePage expense={expenses[1]} startRemoveExpense={startRemoveExpense} editExpense={editExpense} history={history} /> )
} )

test( "should render edit Expense Page Correctly", () => {
    expect( wrapper ).toMatchSnapshot()
} )

test( "should handel on Submit", () => {
    wrapper.find( "ExpenseForm" ).prop( "onSubmit" )( expenses[1] )
    expect( history.push ).toHaveBeenLastCalledWith( "/" )
    expect( editExpense ).toHaveBeenCalledWith( expenses[1].id, expenses[1] )
} )

test( "should handel on Remove", () => {
    wrapper.find( "button" ).simulate( "click" )
    expect( history.push ).toHaveBeenLastCalledWith( "/" )
    expect( startRemoveExpense ).toHaveBeenCalledWith( { id: expenses[1].id } )
} )


