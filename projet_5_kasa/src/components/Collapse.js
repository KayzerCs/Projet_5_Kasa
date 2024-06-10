// Importation des bibliothèques et des composants nécessaires
import React from "react"; // Importe la bibliothèque React pour créer des composants
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importe le composant FontAwesomeIcon pour utiliser des icônes Font Awesome
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons"; // Importe les icônes faChevronUp et faChevronDown de Font Awesome
import "../styles/components/_Collapse.scss"; // Importe le fichier de styles SCSS pour le composant Collapse

// Définition du composant fonctionnel Collapse qui accepte les props title, children, isOpen et onToggle
const Collapse = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="body">
      {" "}
      {/* Conteneur principal du composant */}
      <div className="collapse-container">
        {" "}
        {/* Conteneur du collapse pour gérer les styles et la disposition */}
        <button className="collapse-button" onClick={onToggle}>
          {" "}
          {/* Bouton pour ouvrir/fermer le collapse */}
          {title} {/* Affiche le titre de la section collapse */}
          <FontAwesomeIcon
            icon={isOpen ? faChevronDown : faChevronUp} // Choisit l'icône en fonction de l'état isOpen
            className={`collapse-icon ${isOpen ? "open" : ""}`} // Ajoute la classe CSS "open" si isOpen est vrai
          />
        </button>
        <div className={`collapse-content ${isOpen ? "show" : ""}`}>
          {" "}
          {/* Conteneur pour le contenu repliable */}
          {children} {/* Affiche le contenu passé en tant qu'enfants */}
        </div>
      </div>
    </div>
  );
};

export default Collapse; // Exporte le composant Collapse pour une utilisation dans d'autres parties de l'application
