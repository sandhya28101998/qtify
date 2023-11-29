import { useState } from "react";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import "./card.css";

export default function Cardsection({
  imgSrc,
  followers,
  label,
  likes,
  songslength,
}) {
  const [like, setlikes] = useState(likes);
  const [tooltips, setToolTips] = useState(songslength);
  return (
    <div className="card-data">
      <div
        onChange={() => {
          setToolTips(tooltips);
        }}
      >
        {tooltips ? (
          <Grid container justifyContent="center">
            <Grid item>
              <Tooltip
                disableFocusListener
                title={songslength + " Songs"}
                placement="top"
                arrow
              >
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
                      <span className="card-content-pill">
                        {followers} followers
                      </span>
                    ) : (
                      <span className="card-content-pill">{likes} likes</span>
                    )}
                  </div>
                </div>
                <p className="card-label">{label}</p>
              </Tooltip>
            </Grid>
          </Grid>
        ) : (
          <div>
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
                  <span className="card-content-pill">
                    {followers} followers
                  </span>
                ) : (
                  <span className="card-content-pill">{likes} likes</span>
                )}
              </div>
            </div>
            <p className="card-label">{label}</p>
          </div>
        )}
      </div>
    </div>
  );
}
