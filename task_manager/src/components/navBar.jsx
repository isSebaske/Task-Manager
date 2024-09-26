import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link className="navbar-brand ms-3" to="/">
        Task Manager
      </Link>
      <div>
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/register">
            Register
          </NavLink>
          <NavLink className="nav-item nav-link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-item nav-link" to="/admin">
            Admin
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
