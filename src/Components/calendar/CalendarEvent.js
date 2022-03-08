import React from "react";

const CalendarEvent = ({ event }) => {
  const { title, name } = event;
  return (
    <div>
      <h6>{title}</h6>
      <strong>{name}</strong>
    </div>
  );
};

export default CalendarEvent;
