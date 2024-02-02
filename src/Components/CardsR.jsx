import { useEffect, useState } from 'react';
import '../styles/Card.css';
import { Link } from 'react-router-dom';

function CardR({ filtres }) {
    const [restaurants, setRestaurants] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:4747/api/restaurants')
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut : ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setRestaurants(data))
        .catch((error) =>
          console.error('Erreur lors de la récupération des activités:', error)
        );
    }, []);
  
    const restaurantsFiltrees = restaurants.filter((restaurant) => {
      return (
        (!filtres.avisMin || restaurant.avis >= parseInt(filtres.avisMin)) &&
        (!filtres.ville ||
          restaurant.ville.toLowerCase() === filtres.ville.toLowerCase())
      );
    });
  
    return (
      <div>
        <div className="wrapC">
          {restaurantsFiltrees.map((restaurant) => (
            <div key={restaurant.id} className="card-container">
              <Link
                to={{
                  pathname: `/restaurant/${restaurant.id}`,
                  state: { restaurant: restaurant },
                }}
              >
                <img
                  className="imgC"
                  src={restaurant.image}
                  alt={restaurant.nom}
                />
                <div className="descriptionC">
                  <h2 className="titleC">{restaurant.nom}</h2>
                  <div className="infosC">
                    <div className="loraC">
                      <div className="logoC">
                        <div className="logolocaC"></div>
                        <p>{restaurant.ville}</p>
                      </div>
                      <div className="logoC">
                        <div className="logorateC"></div>
                        <p>{restaurant.avis}</p>
                      </div>
                    </div>
                    <div className="logoC">
                      <div className="logoecuC"></div>
                      <p>50 à 100 écu</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
}

export default CardR;
