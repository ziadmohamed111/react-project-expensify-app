import React from "react"
import {shallow} from "enzyme"
import { ExpenseListFilters} from "../../components/ExpenseListFilters"
import {filters ,altFilters} from "../fixtures/filters"
import moment from "moment"

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate ,wrapper;

beforeEach(()=>{
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            />
        )
})

test("should render ExpenseListFilters correctly",()=>{
    expect(wrapper).toMatchSnapshot()
})

test( "should render ExpenseListFilters alt correctly", () => {
    wrapper.setProps({"filters":altFilters})
    expect( wrapper ).toMatchSnapshot()
} )


test("should handel text",()=>{
    const value = "text"
    wrapper.find('input').simulate('change',{
        target : {value}
    })
    expect( setTextFilter ).toHaveBeenLastCalledWith( value)
})

test("should handel sort by date",()=>{
    wrapper.setProps( { "filters": altFilters } )

    const value = "date"
    wrapper.find('select').simulate('change',{
        target : {value}
    })
    expect( sortByDate ).toHaveBeenLastCalledWith()
})

test("should handel sort by amount",()=>{
    const value = "amount"
    wrapper.find('select').simulate('change',{
        target : {value}
    })
    expect( sortByAmount ).toHaveBeenLastCalledWith()
})

test( "should handel date change", () => {
    const startDate = moment(0).add(4,'days')
    const endDate = moment(0).add(8,'days')

    wrapper.find( "DateRangePicker" ).prop("onDatesChange")({startDate , endDate})
    expect( setStartDate ).toHaveBeenCalledWith(startDate)
    expect( setEndDate ).toHaveBeenCalledWith(endDate)
} )

test( "should handel date focus change", () => {
    const calenderFocused = "endDate"
    wrapper.find( "DateRangePicker" ).prop( "onFocusChange" )( calenderFocused )
    expect( wrapper.state( "calendarFocused" ) ).toBe( calenderFocused )
} )
