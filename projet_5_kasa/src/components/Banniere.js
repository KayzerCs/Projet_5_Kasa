// Importation de la bibliothèque React nécessaire pour utiliser JSX et créer des composants fonctionnels
import React from "react";

import "../styles/components/_Banniere.scss";

// Définition du composant fonctionnel Banniere qui accepte trois propriétés (props) : backgroundImage, text, et customClass
const Banniere = ({ backgroundImage, text, customClass }) => {
  // Retourne un élément JSX représentant la structure de la bannière
  return (
    <div>
      <div
        // Combine la classe CSS "banniere" avec une classe personnalisée passée en prop pour des styles spécifiques
        className={`banniere ${customClass}`}
        // Applique une image de fond à la bannière en utilisant la valeur de la prop backgroundImage
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Vérifie si la prop text est définie et non vide */}
        {/* Si text est défini, crée une div pour afficher le texte avec une classe CSS pour le style */}
        {text && <div className="banniere-text">{text}</div>}
      </div>
    </div>
  );
};

export default Banniere;
