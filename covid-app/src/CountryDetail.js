import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryDetail: {},
    };
  }

  componentDidUpdate(previousProps) {
    console.log("Hi");
    if (previousProps.countries != this.props.countries) {
      const { match, countries } = this.props;
      const country = countries.find(
        (country) => country.Country === match.params.name
      );
      console.log(match.params.name);
      console.log(countries);

      this.setState({
        countryDetail: country,
      });
    }
  }
  render() {
    return (
      <>
        <h1>{this.state.countryDetail.Country}</h1>
      </>
    );
  }
}

export default withRouter(CountryDetail);
