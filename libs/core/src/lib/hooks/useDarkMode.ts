import { IS_DEV } from "@soperio/utils";
import React from "react";
import { getThemeStyle } from "../CSS/utils";
import { transformColorToGlobalVar } from "../PropTypes/Color";
import { RootColors } from "../ThemeTypes";
import { useTheme } from "./useTheme";

interface DarkModeListener
{
  (darkMode: boolean): void;
}

// This var will be initialized with the right value by a call
// to useSetDarkMode() in SoperioInit
// Since I can't find another, and not everything can ve initialized
// the react way, we need a "Initiliazer component" (SoperioInit)
// Other libraries are using a Provider component, but since we're not
// using any React.Context, I don't see the point of adding extra
// complexity to the app
let darkModeInternal = false; // // TODO Get value from theme?
const listeners: DarkModeListener[] = [];

// For usage in color props, in this library only
export function getDarkMode(): boolean
{
  return darkModeInternal;
}

function setDarkModeInternal(darkMode: boolean)
{
  darkModeInternal = darkMode;

  listeners.forEach(item => item(darkModeInternal));
}

function toggleDarkModeInternal()
{
  setDarkModeInternal(!darkModeInternal);
}

function addListener(listener: DarkModeListener)
{
  listeners.push(listener);
}

function removeListener(listener: DarkModeListener)
{
  const index = listeners.indexOf(listener);

  if (index > -1)
    listeners.splice(index, 1);

}

const ROOT_COLORS_STYLE_ID = "soperio-root-colors"

export function useDarkMode()
{
  const theme = useTheme();

  const [darkMode, setDarkMode] = React.useState(darkModeInternal);
  const cb = React.useCallback((darkMode) => setDarkMode(darkMode), [setDarkMode]);

  React.useEffect(() =>
  {
    addListener(cb);

    return () =>
    {
      removeListener(cb);
    };
  }, []);

  React.useEffect(() =>
  {

    if (!theme.rootColors && IS_DEV)
      console.log("[Soperio Core]: Your theme is invalid and is missing the \"rootColors\" property object");

    const rootColors: RootColors = { ...theme.rootColors, ...(darkMode ? theme.darkModeOverride?.rootColors : null) };

    let css = ":root {\n";

    for (const cssVar in rootColors)
    {
      const color: string = rootColors[cssVar] as string;

      let parsedColor = getThemeStyle("colors", color) || color;

      parsedColor = transformColorToGlobalVar(parsedColor);

      if (parsedColor)
        css += `\t--so-${cssVar}: ${parsedColor};\n`;
    }

    css += "}";

    // Inserting style tag with root colors
    // removing existing if any
    const existingStyleTag = document.getElementById(ROOT_COLORS_STYLE_ID)

    if (existingStyleTag != null)
      document.head.removeChild(existingStyleTag);

    const styleEl = document.createElement("style");
    styleEl.id = ROOT_COLORS_STYLE_ID;
    styleEl.appendChild(document.createTextNode(""));
    styleEl.innerHTML = css;
    document.head.appendChild(styleEl);

  }, [theme, darkMode])

  return darkMode;
}

export function useSetDarkMode()
{
  const cb = React.useCallback((darkMode) => setDarkModeInternal(darkMode), []);

  return cb;
}

export function useToggleDarkMode()
{
  const cb = React.useCallback(() => toggleDarkModeInternal(), []);

  return cb;
}
