import { BoxShadow } from "../CSSTypes";

type BlendMode = "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity"

export type Opacity = "0" | "5" | "10" | "20" | "25" | "30" | "40" | "50" | "60" | "70" | "75" | "80" | "90" | "95" | "100"

export interface Effects
{
    shadow?: true | false | BoxShadow,
    opacity?: false | Opacity,
    mixBlend?: false | BlendMode,
    bgBlend?: false | BlendMode,
}
