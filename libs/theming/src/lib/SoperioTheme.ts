import ThemeBorder from "./Core/Border";
import ThemeBreakpoints from "./Core/Breakpoints";
import ThemeColors from "./Core/Colors";
import ThemeEffects from "./Core/Effects";
import ThemeFlexbox from "./Core/Flexbox";
import ThemeInteractivity from "./Core/Interactivity";
import ThemeRootColors from "./Core/RootColors";
import ThemeSizing from "./Core/Sizing";
import ThemeSpacing from "./Core/Spacing";
import ThemeThemes from "./Core/Themes";
import ThemeTransform from "./Core/Transform";
import ThemeTransition from "./Core/Transition";
import ThemeTypography from "./Core/Typography";

export interface SoperioTheme
{
    // There's probably going to have some config props as well
    breakpoints: ThemeBreakpoints,
    rootColors: ThemeRootColors,
    colors: ThemeColors,
    themes: ThemeThemes,
    borders: ThemeBorder,
    effects: ThemeEffects,
    flexbox: ThemeFlexbox,
    interactivity: ThemeInteractivity,
    sizing: ThemeSizing,
    spacing: ThemeSpacing,
    transform: ThemeTransform,
    transition: ThemeTransition,
    typography: ThemeTypography
}