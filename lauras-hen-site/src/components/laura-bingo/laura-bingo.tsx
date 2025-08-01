import { useEffect, useState } from "react";
import "./laura-bingo.css";
import { useNavigate } from "react-router-dom";

type NameEntry = {
  codeName: string;
  realName: string;
  target: string;
  location: string;
  object: string;
};

export const LauraBingo: React.FunctionComponent = () => {
  const [codeWord, setCodeWord] = useState("");
  const [names, setNames] = useState<Record<string, NameEntry> | null>(null);
  const [showLauraBingo, setShowLauraBingo] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    fetch("/lauras-hen-site/names.json") // Assuming it's in the public folder
      .then((res) => res.json())
      .then((data) => setNames(data))
      .catch((err) => console.error("Failed to load JSON", err));
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCodeWord(event.target.value);
  };

  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/home-page");
  };

  const handleClick = () => {
    if (!names) {
      console.error("Names data is not loaded yet.");
      return;
    }
    const allowedNames = Object.keys(names);
    if (allowedNames.includes(codeWord) && codeWord !== "BridalBuckaroo") {
      setShowLauraBingo(true);
    } else {
      console.error("Invalid code word:", codeWord);
      setShowLauraBingo(false);
      setShowError(true);
    }
  };

  if (!showLauraBingo) {
    return (
      <div className="fade-in">
        <img
          src={require("assets/logo.png")}
          className="logo"
          alt="logo"
          onClick={handleImageClick}
        ></img>
        <input type="text" value={codeWord} onChange={handleChange} />
        <button onClick={handleClick} className="button">
          ENTER
        </button>
        {showError && (
          <p>Sorry... this agent does not have access to this information</p>
        )}
      </div>
    );
  } else {
    return (
      <div className="fade-in">
        <img
          src={require("assets/logo.png")}
          className="logo"
          alt="logo"
          onClick={handleImageClick}
        ></img>
        <div className="itinerary-text fade-in">
          <h2 className="underline">Laura Bingo</h2>
          <p className="list-item">- Spills something</p>
          <p className="list-item">- Blows her nose multiple times</p>
          <p className="list-item">- Says how much she loves Jamie</p>
          <p className="list-item">- Mentions how short she is</p>
          <p className="list-item">- Mentions how stressful teaching is</p>
          <p className="list-item">- Does a slut drop</p>
          <p className="list-item">- Says 'OMG Jamie does that'</p>
          <p className="list-item">
            - Starts eating out of the fridge when drunk
          </p>
          <p className="list-item">- Laughs at a shit joke</p>
        </div>
      </div>
    );
  }
};
