import { Theme } from "@soperio/theming";
import { colorize } from "../PropTypes/Color";
import { opacity } from "../PropTypes/Opacity";
import { css, StyleProps } from "./utils";

export function shadow(value: any, theme: Theme, direction: boolean, darkMode: boolean)
{
    return {
      ...css("--so-shadow", "effects.boxShadow")(value, theme, direction, darkMode),
      boxShadow: "var(--so-ring-offset-shadow, 0 0 #0000), var(--so-ring-shadow, 0 0 #0000), var(--so-shadow, 0 0 #0000)"
  }
}

export const EffectsMapping: StyleProps =
{
  shadow: shadow,
  shadowColor: colorize("--so-shadowed-color", ""),
  opacity: opacity("opacity"),
  mixBlend: css("mixBlendMode"),
  bgBlend: css("backgroundBlendMode")
}
