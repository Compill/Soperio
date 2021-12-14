import React from "react";
import { useSetDarkMode } from "./hooks/useDarkMode";
import { NormalizeCSS } from "./NormalizeCSS";
import { Theme } from "./Theme";
import { defaultTheme } from "./defaultTheme"; // TODO extract to its own file since this will rewritten by CLI
// TODO rename as theme, not config


type SoperioInitProps = {
  resetCss?: boolean,
  theme?: Theme,
  darkMode?: "light" | "dark" | "system";
};

export function SoperioInit({
  resetCss = true,
  theme = defaultTheme,
  darkMode
}: SoperioInitProps)
{
  // TODO define theme if set


  const setDarkMode = useSetDarkMode();
  console.log("soperio init");

  let initDarkMode = true;

  if (darkMode)
  {
    if (darkMode === "dark")
      initDarkMode = false;
    else if (darkMode === "system")
    {
      // TODO
    }
  }

  setDarkMode(initDarkMode);

  return resetCss ? <NormalizeCSS /> : null;
}
