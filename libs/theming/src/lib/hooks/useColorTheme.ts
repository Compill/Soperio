import { IS_DEV } from "@soperio/utils";
import { ColorTheme } from "../ColorTheme";
import { ThemeCache } from "../ThemeCache";
import { getColor } from "../utils/utils";
import { useDarkMode } from "./useDarkMode";
import { useTheme } from "./useTheme";

const CACHE_TYPE = "colorTheme"

export function useColorTheme(colorTheme?: false | string | ColorTheme): ColorTheme
{
  const theme = useTheme();
  const darkMode = useDarkMode();

  if (!colorTheme || typeof colorTheme === "string")
  {
    if (darkMode)
    {
      const darkThemeColor = theme?.darkModeOverride?.colorThemes?.[colorTheme || "default"];

      if (darkThemeColor)
        return processTheme(darkThemeColor);
    }

    const indexedColorTheme = theme.colorThemes[colorTheme || "default"];

    if (!indexedColorTheme)
    {
      if (IS_DEV)
        console.log(`[Soperio]: the color theme ${colorTheme} does not exist in your theme.`);
    }

    return processTheme(indexedColorTheme) || {};
  }

  return processTheme(colorTheme);
}

function processTheme(colorTheme: ColorTheme)
{
  const processedColorTheme = { ...colorTheme } as any

  Object.keys(colorTheme).forEach(key =>
  {
    const cacheKey = `${key}${(colorTheme as any)[key]}`

    const cached = ThemeCache.get().get(CACHE_TYPE, cacheKey)

    if (cached)
    {
      processedColorTheme[key] = cached
    }
    else
    {
      const color = processColor((colorTheme as any)[key])
      ThemeCache.get().put(CACHE_TYPE, cacheKey, color)
      processedColorTheme[key] = color
    }
  })

  return processedColorTheme
}

function processColor(color: string)
{
  const parsedColor = getColor(color)

  if (parsedColor)
    return parsedColor

  color = color.trim();

  if (color === 'transparent')
    return color;

  if (color.startsWith("root."))
  {
    return `var(--so-${color.substring(5)})` // Remove "root." prefix, and convert to CSS var 
  }

  return color
}