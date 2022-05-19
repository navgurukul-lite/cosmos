import Team from "./Pages/Team/index";
import Hackthon from "./Pages/Hackthon/index";
import About from "./Pages/About/index";
import Kitchu from "./Pages/Kitchu/index";
import Mentorship from "./Pages/Mentorship/index";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/hackthon" element={<Hackthon />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/kitchu" element={<Kitchu />} />
        <Route exact path="/mentorship" element={<Mentorship />} />
        <Route path="*" element={<Navigate to="/about" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
