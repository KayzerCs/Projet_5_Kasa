import React from "react";
import { Link } from "react-router-dom";
import NavLogo from "../components/NavLogo";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div>
      <div className="body">
        <div className="page_notfound">
          <NavLogo />
          <div className="container_p">
            <p className="number">404</p>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link className="link" to="/">
              Retourner sur la page d'acceuil
            </Link>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;
