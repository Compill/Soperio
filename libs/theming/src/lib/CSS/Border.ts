import { BorderRadius, BorderWidth, Color, Opacity, Spacing } from "../CSSTypes";

export interface Border
{
  rounded?: true | false | BorderRadius | number,
  roundedT?: true | false | BorderRadius | number,
  roundedB?: true | false | BorderRadius | number,
  roundedS?: true | false | BorderRadius | number,
  roundedE?: true | false | BorderRadius | number,
  roundedTS?: true | false | BorderRadius | number,
  roundedTE?: true | false | BorderRadius | number,
  roundedBS?: true | false | BorderRadius | number,
  roundedBE?: true | false | BorderRadius | number,
  border?: true | false | BorderWidth | number,
  borderT?: true | false | BorderWidth | number,
  borderB?: true | false | BorderWidth | number,
  borderS?: true | false | BorderWidth | number,
  borderE?: true | false | BorderWidth | number,
  borderColor?: false | Color,
  borderTColor?: false | Color,
  borderBColor?: false | Color,
  borderSColor?: false | Color,
  borderEColor?: false | Color,
  // border top, bottom, ... color. ex: borderTColor
  borderOpacity?: false | Opacity,
  borderStyle?: false | "solid" | "dashed" | "dotted" | "double" | "none",
  /**
   * true is equal to (inexisting, default) value 1
   */
  divideX?: true | false | BorderWidth | number,
  /**
   * true is equal to (inexisting, default) value 1
   */
  divideY?: true | false | BorderWidth | number,
  divideXReverse?: boolean,
  divideYReverse?: boolean,
  divideColor?: false | string,
  divideOpacity?: false | Opacity,
  divideStyle?: false | "solid" | "dashed" | "dotted" | "double" | "none",
  outline?: true | false | BorderWidth | Spacing | number,
  outlineColor?: false | Color,
  outlineOpacity?: false | Opacity,
  outlineOffset?: true | false | BorderWidth | number,
  ring?: true | false | BorderWidth | number,
  ringColor?: false | Color,
  ringInset?: true | false,
  ringOffset?: true | false | BorderWidth | number,
  ringOffsetColor?: false | Color;
}
