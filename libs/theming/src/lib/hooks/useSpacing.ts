import { Spacing } from "../CSSTypes";
import { useThemeProperty } from "./useThemeProperty";

export function useSpacing(value: Spacing)
{
  return useThemeProperty("spacing.positiveNegative", value)
}
