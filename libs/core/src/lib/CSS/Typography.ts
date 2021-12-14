import { Color, colorize } from "../PropTypes/Color";
import { opacity, Opacity } from "../PropTypes/Opacity";
import { css, cssValue, getThemeStyle, OrString, Style, StyleProps } from "./utils";

export interface Typography
{
    font?: "sans" | "serif" | "mono",
    fontSize?: OrString<"xs" | "sm" | "md" | "lg" | "xl" | "x2" | "x3" | "x4" | "x5" | "x6" | "x7" | "x8" | "x9" | "base">,
    italic?: boolean,
    notItalic?: boolean;
    // TODO alias for not-italic
    // normal?: boolean,
    fontWeight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900",
    numericFontVariant?: "normal-nums" | "ordinal" | "slashed-zero" | "lining-nums" | "oldstyle-nums" | "proportional-nums" | "tabular-nums" | "diagonal-fractions" | "stacked-fractions",
    letterSpacing?: "tighter" | "tight" | "normal" | "wide" | "wider" | "widest",
    lineHeight?: OrString<"3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "none" | "tight" | "snug" | "normal" | "relaxed" | "loose">,
    listStyle?: "none" | "disc" | "decimal",
    listStylePosition?: "inside" | "outside",
    placeholderColor?: Color,
    placeholderOpacity?: Opacity,
    textAlign?: "left" | "center" | "right" | "justify",
    /**
     * Utilities for controlling the text color of an element.
     */
    textColor?: Color,
    textDecoration?: "underline" | "line-through" | "no-underline",
    textOpacity?: Opacity,
    textTransform?: "uppercase" | "lowercase" | "capitalize" | "normal-case",
    textOverflow?: "truncate" | "overflow-ellipsis" | "overflow-clip",
    verticalAlign?: "baseline" | "top" | "middle" | "bottom" | "text-top" | "text-bottom",
    whitespace?: "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap",
    wordBreak?: "normal" | "words" | "all",
}

function fontSize(value: any): Style
{
    const themeValue:any = getThemeStyle("typography.fontSize", value);

    if (themeValue)
    {
        return {
            "font-size": themeValue[0],
            "line-height": themeValue[1]
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
        }
    }

    return cssValue("text-overflow", value)
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


export const TypographyMapping: StyleProps =
{
    font: css("font-family"),
    fontSize: fontSize,
    italic: css("font-style", undefined, "italic"),
    notItalic: css("font-style", undefined, "normal"),
    fontWeight: css("font-weight"),
    numericFontVariant: css("font-variant-numeric"),
    letterSpacing: css("tracking", "typography.letterSpacing"),
    lineHeight: css("line-height", "typography.lineHeight"),
    listStyle: css("list-style-type"),
    listStylePosition: css("list-style-position"),
    placeholderColor: colorize("::placeholder", "--so-placeholder-opacity"),
    placeholderOpacity: opacity("--so-placeholder-opacity"),
    textAlign: css("text-align"),
    textColor: colorize("color", "--so-text-opacity"),
    textOpacity: opacity("--so-text-opacity"),
    textDecoration: css("text-decoration"),
    textTransform: css("text-transform"),
    textOverflow: textOverflow,
    verticalAlign: css("vertical-align"),
    whitespace: css("white-space"),
    wordBreak: wordBreak
};
