import { useState, useEffect } from "react";
const API_ENDPOINT = `https://api.edamam.com/search?app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`;

const useFetch = (urlPrams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState([]);

  const fetchMovies = async (url) => {
    setIsLoading(true);
    try {
      console.log(url);
      const response = await fetch(url);
      const data = await response.json();
      if (data.count > 0 || data.length > 0) {
        setData(data.hits || data[0]);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: "No results matching your description" });
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlPrams}`);
  }, [urlPrams]);

  return { isLoading, error, data };
};

export default useFetch;
