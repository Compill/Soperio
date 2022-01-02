import { Color } from "@soperio/theming";
import { useTheme } from "./useTheme";

export function useColor(color: Color): string
{
  const theme = useTheme();

  if (theme.colors[color])
    return theme.colors[color];

  if (color.startsWith("root."))
    return `rgb(var(--so-${color.substring(5)}))`

  // Can be transparent, blue, #FF0000, rgb(x, x, x), ...
  return color;
}
