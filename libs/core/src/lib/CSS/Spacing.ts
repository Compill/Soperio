import { getThemeStyle, Theme } from "@soperio/theming";
import { css, cssValueFn, Style, StyleProp, StyleProps } from "./utils";


function spaceX(value: any, theme: Theme, direction: boolean, darkMode: boolean): Style
{
    const dimension = getThemeStyle(theme, "spacing.positiveNegative", value) || value;

    return {
        "--so-space-x-reverse": 0,
        ">:not([hidden])~:not([hidden])": {
            [direction ? "margin-right" : "margin-left"]: `calc(${dimension} * var(--so-space-x-reverse)) !important`,
            [direction ? "margin-left" : "margin-right"]: `calc(${dimension} * calc(1 - var(--so-space-x-reverse))) !important`
        }
    };
}

function spaceY(value: any, theme: Theme, direction: boolean, darkMode: boolean): Style
{
    const dimension = getThemeStyle(theme, "spacing.positiveNegative", value) || value;

    return {
        "--so-space-y-reverse": 0,
        ">:not([hidden])~:not([hidden])": {
            "margin-top": `calc(${dimension} * calc(1 - var(--so-space-y-reverse))) !important`,
            "margin-bottom": `calc(${dimension} * var(--so-space-y-reverse)) !important`
        }
    };
}

export function spacing(cssProperty: string | string[], themeProperty?: string)
{
    return (value: StyleProp, theme: Theme, direction: boolean, darkMode: boolean) =>
    {
        const parsedValue = typeof value === "number" ? `${value}px` : (value === "px" ? "1px" : (value === "-px" ? "-1px" : value as string))

        return css(cssProperty, themeProperty)(parsedValue, theme, direction, darkMode)
    }
}

export function directionSpacing(cssPropertyStart: string, cssPropertyEnd: string, themeProperty?: string)
{
    return (value: StyleProp, theme: Theme, direction: boolean, darkMode: boolean) =>
    {
        const parsedValue = typeof value === "number" ? `${value}px` : (value === "px" ? "1px" : (value === "-px" ? "-1px" : value as string))
        return css(direction ? cssPropertyStart : cssPropertyEnd, themeProperty)(parsedValue, theme, direction, darkMode)
    }
}


export const SpacingMapping: StyleProps = {
    p: spacing(["padding-top", "padding-bottom", "padding-left", "padding-right"], "spacing.positive"),
    pt: spacing("padding-top", "spacing.positive"),
    pb: spacing("padding-bottom", "spacing.positive"),
    ps: directionSpacing("padding-left", "padding-right", "spacing.positive"),
    pe: directionSpacing("padding-right", "padding-left", "spacing.positive"),
    px: spacing(["padding-left", "padding-right"], "spacing.positive"),
    py: spacing(["padding-top", "padding-bottom"], "spacing.positive"),
    m: spacing(["margin-top", "margin-bottom", "margin-left", "margin-right"], "spacing.positiveNegative"),
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
