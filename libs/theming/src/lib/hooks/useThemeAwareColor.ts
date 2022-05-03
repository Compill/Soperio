import { Color } from "../CSSTypes"; 
import { useColor } from "./useColor"; 
import { useDarkMode } from "./useDarkMode"; 

export function useThemeAwareColor(lightThemeColor: Color, darkThemeColor: Color)
{
    const lightColor = useColor(lightThemeColor)
    const darkColor = useColor(darkThemeColor)
    const darkMode = useDarkMode()

    return darkMode ? darkColor : lightColor
}