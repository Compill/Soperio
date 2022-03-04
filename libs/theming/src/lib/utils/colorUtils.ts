
const HEX = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
const SHORT_HEX = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;

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