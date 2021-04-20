import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import SingleRecipe from "./SingleRecipe.js";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/recipes/:id" children={<SingleRecipe />} />
      </Switch>
    </>
  );
}

export default App;
