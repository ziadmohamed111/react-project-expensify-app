import React from "react"
import {ExpenseSummary} from "../../components/ExpenseSummary"
import {shallow} from "enzyme"
import expenses from "../fixtures/expenses"

test("should render ExpenseSummary correctly with expenses" , ()=>{
    const wrapper = shallow(<ExpenseSummary expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})

test("should render ExpenseSummary correctly with one expenses" , ()=>{
    const wrapper = shallow(<ExpenseSummary expenses={[expenses[0]]}/>)
    expect(wrapper).toMatchSnapshot()
})