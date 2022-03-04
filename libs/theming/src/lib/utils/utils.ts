import { defaultTheme } from "../defaultTheme";
import { getDarkMode } from "../hooks/useDarkMode";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const _ = require("lodash");

export function getThemeStyle(themeProperty: string | string[], key: string | number): any
{
    // const c =  _.get(defaultTheme, themeProperty);
    // TODO should use useTheme
    const c = _.property(themeProperty)(defaultTheme);

    if (c)
        return c[key];

    return undefined;
}

export function getColor(value: string)
{
    if (getDarkMode())
    {
        const darkColor = getThemeStyle(["darkModeOverride", "colors"], value);

        if (darkColor)
            return darkColor;
    }

    return getThemeStyle("colors", value);
}