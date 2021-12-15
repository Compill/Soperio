import { ColorThemes, KeyValueObject, RootColors, StringKeyValueObject } from "./ThemeTypes";



export interface Theme
{
  // Colors
  darkMode: "light" | "dark" | "system",
  rootColors: RootColors,
  colors: StringKeyValueObject,
  colorThemes: ColorThemes,
  darkModeOverride?: {
    colorThemes?: ColorThemes;
    rootColors?: RootColors;
  };

  // Global styles
  breakpoints: StringKeyValueObject,
  border: {
    radius: StringKeyValueObject,
    width: StringKeyValueObject;
  },
  effects: { boxShadow: StringKeyValueObject; },
  flexbox: {
    flex: StringKeyValueObject,
    gridAutoColumns: StringKeyValueObject,
    gridAutoRows: StringKeyValueObject,
    gridColumn: StringKeyValueObject,
    gridRow: StringKeyValueObject,
    gridTemplateColumns: StringKeyValueObject,
    gridTemplateRows: StringKeyValueObject,
    order: StringKeyValueObject,
  },
  interactivity: { outline: KeyValueObject<string[]>; },
  opacity: KeyValueObject<number>,
  sizing: {
    height: StringKeyValueObject,
    minHeight: StringKeyValueObject,
    maxHeight: StringKeyValueObject,
    width: StringKeyValueObject,
    minWidth: StringKeyValueObject,
    maxWidth: StringKeyValueObject,
  },
  spacing: {
    positive: StringKeyValueObject,
    positiveNegative: StringKeyValueObject;
  };
  transform: {
    scale: StringKeyValueObject,
    rotate: StringKeyValueObject,
    translate: StringKeyValueObject,
    skew: StringKeyValueObject,
  },
  transition: {
    ease: StringKeyValueObject,
    duration: StringKeyValueObject,
    delay: StringKeyValueObject,
    animation: StringKeyValueObject,
    // keyframes: StringKeyValueObject,
    transitionProperty: StringKeyValueObject,
  },
  typography: {
    fontSize: KeyValueObject<string[]>,
    letterSpacing: StringKeyValueObject,
    lineHeight: StringKeyValueObject,
  };
};
