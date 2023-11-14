import Cardsection from "../Card";
import "./section.css";

export default function section({ title, data }) {
  return (
    <div className="section">
      <h1 className="title">{title} </h1>
      <div className="card-section">
        {data.map((card) => (
          <Cardsection
            key={card.id}
            imgSrc={card.image}
            followers={card.follows}
            label={card.title}
          />
        ))}
      </div>
    </div>
  );
}
