import { getColor, ThemeCache } from "@soperio/theming";
import { StyleFn, StyleProp } from "../CSS/utils";
import { parseColor } from "../utils/colorUtils";

const COLORIZE_CACHE_TYPE = "colorize"
const COLOR_CACHE_TYPE = "color"
const ALPHACOLOR_CACHE_TYPE = "alphaColor"


// TODO This does not parse root colors !?
export function colorize(cssProperty: string, alphaVarName?: string): StyleFn
{
  return (value: StyleProp) =>
  {
    if (!value || value === true || typeof value === "number")
      return {};

    const styleKey = `${cssProperty}${alphaVarName}${value}`

    const s = ThemeCache.get().get(COLORIZE_CACHE_TYPE, styleKey);
    if (s)
      return s

    let style = {}

    let key = `color-${value}`
    let parsedColor = ThemeCache.get().get(COLOR_CACHE_TYPE, key);

    if (!parsedColor)
    {
      parsedColor = getColor(value) || value
      ThemeCache.get().put(COLOR_CACHE_TYPE, key, parsedColor);
    }

    if (alphaVarName)
    {
      key = `alphacolor-${value}${alphaVarName}`
      let alphaColor = ThemeCache.get().get(ALPHACOLOR_CACHE_TYPE, key);

      if (!alphaColor)
      {
        alphaColor = parseColor(parsedColor, alphaVarName)
        ThemeCache.get().put(ALPHACOLOR_CACHE_TYPE, key, alphaColor);
      }

      style = {
        [alphaVarName]: 1,
        "remove_if_variant": alphaVarName,
        [cssProperty]: alphaColor
      };
    }
    else
    {
      style = {
        [cssProperty]: parsedColor
      }
    }

    ThemeCache.get().put(COLORIZE_CACHE_TYPE, styleKey, style);

    return style
  }
}
