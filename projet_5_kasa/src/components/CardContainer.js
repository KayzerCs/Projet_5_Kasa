import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/components/_CardContainer.scss";
import Data from "../assets/data_bank/data.json"; // Importation directe des données JSON

const CardContainer = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = () => {
      try {
        setData(Data); // Utilisation directe des données importées
      } catch (error) {
        setError("Erreur lors du chargement des données.");
        console.error("Error loading data:", error);
      }
    };

    loadData();
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
