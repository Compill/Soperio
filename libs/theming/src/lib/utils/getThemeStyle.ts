import { getTheme } from "../hooks/useTheme";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const _ = require("lodash");

export function getThemeStyle(themeProperty: string | string[], key: string | number): any
{
    const c = _.property(themeProperty)(getTheme());

    if (c)
        return c[key];

    return undefined;
}