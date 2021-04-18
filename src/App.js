import { useGlobalContext } from "./context.js";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import SingleRecipe from "./SingleRecipe.js";

function App() {
  const val = useGlobalContext();
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/movies/:id" children={<SingleRecipe />} />
    </Switch>
  );
}

export default App;
