import { Breakpoints, Color, Opacity } from "@soperio/theming";
import { Transitions } from "../Transitions";

export interface Hover extends Transitions
{
  bgColor?: Color,
  bgOpacity?: Opacity,
  borderColor?: Color,
  borderOpacity?: Opacity,
  shadow?: true | false | "sm" | Breakpoints | "inner" | "none",
  // from?: string,
  // via?: string,
  // to?: string,
  // opacity?: Opacity,
  // rotate?: "0" | "1" | "2" | "2" | "6" | "12" | "45" | "90" | "180";
  // scale?: ScalingScale,
  // scaleX?: ScalingScale,
  // scaleY?: ScalingScale,
  // skewX?: "0" | "1" | "2" | "2" | "6" | "12",
  // skewY?: "0" | "1" | "2" | "2" | "6" | "12",
  textColor?: Color,
  textDecoration?: "underline" | "line-through" | "no-underline",
  // textOpacity?: Opacity,
  // translateX?: SpacingScale | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "full",
  // translateY?: SpacingScale | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "full",
}
