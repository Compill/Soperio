import { Breakpoints } from "../CSSTypes";

export default interface ThemeBorder
{
  radius: "none" | "full" | Breakpoints,
  width: "0" | "1" | "2" | "4" | "8",
}
