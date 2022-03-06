import React from "react";
import NavBar from "../ui/NavBar";
import "../../index.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { messages } from "../../helpers/calendar-messages-es";
const localizer = momentLocalizer(moment);
const events = [
  {
    title: "Learn React Today",
    start: moment().toDate(),
    end: moment().add(2, "hours").toDate(),
    bgcolor: "#fafafa",
  },
];

const CalendarScreen = () => {
  return (
    <div className="calendar-screen">
      <NavBar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccesor="start"
        endAccesor="end"
        messages={messages}
      />
    </div>
  );
};

export default CalendarScreen;
