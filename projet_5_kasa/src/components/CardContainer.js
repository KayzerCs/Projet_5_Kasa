import React from "react";
import Card from "./Card"; // Importe le composant Card
import "../styles/components/_CardContainer.scss"; // Importe les styles pour le conteneur

const CardContainer = () => {
    const cardsData = [
      { title: 'Titre de la location 1' },
      { title: 'Titre de la location 2' },
      { title: 'Titre de la location 3' },
      { title: 'Titre de la location 4' },
      { title: 'Titre de la location 5' },
      { title: 'Titre de la location 6' },
      { title: 'Titre de la location 7' },
      { title: 'Titre de la location 8' },
      { title: 'Titre de la location 9' },
      { title: 'Titre de la location 10' },
      { title: 'Titre de la location 11' },
      { title: 'Titre de la location 12' },
      { title: 'Titre de la location 13' },
      { title: 'Titre de la location 14' },
      { title: 'Titre de la location 15' },
      { title: 'Titre de la location 16' },
      { title: 'Titre de la location 17' },
      { title: 'Titre de la location 18' },
      { title: 'Titre de la location 19' },
      { title: 'Titre de la location 20' },
    ];
  
    return (
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} />
        ))}
      </div>
    );
  };
  
  export default CardContainer;