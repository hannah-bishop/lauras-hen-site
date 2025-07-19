import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
          <Route path="/lauras-hen-site/" element={<WelcomePage />} />
          <Route path="/lauras-hen-site/home-page/" element={<HomePage />} />
          <Route path="/lauras-hen-site/itinerary" element={<Itinerary />} />
          <Route
            path="/lauras-hen-site/secret-mission"
            element={<SecretMission />}
          />
          <Route path="/lauras-hen-site/laura-bingo" element={<LauraBingo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
