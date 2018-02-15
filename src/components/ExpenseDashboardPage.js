import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        this is from my dashboard component
        <ExpenseListFilters />
        <ExpensesSummary />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;