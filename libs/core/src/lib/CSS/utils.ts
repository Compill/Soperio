import { getThemeStyle, Theme } from "@soperio/theming";


export type Style = Record<string, string | number | Record<string, string | number> | any>;
export type StyleProp = boolean | string | number;
// export type StyleFn = (value: StyleProp) => Style;
export type StyleFn = (value: StyleProp) => Style;
export type ThemeStyleFn = (value: StyleProp, theme: Theme, direction: boolean, darkMode: boolean) => Style;
export type StyleProps = Record<string, StyleFn | ThemeStyleFn>;

export function css(cssProperty: string | string[], themeProperty?: string, defaultValue?: string): ThemeStyleFn
{
    return (value: StyleProp, theme: Theme, direction: boolean, darkMode: boolean) =>
    {
        if (!value || value === undefined)
            return {}

        let parsedValue:string | number | undefined

        if (themeProperty)
            parsedValue = getThemeStyle(theme, themeProperty, value === true ? "default" : value);

        if (parsedValue === undefined && value === true)
            parsedValue = defaultValue

        if (parsedValue === undefined)
            parsedValue = value as string | number

        if (typeof cssProperty === "string")
            return { [cssProperty]: parsedValue as string | number };

        const style: Style = {};
        cssProperty.forEach(property => style[property] = parsedValue as string | number);
        return style;
    };
}

export function direction(cssPropertyStart: string | string[], cssPropertyEnd: string | string[], themeProperty?: string, defaultValue?: string): ThemeStyleFn
{
    return (value: StyleProp, theme: Theme, direction: boolean, darkMode: boolean) =>
    {
        if (!value || value === undefined)
            return {}

        let parsedValue:string | number | undefined

        if (themeProperty)
            parsedValue = getThemeStyle(theme, themeProperty, value === true ? "default" : value);

        if (parsedValue === undefined && value === true)
            parsedValue = defaultValue

        if (parsedValue === undefined)
            parsedValue = value as string | number

        if (typeof cssPropertyStart === "string" && typeof cssPropertyEnd === "string")
        {
            return { [direction ? cssPropertyStart : cssPropertyEnd]: parsedValue as string | number };
        }
        else if (Array.isArray(cssPropertyStart) && Array.isArray(cssPropertyEnd))
        {
            const style: Style = {};
            const cssProperty = direction ? cssPropertyStart : cssPropertyEnd;
            cssProperty.forEach(property => style[property] = parsedValue as string | number);
            return style;
        }

        throw new Error("cssPropertyStart and cssPropertyEnd must be of the same type, either string or string[]")
    };
}

export function cssValue(cssProperty: string, cssValue: string | number):Style
{
    return { [cssProperty]: cssValue };
}

export function cssValueFn(cssProperty: string, cssValue: string | number): StyleFn
{
    return (value: StyleProp) =>
    {
        if (!value)
            return {};

        return { [cssProperty]: cssValue };
    };
}
