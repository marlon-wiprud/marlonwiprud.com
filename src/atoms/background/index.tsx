import { useTheme } from "../../hooks";

export const Background: React.FC = ({ children }) => {
  const theme = useTheme();
  return (
    <div
      style={{ backgroundColor: theme.backgroundPrimary }}
      className="w-full flex flex-col items-center min-h-screen"
    >
      {children}
    </div>
  );
};
