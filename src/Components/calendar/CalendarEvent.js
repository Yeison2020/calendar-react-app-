import React from "react";

const CalendarEvent = ({ event }) => {
  const { title, notes, user } = event;
  return (
    <div>
      <h6>{title}</h6>
      <strong>{user.name}</strong>
      <h6>{notes}</h6>
    </div>
  );
};

export default CalendarEvent;
