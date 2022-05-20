import { Breakpoints, Spacing } from "../CSSTypes";

type ScreenBreakpoints = `screen-${Breakpoints}`;

export type WidthScale =
  "1/2"
  | "1/3"
  | "2/3"
  | "1/4"
  | "2/4"
  | "3/4"
  | "1/5"
  | "2/5"
  | "3/5"
  | "4/5"
  | "1/6"
  | "2/6"
  | "3/6"
  | "4/6"
  | "5/6"
  | "1/12"
  | "2/12"
  | "3/12"
  | "4/12"
  | "5/12"
  | "6/12"
  | "7/12"
  | "8/12"
  | "9/12"
  | "10/12"
  | "11/12"
  | "auto"
  | "full"
  | "screen"
  | "min"
  | "max";

export type HeightScale =
  "1/2"
  | "1/3"
  | "2/3"
  | "1/4"
  | "2/4"
  | "3/4"
  | "1/5"
  | "2/5"
  | "3/5"
  | "4/5"
  | "1/6"
  | "2/6"
  | "3/6"
  | "4/6"
  | "5/6"
  | "auto"
  | "full"
  | "screen";

export default interface ThemeSizing
{
  height: HeightScale | "min" | "max" | "fit" | Spacing,
  maxHeight: "full" | "screen" | "min" | "max" | "fit" | Spacing,
  maxWidth: "0" | "full" | "min" | "max" | "fit" | Spacing,
  minHeight: "0" | "full" | "screen" | "min" | "max" | "fit" | Spacing,
  minWidth: "0" | "full" | "min" | "max" | "min" | "max" | "fit" | Spacing,
  width: "0" | "min" | "max" | "fit" | "none" | "xs" | Breakpoints | "x3" | "x4" | "x5" | "x6" | "x7" | "full" | "min" | "max" | "prose" | ScreenBreakpoints | WidthScale | Spacing,
}
