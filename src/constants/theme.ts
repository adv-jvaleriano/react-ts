import { CSSProperties } from "react";
import { ThemeMode } from "../types/theme";

export const INITIAL_THEME_MODE: ThemeMode = "light";

export const DARK_THEME: CSSProperties = {
  backgroundColor: "#000000",
  color: "#fafafa",
  borderColor: "red",
};

export const LIGHT_THEME: CSSProperties = {
  backgroundColor: "#ffffff",
  color: "#000000",
  borderColor: "#000000",
};
