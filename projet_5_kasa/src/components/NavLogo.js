import React from "react";
import Logo from "../assets/img/Logo.png";
import { NavLink } from "react-router-dom";
import "../styles/components/_NavLogo.scss";

const NavLogo = () => {
  return (
    <div>
      <div className="navigation">
        <NavLink to="/" className="logo-link">
          <img src={Logo} alt="logo" />
        </NavLink>
        <ul>
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            <li>Accueil</li>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default NavLogo;
