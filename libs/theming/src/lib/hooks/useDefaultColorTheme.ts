import { ColorTheme } from "../ColorTheme";
import { useTheme } from "./useTheme";

export function useDefaultColorTheme(): ColorTheme
{
  const theme = useTheme();

  return theme.colorThemes.default
}
