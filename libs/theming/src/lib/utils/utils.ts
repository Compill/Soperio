import { Theme } from "../Theme";
import { getThemeStyle } from "./getThemeStyle";

export function getColor(value: string, theme: Theme, darkMode: boolean)
{
    if (darkMode)
    {
        if (value.startsWith("root."))
        {
            const color = getThemeStyle(theme, ["darkModeOverride", "rootColors"], value);

            if (color)
                return color
        }
            
        const darkColor = getThemeStyle(theme, ["darkModeOverride", "colors"], value);

        if (darkColor)
            return darkColor;
    }

    if (value.startsWith("root."))
        return getThemeStyle(theme, "rootColors", value);

    return getThemeStyle(theme, "colors", value);
}