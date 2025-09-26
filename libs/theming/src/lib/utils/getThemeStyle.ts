import { Theme } from "../Theme";
import { property } from "es-toolkit/compat"

export function getThemeStyle(theme: Theme, themeProperty: string | string[], key: string | number): any
{
    const c:any = property(themeProperty)(theme);

    if (c)
        return c[key];

    return undefined;
}
