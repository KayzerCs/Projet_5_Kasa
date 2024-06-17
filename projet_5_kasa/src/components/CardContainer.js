import React, { useEffect, useState } from "react";
// Importe React ainsi que les hooks useEffect et useState depuis la bibliothèque React.
// useEffect est utilisé pour effectuer des effets secondaires dans les composants fonctionnels.
// useState est utilisé pour gérer l'état local des composants fonctionnels.

import Card from "./Card";
// Importe le composant Card depuis le fichier 'Card.js' situé dans le même dossier.

import "../styles/components/_CardContainer.scss";
// Importe les styles pour le composant CardContainer depuis un fichier SCSS spécifique.

const CardContainer = () => {
  // Définit un composant fonctionnel nommé CardContainer.

  const [data, setData] = useState([]);
  // Initialise l'état local 'data' avec un tableau vide.
  // 'data' contiendra les données des logements.
  // setData est une fonction utilisée pour mettre à jour l'état 'data'.

  const [error, setError] = useState(null);
  // Initialise l'état local 'error' avec la valeur null.
  // 'error' contiendra un message d'erreur en cas de problème lors de la récupération des données.
  // setError est une fonction utilisée pour mettre à jour l'état 'error'.

  useEffect(() => {
    // Utilise le hook useEffect pour effectuer des opérations secondaires.
    // Le code à l'intérieur de useEffect s'exécute après chaque rendu du composant.
    // Ici, l'effet doit s'exécuter une seule fois, lors du montage initial du composant, à cause du tableau de dépendances vide [].

    const fetchData = async () => {
      // Déclare une fonction asynchrone nommée fetchData.
      try {
        // Bloc try pour capturer les erreurs potentielles lors de la récupération des données.
        const response = await fetch("/logement.json");
        // Utilise la fonction fetch pour envoyer une requête HTTP GET à l'URL spécifiée (ici, '/logement.json').
        // La fonction fetch retourne une promesse qui est résolue avec la réponse HTTP.

        if (!response.ok) {
          // Vérifie si la réponse HTTP est OK (statut entre 200 et 299).
          // Si ce n'est pas le cas, une erreur est lancée.
          throw new Error(`HTTP error! Status: ${response.status}`);
          // Lève une erreur avec un message indiquant le statut de la réponse HTTP.
        }

        const data = await response.json();
        // Utilise la méthode json() de la réponse pour convertir le corps de la réponse en JSON.
        // La méthode json() retourne une promesse qui est résolue avec les données JSON.

        setData(data);
        // Met à jour l'état 'data' avec les données récupérées.
      } catch (error) {
        // Bloc catch pour gérer les erreurs levées dans le bloc try.
        setError(error.message);
        // Met à jour l'état 'error' avec le message de l'erreur.
        console.error("Error fetching data:", error);
        // Affiche un message d'erreur dans la console pour aider au débogage.
      }
    };

    fetchData();
    // Appelle la fonction fetchData pour récupérer les données.
  }, []);
  // Le tableau de dépendances vide [] indique que cet effet ne doit s'exécuter qu'une seule fois, lors du montage du composant.

  return (
    // Retourne le JSX à rendre pour ce composant.
    <div className="card-container">
      {error ? (
        // Vérifie s'il y a une erreur. Si c'est le cas, le bloc JSX suivant est rendu.
        <div className="error-message"></div>
      ) : (
        // Sinon, si aucune erreur n'est présente, le bloc JSX suivant est rendu.
        data.map((logement) => (
          // Utilise la méthode map pour parcourir chaque élément du tableau 'data'.
          // Pour chaque élément 'logement', un composant Card est rendu.

          <Card
            // Rendu du composant Card pour chaque logement.

            key={logement.id}
            // Utilise 'logement.id' comme clé unique pour chaque carte, ce qui aide React à optimiser le rendu.

            title={logement.title}
            // Passe le titre du logement comme propriété 'title' au composant Card.

            cover={logement.pictures[0]}
            // Passe la première image du tableau 'pictures' du logement comme propriété 'cover' au composant Card.
          />
          // Ferme le composant Card.
        ))
        // Ferme la fonction de rappel de la méthode map.
      )}
    </div>
    // Ferme la div avec la classe 'card-container'.
  );
  // Ferme l'instruction return.
};
// Ferme la déclaration du composant CardContainer.

export default CardContainer;
// Exporte le composant CardContainer pour pouvoir l'importer et l'utiliser dans d'autres fichiers.
