import { Theme } from "@soperio/theming";
import { colorize } from "../PropTypes/Color";
import { opacity } from "../PropTypes/Opacity";
import { css, cssValue, Style, StyleProps } from "./utils";

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


export const TypographyMapping: StyleProps =
{
  font: css("font-family"),
  fontSize: css("font-size", "typography.fontSize"),
  italic: css("font-style", undefined, "italic"),
  notItalic: css("font-style", undefined, "normal"),
  fontWeight: css("font-weight"),
  numericFontVariant: css("font-variant-numeric"),
  letterSpacing: css("letter-spacing", "typography.letterSpacing"),
  lineHeight: css("line-height", "typography.lineHeight"),
  listStyle: css("list-style-type"),
  listStylePosition: css("list-style-position"),
  placeholderColor: placeholderColor,
  placeholderOpacity: opacity("--so-placeholder-opacity"),
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
};
