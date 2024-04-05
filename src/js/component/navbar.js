import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import("../../styles/index.css");

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
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Favorites
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to="/demo" className="dropdown-item">
              Demo Link
            </Link>
            {/* Add more dropdown items here */}
          </div>
        </div>
      </div>
    </nav>
  );
};
