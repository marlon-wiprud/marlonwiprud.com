import { useSimType, useTheme } from "../../hooks";
import { Body } from "../typography";

type Props = {
  body: string;
  onDone?: () => void;
};

export const TypedText = ({ body, onDone }: Props) => {
  const theme = useTheme();
  const str = useSimType(body, onDone);
  return (
    <Body color={theme.textCode} font="source-code-pro">
      {str}
    </Body>
  );
};
