import { useEffect, useState } from 'react';
import '../styles/Card.css';
import { Link } from 'react-router-dom';

function CardA({ filtres }) {
const [activites, setActivites] = useState([]);


useEffect(() => {
    fetch('http://localhost:4747/api/activites')
        .then((response) => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut : ${response.status}`);
        }
        return response.json();
        })
        .then((data) => setActivites(data))
        .catch((error) =>
        console.error('Erreur lors de la récupération des activités:', error)
    );
}, []);

const activitesFiltrees = activites.filter(activite => {
    return (!filtres.prixMin || activite.moneyAA >= parseInt(filtres.prixMin)) &&
            (!filtres.prixMax || activite.moneyAA <= parseInt(filtres.prixMax)) &&
            (!filtres.avisMin || activite.rateA >= parseInt(filtres.avisMin)) &&
            (!filtres.ville || activite.localisationA.toLowerCase() === filtres.ville.toLowerCase());
    });

    return (
    <div>
        <div className="wrapC">
        {activitesFiltrees.map(activite => (
            <Link to={{ pathname: `/activité/${activite.id}`, state: { activite: activite } }} key={activite.id}>
            <div>
                <img className="imgC" src={activite.imgA} alt={activite.nom} />
            </div>
            <div className="descriptionC">
                <h2 className="titleC">{activite.nameA}</h2>
                <div className="infosC">
                <div className="loraC">
                    <div className="logoC">
                    <div className="logolocaC"></div>
                    <p>{activite.localisationA}</p>
                    </div>
                    <div className="logoC">
                    <div className="logorateC"></div>
                    <p>{activite.rateA}</p>
                    </div>
                </div>
                <div className="logoC">
                    <div className="logoecuC"></div>
                    <p>{activite.moneyAA} écu</p>
                </div>
                </div>
            </div>
            </Link>
        ))}
        </div>
    </div>
    );
}

export default CardA;