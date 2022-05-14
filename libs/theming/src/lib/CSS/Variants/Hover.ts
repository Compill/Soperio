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

  // TODO Add a way to do a group_hover, meaning that if group is hovering, then apply a set of props to current component
  /*
    Ex, I want to change the text color of child when parent is hovering
    <div
      bgColor="white"
      hover_bgColor="sky-500"
      p="5"
    >
      <p
        textColor="coolGray-900"
        hover_textColor="white"
      >
    </div>

    This should work right ?
    It does BUT when you put your mouse in the padding section of the container div
    The text color doesn't change because the mouse is not hovering the text
  */
}

// TODO Add a way to add before and after elements
