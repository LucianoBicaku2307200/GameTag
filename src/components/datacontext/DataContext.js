import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <DataContext.Provider
      value={{
        toggleMenu: [toggleMenu, setToggleMenu],
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
