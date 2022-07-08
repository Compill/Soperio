import { ThemeTypings } from "./ThemeTypings";

export type ThemingToken<ThemingCategory extends keyof ThemeTypings, ThemingProperty extends keyof ThemeTypings[ThemingCategory] | unknown = unknown> = ThemingProperty extends keyof ThemeTypings[ThemingCategory] ? ThemeTypings[ThemingCategory][ThemingProperty] : ThemeTypings[ThemingCategory]

// How it will translate in CSS interfaces
// export interface Border
// {
//     rounded?: true | false | ThemingToken<"borders", "radius">,// | "none" | Breakpoints | "x2" | "full",
//     border?: true | false | ThemingToken<"borders", "width">, //0" | "2" | "4" | "8",
// }


type Extras = ThemeTypings["extras"]

export type ExtraToken<ThemingCategory extends keyof Extras, ThemingProperty extends keyof Extras[ThemingCategory] | unknown = unknown> = ThemingProperty extends keyof Extras[ThemingCategory] ? Extras[ThemingCategory][ThemingProperty] : Extras[ThemingCategory]

type T = ExtraToken<"test">
