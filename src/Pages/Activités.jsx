import { useEffect, useState } from 'react';

const Activités = () => {
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
      <div className="App">
         <h1>Galerie</h1>
         <div id="activite-list">
            {activites.map(activite => (
               <div key={activite.id}>
                  <strong>{activite.nameA}</strong>
                  <p>Prix: {activite.moneyEA}</p>
                  <p>Ville: {activite.localisationA}</p>
                  <p>Description: {activite.textA}</p>
                  <p>Avis: {activite.rateA}</p>
                  <p>Horaire: {activite.clockSA}</p>
                  <img src={activite.imgA} alt={activite.nom} />
               </div>
            ))}
         </div>
      </div>
   );
};

export default Activités;
