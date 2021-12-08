import { Breakpoints } from "../Breakpoints";
import { SpacingPositiveScale } from "./Spacing";
import { getStyleConfig, OrString, StyleFn, StyleProp, StyleProps } from "./utils";

export type WidthScale = 
    "1/2" 
    | "1/3" 
    | "2/3" 
    | "1/4" 
    | "2/4" 
    | "3/4" 
    | "1/5" 
    | "2/5" 
    | "3/5" 
    | "4/5" 
    | "1/6" 
    | "2/6" 
    | "3/6" 
    | "4/6" 
    | "5/6" 
    | "1/12" 
    | "2/12" 
    | "3/12" 
    | "4/12" 
    | "5/12" 
    | "6/12" 
    | "7/12" 
    | "8/12" 
    | "9/12" 
    | "10/12"
    | "11/12"
    | "auto"
    | "full"
    | "screen"
    | "min"
    | "max";

export type HeightScale =
    "1/2"
    | "1/3"
    | "2/3"
    | "1/4"
    | "2/4"
    | "3/4"
    | "1/5"
    | "2/5"
    | "3/5"
    | "4/5"
    | "1/6"
    | "2/6"
    | "3/6"
    | "4/6"
    | "5/6"
    | "auto"
    | "full"
    | "screen";

type ScreenBreakpoints = `screen-${Breakpoints}`;

export interface Sizing {
    w?: false | OrString<SpacingPositiveScale | WidthScale>,
    h?: false | OrString<SpacingPositiveScale | HeightScale>,
    minW?: false | OrString<"0" | "full" | "min" | "max">,
    minH?: false | OrString<"0" | "full" | "screen">,
    maxW?: false | OrString<"0" | "none" | "xs" | Breakpoints | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "full" | "min" | "max" | "prose" | ScreenBreakpoints>,
    maxH?: false | OrString<"full" | "screen" | SpacingPositiveScale>,
}

function processValue(cssProperty: string, configProperty:string): StyleFn
{
    return (value: StyleProp) => 
    {
        if (!value || value === true)
            return {}

        let parsedValue = value;

        const configValue = getStyleConfig(configProperty, value);

        if (configValue !== undefined)
        {
            parsedValue = configValue;
        }
        else if (typeof value === "string" && value.includes("/"))
        {
            const dividers = value.split("/");
            const result = (Number(dividers[0]) / Number(dividers[1]) * 100).toPrecision(4);
            parsedValue = `${result}%`;
        }

        return { [cssProperty]: parsedValue };
    }
}
export const SizingMapping: StyleProps = {
    w: processValue("width", "sizing.width"),
    h: processValue("height", "sizing.height"),
    minW: processValue("min-width", "sizing.minWidth"),
    minH: processValue("min-height", "sizing.minHeight"),
    maxW: processValue("max-width", "sizing.maxWidth"),
    maxH: processValue("max-height", "sizing.maxHeight"),
}