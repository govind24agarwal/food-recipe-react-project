import React, { useState, useContext, useEffect } from "react";

const API_ENDPOINT = `https://api.edamam.com/search?app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&q=sugar&q=`;
console.log(API_ENDPOINT);
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("sugar");

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_ENDPOINT}${query}`);
      const data = await response.json();
      if (data.count > 0) {
        setRecipes(data.hits);
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
    fetchRecipes();
  }, []);

  return (
    <AppContext.Provider value={{ recipes, isLoading, error }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
