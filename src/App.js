import Team from "./Pages/Team/index";
import Hackthon from "./Pages/Hackthon/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/team" component={Team} />
        <Route path="/hackthon" component={Hackthon} />
        <Redirect to="/team"/>
      </Switch>
    </Router>
  );
}

export default App;
