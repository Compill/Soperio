import { ColorTheme } from "../ColorTheme";
import { IS_DEV } from "@soperio/utils";
import { useTheme } from "./useTheme";
import { useDarkMode } from "@soperio/core";

export function useColor(colorTheme?: false | string | ColorTheme): ColorTheme
{
  const theme = useTheme();
  const darkMode = useDarkMode();

  if (!colorTheme || typeof colorTheme === "string")
  {
    if (darkMode)
    {
      const darkThemeColor = theme?.darkModeOverride?.colorThemes?.[colorTheme || "default"];

      if (darkThemeColor)
        return darkThemeColor;
    }

    const indexedColorTheme = theme.colorThemes[colorTheme || "default"];

    if (!indexedColorTheme)
    {
      if (IS_DEV)
        console.log(`[Soperio]: the color theme ${colorTheme} does not exist in your theme.`);
    }

    return indexedColorTheme || {};
  }

  return colorTheme;
}
