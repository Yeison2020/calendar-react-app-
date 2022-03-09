import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const CalendarModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const closeModal = () => {
    console.log("closing...");
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      // onAfterOpen={afterOpenModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h1>Hello World</h1>
      <hr />
      <span>Hello Yeison</span>
    </Modal>
  );
};

export default CalendarModal;
