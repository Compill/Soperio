import { getThemeStyle } from "@soperio/theming";
import { Style } from "../CSS/utils";

export function opacity(cssProperty: string): (value: any) => Style
{
    return (value: any) =>
    {
        let parsedValue = getThemeStyle("opacity", value)

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
