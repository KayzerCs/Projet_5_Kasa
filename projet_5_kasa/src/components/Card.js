import React from "react";
import "../styles/components/_Card.scss";

const Card = ({ title, cover }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={cover} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <p className="card-title">{title}</p>
      </div>
    </div>
  );
};

export default Card;
