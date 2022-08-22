import { getTheme } from "../hooks/useTheme";
import { Theme } from "../Theme";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const _ = require("lodash");

export function getThemeStyle(theme: Theme, themeProperty: string | string[], key: string | number): any
{
    const c = _.property(themeProperty)(theme);

    if (c)
        return c[key];

    return undefined;
}