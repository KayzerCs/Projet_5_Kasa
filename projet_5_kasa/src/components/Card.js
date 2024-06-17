import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/_Card.scss";

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/logement/${id}`} className="card-link">
      {" "}
      {/* ID passé dans l'URL */}
      <div className="card">
        <div className="card-image-container">
          <img src={cover} alt={title} className="card-image" />
        </div>
        <div className="card-content">
          <p className="card-title">{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
