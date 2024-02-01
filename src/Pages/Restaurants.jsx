import { useState, useEffect } from 'react';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('http://localhost:4747/api/restaurants');
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <h2>{restaurant.nom}</h2>
            <p>Etablissement: {restaurant.etablissement}</p>
            <p>Ville: {restaurant.ville}</p>
            <p>Avis: {restaurant.avis}</p>
            <img src={restaurant.image} alt={restaurant.nom} />
            <p>{restaurant.presentation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;
