import { Link } from 'react-router-dom';
import CardA from '../Components/CardsA.jsx';
import "../styles/Activités.css";

const Activités = () => {
   return (
      <div className="containerAc">
         <aside>
            <div className="asideAc"></div>
         </aside>
         <Link to="/activités/:id" className="buttonAc">
            <CardA />
         </Link>
      </div>
   );
};

export default Activités;
