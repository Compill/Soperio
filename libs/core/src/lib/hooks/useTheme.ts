import { ColorTheme } from "../ColorTheme";
import { IS_DEV } from "@soperio/utils";
import { useConfig } from "./useConfig";

export function useTheme(theme?: false | string | ColorTheme): ColorTheme
{
    const config = useConfig();

    if (!theme || typeof theme === "string")
    {
        const configTheme = config.themes[theme || "default"];

        if (!configTheme)
        {
            if (IS_DEV)
                console.log(`[Soperio]: the theme ${theme} does not exist in your config.`);
        }

        return configTheme || {};
    }

    return theme;
}
