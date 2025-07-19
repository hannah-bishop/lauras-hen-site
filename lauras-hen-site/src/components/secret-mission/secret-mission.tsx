import { useEffect, useState } from "react";
import "./secret-mission.css";

type NameEntry = {
  codeName: string;
  realName: string;
  target: string;
  location: string;
  object: string;
};

export const SecretMission: React.FunctionComponent = () => {
  const [codeWord, setCodeWord] = useState("");
  const [names, setNames] = useState<Record<string, NameEntry> | null>(null);
  const [showLaura, setShowLaura] = useState(false);
  const [codeName, setCodeName] = useState("");
  const [target, setTarget] = useState("");
  const [location, setLocation] = useState("");
  const [object, setObject] = useState("");
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

  const setStrings = (data: Record<string, NameEntry>) => {
    console.log(codeWord);
    console.log("here");
    setCodeName(data?.[codeWord]?.codeName);
    setLocation(data?.[codeWord]?.location);
    setObject(data?.[codeWord]?.object);
    setTarget(data?.[codeWord]?.target);
  };

  const handleClick = () => {
    if (!names) {
      console.error("Names data is not loaded yet.");
      return;
    }
    const allowedNames = Object.keys(names);
    if (allowedNames.includes(codeWord)) {
      setStrings(names);
      setShowLaura(true);
      setShowError(false);
    } else {
      console.error("Invalid code word:", codeWord);
      setShowLaura(false);
      setShowError(true);
    }
  };

  if (!showLaura) {
    return (
      <div className="fade-in">
        <img src={require("assets/logo.png")} className="logo" alt="logo"></img>
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
        <img src={require("assets/logo.png")} className="logo" alt="logo"></img>
        <div className="mission-box fade-in">
          <h1>Hello '{codeName}', Your Secret Mission Is Below:</h1>
          <p>Target: {target}</p>
          <p>Location: {location}</p>
          <p>Object: {object}</p>
        </div>
      </div>
    );
  }
};
