import { getDirection, getThemeStyle } from "@soperio/theming";
import { colorize } from "../PropTypes/Color";
import { opacity } from "../PropTypes/Opacity";
import { css, cssValueFn, direction, Style, StyleProps } from "./utils";

// TODO If we use divideX or divideY and divideColor at the same time
// "> * + *" will be overwritten by the latter
function divideX(value: any): Style
{
  const dimension = value === true ? "1px" : (getThemeStyle("border.width", value) || value)

  return {
    "--so-divide-x-reverse": 0,
    "> * + *":
    {
      [getDirection() ? "border-right-width" : "border-left-width"]: `calc(${dimension} * var(--so-divide-x-reverse)) !important`,
      [getDirection() ? "border-left-width" : "border-right-width"]: `calc(${dimension} * calc(1 - var(--so-divide-x-reverse))) !important`
    }
  }
}

function divideY(value: any): Style
{
  const dimension = value === true ? "1px" : (getThemeStyle("border.width", value) || value)

  return {
    "--so-divide-y-reverse": 0,
    "> * + *":
    {
      "border-top-width": `calc(${dimension} * calc(1 - var(--so-divide-y-reverse))) !important`,
      "border-bottom-width": `calc(${dimension} * var(--so-divide-y-reverse)) !important`
    }
  };
}

function divideColor(value: any): Style
{
  return {
    "--so-divide-opacity": 1,
    "> * + *":
    {
      ...colorize("border-color", "--so-divide-opacity")(value)
    }
  };
}

function borderStartColor(value: any)
{
  return colorize(getDirection() ? "border-left-color" : "border-right-color", "--so-border-opacity")(value)
}

function borderEndColor(value: any)
{
  return colorize(getDirection() ? "border-right-color" : "border-left-color", "--so-border-opacity")(value)
}

function outline(value: any): Style
{
  if (value === "none" || !value)
    return {
      "outline-style": "none"
    }

  const parsedValue = getThemeStyle("border.width", value)!;

  return {
    "outline-style": "solid",
    "outline-width": parsedValue,
  };
}

function ringWidth(value: any)
{
  // return {
  //   // "box-shadow": "var(--so-ring-inset) 0 0 0 calc(var(--so-ring-width) + var(--so-ring-offset-width, 0)) var(--so-ring-color, rgb(59 130 246/0.5));",
  //   "box-shadow": "var(--so-ring-inset,) 0 0 0 calc(var(--so-ring-width) + var(--so-ring-offset-width, 0px)) var(--so-ring-color, #FEFF00);",
  //   ...css("--so-ring-width", "border.width")(value)
  // }

  return {
    "--so-ring-offset-shadow": "var(--so-ring-inset,) 0 0 0 var(--so-ring-offset-width, 0px) var(--so-ring-offset-color, white)",
    "--so-ring-shadow": "var(--so-ring-inset,) 0 0 0 calc(var(--so-ring-width) + var(--so-ring-offset-width, 0px)) var(--so-ring-color)",
    ...css("--so-ring-width", "border.width")(value),
    "box-shadow": "var(--so-ring-offset-shadow, 0 0 #0000), var(--so-ring-shadow, 0 0 #0000), var(--so-shadow, 0 0 #0000)"
  }
}

function ringInset(value: any)
{
  if (value)
    return { "--so-ring-inset": "inset" }

  return {}
}

export const BorderMapping: StyleProps =
{
  rounded: css(["border-top-left-radius", "border-top-right-radius", "border-bottom-left-radius", "border-bottom-right-radius"], "border.radius"),
  roundedT: css(["border-top-left-radius", "border-top-right-radius"], "border.radius"),
  roundedB: css(["border-bottom-left-radius", "border-bottom-right-radius"], "border.radius"),
  roundedS: direction(["border-top-left-radius", "border-bottom-left-radius"], ["border-top-right-radius", "border-bottom-right-radius"], "border.radius"),
  roundedE: direction(["border-top-right-radius", "border-bottom-right-radius"], ["border-top-left-radius", "border-bottom-left-radius"], "border.radius"),
  roundedTS: direction("border-top-left-radius", "border-top-right-radius", "border.radius"),
  roundedTE: direction("border-top-right-radius", "border-top-left-radius", "border.radius"),
  roundedBS: direction("border-bottom-left-radius", "border-bottom-right-radius", "border.radius"),
  roundedBE: direction("border-bottom-right-radius", "border-bottom-left-radius", "border.radius"),
  border: css(["border-top-width", "border-bottom-width", "border-left-width", "border-right-width"], "border.width"),
  borderT: css("border-top-width", "border.width"),
  borderB: css("border-bottom-width", "border.width"),
  borderS: direction("border-left-width", "border-right-width", "border.width"),
  borderE: direction("border-right-width", "border-left-width", "border.width"),
  borderColor: colorize("border-color", "--so-border-opacity"),
  borderTColor: colorize("border-top-color", "--so-border-opacity"),
  borderBColor: colorize("border-bottom-color", "--so-border-opacity"),
  borderSColor: borderStartColor,
  borderEColor: borderEndColor,
  borderOpacity: opacity("--so-border-opacity"),
  borderStyle: css("border-style"),
  divideX: divideX,
  divideY: divideY,
  divideXReverse: cssValueFn("--so-divide-x-reverse", 1),
  divideYReverse: cssValueFn("--so-divide-y-reverse", 1),
  divideColor: divideColor,
  divideOpacity: opacity("--so-divide-opacity"),
  divideStyle: css("border-style"),
  outline: outline,
  outlineOffset: css("outline-offset", "border.width"),
  outlineColor: colorize("outline-color", "--so-outline-opacity"),
  outlineOpacity: opacity("--so-outline-opacity"),
  ring: ringWidth,
  ringColor: colorize("--so-ring-color"),
  ringInset: ringInset,
  ringOffset: css("--so-ring-offset-width", "border.width"),
  ringOffsetColor: colorize("--so-ring-offset-color"),
};
