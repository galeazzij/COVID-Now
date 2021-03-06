import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const timeUrl = "https://worldtimeapi.org/api/ip";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeInfo: {},
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const timeData = await axios(`${timeUrl}`);
      this.setState({
        timeInfo: timeData.data,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <>
        <div className="container">
          <p>
            <h2>COVID-19 Lookup</h2>
          </p>
          <p>{`It looks like your timezone is: ${this.state.timeInfo.timezone}`}</p>
          <p>{`Where the current time is: ${this.state.timeInfo.datetime}`}</p>
        </div>
      </>
    );
  }
}

export default withRouter(Header);
