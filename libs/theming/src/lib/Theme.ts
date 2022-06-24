import { ColorTheme } from "./ColorTheme";
import ThemeBreakpoints from "./Core/Breakpoints";
import { SoperioComponent } from "./SoperioComponent";
import { SurfaceSchemeSet } from "./SurfaceScheme";
import { ColorThemes, Direction, GlobalStyles, KeyValueObject, RootColors, StringKeyValueObject, Surfaces } from "./ThemeTypes";

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
  palette: StringKeyValueObject,
  surfaces: Surfaces,
  colorThemes: ColorThemes, // TODO Delete
  darkModeOverride?: {
    colorThemes?: ColorThemes; // TODO Delete
    rootColors?: RootColors;
    surfaces?: Surfaces;
  };

  /*
    surfaces:
    {
      primary:
      {
        bg: "#FF1199",
        content: "#FF1199",
        ...
      },
      primary-alt:
      {
        bg: "#FF1199",
        content: "#FF1199",
        ...
      },
      primary-plain:
      {
        bg: "#FF1199",
        content: "#FF1199",
        ...
      },
      primary-layer:
      {
        bg: "#FF1199",
        content: "#FF1199",
        ...
      },
      secondary:
      {
        bg: "#FF1199",
        content: "#FF1199",
        ...
      },
      neutral:
      {
        bg: "#FF1199",
        content: "#FF1199",
        ...
      }
    }
  */

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
    fontSize: StringKeyValueObject,
    letterSpacing: StringKeyValueObject,
    lineHeight: StringKeyValueObject,
  };
  traits: KeyValueObject<Omit<SoperioComponent, "trait">>
  components?: Record<string, ComponentConfig | ((colorTheme: ColorTheme, darkMode: boolean) => ComponentConfig) | ((surface: SurfaceSchemeSet, darkMode: boolean) => ComponentConfig)>;
}

type ComponentConfig = {
  defaultProps?:/* SoperioComponent | */any,
  defaultTraits?: Record<string, string>,
  subComponents?: string[],
  traits?: Record<string, Record<string, /*SoperioComponent |*/ any>> | Record<string, Record<string, /*SoperioComponent |*/ Record<string, any>>>;
};
