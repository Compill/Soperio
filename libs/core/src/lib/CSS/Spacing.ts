import { css, cssValue, cssValueFn, getStyleConfig, Style, StyleProp, StyleProps } from "./utils";

export type SpacingPositiveScale =
    "0"
    | "px"
    | "0.5"
    | "1"
    | "1.5"
    | "2"
    | "2.5"
    | "3"
    | "3.5"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "14"
    | "16"
    | "20"
    | "24"
    | "28"
    | "32"
    | "36"
    | "40"
    | "44"
    | "48"
    | "52"
    | "56"
    | "60"
    | "64"
    | "72"
    | "80"
    | "96"

export type SpacingNegativeScale =
    "-0"
    | "-px"
    | "-0.5"
    | "-1"
    | "-1.5"
    | "-2"
    | "-2.5"
    | "-3"
    | "-3.5"
    | "-4"
    | "-5"
    | "-6"
    | "-7"
    | "-8"
    | "-9"
    | "-10"
    | "-11"
    | "-12"
    | "-14"
    | "-16"
    | "-20"
    | "-24"
    | "-28"
    | "-32"
    | "-36"
    | "-40"
    | "-44"
    | "-48"
    | "-52"
    | "-56"
    | "-60"
    | "-64"
    | "-72"
    | "-80"
    | "-96"

export type SpacingScale = SpacingPositiveScale | SpacingNegativeScale

export interface Spacing {
    p?: false | SpacingPositiveScale,
    pt?: false | SpacingPositiveScale,
    pb?: false | SpacingPositiveScale,
    pl?: false | SpacingPositiveScale,
    pr?: false | SpacingPositiveScale,
    px?: false | SpacingPositiveScale,
    py?: false | SpacingPositiveScale,
    m?: false | SpacingScale | "auto",
    mt?: false | SpacingScale | "auto",
    mb?: false | SpacingScale | "auto",
    ml?: false | SpacingScale | "auto",
    mr?: false | SpacingScale | "auto",
    mx?: false | SpacingScale | "auto",
    my?: false | SpacingScale | "auto",
    spaceX?: false | SpacingScale,
    spaceY?: false | SpacingScale,
    spaceXReverse?: false | boolean,
    spaceYReverse?: false | boolean,
}

// TODO Apply on children
function spaceX(value: any): Style
{
    const dimension = getStyleConfig("spacing.positiveNegative", value) || value;

    return {
        "--so-space-x-reverse": 0,
        "margin-right": `calc(${dimension} * var(--so-space-x-reverse))`,
        "margin-left": `calc(${dimension} * calc(1 - var(--so-space-x-reverse)))`
    };
}

// TODO Apply on children
function spaceY(value: any): Style
{
    const dimension = getStyleConfig("spacing.positiveNegative", value) || value;

    return {
        "--so-space-y-reverse": 0,
        "margin-top": `calc(${dimension} * var(--so-space-y-reverse))`,
        "margin-bottom": `calc(${dimension} * calc(1 - var(--so-space-y-reverse)))`
    };
}

// TODO this is to apply to children
function spacing(cssProperty: string | string[], configProperty?: string)
{
    return (value: StyleProp) =>
    {
        const parsedValue = value === "px" ? "1px" : (value === "-px" ? "-1px" : value as string)

        return css(cssProperty, configProperty)(parsedValue)
    }
}


export const SpacingMapping: StyleProps = {
    p: spacing("padding", "spacing.positive"),
    pt: spacing("padding-top", "spacing.positive"),
    pb: spacing("padding-bottom", "spacing.positive"),
    pl: spacing("padding-left", "spacing.positive"),
    pr: spacing("padding-right", "spacing.positive"),
    px: spacing(["padding-left", "padding-right"], "spacing.positive"),
    py: spacing(["padding-top", "padding-bottom"], "spacing.positive"),
    m: spacing("margin", "spacing.positiveNegative"),
    mt: spacing("margin-top", "spacing.positiveNegative"),
    mb: spacing("margin-bottom", "spacing.positiveNegative"),
    ml: spacing('margin-left', "spacing.positiveNegative"),
    mr: spacing("margin-right", "spacing.positiveNegative"),
    mx: spacing(["margin-left", "margin-right"], "spacing.positiveNegative"),
    my: spacing(["margin-top", "margin-bottom"], "spacing.positiveNegative"),
    spaceX: spaceX,
    spaceY: spaceY,
    spaceXReverse: cssValueFn("--so-space-x-reverse", 1),
    spaceYReverse: cssValueFn("--so-space-y-reverse", 1),
}
