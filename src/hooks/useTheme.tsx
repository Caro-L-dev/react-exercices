import { useContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return {
    isLight: theme === "light",
    isDark: theme === "dark",
    theme,
    toggleTheme,
  };
}

import { ReactNode, createContext, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

interface ThemeContextProviderProps {
  children: ReactNode;
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
