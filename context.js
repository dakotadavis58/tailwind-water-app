import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

import React from "react";
const AppContext = createContext();
const AppDispatchContext = createContext();

function AppContextProvider({ children }) {
  const [state, setState] = useState({
    username: "John Doe",
    waterLevel: 0,
    ounces: "24oz",
    isDarkTheme: "false",
    themeBgColor: "purple",
    themeTextColor: "slate",
  });

  return (
    <AppContext.Provider value={state}>
      <AppDispatchContext.Provider value={setState}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}

export { AppContext, AppDispatchContext, AppContextProvider };
