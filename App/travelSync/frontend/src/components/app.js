import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home";

export default class App extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Route path="/" component={Home} />
      </Router>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);