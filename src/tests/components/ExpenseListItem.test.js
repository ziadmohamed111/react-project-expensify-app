import React from "react"
import { shallow } from "enzyme";
import ExpenseListItem from "../../components/ExpenseListItem"
import expenses from "../fixtures/expenses"

test("sholud render Expense list item with one expense", ()=>{
    const expenseitem = expenses[1]
    const wrapper = shallow( <ExpenseListItem {...expenseitem}/>)
    expect(wrapper).toMatchSnapshot()
})