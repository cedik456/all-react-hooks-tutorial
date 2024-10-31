import React, { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "098227181";
  const name = "Cedric";

  return (
    <AppContext.Provider value={{ phone, name }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
