import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Activite = () => {
  const [activite, setActivite] = useState(null); // Initialise avec null au lieu de []

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4747/api/activite/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP! Statut : ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setActivite(data))
      .catch((error) => console.error('Erreur lors de la récupération de la maison:', error));
  }, [id]);

  if (activite === null) { // Utilise strictement l'égalité (===) ici
    return <p>Erreur: Les informations de la activite ne sont pas disponibles.</p>;
  }

  return (
    <div>
      <h1>Informations détaillées de l activité</h1>
      <div key={activite.id}>
        <p>Nom: {activite.nameA || 'Non disponible'}</p>
        <p>Ville: {activite.locationA || 'Non disponible'}</p>
        <p>Avis: {activite.rateA || 'Non disponible'}</p>
        <p>Prix: {activite.moneyAA ? `${activite.moneyAA} écu` : 'Non disponible'}</p>
        {activite.imgA && <img src={activite.imgA} alt={activite.nom} style={{ maxWidth: '100%' }} />}
      </div>
    </div>
  );
};

export default Activite;
