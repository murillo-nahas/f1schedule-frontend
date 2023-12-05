import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Schedules } from "./Schedules/Schedules";
import { Home } from "./Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/schedules" element={<Schedules />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
