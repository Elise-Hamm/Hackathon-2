import { useState } from 'react';
import CardR from '../Components/CardsR.jsx';
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
          <CardR filtres={filtres} />
      </div>
    );
};

export default Activités;