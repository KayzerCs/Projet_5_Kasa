import React from 'react';
import '../styles/components/_Card.scss'; // Importe les styles pour la carte

const Card = ({ title }) => {
    return (
      <div className="card">
        <div className="card-content">
          <p className="card-title">{title}</p>
        </div>
      </div>
    );
  };
  
  export default Card;