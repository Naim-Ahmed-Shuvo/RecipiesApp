import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Default from "./pages/Default";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        {/* NavBar */}
         <Nav/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes" exact component={Recipes} />
          <Route path="/recipes/:name" exact component={SingleRecipe}/>
          <Route component={Default} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
