
const HEX = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
const SHORT_HEX = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
const VALUE = `(?:\\d+|\\d*\\.\\d+)%?`;
const SEP = `(?:\\s*,\\s*|\\s+)`;
const ALPHA_SEP = `\\s*[,/]\\s*`;
const RGB = new RegExp(`^(rgb)a?\\(\\s*(${VALUE})${SEP}(${VALUE})${SEP}(${VALUE})(?:${ALPHA_SEP}(${VALUE}))?\\s*\\)$`);
const HSL = new RegExp(`^(hsl)a?\\(\\s*(${VALUE})${SEP}(${VALUE})${SEP}(${VALUE})(?:${ALPHA_SEP}(${VALUE}))?\\s*\\)$`);


export function parseColor(value: string, alphaCSSVarName?: string): string
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

    if (value.startsWith("--"))
    {
        // Global vars (from theme's rootColors) are defined
        // like this: --so-my-var: 255, 0, 255 // That would be equal to #FF00FF
        // Although this value (255, 0, 255) is not valid per se,
        // we use it in the rgba function as values for r, g and b.
        // We just have to add the alpha value (from the opacity var)
        // and we're done!

        value = `var(--so-${value.substring(2)})` // Remove "--" prefix, and convert to CSS var
        return `rgba(${value}, ${alpha})`
    }
    else if (value.startsWith("var("))
    {
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

    const rgb = value.match(RGB);

    if (rgb !== null)
    {
        const h = rgb[2]
        const s = rgb[3]
        const l = rgb[4]
        const a = rgb[5] ? rgb[5] : alpha;
        return `rgba(${h}, ${s}, ${l}, ${a})`
    }

    const match = value.match(HSL);

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