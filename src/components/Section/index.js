import Cardsection from "../Card";
import { useState } from "react";
import Carousel from "../carousel";
import "./section.css";

export default function Section({ title, data, navId }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="section">
      <div className="section-title">
        <h1 className="title">{title} </h1>
        <h1
          className="section-toggle"
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          {isCollapsed ? "Show All" : "Collapse"}
        </h1>
      </div>

      {isCollapsed ? (
        <Carousel data={data} navId={navId} />
      ) : (
        <div className="card-section">
          {data.map((card) => (
            <Cardsection
              key={card.id}
              imgSrc={card.image}
              likes={card.likes}
              followers={card.follows}
              label={card.title}
              songslength={card.songs.length}
            />
          ))}
        </div>
      )}
    </div>
  );
}
