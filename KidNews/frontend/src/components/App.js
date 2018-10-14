import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Component Imports
import {Log} from "./Log";
import {Dashboard} from "./Dashboard";

import Home from "./Home";

const App = () => (
  <Home></Home>
);

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;