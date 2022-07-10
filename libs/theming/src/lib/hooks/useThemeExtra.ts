import { useTheme } from "./useTheme"

export function useThemeExtra(key: string)
{
  const theme = useTheme()

  return theme["extras"]?.[key]
}
