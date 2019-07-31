import React from 'react';
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'


test('should render ExpenseSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={1290}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={125353343}/>)
    expect(wrapper).toMatchSnapshot();
});