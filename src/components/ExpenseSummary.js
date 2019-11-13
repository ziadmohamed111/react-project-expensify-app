import React from 'react';
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import totalExpenses from "./totalExpenses"
import numeral from "numeral"
import selectExpenses from "../selectors/expenses"

export const ExpenseSummary = ( { expensesCount, expenseTotal}) => {
    const expenseWord = expensesCount === 1 ? "expense" : "expenses" 
    const formatedTotalExpenses = numeral( expenseTotal / 100 ).format( '$0,0.00' )
    return(
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header_title">Viewing <span> {expensesCount}</span> {expenseWord} totalling <span> {formatedTotalExpenses} </span> </h1>
                <div className="page-header_actions">
                    <Link className="button-big" to="/create">Add Expense</Link>
                </div>
            </div>
     
        </div>
    )

}

const mapStateToProps = ( state ) => {
    const visExpenses = selectExpenses(state.expenses , state.filters)
    return {
        expensesCount : visExpenses.length,
        expenseTotal: totalExpenses(visExpenses)
    }
}

export default connect( mapStateToProps )( ExpenseSummary)