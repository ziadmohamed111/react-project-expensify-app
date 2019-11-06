import React from "react"
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm"
import expenses from "../fixtures/expenses"
import moment from "moment";

test("should render expenseForm correctly" , ()=>{
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
})

test( "should render expenseForm correctly with expense", () => {
    const expense = expenses[0]
    const wrapper = shallow( <ExpenseForm expense={expense}/> )
    expect( wrapper ).toMatchSnapshot()
} )

test( "should render error for invalid form submission", () => {
    const wrapper = shallow( <ExpenseForm /> )
    expect(wrapper).toMatchSnapshot()
    wrapper.find( 'form' ).simulate( 'submit', {
        preventDefault: () => { }
    } ) 
    expect(wrapper.state( "error" ).length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
} )

test( "should set description on input change", () => {
    const value = "new Description"
    const wrapper = shallow( <ExpenseForm /> )
    wrapper.find( 'input' ).at(0).simulate( 'change', {
        target:{value}
    } ) 
    expect( wrapper.state("description")).toBe(value)

} )

test( "should set note on input change", () => {
    const value = "new note"
    const wrapper = shallow( <ExpenseForm /> )
    wrapper.find( 'textarea' ).simulate( 'change', {
        target: { value }
    } )
    expect( wrapper.state( "note" ) ).toBe( value )

} )

test( "should set amount on input change with valid data", () => {
    const value = "50"
    const wrapper = shallow( <ExpenseForm /> )
    wrapper.find( 'input' ).at(1).simulate( 'change', {
        target: { value }
    } )
    expect( wrapper.state( "amount" ) ).toBe( value )

} )

test( "should not set amount on input change with invalid data", () => {
    const value = "50.1212"
    const wrapper = shallow( <ExpenseForm /> )
    wrapper.find( 'input' ).at( 1 ).simulate( 'change', {
        target: { value }
    } )
    expect( wrapper.state( "amount" ) ).toBe( "" )

} )

test( "should call on submit call with invalid data", () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow( <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find( 'form' ).simulate( 'submit', {
        preventDefault: () => { }
    } ) 
    expect(wrapper.state('error')).toBe("");
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description : expenses[0].description,
        amount : expenses[0].amount,
        note : expenses[0].note,
        createdAt : expenses[0].createdAt,
    })
} )

test( "should test on date change", () => {
    const now = moment() 
    const wrapper = shallow( <ExpenseForm/> )
    wrapper.find( 'SingleDatePicker' ).prop( 'onDateChange' )(now)
    expect(wrapper.state("createdAt")).toEqual(now)
} )

test( "should test on focus change", () => {
    const wrapper = shallow( <ExpenseForm /> )
    wrapper.find( 'SingleDatePicker' ).prop( 'onFocusChange' )( {focused : true} )
    expect( wrapper.state( "calenderFocused" ) ).toEqual( true )
} ) 