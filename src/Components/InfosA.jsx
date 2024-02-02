import React, { useEffect, useState } from 'react';
import "../styles/InfosA.css";

const InfosA = () => {
  const [activites, setActivites] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4747/api/activites')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP! Statut : ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setActivites(data))
      .catch((error) =>
        console.error('Erreur lors de la récupération des activités:', error)
      );
  }, []);

  return (
    <div className="containerAct">
        {activites.map(activite => (
            <article className="descriptionAct" key={activite.id}>
                <div className="fontimgAct">
                    <img className="imgAct" src={activite.imgA} alt={activite.nom} />
                </div>
                <div className="infosAct">
                    <h1>{activite.nameA}</h1>
                    <p>{activite.textA}</p>
                        <div className="logoC">
                            <div className="logolocaC"></div>
                            <p>{activite.localisationA}</p>
                        </div>
                        <div className="logoC">
                            <div className="logolocaC"></div>
                            <p>Semaine : {activite.clockSA}
                            Weekend : {activite.clockSA}</p>
                        </div>
                        <div className="logoC">
                            <div className="logorateC"></div>
                            <p>{activite.rateA}</p>
                        </div>
                         <div className="logoC">
                             <div className="logoecuC"></div>
                             <p>Enfant : {activite.moneyEA} écu
                             Adult : {activite.moneyAA} écu
                             Famille : {activite.moneyFA} écu</p>
                         </div>
                    </div>
                </article>
        ))}
    </div>
)
};

export default InfosA;
