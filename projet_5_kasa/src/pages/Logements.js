import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; // Importer l'icône d'étoile
import NavLogo from "../components/NavLogo";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse"; // Importer le composant Collapse

const Logement = () => {
  const { id } = useParams(); // Récupère l'ID du logement depuis l'URL
  const [logement, setLogement] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLogementDetails = async () => {
      try {
        const response = await fetch("/logement.json");
        const data = await response.json();
        const logementDetails = data.find((logement) => logement.id === id);

        if (!logementDetails) {
          throw new Error("Logement non trouvé");
        }

        setLogement(logementDetails);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching logement details:", error);
      }
    };

    fetchLogementDetails();
  }, [id]); // Dépend de l'ID pour récupérer les détails à chaque fois que l'ID change

  if (error) {
    return <div>Erreur: {error}</div>;
  }

  if (!logement) {
    return <div>Chargement des détails du logement...</div>;
  }

  // Divise le nom en deux parties : prénom et nom de famille
  const [firstName, lastName] = logement.host.name.split(" ");

  return (
    <div className="page_logements">
      <NavLogo />
      <div className="body">
        <div className="container-logements">
          <div className="container-img">
            <img src={logement.cover} alt={logement.title} />
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
              <Collapse title="Description" className="collapse-logements">
                <p>{logement.description}</p>
              </Collapse>
              <Collapse title="Équipements" className="collapse-logements">
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
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Logement;
