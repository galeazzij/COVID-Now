import React from "react";
import { Route, Link } from "react-router-dom";
import { render } from "@testing-library/react";

import About from "./About.js";

const Footer = () => {
  render();
  return (
    <>
      <nav>
        <Link to="/About">About Me</Link>
      </nav>
      <Route path="/About">
        <About />
      </Route>
    </>
  );
};

export default Footer;
