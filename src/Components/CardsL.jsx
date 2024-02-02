import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Card.css";

const CardL = ({ filtres }) => {
  const [maisons, setMaisons] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4747/api/maisons')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP! Statut : ${response.status}`);
        }
        return response.json();
      })
      .then(data => setMaisons(data))
      .catch(error => console.error('Erreur lors de la récupération des maisons:', error));
  }, []);

  // Filtrer les maisons en fonction des critères
  const maisonsFiltrees = maisons.filter(maison => {
    return (!filtres.prixMin || maison.prix >= parseInt(filtres.prixMin)) &&
           (!filtres.prixMax || maison.prix <= parseInt(filtres.prixMax)) &&
           (!filtres.avisMin || maison.avis >= parseInt(filtres.avisMin)) &&
           (!filtres.ville || maison.ville.toLowerCase() === filtres.ville.toLowerCase());
  });

  return (
    <div className="wrapC">
      {maisonsFiltrees.map(maison => (
        <Link to={{ pathname: `/logement/${maison.id}`, state: { maison: maison } }} key={maison.id}>
          {console.log('Maison:', maison)}
          <article className="containerC">
            <div>
              <img className="imgC" src={maison.image} alt={maison.nom} />
            </div>
            <div className="descriptionC">
              <h1 className="titleC">{maison.nom}</h1>
              <div className="infosC">
                <div className="loraC">
                  <div className="logoC">
                    <div className="logolocaC"></div>
                    <p>{maison.ville}</p>
                  </div>
                  <div className="logoC">
                    <div className="logorateC"></div>
                    <p>{maison.avis}</p>
                  </div>
                </div>
                <div className="logoC">
                  <div className="logoecuC"></div>
                  <p>{maison.prix} écu</p>
                </div>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default CardL;
