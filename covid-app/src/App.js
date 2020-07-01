import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";

import medical from "./medical.jpeg";
import Home from "./Home.js";
import CountryDetail from "./CountryDetail.js";
import TopFive from "./TopFive.js";

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
        <header>
          <h1>COVID-19 Lookup Application</h1>
        </header>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/CountryDetail">Country Detail Page</Link>
        </nav>

        <img src={medical}></img>

        <section className="App">
          <Route path="/" exact>
            <Home country={this.state.country} />
          </Route>

          <TopFive country={this.state.country} />

          <Route path="/CountryDetail/:name">
            <CountryDetail countries={this.state.country} />
          </Route>
        </section>
      </>
    );
  }
}

export default App;
