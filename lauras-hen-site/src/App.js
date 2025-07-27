import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { WelcomePage } from "./components/welcome-page/welcome-page.tsx";
import { Itinerary } from "./components/itinerary/itinerary.tsx";
import { SecretMission } from "./components/secret-mission/secret-mission.tsx";
import { HomePage } from "./components/home-page/home-page.tsx";
import { LauraBingo } from "./components/laura-bingo/laura-bingo.tsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<WelcomePage />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/secret-mission" element={<SecretMission />} />
          <Route path="/laura-bingo" element={<LauraBingo />} />
          <Route path="*" element={<WelcomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
