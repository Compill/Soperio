import { ColorTheme } from "../ColorTheme";
import { useColorTheme } from "./useColorTheme";

export function useDefaultColorTheme(): ColorTheme
{
  return useColorTheme("default")
}
