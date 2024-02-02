import "../Styles/HomeCard.css";

const HomeCard = ({ image, titre, texte }) => {
  return (
    <div>
      <div className="cardhomecontainer">
        <img className="imgchoiceactivity" src={image} alt="" />
        <h2>{titre}</h2>
        <p className="texte-card">{texte} </p>
        <input
          className="btnchoiceactivity"
          type="submit"
          value="C'est parti"
        />
      </div>
    </div>
  );
};

export default HomeCard;
