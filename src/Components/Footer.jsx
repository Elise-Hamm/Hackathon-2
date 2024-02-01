import { Link } from "react-router-dom";
import "./Footer.css";
import Github from "./Github.png";
import Linkedin from "./Linkedin.png"

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