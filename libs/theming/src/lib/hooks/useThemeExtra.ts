import { useDarkMode } from "../providers/DarkModeProvider"
import { useTheme } from "./useTheme"

export function useThemeExtra(key: string)
{
  const theme = useTheme()
  const darkMode = useDarkMode()

  return darkMode ? (theme["darkModeOverride"]?.["extras"]?.[key] ?? theme["extras"]?.[key]) : theme["extras"]?.[key]
}
