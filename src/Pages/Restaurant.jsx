import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Restaurant = () => {
  const [restaurant, setRestaurant] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4747/api/restaurants/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP! Statut : ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setRestaurant(data))
      .catch((error) =>
        console.error('Erreur lors de la récupération des activités:', error)
      );
  }, [id]);

  if (!restaurant) {
    return <p>Erreur: Les informations du restaurant ne sont pas disponibles.</p>;
  }

  return (
    <div>
      <div className="containerI">
        <div className="fontimgI">
          <div className="imgI">
            <img className="imgeI" src={restaurant.image} alt={restaurant.nom} />
          </div>
        </div>
        <div className="infosI">
          <div className="titleI">
            <h1>{restaurant.nom}</h1>
          </div>
          <div className="logoI">
            <div className="firstI">
              <div className="locaI">
                <div className="logolocaI"></div>
                <p>{restaurant.ville}</p>
              </div>
              <div className="clockI">
              <div className="logoclockI"></div>
                <p> - </p>
              </div>
            </div>
            <div className="secondI">              
              <div className="rateI">
              <div className="logorateI"></div>
                <p>{restaurant.avis}</p>
              </div>
              <div className="moneyI">
                <div className="logoecuI"></div>
                <p>50 - 100 écu</p>
              </div>
              </div>
            </div>
          </div>
          </div>
      </div>
  );
};

export default Restaurant;

