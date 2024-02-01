import "../styles/Card.css";
import { useEffect, useState } from 'react';

function CardA() {
    const [activites, setActivites] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4747/api/activites')
       .then(response => {
          if (!response.ok) {
             throw new Error(`Erreur HTTP! Statut : ${response.status}`);
          }
          return response.json();
       })
       .then(data => setActivites(data))
       .catch(error => console.error('Erreur lors de la récupération des activite:', error));
 }, []);

    return (
        <div>
            {activites.map(activite => (
                <article className="containerC" key={activite.id}>
                    <div>
                    <img className="imgC" src={activite.imgA} alt={activite.nom} />
                    </div>
                    <div className="descriptionC">
                        <h1 className="titleC">{activite.nameA}</h1>
                        <div className="infosC">
                            <div className="loraC">
                                <div className="logoC">
                                    <div className="logolocaC"></div>
                                    <p>{activite.localisationA}</p>
                                </div>
                                <div className="logoC">
                                    <div className="logorateC"></div>
                                    <p>{activite.rateA}</p>
                                </div>
                            </div>
                            <div className="logoC">
                                <div className="logoecuC"></div>
                                <p>{activite.moneyAA} écu</p>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    )
  }
  
export default CardA;