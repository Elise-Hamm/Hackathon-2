import "../styles/Card.css";

function CardR() {
    return (
        <div>
            <article className="containerC">
                <div className="imgC">
                </div>
                <div className="descriptionC">
                    <h1 className="titleC">La casa blabla</h1>
                    <div className="infosC">
                        <div className="loraC">
                            <div className="logoC">
                                <div className="logolocaC"></div>
                                <p>blabla</p>
                            </div>
                            <div className="logoC">
                                <div className="logorateC"></div>
                                <p>2.7/5</p>
                            </div>
                        </div>
                        <div className="logoC">
                            <div className="logoecuC"></div>
                            <p>500 ecu</p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
  }
  
export default CardR;