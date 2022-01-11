import { black, matrixGreen, offWhite, white } from "./colors";

export type Theme = {
  textCode: string;
  terminalBackground: string;
  backgroundPrimary: string;
  backgroundSecondary: string;
};

export const lightTheme: Theme = {
  textCode: matrixGreen,
  terminalBackground: black,
  backgroundPrimary: offWhite,
  backgroundSecondary: white,
};
