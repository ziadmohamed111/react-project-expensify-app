import React from 'react';
import {connect} from "react-redux"
import totalExpenses from "./totalExpenses"
import numeral from "numeral"

export const ExpenseSummary = (props) => (
    <div>
        <p>Viewing {props.expenses.length} {props.expenses.length === 1 ? "expense" : "expenses" } totalling {numeral( totalExpenses( props.expenses ) / 100 ).format( '$0,0.00' )} </p>
    </div>
)

const mapStateToProps = ( state ) => ( {
    expenses: state.expenses
} );

export default connect( mapStateToProps )( ExpenseSummary)