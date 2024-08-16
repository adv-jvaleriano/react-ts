import { Context, createContext, FC, ReactNode, useState } from "react";
import { ThemeContextValues, ThemeMode } from '../types/theme';
import { OnlyChildrenOptionalProps } from "../types/props";
import { DARK_THEME, INITIAL_THEME_MODE, LIGHT_THEME } from "../constants/theme";

export const ThemeContext: Context< ThemeContextValues > = createContext< ThemeContextValues >({
  currentTheme: INITIAL_THEME_MODE,
  toggleTheme: () => {},
});
ThemeContext.displayName = 'Theme Context';

const ThemeProvider: FC< OnlyChildrenOptionalProps > = ({ children }: OnlyChildrenOptionalProps): ReactNode => {
  
  const [ currentTheme, setCurrentTheme ] = useState<ThemeMode>(INITIAL_THEME_MODE);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme == "dark" ? "light" : "dark")
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }} >
      <main style={currentTheme == "dark" ? DARK_THEME : LIGHT_THEME}>
        {children}
      </main>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;
