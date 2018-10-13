import React from "react";
import ReactDOM from "react-dom";

// Component Imports
import Login from "./Login.js";

// import DataProvider from "./DataProvider";

const App = () => (
  <Login></Login>
);

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;