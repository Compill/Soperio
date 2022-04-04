import { opacity } from "../PropTypes/Opacity";
import { css, Style, StyleProps } from "./utils";

export function shadow(themeProperty?: string): (value: any) => Style
{
    return (value: any) =>
    {
        const style = css("--so-shadow", "effects.boxShadow")(value);
        style["box-shadow"] = "var(--so-ring-offset-shadow, 0 0 #0000), var(--so-ring-shadow, 0 0 #0000), var(--so-shadow)";
        return style;
    };
}

export const EffectsMapping: StyleProps =
{
    shadow: shadow("effects.boxShadow"),
    shadowColor: css("--so-shadow-color"),
    opacity: opacity("opacity"),
    mixBlend: css("mix-blend-mode"),
    bgBlend: css("background-blend-mode")
}
