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
    console.log(event, start, end, isSeleected);
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
      />
    </div>
  );
};

export default CalendarScreen;
