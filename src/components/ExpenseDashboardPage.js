import React from 'react';
import ExpenseList from "./ExpenseList"
import ExpenseListFilters from "./ExpenseListFilters"
import ExpenseSummary from "./ExpenseSummary"

export const ExpenseDashboardPage = () => {    
    return (
        (
            <div>
                <ExpenseSummary/>
                <ExpenseListFilters/>
                <ExpenseList/>
            </div>
        )
    )
}

export default ExpenseDashboardPage