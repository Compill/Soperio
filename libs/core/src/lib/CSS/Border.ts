import { getThemeStyle, Theme } from "@soperio/theming";
import { colorize } from "../PropTypes/Color";
import { opacity } from "../PropTypes/Opacity";
import { spacing } from "./Spacing";
import { css, cssValueFn, direction, Style, StyleProp, StyleProps } from "./utils";


function getBorderValue(value: any, theme: Theme)
{
  let parsedValue = getThemeStyle(theme, "border.width", value === true ? "default" : value)

  if (parsedValue === undefined)
    parsedValue = getThemeStyle(theme, "spacing.positive", value === true ? "default" : value)

  return parsedValue ?? value
}

function divideX(value: any, theme: Theme, direction: boolean, darkMode: boolean): Style
{
  const dimension = getBorderValue(value, theme)

  return {
    "--so-divide-x-reverse": 0,
    "> * + *":
    {
      [direction ? "border-right-width" : "border-left-width"]: `calc(${dimension} * var(--so-divide-x-reverse)) !important`,
      [direction ? "border-left-width" : "border-right-width"]: `calc(${dimension} * calc(1 - var(--so-divide-x-reverse))) !important`
    }
  }
}

function divideY(value: any, theme: Theme, direction: boolean, darkMode: boolean): Style
{
  const dimension = value === true ? "1px" : getBorderValue(value, theme)

  return {
    "--so-divide-y-reverse": 0,
    "> * + *":
    {
      "border-top-width": `calc(${dimension} * calc(1 - var(--so-divide-y-reverse))) !important`,
      "border-bottom-width": `calc(${dimension} * var(--so-divide-y-reverse)) !important`
    }
  };
}

function divideColor(value: any, theme: Theme, direction: boolean, darkMode: boolean): Style
{
  return {
    "--so-divide-opacity": 1,
    "> * + *":
    {
      ...colorize("border-color", "--so-divide-opacity")(value, theme, direction, darkMode)
    }
  };
}

function borderStartColor(value: any, theme: Theme, direction: boolean, darkMode: boolean)
{
  return colorize(direction ? "border-left-color" : "border-right-color", "--so-border-opacity")(value, theme, direction, darkMode)
}

function borderEndColor(value: any, theme: Theme, direction: boolean, darkMode: boolean)
{
  return colorize(direction ? "border-right-color" : "border-left-color", "--so-border-opacity")(value, theme, direction, darkMode)
}

function outline(value: any, theme: Theme, direction: boolean, darkMode: boolean): Style
{
  if (value === "none" || !value)
    return {
      "outline-style": "none"
    }

  return {
    "outline-style": "solid",
    ...border("outline-width")(value, theme, direction, darkMode)
  };
}

function ringWidth(value: any, theme: Theme, direction: boolean, darkMode: boolean)
{
  return {
    "--so-ring-offset-shadow": "var(--so-ring-inset,) 0 0 0 var(--so-ring-offset-width, 0px) var(--so-ring-offset-color, white)",
    "--so-ring-shadow": "var(--so-ring-inset,) 0 0 0 calc(var(--so-ring-width) + var(--so-ring-offset-width, 0px)) var(--so-ring-color)",
    ...border("--so-ring-width")(value, theme, direction, darkMode),
    "box-shadow": "var(--so-ring-offset-shadow, 0 0 #0000), var(--so-ring-shadow, 0 0 #0000), var(--so-shadow, 0 0 #0000)"
  }
}

function ringInset(value: any)
{
  if (value)
    return { "--so-ring-inset": "inset" }

  return {}
}

function border(cssProperty: string | string[])
{
  return (value: StyleProp, theme: Theme, direction: boolean, darkMode: boolean) =>
  {
    if (!value || value === undefined)
      return {}

    let parsedValue: string | number | undefined = getThemeStyle(theme, "border.width", value === true ? "default" : value);

    if (parsedValue === undefined)
    {
      const styles = spacing(cssProperty, "spacing.positive")(value === true ? "default" : value, theme, direction, darkMode)

      if (styles && Object.keys(styles).length > 0)
        return styles
    }

    if (parsedValue === undefined)
      parsedValue = value as string | number

    if (typeof cssProperty === "string")
      return { [cssProperty]: parsedValue as string | number };

    const style: Style = {};
    cssProperty.forEach(property => style[property] = parsedValue as string | number);
    return style;
  };
}

function directionBorder(cssPropertyStart: string, cssPropertyEnd: string)
{
  return (value: StyleProp, theme: Theme, direction: boolean, darkMode: boolean) =>
  {
    const cssProperty = direction ? cssPropertyStart : cssPropertyEnd

    return border(cssProperty)(value, theme, direction, darkMode)
  };
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
  border: border(["border-top-width", "border-bottom-width", "border-left-width", "border-right-width"]),
  borderT: border("border-top-width"),
  borderB: border("border-bottom-width"),
  borderS: directionBorder("border-left-width", "border-right-width"),
  borderE: directionBorder("border-right-width", "border-left-width"),
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
  outlineOffset: border("outline-offset"),
  outlineColor: colorize("outline-color", "--so-outline-opacity"),
  outlineOpacity: opacity("--so-outline-opacity"),
  ring: ringWidth,
  ringColor: colorize("--so-ring-color"),
  ringInset: ringInset,
  ringOffset: border("--so-ring-offset-width"),
  ringOffsetColor: colorize("--so-ring-offset-color"),
};
