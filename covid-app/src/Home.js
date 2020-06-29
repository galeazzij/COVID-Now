import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

const Home = (props) => {
  return (
    <div>
      {props.country.map((countryList) => (
        <>
          <Link to={`/CountryDetail/${countryList.Country}`}>
            <h1>{countryList.Country}</h1>
          </Link>
        </>
      ))}
    </div>
  );
};

export default withRouter(Home);
