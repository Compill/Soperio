import { getTheme } from "../hooks/useTheme";
import { Theme } from "../Theme";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const _ = require("lodash");

// TODO Delete
// export function getThemeStyle(themeProperty: string | string[], key: string | number): any
// {
//     const c = _.property(themeProperty)(getTheme());

//     if (c)
//         return c[key];

//     return undefined;
// }

export function getThemeStyle(theme: Theme, themeProperty: string | string[], key: string | number): any
{
    const c = _.property(themeProperty)(theme);

    if (c)
        return c[key];

    return undefined;
}