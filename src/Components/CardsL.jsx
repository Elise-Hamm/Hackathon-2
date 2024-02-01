import "../styles/Card.css";
import { useEffect, useState } from 'react';

const CardL = () => {
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

 return (
    <div className="wrapC">
        {maisons.map(maison => (
            <article className="containerC" key={maison.id}>
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
        ))}
    </div>
)
  }
  
export default CardL;