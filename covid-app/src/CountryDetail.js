import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: [],
    };
  }

  componentDidMount() {
    const { match, countries } = this.props;
    const country = countries.find(
      (country) => country.Country === match.params.name
    );
    console.log(countries);
    this.setState({ country });
  }
  render() {
    return (
      <>
        <h1>This is CountryDetail Page</h1>
      </>
    );
  }
}

export default withRouter(CountryDetail);
