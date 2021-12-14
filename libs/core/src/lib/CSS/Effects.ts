import { Breakpoints } from "../Breakpoints";
import { opacity } from "../PropTypes/Opacity";
import { css, Style, StyleProps } from "./utils";

type BlendMode = "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity"

export type Opacity = "0" | "5" | "10" | "20" | "25" | "30" | "40" | "50" | "60" | "70" | "75" | "80" | "90" | "95" | "100"

export interface Effects
{
    shadow?: true | false | "sm" | Breakpoints | "inner" | "none",
    opacity?: false | Opacity,
    mixBlend?: false | BlendMode,
    bgBlend?: false | BlendMode,
}

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
    opacity: opacity("opacity"),
    mixBlend: css("mix-blend-mode"),
    bgBlend: css("background-blend-mode")
}
