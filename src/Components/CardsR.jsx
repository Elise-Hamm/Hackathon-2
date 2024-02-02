import { useState } from "react";
import "../styles/Card.css";

function CardR({ restaurant }) {
  return (
    <div>
      <article className="containerC">
        <div>
          <img className="imgC" src={restaurant.image} alt={restaurant.nom} />
        </div>
        <div className="descriptionC">
          <h1 className="titleC">{restaurant.nom}</h1>
          <p className="descriptionC ">{restaurant.presentation}</p>
          <div className="infosC">
            <div className="loraC">
              <div className="logoC">
                <div className="logolocaC"></div>
                <p>{restaurant.ville}</p>
              </div>
              <div className="logoC">
                <div className="logorateC"></div>
                <p>{restaurant.avis}</p>
              </div>
              <div className="logoC">
                <div className="logoecuC"></div>
                <p>50 à 100 écus</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default CardR;
