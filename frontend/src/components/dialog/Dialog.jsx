import React, { useState } from 'react';
import Modal from 'react-modal';
const Dialog=()=> {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  
    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <h2>Dialog Box Title</h2>
          <p>Dialog box content goes here...</p>
          <button onClick={closeModal}>Close</button>
        </Modal>
      </div>
    );
  }
  
  export default Dialog