// import { Components } from "@soperio/components";
import ThemeBorder from "./Core/Border";
import ThemeBreakpoints from "./Core/Breakpoints";
import ThemeColors from "./Core/Colors";
import ThemeEffects from "./Core/Effects";
import ThemeFilters from "./Core/Filters";
import ThemeFlexbox from "./Core/Flexbox";
import ThemeOpacity from "./Core/Opacity";
import ThemeRootColors from "./Core/RootColors";
import ThemeSizing from "./Core/Sizing";
import ThemeSpacing from "./Core/Spacing";
import ThemeTraits from "./Core/Traits";
import ThemeTransform from "./Core/Transform";
import ThemeTransition from "./Core/Transition";
import ThemeTypography from "./Core/Typography";
import { Direction, GlobalStyles } from "./ThemeTypes";

// This file will be rewritten by CLI if the user creates a custom theme
// This way, the user will have the right value for types in autocompletion
export interface ThemeTypings
{
  globalStyles: GlobalStyles;
  direction: Direction;
  darkMode: 'light' | 'dark' | 'system';
  darkModeFallback: 'light' | 'dark';
  darkModeOverride: {
    rootColors: ThemeRootColors;
  },
  rootColors: ThemeRootColors,
  colors: ThemeColors,
  breakpoints: ThemeBreakpoints,
  borders: ThemeBorder,
  effects: ThemeEffects,
  flexbox: ThemeFlexbox,
  filters: ThemeFilters,
  opacity: ThemeOpacity,
  sizing: ThemeSizing,
  spacing: ThemeSpacing,
  transform: ThemeTransform,
  transition: ThemeTransition,
  typography: ThemeTypography;
  traits: ThemeTraits,
  extras: any
}
