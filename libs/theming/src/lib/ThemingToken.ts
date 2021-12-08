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

interface ThemeTypings extends ThemeOpacity
{
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

export type ThemingToken<ThemingCategory extends keyof ThemeTypings, ThemingProperty extends keyof ThemeTypings[ThemingCategory] | unknown = unknown> = ThemingProperty extends keyof ThemeTypings[ThemingCategory] ? ThemeTypings[ThemingCategory][ThemingProperty] : ThemeTypings[ThemingCategory]



// How it will translate in CSS interfaces
export interface Border
{
    rounded?: true | false | ThemingToken<"borders", "radius">,// | "none" | Breakpoints | "x2" | "full",
    border?: true | false | ThemingToken<"borders", "width">, //0" | "2" | "4" | "8",
}