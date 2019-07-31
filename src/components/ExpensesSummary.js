import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral'


export const ExpensesSummary = (props) => (
    <div>
        {
            props.expenses.length > 0 && (
                <p> Viewing {props.expenses.length} 
                {props.expenses.length === 1 ? ' expense ' : ' expenses '} 
                totalling {
                    numeral(selectExpensesTotal(props.expenses)/100).format('$0,0.00')} </p>
            )
        }    
    </div>
)

const mapStateToProps = (state) => ({
    expenses:selectExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpensesSummary)