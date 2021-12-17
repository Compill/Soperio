import { defaultTheme } from "../defaultTheme";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const _ = require("lodash");

// TODO get user merged theme instead of default

export type Style = Record<string, string | number | Record<string, string | number> | any>;
export type StyleProp = boolean | string | number;
export type StyleFn = (value: StyleProp) => Style;
export type StyleProps = Record<string, StyleFn>;

export function getThemeStyle(themeProperty: string | string[], key: string | number): any
{
    // const c =  _.get(defaultTheme, themeProperty);
    // TODO should use useTheme
    const c =  _.property(themeProperty)(defaultTheme);

    if (c)
        return c[key];

    return undefined;
}

export function css(cssProperty: string | string[], themeProperty?: string, defaultValue?: string): StyleFn
{
    return (value: StyleProp) =>
    {
        if (!value || value === undefined)
            return {}

        let parsedValue:string | number | undefined

        if (themeProperty)
            parsedValue = getThemeStyle(themeProperty, value === true ? "default" : value);

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

export type LiteralUnion<T extends U, U = string> = T | (U & { zz_IGNORE_ME?: never; });

export type OrString<T extends string> = LiteralUnion<T, string>;
