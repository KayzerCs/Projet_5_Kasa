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
import Data from "../assets/data_bank/data.json"; // Importation des données JSON contenant les informations des logements.

const Logement = () => {
  // Récupère l'identifiant du logement depuis l'URL.
  const { id } = useParams();
  const navigate = useNavigate();

  // Initialisation des states pour stocker les détails du logement, les erreurs éventuelles, et l'index de l'image courante.
  const [logement, setLogement] = useState(null);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect pour charger les détails du logement à partir des données JSON lorsque l'ID change.
  useEffect(() => {
    const loadLogementDetails = () => {
      try {
        // Cherche les détails du logement correspondant à l'ID.
        const logementDetails = Data.find((logement) => logement.id === id);

        if (!logementDetails) {
          // Redirige vers une page de non trouvée si le logement n'existe pas.
          navigate("/notfound");
        } else {
          // Met à jour le state avec les détails du logement trouvé.
          setLogement(logementDetails);
        }
      } catch (error) {
        // Gère les erreurs éventuelles lors de la récupération des détails.
        setError("Erreur lors de la récupération des détails du logement.");
        console.error("Error loading logement details:", error);
      }
    };

    loadLogementDetails();
  }, [id, navigate]); // Assure que chaque fois que l'ID du logement change, les détails du logement sont rechargés, et si quelque chose ne va pas, l'utilisateur est redirigé ou un message d'erreur est affiché.

  // Affiche un message d'erreur si une erreur est survenue.
  if (error) {
    return <div>Erreur: {error}</div>;
  }

  // Affiche un message de chargement pendant la récupération des détails.
  if (!logement) {
    return <div>Chargement des détails du logement...</div>;
  }

  // Sépare le nom de l'hôte en prénom et nom.
  const [firstName, lastName] = logement.host.name.split(" ");

  // Fonction pour passer à l'image précédente.
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    );
  };

  // Fonction pour passer à l'image suivante.
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Variable pour déterminer si la navigation doit être affichée (seulement si plus d'une image).
  const renderNavigation = logement.pictures.length > 1;

  return (
    <div className="page_logements">
      <div className="body">
        <NavLogo />

        <div className="container-logements">
          <div className="container-img">
            {/* Affiche le bouton pour l'image précédente si plus d'une image */}
            {renderNavigation && (
              <button className="nav-arrow left-arrow" onClick={prevImage}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            )}
            {/* Affiche l'image actuelle en fonction de l'index courant */}
            <img
              src={logement.pictures[currentImageIndex]}
              alt={logement.title}
            />
            {/* Affiche le bouton pour l'image suivante si plus d'une image */}
            {renderNavigation && (
              <button className="nav-arrow right-arrow" onClick={nextImage}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            )}
            {/* Affiche un compteur d'images pour indiquer la position actuelle */}
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
                  {/* Affiche les tags associés au logement */}
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
                  {/* Affiche les étoiles de notation en fonction du rating */}
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
                {/* Affiche la description du logement dans un composant Collapse */}
                <Collapse title="Description" className="collapse-description">
                  <p>{logement.description}</p>
                </Collapse>
              </div>
              <div className="container-collapse">
                {/* Affiche les équipements du logement dans un composant Collapse */}
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
