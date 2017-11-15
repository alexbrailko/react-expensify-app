import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';


export const ExpensesSummary = ({ expenseCount, expensesTotal, notShowingExpenseCount }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const notShowingexpenseWord = notShowingExpenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span>
                </h1>
                
                { notShowingExpenseCount > 0 &&  
                    <span className="page-header__hidden_expenses">
                        Not showing <span>{notShowingExpenseCount}</span> {notShowingexpenseWord} because of filters.
                    </span>
                }

                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const notShowingExpenseCount = state.expenses.length - visibleExpenses.length;

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses),
        notShowingExpenseCount: notShowingExpenseCount
    };
};
  
export default connect(mapStateToProps)(ExpensesSummary);