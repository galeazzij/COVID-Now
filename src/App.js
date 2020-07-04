import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";

import medical from "./medical.jpeg";
import AllCountry from "./AllCountry.js";
import CountryDetail from "./CountryDetail.js";
import TopFive from "./TopFive.js";
import Search from "./Search.js";
import Header from "./Header.js";
import Footer from "./Footer.js";

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
    try {
      const countryData = await axios(`${covidUrl}`);
      console.log(countryData.data.Countries);
      this.setState({
        country: countryData.data.Countries,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <>
        <header className="page-header bg-dark text-white">
          <Header />
        </header>

        <nav className="nav-justified">
          <Link to="/">Home</Link>
          <Link to="/AllCountry">All Countries</Link>
        </nav>

        <img
          src={medical}
          className="img-fluid rounded mx-auto d-block"
          alt="Medical Worker"
        ></img>

        <main className="container-fluid">
          <section className="row">
            <Route path="/" exact>
              <div className="col-sm-6 border">
                <TopFive country={this.state.country} />
              </div>

              <div className="col-sm-6 border">
                <Search country={this.state.country} />
              </div>
            </Route>
          </section>

          <Route path="/AllCountry">
            <AllCountry country={this.state.country} />
          </Route>

          <Route path="/CountryDetail/:name">
            <CountryDetail countries={this.state.country} />
          </Route>
        </main>

        <footer className="page-footer bg-dark">
          <Footer />
        </footer>
      </>
    );
  }
}

export default App;
