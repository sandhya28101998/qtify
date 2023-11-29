import { useState } from "react";
import "./card.css";

export default function Cardsection({ imgSrc, followers, label, likes }) {
  const [like, setlikes] = useState(likes);
  return (
    <div className="card-data">
      <div className="card">
        <div className="card-img-frame">
          <img src={imgSrc} alt="cardimage" className="card-img" />
        </div>
        <div
          className="card-content"
          onChange={() => {
            setlikes(like);
          }}
        >
          {!like ? (
            <span className="card-content-pill">{followers} followers</span>
          ) : (
            <span className="card-content-pill">{likes} likes</span>
          )}
        </div>
      </div>
      <p className="card-label">{label}</p>
    </div>
  );
}
