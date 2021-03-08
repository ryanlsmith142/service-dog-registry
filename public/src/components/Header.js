import React from "react";
import { useState } from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import SignIn from "../pages/SignIn";

import "../scss/main.css";

const Header = (props) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = (e) => setMobileMenu(!mobileMenu);
  return (
    <Router>
      <header className="container">
        {/* Actual Menu*/}
        <nav>
          <h3>
            <Link to="/">logo</Link>
          </h3>
          <ul className={"nav-link-list " + (mobileMenu ? "open" : "")}>
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/about">About Us</Link>
            </li>
            <li className="nav-link">
              <Link to="/sign-in">Sign in</Link>
            </li>
          </ul>
        </nav>
        {/*Mobile Menu Utilities*/}
        <div id="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          id="close-menu"
          className={mobileMenu ? "open" : ""}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
        </div>
        <a href="#" id={mobileMenu ? "overlay" : ""} onClick={toggleMenu}></a>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/sign-in" component={SignIn} />
        </Switch>
      </header>
    </Router>
  );
};

export default Header;
