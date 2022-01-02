import { OrString } from "@soperio/utils";
import { Breakpoints } from "../Breakpoints";
import { getDirection } from "../hooks/useDirection";
import { Color, colorize } from "../PropTypes/Color";
import { opacity, Opacity } from "../PropTypes/Opacity";
import { css, cssValueFn, direction, getThemeStyle, Style, StyleProps } from "./utils";

export interface Border
{
    rounded?: true | false | "none" | Breakpoints | "x2" | "full",
    roundedT?: true | false | "none" | Breakpoints | "x2" | "full",
    roundedB?: true | false | "none" | Breakpoints | "x2" | "full",
    roundedS?: true | false | "none" | Breakpoints | "x2" | "full",
    roundedE?: true | false | "none" | Breakpoints | "x2" | "full",
    roundedTS?: true | false | "none" | Breakpoints | "x2" | "full",
    roundedTE?: true | false | "none" | Breakpoints | "x2" | "full",
    roundedBS?: true | false | "none" | Breakpoints | "x2" | "full",
    roundedBE?: true | false | "none" | Breakpoints | "x2" | "full",
    border?: true | false | OrString<"0" | "2" | "4" | "8">,
    borderT?: true | false | OrString<"0" | "2" | "4" | "8">,
    borderB?: true | false | OrString<"0" | "2" | "4" | "8">,
    borderS?: true | false | OrString<"0" | "2" | "4" | "8">,
    borderE?: true | false | OrString<"0" | "2" | "4" | "8">,
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

function divideX(value: any): Style
{
    const dimension = value === true ? "1px" : (getThemeStyle("border.width", value) || value)

    return {
        "--so-divide-x-reverse": 0,
        [getDirection() ? "border-right-width" : "border-left-width"]: `calc(${dimension} * var(--so-divide-x-reverse))`,
        [getDirection() ? "border-left-width" : "boder-right-width"]: `calc(${dimension} * calc(1 - var(--so-divide-x-reverse)))`
    }
}

function divideY(value: any): Style
{
    const dimension = value === true ? "1px" : (getThemeStyle("border.width", value) || value)

    return {
        "--so-divide-y-reverse": 0,
        "border-top-width": `calc(${dimension} * var(--so-divide-x-reverse))`,
        "border-bottom-width": `calc(${dimension} * calc(1 - var(--so-divide-x-reverse)))`
    };
}

function borderStartColor(value: any)
{
    return colorize(getDirection() ? "border-left-color" : "border-right-color", "--so-border-opacity")(value)
}

function borderEndColor(value: any)
{
    return colorize(getDirection() ? "border-right-color" : "border-left-color", "--so-border-opacity")(value)
}

export const BorderMapping: StyleProps =
{
    rounded: css("border-radius", "border.radius"),
    roundedT: css(["border-radius-top-left", "border-radius-top-right"], "border.radius"),
    roundedB: css(["border-radius-bottom-left", "border-radius-bottom-right"], "border.radius"),
    roundedS: direction(["border-radius-top-left", "border-radius-bottom-left"], ["border-radius-top-right", "border-radius-bottom-right"], "border.radius"),
    roundedE: direction(["border-radius-top-right", "border-radius-bottom-right"], ["border-radius-top-left", "border-radius-bottom-left"], "border.radius"),
    roundedTS: direction("border-radius-top-left", "border-radius-top-right", "border.radius"),
    roundedTE: direction("border-radius-top-right", "border-radius-top-left", "border.radius"),
    roundedBS: direction("border-radius-bottom-left", "border-radius-bottom-right", "border.radius"),
    roundedBE: direction("border-radius-bottom-right", "border-radius-bottom-left", "border.radius"),
    border: css("border-width", "border.width"),
    borderT: css("border-top-width", "border.width"),
    borderB: css("border-bottom-width", "border.width"),
    borderS: direction("border-left-width", "border-right-width", "border.width"),
    borderE: direction("border-right-width", "border-left-width", "border.width"),
    borderColor: colorize("border-color", "--so-border-opacity"),
    borderTColor: colorize("border-top-color", "--so-border-opacity"),
    borderBColor: colorize("border-bottom-color", "--so-border-opacity"),
    borderSColor: borderStartColor,
    borderEColor: borderEndColor,
    borderOpacity: opacity("--so-border-opacity"),
    borderStyle: css("border-style"),
    divideX: divideX,
    divideY: divideY,
    divideXReverse: cssValueFn("--so-divide-x-reverse", 1),
    divideYReverse: cssValueFn("--so-divide-y-reverse", 1),
    divideColor: colorize("border-color", "--so-divide-opacity"),
    divideOpacity: opacity("--so-divide-opacity"),
    divideStyle: css("border-style"),
    // ringColor: "ring",
    // ringOffset: "ring-offset",
    // ringOffsetColor: "ring-offset",
    // ringOpacity: "ring-opacity",
    // ringWidth: "ring",
};
