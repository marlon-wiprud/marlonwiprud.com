import { useTheme } from "../../hooks";

export const Background: React.FC = ({ children }) => {
  const theme = useTheme();
  return (
    <div
      style={{ backgroundColor: theme.backgroundPrimary }}
      className="h-full w-full flex flex-col items-center"
    >
      {children}
    </div>
  );
};
