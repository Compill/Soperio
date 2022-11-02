import { property } from "lodash";
import { Theme } from "../Theme";

export function getThemeStyle(theme: Theme, themeProperty: string | string[], key: string | number): any
{
    const c:any = property(themeProperty)(theme);

    if (c)
        return c[key];

    return undefined;
}