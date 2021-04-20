import { Switch, Route } from "react-router-dom";
import Home from "./Home";
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
        <Route path="/recipes/:id" children={<SingleRecipe />} />
      </Switch>
    </>
  );
}

export default App;
