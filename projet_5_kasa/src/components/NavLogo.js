import React from "react";
import Logo from "../assets/img/Logo.png";
import { NavLink } from "react-router-dom";

const NavLogo = () => {
  return (
    <div className="navigation">
      <img src={Logo} alt="logo" />
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Acceuil</li>
        </NavLink>

        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavLogo;
