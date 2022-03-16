import { Breakpoints } from "../CSSTypes";

export default interface ThemeBorder
{
  radius: "none" | "full" | Breakpoints,
  width: "0" | "2" | "4" | "8",
}
