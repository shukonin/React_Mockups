import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Dashboard } from "./Dashboard/Dashboard";
import { Home } from "./Home";
import { Signup1 } from "./Signup_1/Signup1";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/React_Mockups/" component={Home} />
        <Route exact path="/React_Mockups/signup1" component={Signup1} />
        <Route exact path="/React_Mockups/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
