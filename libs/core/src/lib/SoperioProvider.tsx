/** @jsx jsx */

import { jsx } from "./react/react";
import { ParentComponent, useSetTheme } from "..";
import { defaultTheme } from "./defaultTheme";
import { useSetDarkMode, useSetDarkModeConfig } from "./hooks/useDarkMode";
import { useSetDirection } from "./hooks/useDirection";
import { NormalizeCSS } from "./NormalizeCSS";
import { Theme } from "./Theme";
import React from "react";


interface SoperioProviderProps extends ParentComponent
{
  resetCss?: boolean,
  theme?: Theme,
  darkMode?: "light" | "dark" | "system";
  direction?: "rtl" | "ltr"
};

// SoperioProvider is out initializer
// Devs must add it to their code and put the components as children
export function SoperioProvider({
  resetCss = true,
  theme = defaultTheme,
  direction,
  darkMode,
  children
}: SoperioProviderProps) 
{
  // TODO define theme if set

  console.log("SoperioProvider")

  const ref = React.useRef(0);
  const setTheme = useSetTheme();
  const setDarkModeConfig = useSetDarkModeConfig();
  const setDirection = useSetDirection();

  // The idea is that the UI is not built yet
  // So we do the first initialization of the theme and darkMode
  // instantly, and not in useEffect
  // Otherwise, if we use useEffect, the component will be built, then our initialization
  // in useEffect will be called, meaning there might be some flickering if
  // the theme or dark mode change from its default values
  if (ref.current === 0)
  {
    setTheme(theme)
    setDarkModeConfig(darkMode || theme.darkMode)
    setDirection(direction || theme.direction || "ltr");
  }

  // Use useEffect only when theme or dark mode props change
  React.useEffect(() => 
  {
    if (ref.current === 0)
    {
      ref.current = 1
    }
    else
    {
      // Something like Soperio.initTheme(theme, darkMode)
      setTheme(theme)
      setDarkModeConfig(darkMode || theme.darkMode)
      setDirection(direction || theme.direction || "ltr");
    }
  }, [theme, setTheme, darkMode, setDarkModeConfig, direction, setDirection])

  return (
    <div>
      {resetCss ? <NormalizeCSS /> : null}
      <div dir={direction || theme.direction || "ltr"} textColor="root.text-color-1">
        {children}
      </div>
    </div>
  )
}
