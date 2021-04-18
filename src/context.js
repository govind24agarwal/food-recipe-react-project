import React, { useState, useContext } from "react";

const API_ENDPOINT = `https://api.edamam.com/search?app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&q=sugar`;
console.log(API_ENDPOINT);
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value="hello world">{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
