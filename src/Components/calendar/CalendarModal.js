import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./modal.css";

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
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    console.log("closing...");
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      // onAfterOpen={afterOpenModal}
      style={customStyles}
      contentLabel="Example Modal"
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1>Hello World</h1>
      <hr />
      <span>Hello Yeison</span>
    </Modal>
  );
};

export default CalendarModal;
