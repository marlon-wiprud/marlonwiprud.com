import { useContext, useEffect, useRef, useState } from "react";
import { ThemeCtx } from "../context";
import { Theme } from "../styles/theme";

export const useSimType = (str: string = "", onDone?: () => void) => {
  const [idx, setIdx] = useState(0);
  const _idx = useRef(0);
  const interval = useRef<null | NodeJS.Timer>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done && interval.current) {
      clearInterval(interval.current);
      onDone && onDone();
    }
  }, [done, onDone]);

  useEffect(() => {
    if (!done) {
      interval.current = setInterval(() => {
        if (str[_idx.current]) {
          _idx.current += 1;
          setIdx(_idx.current);
        } else {
          setDone(true);
        }
      }, 120);
    }
  }, [str, done]);

  return str.slice(0, idx);
};

export const useTheme = (): Theme => {
  const { theme } = useContext(ThemeCtx);
  return theme;
};
