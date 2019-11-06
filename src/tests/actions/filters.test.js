import moment from "moment"
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../../actions/filters"

test( "should generate Set Start Date action object", () => {
    const action = setStartDate( moment( 0 ) )
    expect( action ).toEqual( {
        type: "SET_START_DATE",
        startDate: moment( 0 )
    } )
} )

test( "should generate Set End Date action object", () => {
    const action = setEndDate( moment( 0 ) )
    expect( action ).toEqual( {
        type: "SET_END_DATE",
        endDate: moment( 0 )
    } )
} )

test( "should generate Sort By Date action object", () => {
    expect( sortByDate() ).toEqual( { type: "SORT_BY_DATE" } )
} )

test( "should generate Sort By Amount action object", () => {
    expect( sortByAmount() ).toEqual( { type: "SORT_BY_AMOUNT" } )
} )

test( "should generate Sort By Text action object with provided text", () => {
    const action = setTextFilter( "test" )
    expect( action ).toEqual( {
        type: "SET_TEXT_FILTER",
        text: "test"
    } )
} )

test( "should generate Sort By Text action object without providing text", () => {
    const action = setTextFilter()
    expect( action ).toEqual( {
        type: "SET_TEXT_FILTER",
        text: ""
    } )
} )