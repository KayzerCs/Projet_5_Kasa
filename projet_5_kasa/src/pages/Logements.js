import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import NavLogo from "../components/NavLogo";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";

const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchLogementDetails = async () => {
      try {
        const response = await fetch("/logement.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const logementDetails = data.find((logement) => logement.id === id);

        if (!logementDetails) {
          navigate("/notfound");
        } else {
          setLogement(logementDetails);
        }
      } catch (error) {
        setError(error.message);
        console.error("Error fetching logement details:", error);
      }
    };

    fetchLogementDetails();
  }, [id, navigate]);

  if (error) {
    return <div>Erreur: {error}</div>;
  }

  if (!logement) {
    return <div>Chargement des détails du logement...</div>;
  }

  const [firstName, lastName] = logement.host.name.split(" ");

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderNavigation = logement.pictures.length > 1;

  return (
    <div className="page_logements">
      <div className="body">
        <NavLogo />

        <div className="container-logements">
          <div className="container-img">
            {renderNavigation && (
              <button className="nav-arrow left-arrow" onClick={prevImage}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            )}
            <img
              src={logement.pictures[currentImageIndex]}
              alt={logement.title}
            />
            {renderNavigation && (
              <button className="nav-arrow right-arrow" onClick={nextImage}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            )}
            {renderNavigation && (
              <div className="image-counter">
                {currentImageIndex + 1}/{logement.pictures.length}
              </div>
            )}
          </div>

          <div className="infos">
            <div className="section_1">
              <div className="part-1">
                <h1>{logement.title}</h1>
                <p>{logement.location}</p>
                <div className="tags">
                  {logement.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="part-2">
                <div className="host">
                  <div className="host-name">
                    <span className="first-name">{firstName}</span>
                    <span className="last-name">{lastName}</span>
                  </div>
                  <img
                    src={logement.host.picture}
                    alt={logement.host.name}
                    className="host-picture"
                  />
                </div>

                <div className="rating">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className={
                        index < logement.rating ? "star filled" : "star"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="part-3">
              <div className="container-collapse">
                <Collapse title="Description" className="collapse-description">
                  <p>{logement.description}</p>
                </Collapse>
              </div>
              <div className="container-collapse">
                <Collapse title="Équipements" className="collapse-equipement">
                  <ul>
                    {logement.equipments.map((equipment, index) => (
                      <li key={index}>{equipment}</li>
                    ))}
                  </ul>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Logement;
