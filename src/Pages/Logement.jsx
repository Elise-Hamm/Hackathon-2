import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/Information.css';

const Logement = () => {
  const [maison, setMaison] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4747/api/maisons/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP! Statut : ${response.status}`);
        }
        return response.json();
      })
      .then(data => setMaison(data))
      .catch(error => console.error('Erreur lors de la récupération de la maison:', error));
  }, [id]);

  if (!maison) {
    return <p>Erreur: Les informations de la maison ne sont pas disponibles.</p>;
  }

  return (
    <div>
      <div className="containerI">
        <div className="fontimgI">
          <div className="imgI">
            <img className="imgeI" src={maison.image} alt={maison.nom} />
          </div>
        </div>
        <div className="infosI">
          <div className="titleI">
            <h1>{maison.nom}</h1>
            <p>{maison.description}</p>
          </div>
          <div className="logoI">
            <div className="firstI">
              <div className="locaI">
                <div className="logolocaI"></div>
                <p>{maison.ville}</p>
              </div>
              <div className="clockI">
              <div className="logoclockI"></div>
                <p> - </p>
              </div>
            </div>
            <div className="secondI">              
              <div className="rateI">
              <div className="logorateI"></div>
                <p>{maison.avis}</p>
              </div>
              <div className="moneyI">
                <div className="logoecuI"></div>
                <p>{maison.prix} écu</p>
              </div>
              </div>
            </div>
          </div>
          </div>
      </div>
  );
};

export default Logement;
