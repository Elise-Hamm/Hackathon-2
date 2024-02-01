import { Link } from "react-router-dom";
import "../styles/Footer.css";
import Github from "../assets/Github.png";
import Linkedin from "../assets/Linkedin.png"

function Footer() {
  return (
    <footer>
      <div className="left-content">
        <p>Les 3 Mousquetaires ©</p>
      </div>
      <div className="right-content">
        <Link to="/git">
          <img src={Github} alt="Github" />
        </Link>
        <Link to="/linkedin">
          <img src={Linkedin} alt="Linkedin" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;