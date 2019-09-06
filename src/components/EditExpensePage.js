import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm'
import {editExpense, removeExpense, startRemoveExpense} from '../actions/expenses'

export class EditExpensePage extends React.Component{
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expenses.id, expense)
        this.props.history.push('/')
    };
    onClick = ()=>{
        this.props.startRemoveExpense({id: this.props.expenses.id});
        this.props.history.push('/')
    }
    render () {
        return (
            <div>
            <ExpenseForm
            expense={this.props.expenses}
            onSubmit={this.onSubmit}
            />
            <button onClick={this.onClick}>Remove</button>
        </div>
        )
    } 
        
}

const mapStateToProps = (state, props) => {
    return {
        expenses:state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) =>  dispatch(editExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);