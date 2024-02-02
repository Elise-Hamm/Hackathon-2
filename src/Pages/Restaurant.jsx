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
    <div className="restaurant-container">
      <div className="photo-container">
        {restaurant.image && <img src={restaurant.image} alt={restaurant.nom} />}
      </div>
      <div className="info-container">
        <h1>{restaurant.nom || 'Nom non disponible'}</h1>
        <p>Ville: {restaurant.ville || 'Non disponible'}</p>
        <p>Avis: {restaurant.avis || 'Non disponible'}</p>
      </div>
    </div>
  );
};

export default Restaurant;

