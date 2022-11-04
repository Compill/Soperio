import { SpacingPositiveScale } from "./Spacing";

export default interface ThemeFlexbox
{
  flex: "1" | "auto" | "initial" | "none",
  gridAutoColumns: "auto" | "min" | "max" | "fr",
  gridAutoRows: "auto" | "min" | "max" | "fr",
  gridColumnSpan: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "8" | "9" | "10" | "11" | "12" | "none",
  gridRowSpan: "1" | "2" | "3" | "4" | "5" | "6" | "none",
  gridTemplateColumns: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "8" | "9" | "10" | "11" | "12" | "none",
  gridTemplateRows: "1" | "2" | "3" | "4" | "5" | "6" | "none",
  order: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "8" | "9" | "10" | "11" | "12" | "first" | "last" | "none",
  flexBasis: "1/2"
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
  | SpacingPositiveScale
}
