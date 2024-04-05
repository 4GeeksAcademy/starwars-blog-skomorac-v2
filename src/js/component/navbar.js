import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import ("../../styles/index.css")

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <img
          src={logo}
          width="80"
          height="50"
          className="d-inline-block align-top logo"
          alt="Logo"
        />
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-primary">
            Check the Context in action
          </button>
        </Link>
      </div>
    </nav>
  );
};
