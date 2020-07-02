import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      countryDetail: {},
    };
  }
  //Utilized from Pokedex lab
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  handleSearch = () => {
    const { country } = this.props;
    const countrySearch = country.find(
      (country) => country.Country === this.state.searchText
    );

    this.setState({
      countryDetail: countrySearch || {},
    });
  };

  render() {
    return (
      <>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleSearch}>Search</button>

        <section>
          {this.state.countryDetail ? (
            <h2>Country: {this.state.countryDetail.Country}</h2>
          ) : (
            `Sorry I didn't recognize that country!`
          )}
        </section>
      </>
    );
  }
}

export default withRouter(Search);
