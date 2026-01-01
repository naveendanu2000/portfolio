import { useState, type ReactNode } from "react";
import { ThemeContext } from "./Theme";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    console.log(dark);
    setDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <div className={`${dark ? "text-white" : "text-black"}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
