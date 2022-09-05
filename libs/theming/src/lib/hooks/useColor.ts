import { IS_DEV } from "@soperio/utils";
import { Color } from "../CSSTypes";
import { useTheme } from "./useTheme";

export function useColor(color: Color): string
{
  const theme = useTheme();

  if (theme.colors[color])
    return theme.colors[color];

  if (color.startsWith("root.") && theme.rootColors[color.substring(5)])
    return `rgb(var(--so-${color.substring(5)}))`
  else if (color.startsWith("root.") && IS_DEV)
    console.warn(`[SOPERIO] You seem to want to use root color "${color.substring(5)}" but it doesn't exist in your theme`)

  // Can be transparent, blue, #FF0000, rgb(x, x, x), ...
  return color;
}
