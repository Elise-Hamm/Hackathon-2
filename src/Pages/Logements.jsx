import { useEffect, useState } from 'react';

const Logements = () => {
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
      <div className="App">
         <h1>Galerie</h1>
         <div id="maisons-list">
            {maisons.map(maison => (
               <div key={maison.id}>
                  <strong>{maison.nom}</strong>
                  <p>Prix: {maison.prix}</p>
                  <p>Chambres: {maison.chambres}</p>
                  <p>Salles de bain: {maison.salles_de_bain}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Logements;
