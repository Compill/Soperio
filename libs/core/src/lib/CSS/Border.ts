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
      [direction ? "borderRightWidth" : "borderLeftWidth"]: `calc(${dimension} * var(--so-divide-x-reverse)) !important`,
      [direction ? "borderLeftWidth" : "borderRightWidth"]: `calc(${dimension} * calc(1 - var(--so-divide-x-reverse))) !important`
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
      borderTopWidth: `calc(${dimension} * calc(1 - var(--so-divide-y-reverse))) !important`,
      borderBottomWidth: `calc(${dimension} * var(--so-divide-y-reverse)) !important`
    }
  };
}

function divideColor(value: any, theme: Theme, direction: boolean, darkMode: boolean): Style
{
  return {
    "--so-divide-opacity": 1,
    "> * + *":
    {
      ...colorize("borderColor", "--so-divide-opacity")(value, theme, direction, darkMode)
    }
  };
}

function divideOpacity(value: any, theme: Theme, direction: boolean, darkMode: boolean): Style
{
  return {
    "> * + *":
    {
      ...opacity("--so-divide-opacity")(value, theme, direction, darkMode),
    }
  };
}

function borderStartColor(value: any, theme: Theme, direction: boolean, darkMode: boolean)
{
  return colorize(direction ? "borderLeftColor" : "borderRighColor", "--so-border-opacity")(value, theme, direction, darkMode)
}

function borderEndColor(value: any, theme: Theme, direction: boolean, darkMode: boolean)
{
  return colorize(direction ? "borderRightColor" : "borderLeftColor", "--so-border-opacity")(value, theme, direction, darkMode)
}

function outline(value: any, theme: Theme, direction: boolean, darkMode: boolean): Style
{
  if (value === "none" || !value)
    return {
      outlineStyle: "none"
    }

  return {
    outlineStyle: "solid",
    ...border("outlineWidth")(value, theme, direction, darkMode)
  };
}

function ringWidth(value: any, theme: Theme, direction: boolean, darkMode: boolean)
{
  return {
    "--so-ring-offset-shadow": "var(--so-ring-inset,) 0 0 0 var(--so-ring-offset-width, 0px) var(--so-ring-offset-color, white)",
    "--so-ring-shadow": "var(--so-ring-inset,) 0 0 0 calc(var(--so-ring-width) + var(--so-ring-offset-width, 0px)) var(--so-ring-color)",
    ...border("--so-ring-width")(value, theme, direction, darkMode),
    boxShadow: "var(--so-ring-offset-shadow, 0 0 #0000), var(--so-ring-shadow, 0 0 #0000), var(--so-shadow, 0 0 #0000)"
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
  rounded: css(["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"], "border.radius"),
  roundedT: css(["borderTopLeftRadius", "borderTopRightRadius"], "border.radius"),
  roundedB: css(["borderBottomLeftRadius", "borderBottomRightRadius"], "border.radius"),
  roundedS: direction(["borderTopLeftRadius", "borderBottomLeftRadius"], ["borderTopRightRadius", "borderBottomRightRadius"], "border.radius"),
  roundedE: direction(["borderTopRightRadius", "borderBottomRightRadius"], ["borderTopLeftRadius", "borderBottomLeftRadius"], "border.radius"),
  roundedTS: direction("borderTopLeftRadius", "borderTopRightRadius", "border.radius"),
  roundedTE: direction("borderTopRightRadius", "borderTopLeftRadius", "border.radius"),
  roundedBS: direction("borderBottomLeftRadius", "borderBottomRightRadius", "border.radius"),
  roundedBE: direction("borderBottomRightRadius", "borderBottomLeftRadius", "border.radius"),
  border: border(["borderTopWidth", "borderBottomWidth", "borderLeftWidth", "borderRightWidth"]),
  borderT: border("borderTopWidth"),
  borderB: border("borderBottomWidth"),
  borderS: directionBorder("borderLeftWidth", "borderRightWidth"),
  borderE: directionBorder("borderRightWidth", "borderLeftWidth"),
  borderColor: colorize("borderColor", "--so-border-opacity"),
  borderTColor: colorize("borderTopColor", "--so-border-opacity"),
  borderBColor: colorize("borderBottomColor", "--so-border-opacity"),
  borderSColor: borderStartColor,
  borderEColor: borderEndColor,
  borderOpacity: opacity("--so-border-opacity"),
  borderStyle: css("borderStyle"),
  divideX: divideX,
  divideY: divideY,
  divideXReverse: cssValueFn("--so-divide-x-reverse", 1),
  divideYReverse: cssValueFn("--so-divide-y-reverse", 1),
  divideColor: divideColor,
  divideOpacity: divideOpacity,
  divideStyle: css("borderStyle"),
  outline: outline,
  outlineOffset: border("outlineOffset"),
  outlineColor: colorize("outlineColor", "--so-outline-opacity"),
  outlineOpacity: opacity("--so-outline-opacity"),
  ring: ringWidth,
  ringColor: colorize("--so-ring-color"),
  ringInset: ringInset,
  ringOffset: border("--so-ring-offset-width"),
  ringOffsetColor: colorize("--so-ring-offset-color"),
};
