import "./welcome-page.css";
import { Link } from "react-router-dom";

export const WelcomePage: React.FunctionComponent = () => {
  return (
    <div className="header">
        <Link to="/home">
            <img src={require("public/welcome-logo.png")} className="logo" alt="logo"></img>
        </Link>
    </div>
  );
};
