import Button from "../Button";
import SearchBox from "../SearchBox";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div class="navbar">
      <img src="logo.png" alt="logo" width={67} height={37} />
      <SearchBox />
      <Button>Give Feedback</Button>
    </div>
  );
}
