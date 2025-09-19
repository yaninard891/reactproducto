import { createContext, useContext, useState } from "react";


export const ThemeContext = createContext();
export const useThemeContext = () => useContext(ThemeContext);

export const STATE = {
  LIGHT: "light",
  DARK: "dark",
};
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(STATE.DARK);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

