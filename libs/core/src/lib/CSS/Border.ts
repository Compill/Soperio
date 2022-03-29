import { getDirection, getThemeStyle } from "@soperio/theming";
import { colorize } from "../PropTypes/Color";
import { opacity } from "../PropTypes/Opacity";
import { css, cssValueFn, direction, Style, StyleProps } from "./utils";

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
    roundedT: css(["border-top-left-radius", "border-top-right-radius"], "border.radius"),
    roundedB: css(["border-bottom-left-radius", "border-bottom-right-radius"], "border.radius"),
    roundedS: direction(["border-top-left-radius", "border-bottom-left-radius"], ["border-top-right-radius", "border-bottom-right-radius"], "border.radius"),
    roundedE: direction(["border-top-right-radius", "border-bottom-right-radius"], ["border-top-left-radius", "border-bottom-left-radius"], "border.radius"),
    roundedTS: direction("border-top-left-radius", "border-top-right-radius", "border.radius"),
    roundedTE: direction("border-top-right-radius", "border-top-left-radius", "border.radius"),
    roundedBS: direction("border-bottom-left-radius", "border-bottom-right-radius", "border.radius"),
    roundedBE: direction("border-bottom-right-radius", "border-bottom-left-radius", "border.radius"),
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
