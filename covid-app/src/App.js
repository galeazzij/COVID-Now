import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import "./App.css";

const covidUrl = "https://api.covid19api.com/summary";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const countryData = await axios(`${covidUrl}`);
    console.log(countryData.data.Countries);
    this.setState({
      country: countryData.data.Countries,
      loading: false,
    });
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
