import { Link } from 'react-router-dom';
import { useState } from 'react';
import CardR from '../Components/CardsR.jsx';
import Filtres from '../Components/Filtre.jsx';
import '../styles/Filtre.css';
import "../styles/Activités.css";

const Activités = () => {
  const [filtres, setFiltres] = useState({
      prixMin: '',
      prixMax: '',
      avisMin: '',
      ville: '',
  });

  const handleFiltreChange = (nouveauxFiltres) => {
      setFiltres(nouveauxFiltres);
  };
  return (
      <div className="containerAc">
          <aside>
            <div className="asideL">
                <Filtres onFiltreChange={handleFiltreChange} />
            </div>
          </aside>
          <CardR filtres={filtres} />
      </div>
    );
};

export default Activités;

// import { useState, useEffect } from "react";
// import CardR from "../Components/CardsR";
// import "../styles/Restaurants.css";

// const Restaurants = () => {
//   const [restaurants, setRestaurants] = useState([]);

//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//         const response = await fetch("http://localhost:4747/api/restaurants");
//         const data = await response.json();
//         setRestaurants(data);
//       } catch (error) {
//         console.error("Error fetching restaurants:", error);
//       }
//     };

//     fetchRestaurants();
//   }, []);

//   return (
//     <div>
//       <h1>Restaurants</h1>


//       <ul className="restaurants">
//         {restaurants.map((restaurant, index) => (
//           <CardR key={index} restaurant={restaurant} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Restaurants;
