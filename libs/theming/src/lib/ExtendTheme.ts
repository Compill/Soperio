import ThemeBorder from './Core/Border';
import ThemeBreakpoint from './Core/Breakpoints';
import ThemeColor from './Core/Colors';
import ThemeEffects from './Core/Effects';
import ThemeFlexbox from './Core/Flexbox';
import ThemeRootColor from './Core/RootColors';
import ThemeSizing from './Core/Sizing';
import ThemeSpacing from './Core/Spacing';
import ThemeTransform from './Core/Transform';
import ThemeTransition from './Core/Transition';
import ThemeTypography from './Core/Typography';
import { SoperioComponent } from "./SoperioComponent";
import { Direction, GlobalStyles, StringKeyValueObject } from './ThemeTypes';

type OptionalAny<T> = {
  [Property in keyof T]+?: any;
};

export interface ExtendTheme
{
  // There's probably going to have some config props as well
  globalStyles?: GlobalStyles;
  direction?: Direction;
  darkMode?: 'light' | 'dark' | 'system';
  darkModeFallback?: 'light' | 'dark';
  colors?: Partial<ThemeColor> & Record<string, string>;
  rootColors?: Partial<ThemeRootColor>;
  
  breakpoints?: Partial<ThemeBreakpoint>;
  border?: OptionalAny<ThemeBorder>;
  effects?: OptionalAny<ThemeEffects>;
  flexbox?: OptionalAny<ThemeFlexbox>;
  filters?: {
    blur?: StringKeyValueObject,
    brightness?: StringKeyValueObject,
    contrast?: StringKeyValueObject,
    dropShadow?: StringKeyValueObject,
    grayscale?: StringKeyValueObject,
    hueRotate?: StringKeyValueObject,
    invert?: StringKeyValueObject,
    saturate?: StringKeyValueObject,
    sepia?: StringKeyValueObject,
    backdropBlur?: StringKeyValueObject,
    backdropBrightness?: StringKeyValueObject,
    backdropContrast?: StringKeyValueObject,
    backdropGrayscale?: StringKeyValueObject,
    backdropHueRotate?: StringKeyValueObject,
    backdropInvert?: StringKeyValueObject,
    backdropOpacity?: StringKeyValueObject,
    backdropSaturate?: StringKeyValueObject,
    backdropSepia?: StringKeyValueObject,
  };
  opacity?: StringKeyValueObject,
  sizing?: OptionalAny<ThemeSizing>;
  spacing?: OptionalAny<ThemeSpacing>;
  transform?: OptionalAny<ThemeTransform>;
  transition?: OptionalAny<ThemeTransition>;
  typography?: OptionalAny<ThemeTypography>;
  traits?: Record<string, Omit<SoperioComponent, "trait">>,
  extras?: Record<string, any>;
  darkModeOverride?: {
    rootColors?: Partial<ThemeRootColor>;
    extras?: StringKeyValueObject;
  };
}