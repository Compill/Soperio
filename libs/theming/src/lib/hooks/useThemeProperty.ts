import { useTheme } from "./useTheme";
const _ = require("lodash");

export function useThemeProperty(property: string, key: string | number | undefined)
{
    const theme = useTheme()

    if (!key)
        return undefined

    const c = _.property(property)(theme);

    if (c)
        return c[key];

    return undefined;
}