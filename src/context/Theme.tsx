import { createContext } from "react";

export const ThemeContext = createContext<{ dark: boolean; toggleTheme: () => void }>({
  dark: true,
  toggleTheme: () => {},
});

