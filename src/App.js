import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import About from "./pages/About"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/about" exact={true} component={About}/>
      </Switch>
    </Router>
  );
}

export default App;
