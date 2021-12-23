import { getThemeStyle, StyleFn, StyleProp } from "../CSS/utils";
import { getDarkMode } from "../hooks/useDarkMode";
import { parseColor } from "../utils/colorUtils";

// TODO Color types should contain all theme colors + all root colors + an exemple color like "any ARGB/RGB color like #FF36D9"
export type Color = string


function getColor(value: string)
{
    if (getDarkMode())
    {
        const darkColor = getThemeStyle(["darkModeOverride", "colors"], value)

        if (darkColor)
            return darkColor
    }

    return getThemeStyle("colors", value);
}

export function colorize(cssProperty: string, alphaVarName: string): StyleFn
{
    return (value: StyleProp) =>
    {
        if (!value || value === true || typeof value === "number")
            return {};

        let parsedColor = getColor(value) || value

        parsedColor = parseColor(parsedColor, alphaVarName)

        return {
            [alphaVarName]: 1,
            [cssProperty]: parsedColor
        };
    }
}

// export function parseColor(value: string, alphaCSSVarName: string)
// {
//     if (typeof value !== 'string')
//     {
//         return null;
//     }

//     value = value.trim();
//     if (value === 'transparent')
//     {
//         return { mode: 'rgb', color: ['0', '0', '0'], alpha: '0' };
//     }

//     // TODO get color CSS vars
//     // for values like var(--color-light)

//     // TODO get color from theme

//     // if (value in namedColors)
//     // {
//     //     return { mode: 'rgb', color: namedColors[value].map((v) => v.toString()) };
//     // }

//     // TODO How to manage variant/responsive Opacity without struggling in JS
//     // => All colors must translate to rgb(r, g, b, alpha) or hsl(h,s , l, alpha)
//     // => `alpha` should be a parameter of this function and and of type string
//     // So calling parseColor("#FFFF00", "--so-bg-color") should return rgb(255, 255, 0, var(--so-bg-color))

//     let hex = value
//         .replace(SHORT_HEX, (_, r, g, b, a) => ['#', r, r, g, g, b, b, a ? a + a : ''].join(''))
//         .match(HEX);

//     if (hex !== null)
//     {
//         return {
//             mode: 'rgb',
//             color: [parseInt(hex[1], 16), parseInt(hex[2], 16), parseInt(hex[3], 16)].map((v) =>
//                 v.toString()
//             ),
//             alpha: hex[4] ? (parseInt(hex[4], 16) / 255).toString() : undefined,
//         };
//     }

//     let match = value.match(RGB_HSL);

//     if (match !== null)
//     {
//         return {
//             mode: match[1],
//             color: [match[2], match[3], match[4]].map((v) => v.toString()),
//             alpha: match[5]?.toString?.(),
//         };
//     }

//     return null;
// }
