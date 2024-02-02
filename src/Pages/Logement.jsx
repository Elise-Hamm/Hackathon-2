import { useLocation } from 'react-router-dom';

const Logement = () => {
  const location = useLocation();
  const maison = location.state && location.state.maison;

  if (!maison) {
    return <p>Erreur: Les informations de la maison ne sont pas disponibles.</p>;
  }

  return (
    <div>
      <h1>Informations détaillées du logement</h1>
      <p>Nom: {maison.nom}</p>
      <p>Ville: {maison.ville}</p>
      <p>Avis: {maison.avis}</p>
      <p>Prix: {maison.prix} écu</p>
    </div>
  );
};

export default Logement;
