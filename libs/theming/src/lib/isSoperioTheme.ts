import { SoperioTheme } from "./SoperioTheme";

const requiredSoperioThemeKeys: (keyof SoperioTheme)[] = [
    "breakpoints",
    "rootColors",
    "colors",
    "colorThemes",
    "borders",
    "effects",
    "flexbox",
    "sizing",
    "spacing",
    "transform",
    "transition",
    "typography"
]

export function isSoperioTheme(theme:any): boolean
{
    // Check if theme is object first

    return requiredSoperioThemeKeys.every(key => Object.prototype.hasOwnProperty.call(theme, key))
}
