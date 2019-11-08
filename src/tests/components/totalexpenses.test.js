import totalExpenses from  "../../components/totalExpenses"
import expenses from "../fixtures/expenses"

test( "Should render 0 with no expenses", () => {
    const res = totalExpenses( [] )
    expect( res ).toBe( 0 )
} )

test( "Should render correctly with one expenses", () => {
    const res = totalExpenses( [expenses[0]] )
    expect( res ).toBe( 195 )
} )

test("Should render correctly with multiple expenses" ,()=> {
    const res = totalExpenses( expenses )
    expect( res ).toBe(104695)
})