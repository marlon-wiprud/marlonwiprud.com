import { black, matrixGreen, offWhite, royalBlue, white } from "./colors";

export type Theme = {
  textCode: string;
  textLink: string;
  terminalBackground: string;
  backgroundPrimary: string;
  backgroundSecondary: string;
};

export const lightTheme: Theme = {
  textCode: matrixGreen,
  textLink: royalBlue,
  terminalBackground: black,
  backgroundPrimary: offWhite,
  backgroundSecondary: white,
};
