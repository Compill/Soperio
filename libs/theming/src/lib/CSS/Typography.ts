import { Blur, Color, Font, TextSize, LetterSpacing, LineHeight, Opacity, Spacing, SpacingPositive, TextShadow, TextShadowBlur, TextDecorationThickness } from "../CSSTypes";
import { OrString } from "@soperio/utils";

export interface Typography
{
  font?: false | Font,
  textSize?: false | TextSize,
  italic?: true | false | "no",
  fontWeight?: false | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900",
  numericFontVariant?: false | "normal-nums" | "ordinal" | "slashed-zero" | "lining-nums" | "oldstyle-nums" | "proportional-nums" | "tabular-nums" | "diagonal-fractions" | "stacked-fractions",
  letterSpacing?: false | LetterSpacing,
  lineHeight?: false | LineHeight,
  listStyle?: false | "none" | "disc" | "decimal",
  listStylePosition?: false | "inside" | "outside",
  placeholderColor?: false | Color,
  placeholderOpacity?: false | Opacity,
  textAlign?: false | "start" | "center" | "end" | "justify",
  /**
   * Utilities for controlling the text color of an element.
   */
  textColor?: false | Color,
  textIndent?: false | SpacingPositive
  textDecoration?: false | "underline" | "line-through" | "no-underline",
  textDecorationColor?: false | Color
  textDecorationStyle?: false | "solid" | "double" | "dotted" | "dashed" | "wavy"
  textDecorationThickness?: false | "auto" | "from-font" | TextDecorationThickness
  textUnderlineOffset?: false | "auto" | SpacingPositive
  textOpacity?: false | Opacity,
  textTransform?: false | "uppercase" | "lowercase" | "capitalize" | "normal-case",
  textOverflow?: false | "truncate" | "ellipsis" | "clip",
  verticalAlign?: false | "baseline" | "top" | "middle" | "bottom" | "text-top" | "text-bottom",
  whiteSpace?: false | "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap",
  wordBreak?: false | "normal" | "words" | "all",
  textColumns?: false | OrString<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8">,
  /**
   * Alias for "gap"
   * Gap between the text columns
   */
  textColumnsGap?: false | SpacingPositive;
  textShadow?: false | TextShadow | Spacing | "none"
  textShadowColor?: false | Color
  textShadowBlur?: false | TextShadowBlur | Spacing | "none"

  antialias?: false | true | "subpixel"

  lineClamp?: false | OrString<"none" | "1" | "2" | "3" | "4" | "5" | "6">

  /**
   * Use line break suggestion &shy; in your text in addition to this prop
   */
  hyphens?: false | "none" | "manual" | "auto"
}
