import React from "react";
import { NavLink } from "react-router";
import "../../components/header/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          {" "}
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "Active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "Active" : "")}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
