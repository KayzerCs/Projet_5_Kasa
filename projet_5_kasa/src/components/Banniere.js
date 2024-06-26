import React from "react";
import "../styles/components/_Banniere.scss";

// Définition du composant fonctionnel Banniere qui accepte trois propriétés (props) : backgroundImage, text, et customClass
const Banniere = ({ backgroundImage, text, customClass }) => {
  return (
    <div>
      <div
        className={`banniere ${customClass}`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {text && <div className="banniere-text">{text}</div>}
      </div>
    </div>
  );
};

export default Banniere;
