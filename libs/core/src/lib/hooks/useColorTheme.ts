import { ColorTheme } from "../ColorTheme";
import { IS_DEV } from "@soperio/utils";
import { useTheme } from "./useTheme";

export function useColorTheme(colorTheme?: false | string | ColorTheme): ColorTheme
{
    const theme = useTheme();

    if (!colorTheme || typeof colorTheme === "string")
    {
        const indexedColorTheme = theme.themes[colorTheme || "default"];

        if (!indexedColorTheme)
        {
            if (IS_DEV)
                console.log(`[Soperio]: the color theme ${colorTheme} does not exist in your theme.`);
        }

        return indexedColorTheme || {};
    }

    return colorTheme;
}
