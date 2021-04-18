import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

function Recipes() {
  const { isLoading, recipes } = useGlobalContext();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="recipes">
      {recipes.map((item) => {
        const { label, image, dishType, uri } = item.recipe;
        return (
          <Link key={uri} to={`/recipes/${uri}`}>
            <article className="recipe">
              <img src={image} alt={label} />
              <div className="recipe-info">
                <h4>{label}</h4>
                <p>{dishType}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
}

export default Recipes;
