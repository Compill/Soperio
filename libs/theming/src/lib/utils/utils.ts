import { Theme } from "../Theme";
import { getThemeStyle } from "./getThemeStyle";

export function getColor(value: string, theme: Theme, darkMode: boolean)
{
    if (darkMode)
    {
        const darkColor = getThemeStyle(theme, ["darkModeOverride", "colors"], value);

        if (darkColor)
            return darkColor;
    }

    return getThemeStyle(theme, "colors", value);
}