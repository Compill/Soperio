import { getThemeStyle, Theme } from "@soperio/theming";
import { css, cssValueFn, Style, StyleProp, StyleProps } from "./utils";


function spaceX(value: any, theme: Theme, direction: boolean, darkMode: boolean): Style
{
    const dimension = getThemeStyle(theme, "spacing.positiveNegative", value) || value;

    return {
        "--so-space-x-reverse": 0,
        ">:not([hidden])~:not([hidden])": {
            [direction ? "marginRight" : "marginLeft"]: `calc(${dimension} * var(--so-space-x-reverse)) !important`,
            [direction ? "marginLeft" : "marginRight"]: `calc(${dimension} * calc(1 - var(--so-space-x-reverse))) !important`
        }
    };
}

function spaceY(value: any, theme: Theme, direction: boolean, darkMode: boolean): Style
{
    const dimension = getThemeStyle(theme, "spacing.positiveNegative", value) || value;

    return {
        "--so-space-y-reverse": 0,
        ">:not([hidden])~:not([hidden])": {
            marginTop: `calc(${dimension} * calc(1 - var(--so-space-y-reverse))) !important`,
            marginBottom: `calc(${dimension} * var(--so-space-y-reverse)) !important`
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
    p: spacing(["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"], "spacing.positive"),
    pt: spacing("paddingTop", "spacing.positive"),
    pb: spacing("paddingBottom", "spacing.positive"),
    ps: directionSpacing("paddingLeft", "paddingRight", "spacing.positive"),
    pe: directionSpacing("paddingRight", "paddingLeft", "spacing.positive"),
    px: spacing(["paddingLeft", "paddingRight"], "spacing.positive"),
    py: spacing(["paddingTop", "paddingBottom"], "spacing.positive"),
    m: spacing(["marginTop", "marginBottom", "marginLeft", "marginRight"], "spacing.positiveNegative"),
    mt: spacing("marginTop", "spacing.positiveNegative"),
    mb: spacing("marginBottom", "spacing.positiveNegative"),
    ms: directionSpacing("marginLeft", "marginRight", "spacing.positiveNegative"),
    me: directionSpacing("marginRight", "marginLeft", "spacing.positiveNegative"),
    mx: spacing(["marginLeft", "marginRight"], "spacing.positiveNegative"),
    my: spacing(["marginTop", "marginBottom"], "spacing.positiveNegative"),
    spaceX: spaceX,
    spaceY: spaceY,
    spaceXReverse: cssValueFn("--so-space-x-reverse", 1),
    spaceYReverse: cssValueFn("--so-space-y-reverse", 1),
}
