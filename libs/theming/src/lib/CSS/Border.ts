import { BorderRadius, BorderWidth, Color, Opacity } from "../CSSTypes";

export interface Border
{
    rounded?: true | false | BorderRadius,
    roundedT?:  true | false | BorderRadius,
    roundedB?:  true | false | BorderRadius,
    roundedS?:  true | false | BorderRadius,
    roundedE?:  true | false | BorderRadius,
    roundedTS?:  true | false | BorderRadius,
    roundedTE?:  true | false | BorderRadius,
    roundedBS?:  true | false | BorderRadius,
    roundedBE?:  true | false | BorderRadius,
    border?: true | false | BorderWidth,
    borderT?: true | false | BorderWidth,
    borderB?: true | false | BorderWidth,
    borderS?: true | false | BorderWidth,
    borderE?: true | false | BorderWidth,
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
    divideX?: true | false | BorderWidth,
    /**
     * true is equal to (inexisting, default) value 1
     */
    divideY?: true | false | BorderWidth,
    divideXReverse?: boolean,
    divideYReverse?: boolean,
    divideColor?: false | string,
    divideOpacity?: false | Opacity,
    divideStyle?: false | "solid" | "dashed" | "dotted" | "double" | "none",
    /**
     * true is equal to (inexisting, default) value 3
     */
    // ringColor?: string,
    // ringOffset?: "0" | "1" | "2" | "4" | "8",
    // ringOffsetColor?: string;
    // ringOpacity?: Opacity,
    // ringWidth?: true | false | "0" | "1" | "2" | "4" | "8" | "inset",
}
