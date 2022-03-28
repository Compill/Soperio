import { ColorTheme } from "./ColorTheme";
import ThemeBreakpoints from "./Core/Breakpoints";
import { ColorThemes, Direction, GlobalStyles, KeyValueObject, RootColors, StringKeyValueObject } from "./ThemeTypes";

export interface Theme
{
  globalStyles?: GlobalStyles,
  // Config
  direction?: Direction,

  // Colors
  darkMode: "light" | "dark" | "system",
  darkModeFallback: "light" | "dark",
  rootColors: RootColors,
  colors: StringKeyValueObject,
  colorThemes: ColorThemes,
  darkModeOverride?: {
    colorThemes?: ColorThemes;
    rootColors?: RootColors;
  };

  // Global styles
  breakpoints: ThemeBreakpoints,
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
  filters: {
    blur: StringKeyValueObject,
    brightness: StringKeyValueObject,
    contrast: StringKeyValueObject,
    dropShadow: StringKeyValueObject,
    grayscale: StringKeyValueObject,
    hueRotate: StringKeyValueObject,
    invert: StringKeyValueObject,
    saturate: StringKeyValueObject,
    sepia: StringKeyValueObject,
    backdropBlur: StringKeyValueObject,
    backdropBrightness: StringKeyValueObject,
    backdropContrast: StringKeyValueObject,
    backdropGrayscale: StringKeyValueObject,
    backdropHueRotate: StringKeyValueObject,
    backdropInvert: StringKeyValueObject,
    backdropOpacity: StringKeyValueObject,
    backdropSaturate: StringKeyValueObject,
    backdropSepia: StringKeyValueObject,
  }
  interactivity: { outline: KeyValueObject<string[]>; },
  opacity: StringKeyValueObject,
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
    keyframes: StringKeyValueObject,
    transitionProperty: StringKeyValueObject,
  },
  typography: {
    font: StringKeyValueObject,
    fontSize: KeyValueObject<string[]>,
    letterSpacing: StringKeyValueObject,
    lineHeight: StringKeyValueObject,
  };
  components?: Record<string, ComponentConfig | ((colorTheme: ColorTheme, darkMode: boolean) => ComponentConfig)>;
}

type ComponentConfig = {
  defaultProps?:/* SoperioComponent | */any,
  defaultTraits?: Record<string, string>,
  subComponents?: string[],
  traits?: Record<string, Record<string, /*SoperioComponent |*/ any>> | Record<string, Record<string, /*SoperioComponent |*/ Record<string, any>>>;
};