import React, { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "098227181";

  return (
    <AppContext.Provider value={phone}>{props.children}</AppContext.Provider>
  );
};

export default ContextProvider;
