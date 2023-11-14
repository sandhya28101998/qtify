import "./card.css";

export default function Cardsection({ imgSrc, followers, label }) {
  return (
    <div className="card-data">
      <div className="card">
        <div className="card-img-frame">
          <img src={imgSrc} alt="cardimage" className="card-img" />
        </div>
        <div className="card-content">
          <span className="card-content-pill">{followers} Followers</span>
        </div>
      </div>
      <p className="card-label">{label}</p>
    </div>
  );
}
