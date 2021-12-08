import { Style } from "../CSS/utils";

export function parseSize(value :string | number):string
{
    return ""
}

export function size(cssProperty: string): (value: string | number) => Style
{
    return (size: string | number) =>
    {
        // TODO Parse size
        const parsedSize = size;

        return {
            [cssProperty]: parsedSize
        };
    };
}

export function sizes(...cssProperty: string[]): (value: string | number) => Style
{
    return (size: string | number) =>
    {
        // TODO Parse size
        const parsedSize = size;

        const res:Style = {}
        cssProperty.forEach(prop => res[prop] = parsedSize)

        return res;
    };
}
