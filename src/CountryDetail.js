import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryDetail: {},
    };
  }

  findCountry() {
    const { match, countries } = this.props;
    const country = countries.find(
      (country) => country.Country === match.params.name
    );

    this.setState({
      countryDetail: country || {},
    });
  }

  componentDidMount() {
    this.findCountry();
  }
  //need below since we're only updating once componentDidMount
  componentDidUpdate(previousProps) {
    if (previousProps.countries !== this.props.countries) {
      this.findCountry();
    }
  }
  render() {
    return (
      <>
        <div className="container">
          <h1>Country: {this.state.countryDetail.Country}</h1>
          <h3>
            Total Confirmed Cases: {this.state.countryDetail.TotalConfirmed}
          </h3>
          <h3>Total Deaths: {this.state.countryDetail.TotalDeaths}</h3>
        </div>
      </>
    );
  }
}

export default withRouter(CountryDetail);
