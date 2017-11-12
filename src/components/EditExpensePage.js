import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import Modal from 'react-modal';

const modalStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

export class EditExpensePage extends React.Component {
    state = {
        modalIsOpen: false
    };

    closeModal = () => {
        this.setState(() => ({ modalIsOpen: false }));
    };

    openModal = () => {
        this.setState(() => ({ modalIsOpen: true }));
    };

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };


    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary removeButton" onClick={this.openModal}>Remove</button>
                </div>
                <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                contentLabel="Are you sure you want to delete?"
                style={modalStyles}
                >
                    <h3>Are you sure you want to delete?</h3>
                    <button className="yes" onClick={this.onRemove}>yes</button>
                    <button className="no" onClick={this.closeModal}>no</button>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => { //give the component the currect expense object
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  } 
}; //pass new props

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)), 
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
