import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/components/_CardContainer.scss";

const CardContainer = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/logement.json"); // Chemin relatif vers le fichier JSON

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card-container">
      {error ? (
        <div className="error-message">
          Erreur de récupération des données: {error}
        </div>
      ) : (
        data.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id} // Passe l'ID du logement à la carte
            title={logement.title}
            cover={logement.pictures[0]}
          />
        ))
      )}
    </div>
  );
};

export default CardContainer;
