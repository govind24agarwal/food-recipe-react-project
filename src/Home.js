import React from "react";
import SearchForm from "./SearchForm";
import Recipes from "./Recipes";

function Home() {
  return (
    <main>
      <SearchForm />
      <Recipes />
    </main>
  );
}

export default Home;
