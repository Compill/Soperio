import { Theme } from "../Theme";
import { getThemeStyle } from "./getThemeStyle";

export function getColor(value: string, theme: Theme, darkMode: boolean)
{
    if (darkMode)
    {
        if (value.startsWith("--"))
        {
            const color = getThemeStyle(theme, ["darkModeOverride", "rootColors"], value);

            if (color)
                return color
        }
            
        // This is not supposed to be possible
        // Because switching to dark mode does not refresh the components
        const darkColor = getThemeStyle(theme, ["darkModeOverride", "colors"], value);

        if (darkColor)
            return darkColor;
    }

    if (value.startsWith("--"))
        return getThemeStyle(theme, "rootColors", value);

    return getThemeStyle(theme, "colors", value);
}