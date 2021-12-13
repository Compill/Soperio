import React from "react";
import { useSetDarkMode } from "./hooks/useDarkMode";
import { NormalizeCSS } from "./NormalizeCSS";
import { SoperioConfig } from "./defaultConfig";
import config from "./defaultConfig"; // TODO extract to its own file since this will rewritten by CLI
// TODO rename as theme, not config


type SoperioInitProps = {
  resetCss?: boolean,
  theme?: SoperioConfig,
  darkMode?: "light" | "dark" | "system";
};

export function SoperioInit({
  resetCss = true,
  theme = config,
  darkMode
}: SoperioInitProps)
{
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
