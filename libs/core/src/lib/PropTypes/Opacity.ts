import { getThemeStyle, Style } from "../CSS/utils";

export function opacity(cssProperty: string): (value: any) => Style
{
    return (value: any) =>
    {
        let parsedValue = getThemeStyle("opacity", value)

        if (parsedValue === undefined)
        {
            // TODO if value > 1, divide by 100
            parsedValue = ""
        }

        return { [cssProperty]: parsedValue };
    }
}
