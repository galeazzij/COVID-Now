import React from "react";
import { Route, Link } from "react-router-dom";
import { render } from "@testing-library/react";

import About from "./About.js";

const Footer = () => {
  render();
  return (
    <>
      <nav className="nav-justified">
        <Link to="/About">About Me</Link>
        <h6 className="text-white">Powered by:</h6>
        <a href="https://covid19api.com/">COVID19api</a>
        <a href="http://worldtimeapi.org/">World Time API</a>
      </nav>
      <Route path="/About">
        <About />
      </Route>
    </>
  );
};

export default Footer;
