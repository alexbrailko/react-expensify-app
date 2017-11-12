import React from 'react';
import { shallow } from 'enzyme';
import { findDOMNode } from 'react-dom';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
import Modal from 'react-modal';

let startEditExpense,  startRemoveExpense, history, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage 
        startEditExpense={startEditExpense} 
        startRemoveExpense={startRemoveExpense} 
        history={history} 
        expense={expenses[2]}
        />
    );
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2] );
});

test('should handle startRemoveExpense', () => {
    wrapper.find('button.yes').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
});

test('should render modal', () => {
    const modal = wrapper.find('Modal');
    wrapper.find('button.removeButton').simulate('click');
    expect(modal).toHaveLength(1); 
    expect(wrapper.state('modalIsOpen')).toEqual(true);
});
 