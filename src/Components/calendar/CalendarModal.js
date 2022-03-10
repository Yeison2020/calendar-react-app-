import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

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
  const [titleValid, setTitleValid] = useState(true);
  const [formValues, setFormValues] = useState({
    title: "Evento",
    notes: "",
    start: now_Hoy.toDate(),
    end: endDate.toDate(),
  });

  const { title, notes, start, end } = formValues;
  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleStartDateChange = (e) => {
    setFormValues({
      ...formValues,
      start: e,
    });
    setDateStart(e);
    console.log(e);
  };

  const handleEndDatpicked = (e) => {
    setFormValues({
      ...formValues,
      end: e,
    });
    console.log(e);
    setEndDatePicked(e);
  };

  const closeModal = () => {
    // TODO NEED TO CLOSE MODAL AND HANDLE THIS USING THE STATE IsOpen THAT IS BEEN PASS AS A PROP
    // setIsOpen(false);
    console.log("closing...");
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const momentStar = moment(start);
    const momentEnd = moment(end);

    // isBefore or isAfter methods under moment.
    if (momentStar.isSameOrAfter(momentEnd)) {
      Swal.fire("Error", "Last Date should be higher than first date", "error");
    }
    if (title.trim().length < 2) {
      setTitleValid(false);
    }
    setTitleValid(true);
    closeModal();

    // TODO: ADD TO DATABASE INFORMATION
    console.log(formValues);
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
      <form className="container" onSubmit={handleSubmitForm}>
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
            className={`form-control ${!titleValid && "is-invalid"}`}
            name="title"
            autoComplete="off"
            value={title}
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            rows="5"
            name="notes"
            value={notes}
            onChange={handleInputChange}
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
