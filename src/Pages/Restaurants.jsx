import { useState, useEffect } from "react";
import CardR from "../Components/CardsR";
import "../styles/Restaurants.css";
import '../styles/Filtre.css';
const Restaurants = () => {

 
  
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("http://localhost:4747/api/restaurants");
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

 

  return (
    <div>
      <h1>Restaurants</h1>

      <ul className="restaurants">
        {restaurants.map((restaurant, index) => (
          <CardR key={index} restaurant={restaurant} />
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;
