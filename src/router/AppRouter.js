import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "../Components/auth/LoginScreen";
import CalendarScreen from "../Components/calendar/CalendarScreen";
const AppRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/home" component={CalendarScreen} />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
