import "./welcome-page.css";
import { Link } from "react-router-dom";

export const WelcomePage: React.FunctionComponent = () => {
  return (
    <div>
      <Link to="/home-page">
        <img
          src={require("assets/welcome-logo.png")}
          className="logo-home"
          alt="logo"
        ></img>
      </Link>
    </div>
  );
};
