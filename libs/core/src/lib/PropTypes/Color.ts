import { getThemeStyle, StyleFn, StyleProp } from "../CSS/utils";
import { getDarkMode } from "../hooks/useDarkMode";

// TODO Color types should contain all theme colors + all root colors + an exemple color like "any ARGB/RGB color like #FF36D9"
export type Color = string

function getColor(value:string)
{
  if (getDarkMode())
  {
    const darkColor = getThemeStyle(["darkModeOverride", "colors"], value)

    if (darkColor)
      return darkColor
  }

  return getThemeStyle("colors", value)
;
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

export function transformColorToGlobalVar(color: string): string | false
{
    const hex = color
        .replace(SHORT_HEX, (_, r, g, b, a) => ['#', r, r, g, g, b, b, a ? a + a : ''].join(''))
        .match(HEX);

    if (hex !== null)
    {
        const r = parseInt(hex[1], 16);
        const g = parseInt(hex[2], 16);
        const b = parseInt(hex[3], 16);
        return `${r}, ${g}, ${b}`;
    }

    return false;
}

const HEX = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
const SHORT_HEX = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
const VALUE = `(?:\\d+|\\d*\\.\\d+)%?`;
const SEP = `(?:\\s*,\\s*|\\s+)`;
const ALPHA_SEP = `\\s*[,/]\\s*`;
const RGB_HSL = new RegExp(
    `^(rgb|hsl)a?\\(\\s*(${VALUE})${SEP}(${VALUE})${SEP}(${VALUE})(?:${ALPHA_SEP}(${VALUE}))?\\s*\\)$`
);

export function parseColor(value: string, alphaCSSVarName?: string):string
{
    if (typeof value !== 'string')
    {
        return "invalidcolor";
    }

    value = value.trim();
    if (value === 'transparent')
    {
        return value;
        // return { mode: 'rgb', color: ['0', '0', '0'], alpha: '0' };
    }

    const alpha = alphaCSSVarName ? `var(${alphaCSSVarName}, 1)` : 1

    if (value.startsWith("root."))
    {
        // Global vars (from theme's rootColors) are defined
        // like this: --so-my-var: 255, 0, 255 // That would be equal to #FF00FF
        // Although this value (255, 0, 255) is not valid per se,
        // we use it in the rgba function as values for r, g and b.
        // We just have to add the alpha value (from the opacity var)
        // and we're done!

        value = `var(--so-${value.substring(5)})` // Remove "root." prefix, and convert to CSS var
        return `rgba(${value}, ${alpha})`
    }

    const hex = value
        .replace(SHORT_HEX, (_, r, g, b, a) => ['#', r, r, g, g, b, b, a ? a + a : ''].join(''))
        .match(HEX);

    if (hex !== null)
    {
        const r = parseInt(hex[1], 16)
        const g = parseInt(hex[2], 16)
        const b = parseInt(hex[3], 16)
        const a = hex[4] ? (parseInt(hex[4], 16) / 255).toPrecision(2).toString() : alpha
        return `rgba(${r}, ${g}, ${b}, ${a})`
    }

    const match = value.match(RGB_HSL);

    if (match !== null)
    {
        const h = match[2]
        const s = match[3]
        const l = match[4]
        const a = match[5] ? match[5] : alpha;
        return `hsl(${h}, ${s}, ${l}, ${a})`
    }

    return value;
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
