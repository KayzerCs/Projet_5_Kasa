import React, { useState } from "react"; // Importe React et le hook useState pour gérer l'état local
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importe le composant FontAwesomeIcon pour afficher des icônes FontAwesome
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"; // Importe l'icône faChevronUp de la bibliothèque d'icônes FontAwesome
import "../styles/components/_Collapse.scss"; // Importe les styles pour ce composant depuis un fichier SCSS

// Définition du composant fonctionnel Collapse qui accepte les props title et children
const Collapse = ({ title, children, className }) => {
  const [isOpen, setIsOpen] = useState(false); // Initialise l'état isOpen à false, indiquant que la section est fermée par défaut

  // Fonction pour basculer l'état d'ouverture/fermeture du collapse
  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Inverse la valeur de isOpen à chaque appel, ouvrant ou fermant la section
  };

  return (
    <div className="collapse">
      {" "}
      {/* Conteneur principal pour le composant Collapse */}
      <div className={`collapse-container ${className}`}>
        {/* Conteneur pour styliser le collapse */}
        <button className="collapse-button" onClick={toggleCollapse}>
          {title} {/* Affiche le titre de la section collapse */}
          <FontAwesomeIcon
            icon={faChevronUp} // Affiche l'icône faChevronUp
            className={`collapse-icon ${isOpen ? "open" : ""}`} // Applique la classe "open" si isOpen est vrai, pour gérer la rotation
          />
        </button>
        <div className={`collapse-content ${isOpen ? "show" : ""}`}>
          {children}{" "}
          {/* Affiche le contenu passé en tant qu'enfants du composant */}
        </div>
      </div>
    </div>
  );
};

// Exporte le composant Collapse pour pouvoir l'utiliser dans d'autres parties de l'application
export default Collapse;
