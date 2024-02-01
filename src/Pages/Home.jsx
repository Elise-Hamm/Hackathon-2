import mousquetaire from "../assets/mousquetaire.png";
import "../Styles/Home.css";
import taverne from "../assets/taverne.jpg";
import HomeCard from "../Components/HomeCard";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="homecontainer">
        <div>
          <img className="img-mousquetaire" src={mousquetaire} alt="" />
        </div>
        <div>
          <p className="text-intro-home">
            Bienvenu sur nostre site où vous pourrez découvrir une sélection
            exquise d'auberges, de tables raffinées et de divertissements
            authentiques.
            <br />
            Plongez dans une expérience unique alliant gastronomie, logis et
            divertissements.{" "}
          </p>
          <div className="cards">
            <Link to="/restaurants">
              <HomeCard
                image={taverne}
                titre={"Restaurants"}
                texte={
                  "Trouvez les meilleurs adresses pour festoyer autour d'un bon repas"
                }
              />
            </Link>

            <Link to="/logements">
              <HomeCard
                image={taverne}
                titre={"Logements"}
                texte={
                  "Venez prendre prendre quelque soulas dans un de nos logements"
                }
              />
            </Link>
            <Link to="/activités">
              <HomeCard
                image={taverne}
                titre={"Activités"}
                texte={
                  "Venez vous égayer en participant à des activités récréatif"
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
