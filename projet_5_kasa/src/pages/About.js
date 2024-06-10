// Importation des bibliothèques et des composants nécessaires
import React, { useState } from "react"; // Importe React et le hook useState pour gérer l'état local
import NavLogo from "../components/NavLogo"; // Importe le composant de navigation avec logo
import Footer from "../components/Footer"; // Importe le composant de pied de page
import Banniere from "../components/Banniere"; // Importe le composant de bannière
import Collapse from "../components/Collapse"; // Importe le composant de collapse pour afficher des sections repliables

// Définition du composant fonctionnel About
const About = () => {
  // Déclare une variable d'état openIndex avec une valeur initiale de null pour suivre quel collapse est ouvert
  const [openIndex, setOpenIndex] = useState(null);

  // Déclare une fonction pour gérer l'ouverture/fermeture des collapses
  const handleToggle = (index) => {
    // Si le collapse cliqué est déjà ouvert, on le ferme en mettant openIndex à null
    // Sinon, on met openIndex à l'index du collapse cliqué pour l'ouvrir
    setOpenIndex(openIndex === index ? null : index);
  };

  // Retourne le JSX pour le composant About
  return (
    <div>
      {/* Inclut le logo de navigation en haut de la page */}
      <NavLogo />

      <div>
        {/* Inclut une bannière sous le logo de navigation */}
        <Banniere />

        {/* Section de collapse pour "Fiabilité" */}
        <Collapse
          title="Fiabilité" // Titre affiché pour la section
          isOpen={openIndex === 0} // Contrôle si cette section est ouverte (index 0)
          onToggle={() => handleToggle(0)} // Fonction pour ouvrir/fermer cette section
        >
          <p>
            {/* Contenu détaillé pour la section "Fiabilité" */}
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>

        {/* Section de collapse pour "Respect" */}
        <Collapse
          title="Respect" // Titre affiché pour la section
          isOpen={openIndex === 1} // Contrôle si cette section est ouverte (index 1)
          onToggle={() => handleToggle(1)} // Fonction pour ouvrir/fermer cette section
        >
          <p>
            {/* Contenu détaillé pour la section "Respect" */}
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>

        {/* Section de collapse pour "Service" */}
        <Collapse
          title="Service" // Titre affiché pour la section
          isOpen={openIndex === 2} // Contrôle si cette section est ouverte (index 2)
          onToggle={() => handleToggle(2)} // Fonction pour ouvrir/fermer cette section
        >
          <p>
            {/* Contenu détaillé pour la section "Service" */}
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </Collapse>

        {/* Section de collapse pour "Sécurité" */}
        <Collapse
          title="Sécurité" // Titre affiché pour la section
          isOpen={openIndex === 3} // Contrôle si cette section est ouverte (index 3)
          onToggle={() => handleToggle(3)} // Fonction pour ouvrir/fermer cette section
        >
          <p>
            {/* Contenu détaillé pour la section "Sécurité" */}
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapse>
      </div>

      {/* Inclut le pied de page en bas de la page */}
      <Footer />
    </div>
  );
};

export default About; // Exporte le composant About pour l'utiliser dans d'autres parties de l'application
