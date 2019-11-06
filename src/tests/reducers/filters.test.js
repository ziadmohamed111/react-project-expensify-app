import filtersReducers from "../../reducers/filters"
import moment from "moment"

test( "should setup default filter values", () => {
    const state = filtersReducers( undefined, { type: "@@INIT" } )
    expect(state).toEqual({
        text:"",
        sortBy : "date",
        startDate: moment().startOf( "month" ),
        endDate: moment().endOf( "month" ),
    })
} )
test( "should setup sort by to amount", () => {
    const state = filtersReducers( undefined , { type:"SORT_BY_AMOUNT" } )
    expect( state.sortBy ).toBe("amount")
} )
test( "should setup sort by to date", () => {
    const currentState = {
        text: "",
        sortBy: "amount",
        startDate: moment().startOf( "month" ),
        endDate: moment().endOf( "month" )
    }
    const action = { type: "SORT_BY_DATE" }
    const state = filtersReducers( currentState , action )
    expect( state.sortBy ).toBe("date")
} )
test( "should setup start date", () => {
    const action = { type: "SET_TEXT_FILTER", text: "test" }

    const state = filtersReducers( undefined, action )

    expect( state.text ).toBe( "test" )
} )
test( "should setup start date", () => {
    const action = { type: "SET_START_DATE", startDate : moment(0) }

    const state = filtersReducers( undefined, action )
    
    expect( state.startDate ).toEqual( moment(0) )
} )
test( "should setup end date", () => {
    const action = { type: "SET_END_DATE", endDate: moment(0) }

    const state = filtersReducers( undefined, action )

    expect( state.endDate ).toEqual( moment( 0 ) )
} )