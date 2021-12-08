import { Breakpoints } from "../Breakpoints";
import { colorize } from "../PropTypes/Color";
import { opacity, Opacity } from "../PropTypes/Opacity";
import { css, cssValueFn, getStyleConfig, Style, StyleProps } from "./utils";

export interface Border
{
    rounded?: true | false | "none" | Breakpoints | "x2" | "full",
    roundedT?: true | false | "none" | Breakpoints | "x2" | "full",
    roundedB?: true | false | "none" | Breakpoints | "x2" | "full",
    roundedL?: true | false | "none" | Breakpoints | "x2" | "full",
    roundedR?: true | false | "none" | Breakpoints | "x2" | "full",
    roundedTL?: true | false | "none" | Breakpoints | "x2" | "full",
    roundedTR?: true | false | "none" | Breakpoints | "x2" | "full",
    roundedBL?: true | false | "none" | Breakpoints | "x2" | "full",
    roundedBR?: true | false | "none" | Breakpoints | "x2" | "full",
    border?: true | false | "0" | "2" | "4" | "8",
    borderT?: true | false | "0" | "2" | "4" | "8",
    borderB?: true | false | "0" | "2" | "4" | "8",
    borderL?: true | false | "0" | "2" | "4" | "8",
    borderR?: true | false | "0" | "2" | "4" | "8",
    borderColor?: false | string,
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

export function divideX(value: any): Style
{
    const dimension = value === true ? "1px" : (getStyleConfig("border.width", value) || value)

    return {
        "--so-divide-x-reverse": 0,
        "border-right-width": `calc(${dimension} * var(--so-divide-x-reverse))`,
        "border-left-width": `calc(${dimension} * calc(1 - var(--so-divide-x-reverse)))`
    }
}

export function divideY(value: any): Style
{
    const dimension = value === true ? "1px" : (getStyleConfig("border.width", value) || value)

    return {
        "--so-divide-y-reverse": 0,
        "border-top-width": `calc(${dimension} * var(--so-divide-x-reverse))`,
        "border-bottom-width": `calc(${dimension} * calc(1 - var(--so-divide-x-reverse)))`
    };
}

export const BorderMapping: StyleProps =
{
    rounded: css("border-radius", "border.radius"),
    roundedT: css(["border-radius-top-left", "border-radius-top-right"], "border.radius"),
    roundedB: css(["border-radius-bottom-left", "border-radius-bottom-right"], "border.radius"),
    roundedL: css(["border-radius-top-left", "border-radius-bottom-left"], "border.radius"),
    roundedR: css(["border-radius-top-right", "border-radius-bottom-right"], "border.radius"),
    roundedTL: css("border-radius-top-left", "border.radius"),
    roundedTR: css("border-radius-top-right", "border.radius"),
    roundedBL: css("border-radius-bottom-left", "border.radius"),
    roundedBR: css("border-radius-bottom-right", "border.radius"),
    border: css("border-width", "border.width"),
    borderT: css("border-top-width", "border.width"),
    borderB: css("border-bottom-width", "border.width"),
    borderL: css("border-left-width", "border.width"),
    borderR: css("border-right-width", "border.width"),
    borderColor: colorize("border-color", "--so-border-opacity"),
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