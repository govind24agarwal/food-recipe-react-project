import React from "react";
import { useParams } from "react-router-dom";
import usefetch from "./useFetch";

function SingleRecipe() {
  const { id } = useParams();
  const { isLoading, data, error } = usefetch(`&r=${id}`);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  console.log(data);
  const { label, image, ingredientLines } = data;
  return (
    <section className="section single-recipe">
      <div>
        <img src={image} alt={label} />
      </div>
      <div>
        <h2>{label}</h2>
        <p>{ingredientLines}</p>
      </div>
    </section>
  );
}

export default SingleRecipe;
