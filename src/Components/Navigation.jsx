import "../styles/Navigation.css";
import logo from "../assets/logo Le Mousquetaire futé.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav className="navContainer">
        <Link to="/">
          <img src={logo} alt="logo" className="logoNavbar" />
        </Link>
        <ul className="ulNavbar">
          <Link to="/restaurants">
            <li> I Restaurants</li>
          </Link>
          <Link to="/logements">
            <li>I Logements</li>
          </Link>
          <Link to="/activités">
            <li>I Activités</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
