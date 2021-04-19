import React from "react";
import { useParams } from "react-router-dom";
import usefetch from "./useFetch";
import { Link } from "react-router-dom";

function SingleRecipe() {
  const { id } = useParams();
  const { isLoading, data, error } = usefetch(`&r=${id}`);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }
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
