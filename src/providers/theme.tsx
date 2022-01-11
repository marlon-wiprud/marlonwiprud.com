import { useState } from "react";
import { ThemeCtx } from "../context";
import { lightTheme } from "../styles/theme";

export const ProviderTheme: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeCtx.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeCtx.Provider>
  );
};
