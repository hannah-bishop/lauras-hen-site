import { useNavigate } from "react-router-dom";
import "./itinerary.css";

export const Itinerary: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/home-page");
  };

  return (
    <div className="fade-in">
      <img
        src={require("assets/logo.png")}
        className="logo"
        alt="logo"
        onClick={handleImageClick}
      ></img>
      <div className="itinerary-text">
        <h2 className="underline">Friday</h2>
        <p className="list-item">3pm: Check-in</p>
        <p className="list-item">5pm: Welcome drinks</p>
        <p className="list-item">6pm: Captain's Welcome</p>
        <p className="list-item">7pm: Slumber Party & Games</p>
        <h2 className="underline">Saturday</h2>
        <p className="list-item">11am: Prosecco Brunch</p>
        <p className="list-item">12.30pm: Sports Day</p>
        <p className="list-item">2pm: Wine Tasting</p>
        <p className="list-item">4pm: Early Dinner</p>
        <p className="list-item">6pm: Carraige into town</p>
        <p className="list-item">
          6.30pm: Drinks and Hooch pong at{" "}
          <a
            href="https://www.welcometosheffield.co.uk/content/food-drink-and-nightlife/cheap-dates/"
            className="link"
          >
            Cheap Dates
          </a>
        </p>
        <p className="list-item">
          9pm: Karaoke{" "}
          <a href="https://www.karaoke-sheffield.co.uk/" className="link">
            K Max
          </a>
        </p>
        <p className="list-item">
          11pm: Boogie at the club (if still standing)
        </p>
        <h2 className="underline">Sunday</h2>
        <p className="list-item">10am: Check-out</p>
        <p className="list-item">
          10.30am: Brunch at{" "}
          <a
            href="https://www.canva.com/design/DAE8Sz9Q1sc/Rn7d9-Td0lKaQbsET1xhHA/view?website#4:drinks"
            className="link"
          >
            Kollective Kitchen
          </a>
        </p>
        <p className="list-item">12pm: Home time :(</p>
      </div>
    </div>
  );
};
