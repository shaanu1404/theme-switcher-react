import { createContext, useContext, useEffect, useState } from "react";

export type Theme =
  | "lighty"
  | "pinky"
  | "greeny"
  | "bluey"
  | "indigoy"
  | "purpley"
  | "darky";
type ThemeName = `theme-${Theme}`;
type ThemeContextType = {
  theme: ThemeName;
  toggleTheme: (theme: ThemeName) => void;
};
type ThemeProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

function getThemeFromLocalStorage(): ThemeName {
  return (localStorage.getItem("theme") as ThemeName) || "theme-lighty";
}

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeName>(() =>
    getThemeFromLocalStorage()
  );

  const toggleTheme = (theme: ThemeName) => {
    setTheme(theme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const value = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
