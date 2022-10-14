import { useTheme } from "./useTheme";
import { property as getProperty } from "lodash"

// TODO Stringly type property and key
export function useThemeProperty(property: string, key: string | number | undefined)
{
    const theme = useTheme()

    if (!key)
        return undefined

    const c:any = getProperty(property)(theme);

    if (c)
        return c[key];

    return undefined;
}