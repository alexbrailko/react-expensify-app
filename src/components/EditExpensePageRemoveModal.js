import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

const RemoveModal = (props) => (
    <Modal
    isOpen={props.modalIsOpen}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Are you sure you want to delete?"
    style={customStyles}
    >
        <h3>Are you sure you want to delete?</h3>
        <button className="yes" onClick={props.removeExpense}>yes</button>
        <button className="no" onClick={props.closeModal}>no</button>
    </Modal>
);

export default RemoveModal;