// import { Components } from "@soperio/components";
import ThemeBorder from "./Core/Border";
import ThemeBreakpoints from "./Core/Breakpoints";
import ThemeColors from "./Core/Colors";
import ThemeEffects from "./Core/Effects";
import ThemeFilters from "./Core/Filters";
import ThemeFlexbox from "./Core/Flexbox";
import ThemeInteractivity from "./Core/Interactivity";
import ThemeOpacity from "./Core/Opacity";
import ThemeRootColors from "./Core/RootColors";
import ThemeSizing from "./Core/Sizing";
import ThemeSpacing from "./Core/Spacing";
import ThemeThemes from "./Core/Themes";
import { ThemeTraits } from "./Core/Traits";
import ThemeTransform from "./Core/Transform";
import ThemeTransition from "./Core/Transition";
import ThemeTypography from "./Core/Typography";
import { Direction, GlobalStyles } from "./ThemeTypes";

// This file will be rewritten by CLI if the user creates a custom theme
// This way, the user will have the right value for types in autocompletion
export interface ThemeTypings extends ThemeOpacity
{
  globalStyles: GlobalStyles;
  direction: Direction;
  darkMode: 'light' | 'dark' | 'system';
  darkModeFallback: 'light' | 'dark';
  darkModeOverride: {
    colorThemes: ThemeThemes;
    rootColors: ThemeRootColors;
  },
  rootColors: ThemeRootColors,
  colors: ThemeColors,
  colorThemes: ThemeThemes,
  breakpoints: ThemeBreakpoints,
  borders: ThemeBorder,
  effects: ThemeEffects,
  flexbox: ThemeFlexbox,
  filters: ThemeFilters,
  interactivity: ThemeInteractivity,
  sizing: ThemeSizing,
  spacing: ThemeSpacing,
  transform: ThemeTransform,
  transition: ThemeTransition,
  typography: ThemeTypography;
  traits: ThemeTraits,
  components: Record<string, Record<string, string>>
}
