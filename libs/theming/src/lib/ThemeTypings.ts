import ThemeBorder from "./Core/Border";
import ThemeBreakpoints from "./Core/Breakpoints";
import ThemeColors from "./Core/Colors";
import ThemeEffects from "./Core/Effects";
import ThemeFlexbox from "./Core/Flexbox";
import ThemeInteractivity from "./Core/Interactivity";
import ThemeOpacity from "./Core/Opacity";
import ThemeRootColors from "./Core/RootColors";
import ThemeSizing from "./Core/Sizing";
import ThemeSpacing from "./Core/Spacing";
import ThemeThemes from "./Core/Themes";
import ThemeTransform from "./Core/Transform";
import ThemeTransition from "./Core/Transition";
import ThemeTypography from "./Core/Typography";

// This file will be rewritten by CLI if the user creates a custom theme
// This way, the user will have the right value for types in autocompletion
export interface ThemeTypings extends ThemeOpacity
{
  breakpoints: ThemeBreakpoints,
  rootColors: ThemeRootColors,
  colors: ThemeColors,
  colorThemes: ThemeThemes,
  borders: ThemeBorder,
  effects: ThemeEffects,
  flexbox: ThemeFlexbox,
  interactivity: ThemeInteractivity,
  sizing: ThemeSizing,
  spacing: ThemeSpacing,
  transform: ThemeTransform,
  transition: ThemeTransition,
  typography: ThemeTypography;
}
