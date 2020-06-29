import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: [],
      loading: true,
    };
  }
  render() {
    return (
      <>
        <div className="App">
          <h1>Covid App</h1>
        </div>
      </>
    );
  }
}

export default App;
