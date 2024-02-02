import { useState } from 'react';
import '../styles/Filtre.css';

const Filtres = ({ onFiltreChange }) => {
  const [filtres, setFiltres] = useState({
    prixMin: '',
    prixMax: '',
    avisMin: '',
    ville: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltres({ ...filtres, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFiltreChange(filtres);
  };

  return (
    <div className="filterContainer">
      <form onSubmit={handleSubmit}>
        <div className="filterItem">
          <div className="filterTitle">Filtres</div>
        </div>
        <div className="filterItem">
          <label className="filterLabel">Prix minimum:</label>
          <input
            type="number"
            name="prixMin"
            value={filtres.prixMin}
            onChange={handleChange}
            className="filterInput"
          />
        </div>
        <div className="filterItem">
          <label className="filterLabel">Prix maximum:</label>
          <input
            type="number"
            name="prixMax"
            value={filtres.prixMax}
            onChange={handleChange}
            className="filterInput"
          />
        </div>
        <div className="filterItem">
          <label className="filterLabel">Avis minimum:</label>
          <input
            type="number"
            name="avisMin"
            value={filtres.avisMin}
            onChange={handleChange}
            className="filterInput"
          />
        </div>
        <div className="filterItem">
          <label className="filterLabel">Ville:</label>
          <input
            type="text"
            name="ville"
            value={filtres.ville}
            onChange={handleChange}
            className="filterInput"
          />
        </div>
        <div className="filterItem">
          <button type="submit" className="filterButton">
            Appliquer les filtres
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filtres;
