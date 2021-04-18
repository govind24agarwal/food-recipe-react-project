import React, { useState, useContext, useEffect } from "react";
import useFetch from "./useFetch";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("sugar");
  const { isLoading, data: recipes, error } = useFetch(`&q=${query}`);

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
