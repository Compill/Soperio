import { Blur, Color, Font, FontSize, LetterSpacing, LineHeight, Opacity, Spacing, SpacingPositive, TextShadow, TextShadowBlur } from "../CSSTypes";
import { OrString } from "@soperio/utils";

export interface Typography
{
  font?: false | Font,
  fontSize?: false | FontSize,
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
  textDecoration?: false | "underline" | "line-through" | "no-underline",
  textOpacity?: false | Opacity,
  textTransform?: false | "uppercase" | "lowercase" | "capitalize" | "normal-case",
  textOverflow?: false | "truncate" | "overflow-ellipsis" | "overflow-clip",
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
}
