import { createContext } from "react";
import { lightTheme, Theme } from "../styles/theme";

export type ThemeContext = {
  theme: Theme;
  setTheme: (t: Theme) => void;
};

export const ThemeCtx = createContext<ThemeContext>({
  theme: lightTheme,
  setTheme: () => null,
});
