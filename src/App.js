import "./App.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Hero-section";
import Section from "./components/Section";
import SectionAllSongs from "./components/SectionAllsongs";
import Accordions from "./components/Accordion";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const ENDPOINT = "https://qtify-backend-labs.crio.do/";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [generData, setGenerData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const playList = async () => {
      try {
        const restop = await axios.get(`${ENDPOINT}albums/top`);
        if (restop.status === 200) {
          setTopAlbums(restop.data);
        }
      } catch (error) {
        console.log(error);
      }

      try {
        const resnew = await axios.get(`${ENDPOINT}albums/new`);
        if (resnew.status === 200) {
          setNewAlbums(resnew.data);
        }
      } catch (error) {
        console.log(error);
      }

      try {
        const ressong = await axios.get(`${ENDPOINT}songs`);
        if (ressong.status === 200) {
          setAllSongs(ressong.data);
          setFilterData(ressong.data);
        }
      } catch (error) {
        console.log(error);
      }

      try {
        const resgener = await axios.get(`${ENDPOINT}genres`);
        if (resgener.status === 200) {
          setGenerData([{ key: "all", label: "All" }, ...resgener.data.data]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    playList();
  }, []);

  return (
    <div>
      <Navbar />
      <Herosection />
      <Section navId="ta" title={"Top Albums"} data={topAlbums} />
      <Section navId="na" title={"New Albums"} data={newAlbums} />
      <SectionAllSongs
        title={"Songs"}
        songs={filterData}
        resgener={generData}
        excuteFilter={(genre) => {
          if (genre === "all") {
            setFilterData(allSongs);
          } else {
            setFilterData(allSongs.filter((song) => genre === song.genre.key));
          }
        }}
      />
      <Accordions title={"FAQs"} />
    </div>
  );
}

export default App;
