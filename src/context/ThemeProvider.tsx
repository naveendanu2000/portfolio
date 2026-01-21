import { useState, useEffect, type ReactNode } from "react";
import { ThemeContext } from "./Theme";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const listener = (e: MediaQueryListEvent) => {
      setDark(e.matches);
    };

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  // const [dark, setDark] = useState<boolean>(true);

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
