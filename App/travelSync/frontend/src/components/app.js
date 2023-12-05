//Utililzied the tutorial for implementing App class: https://www.youtube.com/watch?v=JD-age0BPVo
//Utailzied the tutorial for implementing App class: https://www.youtube.com/watch?v=uhSmgR1hEwg&t=744s

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
