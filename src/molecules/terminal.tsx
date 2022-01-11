import React, { useEffect, useState } from "react";
import { TypedText } from "../atoms/typedText";
import { useTheme } from "../hooks";

type Props = {
  style?: React.CSSProperties;
  history: string[];
};

export const Terminal = ({ style, history }: Props) => {
  const theme = useTheme();
  const [lines, setLines] = useState<React.ReactElement[]>([]);
  const [lineCount, setLineCount] = useState(0);

  const renderLine = () => {
    setLines([
      ...lines,
      <TypedText
        body={history[lineCount]}
        onDone={() => setLineCount(lineCount + 1)}
      />,
    ]);
  };

  useEffect(() => {
    renderLine();
  }, [lineCount]);

  return (
    <div
      className="p-4 rounded-lg shadow-lg"
      style={{ backgroundColor: theme.terminalBackground, ...style }}
    >
      {lines}
    </div>
  );
};
