import { useEffect, useState } from "react";
import "./laura-bingo.css";

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
      </div>
    );
  }
};
