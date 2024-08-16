export type ThemeMode = "dark" | "light";

export type ThemeContextValues = {
  currentTheme: ThemeMode;
  toggleTheme: () => void;
};
