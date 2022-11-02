import ThemeBorder from "./Core/Border";
import ThemeBreakpoints from "./Core/Breakpoints";
import ThemeColors from "./Core/Colors";
import ThemeEffects from "./Core/Effects";
import ThemeFlexbox from "./Core/Flexbox";
import ThemeRootColors from "./Core/RootColors";
import ThemeSizing from "./Core/Sizing";
import ThemeSpacing from "./Core/Spacing";
import ThemeTransform from "./Core/Transform";
import ThemeTransition from "./Core/Transition";
import ThemeTypography from "./Core/Typography";

export interface SoperioTheme
{
    // There's probably going to have some config props as well
    breakpoints: ThemeBreakpoints,
    rootColors: ThemeRootColors,
    colors: ThemeColors,
    borders: ThemeBorder,
    effects: ThemeEffects,
    flexbox: ThemeFlexbox,
    sizing: ThemeSizing,
    spacing: ThemeSpacing,
    transform: ThemeTransform,
    transition: ThemeTransition,
    typography: ThemeTypography
}
