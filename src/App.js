import Team from "./Pages/Team/index";
import Hackthon from "./Pages/Hackthon/index";
import About from "./Pages/About/index";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/hackthon" element={<Hackthon />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/about" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
