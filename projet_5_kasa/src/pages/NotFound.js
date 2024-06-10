import React from "react";
import { Link } from "react-router-dom";
import NavLogo from "../components/NavLogo";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div>
      <NavLogo />
      <div className="container_p">
        <p className="number">404</p>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link className="link" to="/">Retourner sur la page d'acceuil</Link>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
