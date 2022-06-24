import { IS_DEV } from "@soperio/utils";
import { SurfaceSchemeSet } from "../SurfaceScheme";
import { ThemeCache } from "../ThemeCache";
import { ThemingToken } from "../ThemingToken";
import { getColor } from "../utils/utils";
import { useDarkMode } from "./useDarkMode";
import { useTheme } from "./useTheme";

const CACHE_TYPE = "surfaceSheme"

const DEFAULT_SURFACE_KEY = "primary"

// Extract is a hack because typescript returns number | string for type keyof
export function useSurface(surface?: false | Extract<keyof ThemingToken<"surfaces">, string> | SurfaceSchemeSet): SurfaceSchemeSet
{
  const theme = useTheme();
  const darkMode = useDarkMode();

  if (!surface || typeof surface === "string")
  {
    if (darkMode)
    {
      const darkThemeSurface = theme?.darkModeOverride?.surfaces?.[surface || DEFAULT_SURFACE_KEY];

      if (darkThemeSurface)
        return processSurface(darkThemeSurface);
    }

    const indexedSurface = theme.surfaces[surface || DEFAULT_SURFACE_KEY];

    if (!indexedSurface)
    {
      if (IS_DEV)
        console.warn(`[Soperio]: the surface ${surface} does not exist in your theme.`);
    }

    return indexedSurface || {};
    // return processSurface(indexedSurface || {});
  }

  return surface;
  // return surface ? processSurface(surface) : surface;
}

function processSurface(surface: SurfaceSchemeSet)
{
  const processedSurface = { ...surface } as any

  Object.keys(surface).forEach(key =>
  {
    const cacheKey = `${key}${(surface as any)[key]}`

    const cached = ThemeCache.get().get(CACHE_TYPE, cacheKey)

    if (cached)
    {
      processedSurface[key] = cached
    }
    else
    {
      // TODO There are one or two levels: color or SurfaceColorSet
      const color = processColor((surface as any)[key])
      ThemeCache.get().put(CACHE_TYPE, cacheKey, color)
      processedSurface[key] = color
    }
  })

  return processedSurface
}

// Should I process colors from Surfaces or not
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
