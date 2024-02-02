import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Activite = () => {
  const [activite, setActivite] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4747/api/activites/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP! Statut : ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setActivite(data))
      .catch((error) =>
        console.error('Erreur lors de la récupération des activités:', error)
      );
  }, [id]);

  if (!activite) {
    return <p>Erreur: Les informations du restaurant ne sont pas disponibles.</p>;
  }

  return (
    <div>
      <div className="containerI">
        <div className="fontimgI">
          <div className="imgI">
            <img className="imgeI" src={activite.imgA} alt={activite.nameA} />
          </div>
        </div>
        <div className="infosI">
          <div className="titleI">
            <h1>{activite.nameA}</h1>
            <p>{activite.textA}</p>
          </div>
          <div className="logoI">
            <div className="firstI">
              <div className="locaI">
                <div className="logolocaI"></div>
                <p>{activite.localisationA}</p>
              </div>
              <div className="clockI">
              <div className="logoclockI"></div>
                <div className="rowI">
                  <p>Horaire :</p>
                  <p>Semaine : {activite.clockSA}</p>
                  <p>Weekend :{activite.clockWA}</p>
                </div>  
              </div>
            </div>
            <div className="secondI">              
              <div className="rateI">
              <div className="logorateI"></div>
                <p>{activite.rateA}</p>
              </div>
              <div className="moneyI">
                <div className="logoecuI"></div>
                <div className="rowI">
                  <p>Enfant : {activite.moneyEE} écu</p>
                  <p>Adult : {activite.moneyAE} écu</p>
                  <p>Famille : {activite.moneyFE} écu</p>
                </div>
              </div>
              </div>
            </div>
          </div>
          </div>
      </div>
  );
};

export default Activite;
