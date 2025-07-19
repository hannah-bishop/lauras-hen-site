import { Link } from "react-router-dom";
import "./home-page.css";

export const HomePage: React.FunctionComponent = () => {
  return (
    <div className="fade-in">
      <img src={require("assets/logo.png")} className="logo" alt="logo"></img>
      <div className="itinerary-text">
        <Link to="/lauras-hen-site/itinerary" className="home-link">
          <h1>Itinerary</h1>
        </Link>
        <Link to="/lauras-hen-site/laura-bingo" className="home-link">
          <h1>Laura Bingo</h1>
        </Link>
        <Link to="/lauras-hen-site/secret-mission" className="home-link">
          <h1>TOP SECRET MISSION</h1>
        </Link>
      </div>
    </div>
  );
};
