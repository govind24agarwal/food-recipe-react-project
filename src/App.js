import { useGlobalContext } from "./context.js";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import SingleRecipe from "./SingleRecipe.js";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/recipes/:id" children={<SingleRecipe />} />
    </Switch>
  );
}

export default App;
