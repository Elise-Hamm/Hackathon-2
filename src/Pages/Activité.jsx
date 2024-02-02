import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Activite = () => {
  const [activite, setActivite] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4747/api/activites/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP! Statut : ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setActivite(data))
      .catch((error) =>
        console.error('Erreur lors de la récupération des activités:', error)
      );
  }, [id]);

  if (!activite) {
    return <p>Erreur: Les informations du restaurant ne sont pas disponibles.</p>;
  }

  return (
    <div className="activite-container">
      <div className="photo-container">
        {activite.imgA && <img src={activite.imgA} alt={activite.nameA} />}
      </div>
      <div className="info-container">
        <h1>{activite.nameA || 'Nom non disponible'}</h1>
        <p>Ville: {activite.localisationA || 'Non disponible'}</p>
        <p>Avis: {activite.rateA || 'Non disponible'}</p>
        <p>Prix: {activite.moneyAA || 'Non disponible'}</p>
      </div>
    </div>
  );
};

export default Activite;
