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
      "font-style": value === "no" ? "normal" : "italic"
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
      "text-overflow": "ellipsis",
      "white-space": "nowrap"
    };
  }

  return cssValue("text-overflow", value);
}

function wordBreak(value: any): Style
{
  if (value === "normal")
  {
    return {
      "overflow-wrap": "normal",
      "word-break": "normal",
    };
  }

  return cssValue("word-break", "break-" + value);
}

function textAlign(value: any, theme: Theme, direction: boolean, darkMode: boolean)
{
  let parsedValue = value;

  if (value === "start")
    parsedValue = direction ? "left" : "right";
  else if (value === "end")
    parsedValue = direction ? "right" : "left";

  return css("text-align")(parsedValue, theme, direction, darkMode);
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
    "text-shadow": "var(--so-text-shadow-size, 1px) var(--so-text-shadow-size, 1px) var(--so-text-shadow-blur, 0px) var(--so-text-shadow-color, #00000099)"
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
  font: css("font-family"),
  textSize: css("font-size", "typography.textSize"),
  italic: italic,
  fontWeight: css("font-weight"),
  numericFontVariant: css("font-variant-numeric"),
  letterSpacing: css("letter-spacing", "typography.letterSpacing"),
  lineHeight: css("line-height", "typography.lineHeight"),
  listStyle: css("list-style-type"),
  listStylePosition: css("list-style-position"),
  placeholderColor: placeholderColor,
  placeholderOpacity: placeholderOpacity,
  textAlign: textAlign,
  textColor: colorize("color", "--so-text-opacity"),
  textOpacity: opacity("--so-text-opacity"),
  textDecoration: css("text-decoration"),
  textTransform: css("text-transform"),
  textOverflow: textOverflow,
  verticalAlign: css("vertical-align"),
  whiteSpace: css("white-space"),
  wordBreak: wordBreak,
  textColumns: css("column-count"),
  textColumnsGap: css("gap", "spacing.positive"),
  textShadow: textShadow,
  textShadowColor: colorize("--so-text-shadow-color"),
  textShadowBlur: textShadowBlur
};
