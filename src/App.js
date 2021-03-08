import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import GameStartedContainer from "./pages/user/GameStartedContainer";
import GameDashboard from "./pages/user/GameDashboard";
import GamePreviousScores from "./pages/user/GamePreviousScores";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/dashboard" component={GameDashboard} />
        <Route exact path="/scores" component={GamePreviousScores} />
        <Route exact path="/game" component={GameStartedContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
