import { Breakpoints } from "../CSSTypes";

export default interface ThemeBorder
{
  radius: "none" | "full" | Breakpoints,
  width: "default" | "none" | "xs" | "sm" | "md" | "lg" | "xl" | "x1" | "x2" | "x3" | "x4" | "x5",
}
