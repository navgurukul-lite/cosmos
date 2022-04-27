import Team from "./Pages/Team/index";
import Hackthon from "./Pages/Hackthon/index";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Hackthon/>} />
        <Route exact path="/team" element={<Team/>} />
        <Route exact path="/hackthon" element={<Hackthon/>} />
        <Route exact path="/about" element={<Team/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
