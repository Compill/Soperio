import { css, cssValueFn, StyleProps } from "./utils";

export const SVGMapping: StyleProps =
{
    fillCurrent: cssValueFn("fill", "currentColor"),
    strokeCurrent: cssValueFn("stroke", "currentColor"),
    strokeWidth: css("strokeWidth"),
};
