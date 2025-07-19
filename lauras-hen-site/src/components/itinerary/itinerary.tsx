import "./itinerary.css";

export const Itinerary: React.FunctionComponent = () => {
  return (
    <div className="fade-in">
      <img src={require("assets/logo.png")} className="logo" alt="logo"></img>
      <div className="itinerary-text">
        <h2 className="underline">Friday</h2>
        <p className="list-item">3pm: Check-in</p>
        <p className="list-item">5pm: Welcome drinks</p>
        <p className="list-item">7pm: Slumber Party & Games</p>
        <h2 className="underline">Saturday</h2>
        <p className="list-item">11am: Prosecco Brunch</p>
        <p className="list-item">1pm: Scavenger Hunt</p>
        <p className="list-item">2.30pm: Wine Tasting</p>
        <p className="list-item">4pm: Early Dinner</p>
        <p className="list-item">6pm: Carraige into town</p>
        <p className="list-item">
          6.30pm: Drinks and Hooch pong at{" "}
          <a href="https://www.cheapdatesbar.co.uk/" className="link">
            Cheap Dates
          </a>
        </p>
        <p className="list-item">9pm: Karaoke</p>
        <p className="list-item">11pm: Boogie at the club</p>
      </div>
    </div>
  );
};
