import { SoperioComponent } from "./SoperioComponent";
import { Direction, GlobalStyles, KeyValueObject, RootColors, StringKeyValueObject } from "./ThemeTypes";

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

  // Global styles
  breakpoints: {
    default: string,
    sm: string,
    md: string,
    lg: string,
    xl: string,
    x2: string,
  },
  border: {
    radius: StringKeyValueObject,
    width: StringKeyValueObject;
  },
  effects: { boxShadow: StringKeyValueObject; },
  flexbox: {
    flex: StringKeyValueObject,
    gridAutoColumns: StringKeyValueObject,
    gridAutoRows: StringKeyValueObject,
    gridColumnSpan: StringKeyValueObject,
    gridRowSpan: StringKeyValueObject,
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
    textSize: StringKeyValueObject,
    letterSpacing: StringKeyValueObject,
    lineHeight: StringKeyValueObject,
    textShadow: StringKeyValueObject,
    textShadowBlur: StringKeyValueObject,
  };
  traits: KeyValueObject<Omit<SoperioComponent, "trait">>
  extras?: Record<string, any>

  // Anything we could want to change when the theme goes from light to dark
  darkModeOverride?: {
    rootColors?: RootColors;
    extras?: Record<string, any>
  };
}
