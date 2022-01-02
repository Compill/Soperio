import { css, cssValueFn, OrString, StyleProps } from "./utils";

export interface SVGSoperioProps 
{
    fillCurrent?: boolean,
    strikeCurrent?: boolean,
    strokeWidth?: OrString<"0" | "1" | "2 "> | number
}

export const SVGMapping: StyleProps =
{
    fillCurrent: cssValueFn("fill", "currentColor"),
    strokeCurrent: cssValueFn("stroke", "currentColor"),
    strokeWidth: css("stroke-width"),
};