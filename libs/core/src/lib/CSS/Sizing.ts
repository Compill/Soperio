import { getThemeStyle, Theme } from "@soperio/theming";
import { css, StyleProp, StyleProps, ThemeStyleFn } from "./utils";

function processValue(cssProperty: string, themeProperty:string): ThemeStyleFn
{
    return (value: StyleProp, theme: Theme, direction: boolean, darkMode: boolean) =>
    {
        if (!value || value === true)
            return {}

        let parsedValue = value;

        const themeValue = getThemeStyle(theme, themeProperty, value);

        if (themeValue !== undefined)
        {
            parsedValue = themeValue;
        }
        else if (typeof value === "string" && value.includes("/"))
        {
            const dividers = value.split("/");
            const result = (Number(dividers[0]) / Number(dividers[1]) * 100).toPrecision(4);
            parsedValue = `${result}%`;
        }

        return { [cssProperty]: parsedValue };
    }
}
export const SizingMapping: StyleProps = {
    aspectRatio: css("aspect-ratio", "sizing.aspectRatio"),
    w: processValue("width", "sizing.width"),
    h: processValue("height", "sizing.height"),
    minW: processValue("minWidth", "sizing.minWidth"),
    minH: processValue("minHeight", "sizing.minHeight"),
    maxW: processValue("maxWidth", "sizing.maxWidth"),
    maxH: processValue("maxHeight", "sizing.maxHeight"),
}
