import "./welcome-page.css";
import { Link } from "react-router-dom";

export const WelcomePage: React.FunctionComponent = () => {
  return (
    <div>
        <Link to="/lauras-hen-site/itinerary">
            <img src={require("assets/welcome-logo.png")} className="logo-home" alt="logo"></img>
        </Link>
    </div>
  );
};
