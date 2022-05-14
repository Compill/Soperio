import { Breakpoints, Color, Opacity, Rotate, Scale, Skew, Spacing, Translate } from "../../CSSTypes";
import { Transitions } from "../Transitions";

export interface Hover extends Transitions
{
  top?: false | Spacing | number,
  bottom?: false | Spacing | number,
  start?: false | Spacing | number,
  end?: false | Spacing | number,
  bgColor?: Color,
  bgOpacity?: Opacity,
  borderColor?: Color,
  borderOpacity?: Opacity,
  shadow?: true | false | "sm" | Breakpoints | "inner" | "none",
  // from?: string,
  // via?: string,
  // to?: string,
  opacity?: Opacity,
  scale?: false | Scale | number,
  scaleX?: false | Scale | number,
  scaleY?: false | Scale | number,
  scaleZ?: false | Scale | number,
  rotate?: false | Rotate;
  rotateX?: false | Rotate;
  rotateY?: false | Rotate;
  rotateZ?: false | Rotate;
  translateX?: false | Spacing | Translate,
  translateY?: false | Spacing | Translate,
  translateZ?: false | Spacing | Translate,
  skewX?: false | Skew;
  skewY?: false | Skew;
  textColor?: Color,
  textDecoration?: "underline" | "line-through" | "no-underline",
  textOpacity?: Opacity,

// TODO Add a way to add before and after elements
