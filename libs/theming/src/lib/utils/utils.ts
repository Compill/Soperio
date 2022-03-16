import { getDarkMode } from "../hooks/useDarkMode";
import { getThemeStyle } from "./getThemeStyle";

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