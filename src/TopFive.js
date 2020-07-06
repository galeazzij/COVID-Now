import React from "react";
import { Link, withRouter } from "react-router-dom";

//TopFive sorts the countries into the descending order
const TopFive = (props) => {
  const sortedCountries = [...props.country].sort(
    (a, b) => b.TotalConfirmed - a.TotalConfirmed
  );

  //justFive gets the first five items in the sorted array TopFive
  const justFive = sortedCountries.slice(0, 5);
  console.log(sortedCountries);

  return (
    <div>
      <h3>Top Five Countries by Cases</h3>
      {justFive.map((countryList) => (
        <>
          <Link to={`/CountryDetail/${countryList.Country}`}>
            <h5>{countryList.Country}</h5>
          </Link>
        </>
      ))}
    </div>
  );
};

export default withRouter(TopFive);
