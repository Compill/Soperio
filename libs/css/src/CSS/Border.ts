import { BorderRadius, BorderWidth, Color, Opacity } from "@soperio/theming";

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
    borderStyle?: false | "solid" | "dashed" | "dotter" | "double" | "none",
    /**
     * true is equal to (inexisting, default) value 1
     */
    divideX?: true | false | "0" | "2" | "4" | "8",
    /**
     * true is equal to (inexisting, default) value 1
     */
    divideY?: true | false | "0" | "2" | "4" | "8",
    divideXReverse?: boolean,
    divideYReverse?: boolean,
    divideColor?: false | string,
    divideOpacity?: false | Opacity,
    divideStyle?: false | "solid" | "dashed" | "dotter" | "double" | "none",
    /**
     * true is equal to (inexisting, default) value 3
     */
    // ringColor?: string,
    // ringOffset?: "0" | "1" | "2" | "4" | "8",
    // ringOffsetColor?: string;
    // ringOpacity?: Opacity,
    // ringWidth?: true | false | "0" | "1" | "2" | "4" | "8" | "inset",
}
