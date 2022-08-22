import { getThemeStyle, Theme } from "@soperio/theming";
import { Style, ThemeStyleFn } from "../CSS/utils";

export function opacity(cssProperty: string): ThemeStyleFn
{
  return (value: any, theme: Theme, direction: boolean, darkMode: boolean) =>
    {
        let parsedValue = getThemeStyle(theme,  "opacity", value)

        if (parsedValue === undefined)
        {
          const floatValue = parseFloat(parsedValue)

          if (floatValue > 100)
            console.warn(`[Soperio] Opacity value should not be superior to 100, ${parsedValue} given`)
          else if (floatValue > 1)
            parsedValue = "" + floatValue / 100
        }

        return { [cssProperty]: parsedValue };
    }
}
