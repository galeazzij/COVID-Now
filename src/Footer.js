import React from "react";
import { Route, Link } from "react-router-dom";
import { render } from "@testing-library/react";

import About from "./About.js";

const Footer = () => {
  render();
  return (
    <>
      <nav className="nav-justified">
        <Link className="text-white" to="/About">
          About Me
        </Link>
        <h6 className="text-white">Powered by:</h6>
        <a className="text-white" href="https://covid19api.com/">
          COVID19api
        </a>
        <a className="text-white" href="http://worldtimeapi.org/">
          World Time API
        </a>
      </nav>
      <Route path="/About">
        <About />
      </Route>
    </>
  );
};

export default Footer;
