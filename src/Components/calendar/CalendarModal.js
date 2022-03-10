import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import DateTimePicker from "react-datetime-picker";
import "./modal.css";
import moment from "moment";
import "../../index.css";

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

const now_Hoy = moment().minutes(0).seconds(0).add(1, "hours");
// Created a clone of my initial time
const endDate = now_Hoy.clone().add(1, "hours");

// Here I can add two day ahead of my current day Love Moment Library
// const endDate = moment().minutes(0).seconds(0).add(1, "hours");
const CalendarModal = () => {
  // const [isOpen, setIsOpen] = useState(true);
  const [dateStart, setDateStart] = useState(now_Hoy.toDate());
  const [endDatePicked, setEndDatePicked] = useState(endDate.toDate());

  const handleStartDateChange = (e) => {
    setDateStart(e);
    console.log(e);
  };

  const handleEndDatpicked = (e) => {
    console.log(e);
    setEndDatePicked(e);
  };

  const closeModal = () => {
    // setIsOpen(false);
    console.log("closing...");
  };
  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      // onAfterOpen={afterOpenModal}
      style={customStyles}
      contentLabel="Example Modal"
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container">
        <div className="form-group">
          <label>Fecha y hora inicio</label>{" "}
          <DateTimePicker
            onChange={handleStartDateChange}
            value={dateStart}
            className="react-datetime-picker react-datetime-picker_wrapper form-control"
          />
        </div>

        <div className="form-group">
          <label>Fecha y hora fin</label>
          <label>Fecha y hora inicio</label>{" "}
          <DateTimePicker
            onChange={handleEndDatpicked}
            value={endDatePicked}
            minDate={dateStart}
            className="react-datetime-picker react-datetime-picker_wrapper form-control"
          />
        </div>

        <hr />
        <div className="form-group">
          <label>Titulo y notas</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};

export default CalendarModal;
