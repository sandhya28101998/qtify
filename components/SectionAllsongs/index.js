import "./sectionAllsongs.css";
import Carousel from "../carousel";
import { Tab } from "@mui/material";
import { Tabs } from "@mui/material";
import { useState } from "react";

export default function SectionAllSongs({
  title,
  songs,
  resgener,
  excuteFilter,
}) {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="song-container">
      <h1 className="title">{title} </h1>

      <Tabs
        value={selectedTab}
        onChange={(e, value) => {
          excuteFilter(resgener[value].key);
          setSelectedTab(value);
        }}
        TabIndicatorProps={{
          style: {
            backgroundColor: "var(--css-primary)",
          },
        }}
      >
        {resgener.map((ele) => (
          <Tab className="tab" key={ele.key} label={ele.label} />
        ))}
      </Tabs>
      <Carousel data={songs} navId="filter" />
    </div>
  );
}
