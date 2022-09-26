import border from "./defaultTheme/border";
import breakpoints from "./defaultTheme/breakpoints";
import colors from "./defaultTheme/colors";
import effects from "./defaultTheme/effects";
import extras from "./defaultTheme/extras";
import filters from "./defaultTheme/filters";
import flexbox from "./defaultTheme/flexbox";
import opacity from "./defaultTheme/opacity";
import rootColors from "./defaultTheme/rootColors";
import sizing from "./defaultTheme/sizing";
import spacing from "./defaultTheme/spacing";
import traits from "./defaultTheme/traits";
import transform from "./defaultTheme/transform";
import transition from "./defaultTheme/transition";
import typography from "./defaultTheme/typography";
import { Theme } from "./Theme";

export const defaultTheme: Theme = {
  direction: "ltr",

  darkMode: "light",
  darkModeFallback: "light",

  // Colors that will be added to :root {} in CSS
  // Since those are CSS vars, the prefix "--" will be added for each var
  // But you can just reference them in the code as "--myvar" on any color prop,
  // "myvar" being the name of the color var
  rootColors: rootColors,
  colors,
  darkModeOverride: {
    rootColors
  },
  breakpoints,
  border,
  effects,
  flexbox,
  filters,
  opacity,
  sizing,
  spacing,
  transform,
  transition,
  typography,
  traits,
  extras
};
