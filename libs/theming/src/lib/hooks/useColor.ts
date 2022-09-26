import { IS_DEV } from "@soperio/utils";
import { Color } from "../CSSTypes";
import { useTheme } from "./useTheme";

export function useColor(color: Color): string
{
  const theme = useTheme();

  if (theme.colors[color])
    return theme.colors[color];

  // We don't need to check for darkMode since root colors are not managed the same way as colors
  // But are handled as CSS vars. Thus, whether dark mode or not, they are only referenced by name
  // and we are not looking to parse their values
  if (color.startsWith("--") && theme.rootColors[color.substring(2)])
    return `rgb(var(--so-${color.substring(2)}))`
  else if (color.startsWith("--") && IS_DEV)
    console.warn(`[SOPERIO] You seem to want to use root color "${color.substring(2)}" but it doesn't exist in your theme`)

  // Can be transparent, blue, #FF0000, rgb(x, x, x), ...
  return color;
}
