import React from "react"
import { shallow } from "enzyme";
import { PageNotFound } from "../../components/PageNotFound"

test( "sholud render Expense PageNotFound correctly", () => {
    const wrapper = shallow( <PageNotFound/> )
    expect( wrapper ).toMatchSnapshot()
} )