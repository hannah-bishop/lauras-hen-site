import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { WelcomePage } from "./components/welcome-page/welcome-page.tsx";
import { Itinerary } from 'components/itinerary/itinerary';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/lauras-hen-site/" element={<WelcomePage />} />
          <Route path="/lauras-hen-site/itinerary" element={<Itinerary />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
