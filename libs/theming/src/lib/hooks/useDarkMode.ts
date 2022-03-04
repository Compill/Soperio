import { IS_DEV } from "@soperio/utils";
import React from "react";
import { getThemeStyle } from "../utils/utils";
import { RootColors } from "../ThemeTypes";
import { transformColorToGlobalVar } from "../utils/colorUtils";
import { getTheme } from "./useTheme";

type DarkMode = "light" | "dark" | "system";

interface DarkModeListener
{
  (darkMode: boolean): void;
}

interface DarkModeConfigListener
{
  (darkMode: DarkMode): void;
}

// This var will be initialized with the right value by a call
// to useSetDarkMode() in SoperioInit
// Since I can't find another, and not everything can ve initialized
// the react way, we need a "Initiliazer component" (SoperioInit)
// Other libraries are using a Provider component, but since we're not
// using any React.Context, I don't see the point of adding extra
// complexity to the app

let darkModeInternal = false;
const listeners: DarkModeListener[] = [];
const configListeners: DarkModeConfigListener[] = [];

let darkModeConfigInternal = getTheme().darkMode;
let firstRender = false;

setDarkModeConfigInternal(darkModeConfigInternal);

function isSystemDark()
{
  const mediaQueryList = window.matchMedia?.("(prefers-color-scheme: dark)");
  if (!mediaQueryList)
  {
    return undefined;
  }
  return !!mediaQueryList.media === mediaQueryList.matches;
}

function setDarkModeConfigInternal(darkMode: DarkMode)
{
  if (darkModeConfigInternal !== darkMode || !firstRender)
  {
    darkModeConfigInternal = darkMode;

    if (darkMode === "dark")
      setDarkModeInternal(true);
    else if (darkMode === "light")
      setDarkModeInternal(false);
    else
      setDarkModeInternal(isSystemDark() || false);

    configListeners.forEach(item => item(darkModeConfigInternal));
  }
}

// For usage in color props, in this library only
export function getDarkMode(): boolean
{
  return darkModeInternal;
}

export function getDarkModeConfig(): DarkMode
{
  return darkModeConfigInternal;
}

function setDarkModeInternal(darkMode: boolean)
{
  if (darkModeInternal !== darkMode)
  {
    darkModeInternal = darkMode;

    replaceRootColors();

    listeners.forEach(item => item(darkModeInternal));
  }

  if (!firstRender)
  {
    firstRender = true;
    replaceRootColors();
  }
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

function addConfigListener(listener: DarkModeConfigListener)
{
  configListeners.push(listener);
}

function removeConfigListener(listener: DarkModeConfigListener)
{
  const index = configListeners.indexOf(listener);

  if (index > -1)
    listeners.splice(index, 1);
}


function replaceRootColors()
{
  const ROOT_COLORS_STYLE_ID = "soperio-root-colors";

  const theme = getTheme();

  if (!theme.rootColors && IS_DEV)
    console.log("[Soperio Core]: Your theme is invalid and is missing the \"rootColors\" property object");

  const rootColors: RootColors = { ...theme.rootColors, ...(darkModeInternal ? theme.darkModeOverride?.rootColors : null) };

  let css = ":root {\n";

  for (const cssVar in rootColors)
  {
    const color: string = rootColors[cssVar] as string;

    let parsedColor = getThemeStyle("colors", color) || color;

    parsedColor = transformColorToGlobalVar(parsedColor);

    if (parsedColor)
      css += `\t--so-${cssVar}: ${parsedColor};\n`;
  }

  // Filters default vars
  css += `\t--so-filter-blur: ;\n`;
  css += `\t--so-filter-brightness: ;\n`;
  css += `\t--so-filter-contrast: ;\n`;
  css += `\t--so-filter-drop-shadow: ;\n`;
  css += `\t--so-filter-grayscale: ;\n`;
  css += `\t--so-filter-hue-rotate: ;\n`;
  css += `\t--so-filter-invert: ;\n`;
  css += `\t--so-filter-saturate: ;\n`;
  css += `\t--so-filter-sepia: ;\n`;

  css += `\t--so-backdrop-filter-blur: ;\n`;
  css += `\t--so-backdrop-filter-brightness: ;\n`;
  css += `\t--so-backdrop-filter-contrast: ;\n`;
  css += `\t--so-backdrop-filter-grayscale: ;\n`;
  css += `\t--so-backdrop-filter-hue-rotate: ;\n`;
  css += `\t--so-backdrop-filter-invert: ;\n`;
  css += `\t--so-backdrop-filter-opacity: ;\n`;
  css += `\t--so-backdrop-filter-saturate: ;\n`;
  css += `\t--so-backdrop-filter-sepia: ;\n`;

  css += "}";

  const canUseDOM = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );

  // If Soperio is used Server-Side (Next/Gatsby/...)
  // document is not available so wait until the code
  // is rendered on the client side
  if (canUseDOM)
  {
    // Inserting style tag with root colors
    // removing existing if any
    const existingStyleTag = document.getElementById(ROOT_COLORS_STYLE_ID);

    if (existingStyleTag != null)
      document.head.removeChild(existingStyleTag);

    const styleEl = document.createElement("style");
    styleEl.id = ROOT_COLORS_STYLE_ID;
    styleEl.appendChild(document.createTextNode(""));
    styleEl.innerHTML = css;
    document.head.appendChild(styleEl);
  }
}

export function useDarkMode()
{
  const [darkMode, setDarkMode] = React.useState(darkModeInternal);
  const cb = React.useCallback((darkMode: boolean) => setDarkMode(darkMode), [setDarkMode]);

  React.useEffect(() =>
  {
    addListener(cb);

    return () =>
    {
      removeListener(cb);
    };
  }, [cb]);

  return darkMode;
}

export function useDarkModeConfig()
{
  const [darkMode, setDarkMode] = React.useState(darkModeConfigInternal);
  const cb = React.useCallback((darkMode: DarkMode) => setDarkMode(darkMode), [setDarkMode]);

  React.useEffect(() =>
  {
    addConfigListener(cb);

    return () =>
    {
      removeConfigListener(cb);
    };
  }, [cb]);

  return darkMode;
}

export function useSetDarkMode()
{
  const cb = React.useCallback((darkMode: boolean) => setDarkModeInternal(darkMode), []);

  return cb;
}

export function useSetDarkModeConfig()
{
  const cb = React.useCallback((darkMode: DarkMode) => setDarkModeConfigInternal(darkMode), []);

  return cb;
}

export function useToggleDarkMode()
{
  const cb = React.useCallback(() => toggleDarkModeInternal(), []);

  return cb;
}
