//import { Link } from 'react-router-dom';
import { useState } from 'react';
import CardL from '../Components/CardsL';
import Filtres from '../Components/Filtre';
import '../styles/Filtre.css';
import "../styles/Logements.css";

const Logements = () => {
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
      <div className="containerL">
         <aside>
            <div className="asideL">
               <Filtres onFiltreChange={handleFiltreChange} />
            </div>
         </aside>
         <div>
            <CardL filtres={filtres} />
         </div>
      </div>
   );
};

export default Logements;
 //<Link to="/logement">