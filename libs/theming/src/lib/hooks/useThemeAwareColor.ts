import { Color } from "../CSSTypes"; 
import { useDarkMode } from "../providers/DarkModeProvider";
import { useColor } from "./useColor"; 

export function useThemeAwareColor(lightThemeColor: Color, darkThemeColor: Color)
{
    const lightColor = useColor(lightThemeColor)
    const darkColor = useColor(darkThemeColor)
    const darkMode = useDarkMode()

    return darkMode ? darkColor : lightColor
}