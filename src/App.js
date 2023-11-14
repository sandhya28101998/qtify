import "./App.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Hero-section";
//import Cardsection from "./components/Card";
import Section from "./components/Section";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const ENDPOINT = "https://qtify-backend-labs.crio.do/";
function App() {
  const [topAlbums, SetTopAlbums] = useState([]);
  const [NewAlbums, SetNewAlbums] = useState([]);

  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`).then(({ data }) => {
      SetTopAlbums(data);
    });
    axios.get(`${ENDPOINT}albums/new`).then(({ data }) => {
      SetNewAlbums(data);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Herosection />
      <Section title={"Top Albums"} data={topAlbums} />
      <Section title={"New Albums"} data={NewAlbums} />
    </div>
  );
}

export default App;
