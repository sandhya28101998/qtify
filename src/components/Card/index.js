import "./card.css";

export default function Cardsection() {
  return (
    <div className="card-data">
      <div className="card">
        <div className="card-img-frame">
          <img src="Rectangle 2138.png" alt="cardimage" className="card-img" />
        </div>
        <div className="card-content">
          <span className="card-content-pill">100 Followers</span>
        </div>
      </div>
      <p className="card-label">New Bollywood</p>
    </div>
  );
}
