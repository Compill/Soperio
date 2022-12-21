import { BoxShadow, Color, Opacity } from "../CSSTypes";

type BlendMode = "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity"

export interface Effects
{
    shadow?: true | false | BoxShadow,
    shadowColor: Color,
    opacity?: Opacity,
    mixBlend?: false | BlendMode,
    bgBlend?: false | BlendMode,
}
