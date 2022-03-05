import { CSSPropKeys } from "@soperio/core";
import { ColorTheme, getThemeStyle } from "@soperio/theming";
import { IS_DEV } from "@soperio/utils";
import { omit, split } from "./utils";

export class Soperio
{
  static getColorTheme(theme: string | ColorTheme, component = ""): ColorTheme | null
  {
    if (typeof theme === "string")
    {
      const indexedColorTheme = getThemeStyle("themes", theme) as ColorTheme;

      if (!indexedColorTheme)
      {
        if (IS_DEV)
          console.log(`[Soperio ${component}]: the color theme ${theme} does not exist in your theme.`);

        return null;
      }

      return indexedColorTheme;
    }

    return theme;
  }
}
