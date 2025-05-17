import "./welcome-page.css";
import { Link } from "react-router-dom";

export const WelcomePage: React.FunctionComponent = () => {
  return (
    <div className="header">
        <h1 className="welcome">Welcome</h1>
        <Link to="/home">
            <img src="clicktoenter.JPG" className="logo"></img>
        </Link>
    </div>
  );
};
