import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

import React from "react";
const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [state, setState] = useState({
    isDarkTheme: "false",
    themeColor: "bg-purple",
  });

  const setTheme = (theme) => {
    switch (theme) {
      case "purple":
        setState({ themeColor: "bg-purple" });
        break;
      case "red":
        setState({ themeColor: "bg-red" });
        break;
      case "blue":
        setState({ themeColor: "bg-blue" });
        break;
      case "green":
        setState({ themeColor: "bg-green" });
        break;

      default:
        break;
    }
  };

  return (
    <ThemeContext.Provider value={{ state, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
