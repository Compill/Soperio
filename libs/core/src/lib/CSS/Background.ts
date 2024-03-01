import { Theme } from "@soperio/theming";
import { colorize } from "../PropTypes/Color";
import { opacity } from "../PropTypes/Opacity";
import { css, StyleProps } from "./utils";

function bgPosition(value: any, theme: Theme, direction: boolean, darkMode: boolean)
{
  let parsedValue = value;

  if (value === "start")
    parsedValue = direction ? "left" : "right";
  else if (value === "start-top")
    parsedValue = direction ? "left top" : "right top";
  else if (value === "start-bottom")
    parsedValue = direction ? "left bottom" : "right bottom";
  else if (value === "end")
    parsedValue = direction ? "right" : "left";
  else if (value === "end-top")
    parsedValue = direction ? "right top" : "left top";
  else if (value === "end-bottom")
    parsedValue = direction ? "right bottom" : "left bottom";

  return css("backgroundPosition")(parsedValue, theme, direction, darkMode)
}

const LINEAR_GRADIENT = "linear-gradient(var(--so-gradient-dir, to right), var(--so-gradient-from, transparent), var(--so-gradient-via,) var(--so-gradient-to, transparent))"
const RADIAL_GRADIENT = "radial-gradient(var(--so-gradient-from, transparent), var(--so-gradient-via,) var(--so-gradient-to, transparent))"
const CONIC_GRADIENT = "conic-gradient(var(--so-gradient-from, transparent), var(--so-gradient-via,) var(--so-gradient-to, transparent))"

const gradients = {
  linear : LINEAR_GRADIENT,
  radial : RADIAL_GRADIENT,
  conic : CONIC_GRADIENT,
}

function bgGradient(value: any)
{
  return {
    backgroundImage: gradients[value] ?? LINEAR_GRADIENT
  }
}

function bgGradientVia(value: any, theme: Theme, direction: boolean, darkMode: boolean)
{
  // Little trick here: add a coma so that if no `via` property is passed
  // this var is ignored

  const css = colorize("--so-gradient-via")(value, theme, direction, darkMode)
  css["--so-gradient-via"] = `${css["--so-gradient-via"]},`

  return css
}

export const BackgroundMapping: StyleProps = {
  bgAtt: css("backgroundAttachment"),
  bgClip: css("backgroundClip"),
  bgColor: colorize("backgroundColor", "--so-bg-opacity"),
  bgOpacity: opacity("--so-bg-opacity"),
  bgImage: css("backgroundImage"),
  bgOrigin: css("backgroundOrigin"),
  bgPosition: bgPosition,
  bgRepeat: css("backgroundRepeat", undefined, "repeat"),
  bgSize: css("backgroundSize"),
  bgGradient: bgGradient,
  /**
   * Only working if bgGradient = linear
   */
  bgGradientDir: css("--so-gradient-dir"),
  bgGradientFrom: colorize("--so-gradient-from"),
  bgGradientVia: bgGradientVia,
  bgGradientTo: colorize("--so-gradient-to"),
}
