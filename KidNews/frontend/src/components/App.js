import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Component Imports
import {Log} from "./Log";
import {Dashboard} from "./Dashboard";

// import DataProvider from "./DataProvider";

const App = () => (
  <Router>
    <Switch>
      <Route exact path ="/home/dashboard" component={Dashboard}/>
      <Route exact path ="/home/log" component={Log}/>
    </Switch>
  </Router>
);

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;