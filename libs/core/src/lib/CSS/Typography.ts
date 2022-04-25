import { getDirection } from "@soperio/theming";
import { colorize } from "../PropTypes/Color";
import { opacity } from "../PropTypes/Opacity";
import { css, cssValue, Style, StyleProps } from "./utils";
import { getThemeStyle } from "@soperio/theming";

function fontSize(value: any): Style
{
  const themeValue: any = getThemeStyle("typography.fontSize", value);

  if (themeValue)
  {
    return {
      "font-size": themeValue[0],
      "line-height": themeValue[1] ?? "normal"
    };
  }

  return { "font-size": value };
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

function textAlign(value: any)
{
  let parsedValue = value;

  if (value === "start")
    parsedValue = getDirection() ? "left" : "right";
  else if (value === "end")
    parsedValue = getDirection() ? "right" : "left";

  return css("text-align")(parsedValue);
}


export const TypographyMapping: StyleProps =
{
  font: css("font-family"),
  fontSize: fontSize,
  italic: css("font-style", undefined, "italic"),
  notItalic: css("font-style", undefined, "normal"),
  fontWeight: css("font-weight"),
  numericFontVariant: css("font-variant-numeric"),
  letterSpacing: css("letter-spacing", "typography.letterSpacing"),
  lineHeight: css("line-height", "typography.lineHeight"),
  listStyle: css("list-style-type"),
  listStylePosition: css("list-style-position"),
  placeholderColor: colorize("::placeholder", "--so-placeholder-opacity"),
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
