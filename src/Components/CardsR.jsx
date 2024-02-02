import React, { useEffect, useState } from 'react';
import '../styles/Card.css';

function CardA({ filtres }) {
const [restaurants, setrestaurants] = useState([]);


useEffect(() => {
    fetch('http://localhost:4747/api/restaurants')
        .then((response) => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut : ${response.status}`);
        }
        return response.json();
        })
        .then((data) => setrestaurants(data))
        .catch((error) =>
        console.error('Erreur lors de la récupération des activités:', error)
    );
}, []);

const restaurantsFiltrees = restaurants.filter(restaurant => {
    return  (!filtres.avisMin || restaurant.avis >= parseInt(filtres.avisMin)) &&
            (!filtres.ville || restaurant.ville.toLowerCase() === filtres.ville.toLowerCase());
    });

    return (
    <div>
        <div className="wrapC">
        {restaurantsFiltrees.map(restaurant => (
            <button className="containerC" key={restaurant.id}>
            <div>
                <img className="imgC" src={restaurant.image} alt={restaurant.nom} />
            </div>
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
            </button>
        ))}
        </div>
    </div>
    );
}

export default CardA;



//       {/* <div className="">
//         <li key={restaurant.id}>
//           <img className="imgC"src={restaurant.image} alt={restaurant.nom} />
//           <h2 className="titleC">{restaurant.nom}</h2>
//           <p>Etablissement: {restaurant.etablissement}</p>
//           <p>Ville: {restaurant.ville}</p>
//           <p>Avis: {restaurant.avis}</p>
//           <p className="descriptionC ">{restaurant.presentation}</p>
//         </li>
//       </div> */}
//       <article className="containerC">
//         <div>
//           <img className="imgC" src={restaurant.image} alt={restaurant.nom} />
//         </div>
//         <div className="descriptionC">
//           <h1 className="titleC">{restaurant.nom}</h1>
//           <p className="descriptionC ">{restaurant.presentation}</p>
//           <div className="infosC">
//             <div className="loraC">
//               <div className="logoC">
//                 <div className="logolocaC"></div>
//                 <p>{restaurant.ville}</p>
//               </div>
//               <div className="logoC">
//                 <div className="logorateC"></div>
//                 <p>{restaurant.avis}</p>
//               </div>
//               <div className="logoC">
//                 <div className="logoecuC"></div>
//                 <p>50 à 100 écus</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </article>
//     </div>
//   );
// }

// export default CardR;
