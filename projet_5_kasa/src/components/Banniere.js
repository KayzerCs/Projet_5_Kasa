// Importation de la bibliothèque React nécessaire pour utiliser JSX et créer des composants fonctionnels
import React from "react";

// Importation du fichier de styles SCSS pour appliquer les styles spécifiques au composant Banniere
import "../styles/components/_Banniere.scss";

// Définition du composant fonctionnel Banniere qui accepte trois propriétés (props) : backgroundImage, text, et customClass
const Banniere = ({ backgroundImage, text, customClass }) => {
  // Retourne un élément JSX représentant la structure de la bannière
  return (
    <div className="body">
      {" "}
      {/* Conteneur principal pour le style global */}
      <div
        // Applique des classes CSS pour styler la bannière
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

// Exporte le composant Banniere pour qu'il puisse être importé et utilisé dans d'autres fichiers
export default Banniere;
