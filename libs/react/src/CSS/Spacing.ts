import { OrString } from "@soperio/utils";
import { getDirection } from "../hooks/useDirection";
import { css, cssValueFn, getThemeStyle, Style, StyleProp, StyleProps } from "./utils";

export type SpacingPositiveScale = OrString<
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
    | "96" >

export type SpacingNegativeScale = OrString<
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
    | "-96" >

export type SpacingScale = SpacingPositiveScale | SpacingNegativeScale

export interface Spacing {
    p?: false | SpacingPositiveScale,
    pt?: false | SpacingPositiveScale,
    pb?: false | SpacingPositiveScale,
    ps?: false | SpacingPositiveScale,
    pe?: false | SpacingPositiveScale,
    px?: false | SpacingPositiveScale,
    py?: false | SpacingPositiveScale,
    m?: false | SpacingScale | "auto",
    mt?: false | SpacingScale | "auto",
    mb?: false | SpacingScale | "auto",
    ms?: false | SpacingScale | "auto",
    me?: false | SpacingScale | "auto",
    mx?: false | SpacingScale | "auto",
    my?: false | SpacingScale | "auto",
    spaceX?: false | SpacingScale,
    spaceY?: false | SpacingScale,
    spaceXReverse?: false | boolean,
    spaceYReverse?: false | boolean,
}

function spaceX(value: any): Style
{
    const dimension = getThemeStyle("spacing.positiveNegative", value) || value;
    const direction = getDirection();

    return {
        "--so-space-x-reverse": 0,
        ">:not([hidden])~:not([hidden])": {
          [direction ? "margin-right" : "margin-left"]: `calc(${dimension} * var(--so-space-x-reverse))`,
          [direction ? "margin-left" : "margin-right"]: `calc(${dimension} * calc(1 - var(--so-space-x-reverse)))`
        }
    };
}

function spaceY(value: any): Style
{
    const dimension = getThemeStyle("spacing.positiveNegative", value) || value;

    return {
        "--so-space-y-reverse": 0,
        "margin-top": `calc(${dimension} * var(--so-space-y-reverse))`,
        "margin-bottom": `calc(${dimension} * calc(1 - var(--so-space-y-reverse)))`
    };
}

export function spacing(cssProperty: string | string[], themeProperty?: string)
{
    return (value: StyleProp) =>
    {
        const parsedValue = typeof value === "number" ? `${value}px` : (value === "px" ? "1px" : (value === "-px" ? "-1px" : value as string))

        return css(cssProperty, themeProperty)(parsedValue)
    }
}

export function directionSpacing(cssPropertyStart: string, cssPropertyEnd: string, themeProperty?: string)
{
    return (value: StyleProp) =>
    {
        const parsedValue = typeof value === "number" ? `${value}px` : (value === "px" ? "1px" : (value === "-px" ? "-1px" : value as string))
        return css(getDirection() ? cssPropertyStart : cssPropertyEnd, themeProperty)(parsedValue)
    }
}


export const SpacingMapping: StyleProps = {
    p: spacing("padding", "spacing.positive"),
    pt: spacing("padding-top", "spacing.positive"),
    pb: spacing("padding-bottom", "spacing.positive"),
    ps: directionSpacing("padding-left", "padding-right", "spacing.positive"),
    pe: directionSpacing("padding-right", "padding-left", "spacing.positive"),
    px: spacing(["padding-left", "padding-right"], "spacing.positive"),
    py: spacing(["padding-top", "padding-bottom"], "spacing.positive"),
    m: spacing("margin", "spacing.positiveNegative"),
    mt: spacing("margin-top", "spacing.positiveNegative"),
    mb: spacing("margin-bottom", "spacing.positiveNegative"),
    ms: directionSpacing("margin-left", "margin-right", "spacing.positiveNegative"),
    me: directionSpacing("margin-right", "margin-right", "spacing.positiveNegative"),
    mx: spacing(["margin-left", "margin-right"], "spacing.positiveNegative"),
    my: spacing(["margin-top", "margin-bottom"], "spacing.positiveNegative"),
    spaceX: spaceX,
    spaceY: spaceY,
    spaceXReverse: cssValueFn("--so-space-x-reverse", 1),
    spaceYReverse: cssValueFn("--so-space-y-reverse", 1),
}
