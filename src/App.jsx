import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Dashboard } from './Dashboard/Dashboard';
import { Home } from './Home';
import { Signup1 } from './Signup_1/Signup1';
import { SinglePage } from './Single_Page/SinglePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/React_Mockups/" component={Home} />
        <Route exact path="/React_Mockups/signup1" component={Signup1} />
        <Route exact path="/React_Mockups/dashboard" component={Dashboard} />
        <Route exact path="/React_Mockups/singlepage" component={SinglePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
