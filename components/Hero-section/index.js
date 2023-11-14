import "./hero-section.css";

export default function Herosection() {
  return (
    <div className="hs-main">
      <div className="hs-text-img">
        <div>
          <h1>100 Thousand Songs, add-free</h1>
          <h1>Over thousand podcast episodes</h1>
        </div>
        <div className="hs-img">
          <img
            src="vibrating-headphone.png"
            alt="Music logo"
            className="hss-img"
          />
        </div>
      </div>
    </div>
  );
}
