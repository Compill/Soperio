import { getDirection } from "@soperio/theming";
import { colorize } from "../PropTypes/Color";
import { opacity } from "../PropTypes/Opacity";
import { css, StyleProps } from "./utils";

function bgPosition(value: any)
{
  let parsedValue = value;

  if (value === "start")
    parsedValue = getDirection() ? "left" : "right";
  else if (value === "start-top")
    parsedValue = getDirection() ? "left top" : "right top";
  else if (value === "start-bottom")
    parsedValue = getDirection() ? "left bottom" : "right bottom";
  else if (value === "end")
    parsedValue = getDirection() ? "right" : "left";
  else if (value === "end-top")
    parsedValue = getDirection() ? "right top" : "left top";
  else if (value === "end-bottom")
    parsedValue = getDirection() ? "right bottom" : "left bottom";

  return css("background-position")(parsedValue)
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
    "background-image": gradients[value] ?? LINEAR_GRADIENT
  }
}

function bgGradientDir(value: any)
{
  return {
    "--so-gradient-dir": value,
  }
}

function bgGradientFrom(value: any)
{
  return {
    ...colorize("--so-gradient-from")(value),
  }
}


function bgGradientVia(value: any)
{
  // Little trick here: add a coma so that if no `via` property is passed
  // this var is ignored

  const css = colorize("--so-gradient-via")(value)
  css["--so-gradient-via"] = `${css["--so-gradient-via"]},`

  return css
}

function bgGradientTo(value: any)
{
  return {
    ...colorize("--so-gradient-to")(value),
  }
}

export const BackgroundMapping: StyleProps = {
  bgAtt: css("background-attachment"),
  bgClip: css("background-clip"),
  bgColor: colorize("background-color", "--so-bg-opacity"),
  bgOpacity: opacity("--so-bg-opacity"),
  bgImage: css("background-image"),
  bgOrigin: css("background-origin"),
  bgPosition: bgPosition,
  bgRepeat: css("background-repeat", undefined, "repeat"),
  bgSize: css("background-size"),
  bgGradient: bgGradient,
  /**
   * Only working if bgGradient = linear
   */
  bgGradientDir: bgGradientDir,
  bgGradientFrom: bgGradientFrom,
  bgGradientVia: bgGradientVia,
  bgGradientTo: bgGradientTo,
}
