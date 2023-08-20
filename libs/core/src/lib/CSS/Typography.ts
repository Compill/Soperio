import { getThemeStyle, Theme } from "@soperio/theming";
import { colorize } from "../PropTypes/Color";
import { opacity } from "../PropTypes/Opacity";
import { css, cssValue, Style, StyleProps } from "./utils";

function italic(value: any): Style
{
  if (value)
  {
    // Only set italic if value == true
    return {
      fontStyle: value === "no" ? "normal" : "italic"
    }
  }

  return {}
}

function textOverflow(value: any): Style
{
  if (value === "truncate")
  {
    return {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    };
  }

  return cssValue("textOverflow", value);
}

function wordBreak(value: any): Style
{
  if (value === "normal")
  {
    return {
      overflowWrap: "normal",
      wordBreak: "normal",
    };
  }

  return cssValue("wordBreak", "break-" + value);
}

function textAlign(value: any, theme: Theme, direction: boolean, darkMode: boolean)
{
  let parsedValue = value;

  if (value === "start")
    parsedValue = direction ? "left" : "right";
  else if (value === "end")
    parsedValue = direction ? "right" : "left";

  return css("textAlign")(parsedValue, theme, direction, darkMode);
}

function placeholderColor(value: any, theme: Theme, direction: boolean, darkMode: boolean)
{
  return {
    "&::placeholder": {
      ...colorize("color", "--so-placeholder-opacity")(value, theme, direction, darkMode)
    }
  }
}

function placeholderOpacity(value: any, theme: Theme, direction: boolean, darkMode: boolean)
{
  return {
    "&::placeholder": {
      ...opacity("--so-placeholder-opacity")(value, theme, direction, darkMode)
    }
  }
}

function textShadow(value: any, theme: Theme, direction: boolean, darkMode: boolean)
{
  let parsedValue = value;

  if (value === "none")
  {
    parsedValue = undefined
  }
  else if (typeof value === "number")
  {
    parsedValue = value + "px"
  }
  else
  {
    parsedValue = getThemeStyle(theme, "typography.textShadow", value);

    if (!parsedValue)
      parsedValue = getThemeStyle(theme, "spacing.positiveNegative", value);
  }

  return {
    "--so-text-shadow-size": parsedValue,
    textShadow: "var(--so-text-shadow-size, 1px) var(--so-text-shadow-size, 1px) var(--so-text-shadow-blur, 0px) var(--so-text-shadow-color, #00000099)"
  }
}

function textShadowBlur(value: any, theme: Theme, direction: boolean, darkMode: boolean)
{
  let parsedValue = value;

  if (value === "none")
  {
    parsedValue = undefined
  }
  else if (typeof value === "number")
  {
    parsedValue = value + "px"
  }
  else
  {
    parsedValue = getThemeStyle(theme, "typography.textShadowBlur", value);

    if (!parsedValue)
      parsedValue = getThemeStyle(theme, "spacing.positiveNegative", value);
  }

  return {
    "--so-text-shadow-blur": parsedValue
  }
}


export const TypographyMapping: StyleProps =
{
  font: css("fontFamily", "typography.font"),
  textSize: css("fontSize", "typography.textSize"),
  italic: italic,
  fontWeight: css("fontWeight"),
  numericFontVariant: css("fontVariantNumeric"),
  letterSpacing: css("letterSpacing", "typography.letterSpacing"),
  lineHeight: css("lineHeight", "typography.lineHeight"),
  listStyle: css("listStyleType"),
  listStylePosition: css("listStylePosition"),
  placeholderColor: placeholderColor,
  placeholderOpacity: placeholderOpacity,
  textAlign: textAlign,
  textColor: colorize("color", "--so-text-opacity"),
  textOpacity: opacity("--so-text-opacity"),
  textDecoration: css("textDecoration"),
  textTransform: css("textTransform"),
  textOverflow: textOverflow,
  verticalAlign: css("verticalAlign"),
  whiteSpace: css("whiteSpace"),
  wordBreak: wordBreak,
  textColumns: css("columnCount"),
  textColumnsGap: css("gap", "spacing.positive"),
  textShadow: textShadow,
  textShadowColor: colorize("--so-text-shadow-color"),
  textShadowBlur: textShadowBlur
};
