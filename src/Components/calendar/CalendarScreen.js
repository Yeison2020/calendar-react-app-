import React from "react";
import NavBar from "../ui/NavBar";
import CalendarEvent from "./CalendarEvent";
import "../../index.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { messages } from "../../helpers/calendar-messages-es";
import "moment/locale/es";
moment.locale("es");
const localizer = momentLocalizer(moment);
const events = [
  {
    title: "Learn React Today",
    start: moment().toDate(),
    end: moment().add(2, "hours").toDate(),
    bgcolor: "#fafafa",
    notes: "Comprar cake",
    user: {
      _id: 123,
      name: "Yeison",
    },
  },
];

const CalendarScreen = () => {
  const eventStyleGetter = (event, start, end, isSeleected) => {
    // console.log(event, start, end, isSeleected);
    const style = {
      backgroundColor: "#367CF7",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };

    return {
      style,
    };
  };

  // Here those events help me to extract my current location or If I'm editing my files at that location.
  const onDoubleClick = (e) => {
    console.log(e);
  };
  const onSelectedEvent = (e) => {
    console.log(e);
  };

  const onViewChange = (e) => {
    console.log(e);
  };
  return (
    <div className="calendar-screen">
      <NavBar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccesor="start"
        endAccesor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        components={{ event: CalendarEvent }}
        onView={onViewChange}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectedEvent}
      />
    </div>
  );
};

export default CalendarScreen;
