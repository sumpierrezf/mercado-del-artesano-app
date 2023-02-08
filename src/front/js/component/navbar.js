import React from "react";
import { Link } from "react-router-dom";
import logo3 from "../../img/logo3.png";

export const Navbar = () => {
  return (
    <nav className="encabezado navbar-light ">
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img className="logo" src={logo3} width="200" height="80" />
          </span>
        </Link>
      </div>
    </nav>
  );
};
