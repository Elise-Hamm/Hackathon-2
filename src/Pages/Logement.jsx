import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Logement = () => {
  const [maison, setMaison] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4747/api/maisons/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP! Statut : ${response.status}`);
        }
        return response.json();
      })
      .then(data => setMaison(data))
      .catch(error => console.error('Erreur lors de la récupération de la maison:', error));
  }, [id]);

  if (!maison) {
    return <p>Erreur: Les informations de la maison ne sont pas disponibles.</p>;
  }

  return (
    <div>
      <h1>Informations détaillées du logement</h1>
      <div key={maison.id}>
        <p>Nom: {maison.nom || 'Non disponible'}</p>
        <p>Ville: {maison.ville || 'Non disponible'}</p>
        <p>Avis: {maison.avis || 'Non disponible'}</p>
        <p>Prix: {maison.prix ? `${maison.prix} écu` : 'Non disponible'}</p>
        {maison.image && <img src={maison.image} alt={maison.nom} style={{ maxWidth: '100%' }} />}
      </div>
    </div>
  );
};

export default Logement;

