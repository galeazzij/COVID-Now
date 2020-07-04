import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      countryDetail: {},
      showSearch: false,
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
    if (!countrySearch) {
      alert("Sorry your search did not match any countries!");
      return;
    }
    this.setState({
      countryDetail: countrySearch || {},
      setSearch: true,
    });
  };

  render() {
    return (
      <>
        <section className="container">
          <div>
            <h2>Search for a Country Below:</h2>
          </div>
          <div>
            <input type="text" onChange={this.handleChange} />
            <button className="btn btn-primary" onClick={this.handleSearch}>
              Search
            </button>
          </div>
          <br></br>

          <div className="container">
            {this.state.setSearch && (
              <p>
                <h5>Country:</h5>
                {this.state.countryDetail.Country}
                <br></br>
                <h5>Total Confirmed Cases:</h5>
                {this.state.countryDetail.TotalConfirmed}
                <br></br>
                <h5>Total Deaths:</h5>
                {this.state.countryDetail.TotalDeaths}
              </p>
            )}
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(Search);
