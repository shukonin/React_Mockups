import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Signup1 } from "./Signup_1/Signup1";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup1" component={Signup1} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
