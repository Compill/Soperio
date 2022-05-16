import { colorize } from "../PropTypes/Color";
import { opacity } from "../PropTypes/Opacity";
import { css, Style, StyleProps } from "./utils";

export function shadow(): (value: any) => Style
{
  return (value: any) =>
  {
    return {
      ...css("--so-shadow", "effects.boxShadow")(value),
      "box-shadow": "var(--so-ring-offset-shadow, 0 0 #0000), var(--so-ring-shadow, 0 0 #0000), var(--so-shadow, 0 0 #0000)"
    }
  }
}

export const EffectsMapping: StyleProps =
{
  shadow: shadow,
  shadowColor: colorize("--so-shadowed-color", ""),
  opacity: opacity("opacity"),
  mixBlend: css("mix-blend-mode"),
  bgBlend: css("background-blend-mode")
}
