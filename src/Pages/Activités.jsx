import { Link } from 'react-router-dom';
import { useState } from 'react';
import CardA from '../Components/CardsA.jsx';
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
         <Link to="/activités/:id" className="buttonAc">
            <CardA filtres={filtres} />
         </Link>
      </div>
   );
};

export default Activités;
