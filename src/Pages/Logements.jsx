import { Link } from 'react-router-dom';
import CardL from '../Components/CardsL';

const Logements = () => {

   return (
      <div>
         <Link to="/logement">
            <CardL />
         </Link>
      </div>
   );
};

export default Logements;
